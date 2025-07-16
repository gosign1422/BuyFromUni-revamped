<template>
  <div class="max-w-4xl mx-auto px-4 py-12 mt-4">
    <h1 class="text-3xl font-bold text-spotify-green mb-6">{{ title }}</h1>
    <div class="prose prose-lg max-w-none text-white">
      <p class="mb-4">{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'Privacy Policy';
const content = `At BuyFromUni, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.

We collect basic information such as your name, email, and phone number solely for order processing and delivery purposes. Your payment information is handled securely through our trusted payment partners.

We never share your personal information with third parties except when necessary for order fulfillment. You can request to view, modify, or delete your personal data at any time by contacting us.`;
</script> 