<script setup lang="ts">
interface Stakeholder {
  actor: string
  poder: number
  influencia: number
  interes: number
  analisis: string
}

const stakeholders: Stakeholder[] = [
  {
    actor: 'Autoridades Universitarias (Decano/Rector)',
    poder: 10,
    influencia: 9,
    interes: 7,
    analisis:
      'Concentran el máximo poder formal del proyecto: controlan el presupuesto, los espacios físicos y el aval institucional. Su alta influencia se manifiesta en cómo la comunidad académica percibe el valor del congreso. El riesgo estratégico es su interés moderado (7/10), pues gestionan múltiples frentes simultáneos. La estrategia recomendada es posicionarlos como patrocinadores ejecutivos del evento, presentándoles avances en formato ejecutivo conciso (dashboards de sprint, no informes extensos) y vinculando el congreso explícitamente a los indicadores de acreditación universitaria.',
  },
  {
    actor: 'Docentes y Coordinadores Académicos',
    poder: 8,
    influencia: 9,
    interes: 9,
    analisis:
      'Puente entre la intención formativa y la ejecución académica. Su influencia (9/10) es la más alta entre los actores directos: son referentes de opinión para los estudiantes y conectores hacia ponentes de calidad. Su elevado interés (9/10) se debe a que el éxito del congreso fortalece directamente su posición como docentes innovadores. El riesgo crítico es que, si perciben el evento como una carga adicional, pueden convertirse en resistentes pasivos. La estrategia es hacerlos co-propietarios del diseño pedagógico desde la fase de inception.',
  },
  {
    actor: 'Equipo Organizador Estudiantil',
    poder: 6,
    influencia: 8,
    interes: 10,
    analisis:
      'Núcleo de ejecución del proyecto con el mayor nivel de interés (10/10). Su poder formal es limitado (6/10), pero su poder operativo es total: si fallan, el congreso no se realiza. El riesgo principal es la saturación y el burnout, pues son estudiantes que compaginan el proyecto con su carga académica regular. Aplicar Agile aquí no es opcional sino imperativo: un Product Backlog claro, sprints semanales de una semana de duración, retrospectivas para ajustar la carga y un Product Owner definido son los mecanismos que transforman buena voluntad en resultados concretos.',
  },
  {
    actor: 'Ponentes y Expertos Agile',
    poder: 5,
    influencia: 9,
    interes: 8,
    analisis:
      'Su influencia (9/10) es determinante para la calidad percibida del evento. Aunque su poder formal sobre el proyecto es moderado (5/10), una ponencia de impacto puede detonar la reputación del congreso en redes profesionales. Deben ser confirmados con suficiente anticipación y recibir visibilidad institucional como retribución a su participación.',
  },
  {
    actor: 'Estudiantes de Ingeniería de Sistemas',
    poder: 3,
    influencia: 6,
    interes: 10,
    analisis:
      'Son el usuario final del producto (el congreso) y su interés es máximo (10/10). Aunque su poder formal es bajo (3/10), su influencia se ejerce mediante el boca a boca y la asistencia efectiva, que determina si el evento alcanza masa crítica. Deben mantenerse informados con comunicación constante y canales digitales activos.',
  },
  {
    actor: 'Área de TI / Soporte Tecnológico UNTELS',
    poder: 6,
    influencia: 7,
    interes: 6,
    analisis:
      'Habilitador crítico de la infraestructura tecnológica del evento. Su poder (6/10) reside en que pueden bloquear o facilitar funcionalidades clave como la plataforma de inscripción y el streaming. Deben ser involucrados desde las primeras iteraciones del proyecto para evitar cuellos de botella técnicos en fases avanzadas.',
  },
  {
    actor: 'Empresas Tecnológicas (Empleadores)',
    poder: 7,
    influencia: 6,
    interes: 5,
    analisis:
      'Aunque su interés en el proyecto es moderado (5/10), su poder sobre el ecosistema laboral es alto (7/10). Representan una oportunidad estratégica como sponsors o proveedores de casos de estudio reales. Su participación eleva la credibilidad del congreso y abre redes de contacto para los estudiantes.',
  },
  {
    actor: 'MINEDU',
    poder: 8,
    influencia: 4,
    interes: 3,
    analisis:
      'Posee alto poder normativo (8/10) pero baja influencia directa sobre el proyecto (4/10) y escaso interés operativo (3/10). Su relevancia radica en el marco regulatorio: alinear el congreso con las políticas de calidad educativa del MINEDU fortalece la justificación institucional del evento ante auditorías de acreditación.',
  },
  {
    actor: 'Medios y Redes Sociales',
    poder: 4,
    influencia: 7,
    interes: 4,
    analisis:
      'Actúan como amplificadores del alcance del congreso. Su influencia (7/10) puede potenciar exponencialmente la difusión del evento o, en caso de manejo deficiente, generar ruido negativo. Deben gestionarse con una estrategia de comunicación digital planificada desde las primeras semanas del proyecto.',
  },
  {
    actor: 'Comunidad Académica Nacional',
    poder: 3,
    influencia: 5,
    interes: 4,
    analisis:
      'Actor de monitoreo. Su interés y poder son bajos en el contexto inmediato del proyecto. Sin embargo, los resultados del congreso pueden posicionarlo como referente nacional replicable, lo que genera valor institucional de largo plazo para UNTELS.',
  },
]

function scoreColor(value: number): string {
  if (value >= 8) return 'text-green-700 font-semibold'
  if (value >= 5) return 'text-yellow-700 font-semibold'
  return 'text-red-700 font-semibold'
}
</script>

<template>
  <div class="space-y-8">

    <!-- Page header -->
    <section class="relative bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-600 rounded-2xl overflow-hidden px-8 py-10 text-white shadow-lg">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_50%,white,transparent_60%)]"></div>
      <div class="relative">
        <span class="inline-block bg-white/20 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          Análisis estratégico
        </span>
        <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
          Análisis Poder · Influencia · Interés
        </h1>
        <p class="text-violet-100 max-w-2xl">
          Evaluación tridimensional de cada stakeholder para priorizar esfuerzos de comunicación, negociación y gestión a lo largo del ciclo de vida del proyecto.
        </p>
      </div>
    </section>

    <div class="mx-auto space-y-4 max-w-[900px] text-sm text-gray-700 leading-relaxed">
      <p>
        El análisis tridimensional Poder-Influencia-Interés (PII) es una herramienta estratégica derivada de la gestión de stakeholders que permite diseñar estrategias de involucramiento diferenciadas. Las puntuaciones se asignan en escala del 1 al 10, basadas en el análisis contextual del caso. Los actores con puntuaciones elevadas en las tres dimensiones son denominados actores críticos y requieren gestión activa y continua a lo largo de todo el ciclo de vida del proyecto.
      </p>
      <p>
        El poder refiere a la capacidad formal de tomar decisiones que afecten directamente al proyecto. La influencia mide la capacidad de moldear percepciones, movilizar recursos y afectar la conducta de otros actores. El interés indica el grado en que el actor se ve afectado por los resultados del proyecto y, en consecuencia, su motivación para involucrarse. La combinación de estas tres dimensiones permite priorizar los esfuerzos de comunicación, negociación y gestión del equipo organizador.
      </p>
    </div>

    <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
              Actor / Stakeholder
            </th>
            <th class="px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-gray-700">
              Poder
            </th>
            <th class="px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-gray-700">
              Influencia
            </th>
            <th class="px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-gray-700">
              Interés
            </th>
            <th class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
              Análisis Estratégico
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="(item, index) in stakeholders" :key="index" class="hover:bg-gray-50">
            <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
              {{ item.actor }}
            </td>
            <td class="whitespace-nowrap px-4 py-4 text-center text-sm" :class="scoreColor(item.poder)">
              {{ item.poder }}
            </td>
            <td class="whitespace-nowrap px-4 py-4 text-center text-sm" :class="scoreColor(item.influencia)">
              {{ item.influencia }}
            </td>
            <td class="whitespace-nowrap px-4 py-4 text-center text-sm" :class="scoreColor(item.interes)">
              {{ item.interes }}
            </td>
            <td class="max-w-lg px-6 py-4 text-sm text-gray-700">
              {{ item.analisis }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
