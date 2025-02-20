const fs = require('fs');
const path = require('path');
const axios = require('axios');
const googleTrends = require('google-trends-api');
require('dotenv').config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const BLOGS_PATH = path.resolve(__dirname, '../src/data/blogs.json');

// Get trending travel-related scam keywords
async function getTrendingKeywords() {
    try {
        console.log('📊 Fetching travel scam trends...');
        const response = await googleTrends.dailyTrends({
            trendDate: new Date(),
            geo: 'US',
            hl: 'en-US'
        });

        const cleanedResponse = response.replace(/^\)\]\}'/, '').trim();
        const data = JSON.parse(cleanedResponse);
        
        const keywords = new Set();
        
        if (data?.default?.trendingSearchesDays?.[0]?.trendingSearches) {
            data.default.trendingSearchesDays[0].trendingSearches.forEach(trend => {
                const mainQuery = typeof trend.title === 'object' 
                    ? trend.title.query 
                    : trend.title;
                
                if (/(travel|tourist|trip|vacation|hotel|airport)/i.test(mainQuery)) {
                    keywords.add(mainQuery);
                }

                trend.relatedQueries?.forEach(query => {
                    const relatedQuery = typeof query === 'object' 
                        ? query.query 
                        : query;
                    if (/(travel|tourist|trip|vacation|hotel|airport)/i.test(relatedQuery)) {
                        keywords.add(relatedQuery);
                    }
                });
            });
        }

        const result = Array.from(keywords)
            .filter(keyword => {
                const cleanKeyword = keyword.replace(/scam|fraud|cheat/gi, '').trim();
                return cleanKeyword && typeof cleanKeyword === 'string';
            })
            .slice(0, 5);

        console.log('🔑 Travel scam keywords:', result);
        return result.length > 0 ? result : ['travel scam', 'tourist trap', 'vacation fraud'];
        
    } catch (error) {
        console.error('❌ Trend fetch failed:', error.message);
        return ['travel scam', 'tourist trap', 'vacation fraud'];
    }
}

// Generate travel scam content
async function generateContent(keyword) {
    try {
        const prompt = `Generate detailed JSON about TRAVEL SCAMS involving ${keyword}. Include:
- Real locations
- Specific scam tactics
- Prevention tips
- Local authorities to contact
Structure: {
    "title": "string (with location emoji)",
    "date": "${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}",
    "tags": ["array of 2-3 tags"],
    "content": [{
        "subtitle": "string",
        "text": "string (300-500 chars)"
    }],
    "tips": [{
        "tip_title": "string",
        "tip": "string (100-150 chars)"
    }]
}`;

        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-4',
            messages: [{
                role: 'system',
                content: `You are a travel safety expert. STRICTLY include:
1. Real city/country names
2. Current scam tactics (2020-2024)
3. Local emergency numbers
4. Prevention methods
REJECT non-travel content`
            }, {
                role: 'user', 
                content: prompt
            }],
            temperature: 0.5,
            max_tokens: 1500
        }, {
            headers: { 
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const content = response.data.choices[0].message.content;
        const jsonString = content.replace(/```json|```/g, '').trim();
        const result = JSON.parse(jsonString);

        if (!/(🏨|🏖️|🚕|✈️|🛂)/.test(result.title) || !result.content.some(c => /(\+?\d{1,3}[- ]?)?\d{3}[- ]?\d{3}/.test(c.text))) {
            throw new Error('Missing required scam elements');
        }

        return result;
        
    } catch (error) {
        console.error('⚠️ Generation failed:', error.message);
        return null;
    }
}

// Save content with validation
function saveContent(data) {
    try {
        if (!data || !data.title || !Array.isArray(data.content)) {
            throw new Error('Invalid content structure');
        }

        // Create directory if missing
        const dir = path.dirname(BLOGS_PATH);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        let existingData = [];
        if (fs.existsSync(BLOGS_PATH)) {
            const fileContent = fs.readFileSync(BLOGS_PATH, 'utf-8');
            existingData = JSON.parse(fileContent || '[]');
        }

        data.id = existingData.length + 1;
        existingData.push(data);

        fs.writeFileSync(BLOGS_PATH, JSON.stringify(existingData, null, 2));
        console.log(`💾 Saved: ${data.title}`);
        
    } catch (error) {
        console.error('🚨 Save error:', {
            error: error.message,
            path: BLOGS_PATH,
            data: data ? {
                title: data.title,
                contentLength: data.content?.length,
                tipsCount: data.tips?.length
            } : 'No data'
        });
    }
}

// Main execution
async function main() {
    try {
        console.log('🚀 Starting travel scam generator...');
        const keywords = await getTrendingKeywords();
        
        for (const [index, keyword] of keywords.slice(0, 3).entries()) {
            console.log(`\n🔧 Processing ${index + 1}/${Math.min(keywords.length, 3)}: ${keyword}`);
            const content = await generateContent(keyword);
            if (content) {
                await saveContent(content);
            }
        }
        
        console.log('\n✅ Process completed. Check blogs.json');
        
    } catch (error) {
        console.error('💥 Critical failure:', error.message);
    }
}

main();