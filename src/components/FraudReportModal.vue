<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="modal">
      <h3>Report Submitted</h3>
      <p>Your report has been successfully submitted!</p>
      <button @click="close">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FraudReportModal', // Ensure multi-word component name
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
}
</style>
