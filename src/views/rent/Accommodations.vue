<template>
  <div class="min-h-screen">
    <div class="ambient-glow"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <!-- Page Header -->
      <div class="mb-8 animate-fade-in-up">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 text-sm text-white/60">
          <svg class="w-4 h-4 text-spotify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Accommodations
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-white tracking-tight">Find Your Next Home</h1>
        <div class="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-spotify-green/10 to-yellow-500/5 border border-spotify-green/20">
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
          <span class="text-sm font-semibold text-spotify-green">#1 Accommodation Platform for UPES</span>
          <span class="text-xs text-white/30">·</span>
          <span class="text-xs text-white/40">50+ properties sold · 100+ satisfied customers</span>
        </div>
      </div>
      
      <!-- Filters Section -->
      <div class="mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">Location</label>
            <select v-model="filters.location" class="select-glass w-full">
              <option v-for="option in locationOptions" :key="option" :value="option">
                {{ option ? option : 'All Locations' }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">Property Type</label>
            <select v-model="filters.type" class="select-glass w-full">
              <option v-for="option in propertyTypeOptions" :key="option" :value="option">
                {{ option ? option : 'All Types' }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">Monthly Price</label>
            <select
              v-model="filters.priceRange"
              class="select-glass w-full"
              :class="{ 'opacity-40 cursor-not-allowed': filters.type === 'Hostel' }"
              :disabled="filters.type === 'Hostel'"
            >
              <option v-for="option in priceRangeOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>
          <div class="flex items-end">
            <button @click="resetFilters" class="btn-outline-glow w-full text-sm py-2.5">
              Reset Filters
            </button>
          </div>
        </div>
      </div>
      
      <!-- Active Filters -->
      <div v-if="hasActiveFilters" class="mb-4 flex flex-wrap gap-2">
        <div v-if="filters.location" class="badge-glass">
          Location: {{ filters.location }}
          <button @click="filters.location = ''" class="ml-1 text-white/40 hover:text-white">✕</button>
        </div>
        <div v-if="filters.type" class="badge-glass">
          Type: {{ filters.type }}
          <button @click="filters.type = ''" class="ml-1 text-white/40 hover:text-white">✕</button>
        </div>
        <div v-if="filters.priceRange" class="badge-glass">
          Price: {{ getPriceRangeLabel(filters.priceRange) }}
          <button @click="filters.priceRange = ''" class="ml-1 text-white/40 hover:text-white">✕</button>
        </div>
      </div>
      
      <!-- Loading -->
      <div v-if="loading" class="flex justify-center py-16">
        <div class="animate-spin rounded-full h-10 w-10 border-2 border-spotify-green border-t-transparent"></div>
      </div>
      
      <!-- No Results -->
      <div v-else-if="filteredProperties.length === 0" class="text-center py-16">
        <p class="text-white/40 text-lg">No properties found matching your criteria.</p>
        <p class="text-white/25 text-sm mt-2">Try adjusting your filters.</p>
      </div>
      
      <!-- Results Count -->
      <div v-else-if="!loading" class="mb-5 text-sm text-white/35">
        Showing {{ filteredProperties.length }} of {{ properties.length }} properties
      </div>
      
      <!-- Properties Grid -->
      <div v-if="!loading && filteredProperties.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-children">
        <div
          v-for="property in filteredProperties"
          :key="property.id"
          class="surface-card overflow-hidden group"
        >
          <router-link :to="`/accommodations/${slugify(property.title)}`">
            <div class="relative aspect-video overflow-hidden">
              <img
                :src="property.imageUrl"
                :alt="property.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute top-3 right-3 badge-glass text-xs">
                {{ property.details.type }}
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-lg font-semibold text-white mb-1 tracking-tight">{{ property.title }}</h3>
              <p class="text-sm text-white/40 mb-1">{{ property.location }}</p>
              <p class="text-xs text-white/30 mb-3">{{ property.distance }}</p>
              <div class="flex items-baseline gap-1">
                <span class="text-spotify-green font-bold text-xl">₹{{ property.price.includes('/year') ? property.price : `${property.price}/month` }}</span>
              </div>
            </div>
          </router-link>
          
          <!-- Share Button -->
          <div class="px-5 pb-4 flex justify-center border-t border-white/[0.04] pt-3">
            <button 
              @click="shareProperty(property)"
              class="text-white/30 hover:text-spotify-green transition-colors flex items-center gap-1.5 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>Share</span>
            </button>
            <div v-if="sharedPropertyId === property.id" class="ml-2 text-spotify-green text-sm">
              Link copied!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { properties } from '../../data/accommodations'

const loading = ref(true)
const sharedPropertyId = ref<string | null>(null)

// Dynamic filter options
const locationOptions = computed(() => {
  const locations = new Set<string>()
  locations.add('') // Add empty option for "All Locations"
  
  properties.forEach(property => {
    // Extract the main location (before the comma)
    const mainLocation = property.location.split(',')[0].trim()
    locations.add(mainLocation)
  })
  
  return Array.from(locations).sort()
})

const propertyTypeOptions = computed(() => {
  const types = new Set<string>()
  types.add('') // Add empty option for "All Types"
  
  properties.forEach(property => {
    // Extract the main type (before the dash)
    const mainType = property.details.type.split('-')[0].trim()
    types.add(mainType)
  })
  
  return Array.from(types).sort()
})

// Price range options
const priceRangeOptions = [
  { value: '', label: 'Any Price' },
  { value: '0-15000', label: 'Under ₹15,000' },
  { value: '15000-20000', label: '₹15,000 - ₹20,000' },
  { value: '20000-30000', label: '₹20,000 - ₹30,000' },
  { value: '30000+', label: 'Above ₹30,000' }
]

// Filters
const filters = ref({
  location: '',
  type: '',
  priceRange: ''
})

// Reset filters
const resetFilters = () => {
  filters.value = {
    location: '',
    type: '',
    priceRange: ''
  }
}

// Get price range label
const getPriceRangeLabel = (value: string): string => {
  const option = priceRangeOptions.find(opt => opt.value === value)
  return option ? option.label : ''
}

// Check if any filters are active
const hasActiveFilters = computed(() => {
  return filters.value.location !== '' || 
         filters.value.type !== '' || 
         filters.value.priceRange !== ''
})

// Filtered properties
const filteredProperties = computed(() => {
  return properties.filter(property => {
    // Location filter
    if (filters.value.location && !property.location.includes(filters.value.location)) {
      return false
    }
    
    // Type filter
    if (filters.value.type && !property.details.type.includes(filters.value.type)) {
      return false
    }
    
    // Price range filter
    if (filters.value.priceRange) {
      const price = parseInt(property.price.replace(/,/g, ''))
      
      if (filters.value.priceRange === '0-15000' && price > 15000) {
        return false
      }
      
      if (filters.value.priceRange === '15000-20000' && (price < 15000 || price > 20000)) {
        return false
      }
      
      if (filters.value.priceRange === '20000-30000' && (price < 20000 || price > 30000)) {
        return false
      }
      
      if (filters.value.priceRange === '30000+' && price < 30000) {
        return false
      }
    }
    
    return true
  })
})

// Add this slugify function
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w-]+/g, '')        // Remove all non-word chars
    .replace(/--+/g, '-')            // Replace multiple - with single -
    .replace(/^-+/, '')              // Trim - from start of text
    .replace(/-+$/, '');             // Trim - from end of text
}

// Share property function
const shareProperty = async (property: any) => {
  try {
    const slug = slugify(property.title)
    const url = `${window.location.origin}/#/accommodations/${slug}`
    await navigator.clipboard.writeText(url)
    sharedPropertyId.value = property.id
    setTimeout(() => {
      sharedPropertyId.value = null
    }, 2000)
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}

onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<style scoped>
/* Scoped overrides removed — now using global design system classes */
</style>