<template>
  <div class="min-h-screen bg-spotify-black">
    <!-- Page Header with Button -->
    <div class="pt-6">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center py-6">
          <h1 class="text-5xl md:text-6xl font-bold text-spotify-green mb-3">Exchange Hub</h1>
          <p class="text-xl max-w-3xl mx-auto mb-6">Exchange Anything.</p>
          <button @click="openListingForm" class="bg-spotify-green text-spotify-black px-8 py-4 rounded-full text-xl font-bold hover:bg-opacity-80 transition-colors">
            Create Your Listing.
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 pb-16">
      <!-- How It Works Section -->
      <div class="mb-10 pt-8 border-t border-spotify-green">
        <h2 class="text-3xl font-bold text-spotify-green mb-4">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div class="p-4">
            <div class="text-4xl text-spotify-green mb-2">1</div>
            <h3 class="text-xl font-bold mb-1">List Your Items</h3>
            <p>Post what you have to exchange and what you're looking for.</p>
          </div>
          <div class="p-4">
            <div class="text-4xl text-spotify-green mb-2">2</div>
            <h3 class="text-xl font-bold mb-1">Connect With Others</h3>
            <p>Find someone with matching interests and reach out to them.</p>
          </div>
          <div class="p-4">
            <div class="text-4xl text-spotify-green mb-2">3</div>
            <h3 class="text-xl font-bold mb-1">Make the Exchange</h3>
            <p>Meet up safely on campus to complete your exchange.</p>
          </div>
        </div>
      </div>
      
      <!-- Exchange Listings Component -->
      <ExchangeListings
        ref="listingsComponent"
        :listing-types="listingTypes"
        :locations="locations"
      />
    </div>

    <!-- Modal Form -->
    <div v-if="showListingForm" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
      <div class="bg-spotify-black border border-spotify-green p-8 rounded-lg max-w-xl w-full mx-4 max-h-90vh overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-spotify-green">Create Your Listing</h2>
          <button @click="closeListingForm" class="text-white hover:text-spotify-green">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Global Error Message -->
        <div v-if="errorMessage" class="mb-6 p-4 bg-red-900 bg-opacity-30 border border-red-500 rounded-lg">
          <p class="text-white text-center">{{ errorMessage }}</p>
        </div>

        <form @submit.prevent="submitListing">
          <!-- Question 1: Listing Type -->
          <div class="mb-6">
            <label class="block text-spotify-green font-bold mb-2">Q1: What type of listing is this? <span class="text-red-500">*</span></label>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div 
                v-for="option in listingTypes" 
                :key="option" 
                @click="formData.listingType = option"
                class="cursor-pointer p-3 border rounded-lg text-center transition-colors"
                :class="formData.listingType === option ? 'border-spotify-green bg-spotify-green bg-opacity-20 text-white' : 'border-gray-700 text-gray-300 hover:border-spotify-green'"
              >
                {{ option }}
              </div>
            </div>
            <p v-if="errors.listingType" class="text-red-500 text-sm mt-1">{{ errors.listingType }}</p>
          </div>

          <!-- Question 2: Location -->
          <div class="mb-6">
            <label class="block text-spotify-green font-bold mb-2">Q2: What's your location? <span class="text-red-500">*</span></label>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div 
                v-for="location in locations" 
                :key="location" 
                @click="formData.location = location"
                class="cursor-pointer p-3 border rounded-lg text-center transition-colors"
                :class="formData.location === location ? 'border-spotify-green bg-spotify-green bg-opacity-20 text-white' : 'border-gray-700 text-gray-300 hover:border-spotify-green'"
              >
                {{ location }}
              </div>
            </div>
            <p v-if="errors.location" class="text-red-500 text-sm mt-1">{{ errors.location }}</p>
          </div>

          <!-- Question 3: Description -->
          <div class="mb-6">
            <label for="description" class="block text-spotify-green font-bold mb-2">Q3: Describe what you're listing <span class="text-red-500">*</span></label>
            <textarea 
              id="description" 
              v-model="formData.description"
              rows="4" 
              class="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-spotify-green focus:outline-none"
              placeholder="Describe your item, its condition, and what you're looking for in return..."
              required
            ></textarea>
            <p v-if="errors.description" class="text-red-500 text-sm mt-1">{{ errors.description }}</p>
          </div>

          <!-- Question 4: Contact Information -->
          <div class="mb-6">
            <label class="block text-spotify-green font-bold mb-2">Q4: How can people contact you? <span class="text-red-500">*</span></label>
            
            <!-- Contact Method Selection -->
            <div class="grid grid-cols-2 gap-3 mb-4">
              <div 
                @click="selectContactMethod('whatsapp')"
                class="cursor-pointer p-3 border rounded-lg text-center transition-colors flex items-center justify-center"
                :class="formData.contactMethod === 'whatsapp' ? 'border-spotify-green bg-spotify-green bg-opacity-20 text-white' : 'border-gray-700 text-gray-300 hover:border-spotify-green'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp
              </div>
              <div 
                @click="selectContactMethod('instagram')"
                class="cursor-pointer p-3 border rounded-lg text-center transition-colors flex items-center justify-center"
                :class="formData.contactMethod === 'instagram' ? 'border-spotify-green bg-spotify-green bg-opacity-20 text-white' : 'border-gray-700 text-gray-300 hover:border-spotify-green'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </div>
            </div>

            <!-- WhatsApp Number Input -->
            <div v-if="formData.contactMethod === 'whatsapp'" class="mb-2">
              <input 
                v-model="formData.contact"
                type="text" 
                class="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-spotify-green focus:outline-none"
                placeholder="Enter your WhatsApp number (with country code)"
                required
              />
              <p class="text-xs text-gray-400 mt-1">Example: 917012345678 (91 is the country code for India)</p>
            </div>

            <!-- Instagram Username Input -->
            <div v-if="formData.contactMethod === 'instagram'" class="mb-2">
              <div class="flex items-center">
                <span class="text-gray-400 p-3 border-l border-t border-b border-gray-700 rounded-l-lg bg-black">instagram.com/</span>
                <input 
                  v-model="formData.contact"
                  type="text" 
                  class="w-full bg-black border border-gray-700 rounded-r-lg p-3 text-white focus:border-spotify-green focus:outline-none border-l-0"
                  placeholder="your_username"
                  required
                />
              </div>
              <p class="text-xs text-gray-400 mt-1">Enter your Instagram username without the @ symbol</p>
            </div>

            <p v-if="errors.contact" class="text-red-500 text-sm mt-1">{{ errors.contact }}</p>
            <p v-if="!formData.contactMethod && !errors.contact" class="text-sm text-gray-400 mt-2">Select a contact method</p>
          </div>

          <!-- Question 5: Images -->
          <div class="mb-8">
            <label class="block text-spotify-green font-bold mb-2">Q5: Upload images <span class="text-red-500">*</span></label>
            <div class="border border-dashed border-gray-700 rounded-lg p-4 text-center hover:border-spotify-green transition-colors cursor-pointer" @click="triggerFileInput">
              <input
                type="file"
                ref="fileInput"
                accept="image/*"
                multiple
                class="hidden"
                @change="handleFileUpload"
              />
              
              <div v-if="formData.images.length === 0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p class="mt-2 text-gray-300">Click to upload images</p>
                <p class="text-sm text-gray-500">JPG, PNG or GIF (max. 5MB each)</p>
              </div>
              
              <div v-else class="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                <div v-for="(image, index) in previewImages" :key="index" class="relative">
                  <img :src="image" class="h-24 w-24 object-cover rounded-lg mx-auto" />
                  <button 
                    @click.stop="removeImage(index)" 
                    class="absolute top-0 right-0 bg-black bg-opacity-70 rounded-full p-1 transform translate-x-1/4 -translate-y-1/4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div v-if="formData.images.length < 4" class="flex items-center justify-center h-24 w-24 border border-dashed border-gray-700 rounded-lg cursor-pointer mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
            </div>
            <p v-if="errors.images" class="text-red-500 text-sm mt-1">{{ errors.images }}</p>
          </div>

          <!-- Upload Progress -->
          <div v-if="isSubmitting && uploadProgress > 0" class="mb-6">
            <div class="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
              <div 
                class="bg-spotify-green h-full transition-all duration-300"
                :style="{ width: `${uploadProgress}%` }"
              ></div>
            </div>
            <p class="text-xs text-gray-400 text-center mt-1">Uploading images: {{ uploadProgress }}%</p>
          </div>

          <!-- Submit Button -->
          <div class="text-center">
            <button 
              type="submit" 
              class="bg-spotify-green text-spotify-black px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-80 transition-colors w-full"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Submitting...' : 'Post Your Listing' }}
            </button>
          </div>
        </form>

        <!-- Success Message -->
        <div v-if="showSuccessMessage" class="mt-6 p-6 bg-green-900 bg-opacity-30 border border-spotify-green rounded-lg">
          <div class="text-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-spotify-green mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-white font-bold text-xl mb-2">Your listing has been posted successfully!</p>
            <p class="text-gray-300">It is now visible to everyone in the Exchange Hub.</p>
          </div>
          
          <!-- Listing link for sharing (only shown after successful submission) -->
          <div v-if="newListingId" class="bg-black bg-opacity-30 p-4 rounded-lg mb-4">
            <p class="text-white mb-2 font-medium">Share your listing with others:</p>
            <div class="flex items-center">
              <input 
                ref="shareUrlInput"
                type="text" 
                :value="getShareUrl(newListingId)"
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
            <div class="mt-3 flex justify-center space-x-3">
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
          
          <div class="flex justify-center">
            <button 
              @click="closeListingForm" 
              class="bg-white text-spotify-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '../lib/supabase'
import { useAuthStore } from '../stores/auth'
import ExchangeListings from '../components/ExchangeListings.vue'
import { getExchangeById } from '../services/exchangeService'

// Get user from auth store
const authStore = useAuthStore()
const user = authStore.user

// Get route information for shared listings
const route = useRoute()
const sharedListingId = ref(route.params.id as string || null)

// Reference to the listings component
const listingsComponent = ref<{
  refresh: () => Promise<void>,
  openListingDetails: (listing: any) => void
} | null>(null)

// Form visibility state
const showListingForm = ref(false)
const isSubmitting = ref(false)
const showSuccessMessage = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const uploadProgress = ref(0)
const errorMessage = ref('')

// State for the listing sharing functionality
const newListingId = ref<string | null>(null)
const shareUrlInput = ref<HTMLInputElement | null>(null)
const copied = ref(false)

// Form data options
const listingTypes = ['Sell', 'Rent', 'Adopt', 'Lost and Found']
const locations = ['Bidholi', 'Pondha', 'Doonga', 'Kandoli', 'Prem Nagar', 'City']

// Form data
const formData = reactive({
  listingType: '',
  location: '',
  description: '',
  contactMethod: '',
  contact: '',
  images: [] as File[]
})

// Form errors
const errors = reactive({
  listingType: '',
  location: '',
  description: '',
  contact: '',
  images: ''
})

// Image previews
const previewImages = ref<string[]>([])

// Open the listing form
const openListingForm = () => {
  // Remove login check
  showListingForm.value = true
  document.body.style.overflow = 'hidden' // Prevent scrolling while modal is open
}

// Close the listing form
const closeListingForm = () => {
  showListingForm.value = false
  document.body.style.overflow = ''
  
  // Reset form
  formData.listingType = ''
  formData.location = ''
  formData.description = ''
  formData.contactMethod = ''
  formData.contact = ''
  formData.images = []
  previewImages.value = []
  
  // Reset errors and state
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })
  
  showSuccessMessage.value = false
  errorMessage.value = ''
  uploadProgress.value = 0
  newListingId.value = null
  copied.value = false
}

// Trigger file input click
const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click()
  }
}

// Handle file upload
const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    // Limit to 4 images
    const totalImages = formData.images.length + input.files.length
    if (totalImages > 4) {
      errors.images = 'You can only upload up to 4 images'
      return
    }

    // Add the new files
    Array.from(input.files).forEach(file => {
      if (file.size <= 5 * 1024 * 1024) { // Max 5MB
        formData.images.push(file)
        
        // Create preview URL
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            previewImages.value.push(e.target.result as string)
          }
        }
        reader.readAsDataURL(file)
      } else {
        errors.images = 'Image size should be less than 5MB'
      }
    })
  }
}

// Remove image
const removeImage = (index: number) => {
  formData.images.splice(index, 1)
  previewImages.value.splice(index, 1)
}

// Select contact method
const selectContactMethod = (method: string) => {
  formData.contactMethod = method
  formData.contact = '' // Reset contact input when changing method
}

// Submit the form
const submitListing = async () => {
  errorMessage.value = ''
  
  // Validate form
  let isValid = true

  if (!formData.listingType) {
    errors.listingType = 'Please select a listing type'
    isValid = false
  } else {
    errors.listingType = ''
  }

  if (!formData.location) {
    errors.location = 'Please select a location'
    isValid = false
  } else {
    errors.location = ''
  }

  if (!formData.description.trim()) {
    errors.description = 'Please provide a description'
    isValid = false
  } else {
    errors.description = ''
  }

  if (!formData.contactMethod) {
    errors.contact = 'Please select a contact method'
    isValid = false
  } else if (!formData.contact.trim()) {
    errors.contact = 'Please provide contact information'
    isValid = false
  } else {
    // Validate WhatsApp number - should be numbers only
    if (formData.contactMethod === 'whatsapp' && !/^\d+$/.test(formData.contact)) {
      errors.contact = 'WhatsApp number should contain only digits'
      isValid = false
    } else {
      errors.contact = ''
    }
  }

  if (formData.images.length === 0) {
    errors.images = 'Please upload at least one image'
    isValid = false
  } else {
    errors.images = ''
  }

  if (!isValid) {
    return
  }

  isSubmitting.value = true
  
  try {
    // Format contact information based on the selected method
    let contactInfo = formData.contact
    if (formData.contactMethod === 'whatsapp') {
      contactInfo = `https://wa.me/${formData.contact}`
    } else if (formData.contactMethod === 'instagram') {
      contactInfo = `https://www.instagram.com/${formData.contact}/`
    }

    // 1. Upload images to Storage first
    // Generate a random ID for anonymous users
    const userId = user?.id || `anon_${Math.random().toString(36).substring(2, 15)}`
    const folderPath = `${userId}/${Date.now()}`
    const imageUrls = []
    
    // Upload each image
    for (let i = 0; i < formData.images.length; i++) {
      const file = formData.images[i]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}_${i}.${fileExt}`
      const filePath = `${folderPath}/${fileName}`
      
      // Upload the file to Supabase Storage
      const { error } = await supabase.storage
        .from('exchange_images')
        .upload(filePath, file)
      
      if (error) throw error
      
      // Get public URL for the uploaded file
      const { data: urlData } = supabase.storage
        .from('exchange_images')
        .getPublicUrl(filePath)
      
      if (urlData.publicUrl) {
        imageUrls.push(urlData.publicUrl)
      }
      
      // Update progress
      uploadProgress.value = Math.round(((i + 1) / formData.images.length) * 100)
    }
    
    // 2. Insert the exchange listing with image URLs stored in the image_urls field
    const listingData: any = {
      listing_type: formData.listingType,
      location: formData.location,
      description: formData.description,
      contact: contactInfo,
      image_urls: imageUrls,
      user_id: user?.id || null,
      status: 'active'
    }

    // Only include contact_type if we have a valid method
    if (formData.contactMethod === 'whatsapp' || formData.contactMethod === 'instagram') {
      listingData.contact_type = formData.contactMethod
    }
    
    const { data: exchange, error: exchangeError } = await supabase
      .from('exchanges')
      .insert([listingData])
      .select()
    
    if (exchangeError) throw exchangeError
    
    // Store the new listing ID for sharing
    if (exchange && exchange.length > 0) {
      newListingId.value = exchange[0].id
    }
    
    // Refresh the listings
    if (listingsComponent.value) {
      await listingsComponent.value.refresh()
    }
    
    // Success
    showSuccessMessage.value = true
    
    // Don't auto-close the form anymore to allow sharing
    // Instead let user manually close it when ready
  } catch (error: any) {
    console.error('Error creating listing:', error)
    errorMessage.value = `Error: ${error.message || 'Failed to create listing'}`
  } finally {
    isSubmitting.value = false
  }
}

// Generate a shareable URL for the listing
const getShareUrl = (id: string) => {
  return `${window.location.origin}/#/exchange/${id}`
}

// Copy the share URL to clipboard
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

// Share via WhatsApp
const shareViaWhatsApp = () => {
  if (!newListingId.value) return
  
  const url = getShareUrl(newListingId.value)
  const text = `Check out my listing on Exchange Hub: ${formData.description.substring(0, 50)}${formData.description.length > 50 ? '...' : ''}`
  
  window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank')
}

// Watch for route changes to handle direct URL navigation
watch(() => route.params.id, (newId) => {
  if (newId) {
    sharedListingId.value = newId as string
    openSharedListing(sharedListingId.value)
  }
})

// Open a specific listing by ID (from shared URL)
const openSharedListing = async (id: string) => {
  try {
    const listing = await getExchangeById(id)
    if (listing && listingsComponent.value) {
      // Wait briefly for listings component to fully initialize
      setTimeout(() => {
        if (listingsComponent.value) {
          listingsComponent.value.openListingDetails(listing)
        }
      }, 500)
    } else if (!listing) {
      // Handle case when listing is not found
      console.error('Listing not found:', id)
      // Optionally redirect or show error message
    }
  } catch (error) {
    console.error('Error loading shared listing:', error)
  }
}

// Watch for component mounting and check for shared listing
onMounted(async () => {
  if (sharedListingId.value) {
    await openSharedListing(sharedListingId.value)
  }
  
  return () => {
    previewImages.value.forEach(url => URL.revokeObjectURL(url))
  }
})
</script>

<style scoped>
.max-h-90vh {
  max-height: 90vh;
}
</style> 