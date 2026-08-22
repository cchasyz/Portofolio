<template>
  <div class="pointer-events-none fixed inset-0 z-50 overflow-hidden">
    <canvas ref="canvasRef" class="w-full h-full block"></canvas>
    
    <!-- Outer Crimson Glow Ring -->
    <div 
      class="fixed w-8 h-8 rounded-full border border-red-500/60 pointer-events-none transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(220,38,38,0.6)]"
      :style="{ left: mouse.x + 'px', top: mouse.y + 'px', transform: `translate(-50%, -50%) scale(${isHovered ? 1.8 : 1})` }"
    ></div>

    <!-- Core Red Dot -->
    <div 
      class="fixed w-2 h-2 rounded-full bg-red-500 pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(239,68,68,0.9)]"
      :style="{ left: mouse.x + 'px', top: mouse.y + 'px' }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'

const canvasRef = ref(null)
const mouse = reactive({ x: -100, y: -100 })
const isHovered = ref(false)

let ctx = null
let animationFrameId = null
let particles = []

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 2.5 + 1
    this.speedX = (Math.random() - 0.5) * 2
    this.speedY = (Math.random() - 0.5) * 2
    this.life = 1.0
    this.decay = Math.random() * 0.02 + 0.02
    this.color = Math.random() > 0.4 ? '#dc2626' : '#ef4444'
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.life -= this.decay
    if (this.size > 0.2) this.size -= 0.04
  }

  draw(context) {
    context.save()
    context.globalAlpha = Math.max(this.life, 0)
    context.fillStyle = this.color
    context.shadowBlur = 6
    context.shadowColor = '#dc2626'
    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    context.fill()
    context.restore()
  }
}

const handleMouseMove = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY

  for (let i = 0; i < 2; i++) {
    particles.push(new Particle(e.clientX, e.clientY))
  }

  const target = e.target
  if (target && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('.editorial-card') || target.closest('button') || target.closest('a'))) {
    isHovered.value = true
  } else {
    isHovered.value = false
  }
}

const resizeCanvas = () => {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
}

const render = () => {
  if (!ctx) return
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i]
    p.update()
    p.draw(ctx)
    if (p.life <= 0 || p.size <= 0) {
      particles.splice(i, 1)
    }
  }

  animationFrameId = requestAnimationFrame(render)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (canvas) {
    ctx = canvas.getContext('2d')
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    render()
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('mousemove', handleMouseMove)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>
