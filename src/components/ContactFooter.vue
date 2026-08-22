<template>
  <section id="contact" class="py-28 relative overflow-hidden border-t border-brand-border">
    <div class="custom-container relative z-10">
      
      <div class="editorial-card p-8 sm:p-12 border-t-4 border-t-red-600 shadow-2xl shadow-red-950/20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Info -->
          <div class="lg:col-span-6 space-y-6">
            <div class="section-tag">// 06 — GET IN TOUCH</div>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Let's Build Something <br /><span class="text-red-500">Worth Shipping</span>
            </h2>
            <p class="text-zinc-400 text-base leading-relaxed">
              Open to software engineering roles, hackathon partnerships, IoT projects, and freelance work. Hit me up directly.
            </p>

            <div class="space-y-3 pt-2">
              <a href="mailto:hasandocs2@gmail.com" class="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-brand-border hover:border-red-700 text-zinc-200 hover:text-white transition-all group">
                <div class="p-2.5 rounded-lg bg-red-950 text-red-500 group-hover:bg-red-900 transition-colors">
                  <Mail class="w-5 h-5" />
                </div>
                <div>
                  <div class="text-[10px] font-mono text-zinc-500">Direct Email</div>
                  <div class="text-sm font-bold">hasandocs2@gmail.com</div>
                </div>
              </a>

              <a href="https://github.com/cchasyz" target="_blank" class="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-brand-border hover:border-zinc-600 text-zinc-200 hover:text-white transition-all group">
                <div class="p-2.5 rounded-lg bg-zinc-900 text-zinc-300 group-hover:bg-zinc-800 transition-colors">
                  <Github class="w-5 h-5" />
                </div>
                <div>
                  <div class="text-[10px] font-mono text-zinc-500">GitHub</div>
                  <div class="text-sm font-bold">github.com/cchasyz</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/hasan-ahmad-badar" target="_blank" class="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-brand-border hover:border-zinc-600 text-zinc-200 hover:text-white transition-all group">
                <div class="p-2.5 rounded-lg bg-zinc-900 text-zinc-300 group-hover:bg-zinc-800 transition-colors">
                  <Linkedin class="w-5 h-5" />
                </div>
                <div>
                  <div class="text-[10px] font-mono text-zinc-500">LinkedIn</div>
                  <div class="text-sm font-bold">linkedin.com/in/hasan-ahmad-badar</div>
                </div>
              </a>
            </div>
          </div>

          <!-- Right: Contact Form -->
          <div class="lg:col-span-6 bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-brand-border">
            <h3 class="text-xl font-bold text-white font-heading mb-1">Send a Message</h3>
            <p class="text-xs text-zinc-500 font-mono mb-6">Will dispatch to hasandocs2@gmail.com</p>
            
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-xs font-mono text-zinc-500 mb-1">Name</label>
                <input v-model="form.name" type="text" required placeholder="Your name" 
                  class="w-full px-4 py-3 rounded-xl bg-black border border-brand-border text-white text-sm focus:border-red-600 focus:outline-none transition-colors placeholder-zinc-700" />
              </div>
              <div>
                <label class="block text-xs font-mono text-zinc-500 mb-1">Email</label>
                <input v-model="form.email" type="email" required placeholder="your@email.com" 
                  class="w-full px-4 py-3 rounded-xl bg-black border border-brand-border text-white text-sm focus:border-red-600 focus:outline-none transition-colors placeholder-zinc-700" />
              </div>
              <div>
                <label class="block text-xs font-mono text-zinc-500 mb-1">Message</label>
                <textarea v-model="form.message" rows="4" required placeholder="Hi Hasan, I'd like to work with you on..." 
                  class="w-full px-4 py-3 rounded-xl bg-black border border-brand-border text-white text-sm focus:border-red-600 focus:outline-none transition-colors resize-none placeholder-zinc-700"></textarea>
              </div>
              <button type="submit" class="btn-editorial w-full justify-center">
                <Send class="w-4 h-4" /> {{ sent ? 'Message Sent ✓' : 'Send Message' }}
              </button>
            </form>
          </div>

        </div>
      </div>

      <!-- Footer -->
      <footer class="mt-16 text-center text-xs font-mono text-zinc-600 border-t border-brand-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© 2026 Hasan. Built with <span class="text-red-600">Vue 3</span> + <span class="text-zinc-400">GSAP</span>.</div>
        <a href="#" class="hover:text-red-500 transition-colors">Back to Top ↑</a>
      </footer>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Mail, Github, Linkedin, Send } from 'lucide-vue-next'

const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

const handleSubmit = () => {
  sent.value = true
  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.message = ''
    sent.value = false
  }, 3000)
}
</script>
