<template>
  <section id="about" class="py-28 relative overflow-hidden">
    <div class="custom-container relative z-10">
      
      <!-- Section Tag Header -->
      <div class="mb-12">
        <div class="section-tag">
          <span>// 01</span> <span>FULL BIOGRAPHY & JOURNEY</span>
        </div>
        <h2 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-heading">
          Adaptability, Grit & <span class="text-red-500">Competitive Edge</span>
        </h2>
      </div>

      <!-- Main Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <!-- Left: Fuller Story Card -->
        <div class="lg:col-span-7 editorial-card p-8 sm:p-10 flex flex-col justify-between border-l-4 border-l-red-600">
          <div class="space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-brand-border">
              <h3 class="text-xl font-bold text-white font-heading uppercase tracking-wide flex items-center gap-2">
                <Globe class="w-5 h-5 text-red-500" /> Life Journey & Philosophy
              </h3>
              <span class="text-xs font-mono text-red-400 bg-red-950/60 px-3 py-1 rounded-full border border-red-800">
                Saudi Arabia ➔ Indonesia
              </span>
            </div>

            <p class="text-zinc-200 text-base sm:text-lg leading-relaxed">
              I was born in <strong class="text-red-400">Jizan, Saudi Arabia</strong>, where I spent my early childhood until 5th grade. Moving to Indonesia in 5th grade initiated an incredible journey across multiple cities—living in <strong class="text-white">Lamongan</strong> from 5th to 9th grade, completing software engineering vocational high school in <strong class="text-white">Surabaya</strong> (10th-12th grade), and currently pursuing my Associate of Information Technology degree in <strong class="text-white">Malang</strong> at Universitas Brawijaya.
            </p>

            <p class="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Relocating between distinct cultures and cities taught me to be <strong class="text-red-400">exceptionally competitive</strong> and <strong class="text-red-400">seamlessly adaptable</strong> to any environment, technical stack, or team dynamic. I thrive under pressure, taking immense pride in leadership, fast problem synthesis, and engineering impactful software solutions that win hackathons and solve real-world problems.
            </p>
          </div>

          <!-- Chronological Journey Steps -->
          <div class="pt-6 border-t border-brand-border mt-8">
            <div class="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">// CITY CHRONOLOGY</div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div class="p-3 rounded-lg bg-zinc-950 border border-brand-border text-xs font-mono">
                <div class="text-red-500 font-bold">Jizan, KSA</div>
                <div class="text-zinc-400 text-[10px]">Birth – 5th Grade</div>
              </div>
              <div class="p-3 rounded-lg bg-zinc-950 border border-brand-border text-xs font-mono">
                <div class="text-white font-bold">Lamongan</div>
                <div class="text-zinc-400 text-[10px]">5th – 9th Grade</div>
              </div>
              <div class="p-3 rounded-lg bg-zinc-950 border border-brand-border text-xs font-mono">
                <div class="text-white font-bold">Surabaya</div>
                <div class="text-zinc-400 text-[10px]">10th – 12th Grade</div>
              </div>
              <div class="p-3 rounded-lg bg-zinc-950 border border-brand-border text-xs font-mono">
                <div class="text-red-400 font-bold">Malang</div>
                <div class="text-zinc-400 text-[10px]">Uni Brawijaya</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Academic & Core Attributes -->
        <div class="lg:col-span-5 flex flex-col gap-6">
          
          <div class="editorial-card p-6 border-l-4 border-l-red-500">
            <div class="text-xs font-mono text-red-500 mb-1">// HIGHER EDUCATION</div>
            <h4 class="text-lg font-bold text-white font-heading">UNIVERSITAS BRAWIJAYA</h4>
            <div class="text-sm font-semibold text-zinc-300">Associate of Information Technology</div>
            <div class="text-xs text-zinc-500 mt-2 font-mono">📍 Malang, Jawa Timur (Aug 2026 – Present)</div>
          </div>

          <div class="editorial-card p-6 border-l-4 border-l-red-700">
            <div class="text-xs font-mono text-red-400 mb-1">// VOCATIONAL HIGH SCHOOL</div>
            <h4 class="text-lg font-bold text-white font-heading">SMKN 1 SURABAYA</h4>
            <div class="text-sm font-semibold text-zinc-300">Software Engineering Major</div>
            <div class="text-xs text-zinc-500 mt-2 font-mono">📍 Surabaya, Jawa Timur (2023 – 2026)</div>
          </div>

          <!-- Strengths Highlight Box -->
          <div class="editorial-card p-6 bg-red-950/20 border border-red-900/60">
            <div class="text-xs font-mono text-red-400 mb-2">// KEY COMPETITIONS & MINDSET</div>
            <ul class="space-y-1.5 text-xs font-mono text-zinc-300">
              <li class="flex items-center gap-2"><span class="text-red-500">✔</span> PeddieHacks Intl Solo Prize Winner</li>
              <li class="flex items-center gap-2"><span class="text-red-500">✔</span> LKSN Web Tech National Medallion</li>
              <li class="flex items-center gap-2"><span class="text-red-500">✔</span> Fast Cultural & Tech Adaptability</li>
              <li class="flex items-center gap-2"><span class="text-red-500">✔</span> High-Stress Concurrency & Leadership</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Globe } from 'lucide-vue-next'
</script>
