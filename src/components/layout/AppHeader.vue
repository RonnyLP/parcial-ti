<template>
  <header class="fixed top-0 left-0 right-0 z-30 h-14 bg-white border-b border-gray-200 flex items-center px-4 gap-4">
    <button
      @click="toggle"
      class="p-2 rounded hover:bg-gray-100 text-gray-600"
      aria-label="Toggle sidebar"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <span class="font-semibold text-gray-800 text-base">Nombre del Proyecto</span>
  </header>
</template>

<script setup lang="ts">
import { useSidebar } from '../../composables/useSidebar'

const { toggle } = useSidebar()
</script>