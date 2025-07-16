<template>
  <div class="min-h-screen bg-spotify-black py-8">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Product Images -->
        <div class="space-y-4">
          <div class="relative aspect-video overflow-hidden rounded-lg">
            <img
              :src="property.imageUrl"
              :alt="property.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 right-4 bg-spotify-green text-white px-3 py-1 rounded-full text-sm font-medium">
              {{ property.details.type }}
            </div>
          </div>
          <!-- Additional Images -->
          <div class="grid grid-cols-3 gap-2">
            <div v-for="(image, index) in property.images.slice(0, 3)" :key="image.id" class="aspect-video rounded-lg overflow-hidden">
              <img v-if="!image.id.includes('vid')" :src="image.url" :alt="image.alt" class="w-full h-full object-cover cursor-pointer" @click="openGallery(index)" />
              <video v-else controls class="w-full h-full object-cover">
                <source :src="image.url" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="space-y-6">
          <div>
            <h1 class="text-3xl font-bold text-spotify-white">{{ property.title }}</h1>
            <p class="text-spotify-lightgray mt-2">{{ property.location }}</p>
            <p class="text-spotify-lightgray mt-1">Distance from campus: {{ property.distance }}</p>
          </div>

          <div class="space-y-2">
            <div class="flex items-center space-x-3">
              <span class="text-3xl font-bold text-spotify-green">₹{{ property.price.includes('/year') ? property.price : `${property.price}/month` }}</span>
            </div>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold text-spotify-white">Description</h2>
            <p class="text-spotify-lightgray">
              {{ property.description }}
            </p>
          </div>

          <!-- Amenities -->
          <div class="space-y-4">
            <h2 class="text-xl font-semibold text-spotify-white">Amenities</h2>
            <div class="grid grid-cols-2 gap-2">
              <div v-for="amenity in property.amenities" :key="amenity" class="flex items-center space-x-2">
                <span class="text-spotify-green">✓</span>
                <span class="text-spotify-lightgray">{{ amenity }}</span>
              </div>
            </div>
          </div>

          <!-- Property Details -->
          <div class="space-y-4">
            <h2 class="text-xl font-semibold text-spotify-white">Property Details</h2>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-spotify-lightgray font-medium">Type</p>
                <p class="text-spotify-white">{{ property.details.type }}</p>
              </div>
              <div>
                <p class="text-spotify-lightgray font-medium">Gender</p>
                <p class="text-spotify-white">{{ property.details.gender }}</p>
              </div>
            </div>
            <div class="space-y-2">
              <p class="text-spotify-lightgray font-medium">Features</p>
              <ul class="list-disc pl-5 text-spotify-lightgray">
                <li v-for="feature in property.details.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="bg-spotify-darkgray rounded-lg p-4">
            <h3 class="text-lg font-semibold text-spotify-white mb-2">Contact Information</h3>
            <p class="text-spotify-lightgray">{{ property.contact.name }}</p>
            <p class="text-spotify-lightgray">{{ property.contact.phone }}</p>
          </div>

          <div class="flex space-x-4">
            <a :href="`tel:${property.contact.phone}`" class="btn-primary flex-1 text-center py-2 rounded-lg bg-spotify-green text-white font-bold hover:bg-opacity-90 transition-colors">Call Owner</a>
            <a :href="`https://wa.me/91${property.contact.phone}`" target="_blank" class="btn-secondary flex-1 text-center py-2 rounded-lg border border-spotify-green text-spotify-green font-bold hover:bg-spotify-green hover:bg-opacity-10 transition-colors">WhatsApp</a>
          </div>

          <!-- Share Section -->
          <div class="pt-4">
            <h3 class="text-lg font-semibold text-spotify-white mb-2">Share this accommodation</h3>
            <div class="flex items-center space-x-4">
              <button 
                @click="copyProductLink" 
                class="text-spotify-lightgray hover:text-spotify-white transition-colors flex items-center space-x-2"
              >
                <span>Copy Link</span>
              </button>
              <span v-if="linkCopied" class="text-spotify-green text-sm">Link copied!</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <div class="mt-16 space-y-8">
        <ReviewComponent 
          productId="accommodation-product1" 
          productType="accommodation" 
          ref="reviewComponentRef"
        />
        
        <ReviewForm 
          productId="accommodation-product1" 
          productType="accommodation" 
          @review-submitted="handleReviewSubmitted"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ReviewComponent from '../../../components/ReviewComponent.vue'
import ReviewForm from '../../../components/ReviewForm.vue'

const property = {
  title: 'Property 2',
    description: 'Modern, fully furnished apartment perfect for students. Located close to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Pondha, Dehradun',
    price: '35,000',
    distance: '2 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612381/6_scgvdu.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612381/6_scgvdu.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612383/3_ddirq2.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612380/5_wjqnwn.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612381/1_d1l9lj.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612383/4_celey0.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612383/2_vgpaww.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739612383/vid-11_boqdoo.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','TV','AC','WiFi','Cleaning Service','Lift','Gas Stove','Parking','Fridge'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 AC, 1 Large Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom per room(with Geyser)',
        'Common Area - Drawing & Sofa Set',
        'Fully Equipped Kitchen + RO Purifier',
      ]
    }
}

const linkCopied = ref(false)
const reviewComponentRef = ref<InstanceType<typeof ReviewComponent> | null>(null)

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

const openGallery = (index: number) => {
  // This function would open a gallery modal starting at the selected image
  console.log('Opening gallery at index:', index)
  // Implementation of gallery modal would go here
}

const handleReviewSubmitted = () => {
  // Refresh reviews when a new review is submitted
  if (reviewComponentRef.value) {
    reviewComponentRef.value.fetchReviews()
  }
}

// Update page metadata
document.title = `${property.title} - BuyFromUni`
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 