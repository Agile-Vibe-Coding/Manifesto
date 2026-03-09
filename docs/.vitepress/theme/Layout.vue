<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted, onUnmounted } from 'vue'

const { Layout } = DefaultTheme

function updateNav() {
  const nav = document.querySelector('.VPNav')
  if (!nav) return
  nav.style.transition = 'transform 0.3s ease'
  nav.style.transform = window.scrollY > 0 ? 'translateY(0)' : 'translateY(-100%)'
}

function toRoman(n: number): string {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  let result = ''
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { result += syms[i]; n -= vals[i] }
  }
  return result
}

function splitPrincipleTitles() {
  document.querySelectorAll('.vp-doc h3').forEach(h3 => {
    const textNode = h3.firstChild
    if (!textNode || textNode.nodeType !== Node.TEXT_NODE) return
    const match = textNode.textContent?.match(/^(\d+)\.\s*(.+)/)
    if (!match) return
    const num = document.createElement('span')
    num.className = 'principle-number'
    num.textContent = toRoman(parseInt(match[1]))
    const title = document.createElement('span')
    title.className = 'principle-title'
    title.textContent = match[2]
    textNode.replaceWith(num, title)
  })
}

onMounted(() => {
  updateNav()
  window.addEventListener('scroll', updateNav, { passive: true })
  splitPrincipleTitles()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateNav)
})
</script>

<template>
  <Layout />
</template>
