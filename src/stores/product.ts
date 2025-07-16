import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../lib/supabase'

// Define the Product interface
export interface Product {
  id: string;
  name: string;
  price: number;
  sale_price?: number;
  description: string;
  image_url: string;
  category: string;
  condition: string;
  discount?: number;
  created_at: string;
  updated_at: string;
}

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchProducts = async () => {
    try {
      loading.value = true
      const { data, error: fetchError } = await supabase
        .from('products')
        .select('*')
      
      if (fetchError) throw fetchError
      
      products.value = data as Product[]
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const addProduct = async (product: Partial<Product>) => {
    try {
      loading.value = true
      const { data, error: insertError } = await supabase
        .from('products')
        .insert(product)
        .select()
      
      if (insertError) throw insertError
      
      products.value.push(data[0] as Product)
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    loading,
    error,
    fetchProducts,
    addProduct
  }
})