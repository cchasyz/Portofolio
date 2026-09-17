<template>
  <div class="relative min-h-screen bg-black text-zinc-100 selection:bg-red-600 selection:text-white">
    
    <!-- Top Scroll Progress Line (Crimson) -->
    <div 
      class="fixed top-0 left-0 right-0 h-[3px] bg-red-600 z-50 origin-left shadow-[0_0_8px_rgba(220,38,38,0.8)]"
      :style="{ transform: `scaleX(${scrollProgress})` }"
    ></div>

    <!-- Fine dark grid -->
    <div class="fine-grid"></div>

    <!-- Crimson Particle Cursor Engine -->
    <CursorEngine />

    <!-- Navbar -->
    <Navbar 
      @open-asset-modal="showAssetModal = true" 
      @open-game="openGameModal('rocket')"
    />

    <main class="relative z-10">
      <HeroScene @open-game="openGameModal('rocket')" />

      <!-- Minimal Marquee Ticker -->
      <div class="py-4 bg-zinc-950 border-y border-brand-border overflow-hidden relative z-20 my-12">
        <div class="flex whitespace-nowrap gap-12 font-mono text-[11px] text-zinc-500 uppercase tracking-widest" style="animation: marquee 28s linear infinite;">
          <span v-for="n in 2" :key="n" class="flex items-center gap-12 shrink-0">
            <span class="text-red-500 font-bold">// FULL STACK ENGINEER</span>
            <span class="text-zinc-700">—</span>
            <span>PEDDIEHACKS 2025 SOLO PRIZE</span>
            <span class="text-zinc-700">—</span>
            <span class="text-red-400 font-bold">// AI COMPUTER VISION</span>
            <span class="text-zinc-700">—</span>
            <span>LKSN NATIONAL MEDALLION</span>
            <span class="text-zinc-700">—</span>
            <span class="text-red-500 font-bold">// ESP32 IOT HARDWARE</span>
            <span class="text-zinc-700">—</span>
            <span>BORN IN JIZAN, SAUDI ARABIA</span>
            <span class="text-zinc-700">—</span>
          </span>
        </div>
      </div>

      <AboutSection />
      <ExperienceTimeline />
      <AwardsHall />
      <SkillsSection />
      <ProjectsShowcase 
        @open-game="(gameKey) => openGameModal(gameKey || 'rocket')" 
      />
      <ContactFooter />
    </main>

    <!-- Modals -->
    <PlayableGameModal 
      :is-open="showGameModal" 
      :initial-game="selectedGame"
      @close="showGameModal = false" 
    />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CursorEngine from './components/CursorEngine.vue'
import Navbar from './components/Navbar.vue'
import HeroScene from './components/HeroScene.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import AwardsHall from './components/AwardsHall.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsShowcase from './components/ProjectsShowcase.vue'
import ContactFooter from './components/ContactFooter.vue'
import PlayableGameModal from './components/PlayableGameModal.vue'

const showGameModal = ref(false)
const selectedGame = ref('rocket')
const scrollProgress = ref(0)
let lenis = null

const openGameModal = (gameKey = 'rocket') => {
  selectedGame.value = gameKey
  showGameModal.value = true
}

const handleScroll = () => {
  const top = document.documentElement.scrollTop || document.body.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = height ? (top / height) : 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  // Lenis smooth scroll
  if (window.Lenis) {
    lenis = new window.Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
  }

  // GSAP ScrollTrigger animations
  if (window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger)

    if (lenis) {
      lenis.on('scroll', window.ScrollTrigger.update)
      window.gsap.ticker.add((time) => lenis.raf(time * 1000))
      window.gsap.ticker.lagSmoothing(0, 0)
    }

    // Stagger animate all editorial cards on scroll
    window.gsap.utils.toArray('.editorial-card').forEach((card, i) => {
      window.gsap.fromTo(card,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: (i % 3) * 0.06,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Section tag reveal
    window.gsap.utils.toArray('.section-tag').forEach((el) => {
      window.gsap.fromTo(el,
        { opacity: 0, x: -25 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none reverse' }
        }
      )
    })

    // H2 headings reveal
    window.gsap.utils.toArray('h2').forEach((el) => {
      window.gsap.fromTo(el,
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
        }
      )
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (lenis) lenis.destroy()
})
</script>

<style>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
