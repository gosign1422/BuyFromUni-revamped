<template>
  <div class="min-h-screen bg-spotify-black">
    <!-- Hero Banner Section -->
    <div class="pt-10">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Main Banner -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0 border border-spotify-green overflow-hidden rounded-2xl shadow-2xl mb-8">
          <div class="relative flex flex-col justify-center p-10 min-h-[400px] bg-gradient-to-br from-black via-[#39ff14]/30 to-cyan-400/20 backdrop-blur-xl">
            <div class="absolute inset-0 pointer-events-none animate-gradient-move bg-[radial-gradient(circle_at_20%_20%,rgba(57,255,20,0.15)_0%,transparent_70%),radial-gradient(circle_at_80%_80%,rgba(0,255,255,0.10)_0%,transparent_70%)]"></div>
            <h2 class="text-5xl md:text-6xl font-bold italic mb-2 bg-gradient-to-r from-lime-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_16px_#39ff14]">study <span class="font-extrabold not-italic">LESS</span></h2>
            <h3 class="text-4xl md:text-5xl font-bold italic mb-6 bg-gradient-to-r from-cyan-300 via-white to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_16px_#39ff14]">score <span class="font-extrabold not-italic">MORE</span></h3>
            <a href="https://unicheatsheet.com" target="_blank" class="btn-metallic bg-gradient-to-r from-lime-300 via-white to-cyan-300 text-black px-8 py-4 rounded-full text-xl font-bold mt-4 w-full md:w-auto inline-block text-center relative overflow-hidden shine-effect shadow-[0_0_24px_8px_#39ff14cc] hover:shadow-[0_0_32px_12px_#39ff14cc]">
              Show Me The Goods
            </a>
          </div>
          <div class="relative bg-black min-h-[400px] flex items-center justify-center overflow-hidden">
            <img src="https://res.cloudinary.com/dqu8ex7bn/image/upload/v1745298866/image_2025-04-22_104418664_nmhnoe.png" alt="Featured products" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Promotions Grid: 1 column on mobile, 2 on medium, 3 on large screens -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          <!-- Promotion 1: Housing -->
          <div class="card-metallic rounded-2xl shadow-2xl border-4 border-[#2ecc71]/80 p-6 flex flex-col items-center text-center space-y-4">
            <div class="bg-gradient-to-br from-[#2ecc71] via-white/80 to-[#27ae60] p-4 rounded-t-2xl shadow-2xl w-full mb-2">
              <div class="text-xl font-black text-black">NEXT SEMESTER</div>
              <div class="text-3xl font-black text-black">HOUSING?</div>
              <div class="text-lg font-black text-black">Done Right.</div>
            </div>
            <img src="https://res.cloudinary.com/dqu8ex7bn/image/upload/v1745433185/flats_1_vmh4in.jpg" alt="Student Housing" class="w-2/3 mx-auto rounded-xl shadow-2xl border-2 border-white/30" />
            <a href="https://buyfromuni.com/#/accommodations" class="btn-metallic bg-gradient-to-r from-lime-300 via-white to-cyan-300 text-black px-6 py-3 rounded-full text-lg font-bold mt-2 w-full text-center relative overflow-hidden shine-effect shadow-[0_0_16px_4px_#39ff14cc] hover:shadow-[0_0_32px_8px_#39ff14cc]" target="_blank">
              Find Housing Now
            </a>
          </div>

          <!-- Promotion 2: Eco Alert -->
          <div class="card-metallic rounded-2xl shadow-2xl border-4 border-[#2ecc71]/80 p-6 flex flex-col items-center text-center space-y-4">
            <div class="bg-gradient-to-br from-[#2ecc71] via-white/80 to-[#27ae60] p-4 rounded-t-2xl shadow-2xl w-full mb-2">
              <div class="text-xl font-black text-black">ECO ALERT,</div>
              <div class="text-3xl font-black text-black">GO GREEN!</div>
            </div>
            <img src="https://res.cloudinary.com/dqu8ex7bn/image/upload/v1745434740/image_2025-04-24_002859767_rukd1x.png" alt="Eco Alert" class="w-2/3 mx-auto rounded-xl shadow-2xl border-2 border-white/30" />
            <a href="https://ecoalert.in" class="btn-metallic bg-gradient-to-r from-lime-300 via-white to-cyan-300 text-black px-6 py-3 rounded-full text-lg font-bold mt-2 w-full text-center relative overflow-hidden shine-effect shadow-[0_0_16px_4px_#39ff14cc] hover:shadow-[0_0_32px_8px_#39ff14cc]" target="_blank">
              change the world
            </a>
          </div>

          <!-- Promotion 3: Airbnb Owners -->
          <div class="card-metallic rounded-2xl shadow-2xl border-4 border-[#2ecc71]/80 p-6 flex flex-col items-center text-center space-y-4">
            <div class="bg-gradient-to-br from-[#2ecc71] via-white/80 to-[#27ae60] p-4 rounded-t-2xl shadow-2xl w-full mb-2">
              <div class="text-xl font-black text-black">AIRBNB OWNERS</div>
              <div class="text-3xl font-black text-black">AI SOLUTION</div>
              <div class="text-lg font-black text-black">MAXIMIZE PROFITS</div>
            </div>
            <img src="https://res.cloudinary.com/dqu8ex7bn/image/upload/v1745434827/image_2025-04-24_003025641_f90iv2.png" alt="BnBQuery AI Solution" class="w-2/3 mx-auto rounded-xl shadow-2xl border-2 border-white/30" />
            <a href="https://bnbquery.com" class="btn-metallic bg-gradient-to-r from-lime-300 via-white to-cyan-300 text-black px-6 py-3 rounded-full text-lg font-bold mt-2 w-full text-center relative overflow-hidden shine-effect shadow-[0_0_16px_4px_#39ff14cc] hover:shadow-[0_0_32px_8px_#39ff14cc]" target="_blank">
              Visit BnBQuery.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Removed product-related imports and functionality
</script>