<template>
  <div class="max-w-4xl mx-auto px-4 py-12 mt-4">
    <h1 class="text-3xl font-bold text-spotify-green mb-6">{{ title }}</h1>
    <div class="prose prose-lg max-w-none text-white">
      <p class="mb-4">{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'Shipping Policy';
const content = `We offer convenient delivery within UPES Bidholi campus. Orders are typically delivered within 1-2 working days.

For special circumstances or bulk orders, delivery timelines may vary. We'll keep you updated about your order status via WhatsApp or email.

Currently, we only serve the UPES Bidholi campus community. Meet-up delivery locations will be coordinated after order confirmation.`;
</script> 