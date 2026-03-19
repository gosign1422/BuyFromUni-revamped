<template>
  <nav class="fixed top-0 left-0 right-0 z-50 nav-glass">
    <!-- Main Nav Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 group" @click="scrollToTop">
          <div class="w-8 h-8 rounded-lg bg-spotify-green flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <span class="text-black font-black text-sm">B</span>
          </div>
          <span class="text-xl font-extrabold tracking-tight text-white">
            Buy<span class="text-spotify-green">From</span>Uni
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path" 
            class="nav-link"
            :class="{ 'nav-link-active': isActive(link.path) }"
            @click="scrollToTop"
          >
            {{ link.label }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <div class="hamburger-icon" :class="{ 'open': isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-show="isMobileMenuOpen" class="md:hidden mobile-menu-panel">
        <div class="px-4 py-4 space-y-1">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path" 
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': isActive(link.path) }"
            @click="handleMobileNavClick"
          >
            <span class="mobile-nav-indicator" :class="{ 'active': isActive(link.path) }"></span>
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/accommodations', label: 'Accommodations' },
  { path: '/about', label: 'About' },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

// Mobile menu
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleMobileNavClick = () => {
  closeMobileMenu()
  scrollToTop()
}
</script>

<style scoped>
.nav-glass {
  background: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(20px) saturate(1.8);
  -webkit-backdrop-filter: blur(20px) saturate(1.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

/* Desktop nav links */
.nav-link {
  position: relative;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  transition: all 0.25s ease;
  letter-spacing: -0.01em;
}

.nav-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.05);
}

.nav-link-active {
  color: #1DB954 !important;
  background: rgba(29, 185, 84, 0.08);
}

.nav-link-active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: #1DB954;
  border-radius: 1px;
}

/* Hamburger icon */
.hamburger-icon {
  width: 18px;
  height: 14px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger-icon span {
  display: block;
  width: 100%;
  height: 2px;
  background: white;
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: center;
}

.hamburger-icon.open span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.hamburger-icon.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger-icon.open span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Mobile menu */
.mobile-menu-panel {
  background: rgba(5, 5, 5, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  transition: all 0.25s ease;
}

.mobile-nav-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.05);
}

.mobile-nav-link-active {
  color: #1DB954 !important;
  background: rgba(29, 185, 84, 0.08);
}

.mobile-nav-indicator {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.mobile-nav-indicator.active {
  width: 6px;
  height: 6px;
  background: #1DB954;
  box-shadow: 0 0 8px rgba(29, 185, 84, 0.5);
}

/* Mobile menu transition */
.mobile-menu-enter-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.mobile-menu-leave-active {
  transition: all 0.2s ease-in;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>