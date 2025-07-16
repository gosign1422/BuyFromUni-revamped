<template>
  <div class="min-h-screen bg-spotify-black">
    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center min-h-[70vh]">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-spotify-green"></div>
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="container mx-auto px-4 py-16 text-center">
      <div class="bg-red-900 bg-opacity-30 border border-red-500 rounded-lg p-8 max-w-xl mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h2 class="text-2xl font-bold text-white mb-2">Listing Not Found</h2>
        <p class="text-gray-300 mb-6">The exchange listing you're looking for doesn't exist or has been removed.</p>
        <router-link to="/exchange" class="bg-spotify-green text-spotify-black px-6 py-3 rounded-full font-bold inline-block hover:bg-opacity-80 transition-colors">
          Back to Exchange Hub
        </router-link>
      </div>
    </div>
    
    <!-- Exchange Item Details -->
    <div v-else-if="exchange" class="container mx-auto px-4 py-8">
      <!-- Back button -->
      <div class="mb-6">
        <router-link to="/exchange" class="text-spotify-green hover:text-white inline-flex items-center transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Listings
        </router-link>
      </div>
      
      <div class="bg-spotify-black border border-spotify-green rounded-lg overflow-hidden max-w-5xl mx-auto">
        <!-- Image Gallery -->
        <div class="image-gallery">
          <!-- Main Large Image -->
          <div class="aspect-video overflow-hidden relative bg-black w-full max-h-[60vh]">
            <img 
              :src="exchange.image_urls[currentImageIndex]" 
              :alt="exchange.description" 
              class="w-full h-full object-contain"
            />
            
            <!-- Image Navigation Arrows -->
            <div v-if="exchange.image_urls.length > 1" class="absolute inset-0 flex items-center justify-between">
              <button 
                @click="prevImage" 
                class="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full ml-4 focus:outline-none transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                @click="nextImage" 
                class="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full mr-4 focus:outline-none transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <!-- Image Counter -->
            <div class="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
              {{ currentImageIndex + 1 }} / {{ exchange.image_urls.length }}
            </div>
          </div>
          
          <!-- Image Thumbnails -->
          <div v-if="exchange.image_urls.length > 1" class="flex space-x-3 overflow-x-auto py-4 px-4 scrollbar-thin bg-black bg-opacity-50">
            <div 
              v-for="(image, index) in exchange.image_urls" 
              :key="index"
              @click="currentImageIndex = index"
              class="h-20 w-20 flex-shrink-0 cursor-pointer rounded border-2 transition-all duration-200"
              :class="currentImageIndex === index ? 'border-spotify-green scale-105' : 'border-transparent opacity-70 hover:opacity-100'"
            >
              <img :src="image" class="h-full w-full object-cover rounded" />
            </div>
          </div>
        </div>
        
        <!-- Content -->
        <div class="p-6">
          <!-- Header with listing type and badges -->
          <div class="mb-6">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-spotify-green text-black px-4 py-2 rounded-full text-sm font-bold">
                {{ exchange.listing_type }}
              </span>
              <span class="bg-black bg-opacity-50 border border-spotify-green text-spotify-green px-4 py-2 rounded-full text-sm">
                {{ exchange.location }}
              </span>
              <span class="text-sm text-gray-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ formatDateLong(exchange.created_at) }}
              </span>
            </div>
          </div>
          
          <!-- Grid layout for details and contact -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Description (takes up 2/3 on desktop) -->
            <div class="md:col-span-2">
              <div class="bg-black bg-opacity-30 p-6 rounded-lg mb-6 border border-gray-800">
                <h3 class="text-xl text-spotify-green font-bold mb-3">Description</h3>
                <p class="text-white whitespace-pre-line text-lg">{{ exchange.description }}</p>
              </div>
              
              <!-- Share Section -->
              <div class="bg-black bg-opacity-30 p-6 rounded-lg border border-gray-800">
                <h3 class="text-xl text-spotify-green font-bold mb-3">Share This Listing</h3>
                
                <div class="flex items-center mb-4">
                  <input 
                    ref="shareUrlInput"
                    type="text" 
                    :value="currentUrl"
                    readonly
                    class="flex-1 bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-spotify-green focus:outline-none"
                  />
                  <button 
                    @click="copyShareUrl" 
                    class="ml-2 bg-spotify-green text-spotify-black p-3 rounded-lg hover:bg-opacity-80 transition-colors"
                  >
                    <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
                
                <div class="flex space-x-3">
                  <button 
                    @click="shareViaWhatsApp" 
                    class="bg-green-600 text-white px-4 py-2 rounded-full flex items-center text-sm hover:bg-green-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    WhatsApp
                  </button>
                  <button 
                    @click="copyShareUrl" 
                    class="bg-gray-700 text-white px-4 py-2 rounded-full flex items-center text-sm hover:bg-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Contact Information (takes up 1/3 on desktop) -->
            <div class="bg-gradient-to-r from-spotify-green/10 to-spotify-green/5 border border-spotify-green rounded-lg p-6 h-fit">
              <h3 class="text-xl text-spotify-green font-bold mb-4">Contact Information</h3>
              
              <div class="flex items-center space-x-2 mb-6">
                <!-- Show appropriate contact method icon -->
                <div v-if="isWhatsAppContact(exchange.contact)" class="bg-green-600 text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div v-else-if="isInstagramContact(exchange.contact)" class="bg-gradient-to-tr from-purple-600 to-pink-500 text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                
                <p class="text-white text-lg">{{ getDisplayContact(exchange.contact) }}</p>
              </div>
              
              <!-- Contact Button -->
              <a 
                :href="exchange.contact"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-spotify-green text-spotify-black px-6 py-3 rounded-full font-bold block text-center hover:bg-opacity-80 transition-colors w-full"
              >
                Contact {{ isWhatsAppContact(exchange.contact) ? 'via WhatsApp' : 
                          isInstagramContact(exchange.contact) ? 'via Instagram' : 'Seller' }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getExchangeById, Exchange } from '../services/exchangeService'

// State
const exchange = ref<Exchange | null>(null)
const loading = ref(true)
const error = ref(false)
const currentImageIndex = ref(0)
const shareUrlInput = ref<HTMLInputElement | null>(null)
const copied = ref(false)

// Get the exchange ID from the route
const route = useRoute()
const exchangeId = computed(() => route.params.id as string)

// Current URL for sharing
const currentUrl = computed(() => window.location.href)

// Load the exchange data
const loadExchange = async () => {
  loading.value = true
  error.value = false
  
  try {
    const data = await getExchangeById(exchangeId.value)
    if (data) {
      exchange.value = data
    } else {
      error.value = true
    }
  } catch (err) {
    console.error('Error fetching exchange:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

// Navigation for image gallery
const nextImage = () => {
  if (!exchange.value) return
  
  currentImageIndex.value = (currentImageIndex.value + 1) % exchange.value.image_urls.length
}

const prevImage = () => {
  if (!exchange.value) return
  
  currentImageIndex.value = (currentImageIndex.value - 1 + exchange.value.image_urls.length) % exchange.value.image_urls.length
}

// Contact helpers
const isWhatsAppContact = (contact: string): boolean => {
  return !!contact && contact.includes('wa.me')
}

const isInstagramContact = (contact: string): boolean => {
  return !!contact && contact.includes('instagram.com')
}

const getDisplayContact = (contact: string): string => {
  if (isWhatsAppContact(contact)) {
    // Extract the number from WhatsApp URL
    const match = contact.match(/wa\.me\/(\d+)/)
    return match ? `WhatsApp: ${formatPhoneNumber(match[1])}` : 'WhatsApp'
  } else if (isInstagramContact(contact)) {
    // Extract the username from Instagram URL
    const match = contact.match(/instagram\.com\/([^\/]+)/)
    return match ? `Instagram: ${match[1]}` : 'Instagram'
  }
  
  return contact
}

// Format functions
const formatPhoneNumber = (number: string): string => {
  // Simple formatting for illustration - can be enhanced based on country codes
  if (number.length > 10) {
    const countryCode = number.slice(0, number.length - 10)
    const rest = number.slice(number.length - 10)
    return `+${countryCode} ${rest}`
  }
  return number
}

const formatDateLong = (dateString: string): string => {
  if (!dateString) return ''
  
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

// Sharing functionality
const copyShareUrl = () => {
  if (shareUrlInput.value) {
    shareUrlInput.value.select()
    document.execCommand('copy')
    
    // Show copied state
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}

const shareViaWhatsApp = () => {
  if (!exchange.value) return
  
  const text = `Check out this ${exchange.value.listing_type} listing on Exchange Hub: ${exchange.value.description.substring(0, 50)}${exchange.value.description.length > 50 ? '...' : ''}`
  
  window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + currentUrl.value)}`, '_blank')
}

// Load the exchange data when the component is mounted
onMounted(() => {
  loadExchange()
})
</script> 