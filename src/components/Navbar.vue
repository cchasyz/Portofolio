<template>
  <header 
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 py-4"
    :class="{ 'py-2 bg-black/95 backdrop-blur-lg border-b border-brand-border shadow-xl shadow-red-950/20': isScrolled }"
  >
    <div class="custom-container flex items-center justify-between">
      
      <!-- Brand Logo: shows avatar.jpg if available, else red H letter -->
      <a href="#" class="flex items-center gap-3 group no-underline">
        <div class="w-9 h-9 rounded-lg overflow-hidden border border-red-900 shadow-lg shadow-red-950/40 group-hover:border-red-600 transition-colors flex-shrink-0 relative">
          <img 
            v-if="avatarLoaded"
            :src="'assets/avatar.jpg'"
            alt="Hasan"
            @error="avatarLoaded = false"
            class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
          />
          <div v-else class="w-full h-full bg-red-600 flex items-center justify-center font-black font-heading text-lg text-white group-hover:bg-red-500 transition-colors">
            H
          </div>
        </div>
        <div class="flex flex-col">
          <span class="font-heading font-extrabold text-base text-white tracking-wider group-hover:text-red-400 transition-colors">
            HASAN<span class="text-red-500">.DEV</span>
          </span>
          <span class="text-[10px] text-zinc-500 font-mono tracking-widest uppercase -mt-1">Software & IoT</span>
        </div>
      </a>

      <!-- Desktop Links -->
      <nav class="hidden md:flex items-center gap-1 bg-zinc-950/80 border border-brand-border px-4 py-1.5 rounded-full shadow-lg">
        <a href="#about" class="px-4 py-1 rounded-full text-xs font-mono text-zinc-400 hover:text-white hover:bg-red-950/60 transition-all">// ABOUT</a>
        <a href="#experience" class="px-4 py-1 rounded-full text-xs font-mono text-zinc-400 hover:text-white hover:bg-red-950/60 transition-all">// EXP</a>
        <a href="#awards" class="px-4 py-1 rounded-full text-xs font-mono text-zinc-400 hover:text-white hover:bg-red-950/60 transition-all">// AWARDS</a>
        <a href="#skills" class="px-4 py-1 rounded-full text-xs font-mono text-zinc-400 hover:text-white hover:bg-red-950/60 transition-all">// SKILLS</a>
        <a href="#projects" class="px-4 py-1 rounded-full text-xs font-mono text-zinc-400 hover:text-white hover:bg-red-950/60 transition-all">// PROJECTS</a>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden md:flex items-center gap-3">
        <button @click="$emit('open-game')" class="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-zinc-950 border border-brand-border hover:border-red-600 text-red-500 flex items-center gap-1.5 transition-all">
          <Gamepad2 class="w-3.5 h-3.5" /> Play Game
        </button>
        <a 
          href="assets/hasan_cv.pdf" 
          download="Hasan_Ahmad_Badar_CV.pdf"
          target="_blank"
          class="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-red-950/80 hover:bg-red-900 border border-red-800 text-white flex items-center gap-1.5 transition-all shadow-sm shadow-red-950/40"
        >
          <Download class="w-3.5 h-3.5 text-red-400" /> Download CV
        </a>
        <a href="#contact" class="btn-editorial text-xs !py-1.5 !px-4">Contact</a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-lg bg-zinc-950 text-zinc-300 border border-brand-border">
        <Menu v-if="!isOpen" class="w-5 h-5" />
        <X v-else class="w-5 h-5" />
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="isOpen" class="md:hidden mt-3 p-4 bg-black border border-brand-border rounded-xl flex flex-col gap-2 shadow-2xl">
      <a @click="isOpen = false" href="#about" class="px-3 py-2 rounded-lg text-xs font-mono text-zinc-200 hover:bg-red-950/40">// ABOUT</a>
      <a @click="isOpen = false" href="#experience" class="px-3 py-2 rounded-lg text-xs font-mono text-zinc-200 hover:bg-red-950/40">// EXPERIENCE</a>
      <a @click="isOpen = false" href="#awards" class="px-3 py-2 rounded-lg text-xs font-mono text-zinc-200 hover:bg-red-950/40">// AWARDS</a>
      <a @click="isOpen = false" href="#skills" class="px-3 py-2 rounded-lg text-xs font-mono text-zinc-200 hover:bg-red-950/40">// SKILLS</a>
      <a @click="isOpen = false" href="#projects" class="px-3 py-2 rounded-lg text-xs font-mono text-zinc-200 hover:bg-red-950/40">// PROJECTS</a>
      <div class="pt-2 border-t border-brand-border flex flex-col gap-2">
        <a 
          @click="isOpen = false"
          href="assets/hasan_cv.pdf" 
          download="Hasan_Ahmad_Badar_CV.pdf"
          target="_blank"
          class="w-full py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs flex items-center justify-center gap-2"
        >
          <Download class="w-4 h-4" /> Download CV
        </a>
        <button @click="isOpen = false; $emit('open-game')" class="w-full py-2.5 rounded-xl bg-zinc-950 text-zinc-300 border border-brand-border text-xs font-mono flex items-center justify-center gap-2">
          <Gamepad2 class="w-4 h-4" /> Play Bootcamp Game
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Menu, X, Gamepad2, Download } from 'lucide-vue-next'

defineEmits(['open-game'])

const isScrolled = ref(false)
const isOpen = ref(false)
const avatarLoaded = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => { isScrolled.value = window.scrollY > 40 })
  const img = new Image()
  img.onload = () => { avatarLoaded.value = true }
  img.onerror = () => { avatarLoaded.value = false }
  img.src = 'assets/avatar.jpg'
})
</script>
