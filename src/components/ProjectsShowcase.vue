<template>
  <section id="projects" class="py-28 relative overflow-hidden border-t border-brand-border">
    <div class="custom-container relative z-10">
      
      <!-- Section Tag Header -->
      <div class="mb-16">
        <div class="section-tag">
          <span>// 05</span> <span>ORIGINAL BOOTCAMP GAMES & FEATURED PROJECTS</span>
        </div>
        <h2 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-heading">
          Bootcamp Games & <span class="text-red-500">Featured Work</span>
        </h2>
        <p class="text-zinc-400 text-sm font-mono mt-3 max-w-2xl">
          Click "Play Game" on any arcade card below to launch the exact, 100% original game builds created during bootcamp!
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- ─── ORIGINAL GAME 1: ROCKET GAME (V2) ─── -->
        <div class="editorial-card flex flex-col justify-between border-2 border-red-600 shadow-xl shadow-red-950/40 group">
          <div>
            <div class="h-44 bg-black p-4 border-b border-brand-border flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div class="absolute inset-0 opacity-25" style="background: radial-gradient(circle, #dc2626 15%, transparent 65%);"></div>
              <Rocket class="w-12 h-12 text-red-500 mb-2 relative z-10 group-hover:scale-110 transition-transform" />
              <span class="text-xs font-mono font-bold text-white uppercase relative z-10">Rocket Space Shooter</span>
            </div>
            <div class="p-6 space-y-2">
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span class="px-2 py-0.5 rounded bg-red-950/80 text-red-400 text-[10px] font-mono border border-red-800">● ORIGINAL BUILD</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">HTML5 Canvas</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Audio & Sprites</span>
              </div>
              <h3 class="text-xl font-bold text-white font-heading group-hover:text-red-500 transition-colors">Rocket Space Shooter (V2)</h3>
              <p class="text-xs text-zinc-400 font-mono leading-relaxed">
                Original space shooter from Bootcamp V2. Navigate your rocket with WASD/arrow keys, fire laser cannons, and destroy space targets with custom sprite explosions and starfield parallax.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between">
            <span class="text-[11px] font-mono text-red-500 font-bold">● BOOTCAMP V2</span>
            <button @click="$emit('open-game', 'rocket_game')" class="btn-editorial text-xs !py-1.5 !px-5 flex items-center gap-1.5">
              <Play class="w-3.5 h-3.5 fill-current" /> Play Game
            </button>
          </div>
        </div>

        <!-- ─── ORIGINAL GAME 2: HEXAGON GAME (V2) ─── -->
        <div class="editorial-card flex flex-col justify-between border-2 border-red-600 shadow-xl shadow-red-950/40 group">
          <div>
            <div class="h-44 bg-black p-4 border-b border-brand-border flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div class="absolute inset-0 opacity-25" style="background: radial-gradient(circle, #dc2626 15%, transparent 65%);"></div>
              <Hexagon class="w-12 h-12 text-red-500 mb-2 relative z-10 group-hover:scale-110 transition-transform" />
              <span class="text-xs font-mono font-bold text-white uppercase relative z-10">Hexagon Strategy Game</span>
            </div>
            <div class="p-6 space-y-2">
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span class="px-2 py-0.5 rounded bg-red-950/80 text-red-400 text-[10px] font-mono border border-red-800">● ORIGINAL BUILD</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">PvP / Bot Mode</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">DOM Grid Logic</span>
              </div>
              <h3 class="text-xl font-bold text-white font-heading group-hover:text-red-500 transition-colors">Hexagon Strategy (V2)</h3>
              <p class="text-xs text-zinc-400 font-mono leading-relaxed">
                Turn-based territory game on an 80-tile grid. Features PvP and Bot gameplay modes with random power assignment (1-20) and directional flanking conquest algorithms.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between">
            <span class="text-[11px] font-mono text-red-500 font-bold">● BOOTCAMP V2</span>
            <button @click="$emit('open-game', 'hexagon_game')" class="btn-editorial text-xs !py-1.5 !px-5 flex items-center gap-1.5">
              <Play class="w-3.5 h-3.5 fill-current" /> Play Game
            </button>
          </div>
        </div>

        <!-- ─── ORIGINAL GAME 3: SNAKE GAME (V1) ─── -->
        <div class="editorial-card flex flex-col justify-between border border-red-900/80 shadow-lg group">
          <div>
            <div class="h-44 bg-black p-4 border-b border-brand-border flex flex-col items-center justify-center text-center relative overflow-hidden">
              <Gamepad2 class="w-12 h-12 text-zinc-300 mb-2 relative z-10 group-hover:scale-110 transition-transform" />
              <span class="text-xs font-mono font-bold text-white uppercase relative z-10">Classic Snake Game</span>
            </div>
            <div class="p-6 space-y-2">
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">● ORIGINAL BUILD</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Difficulty Levels</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Leaderboard</span>
              </div>
              <h3 class="text-xl font-bold text-white font-heading">Classic Snake Game</h3>
              <p class="text-xs text-zinc-400 font-mono leading-relaxed">
                Original Bootcamp V1 snake game with difficulty settings (Easy/Med/Hard), food generation algorithm, custom player naming, and local leaderboard saving.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between">
            <span class="text-[11px] font-mono text-zinc-500">● BOOTCAMP V1</span>
            <button @click="$emit('open-game', 'snake_game')" class="btn-editorial-outline text-xs !py-1.5 !px-5 flex items-center gap-1.5">
              <Play class="w-3.5 h-3.5 fill-current" /> Play Game
            </button>
          </div>
        </div>

        <!-- ─── ORIGINAL GAME 4: MOLE GAME (V1) ─── -->
        <div class="editorial-card flex flex-col justify-between border border-red-900/80 shadow-lg group">
          <div>
            <div class="h-44 bg-black p-4 border-b border-brand-border flex flex-col items-center justify-center text-center relative overflow-hidden">
              <Target class="w-12 h-12 text-zinc-300 mb-2 relative z-10 group-hover:rotate-12 transition-transform" />
              <span class="text-xs font-mono font-bold text-white uppercase relative z-10">Moles Whack-A-Mole</span>
            </div>
            <div class="p-6 space-y-2">
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">● ORIGINAL BUILD</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Hammer Cursor</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Timer & Lives</span>
              </div>
              <h3 class="text-xl font-bold text-white font-heading">Moles Game</h3>
              <p class="text-xs text-zinc-400 font-mono leading-relaxed">
                Whack-a-mole game built with custom hammer sprite following mouse cursor, randomized 3x3 hole popup interval, 30-second timer countdown, and 5-life system.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between">
            <span class="text-[11px] font-mono text-zinc-500">● BOOTCAMP V1</span>
            <button @click="$emit('open-game', 'mole_game')" class="btn-editorial-outline text-xs !py-1.5 !px-5 flex items-center gap-1.5">
              <Play class="w-3.5 h-3.5 fill-current" /> Play Game
            </button>
          </div>
        </div>

        <!-- ─── ORIGINAL GAME 5: DUCK HUNT (V1) ─── -->
        <div class="editorial-card flex flex-col justify-between border border-red-900/80 shadow-lg group">
          <div>
            <div class="h-44 bg-black p-4 border-b border-brand-border flex flex-col items-center justify-center text-center relative overflow-hidden">
              <Gamepad2 class="w-12 h-12 text-zinc-300 mb-2 relative z-10 group-hover:scale-110 transition-transform" />
              <span class="text-xs font-mono font-bold text-white uppercase relative z-10">Retro Duck Hunt</span>
            </div>
            <div class="p-6 space-y-2">
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">● ORIGINAL BUILD</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Sound FX</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Sprite Sheets</span>
              </div>
              <h3 class="text-xl font-bold text-white font-heading">Duck Hunt Game</h3>
              <p class="text-xs text-zinc-400 font-mono leading-relaxed">
                Classic arcade duck shooting game with audio effects, flying sprite sheet animations, hit accuracy tracking, and score counter.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between">
            <span class="text-[11px] font-mono text-zinc-500">● BOOTCAMP V1</span>
            <button @click="$emit('open-game', 'duck_hunt')" class="btn-editorial-outline text-xs !py-1.5 !px-5 flex items-center gap-1.5">
              <Play class="w-3.5 h-3.5 fill-current" /> Play Game
            </button>
          </div>
        </div>

        <!-- ─── PROJECT: BOOTHLAB ─── -->
        <div class="editorial-card flex flex-col justify-between group">
          <div>
            <div class="h-48 bg-zinc-950 border-b border-brand-border flex items-center justify-center relative overflow-hidden">
              <img 
                v-if="imagesLoaded.boothlab"
                :src="'assets/boothlab.png'" 
                alt="BoothLab AI Photobooth" 
                @error="imagesLoaded.boothlab = false"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div v-else class="flex flex-col items-center justify-center text-center p-4">
                <Camera class="w-12 h-12 text-zinc-400 mb-2 group-hover:scale-105 transition-transform" />
                <span class="text-xs font-mono font-bold text-white uppercase">BoothLab AI Photobooth</span>
              </div>
            </div>
            <div class="p-6 space-y-2">
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Flutter</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Face Vision AI</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Golang</span>
              </div>
              <h3 class="text-xl font-bold text-white font-heading group-hover:text-red-400 transition-colors">BoothLab & Flipbook App</h3>
              <p class="text-xs text-zinc-400 font-mono leading-relaxed">
                Desktop photobooth flipbook app with Flutter and web companion featuring facial recognition AI for filter detection and printing.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between">
            <span class="text-[11px] font-mono text-zinc-500">Createch Internship</span>
            <span class="text-xs text-red-500 font-mono font-semibold">● Production</span>
          </div>
        </div>

        <!-- ─── PROJECT: SMART IOT BULB ─── -->
        <div class="editorial-card flex flex-col justify-between group">
          <div>
            <div class="h-48 bg-zinc-950 border-b border-brand-border flex items-center justify-center relative overflow-hidden">
              <img 
                v-if="imagesLoaded.iot"
                :src="'assets/iot_bulb.png'" 
                alt="ESP32 Smart IoT Bulb" 
                @error="imagesLoaded.iot = false"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div v-else class="flex flex-col items-center justify-center text-center p-4">
                <Lightbulb class="w-12 h-12 text-zinc-400 mb-2 group-hover:scale-105 transition-transform" />
                <span class="text-xs font-mono font-bold text-white uppercase">ESP32 Smart IoT Bulb</span>
              </div>
            </div>
            <div class="p-6 space-y-2">
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">ESP32</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">C++</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">IoT Control</span>
              </div>
              <h3 class="text-xl font-bold text-white font-heading group-hover:text-red-400 transition-colors">Smart Bulb Remote Device</h3>
              <p class="text-xs text-zinc-400 font-mono leading-relaxed">
                ESP32 IoT hardware microcontroller device built for remote wireless bulb automation, scheduled timers, and web triggers.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between">
            <span class="text-[11px] font-mono text-zinc-500">Hardware / IoT</span>
            <span class="text-xs text-red-500 font-mono font-semibold">● Embedded IoT</span>
          </div>
        </div>

        <!-- ─── PROJECT: MTS AL-MUBAROK ─── -->
        <div class="editorial-card flex flex-col justify-between group">
          <div>
            <div class="h-48 bg-zinc-950 border-b border-brand-border flex items-center justify-center relative overflow-hidden">
              <img 
                v-if="imagesLoaded.mts"
                :src="'assets/mts_almubarok.png'" 
                alt="mtsalmubarok.sch.id" 
                @error="imagesLoaded.mts = false"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div v-else class="flex flex-col items-center justify-center text-center p-4">
                <Globe class="w-12 h-12 text-zinc-400 mb-2 group-hover:scale-105 transition-transform" />
                <span class="text-xs font-mono font-bold text-white uppercase">mtsalmubarok.sch.id</span>
              </div>
            </div>
            <div class="p-6 space-y-2">
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Vue.js</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Laravel</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">VPS Infra</span>
              </div>
              <h3 class="text-xl font-bold text-white font-heading group-hover:text-red-400 transition-colors">MTS Al-Mubarok Portal</h3>
              <p class="text-xs text-zinc-400 font-mono leading-relaxed">
                School operational portal and full-stack website managing student/faculty workflows, authentication, and server infrastructure.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between">
            <span class="text-[11px] font-mono text-zinc-500">Freelance Production</span>
            <a href="https://mtsalmubarok.sch.id" target="_blank" class="text-xs text-red-500 hover:underline font-mono flex items-center gap-1 font-semibold">
              Visit Portal <ExternalLink class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <!-- ─── PROJECT: PINTARMENABUNG ─── -->
        <div class="editorial-card flex flex-col justify-between group">
          <div>
            <div class="h-48 bg-zinc-950 border-b border-brand-border flex items-center justify-center relative overflow-hidden">
              <img 
                v-if="imagesLoaded.pintar"
                :src="'assets/pintarmenabung.png'" 
                alt="PintarMenabung" 
                @error="imagesLoaded.pintar = false"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div v-else class="flex flex-col items-center justify-center text-center p-4">
                <Wallet class="w-12 h-12 text-zinc-400 mb-2 group-hover:scale-105 transition-transform" />
                <span class="text-xs font-mono font-bold text-white uppercase">PintarMenabung</span>
              </div>
            </div>
            <div class="p-6 space-y-2">
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">Laravel</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">MySQL</span>
                <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">REST API</span>
              </div>
              <h3 class="text-xl font-bold text-white font-heading group-hover:text-red-400 transition-colors">PintarMenabung App</h3>
              <p class="text-xs text-zinc-400 font-mono leading-relaxed">
                Personal finance dashboard with real-time balance tracking, personalized target savings goals, and secure authentication.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between">
            <span class="text-[11px] font-mono text-zinc-500">Full Stack Web</span>
            <span class="text-xs text-zinc-400 font-mono">Personal Project</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { Rocket, Hexagon, Gamepad2, Target, Camera, Lightbulb, Globe, Wallet, ExternalLink, Play } from 'lucide-vue-next'

defineEmits(['open-game'])

const imagesLoaded = reactive({
  boothlab: true,
  mts: true,
  iot: false,
  pintar: false,
})

onMounted(() => {
  const checkImg = (key, src) => {
    const img = new Image()
    img.onload = () => { imagesLoaded[key] = true }
    img.onerror = () => { imagesLoaded[key] = false }
    img.src = src
  }
  checkImg('boothlab', 'assets/boothlab.png')
  checkImg('mts', 'assets/mts_almubarok.png')
  checkImg('iot', 'assets/iot_bulb.png')
  checkImg('pintar', 'assets/pintarmenabung.png')
})
</script>
