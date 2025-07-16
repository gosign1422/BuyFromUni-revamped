<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="relative">
          <img
            src="https://picsum.photos/600/800"
            :alt="product.name"
            class="w-full rounded-lg shadow-lg"
          />
        </div>
        <div class="space-y-6">
          <h1 class="text-3xl font-bold">{{ product.name }}</h1>
          <p class="text-2xl text-gray-700">₹{{ product.price }}</p>
          <div class="space-y-4">
            <h2 class="text-xl font-semibold">Product Details</h2>
            <p class="text-gray-600">{{ product.description }}</p>
          </div>
          <button class="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const product = ref({
  id: 1,
  name: 'Designer Handbag',
  price: 299.99,
  description: 'Luxurious designer handbag made from premium materials. Perfect for any occasion.',
  image: 'https://picsum.photos/600/800'
})
</script>