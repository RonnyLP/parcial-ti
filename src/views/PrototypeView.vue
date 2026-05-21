<template>
  <div class="space-y-8">

    <!-- Page header -->
    <section class="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-indigo-600 rounded-2xl overflow-hidden px-8 py-10 text-white shadow-lg">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_50%,white,transparent_60%)]"></div>
      <div class="relative">
        <span class="inline-block bg-white/20 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          Entregable
        </span>
        <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
          Prototipo del congreso
        </h1>
        <p class="text-emerald-100 max-w-2xl">
          Video demostrativo que muestra el prototipo navegable del sitio web y la experiencia de inscripción al AgileX Congress 2025.
        </p>
      </div>
    </section>

    <!-- Video -->
    <div class="bg-black rounded-2xl overflow-hidden shadow-lg">
      <video
        controls
        class="w-full max-h-[70vh]"
        src="/vid.mp4"
      >
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>

  </div>
</template>