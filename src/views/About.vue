<template>
  <div class="min-h-screen">
    <div class="ambient-glow"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div class="max-w-3xl mx-auto">
        <!-- Page Header -->
        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 text-sm text-white/60">
            <svg class="w-4 h-4 text-spotify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            About Us
          </div>
          
          <h1 class="section-heading text-4xl md:text-5xl mb-6">About BuyFromUni</h1>
          <p class="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            BuyFromUni is your one-stop marketplace for university essentials. Created by students, for students — we make it easy to buy, sell, and rent everything you need for university life.
          </p>
        </div>
        
        <!-- Feature Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          <!-- Student Community -->
          <div class="feature-card group">
            <div class="feature-icon-wrapper">
              <svg class="w-6 h-6 text-spotify-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="feature-title">Student Community</h3>
            <p class="feature-desc">Connect with fellow students to buy, sell, and exchange items on campus.</p>
          </div>
          
          <!-- Secure Transactions -->
          <div class="feature-card group">
            <div class="feature-icon-wrapper">
              <svg class="w-6 h-6 text-spotify-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="feature-title">Secure Transactions</h3>
            <p class="feature-desc">Safe and protected interactions for all your purchases and exchanges.</p>
          </div>
          
          <!-- Best Deals -->
          <div class="feature-card group">
            <div class="feature-icon-wrapper">
              <svg class="w-6 h-6 text-spotify-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="feature-title">Best Deals</h3>
            <p class="feature-desc">Find great prices on everything you need for your university journey.</p>
          </div>
        </div>

        <!-- Mission Section -->
        <div class="mission-card">
          <div class="mission-icon">
            <svg class="w-6 h-6 text-spotify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p class="text-white/45 leading-relaxed max-w-xl mx-auto text-base">
            We believe university life should be accessible and affordable. Our platform bridges the gap between students, making it easy to find what you need without breaking the bank. From textbooks to accommodations, we've got you covered.
          </p>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-cols-3 gap-4 mb-8">
          <div class="stat-card">
            <div class="stat-number">50+</div>
            <div class="stat-label">Properties Sold</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">100+</div>
            <div class="stat-label">Satisfied Customers</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">#1</div>
            <div class="stat-label">UPES Accommodation</div>
          </div>
        </div>

        <!-- Why Choose Us -->
        <div class="why-section">
          <h2 class="text-xl font-bold text-white mb-6 text-center">Why Students Love Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="why-item">
              <div class="why-bullet"></div>
              <div>
                <h4 class="text-sm font-semibold text-white mb-1">Zero Commissions</h4>
                <p class="text-xs text-white/35">We never charge you for listing or buying items.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-bullet"></div>
              <div>
                <h4 class="text-sm font-semibold text-white mb-1">Campus-Local</h4>
                <p class="text-xs text-white/35">Everything within walking distance of your campus.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-bullet"></div>
              <div>
                <h4 class="text-sm font-semibold text-white mb-1">Verified Students</h4>
                <p class="text-xs text-white/35">Trade with people you can trust from your own university.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-bullet"></div>
              <div>
                <h4 class="text-sm font-semibold text-white mb-1">Instant Contact</h4>
                <p class="text-xs text-white/35">Reach out directly via WhatsApp or Instagram.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.section-heading {
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-card {
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.feature-card:hover {
  border-color: rgba(29, 185, 84, 0.2);
  background: #161616;
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(29, 185, 84, 0.08);
}

.feature-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(29, 185, 84, 0.1);
  border: 1px solid rgba(29, 185, 84, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.feature-card:hover .feature-icon-wrapper {
  background: rgba(29, 185, 84, 0.15);
  border-color: rgba(29, 185, 84, 0.3);
  transform: scale(1.08);
  box-shadow: 0 0 20px rgba(29, 185, 84, 0.12);
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.feature-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.6;
}

/* Mission Card */
.mission-card {
  background: linear-gradient(135deg, rgba(29, 185, 84, 0.04) 0%, rgba(10, 10, 10, 0.8) 50%, rgba(29, 185, 84, 0.02) 100%);
  border: 1px solid rgba(29, 185, 84, 0.1);
  border-radius: 24px;
  padding: 40px 32px;
  text-align: center;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
}

.mission-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: rgba(29, 185, 84, 0.1);
  border: 1px solid rgba(29, 185, 84, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

/* Stats */
.stat-card {
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 28px 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: rgba(29, 185, 84, 0.15);
  transform: translateY(-2px);
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1DB954;
  letter-spacing: -0.03em;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* Why Choose Us */
.why-section {
  background: #0d0d0d;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  padding: 32px 28px;
  margin-top: 32px;
  margin-bottom: 32px;
}

.why-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 14px;
  transition: background 0.2s ease;
}

.why-item:hover {
  background: rgba(255, 255, 255, 0.02);
}

.why-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #1DB954;
  margin-top: 4px;
  flex-shrink: 0;
  box-shadow: 0 0 8px rgba(29, 185, 84, 0.3);
}
</style>