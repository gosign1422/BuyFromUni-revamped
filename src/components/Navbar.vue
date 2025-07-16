<template>
  <nav class="fixed top-0 left-0 right-0 bg-spotify-black z-50">
    <!-- Logo and Search -->
    <div class="bg-spotify-black border-b border-spotify-green">
      <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div class="w-1/3 hidden md:block">
          <!-- Left side placeholder -->
        </div>
        
        <div class="flex-1 md:flex-none text-center">
          <router-link to="/" class="inline-block" @click="scrollToTop">
            <span class="text-4xl font-extrabold italic text-spotify-green">BuyFromUni</span>
          </router-link>
        </div>
        
        <div class="w-1/3 flex justify-end">
          <!-- Right side placeholder -->
        </div>
      </div>
    </div>
    
    <!-- Main Navigation -->
    <div class="bg-spotify-black border-b border-spotify-green">
      <div class="max-w-7xl mx-auto px-4">
        <div class="hidden md:flex items-center justify-center space-x-8">
          <router-link to="/" class="py-3 text-base font-bold text-white hover:text-spotify-green transition-colors duration-200" @click="scrollToTop">
            HOME
          </router-link>

          <router-link to="/accommodations" class="py-3 text-base font-bold text-white hover:text-spotify-green transition-colors duration-200" @click="scrollToTop">
            ACCOMMODATIONS
          </router-link>
          
          <router-link to="/exchange" class="py-3 text-base font-bold text-white hover:text-spotify-green transition-colors duration-200" @click="scrollToTop">
            EXCHANGE
          </router-link>
          
          <router-link to="/about" class="py-3 text-base font-bold text-white hover:text-spotify-green transition-colors duration-200" @click="scrollToTop">
            ABOUT US
          </router-link>
          
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden py-3 flex justify-between items-center">
          <button @click="toggleMobileMenu" class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <!-- Removed MENU text -->
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMobileMenuOpen" class="md:hidden bg-spotify-black border-b border-spotify-green">
      <div class="px-4 py-2">
        <div class="flex flex-col space-y-3">
          <router-link 
            to="/" 
            class="text-base font-bold text-white hover:text-spotify-green transition-colors duration-200 py-2"
            @click="handleMobileNavClick"
          >
            HOME
          </router-link>
          
          <router-link 
            to="/accommodations" 
            class="text-base font-bold text-white hover:text-spotify-green transition-colors duration-200 py-2"
            @click="handleMobileNavClick"
          >
            ACCOMMODATIONS
          </router-link>
          
          <router-link 
            to="/exchange" 
            class="text-base font-bold text-white hover:text-spotify-green transition-colors duration-200 py-2"
            @click="handleMobileNavClick"
          >
            EXCHANGE
          </router-link>
          
          <router-link 
            to="/about" 
            class="text-base font-bold text-white hover:text-spotify-green transition-colors duration-200 py-2"
            @click="handleMobileNavClick"
          >
            ABOUT US
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Mobile menu
const isMobileMenuOpen = ref(false)

// Mobile menu toggle
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close function
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Function to scroll to top when a link is clicked
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Handle mobile navigation click - close menu and scroll to top
const handleMobileNavClick = () => {
  closeMobileMenu();
  scrollToTop();
}
</script>

<style scoped>
/* Add a CSS transition for smoother mobile menu animation */
.md\:hidden {
  transition: all 0.3s ease;
}
</style>