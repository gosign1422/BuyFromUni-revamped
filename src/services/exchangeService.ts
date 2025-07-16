import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export interface Exchange {
  id: string
  title: string
  description: string
  image_urls: string[]
  listing_type: 'give' | 'request' | 'exchange'
  contact_method: 'whatsapp' | 'instagram'
  contact_info: string
  contact: string  // URL for contact (WhatsApp or Instagram)
  location: string
  created_at: string
  status: 'active' | 'archived'
  user_id?: string
}

interface ExchangeFilters {
  listingType?: string
  location?: string
  searchQuery?: string
}

/**
 * Get all exchange listings with optional filters
 */
export const getExchangeListings = async (filters: ExchangeFilters = {}) => {
  const { listingType, location, searchQuery } = filters
  
  let query = supabase
    .from('exchanges')
    .select('*')
    .order('created_at', { ascending: false })
  
  // Apply filters
  if (listingType && listingType !== 'all') {
    query = query.eq('listing_type', listingType)
  }
  
  if (location && location !== 'all') {
    query = query.eq('location', location)
  }
  
  if (searchQuery) {
    query = query.ilike('description', `%${searchQuery}%`)
  }
  
  const { data, error } = await query
  
  if (error) {
    console.error('Error fetching exchange listings:', error)
    throw error
  }
  
  return data as Exchange[]
}

/**
 * Get a single exchange listing by ID
 */
export const getExchangeById = async (id: string) => {
  const { data, error } = await supabase
    .from('exchanges')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('Error fetching exchange by ID:', error)
    throw error
  }
  
  return data as Exchange
}

/**
 * Create a new exchange listing
 */
export const createExchangeListing = async (listing: Omit<Exchange, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('exchanges')
    .insert(listing)
    .select()
  
  if (error) {
    console.error('Error creating exchange listing:', error)
    throw error
  }
  
  return data[0] as Exchange
}

/**
 * Delete an exchange listing
 */
export const deleteExchangeListing = async (id: string) => {
  const { error } = await supabase
    .from('exchanges')
    .delete()
    .eq('id', id)
  
  if (error) {
    console.error('Error deleting exchange listing:', error)
    throw error
  }
  
  return true
}

/**
 * Upload images for an exchange listing
 */
export const uploadExchangeImages = async (files: File[], folderId: string) => {
  const uploadPromises = files.map(async (file: File) => {
    const fileName = `${folderId}/${Date.now()}-${file.name}`
    const { error } = await supabase.storage
      .from('exchange-images')
      .upload(fileName, file)
    
    if (error) {
      console.error('Error uploading image:', error)
      throw error
    }
    
    // Get public URL for the uploaded image
    const { data: { publicUrl } } = supabase.storage
      .from('exchange-images')
      .getPublicUrl(fileName)
    
    return publicUrl
  })
  
  return await Promise.all(uploadPromises)
}

/**
 * Get all available locations for filtering
 */
export const getExchangeLocations = async () => {
  const { data, error } = await supabase
    .from('exchanges')
    .select('location')
    .order('location')
  
  if (error) {
    console.error('Error fetching exchange locations:', error)
    throw error
  }
  
  // Remove duplicates
  const uniqueLocations = [...new Set(data.map(item => item.location))]
  return uniqueLocations
}

/**
 * Fetch exchange listings by listing type
 */
export async function getExchangesByType(listingType: string): Promise<Exchange[]> {
  try {
    // Fetch exchanges by type
    const { data: exchanges, error: exchangesError } = await supabase
      .from('exchanges')
      .select('*')
      .eq('status', 'active')
      .eq('listing_type', listingType)
      .order('created_at', { ascending: false })
    
    if (exchangesError) throw exchangesError
    return exchanges || []
  } catch (error) {
    console.error(`Error fetching exchanges of type ${listingType}:`, error)
    return []
  }
}

/**
 * Fetch exchange listings by location
 */
export async function getExchangesByLocation(location: string): Promise<Exchange[]> {
  try {
    // Fetch exchanges by location
    const { data: exchanges, error: exchangesError } = await supabase
      .from('exchanges')
      .select('*')
      .eq('status', 'active')
      .eq('location', location)
      .order('created_at', { ascending: false })
    
    if (exchangesError) throw exchangesError
    return exchanges || []
  } catch (error) {
    console.error(`Error fetching exchanges from location ${location}:`, error)
    return []
  }
}

/**
 * Fetch user's exchange listings (for user dashboard)
 */
export async function getUserExchanges(userId: string): Promise<Exchange[]> {
  try {
    // Fetch user's exchanges
    const { data: exchanges, error: exchangesError } = await supabase
      .from('exchanges')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (exchangesError) throw exchangesError
    return exchanges || []
  } catch (error) {
    console.error(`Error fetching user's exchanges:`, error)
    return []
  }
}

/**
 * Update the status of an exchange listing
 */
export async function updateExchangeStatus(exchangeId: string, newStatus: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('exchanges')
      .update({ status: newStatus })
      .eq('id', exchangeId)
    
    if (error) throw error
    return true
  } catch (error) {
    console.error(`Error updating exchange status:`, error)
    return false
  }
} 