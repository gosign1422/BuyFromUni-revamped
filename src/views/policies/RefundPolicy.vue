<template>
  <div class="max-w-4xl mx-auto px-4 py-12 mt-4">
    <h1 class="text-3xl font-bold text-spotify-green mb-6">{{ title }}</h1>
    <div class="prose prose-lg max-w-none text-white">
      <p class="mb-4">{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'Refund Policy';
const content = `We want you to be completely satisfied with your purchase. If you're not happy with your order, here's our refund policy:

- Items must be unused and in original condition
- Refund requests must be made within 24 hours of delivery
- Size exchanges are available subject to stock availability
- Refunds will be processed through the original payment method

Contact us immediately if you receive a damaged or incorrect item.`;
</script> 