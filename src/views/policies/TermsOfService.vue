<template>
  <div class="max-w-4xl mx-auto px-4 py-12 mt-4">
    <h1 class="text-3xl font-bold text-spotify-green mb-6">{{ title }}</h1>
    <div class="prose prose-lg max-w-none text-white">
      <p class="mb-4">{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'Terms of Service';
const content = `By using BuyFromUni, you agree to these terms of service. Our platform is for personal, non-commercial use by UPES students.

All products listed are subject to availability. We reserve the right to modify prices and product information without notice. Orders are confirmed only after payment verification.

Users must provide accurate information for order processing. Any misuse of the platform may result in account termination.`;
</script> 