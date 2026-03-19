<template>
  <div class="min-h-screen">
    <!-- Ambient background -->
    <div class="ambient-glow"></div>

    <!-- Hero Banner Section -->
    <div class="pt-4 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <!-- Main Banner -->
        <div class="hero-banner grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-2xl">
          <!-- Left: Copy -->
          <div class="relative flex flex-col justify-center p-8 md:p-12 min-h-[340px] md:min-h-[420px] hero-left">
            <!-- Animated gradient orbs -->
            <div class="hero-orb hero-orb-1"></div>
            <div class="hero-orb hero-orb-2"></div>
            
            <div class="relative z-10">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 text-sm text-white/70">
                <span class="w-2 h-2 rounded-full bg-spotify-green animate-pulse"></span>
              </div>
              
              <h1 class="hero-title">
                study <span class="hero-title-bold">LESS</span>
              </h1>
              <h2 class="hero-subtitle">
                score <span class="hero-title-bold">MORE</span>
              </h2>
              
              <p class="text-white/40 text-base md:text-lg mt-4 mb-8 max-w-md leading-relaxed">
                Your one-stop platform for university essentials — find housing, study resources, and more.
              </p>
              
              <a 
                href="https://unicheatsheet.com" 
                target="_blank" 
                class="btn-glow inline-flex items-center gap-2 text-lg shine-effect"
              >
                Show Me The Goods
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>
          
          <!-- Right: Featured Image -->
          <div class="relative bg-black min-h-[260px] md:min-h-[420px] flex items-center justify-center overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dqu8ex7bn/image/upload/v1745298866/image_2025-04-22_104418664_nmhnoe.png" 
              alt="UniCheatSheet" 
              class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
            <!-- Overlay gradient to blend with left panel -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>

        <!-- Quick Stats Bar -->
        <div class="grid grid-cols-3 gap-4 mt-6 mb-10">
          <div class="quick-stat">
            <span class="quick-stat-value">50+</span>
            <span class="quick-stat-label">Properties Sold</span>
          </div>
          <div class="quick-stat">
            <span class="quick-stat-value">100+</span>
            <span class="quick-stat-label">Satisfied Customers</span>
          </div>
          <div class="quick-stat">
            <span class="quick-stat-value">#1</span>
            <span class="quick-stat-label">UPES Platform</span>
          </div>
        </div>

        <!-- #1 Platform Trust Banner -->
        <div class="trust-banner">
          <div class="trust-banner-glow"></div>
          <div class="trust-banner-content">
            <div class="trust-icon-wrapper">
              <svg class="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <div class="trust-text-block">
              <h3 class="trust-heading">#1 Accommodation Platform for UPES</h3>
              <p class="trust-subtext">Trusted by 100+ students · 50+ properties successfully sold · The most reliable housing platform near UPES campus</p>
            </div>
            <a href="#/accommodations" class="trust-cta">
              Browse Properties
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>

        <!-- Section Title -->
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">Our Services</h2>
          <div class="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>

        <!-- Promotions Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <!-- Promotion 1: Housing -->
          <div class="promo-card group">
            <div class="promo-image-wrapper">
              <img src="https://res.cloudinary.com/dqu8ex7bn/image/upload/v1745433185/flats_1_vmh4in.jpg" alt="Student Housing" class="promo-image" />
              <span class="promo-tag-overlay">Housing</span>
            </div>
            <div class="promo-body">
              <h3 class="promo-title">Find Your Next Home</h3>
              <p class="promo-desc">Verified accommodations near campus, from flats to hostels.</p>
              <a href="https://buyfromuni.com/#/accommodations" class="promo-cta" target="_blank">
                Find Housing Now
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>

          <!-- Promotion 2: Eco Alert -->
          <div class="promo-card group">
            <div class="promo-image-wrapper">
              <img src="https://res.cloudinary.com/dqu8ex7bn/image/upload/v1745434740/image_2025-04-24_002859767_rukd1x.png" alt="Eco Alert" class="promo-image" />
              <span class="promo-tag-overlay">Environment</span>
            </div>
            <div class="promo-body">
              <h3 class="promo-title">Eco Alert — Go Green!</h3>
              <p class="promo-desc">Report pollution incidents and help make your campus cleaner.</p>
              <a href="https://ecoalert.in" class="promo-cta" target="_blank">
                Change The World
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Clean homepage — no imports needed
</script>

<style scoped>
/* Hero Banner */
.hero-banner {
  border: 1px solid rgba(29, 185, 84, 0.12);
  background: #0a0a0a;
  box-shadow: 0 0 80px rgba(29, 185, 84, 0.04);
}

.hero-left {
  background: linear-gradient(145deg, #0a0a0a 0%, #0d1a0f 40%, #0a0a0a 100%);
  overflow: hidden;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.hero-orb-1 {
  width: 300px;
  height: 300px;
  top: -80px;
  left: -60px;
  background: rgba(29, 185, 84, 0.12);
  animation: float 8s ease-in-out infinite;
}

.hero-orb-2 {
  width: 200px;
  height: 200px;
  bottom: -40px;
  right: -40px;
  background: rgba(0, 200, 200, 0.06);
  animation: float 10s ease-in-out infinite reverse;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 3.8rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.1;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: clamp(2.2rem, 5.5vw, 3.4rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.1;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: -0.03em;
}

.hero-title-bold {
  font-weight: 900;
  font-style: normal;
  background: linear-gradient(135deg, #1DB954 0%, #1ed760 50%, #a3f7bf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Quick Stats */
.quick-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px 8px;
  background: #0d0d0d;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  transition: all 0.3s ease;
}

.quick-stat:hover {
  border-color: rgba(29, 185, 84, 0.12);
}

.quick-stat-value {
  font-size: 1.25rem;
  font-weight: 800;
  color: #1DB954;
  letter-spacing: -0.02em;
}

.quick-stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
  font-weight: 500;
}

/* Promo Cards — image-first layout */
.promo-card {
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.promo-card:hover {
  border-color: rgba(29, 185, 84, 0.18);
  box-shadow: 0 12px 48px rgba(29, 185, 84, 0.06);
  transform: translateY(-4px);
}

.promo-image-wrapper {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #0a0a0a;
}

.promo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.promo-card:hover .promo-image {
  transform: scale(1.05);
}

.promo-tag-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #1DB954;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(29, 185, 84, 0.2);
  padding: 4px 12px;
  border-radius: 8px;
}

.promo-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.promo-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.025em;
  line-height: 1.3;
  margin-bottom: 6px;
}

.promo-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.5;
  margin-bottom: 16px;
  flex: 1;
}

.promo-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  background: #1DB954;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  letter-spacing: -0.01em;
}

.promo-cta:hover {
  background: #1ed760;
  box-shadow: 0 4px 20px rgba(29, 185, 84, 0.25);
  transform: translateY(-1px);
  color: #000;
}

/* Trust Banner */
.trust-banner {
  position: relative;
  border-radius: 20px;
  padding: 2px;
  margin-bottom: 32px;
  background: linear-gradient(135deg, rgba(29, 185, 84, 0.3), rgba(250, 204, 21, 0.3), rgba(29, 185, 84, 0.3));
  background-size: 200% 200%;
  animation: gradientShift 4s ease-in-out infinite;
  overflow: hidden;
}

.trust-banner-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(29, 185, 84, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 50%, rgba(250, 204, 21, 0.05) 0%, transparent 60%);
  pointer-events: none;
}

.trust-banner-content {
  position: relative;
  background: #0a0a0a;
  border-radius: 18px;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.trust-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(250, 204, 21, 0.1);
  border: 1px solid rgba(250, 204, 21, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  animation: pulse-glow 2s ease-in-out infinite;
}

.trust-heading {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #1DB954, #facc15, #1DB954);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

.trust-subtext {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 4px;
  line-height: 1.5;
}

.trust-text-block {
  flex: 1;
}

.trust-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  background: linear-gradient(135deg, #1DB954, #1ed760);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
  flex-shrink: 0;
}

.trust-cta:hover {
  box-shadow: 0 4px 24px rgba(29, 185, 84, 0.3);
  transform: translateY(-2px);
  color: #000;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 8px rgba(250, 204, 21, 0.15); }
  50% { box-shadow: 0 0 20px rgba(250, 204, 21, 0.3); }
}

@media (max-width: 768px) {
  .trust-banner-content {
    flex-direction: column;
    text-align: center;
    padding: 20px;
    gap: 16px;
  }

  .trust-heading {
    font-size: 1.1rem;
  }

  .trust-cta {
    width: 100%;
    justify-content: center;
  }
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-12px) scale(1.03); }
}
</style>