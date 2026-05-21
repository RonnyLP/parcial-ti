<script setup lang="ts">
interface Actor {
  actor: string
  clasificacion: 'Directo' | 'Indirecto'
  argumentacion: string
}

const actors: Actor[] = [
  {
    actor: "Docentes y Coordinadores Académicos",
    clasificacion: "Directo",
    argumentacion:
      "Tienen poder decisorio sobre la validez curricular del evento y participan activamente como facilitadores de contenido. Definen la pertinencia académica, aprueban el plan pedagógico y conectan al equipo organizador con la red de ponentes. Su involucramiento es continuo a lo largo del ciclo de vida del proyecto.",
  },
  {
    actor: "Equipo Organizador Estudiantil (Comité del Congreso)",
    clasificacion: "Directo",
    argumentacion:
      "Son los ejecutores directos del proyecto: gestionan el backlog del evento, ejecutan sprints de planificación, coordinan la logística y aseguran la entrega iterativa de valor. Sin este actor, el congreso no puede materializarse operativamente.",
  },
  {
    actor: "Ponentes y Expertos Agile",
    clasificacion: "Directo",
    argumentacion:
      "Proveen el contenido técnico-práctico central del congreso. Su participación determina directamente la calidad percibida del evento y el nivel de competencias que los estudiantes adquieren. Son actores cuya gestión debe iniciarse con suficiente anticipación.",
  },
  {
    actor: "Autoridades Universitarias (Decano / Rectorado)",
    clasificacion: "Directo",
    argumentacion:
      "Otorgan el aval institucional, asignan el presupuesto y validan la realización del congreso. Tienen poder formal sobre los recursos del proyecto. Ninguna acción logística o académica puede ejecutarse sin su aprobación previa, lo que los convierte en actores directos de alto impacto.",
  },
  {
    actor: "Área de TI / Soporte Tecnológico UNTELS",
    clasificacion: "Directo",
    argumentacion:
      "Proveen y administran la infraestructura tecnológica indispensable para el congreso: plataformas de inscripción, conectividad, equipos audiovisuales y soporte de streaming híbrido. Su participación es continua durante la planificación y ejecución del evento.",
  },
  {
    actor: "Empresas Tecnológicas del Entorno (Empleadores)",
    clasificacion: "Indirecto",
    argumentacion:
      "Se benefician a mediano plazo al recibir egresados con competencias Agile consolidadas. No participan en la ejecución del congreso, pero su interés en el perfil profesional resultante los convierte en actores relevantes del ecosistema. Pueden actuar como sponsors o validadores externos.",
  },
  {
    actor: "Comunidad Académica Nacional (Universidades pares)",
    clasificacion: "Indirecto",
    argumentacion:
      "Se ven afectadas de manera mediata: el congreso puede posicionarse como modelo replicable en otras instituciones. Su interés surge de los resultados del evento, no de su proceso. No tienen participación en la ejecución ni poder decisorio sobre el proyecto.",
  },
  {
    actor: "Familia de los Estudiantes",
    clasificacion: "Indirecto",
    argumentacion:
      "El impacto sobre este actor es derivado: mejoran las perspectivas laborales y el desarrollo profesional de sus hijos. No intervienen en el proyecto, pero su bienestar está indirectamente vinculado a los resultados formativos del congreso.",
  },
  {
    actor: "Medios de Comunicación y Redes Sociales",
    clasificacion: "Indirecto",
    argumentacion:
      "Amplifican el alcance del congreso e influyen en la reputación institucional de UNTELS. Su afectación es secundaria: actúan como canales de difusión cuyo impacto sobre el proyecto es mediado por las decisiones del equipo organizador.",
  },
  {
    actor: "Ministerio de Educación (MINEDU)",
    clasificacion: "Indirecto",
    argumentacion:
      "Tiene interés institucional en iniciativas de innovación educativa que eleven la competitividad del sistema universitario peruano. No interviene operativamente en el congreso, pero sus políticas de calidad educativa y acreditación constituyen el marco normativo que legitima el proyecto.",
  },
  {
    actor: "Sociedad Civil y Sector Productivo Peruano",
    clasificacion: "Indirecto",
    argumentacion:
      "Actor difuso cuya afectación es de largo plazo: se beneficia de la formación de profesionales con mentalidad ágil e innovadora. No tiene participación directa en el proyecto, pero representa el impacto social más amplio que justifica la relevancia pública del congreso.",
  },
]; 
</script>

<template>
  <div class="space-y-8">

    <!-- Page header -->
    <section class="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 rounded-2xl overflow-hidden px-8 py-10 text-white shadow-lg">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_50%,white,transparent_60%)]"></div>
      <div class="relative">
        <span class="inline-block bg-white/20 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          Gestión de stakeholders
        </span>
        <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
          Clasificación de actores
        </h1>
        <p class="text-indigo-100 max-w-2xl">
          Identificación y clasificación de los actores directos e indirectos del congreso según su grado de participación y nivel de afectación en el proyecto.
        </p>
      </div>
    </section>

    <div class="mx-auto space-y-4 max-w-[900px] text-sm text-gray-700 leading-relaxed">
      <p>
        La identificación y clasificación de stakeholders constituye el punto de partida metodológico
        en toda formulación de proyectos. Siguiendo el enfoque del Project Management Institute (PMI)
        establecido en el PMBOK 6.ª edición y complementado con la perspectiva del Design Thinking,
        los actores se clasifican según su grado de participación directa en la ejecución del congreso
        y el nivel de afectación que el proyecto genera sobre sus intereses.
      </p>
      <p>
        Un actor es considerado <strong class="text-gray-900">directo</strong> cuando: (1) participa
        activamente en las actividades del congreso, (2) recibe un impacto inmediato y tangible del
        proyecto, y/o (3) tiene poder decisorio sobre recursos, contenidos o infraestructura del
        evento. Por su parte, un actor es <strong class="text-gray-900">indirecto</strong> cuando su
        afectación es mediata, secundaria o deriva de los efectos generados sobre los actores directos.
        Esta distinción no es meramente académica: define quiénes deben ser gestionados activamente y
        quiénes deben ser monitoreados estratégicamente.
      </p>
    </div>

    <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
              Actor
            </th>
            <th class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
              Clasificación
            </th>
            <th class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
              Argumentación
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="(item, index) in actors" :key="index" class="hover:bg-gray-50">
            <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
              {{ item.actor }}
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm">
              <span
                :class="
                  item.clasificacion === 'Directo'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                "
                class="inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold"
              >
                {{ item.clasificacion }}
              </span>
            </td>
            <td class="max-w-lg px-6 py-4 text-sm text-gray-700">
              {{ item.argumentacion }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
