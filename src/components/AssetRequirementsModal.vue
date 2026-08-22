<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
    <div class="relative w-full max-w-3xl editorial-card border border-red-900/80 p-6 sm:p-8 flex flex-col gap-6 max-h-[88vh] overflow-y-auto shadow-2xl shadow-red-950/60">
      
      <!-- Header -->
      <div class="flex items-center justify-between border-b border-brand-border pb-4">
        <div class="flex items-center gap-3">
          <div class="p-2.5 rounded-lg bg-red-950 text-red-500 border border-red-800">
            <Image class="w-6 h-6" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-white font-heading">Asset Specifications & Replacement Guide</h3>
            <p class="text-xs text-red-400 font-mono">Place your high-res files in the assets/ folder with these names</p>
          </div>
        </div>
        <button @click="$emit('close')" class="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors">
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Quick Instruction Banner -->
      <div class="p-4 rounded-lg bg-red-950/40 border border-red-900 text-red-300 text-xs leading-relaxed font-mono">
        💡 <strong>Automatic Asset Detection:</strong> When you place any image in <code class="bg-black text-white px-2 py-0.5 rounded border border-red-900">/assets/</code> with the filenames below, the website will automatically load and display them in place of the placeholders!
      </div>

      <!-- Table of Required Assets -->
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs font-mono border-collapse">
          <thead>
            <tr class="border-b border-brand-border text-zinc-500 uppercase text-[10px]">
              <th class="py-3 px-3">File Path & Name</th>
              <th class="py-3 px-3">Target Location</th>
              <th class="py-3 px-3">Recommended Size</th>
              <th class="py-3 px-3">Aspect Ratio</th>
              <th class="py-3 px-3">Format</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-brand-border text-zinc-300">
            <tr class="hover:bg-red-950/20 transition-colors">
              <td class="py-3 px-3 text-red-400 font-bold">assets/avatar.jpg</td>
              <td class="py-3 px-3">Hero 3D Card & Navbar Logo</td>
              <td class="py-3 px-3 text-white">600 x 600 px</td>
              <td class="py-3 px-3">1 : 1 (Square)</td>
              <td class="py-3 px-3">JPG / PNG / WebP</td>
            </tr>
            <tr class="hover:bg-red-950/20 transition-colors">
              <td class="py-3 px-3 text-red-400 font-bold">assets/boothlab.png</td>
              <td class="py-3 px-3">BoothLab AI Photobooth Card</td>
              <td class="py-3 px-3 text-white">1280 x 720 px</td>
              <td class="py-3 px-3">16 : 9</td>
              <td class="py-3 px-3">PNG / WebP</td>
            </tr>
            <tr class="hover:bg-red-950/20 transition-colors">
              <td class="py-3 px-3 text-red-400 font-bold">assets/iot_bulb.png</td>
              <td class="py-3 px-3">ESP32 Smart IoT Bulb Card</td>
              <td class="py-3 px-3 text-white">1280 x 720 px</td>
              <td class="py-3 px-3">16 : 9</td>
              <td class="py-3 px-3">PNG / WebP</td>
            </tr>
            <tr class="hover:bg-red-950/20 transition-colors">
              <td class="py-3 px-3 text-red-400 font-bold">assets/mts_almubarok.png</td>
              <td class="py-3 px-3">MTS Al-Mubarok Portal Card</td>
              <td class="py-3 px-3 text-white">1280 x 720 px</td>
              <td class="py-3 px-3">16 : 9</td>
              <td class="py-3 px-3">PNG / WebP</td>
            </tr>
            <tr class="hover:bg-red-950/20 transition-colors">
              <td class="py-3 px-3 text-red-400 font-bold">assets/pintarmenabung.png</td>
              <td class="py-3 px-3">PintarMenabung App Card</td>
              <td class="py-3 px-3 text-white">1280 x 720 px</td>
              <td class="py-3 px-3">16 : 9</td>
              <td class="py-3 px-3">PNG / WebP</td>
            </tr>
            <tr class="hover:bg-red-950/20 transition-colors">
              <td class="py-3 px-3 text-red-400 font-bold">assets/hasan_cv.pdf</td>
              <td class="py-3 px-3">Download CV Button / Resume Link</td>
              <td class="py-3 px-3 text-white">—</td>
              <td class="py-3 px-3">—</td>
              <td class="py-3 px-3">PDF Document</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Close Button -->
      <div class="pt-4 border-t border-brand-border flex justify-end">
        <button @click="$emit('close')" class="btn-editorial text-xs !py-2.5 !px-7">
          Got It!
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { Image, X } from 'lucide-vue-next'

defineProps({
  isOpen: Boolean
})

defineEmits(['close'])
</script>
