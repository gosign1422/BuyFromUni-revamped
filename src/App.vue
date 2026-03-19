<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-grow pt-28 md:pt-32 text-white">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* =============================================
   DESIGN SYSTEM — BuyFromUni 2.0
   ============================================= */

:root {
  /* Core palette */
  --green-500: #1DB954;
  --green-400: #1ed760;
  --green-600: #169c46;
  --green-glow: rgba(29, 185, 84, 0.35);
  --green-subtle: rgba(29, 185, 84, 0.08);

  /* Surfaces */
  --surface-0: #050505;
  --surface-1: #0a0a0a;
  --surface-2: #111111;
  --surface-3: #181818;
  --surface-4: #222222;
  --surface-5: #2a2a2a;

  /* Glass */
  --glass-bg: rgba(10, 10, 10, 0.75);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-blur: 20px;

  /* Text */
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.65);
  --text-muted: rgba(255, 255, 255, 0.35);

  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.04);
  --border-default: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(29, 185, 84, 0.25);
  --border-active: rgba(29, 185, 84, 0.5);

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 30px rgba(0,0,0,0.5);
  --shadow-xl: 0 16px 50px rgba(0,0,0,0.6);
  --shadow-green: 0 4px 20px rgba(29, 185, 84, 0.15);
  --shadow-green-lg: 0 8px 40px rgba(29, 185, 84, 0.2);

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Transitions */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

body {
  background: var(--surface-0);
  color: var(--text-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  -webkit-font-smoothing: antialiased;
}

/* Text defaults - avoid blanket overrides */
p, span, li {
  color: var(--text-secondary);
}

/* Link styles */
a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--green-400);
}

/* =============================================
   GLASS CARDS
   ============================================= */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  transition: all 0.4s var(--ease-out);
}

.glass-card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-green);
  transform: translateY(-2px);
}

/* =============================================
   SURFACE CARDS
   ============================================= */
.surface-card {
  background: var(--surface-2);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  transition: all 0.4s var(--ease-out);
}

.surface-card:hover {
  background: var(--surface-3);
  border-color: var(--border-hover);
  box-shadow: var(--shadow-green);
  transform: translateY(-3px);
}

/* =============================================
   BUTTONS
   ============================================= */
.btn-glow {
  position: relative;
  background: var(--green-500);
  color: #000;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition: all 0.3s var(--ease-out);
  overflow: hidden;
  letter-spacing: -0.01em;
}

.btn-glow::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: var(--green-500);
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  filter: blur(12px);
  transition: opacity 0.4s ease;
}

.btn-glow:hover {
  background: var(--green-400);
  transform: translateY(-2px);
  box-shadow: var(--shadow-green-lg);
}

.btn-glow:hover::before {
  opacity: 0.6;
}

.btn-glow:active {
  transform: translateY(0);
}

.btn-outline-glow {
  position: relative;
  background: transparent;
  color: var(--green-500);
  font-weight: 600;
  padding: 12px 28px;
  border-radius: var(--radius-full);
  border: 1.5px solid var(--green-500);
  cursor: pointer;
  transition: all 0.3s var(--ease-out);
}

.btn-outline-glow:hover {
  background: var(--green-subtle);
  color: var(--green-400);
  border-color: var(--green-400);
  box-shadow: 0 0 20px rgba(29, 185, 84, 0.15);
  transform: translateY(-1px);
}

/* =============================================
   INPUTS
   ============================================= */
.input-glass {
  background: var(--surface-2);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 12px 16px;
  color: var(--text-primary);
  font-size: 15px;
  transition: all 0.3s ease;
  outline: none;
}

.input-glass:focus {
  border-color: var(--green-500);
  box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.1);
}

.input-glass::placeholder {
  color: var(--text-muted);
}

/* =============================================
   SELECT
   ============================================= */
.select-glass {
  background: var(--surface-3);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  color: var(--text-primary);
  font-size: 14px;
  transition: all 0.3s ease;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}

.select-glass:focus {
  border-color: var(--green-500);
  box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.1);
}

/* =============================================
   BADGES
   ============================================= */
.badge-glass {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--surface-3);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-full);
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  color: var(--green-400);
  transition: all 0.3s ease;
}

.badge-glass:hover {
  background: var(--green-subtle);
  border-color: var(--border-hover);
}

/* =============================================
   SECTION HEADINGS
   ============================================= */
.section-heading {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-heading-green {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, var(--green-400) 0%, var(--green-500) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* =============================================
   DIVIDERS
   ============================================= */
.divider-glow {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-hover), transparent);
  border: none;
}

/* =============================================
   ANIMATIONS
   ============================================= */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(29, 185, 84, 0.1); }
  50% { box-shadow: 0 0 30px rgba(29, 185, 84, 0.25); }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s var(--ease-out) forwards;
}

.animate-slide-in {
  animation: slide-in 0.5s var(--ease-out) forwards;
}

/* Staggered children — visibility is never hidden, animation is cosmetic */
.stagger-children > * {
  animation: fade-in-up 0.5s var(--ease-out) both;
}
.stagger-children > *:nth-child(1) { animation-delay: 0.05s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.15s; }
.stagger-children > *:nth-child(4) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(5) { animation-delay: 0.25s; }
.stagger-children > *:nth-child(6) { animation-delay: 0.3s; }

/* =============================================
   PAGE TRANSITIONS
   ============================================= */
.fade-enter-active {
  transition: opacity 0.25s ease, transform 0.25s var(--ease-out);
}
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.fade-leave-to {
  opacity: 0;
}

/* =============================================
   CUSTOM SCROLLBAR
   ============================================= */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: var(--surface-0);
}

::-webkit-scrollbar-thumb {
  background: var(--surface-4);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--green-500);
}

/* Selection */
::selection {
  background: rgba(29, 185, 84, 0.3);
  color: white;
}

/* =============================================
   LEGACY COMPATIBILITY 
   (keeping old class names mapped to new system)
   ============================================= */
.card-metallic {
  background: var(--surface-2);
  border: 1px solid var(--border-default);
  box-shadow: var(--shadow-md);
  transition: all 0.4s var(--ease-out);
}

.card-metallic:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-green);
  border-color: var(--border-hover);
}

.btn-metallic {
  transition: all 0.3s var(--ease-out);
}

.btn-metallic:hover {
  transform: translateY(-2px);
}

.input-metallic {
  background: var(--surface-2);
  border: 1px solid var(--border-default);
  transition: all 0.3s ease;
}

.input-metallic:focus {
  border-color: var(--green-500);
  box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.1);
}

.select-metallic {
  background: var(--surface-3);
  border: 1px solid var(--border-default);
  transition: all 0.3s ease;
}

.select-metallic:focus {
  border-color: var(--green-500);
  box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.1);
}

.badge-metallic {
  background: var(--surface-3);
  border: 1px solid var(--border-default);
}

.icon-metallic {
  transition: all 0.3s var(--ease-out);
}

.icon-metallic:hover {
  transform: scale(1.05);
}

.modal-metallic {
  background: var(--surface-2);
  border: 1px solid var(--border-default);
  box-shadow: var(--shadow-xl);
  backdrop-filter: blur(20px);
}

.hover-metallic {
  transition: all 0.4s var(--ease-out);
}

.hover-metallic:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-green);
  border-color: var(--border-hover);
}

/* Headings - no longer use background-clip text by default, 
   individual components can opt in */
h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
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
  background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
  transform: skewX(-20deg);
  animation: shine 3s infinite;
}
@keyframes shine {
  0% { left: -75%; }
  100% { left: 125%; }
}

/* =============================================
   AMBIENT BACKGROUND GLOW
   ============================================= */
.ambient-glow {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
  background: 
    radial-gradient(ellipse 60% 50% at 10% 0%, rgba(29, 185, 84, 0.04) 0%, transparent 60%),
    radial-gradient(ellipse 40% 60% at 90% 100%, rgba(29, 185, 84, 0.03) 0%, transparent 50%);
}
</style>