<template>
  <div class="mb-12 pt-4 border-t border-spotify-green">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-4xl font-bold text-spotify-green tracking-tight">Active Listings</h2>
      
      <!-- Filters -->
      <div class="flex space-x-3">
        <select 
          v-model="typeFilter" 
          class="select-metallic rounded-lg px-4 py-2 text-white text-sm focus:outline-none"
        >
          <option value="">All Types</option>
          <option v-for="type in listingTypes" :key="type" :value="type">{{ type }}</option>
        </select>
        
        <select 
          v-model="locationFilter" 
          class="select-metallic rounded-lg px-4 py-2 text-white text-sm focus:outline-none"
        >
          <option value="">All Locations</option>
          <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
        </select>
      </div>
    </div>
    
    <!-- Loading State -->
    <div v-if="isLoading" class="flex justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-spotify-green"></div>
    </div>
    
    <!-- No Listings State -->
    <div v-else-if="filteredListings.length === 0" class="py-12 text-center">
      <p class="text-gray-400 text-lg">No listings found. Be the first to create one!</p>
    </div>
    
    <!-- Listings Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="listing in filteredListings" 
        :key="listing.id" 
        class="card-metallic rounded-lg overflow-hidden cursor-pointer hover-metallic"
        @click="openListingDetails(listing)"
      >
        <!-- Listing Image -->
        <div class="aspect-video relative overflow-hidden">
          <img 
            v-if="listing.image_urls && listing.image_urls.length > 0" 
            :src="listing.image_urls[0]" 
            :alt="listing.description" 
            class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div v-else class="w-full h-full bg-gray-900 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          <!-- Badge -->
          <div class="absolute top-2 left-2 badge-metallic text-spotify-green px-3 py-1 rounded-full text-xs font-bold">
            {{ listing.listing_type }}
          </div>
        </div>
        
        <!-- Listing Content -->
        <div class="p-5">
          <div class="flex justify-between items-start mb-3">
            <span class="badge-metallic text-spotify-green px-3 py-1 rounded-full text-xs font-medium">
              {{ listing.location }}
            </span>
            <span class="text-xs text-gray-400">
              {{ formatDate(listing.created_at) }}
            </span>
          </div>
          
          <div class="mb-4">
            <p class="line-clamp-3 text-white text-sm leading-relaxed">{{ listing.description }}</p>
          </div>
          
          <div class="flex justify-end items-center">
            <div class="text-xs text-spotify-green font-medium">
              {{ getImageCount(listing) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Listing Details Modal -->
    <div v-if="selectedListing" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div class="modal-metallic p-8 rounded-lg w-11/12 max-w-5xl max-h-[90vh] overflow-y-auto relative">
        <!-- Close button -->
        <button @click="closeModal" class="absolute top-4 right-4 text-white hover:text-spotify-green z-10 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <!-- Listing title -->
        <h2 class="text-4xl font-bold text-spotify-green mb-8 pr-8 tracking-tight">{{ selectedListing.listing_type }} Listing</h2>
        
        <!-- Image Gallery - Full Width at Top -->
        <div class="image-gallery mb-8">
          <!-- Main Large Image -->
          <div class="aspect-video overflow-hidden rounded-lg mb-4 relative bg-black w-full max-h-[60vh]">
            <img 
              :src="selectedListing.image_urls[currentImageIndex]" 
              :alt="selectedListing.description" 
              class="w-full h-full object-contain"
            />
            
            <!-- Image Navigation Arrows -->
            <div v-if="selectedListing.image_urls.length > 1" class="absolute inset-0 flex items-center justify-between">
              <button 
                @click="prevImage" 
                class="btn-metallic text-white p-3 rounded-full ml-4 focus:outline-none transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                @click="nextImage" 
                class="btn-metallic text-white p-3 rounded-full mr-4 focus:outline-none transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <!-- Image Counter -->
            <div class="absolute bottom-4 right-4 badge-metallic text-white px-3 py-1 rounded-full text-sm">
              {{ currentImageIndex + 1 }} / {{ selectedListing.image_urls.length }}
            </div>
          </div>
          
          <!-- Image Thumbnails -->
          <div v-if="selectedListing.image_urls.length > 1" class="flex space-x-3 overflow-x-auto py-2 scrollbar-thin justify-center">
            <div 
              v-for="(image, index) in selectedListing.image_urls" 
              :key="index"
              @click="currentImageIndex = index"
              class="h-20 w-20 flex-shrink-0 cursor-pointer rounded border-2 transition-all duration-200"
              :class="currentImageIndex === index ? 'border-spotify-green scale-105' : 'border-transparent opacity-70 hover:opacity-100'"
            >
              <img :src="image" class="h-full w-full object-cover rounded" />
            </div>
          </div>
        </div>
        
        <!-- Content Area (Below Image) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Listing Information -->
          <div class="listing-details">
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="badge-metallic text-spotify-green px-4 py-2 rounded-full text-sm font-bold">
                {{ selectedListing.listing_type }}
              </span>
              <span class="badge-metallic text-spotify-green px-4 py-2 rounded-full text-sm">
                {{ selectedListing.location }}
              </span>
              <span class="text-sm text-gray-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ formatDateLong(selectedListing.created_at) }}
              </span>
            </div>
            
            <!-- Description -->
            <div class="card-metallic p-6 rounded-lg mb-6">
              <h3 class="text-2xl text-spotify-green font-bold mb-4">Description</h3>
              <p class="text-white whitespace-pre-line text-lg leading-relaxed">{{ selectedListing.description }}</p>
            </div>
          </div>
          
          <!-- Contact Information -->
          <div class="card-metallic rounded-lg p-6 h-fit">
            <h3 class="text-2xl text-spotify-green font-bold mb-4">Contact Information</h3>
            
            <div class="flex items-center space-x-3 mb-6">
              <!-- Show appropriate contact method icon -->
              <div v-if="isWhatsAppContact(selectedListing.contact)" class="icon-metallic bg-green-600 text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div v-else-if="isInstagramContact(selectedListing.contact)" class="icon-metallic bg-gradient-to-tr from-purple-600 to-pink-500 text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              
              <p class="text-white text-lg font-medium">{{ getDisplayContact(selectedListing.contact) }}</p>
            </div>
            
            <div class="flex space-x-3 mb-6">
              <!-- Contact Button -->
              <a 
                :href="selectedListing.contact"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-metallic flex-1 text-spotify-black px-6 py-3 rounded-full text-lg font-bold flex items-center justify-center bg-spotify-green hover:bg-opacity-90 transition-all duration-300"
              >
                <svg v-if="isWhatsAppContact(selectedListing.contact)" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <svg v-else-if="isInstagramContact(selectedListing.contact)" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {{ getContactButtonText(selectedListing.contact) }}
              </a>
            </div>
            
            <!-- Share Section -->
            <div class="mt-6 pt-6 border-t border-gray-800">
              <h3 class="text-xl text-spotify-green font-bold mb-4">Share This Listing</h3>
              
              <!-- Listing URL -->
              <div class="flex items-center mb-4">
                <input 
                  ref="listingUrlInput"
                  type="text" 
                  :value="getShareableLink(selectedListing)"
                  readonly
                  class="input-metallic flex-1 rounded-lg p-3 text-white text-sm focus:outline-none"
                />
                <button 
                  @click="copyListingLink" 
                  class="btn-metallic ml-3 text-white p-3 rounded-lg hover:bg-opacity-80 transition-colors"
                  :class="{'bg-spotify-green': copySuccess}"
                >
                  <svg v-if="!copySuccess" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
              
              <!-- Share buttons -->
              <div class="flex space-x-3">
                <a 
                  :href="getWhatsAppShareLink(selectedListing)"
                  target="_blank"
                  class="btn-metallic flex-1 bg-green-600 text-white p-3 rounded-lg flex items-center justify-center text-sm hover:bg-green-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Share on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { getExchangeListings, Exchange } from '../services/exchangeService'

// Initialize state variables
const listings = ref<Exchange[]>([])
const isLoading = ref(true)
const typeFilter = ref('')
const locationFilter = ref('')
const selectedListing = ref<Exchange | null>(null)
const currentImageIndex = ref(0)

// Props definition
defineProps({
  listingTypes: {
    type: Array as () => string[],
    required: true
  },
  locations: {
    type: Array as () => string[],
    required: true
  }
})

// Emits
const emit = defineEmits(['refresh'])

// Copy-related states
const listingUrlInput = ref<HTMLInputElement | null>(null)
const copySuccess = ref(false)

// Computed
const filteredListings = computed(() => {
  let result = listings.value

  if (typeFilter.value) {
    result = result.filter(listing => listing.listing_type === typeFilter.value)
  }

  if (locationFilter.value) {
    result = result.filter(listing => listing.location === locationFilter.value)
  }

  return result
})

// Format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric'
  }).format(date)
}

// Format date with full details
const formatDateLong = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric',
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

// Get image count text
const getImageCount = (listing: Exchange) => {
  const count = listing.image_urls?.length || 0
  return count === 1 ? '1 photo' : `${count} photos`
}

// Contact related utilities
const isWhatsAppContact = (contact: string): boolean => {
  return !!contact && contact.startsWith('https://wa.me/')
}

const isInstagramContact = (contact: string): boolean => {
  return !!contact && contact.includes('instagram.com/')
}

const getDisplayContact = (contact: string): string => {
  if (isWhatsAppContact(contact)) {
    // Extract the number from WhatsApp URL
    const match = contact.match(/https:\/\/wa\.me\/(\d+)/)
    if (match && match[1]) {
      return `+${match[1]}`
    }
  } else if (isInstagramContact(contact)) {
    // Extract username from Instagram URL
    const match = contact.match(/instagram\.com\/([^\/]+)/)
    if (match && match[1]) {
      return match[1]
    }
  }
  return contact
}

const getContactButtonText = (contact: string): string => {
  if (isWhatsAppContact(contact)) {
    return 'Chat on WhatsApp'
  } else if (isInstagramContact(contact)) {
    return 'Message on Instagram'
  }
  return 'Contact Seller'
}

// Open listing details modal
const openListingDetails = (listing: Exchange) => {
  selectedListing.value = listing
  currentImageIndex.value = 0
  document.body.style.overflow = 'hidden' // Prevent scrolling
}

// Close modal
const closeModal = () => {
  selectedListing.value = null
  document.body.style.overflow = '' // Restore scrolling
}

// Fetch exchange listings
const fetchExchangeListings = async () => {
  isLoading.value = true
  
  try {
    const data = await getExchangeListings()
    listings.value = data
  } catch (error) {
    console.error('Error fetching listings:', error)
  } finally {
    isLoading.value = false
  }
}

// Methods exposed to parent
defineExpose({
  refresh: fetchExchangeListings,
  openListingDetails
})

// Fetch listings on component mount
onMounted(async () => {
  await fetchExchangeListings()
})

// Image navigation
const prevImage = () => {
  if (!selectedListing.value) return
  
  if (currentImageIndex.value === 0) {
    currentImageIndex.value = selectedListing.value.image_urls.length - 1
  } else {
    currentImageIndex.value--
  }
}

const nextImage = () => {
  if (!selectedListing.value) return
  
  if (currentImageIndex.value === selectedListing.value.image_urls.length - 1) {
    currentImageIndex.value = 0
  } else {
    currentImageIndex.value++
  }
}

// Get shareable link for a listing
const getShareableLink = (listing: Exchange) => {
  return `${window.location.origin}/#/exchange/${listing.id}`
}

// Copy listing link to clipboard
const copyListingLink = () => {
  if (listingUrlInput.value) {
    listingUrlInput.value.select()
    document.execCommand('copy')
    
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  }
}

// Get WhatsApp share link
const getWhatsAppShareLink = (listing: Exchange) => {
  const url = getShareableLink(listing)
  const text = `Check out this listing on Exchange Hub: ${listing.description.substring(0, 50)}${listing.description.length > 50 ? '...' : ''}`
  
  return `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.max-h-90vh {
  max-height: 90vh;
}

/* Custom scrollbar for image thumbnails */
.scrollbar-thin::-webkit-scrollbar {
  height: 4px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: var(--spotify-green, #1DB954);
  border-radius: 10px;
}

.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: var(--spotify-green, #1DB954) rgba(0, 0, 0, 0.3);
}
</style> 