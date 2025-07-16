<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-grow pt-32 md:pt-36 text-white">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --metallic-gradient: linear-gradient(145deg, #2d2d2d, #1a1a1a);
  --metallic-border: 1px solid rgba(255, 255, 255, 0.1);
  --metallic-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  --metallic-hover-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  --metallic-text-gradient: linear-gradient(145deg, #ffffff, #cccccc);
}

body {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  font-family: 'Inter', sans-serif;
}

/* Override any default text colors */
p, span, div, li, a {
  color: white;
}

/* Ensure links have the hover effect */
a:not(.text-spotify-green) {
  color: white;
  transition: all 0.3s ease;
}

a:hover:not(.text-spotify-green) {
  color: #1DB954;
  text-shadow: 0 0 8px rgba(29, 185, 84, 0.3);
}

/* Metallic button styles */
.btn-metallic {
  background: var(--metallic-gradient);
  border: var(--metallic-border);
  box-shadow: var(--metallic-shadow);
  transition: all 0.3s ease;
}

.btn-metallic:hover {
  transform: translateY(-2px);
  box-shadow: var(--metallic-hover-shadow);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Metallic card styles */
.card-metallic {
  background: var(--metallic-gradient);
  border: var(--metallic-border);
  box-shadow: var(--metallic-shadow);
  transition: all 0.3s ease;
}

.card-metallic:hover {
  transform: translateY(-2px);
  box-shadow: var(--metallic-hover-shadow);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Metallic input styles */
.input-metallic {
  background: var(--metallic-gradient);
  border: var(--metallic-border);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.input-metallic:focus {
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(255, 255, 255, 0.1);
}

/* Metallic select styles */
.select-metallic {
  background: var(--metallic-gradient);
  border: var(--metallic-border);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.select-metallic:focus {
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(255, 255, 255, 0.1);
}

/* Metallic heading styles */
h1, h2, h3, h4, h5, h6 {
  background: var(--metallic-text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: var(--metallic-gradient);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(145deg, #3d3d3d, #2a2a2a);
}

/* Metallic badge styles */
.badge-metallic {
  background: var(--metallic-gradient);
  border: var(--metallic-border);
  box-shadow: var(--metallic-shadow);
  transition: all 0.3s ease;
}

/* Metallic icon styles */
.icon-metallic {
  background: var(--metallic-gradient);
  border: var(--metallic-border);
  box-shadow: var(--metallic-shadow);
  transition: all 0.3s ease;
}

.icon-metallic:hover {
  transform: scale(1.05);
  box-shadow: var(--metallic-hover-shadow);
}

/* Metallic modal styles */
.modal-metallic {
  background: var(--metallic-gradient);
  border: var(--metallic-border);
  box-shadow: var(--metallic-shadow);
  backdrop-filter: blur(10px);
}

/* Metallic hover effects */
.hover-metallic {
  transition: all 0.3s ease;
}

.hover-metallic:hover {
  transform: translateY(-2px);
  box-shadow: var(--metallic-hover-shadow);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Metallic text effects */
.text-metallic {
  background: var(--metallic-text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Metallic border effects */
.border-metallic {
  border: var(--metallic-border);
  box-shadow: var(--metallic-shadow);
  transition: all 0.3s ease;
}

.border-metallic:hover {
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: var(--metallic-hover-shadow);
}

/* Shine effect for buttons */
.shine-effect {
  position: relative;
  overflow: hidden;
}
.shine-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.1) 100%);
  transform: skewX(-20deg);
  animation: shine 2.5s infinite;
}
@keyframes shine {
  0% { left: -75%; }
  100% { left: 125%; }
}
</style>