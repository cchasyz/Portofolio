<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-xl">
    <div 
      class="relative w-full editorial-card border border-red-900/80 p-3 sm:p-5 flex flex-col gap-3 shadow-2xl shadow-red-950/60 transition-all duration-300"
      :class="isFullscreen ? 'fixed inset-0 w-screen h-screen max-w-none rounded-none z-50 p-2' : 'max-w-6xl w-[96vw] h-[92vh] max-h-[92vh]'"
    >
      
      <!-- Modal Header Bar -->
      <div class="flex items-center justify-between border-b border-brand-border pb-2.5">
        <div class="flex items-center gap-3">
          <div class="p-2 rounded-lg bg-red-950 text-red-500 border border-red-800">
            <Gamepad2 class="w-5 h-5" />
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-white font-heading leading-tight">Bootcamp Original Game Arcade</h3>
            <p class="text-[11px] text-red-400 font-mono">Running Hasan's original game builds</p>
          </div>
        </div>

        <!-- Controls (Fullscreen / Open Tab / Close) -->
        <div class="flex items-center gap-1.5">
          <button 
            @click="reloadIframe" 
            title="Restart Game"
            class="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs font-mono flex items-center gap-1 transition-colors"
          >
            <RotateCcw class="w-4 h-4" />
          </button>

          <button 
            @click="isFullscreen = !isFullscreen" 
            :title="isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'"
            class="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs font-mono flex items-center gap-1 transition-colors"
          >
            <Maximize2 v-if="!isFullscreen" class="w-4 h-4" />
            <Minimize2 v-else class="w-4 h-4" />
          </button>

          <a 
            :href="`games/${activeGame}/index.html`" 
            target="_blank" 
            title="Open in Dedicated Tab"
            class="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs font-mono flex items-center gap-1 transition-colors"
          >
            <ExternalLink class="w-4 h-4" />
          </a>

          <button 
            @click="$emit('close')" 
            class="p-2 rounded-lg bg-red-950 text-red-400 hover:text-white hover:bg-red-900 transition-colors"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Game Tab Selector -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono scrollbar-none">
        <button 
          v-for="game in gamesList" 
          :key="game.id"
          @click="selectGame(game.id)"
          class="px-3.5 py-1.5 rounded-lg font-bold flex items-center gap-1.5 whitespace-nowrap transition-all"
          :class="activeGame === game.id ? 'bg-red-600 text-white shadow-lg shadow-red-950' : 'bg-zinc-950 border border-brand-border text-zinc-400 hover:text-white'"
        >
          <span>{{ game.icon }}</span> {{ game.name }}
        </button>
      </div>

      <!-- Game Frame Container -->
      <div class="relative w-full flex-1 bg-black rounded-xl overflow-hidden border border-brand-border flex items-center justify-center min-h-0">
        <iframe 
          ref="gameFrame"
          :src="`games/${activeGame}/index.html`" 
          class="w-full h-full border-0 rounded-xl bg-black block"
          allow="autoplay; fullscreen; keyboard"
        ></iframe>
      </div>

      <!-- Footer Info -->
      <div class="text-[11px] font-mono text-zinc-500 flex items-center justify-between border-t border-brand-border pt-2">
        <span>Path: <code class="text-zinc-300">public/games/{{ activeGame }}/</code></span>
        <span class="text-red-500 font-bold">100% Original Code & Sprites</span>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Gamepad2, X, ExternalLink, Maximize2, Minimize2, RotateCcw } from 'lucide-vue-next'

const props = defineProps({
  isOpen: Boolean,
  initialGame: {
    type: String,
    default: 'rocket_game'
  }
})

defineEmits(['close'])

const activeGame = ref('rocket_game')
const isFullscreen = ref(false)
const gameFrame = ref(null)

const gamesList = [
  { id: 'rocket_game', name: 'Rocket Space Shooter (V2)', icon: '🚀' },
  { id: 'hexagon_game', name: 'Hexagon Strategy (V2)', icon: '⬢' },
  { id: 'snake_game', name: 'Snake Game (V1)', icon: '🐍' },
  { id: 'mole_game', name: 'Moles Game (V1)', icon: '🔨' },
  { id: 'duck_hunt', name: 'Duck Hunt Game (V1)', icon: '🦆' },
]

const selectGame = (gameId) => {
  activeGame.value = gameId
}

const reloadIframe = () => {
  if (gameFrame.value) {
    gameFrame.value.src = `games/${activeGame.value}/index.html?t=${Date.now()}`
  }
}

watch(() => props.isOpen, (open) => {
  if (open && props.initialGame) {
    activeGame.value = props.initialGame
  }
})
</script>
