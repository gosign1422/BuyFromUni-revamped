<template>
  <router-link
    :to="`/product/${product.id}`"
    class="bg-spotify-black rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 border border-spotify-green"
  >
    <div class="relative aspect-square">
      <img
        :src="product.image_url || 'https://picsum.photos/800/800'"
        :alt="product.name"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div v-if="product.discount" class="absolute top-2 right-2 bg-spotify-green text-spotify-black px-3 py-1 rounded-full text-sm font-medium">
        -{{ product.discount }}%
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-semibold text-spotify-green group-hover:underline transition-colors">
        {{ product.name }}
      </h3>
      <p class="text-spotify-green text-sm mt-1">{{ product.condition }}</p>
      <div class="flex items-center justify-between mt-2">
        <span class="text-spotify-green font-bold">₹{{ product.sale_price || product.price }}</span>
        <span v-if="product.sale_price" class="text-spotify-green text-sm line-through">
          ₹{{ product.price }}
        </span>
      </div>
      <p class="text-spotify-green text-sm mt-2">{{ product.category }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    id: string
    name: string
    price: number
    sale_price?: number
    discount?: number
    condition: string
    category: string
    image_url?: string
  }
}>()
</script>