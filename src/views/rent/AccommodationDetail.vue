<template>
  <div class="min-h-screen bg-spotify-black py-8">
    <div class="max-w-7xl mx-auto px-4">
      <div v-if="loading" class="flex justify-center py-12">
        <div class="text-spotify-green">Loading property details...</div>
      </div>
      
      <div v-else-if="!property" class="text-center py-12">
        <h2 class="text-2xl font-bold text-white mb-4">Property Not Found</h2>
        <p class="text-gray-400 mb-6">The property you're looking for doesn't exist or has been removed.</p>
        <router-link to="/accommodations" class="inline-block bg-spotify-green text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
          Back to Accommodations
        </router-link>
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Property Images -->
        <div class="space-y-4">
          <!-- Main Image or Video -->
          <div class="relative rounded-lg bg-zinc-900 flex flex-col overflow-hidden">
            <!-- Navigation Controls -->
            <div class="absolute inset-y-0 left-0 flex items-center z-10 px-2">
              <button 
                @click="prevMedia" 
                class="bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full transition-all"
                :disabled="property.images.length <= 1"
                :class="{'opacity-50 cursor-not-allowed': property.images.length <= 1}"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div class="relative overflow-hidden flex items-center justify-center" style="min-height: 400px; background-color: #111;">
              <img
                v-if="!selectedMedia.isVideo"
                :src="selectedMedia.url"
                :alt="property.title"
                class="w-full h-auto object-contain mx-auto"
                style="max-height: 600px;"
              />
              <video 
                v-else 
                controls 
                class="w-full h-auto object-contain mx-auto"
                style="max-height: 600px;"
                autoplay
              >
                <source :src="selectedMedia.url" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div class="absolute inset-y-0 right-0 flex items-center z-10 px-2">
              <button 
                @click="nextMedia" 
                class="bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full transition-all"
                :disabled="property.images.length <= 1"
                :class="{'opacity-50 cursor-not-allowed': property.images.length <= 1}"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div class="absolute top-4 right-4 bg-spotify-green text-white px-3 py-1 rounded-full text-sm font-medium">
              {{ property.details.type }}
            </div>
            
            <!-- Media Counter -->
            <div class="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
              {{ selectedMediaIndex + 1 }} / {{ property.images.length }}
            </div>
          </div>
          
          <!-- Thumbnails -->
          <div class="mt-4 bg-zinc-900 rounded-lg p-4">
            <div class="flex justify-between items-center mb-2">
              <h3 class="text-white font-medium">All Photos</h3>
              <span class="text-gray-400 text-sm">{{ property.images.length }} items</span>
            </div>
            <div class="grid grid-cols-5 gap-3">
              <div 
                v-for="(image, index) in property.images" 
                :key="image.id" 
                class="aspect-square rounded-lg overflow-hidden cursor-pointer relative"
                @click="selectMedia(index)"
              >
                <img 
                  v-if="!image.id.includes('vid')" 
                  :src="image.url" 
                  :alt="image.alt" 
                  class="w-full h-full object-cover" 
                />
                <div 
                  v-else 
                  class="w-full h-full bg-black flex items-center justify-center relative"
                >
                  <div class="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <!-- Selected indicator -->
                <div 
                  v-if="selectedMediaIndex === index" 
                  class="absolute inset-0 border-2 border-spotify-green rounded-lg"
                ></div>
                <!-- Video label -->
                <div 
                  v-if="image.id.includes('vid')" 
                  class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs text-center py-1"
                >
                  Video
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Property Details -->
        <div class="space-y-6">
          <div>
            <h1 class="text-3xl font-bold text-white">{{ property.title }}</h1>
            <p class="text-gray-400 mt-2">{{ property.location }}</p>
            <p class="text-gray-400 mt-1">Distance from campus: {{ property.distance }}</p>
          </div>

          <div class="space-y-2">
            <div class="flex items-center space-x-3">
              <span class="text-3xl font-bold text-spotify-green">₹{{ property.price.includes('/year') ? property.price : `${property.price}/month` }}</span>
            </div>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold text-white">Description</h2>
            <p class="text-gray-400">
              {{ property.description }}
            </p>
          </div>

          <!-- Amenities -->
          <div class="space-y-4">
            <h2 class="text-xl font-semibold text-white">Amenities</h2>
            <div class="grid grid-cols-2 gap-2">
              <div v-for="amenity in property.amenities" :key="amenity" class="flex items-center space-x-2">
                <span class="text-spotify-green">✓</span>
                <span class="text-gray-400">{{ amenity }}</span>
              </div>
            </div>
          </div>

          <!-- Property Details -->
          <div class="space-y-4">
            <h2 class="text-xl font-semibold text-white">Property Details</h2>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-gray-400 font-medium">Type</p>
                <p class="text-white">{{ property.details.type }}</p>
              </div>
              <div>
                <p class="text-gray-400 font-medium">Gender</p>
                <p class="text-white">{{ property.details.gender }}</p>
              </div>
            </div>
            <div class="space-y-2">
              <p class="text-gray-400 font-medium">Features</p>
              <ul class="list-disc pl-5 text-gray-400">
                <li v-for="feature in property.details.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="bg-zinc-900 rounded-lg p-4">
            <h3 class="text-lg font-semibold text-white mb-2">Contact Information</h3>
            <p class="text-gray-400">{{ property.contact.name }}</p>
            <p class="text-gray-400">{{ property.contact.phone }}</p>
          </div>

          <div class="flex space-x-4">
            <a :href="`tel:${property.contact.phone}`" class="btn-primary flex-1 text-center py-2 rounded-lg bg-spotify-green text-white font-bold hover:bg-opacity-90 transition-colors">Call Owner</a>
            <a :href="`https://wa.me/91${property.contact.phone}`" target="_blank" class="btn-secondary flex-1 text-center py-2 rounded-lg border border-spotify-green text-spotify-green font-bold hover:bg-spotify-green hover:bg-opacity-10 transition-colors">WhatsApp</a>
          </div>

          <!-- Share Section -->
          <div class="pt-4">
            <h3 class="text-lg font-semibold text-white mb-2">Share this accommodation</h3>
            <div class="flex items-center space-x-4">
              <button 
                @click="copyProductLink" 
                class="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Link</span>
              </button>
              <span v-if="linkCopied" class="text-spotify-green text-sm">Link copied!</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <div v-if="property" class="mt-16 space-y-8">
        <div class="bg-zinc-900 rounded-lg p-6">
          <h2 class="text-2xl font-bold text-white mb-6">Reviews</h2>
          <ReviewComponent 
            :productId="property.id" 
            productType="accommodation" 
            ref="reviewComponentRef"
          />
        </div>
        
        <div class="bg-zinc-900 rounded-lg p-6">
          <h2 class="text-2xl font-bold text-white mb-6">Write a Review</h2>
          <div class="space-y-6">
            <!-- Name Input -->
            <div>
              <label for="reviewName" class="block text-white mb-2">Your Name</label>
              <input 
                type="text" 
                id="reviewName" 
                class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-spotify-green"
                v-model="reviewName"
                placeholder="Enter your name"
              />
            </div>
            
            <!-- Rating Input -->
            <div>
              <label class="block text-white mb-2">Rating</label>
              <div class="flex space-x-2">
                <button 
                  v-for="star in 5" 
                  :key="star" 
                  @click="reviewRating = star"
                  class="text-2xl focus:outline-none"
                  :class="star <= reviewRating ? 'text-spotify-green' : 'text-zinc-600'"
                >
                  ★
                </button>
              </div>
            </div>
            
            <!-- Review Text Input -->
            <div>
              <label for="reviewText" class="block text-white mb-2">Your Review</label>
              <textarea 
                id="reviewText" 
                rows="5" 
                class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-spotify-green"
                v-model="reviewText"
                placeholder="Share your experience with this accommodation"
              ></textarea>
            </div>
            
            <button 
              @click="submitReview" 
              class="bg-spotify-green text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Submitting...' : 'Submit Review' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { properties } from '../../data/accommodations'
import ReviewComponent from '../../components/ReviewComponent.vue'
import { supabase } from '../../lib/supabase'

const route = useRoute()
const loading = ref(true)
const linkCopied = ref(false)
const reviewComponentRef = ref<InstanceType<typeof ReviewComponent> | null>(null)

// Review form state
const reviewName = ref('')
const reviewRating = ref(0)
const reviewText = ref('')
const isSubmitting = ref(false)

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

// Get property based on route param (slug)
const property = computed(() => {
  const slug = route.params.id as string
  return properties.find(p => slugify(p.title) === slug)
})

const selectedMediaIndex = ref(0)
const selectedMedia = computed(() => {
  if (!property.value || !property.value.images || property.value.images.length === 0) {
    return { url: '', alt: '', isVideo: false }
  }
  
  const media = property.value.images[selectedMediaIndex.value]
  return {
    url: media.url,
    alt: media.alt || property.value.title,
    isVideo: media.id.includes('vid')
  }
})

const selectMedia = (index: number) => {
  selectedMediaIndex.value = index
}

const nextMedia = () => {
  if (!property.value || !property.value.images) return
  selectedMediaIndex.value = (selectedMediaIndex.value + 1) % property.value.images.length
}

const prevMedia = () => {
  if (!property.value || !property.value.images) return
  selectedMediaIndex.value = (selectedMediaIndex.value - 1 + property.value.images.length) % property.value.images.length
}

const copyProductLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}

const handleReviewSubmitted = () => {
  // Refresh reviews when a new review is submitted
  if (reviewComponentRef.value) {
    reviewComponentRef.value.fetchReviews()
  }
  
  // Reset form
  reviewName.value = ''
  reviewRating.value = 0
  reviewText.value = ''
}

const submitReview = async () => {
  if (!reviewName.value || reviewRating.value === 0 || !reviewText.value) {
    // Show validation error
    alert('Please fill out all fields')
    return
  }
  
  // Make sure property exists
  if (!property.value) {
    console.error('Property not found')
    alert('Error: Property not found')
    return
  }
  
  isSubmitting.value = true
  
  try {
    // Create a new review object and insert into Supabase
    const { error } = await supabase
      .from('reviews')
      .insert([
        {
          product_id: property.value.id,
          product_type: 'accommodation',
          user_name: reviewName.value,
          rating: reviewRating.value,
          comment: reviewText.value
        }
      ])
    
    if (error) throw error
    
    // Update UI
    handleReviewSubmitted()
  } catch (error: any) {
    console.error('Error saving review:', error)
    alert('There was an error submitting your review. Please try again later.')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  // Scroll to top of page
  window.scrollTo(0, 0)
  
  // Test Supabase connection
  supabase.from('reviews').select('count', { count: 'exact', head: true })
    .then(({ count, error }) => {
      if (error) {
        console.error('Supabase connection error:', error)
      } else {
        console.log('Supabase connection successful. Total reviews:', count)
      }
    })
  
  // Simulate loading
  setTimeout(() => {
    loading.value = false
    
    // Update page metadata
    if (property.value) {
      document.title = `${property.value.title} | Accommodation`
    }
  }, 500)
})
</script>

<style scoped>
/* Add any component-specific styles here */
</style>