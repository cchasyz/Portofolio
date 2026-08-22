<template>
  <section id="awards" class="py-28 relative overflow-hidden border-t border-brand-border">
    <div class="custom-container relative z-10">
      
      <div class="mb-16">
        <div class="section-tag">
          <span>// 03</span> <span>HONORS & HACKATHONS</span>
        </div>
        <h2 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-heading">
          Awards & <span class="text-red-500">Trophies</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Award 1 -->
        <div class="editorial-card p-6 border-t-2 border-t-red-600 group hover:border-red-500 transition-colors">
          <div class="flex items-center justify-between mb-5">
            <div class="p-3 rounded-lg bg-red-950 border border-red-800 text-red-500 group-hover:bg-red-900 transition-colors">
              <Trophy class="w-6 h-6" />
            </div>
            <span class="text-xs font-mono text-zinc-500">AUG 2025</span>
          </div>
          <div class="text-xs font-mono text-red-500 font-bold uppercase tracking-wider mb-1">// INTERNATIONAL HACKATHON</div>
          <h3 class="text-xl font-bold text-white font-heading">Solo Prize PeddieHacks 2025</h3>
          <p class="text-xs text-zinc-400 font-mono leading-relaxed mt-3">
            International Hackathon solo prize recipient for building a full-stack software product under rapid competitive time constraints.
          </p>
        </div>

        <!-- Award 2 -->
        <div class="editorial-card p-6 border-t-2 border-t-red-700 group hover:border-red-600 transition-colors">
          <div class="flex items-center justify-between mb-5">
            <div class="p-3 rounded-lg bg-red-950 border border-red-800 text-red-500 group-hover:bg-red-900 transition-colors">
              <Medal class="w-6 h-6" />
            </div>
            <span class="text-xs font-mono text-zinc-500">JUL 2025</span>
          </div>
          <div class="text-xs font-mono text-red-500 font-bold uppercase tracking-wider mb-1">// NATIONAL COMPETITION</div>
          <h3 class="text-xl font-bold text-white font-heading">Medallion of Excellence LKSN</h3>
          <p class="text-xs text-zinc-400 font-mono leading-relaxed mt-3">
            National Web Technologies LKSN — representing East Java among Indonesia's top vocational web developers.
          </p>
        </div>

        <!-- Award 3 -->
        <div class="editorial-card p-6 border-t-2 border-t-red-600 group hover:border-red-500 transition-colors">
          <div class="flex items-center justify-between mb-5">
            <div class="p-3 rounded-lg bg-red-950 border border-red-800 text-red-500 group-hover:bg-red-900 transition-colors">
              <Crown class="w-6 h-6" />
            </div>
            <span class="text-xs font-mono text-zinc-500">MAY 2025</span>
          </div>
          <div class="text-xs font-mono text-red-500 font-bold uppercase tracking-wider mb-1">// PROVINCIAL CHAMPION</div>
          <h3 class="text-xl font-bold text-white font-heading">1st Winner LKS Web Tech Jatim</h3>
          <p class="text-xs text-zinc-400 font-mono leading-relaxed mt-3">
            First place in LKS Web Technologies East Java province — speed coding & full-stack architecture mastery.
          </p>
        </div>

        <!-- Award 4 -->
        <div class="editorial-card p-6 border-t-2 border-t-red-700 group hover:border-red-600 transition-colors">
          <div class="flex items-center justify-between mb-5">
            <div class="p-3 rounded-lg bg-red-950 border border-red-800 text-red-500 group-hover:bg-red-900 transition-colors">
              <Mic class="w-6 h-6" />
            </div>
            <span class="text-xs font-mono text-zinc-500">JUN 2024</span>
          </div>
          <div class="text-xs font-mono text-red-500 font-bold uppercase tracking-wider mb-1">// PROVINCIAL DEBATE</div>
          <h3 class="text-xl font-bold text-white font-heading">1st Winner English Debate STIESIA</h3>
          <p class="text-xs text-zinc-400 font-mono leading-relaxed mt-3">
            Champion in English debate across East Java — demonstrating fast critical synthesis, articulation, and confidence.
          </p>
        </div>

        <!-- Award 5 -->
        <div class="editorial-card p-6 border-t-2 border-t-red-600 group hover:border-red-500 transition-colors">
          <div class="flex items-center justify-between mb-5">
            <div class="p-3 rounded-lg bg-red-950 border border-red-800 text-red-500 group-hover:bg-red-900 transition-colors">
              <Target class="w-6 h-6" />
            </div>
            <span class="text-xs font-mono text-zinc-500">OCT 2025</span>
          </div>
          <div class="text-xs font-mono text-red-500 font-bold uppercase tracking-wider mb-1">// NATIONAL LOGIC</div>
          <h3 class="text-xl font-bold text-white font-heading">Semifinalist NLC Competition ITS</h3>
          <p class="text-xs text-zinc-400 font-mono leading-relaxed mt-3">
            National Logic Competition semifinalist hosted by Institut Teknologi Sepuluh Nopember (ITS), Surabaya.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Trophy, Medal, Crown, Mic, Target } from 'lucide-vue-next'
</script>
