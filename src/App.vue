<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppHeader />

    <!-- Área debajo del header -->
    <div class="flex flex-1 pt-14">
      <AppSidebar />

      <!-- Contenido + Footer -->
      <div class="flex flex-col flex-1 min-w-0">
        <main class="flex-1 p-6 pb-0">
          <RouterView />
        </main>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>