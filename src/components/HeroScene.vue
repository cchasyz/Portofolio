<template>
  <section class="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
    <div class="custom-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Left Column: Headline & Action -->
      <div class="lg:col-span-7 flex flex-col gap-6">

        <!-- Available Status -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-brand-border text-zinc-300 text-xs font-mono w-fit">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          <span class="text-red-400 font-bold">AVAILABLE</span> FOR CONTRACTS & FULL-TIME ROLES
        </div>

        <!-- Headline with hero image above it -->
        <div>
          <!-- Hero Banner Image (Wide aspect ratio) -->
          <div class="w-full h-36 sm:h-52 rounded-xl overflow-hidden mb-4 border border-brand-border relative bg-zinc-950">
            <img 
              v-if="bannerLoaded"
              :src="'assets/banner.jpg'"
              alt="Hasan Ahmad Badar Banner"
              @error="bannerLoaded = false"
              class="w-full h-full object-cover object-center brightness-90 hover:scale-105 transition-transform duration-700"
            />
            <!-- Fallback gradient banner when banner image not loaded -->
            <div v-else class="w-full h-full flex items-center justify-center" 
              style="background: linear-gradient(135deg, #0a0404 0%, #1a0606 40%, #2a0808 100%);">
              <div class="text-center">
                <div class="text-xs font-mono text-zinc-600 uppercase tracking-widest">[ banner.jpg ]</div>
              </div>
            </div>
            <!-- Red overlay gradient for contrast -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none"></div>
            <!-- Text overlay on banner -->
            <div class="absolute inset-0 flex items-center px-6 pointer-events-none">
              <div>
                <div class="text-xs font-mono text-red-500 uppercase tracking-widest mb-1">// PORTFOLIO — 2026</div>
                <div class="text-lg sm:text-2xl font-black text-white font-heading tracking-wide">HASAN</div>
              </div>
            </div>
          </div>

          <h1 class="text-5xl sm:text-7xl font-black text-white tracking-tight font-heading leading-tight">
            HASAN
          </h1>
          <p class="mt-3 text-xl sm:text-2xl font-mono text-zinc-400">
            <span class="text-red-500">&gt;</span> {{ typedText }}<span class="animate-pulse text-red-500">_</span>
          </p>
        </div>

        <!-- Bio -->
        <p class="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
          Full Stack Software Engineer. Born in Jizan, Saudi Arabia. Based in Malang, Indonesia. Hackathon winner at international and national level.
        </p>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in techPills" :key="tech" class="px-3 py-1 rounded-md bg-zinc-950 border border-brand-border text-xs font-mono text-zinc-300 hover:border-red-700 hover:text-white transition-colors">
            {{ tech }}
          </span>
        </div>

        <!-- CTAs -->
        <div class="flex flex-wrap items-center gap-4 pt-2">
          <a href="#projects" class="btn-editorial">
            <Sparkles class="w-4 h-4" /> View Projects
          </a>
          <a 
            href="assets/hasan_cv.pdf" 
            download="Hasan_Ahmad_Badar_CV.pdf"
            target="_blank" 
            class="px-5 py-2.5 rounded-xl bg-red-950/90 hover:bg-red-900 border border-red-700 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-red-950/40 hover:shadow-red-900/50"
          >
            <Download class="w-4 h-4 text-red-400" /> Download CV
          </a>
          <button @click="$emit('open-game')" class="btn-editorial-outline">
            <Gamepad2 class="w-4 h-4 text-red-500" /> Play Game
          </button>
        </div>

        <!-- Quick Stats Row -->
        <div class="grid grid-cols-3 gap-4 pt-4 border-t border-brand-border">
          <div>
            <div class="text-2xl font-extrabold text-white font-heading">5+</div>
            <div class="text-[11px] text-zinc-500 font-mono">Competition Wins</div>
          </div>
          <div>
            <div class="text-2xl font-extrabold text-red-500 font-heading">10+</div>
            <div class="text-[11px] text-zinc-500 font-mono">Projects Shipped</div>
          </div>
          <div>
            <div class="text-2xl font-extrabold text-white font-heading">4+</div>
            <div class="text-[11px] text-zinc-500 font-mono">Cities Lived In</div>
          </div>
        </div>
      </div>

      <!-- Right Column: 3D Tilt Profile Card + Avatar -->
      <div class="lg:col-span-5 flex justify-center">
        <div 
          ref="cardRef"
          @mousemove="handleTilt"
          @mouseleave="resetTilt"
          class="w-full max-w-md editorial-card p-6 border border-red-900/60 shadow-2xl shadow-red-950/40 cursor-pointer"
          :style="cardStyle"
          style="transform-style: preserve-3d; transition: transform 0.15s ease-out;"
        >
          
          <!-- Terminal window header bar -->
          <div class="flex items-center justify-between pb-4 mb-4 border-b border-brand-border text-xs font-mono text-zinc-500">
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-red-600"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
            </div>
            <span>profile.ts</span>
            <span class="text-red-500">● LIVE</span>
          </div>

          <!-- Banner Cover with Avatar Badge -->
          <div class="relative mb-5 rounded-xl overflow-hidden h-36 bg-zinc-950 border border-brand-border flex items-center justify-center group">
            <!-- Banner Cover -->
            <img 
              v-if="bannerLoaded"
              :src="'assets/banner.jpg'"
              alt="Hasan Ahmad Badar Banner"
              @error="bannerLoaded = false"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
            />
            <div v-else class="w-full h-full bg-gradient-to-br from-red-950/60 to-black"></div>

            <!-- Gradient overlay for text readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            <!-- Avatar Icon Badge + Name -->
            <div class="absolute bottom-3 left-3 right-3 flex items-center gap-3">
              <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-red-500 shadow-lg shadow-red-950/80 bg-zinc-900 shrink-0">
                <img 
                  v-if="avatarLoaded"
                  :src="'assets/avatar.jpg'"
                  alt="Hasan"
                  @error="avatarLoaded = false"
                  class="w-full h-full object-cover object-top"
                />
                <div v-else class="w-full h-full flex items-center justify-center text-white font-black font-heading bg-red-600">
                  H
                </div>
              </div>
              <div>
                <div class="text-sm font-bold text-white font-heading leading-tight drop-shadow">HASAN</div>
                <div class="text-[10px] font-mono text-red-400">Software Engineer</div>
              </div>
            </div>
          </div>

          <!-- Code Snippet -->
          <div class="bg-black p-4 rounded-lg font-mono text-xs text-zinc-300 space-y-2 border border-brand-border">
            <div><span class="text-red-400">export const</span> engineer = {</div>
            <div class="pl-4"><span class="text-zinc-500">born</span>: <span class="text-red-300">'Jizan, Saudi Arabia 🇸🇦'</span>,</div>
            <div class="pl-4"><span class="text-zinc-500">based</span>: <span class="text-red-300">'Malang, Indonesia 🇮🇩'</span>,</div>
            <div class="pl-4"><span class="text-zinc-500">stack</span>: [<span class="text-zinc-100">'Vue'</span>, <span class="text-zinc-100">'Go'</span>, <span class="text-zinc-100">'Laravel'</span>, <span class="text-zinc-100">'ESP32'</span>],</div>
            <div class="pl-4"><span class="text-zinc-500">awards</span>: [<span class="text-red-300">'PeddieHacks Intl'</span>, <span class="text-red-300">'LKSN'</span>],</div>
            <div>}</div>
          </div>

          <div class="mt-4 pt-3 border-t border-brand-border flex items-center justify-between text-xs font-mono text-zinc-600">
            <span>github.com/cchasyz</span>
            <a href="mailto:hasandocs2@gmail.com" class="text-red-500 hover:underline">hasandocs2@gmail.com</a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Sparkles, Gamepad2, Download } from 'lucide-vue-next'

defineEmits(['open-game'])

const techPills = ['Vue 3', 'Golang', 'Laravel', 'ESP32 / IoT', 'Flutter', 'Next.js', 'Computer Vision']

// Check if avatar and banner images exist
const avatarLoaded = ref(false)
const bannerLoaded = ref(false)

onMounted(() => {
  const avatarImg = new Image()
  avatarImg.onload = () => { avatarLoaded.value = true }
  avatarImg.onerror = () => { avatarLoaded.value = false }
  avatarImg.src = 'assets/avatar.jpg'

  const bannerImg = new Image()
  bannerImg.onload = () => { bannerLoaded.value = true }
  bannerImg.onerror = () => { bannerLoaded.value = false }
  bannerImg.src = 'assets/banner.jpg'
})

// Typing effect
const titles = ['Full Stack Software Engineer', 'IoT Enthusiast', 'Hackathon Winner', 'Vue & Go Developer']
const typedText = ref('')
let titleIndex = 0, charIndex = 0, isDeleting = false, typingTimeout = null

const typeEffect = () => {
  const cur = titles[titleIndex]
  typedText.value = isDeleting ? cur.substring(0, charIndex - 1) : cur.substring(0, charIndex + 1)
  isDeleting ? charIndex-- : charIndex++
  let delay = isDeleting ? 40 : 80
  if (!isDeleting && charIndex === cur.length) { delay = 2000; isDeleting = true }
  else if (isDeleting && charIndex === 0) { isDeleting = false; titleIndex = (titleIndex + 1) % titles.length; delay = 500 }
  typingTimeout = setTimeout(typeEffect, delay)
}

// 3D Tilt effect
const tilt = ref({ x: 0, y: 0 })

const handleTilt = (e) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  tilt.value.x = -(y / rect.height) * 18
  tilt.value.y = (x / rect.width) * 18
}

const resetTilt = () => { tilt.value = { x: 0, y: 0 } }

const cardStyle = computed(() => ({
  transform: `perspective(1000px) rotateX(${tilt.value.x}deg) rotateY(${tilt.value.y}deg) scale3d(1.03,1.03,1.03)`
}))

onMounted(() => typeEffect())
onUnmounted(() => { if (typingTimeout) clearTimeout(typingTimeout) })
</script>
