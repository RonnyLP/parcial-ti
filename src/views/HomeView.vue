<template>
  <div class="space-y-16 pb-12">

    <!-- ── HERO ────────────────────────────────────────────────────────────── -->
    <section class="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 rounded-2xl overflow-hidden px-8 py-16 text-white shadow-lg">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_50%,white,transparent_60%)]"></div>
      <div class="relative max-w-2xl">
        <span class="inline-block bg-white/20 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Evento universitario · 2025
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          AgileX Congress 2025
        </h1>
        <p class="text-lg sm:text-xl text-indigo-100 font-medium mb-8">
          Formulación y Gestión de Proyectos de Base Tecnológica bajo el Agile Mindset
        </p>
        <div class="flex flex-wrap gap-5 text-sm text-indigo-100">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span>14 y 15 de noviembre de 2025</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>Auditorio Central — Universidad Nacional, Bogotá</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── ¿QUÉ ES EL CONGRESO? ───────────────────────────────────────────── -->
    <section>
      <p class="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-1">Sobre el congreso</p>
      <h2 class="text-2xl font-bold text-gray-800 mb-4">¿Qué es AgileX Congress?</h2>
      <p class="text-gray-600 leading-relaxed max-w-3xl">
        AgileX Congress es un evento universitario intensivo y práctico orientado a estudiantes y académicos que busca
        cerrar la brecha entre la teoría universitaria y el mundo laboral real. En un entorno donde la agilidad es clave
        para la entrega de valor, el congreso reúne talleres, conferencias y ejercicios colaborativos para que los
        asistentes experimenten de primera mano los marcos y metodologías que lideran la industria tecnológica.
      </p>
    </section>

    <!-- ── ¿QUÉ APRENDERÁS? ───────────────────────────────────────────────── -->
    <section>
      <p class="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-1">Contenidos</p>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">¿Qué aprenderás?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Scrum y Kanban -->
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-800 mb-2">Scrum y Kanban</h3>
          <p class="text-sm text-gray-500">Gestiona el trabajo con marcos ágiles ampliamente adoptados en la industria.</p>
        </div>
        <!-- Design Thinking -->
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-800 mb-2">Design Thinking</h3>
          <p class="text-sm text-gray-500">Empatiza con los usuarios y co-crea soluciones centradas en las personas.</p>
        </div>
        <!-- Lean Startup -->
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-800 mb-2">Lean Startup</h3>
          <p class="text-sm text-gray-500">Valida ideas con el mínimo esfuerzo y aprende rápido de los ciclos de retroalimentación.</p>
        </div>
        <!-- Liderazgo -->
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-800 mb-2">Liderazgo colaborativo</h3>
          <p class="text-sm text-gray-500">Desarrolla habilidades para liderar equipos y entregar valor de forma sostenida.</p>
        </div>
      </div>
    </section>

    <!-- ── ¿A QUIÉN VA DIRIGIDO? ──────────────────────────────────────────── -->
    <section class="bg-indigo-50 rounded-2xl px-8 py-10">
      <p class="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-1">Audiencia</p>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">¿A quién va dirigido?</h2>
      <ul class="space-y-4">
        <li v-for="item in audience" :key="item" class="flex items-start gap-3">
          <span class="mt-1 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center shrink-0">
            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </span>
          <span class="text-gray-700">{{ item }}</span>
        </li>
      </ul>
    </section>

    <!-- ── INTEGRANTES ─────────────────────────────────────────────────────── -->
    <section>
      <p class="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-1">Equipo organizador</p>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Integrantes del proyecto</h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div v-for="member in members" :key="member" class="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center gap-3 shadow-sm">
          <div class="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg class="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
            </svg>
          </div>
          <span class="text-sm font-semibold text-gray-800 text-center">{{ member }}</span>
          <span class="text-xs text-gray-400">Estudiante</span>
        </div>
      </div>
    </section>

    <!-- ── AGENDA ──────────────────────────────────────────────────────────── -->
    <section>
      <p class="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-1">Programa</p>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Agenda del congreso</h2>
      <div class="space-y-6">
        <div v-for="day in agenda" :key="day.label" class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div class="bg-indigo-600 px-6 py-3">
            <h3 class="text-sm font-semibold text-white">{{ day.label }}</h3>
          </div>
          <div class="divide-y divide-gray-100">
            <div v-for="block in day.blocks" :key="block.time" class="flex items-start gap-4 px-6 py-3">
              <span class="text-xs font-mono text-indigo-500 shrink-0 pt-0.5 w-28">{{ block.time }}</span>
              <span class="text-sm text-gray-700">{{ block.activity }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── ¿POR QUÉ ASISTIR? ──────────────────────────────────────────────── -->
    <section>
      <p class="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-1">Beneficios</p>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">¿Por qué asistir?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="benefit in benefits" :key="benefit.title" class="flex gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
            <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800 mb-1">{{ benefit.title }}</h3>
            <p class="text-sm text-gray-500">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const audience = [
  'Estudiantes de ingeniería de sistemas, industrial, electrónica y carreras afines.',
  'Docentes y académicos que trabajan con metodologías de gestión de proyectos.',
  'Comunidad universitaria interesada en proyectos de base tecnológica e innovación.',
]

const members = [
  'Molina Vera, Marcelo Samuel',
  'Perez Damian, Junior Joel',
  'Pumaricra Meneses, Ronny Luis',
  'Roncal Saravia, Jorge Rafael',
]

const agenda = [
  {
    label: 'Día 1 — Viernes 14 de noviembre',
    blocks: [
      { time: '8:00 – 9:00',   activity: 'Registro y bienvenida' },
      { time: '9:00 – 10:30',  activity: 'Conferencia inaugural: Agile Mindset en la era digital' },
      { time: '10:30 – 10:45', activity: 'Pausa' },
      { time: '10:45 – 12:30', activity: 'Taller: Scrum desde cero — planificación de sprints' },
      { time: '12:30 – 13:30', activity: 'Almuerzo' },
      { time: '13:30 – 15:30', activity: 'Taller: Kanban y flujo de trabajo visual' },
      { time: '15:30 – 17:00', activity: 'Panel: Experiencias reales con Agile en proyectos universitarios' },
    ],
  },
  {
    label: 'Día 2 — Sábado 15 de noviembre',
    blocks: [
      { time: '8:30 – 10:00',  activity: 'Taller: Design Thinking — empatía y prototipado' },
      { time: '10:00 – 10:15', activity: 'Pausa' },
      { time: '10:15 – 12:00', activity: 'Taller: Lean Startup — hipótesis, MVP y aprendizaje validado' },
      { time: '12:00 – 13:00', activity: 'Almuerzo' },
      { time: '13:00 – 14:30', activity: 'Taller: Liderazgo colaborativo y facilitación de equipos' },
      { time: '14:30 – 16:00', activity: 'Hackathon express: Proyecto integrador ágil' },
      { time: '16:00 – 17:00', activity: 'Clausura y entrega de certificados' },
    ],
  },
]

const benefits = [
  {
    title: 'Competencias de alta demanda',
    description: 'Adquiere habilidades que las empresas tecnológicas buscan activamente en sus equipos.',
  },
  {
    title: 'Mentalidad ágil',
    description: 'Interioriza el Agile Mindset para adaptarte al cambio y generar valor de forma continua.',
  },
  {
    title: 'Red de contactos',
    description: 'Conéctate con pares, docentes y profesionales que comparten tu interés por la innovación.',
  },
  {
    title: 'Certificado de participación',
    description: 'Obtén un certificado oficial que valida tus horas de formación en gestión ágil de proyectos.',
  },
]
</script>
