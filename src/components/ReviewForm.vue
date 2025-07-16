<template>
  <div class="bg-spotify-darkgray rounded-lg p-6">
    <h2 class="text-2xl font-bold text-spotify-white mb-6">Write a Review</h2>
    
    <form @submit.prevent="submitReview" class="space-y-4">
      <div>
        <label for="name" class="block text-spotify-white mb-2">Your Name</label>
        <input 
          type="text" 
          id="name" 
          v-model="reviewData.user_name" 
          class="w-full bg-spotify-black text-spotify-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-spotify-green"
          required
        />
      </div>
      
      <div>
        <label class="block text-spotify-white mb-2">Rating</label>
        <div class="flex">
          <template v-for="i in 5" :key="i">
            <button 
              type="button"
              @click="reviewData.rating = i"
              class="focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                :class="[
                  'w-8 h-8 cursor-pointer transition-colors', 
                  i <= reviewData.rating ? 'text-spotify-green' : 'text-spotify-lightgray hover:text-spotify-green'
                ]" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
          </template>
        </div>
      </div>
      
      <div>
        <label for="comment" class="block text-spotify-white mb-2">Your Review</label>
        <textarea 
          id="comment" 
          v-model="reviewData.comment" 
          rows="4" 
          class="w-full bg-spotify-black text-spotify-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-spotify-green"
          required
        ></textarea>
      </div>
      
      <div class="pt-2">
        <button 
          type="submit" 
          class="bg-spotify-green text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Submitting...' : 'Submit Review' }}
        </button>
        
        <div v-if="submitError" class="mt-4 text-red-500">
          {{ submitError }}
        </div>
        
        <div v-if="submitSuccess" class="mt-4 text-spotify-green">
          Your review has been submitted successfully!
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '../lib/supabase'

interface ReviewData {
  user_name: string;
  rating: number;
  comment: string;
  product_id: string;
  product_type: string;
}

interface Review extends ReviewData {
  id: string;
  created_at: string;
  updated_at: string;
}

const props = defineProps<{
  productId: string;
  productType: string;
}>()

const emit = defineEmits(['review-submitted'])

const reviewData = ref<ReviewData>({
  user_name: '',
  rating: 0,
  comment: '',
  product_id: props.productId,
  product_type: props.productType
})

const isSubmitting = ref(false)
const submitError = ref<string | null>(null)
const submitSuccess = ref(false)

const submitReview = async () => {
  if (reviewData.value.rating === 0) {
    submitError.value = 'Please select a rating'
    return
  }
  
  try {
    isSubmitting.value = true
    submitError.value = null
    
    const { data, error } = await supabase
      .from('reviews')
      .insert([
        {
          user_name: reviewData.value.user_name,
          rating: reviewData.value.rating,
          comment: reviewData.value.comment,
          product_id: props.productId,
          product_type: props.productType
        }
      ])
      .select()
    
    if (error) throw error
    
    // Reset form
    reviewData.value = {
      user_name: '',
      rating: 0,
      comment: '',
      product_id: props.productId,
      product_type: props.productType
    }
    
    submitSuccess.value = true
    setTimeout(() => {
      submitSuccess.value = false
    }, 3000)
    
    // Emit event to parent component to refresh reviews
    emit('review-submitted', data?.[0] as Review)
    
  } catch (err: unknown) {
    submitError.value = err instanceof Error ? err.message : 'An unknown error occurred'
  } finally {
    isSubmitting.value = false
  }
}
</script> 