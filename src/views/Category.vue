<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="text-3xl font-bold mb-8">{{ $route.params.id }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div v-for="product in products" :key="product.id" 
             class="group cursor-pointer">
          <div class="relative overflow-hidden">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              Quick View
            </div>
          </div>
          <div class="mt-4">
            <h3 class="text-lg font-semibold">{{ product.name }}</h3>
            <p class="text-gray-600">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    name: 'Designer Handbag',
    price: 299.99,
    image: 'https://picsum.photos/400/300'
  },
  {
    id: 2,
    name: 'Luxury Watch',
    price: 599.99,
    image: 'https://picsum.photos/400/301'
  }
])
</script>