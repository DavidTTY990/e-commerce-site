<!-- toast msg list -->
<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0">
    <ToastAlert v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
import ToastAlert from '@/components/ToastAlert.vue';

export default {
  components: {
    ToastAlert,
  },
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
