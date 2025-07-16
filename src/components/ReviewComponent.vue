<template>
  <div class="bg-spotify-darkgray rounded-lg p-6 space-y-6">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <span class="text-spotify-white font-bold text-lg mr-2">{{ averageRating.toFixed(1) }}</span>
        <div class="flex">
          <template v-for="i in 5" :key="i">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              :class="[
                'w-5 h-5', 
                i <= Math.round(averageRating) ? 'text-spotify-green' : 'text-spotify-lightgray'
              ]" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </template>
        </div>
        <span class="ml-2 text-spotify-lightgray">({{ reviews.length }} reviews)</span>
      </div>
    </div>

    <div v-if="loading" class="flex justify-center py-8">
      <div class="text-spotify-green">Loading reviews...</div>
    </div>

    <div v-else-if="error" class="text-red-500 text-center py-8">
      {{ error }}
    </div>

    <div v-else-if="reviews.length === 0" class="text-center py-6">
      <p class="text-spotify-white mb-2">No reviews yet.</p>
      <p class="text-spotify-lightgray">Be the first to review this product!</p>
    </div>

    <div v-else class="space-y-6">
      <div v-for="review in reviews" :key="review.id" class="border-b border-spotify-darkgray pb-6 last:border-0 last:pb-0">
        <div class="flex justify-between">
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-spotify-green flex items-center justify-center text-white font-bold">
              {{ review.user_name.charAt(0).toUpperCase() }}
            </div>
            <div class="ml-3">
              <p class="text-spotify-white font-semibold">{{ review.user_name }}</p>
              <p class="text-spotify-lightgray text-sm">{{ formatDate(review.created_at) }}</p>
            </div>
          </div>
          <div class="flex">
            <template v-for="i in 5" :key="i">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                :class="[
                  'w-5 h-5', 
                  i <= review.rating ? 'text-spotify-green' : 'text-spotify-lightgray'
                ]" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </template>
          </div>
        </div>
        <p class="text-spotify-white mt-3">{{ review.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { supabase } from '../lib/supabase'

interface Review {
  id: string;
  product_id: string;
  product_type: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
  updated_at: string;
}

const props = defineProps<{
  productId: string;
  productType: string;
}>()

const reviews = ref<Review[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const averageRating = computed(() => {
  if (reviews.value.length === 0) return 0
  const sum = reviews.value.reduce((acc, review) => acc + review.rating, 0)
  return sum / reviews.value.length
})

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

const fetchReviews = async () => {
  try {
    loading.value = true
    error.value = null
    
    const { data, error: fetchError } = await supabase
      .from('reviews')
      .select('*')
      .eq('product_id', props.productId)
      .eq('product_type', props.productType)
      .order('created_at', { ascending: false })

    if (fetchError) throw fetchError
    reviews.value = data as Review[]
  } catch (err: any) {
    console.error('Error fetching reviews:', err)
    error.value = err.message || 'Failed to load reviews'
  } finally {
    loading.value = false
  }
}

watch(() => props.productId, () => {
  if (props.productId) {
    fetchReviews()
  }
})

onMounted(() => {
  if (props.productId) {
    fetchReviews()
  }
})

// Expose fetchReviews method to parent components
defineExpose({ fetchReviews })
</script> 