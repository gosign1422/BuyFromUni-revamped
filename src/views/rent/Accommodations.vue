<template>
  <div class="min-h-screen bg-spotify-black py-8">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-white mb-8">Accommodations</h1>
      
      <!-- Filters Section -->
      <div class="mb-8 p-4 bg-black rounded-lg border border-gray-800">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-white text-sm font-medium mb-2">Location</label>
            <select v-model="filters.location" class="w-full bg-black text-white px-4 py-2 rounded-md border border-spotify-green focus:outline-none focus:ring-2 focus:ring-spotify-green">
              <option v-for="option in locationOptions" :key="option" :value="option">
                {{ option ? option : 'All Locations' }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-white text-sm font-medium mb-2">Property Type</label>
            <select v-model="filters.type" class="w-full bg-black text-white px-4 py-2 rounded-md border border-spotify-green focus:outline-none focus:ring-2 focus:ring-spotify-green">
              <option v-for="option in propertyTypeOptions" :key="option" :value="option">
                {{ option ? option : 'All Types' }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-white text-sm font-medium mb-2">Monthly Price Range</label>
            <select
              v-model="filters.priceRange"
              :class="[
                'w-full bg-black text-white px-4 py-2 rounded-md border border-spotify-green focus:outline-none focus:ring-2 focus:ring-spotify-green',
                filters.type === 'Hostel' ? 'bg-gray-800 text-gray-400 cursor-not-allowed' : ''
              ]"
              :disabled="filters.type === 'Hostel'"
            >
              <option v-for="option in priceRangeOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>
          <div class="flex items-end">
            <button @click="resetFilters" class="w-full bg-opacity-10 bg-spotify-green text-white px-4 py-2 rounded-md hover:bg-opacity-20 transition-colors border-2 border-spotify-green">
              Reset Filters
            </button>
          </div>
        </div>
      </div>
      
      <!-- Active Filters -->
      <div v-if="hasActiveFilters" class="mb-4 flex flex-wrap gap-2">
        <div v-if="filters.location" class="amenity-tag flex items-center">
          Location: {{ filters.location }}
          <button @click="filters.location = ''" class="ml-2 text-xs">✕</button>
        </div>
        <div v-if="filters.type" class="amenity-tag flex items-center">
          Type: {{ filters.type }}
          <button @click="filters.type = ''" class="ml-2 text-xs">✕</button>
        </div>
        <div v-if="filters.priceRange" class="amenity-tag flex items-center">
          Price: {{ getPriceRangeLabel(filters.priceRange) }}
          <button @click="filters.priceRange = ''" class="ml-2 text-xs">✕</button>
        </div>
      </div>
      
      <div v-if="loading" class="flex justify-center py-12">
        <div class="text-spotify-green">Loading accommodations...</div>
      </div>
      
      <div v-else-if="filteredProperties.length === 0" class="text-white text-center py-12">
        No properties found matching your criteria. Try adjusting your filters.
      </div>
      
      <!-- Results Count -->
      <div v-else-if="!loading" class="mb-4 text-white">
        Showing {{ filteredProperties.length }} of {{ properties.length }} properties
      </div>
      
      <div v-if="!loading && filteredProperties.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="property in filteredProperties"
          :key="property.id"
          class="property-card rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 border"
        >
          <router-link :to="`/accommodations/${slugify(property.title)}`">
            <div class="relative aspect-video">
              <img
                :src="property.imageUrl"
                :alt="property.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div class="absolute top-2 right-2 bg-spotify-green text-white px-2 py-1 rounded-full text-sm">
                {{ property.details.type }}
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold text-white">{{ property.title }}</h3>
              <p class="text-white text-opacity-70 mt-2">{{ property.location }}</p>
              <p class="text-white text-opacity-70 mt-1">Distance: {{ property.distance }}</p>
              <div class="flex items-center mt-4">
                <span class="text-spotify-green font-bold text-2xl">₹{{ property.price.includes('/year') ? property.price : `${property.price}/month` }}</span>
              </div>
            </div>
          </router-link>
          
          <!-- Share Button -->
          <div class="px-4 pb-2 flex justify-center border-t border-gray-800 mt-2 pt-2">
            <button 
              @click="shareProperty(property)"
              class="text-spotify-green hover:text-white transition-colors flex items-center space-x-1 text-sm"
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
/* Custom styles for consistent colors */
.property-card {
  background-color: #000000;
  border-color: rgba(29, 185, 84, 0.5); /* spotify-green with opacity */
}

.amenity-tag {
  background-color: rgba(29, 185, 84, 0.1);
  color: #1DB954;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

/* Override any remaining gray colors */
:deep(.text-gray-400) {
  color: rgba(255, 255, 255, 0.7) !important;
}

:deep(.bg-gray-900) {
  background-color: #000000 !important;
}

:deep(.bg-gray-800) {
  background-color: rgba(255, 255, 255, 0.05) !important;
}

:deep(.border-gray-800) {
  border-color: rgba(255, 255, 255, 0.1) !important;
}
</style>