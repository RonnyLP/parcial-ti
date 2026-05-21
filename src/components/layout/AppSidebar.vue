<template>
  <!-- Backdrop (solo mobile) -->
  <div
    v-if="isOpen"
    class="fixed inset-0 z-40 bg-black/40 md:hidden"
    @click="close"
  />

  <!-- Sidebar -->
  <aside
    v-if="isOpen"
    class="
      fixed top-14 left-0 z-50 h-[calc(100vh-3.5rem)] w-64
      bg-white border-r border-gray-200 flex flex-col
      md:sticky md:z-auto
    "
  >
    <nav class="flex-1 overflow-y-auto py-4">
      <ul class="space-y-1 px-3">
        <li v-for="item in navItems" :key="item.to">
          <RouterLink
            :to="item.to"
            class="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
            active-class="bg-gray-100 font-medium text-gray-900"
            @click="handleNavClick"
          >
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useSidebar } from '@/composables/useSidebar'

const { isOpen, close } = useSidebar()

const navItems = [
  { to: '/',               label: 'Inicio' },
  { to: '/actors',         label: 'Clasificación de actores' },
  { to: '/analysis',       label: 'Análisis tridimensional' },
  { to: '/problem-tree',   label: 'Árbol de problemas' },
  { to: '/objective-tree', label: 'Árbol de objetivos' },
  { to: '/prototype',      label: 'Prototipo (Vídeo)' },
]

function handleNavClick() {
  // En mobile cerramos el sidebar al navegar
  if (window.innerWidth < 768) close()
}
</script>