const SitemapGenerator = require('sitemap-generator');

// Create generator
const generator = SitemapGenerator('https://touristguards.com', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml',  // Path where the sitemap will be stored
  maxEntriesPerFile: 50000,          // Number of URLs per sitemap file
  priorityMap: [1.0, 0.8, 0.6, 0.4]  // Sitemap priority for pages
});

// Start the crawler
generator.start();

generator.on('done', () => {
  console.log('Sitemap generated!');
});
