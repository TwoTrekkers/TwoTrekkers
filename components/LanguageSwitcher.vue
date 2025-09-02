<template>
  <div class="relative inline-block text-left">
    <button @click="open = !open" class="px-3 py-1 rounded-md border border-border text-sm">
      {{ locale.toUpperCase() }} ▼
    </button>
    <div v-if="open" class="absolute mt-2 w-44 rounded-md bg-background border border-border p-1 z-10 max-h-72 overflow-auto">
      <button class="block w-full text-left px-2 py-1 rounded hover:bg-white/10" @click="change('en')">English</button>
      <button class="block w-full text-left px-2 py-1 rounded hover:bg-white/10" @click="change('de')">Deutsch</button>
      <button class="block w-full text-left px-2 py-1 rounded hover:bg-white/10" @click="change('fr')">Français</button>
      <button class="block w-full text-left px-2 py-1 rounded hover:bg-white/10" @click="change('es')">Español</button>
      <button class="block w-full text-left px-2 py-1 rounded hover:bg-white/10" @click="change('pt')">Português</button>
      <button class="block w-full text-left px-2 py-1 rounded hover:bg-white/10" @click="change('ja')">日本語</button>
      <button class="block w-full text-left px-2 py-1 rounded hover:bg-white/10" @click="change('ko')">한국어</button>
      <button class="block w-full text-left px-2 py-1 rounded hover:bg-white/10" @click="change('he')">עברית</button>
      <button class="block w-full text-left px-2 py-1 rounded hover:bg-white/10" @click="change('tr')">Türkçe</button>
      <button class="block w-full text-left px-2 py-1 rounded hover:bg-white/10" @click="change('zh-CN')">简体中文</button>
      <button class="block w-full text-left px-2 py-1 rounded hover:bg-white/10" @click="change('zh-TW')">繁體中文</button>
      <button class="block w-full text-left px-2 py-1 rounded hover:bg-white/10" @click="change('zh-HK')">繁體中文(香港)</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const open = ref(false)
const { locale, setLocale } = useI18n()

function change(code: string) {
  setLocale(code)
  open.value = false
}
</script>


