<template>
  <section id="skills" class="py-28 relative overflow-hidden border-t border-brand-border">
    <div class="custom-container relative z-10">
      
      <div class="mb-16">
        <div class="section-tag">
          <span>// 04</span> <span>TECHNICAL ARSENAL</span>
        </div>
        <h2 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-heading">
          Technologies & <span class="text-red-500">Tools</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="editorial-card p-6 border-t-2 border-t-red-600">
          <div class="text-xs font-mono text-red-500 mb-4">// FRONTEND & MOBILE</div>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in frontendSkills" :key="s" class="px-3 py-1.5 rounded-md bg-zinc-950 border border-brand-border text-xs font-mono text-zinc-200 hover:border-red-700 hover:text-white transition-colors">{{ s }}</span>
          </div>
        </div>

        <div class="editorial-card p-6 border-t-2 border-t-red-800">
          <div class="text-xs font-mono text-red-400 mb-4">// BACKEND & APIs</div>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in backendSkills" :key="s" class="px-3 py-1.5 rounded-md bg-zinc-950 border border-brand-border text-xs font-mono text-zinc-200 hover:border-red-700 hover:text-white transition-colors">{{ s }}</span>
          </div>
        </div>

        <div class="editorial-card p-6 border-t-2 border-t-zinc-600">
          <div class="text-xs font-mono text-zinc-400 mb-4">// IOT & AI VISION</div>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in iotSkills" :key="s" class="px-3 py-1.5 rounded-md bg-zinc-950 border border-brand-border text-xs font-mono text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors">{{ s }}</span>
          </div>
        </div>

        <div class="editorial-card p-6 border-t-2 border-t-zinc-700">
          <div class="text-xs font-mono text-zinc-500 mb-4">// DEVOPS & CLOUD</div>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in devopsSkills" :key="s" class="px-3 py-1.5 rounded-md bg-zinc-950 border border-brand-border text-xs font-mono text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors">{{ s }}</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const frontendSkills = ['Vue.js', 'Next.js', 'Flutter', 'TypeScript', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS']
const backendSkills = ['Golang', 'Laravel / PHP', 'RESTful APIs', 'MySQL', 'PostgreSQL', 'C++']
const iotSkills = ['ESP32', 'Smart Lighting', 'Computer Vision', 'Face Recognition AI', 'Remote Automation']
const devopsSkills = ['Git / GitHub', 'VPS Deployment', 'Server Provisioning', 'Linux CLI', 'Cloud Architecture']
</script>
