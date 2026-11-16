/**
 * Contenido y configuración del sitio.
 * Centralizar aquí los textos evita duplicarlos en las vistas.
 */

/** Iconos SVG (trazo hereda currentColor). */
export const ICONS = {
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.6 12 20l-7.5-7.4A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 7.5 6.4Z"/></svg>`,
  shieldPlus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.4-3 8.2-7 10-4-1.8-7-5.6-7-10V6l7-3Z"/><path d="M12 9v6M9 12h6"/></svg>`,
  pill: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="8" rx="4"/><path d="M12 8v8"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M4 5.5A2.5 2.5 0 0 0 6.5 8H20"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6M18 20a5.6 5.6 0 0 0-1.6-4"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>`,
  alert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 21 19H3l9-15.5Z"/><path d="M12 10v4M12 17h.01"/></svg>`,
  quote: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7H6a3 3 0 0 0-3 3v7h6v-6H6a3 3 0 0 1 3-3V7Zm11 0h-3a3 3 0 0 0-3 3v7h6v-6h-3a3 3 0 0 1 3-3V7Z"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5.4v13.2a1 1 0 0 0 1.5.86l11-6.6a1 1 0 0 0 0-1.72l-11-6.6A1 1 0 0 0 8 5.4Z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7.5 10.5 12 15l4.5-4.5M4 20h16"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3 10.6 13.4M21 3l-6.4 18-3.9-8.1L2.6 9 21 3Z"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="10" width="15" height="10" rx="2.5"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/></svg>`,
};

/** Identidad y mensajes generales del sitio. */
export const SITE = {
  brand: "ENTRE JÓVENES",
  tagline: "Fórmate, cuídate",
  claim: "Infórmate, cuídate y toma decisiones que te acerquen a la vida que quieres.",
  safeSpace: "Un espacio seguro y confidencial",
  intro:
    "Aquí encuentras herramientas, consejos y recursos para tomar decisiones informadas sobre tu salud sexual y reproductiva.",
  nav: [
    { label: "Inicio", path: "/inicio" },
    { label: "Temas", path: "/temas" },
    { label: "Recursos", path: "/recursos" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Contacto", path: "/contacto" },
  ],
};

/** Temas principales (tarjetas de acceso rápido del Inicio). */
export const THEMES = [
  {
    slug: "autocuidado",
    title: "Prácticas de autocuidado",
    desc: "Cuida de ti hoy y siempre.",
    icon: "heart",
    accent: "mint",
  },
  {
    slug: "anticonceptivos",
    title: "Métodos anticonceptivos",
    desc: "Infórmate, elige y planifica.",
    icon: "pill",
    accent: "blue",
  },
  {
    slug: "its",
    title: "ITS",
    desc: "Conoce, previene y protege.",
    icon: "shieldPlus",
    accent: "warm",
  },
  {
    slug: "servicios",
    title: "Unidad de servicios amigables",
    desc: "Un espacio seguro y confidencial.",
    icon: "mapPin",
    accent: "turquoise",
  },
];

/** Utilidad: devuelve el icono solicitado o un spark por defecto. */
export const icon = (name) => ICONS[name] ?? ICONS.spark;

/** Utilidad: busca un tema por su slug. */
export const findTheme = (slug) => THEMES.find((t) => t.slug === slug) ?? null;

/* ============================================================
   CONTENIDO DE TEMAS INTERNOS
   (textos tomados de "PAGINA WEB completa con arreglos" · Canva)
   Tipos de bloque: lead · list · note · quote · chips · schedule
   ============================================================ */

/** Tema: Prácticas de autocuidado. */
export const AUTOCUIDADO = {
  icon: "heart",
  accent: "mint",
  title: "Prácticas de autocuidado",
  subtitle: "Cuidar de ti es un acto de amor propio",
  tabLabel: "Secciones de autocuidado",
  tabs: [
    {
      id: "que-son",
      label: "¿Qué son?",
      blocks: [
        {
          type: "lead",
          text: "Las prácticas de autocuidado, son las que te permiten conocer tu cuerpo, reconocer tus necesidades, tomar decisiones responsables que favorezcan tu bienestar físico, emocional y social.",
        },
      ],
    },
    {
      id: "sexualidad",
      label: "Autocuidado en sexualidad",
      blocks: [
        {
          type: "list",
          items: [
            {
              title: "Autoconocimiento corporal",
              text: "comprender los cambios de la adolescencia y mantener hábitos adecuados de higiene íntima.",
            },
            {
              title: "Consentimiento y límites",
              text: "Reconocer el derecho a decidir sobre el propio cuerpo, expresar los límites personales y respetar las decisiones de los demás.",
            },
            {
              title: "Autocuidado emocional",
              text: "Fortalecer la autoestima, expresar emociones y tomar decisiones sin dejarse llevar por presiones sociales o de pareja.",
            },
          ],
        },
      ],
    },
    {
      id: "higiene",
      label: "Higiene personal",
      blocks: [
        {
          type: "lead",
          text: "La higiene personal es fundamental para cuidar la salud, prevenir infecciones y favorecer el bienestar durante la adolescencia, etapa en la que ocurren cambios físicos y hormonales.",
        },
        {
          type: "list",
          items: [
            {
              title: "Higiene corporal",
              text: "Bañarse regularmente, lavar las axilas y los pies, y cambiarse la ropa interior y las prendas sudadas.",
            },
            {
              title: "Higiene bucal",
              text: "Cepillarse los dientes con crema dental con flúor al menos dos veces al día y limpiar diariamente entre los dientes.",
            },
            {
              title: "Higiene íntima",
              text: "Lavar externamente los genitales con agua y evitar duchas vaginales, perfumes y productos irritantes.",
            },
            {
              title: "Lavado de manos",
              text: "Lavarse con agua y jabón antes de comer, después de ir al baño y cuando estén sucias.",
            },
          ],
        },
        {
          type: "note",
          title: "Recuerda",
          text: "la higiene personal no consiste en usar muchos productos, sino en mantener hábitos sencillos, constantes y adecuados para cuidar tu salud y sentirte bien.",
        },
      ],
    },
    {
      id: "actividad",
      label: "Actividad física",
      blocks: [
        {
          type: "lead",
          text: "La actividad física contribuye al autocuidado integral, ya que favorece la salud física y emocional, la autoestima y ayuda a manejar el estrés.",
        },
        {
          type: "list",
          items: [
            {
              title: "Practicar ejercicio regularmente",
              text: "Caminar, bailar, montar bicicleta, nadar o practicar deportes ayuda a mantener el bienestar físico y emocional.",
            },
            {
              title: "Cuidar la salud emocional",
              text: "El movimiento ayuda a manejar el estrés, mejorar el estado de ánimo y fortalecer la confianza personal.",
            },
            {
              title: "Adoptar hábitos saludables",
              text: "Mantener una rutina de actividad física, descansar adecuadamente e hidratarse favorece el cuidado integral del cuerpo.",
            },
          ],
        },
        {
          type: "quote",
          title: "Recomendación oficial",
          source: "Organización Mundial de la Salud (OMS, 2024)",
          text: "los adolescentes de 5 a 17 años deben realizar un promedio de 60 minutos diarios de actividad física moderada a vigorosa, mientras que los jóvenes de 18 años en adelante deben practicar entre 150 y 300 minutos semanales de actividad física moderada, adaptada a sus capacidades y condiciones de salud.",
        },
      ],
    },
  ],
};

/** Tema: Unidad de servicios amigables. */
export const SERVICIOS = {
  icon: "mapPin",
  accent: "turquoise",
  title: "Servicios amigables",
  subtitle: "Un espacio seguro y confidencial",
  tabLabel: "Secciones de servicios amigables",
  tabs: [
    {
      id: "que-es",
      label: "¿Qué es?",
      blocks: [
        { type: "tagline", text: "Tu bienestar es nuestra prioridad" },
        {
          type: "lead",
          text: "Es un espacio gratuito y gratuito de estudiantes jóvenes, en donde puedes recibir orientación, información y servicios de salud reproductiva de manera gratuita, confidencial y sin juicios.",
        },
      ],
    },
    {
      id: "servicios",
      label: "Servicios",
      blocks: [
        {
          type: "chips",
          items: [
            "Consulta de medicina general",
            "Consulta de enfermería",
            "Consejería y orientación en SSR",
            "Consulta de odontología",
            "Consulta de planificación familiar",
            "Asesoría en infecciones de transmisión sexual",
            "Consulta preconcepcional",
            "Consulta de psicología",
            "Pruebas de VIH - SIDA",
            "Consulta de nutrición",
          ],
        },
      ],
    },
    {
      id: "ubicacion",
      label: "¿Dónde estamos?",
      blocks: [
        {
          type: "schedule",
          columns: ["Sede", "Lunes a viernes", "Sábado"],
          rows: [
            ["Hospital La Rosa", "7:00AM - 7:00PM", "7:00AM - 1:00PM"],
            ["Hospital Santa Mónica", "7:00AM - 7:00PM", "7:00AM - 1:00PM"],
            ["Centro de Salud Tamasagra", "7:00AM - 7:00PM", "7:00AM - 1:00PM"],
            ["Centro de Salud Primero de Mayo", "7:00AM - 4:00PM", "7:00AM - 1:00PM"],
          ],
        },
      ],
    },
  ],
};

/** Tema: Métodos anticonceptivos (filtros por categoría + fichas en modal). */
export const ANTICONCEPTIVOS = {
  icon: "pill",
  accent: "blue",
  title: "Métodos anticonceptivos",
  subtitle: "Infórmate, elige y planifica",
  tagline: "El método ideal es el que se adapta a tus necesidades. ¡Infórmate y decide!",
  filterLabel: "Tipos de métodos",
  allLabel: "Todos",
  categories: [
    {
      id: "barrera",
      label: "De barrera",
      icon: "shieldPlus",
      methods: [
        {
          id: "preservativo-masculino",
          name: "Preservativo masculino",
          short: "Barrera que impide el paso de los espermatozoides.",
          how: "Actúa como una barrera que impide el paso de los espermatozoides, ayudando a prevenir un embarazo no deseado. Tiene una efectividad aproximada del 82 % con el uso habitual y, además, reduce el riesgo de contraer infecciones de transmisión sexual (ITS) cuando se utiliza correctamente.",
          facts: [
            { label: "Efectividad", value: "82 % con el uso habitual" },
            { label: "Protege contra las ITS", value: "Sí" },
          ],
        },
        {
          id: "preservativo-femenino",
          name: "Preservativo femenino",
          short: "Barrera dentro de la vagina.",
          how: "Forma una barrera dentro de la vagina que impide el paso de los espermatozoides. Tiene una efectividad aproximada del 79 % con el uso habitual y ayuda a prevenir las infecciones de transmisión sexual (ITS).",
          facts: [
            { label: "Efectividad", value: "79 % con el uso habitual" },
            { label: "Protege contra las ITS", value: "Sí" },
          ],
        },
        {
          id: "espermicida",
          name: "Espermicida",
          short: "Barrera dentro de la vagina.",
          how: "Forma una barrera dentro de la vagina que impide el paso de los espermatozoides. Tiene una efectividad aproximada del 79 % con el uso habitual y ayuda a prevenir las infecciones de transmisión sexual (ITS).",
          facts: [
            { label: "Efectividad", value: "79 % con el uso habitual" },
            { label: "Protege contra las ITS", value: "Sí" },
          ],
        },
      ],
    },
    {
      id: "hormonales",
      label: "Hormonales",
      icon: "pill",
      description:
        "Son métodos que utilizan hormonas como estrógenos y progestágenos para prevenir el embarazo, principalmente al impedir la ovulación y espesar el moco cervical, dificultando el paso de los espermatozoides.",
      methods: [
        {
          id: "pastillas",
          name: "Pastillas anticonceptivas",
          short: "Hormonas que simulan un estado de embarazo.",
          how: "Las pastillas anticonceptivas funcionan introduciendo al cuerpo hormonas parecidas a las que producen los ovarios, simulando un estado de embarazo, por lo que los ovarios dejan de producir por sí mismos las hormonas que ocasionan el ciclo menstrual.",
          facts: [
            { label: "Efectividad", value: "91 %" },
            {
              label: "Cómo se debe empezar",
              value: "Debe ser indicado por un profesional de medicina o la enfermería.",
            },
            { label: "Qué debe hacer la usuaria", value: "Tomar las pastillas según las indicaciones." },
            {
              label: "Cambios en el sangrado menstrual",
              value: "Periodos más cortos y predecibles.",
            },
            { label: "Posibles efectos secundarios", value: "Náuseas o sensibilidad en los senos." },
            {
              label: "Tiempo de retorno a la fertilidad",
              value: "Inmediato, luego de suspender la ingesta de pastillas.",
            },
          ],
        },
        {
          id: "implante",
          name: "Implante subdérmico",
          short: "Libera progestágeno bajo la piel del brazo.",
          how: "El implante subdérmico es un método anticonceptivo de larga duración que libera continuamente progestágeno, una hormona que se coloca debajo de la piel de la parte superior del brazo. Su principal función es inhibir la ovulación, evitando que los ovarios liberen óvulos que puedan ser fecundados.",
          facts: [
            { label: "Efectividad", value: "99 %" },
            { label: "Duración", value: "Hasta 5 años." },
            {
              label: "Cómo se debe empezar",
              value: "Debe ser colocado por un profesional de medicina o enfermería.",
            },
            { label: "Qué debe hacer la usuaria", value: "Acudir a citas de control programadas." },
            {
              label: "Cambios en el sangrado menstrual",
              value: "Periodo no frecuente, irregular, extendido e inexistente.",
            },
            {
              label: "Posibles efectos secundarios",
              value: "Dolor en el sitio de la colocación, variaciones de peso.",
            },
          ],
        },
        {
          id: "inyeccion",
          name: "Inyección",
          short: "Hormonal, trimestral o mensual.",
          how: "La inyección anticonceptiva es un método hormonal que previene el embarazo al inhibir la ovulación, es decir, evita que los ovarios liberen óvulos. Esto ocurre porque las hormonas que contiene interrumpen las señales hormonales entre el cerebro y los ovarios. Además, puede disminuir los niveles de estradiol, una hormona que participa en el ciclo menstrual.",
          facts: [
            { label: "Efectividad", value: "94 %" },
            { label: "Duración", value: "Trimestral o mensual." },
          ],
        },
        {
          id: "parche",
          name: "Parche",
          short: "Se coloca sobre la piel; se cambia semanalmente.",
          how: "Es un método hormonal que se coloca sobre la piel y libera hormonas para evitar la ovulación. Tiene una efectividad aproximada del 91 % y se cambia semanalmente. Puede causar náuseas, sensibilidad en los senos o irritación en la piel.",
          facts: [
            { label: "Efectividad", value: "91 %" },
            { label: "Frecuencia de cambio", value: "Semanal." },
            { label: "Posibles efectos secundarios", value: "Náuseas, sensibilidad en los senos o irritación en la piel." },
          ],
          alert:
            "Actualmente, el parche anticonceptivo no está disponible comercialmente en Colombia. No protege contra las ITS, por lo que se recomienda el uso del preservativo.",
        },
        {
          id: "anillo",
          name: "Anillo vaginal",
          short: "Se introduce en la vagina; se cambia mensualmente.",
          how: "Es un método hormonal que se introduce en la vagina para evitar la ovulación. Tiene una efectividad aproximada del 91 % y se cambia mensualmente. Puede causar náuseas, sensibilidad en los senos o cambios menstruales.",
          facts: [
            { label: "Efectividad", value: "91 %" },
            { label: "Frecuencia de cambio", value: "Mensual." },
            { label: "Posibles efectos secundarios", value: "Náuseas, sensibilidad en los senos o cambios menstruales." },
          ],
          alert:
            "El anillo vaginal anticonceptivo no se encuentra disponible habitualmente en Colombia. No protege contra las ITS, por lo que se recomienda utilizar también el preservativo.",
        },
      ],
    },
    {
      id: "diu",
      label: "Dispositivos intrauterinos",
      icon: "target",
      description:
        "Son los anticonceptivos reversibles de larga duración más comúnmente utilizados. Los DIU son populares debido a sus ventajas como método anticonceptivo, incluidas su alta efectividad y sus efectos adversos mínimos.",
      methods: [
        {
          id: "diu-hormonal",
          name: "DIU hormonal",
          short: "Dispositivo intrauterino de larga duración.",
          facts: [
            { label: "Efectividad", value: "99 %" },
            { label: "Duración", value: "De 3 a 5 años." },
            {
              label: "Cómo se debe empezar",
              value: "Debe ser colocado por un(a) profesional de la medicina o la enfermería.",
            },
            { label: "Qué debe hacer la usuaria", value: "Acudir a citas de control programadas." },
            {
              label: "Cambios en el sangrado menstrual",
              value: "Periodo irregular, leve o inexistente.",
            },
            {
              label: "Posibles efectos secundarios",
              value: "Cólicos durante y luego de la colocación, manchas.",
            },
          ],
        },
        {
          id: "diu-cobre",
          name: "DIU de cobre",
          short: "Dispositivo intrauterino de larga duración.",
          facts: [
            { label: "Efectividad", value: "99 %" },
            { label: "Duración", value: "Hasta 12 años." },
            {
              label: "Cómo se debe empezar",
              value: "Debe ser colocado por un(a) profesional de la medicina o la enfermería.",
            },
            { label: "Qué debe hacer la usuaria", value: "Acudir a citas de control programadas." },
            {
              label: "Cambios en el sangrado menstrual",
              value: "Periodos con sangrado intenso que vuelven a la normalidad de 3 a 6 meses.",
            },
            {
              label: "Posibles efectos secundarios",
              value: "Cólicos que usualmente mejoran de tres a seis meses.",
            },
          ],
        },
      ],
    },
    {
      id: "naturales",
      label: "Naturales",
      icon: "heart",
      alert:
        "Los métodos naturales son menos confiables para prevenir embarazos. Consulta sobre métodos más eficaces y recuerda que el preservativo ayuda a prevenir las ITS.",
      methods: [
        {
          id: "ritmo",
          name: "Ritmo",
          short: "Seguimiento del ciclo de fertilidad.",
          how: "Implican hacer un seguimiento del ciclo de fertilidad de la mujer y evitar las relaciones sexuales o utilizar métodos de barrera en los días en que es más probable que quede embarazada. Este método puede tener tasas de embarazo más altas que otros tipos.",
        },
        {
          id: "retiro",
          name: "Retiro",
          short: "Retirar el pene antes de la eyaculación.",
          how: "Durante la relación sexual, el pene se retira de la vagina antes de la eyaculación. El objetivo es evitar que los espermatozoides ingresen en la vagina. Pero el esperma puede filtrarse antes de que se retire el pene, por lo que este método tiene tasas de embarazo más altas que otros tipos.",
        },
      ],
    },
  ],
};

/** Tema: Infecciones de transmisión sexual (ITS). */
export const ITS = {
  icon: "shieldPlus",
  accent: "warm",
  title: "ITS",
  subtitle: "Conoce, previene y protege",
  tabLabel: "Secciones sobre ITS",
  tabs: [
    {
      id: "que-son",
      label: "¿Qué son?",
      blocks: [
        {
          type: "lead",
          text: "Infección causada por bacterias, virus u otros microorganismos que se transmite principalmente mediante relaciones sexuales y, en algunos casos, por la sangre, durante el embarazo, el parto o la lactancia. En ocasiones, no presenta síntomas, por lo que puede pasar desapercibida.",
        },
      ],
    },
    {
      id: "enfermedades",
      label: "Enfermedades más comunes",
      blocks: [
        {
          type: "list",
          items: [
            {
              title: "Sífilis",
              text: "Causa úlceras indoloras, erupciones y, en etapas avanzadas, puede afectar órganos internos.",
            },
            {
              title: "Gonorrea",
              text: "Provoca secreción uretral, dolor al orinar y puede infectar la garganta y el recto.",
            },
            {
              title: "Clamidia",
              text: "Puede causar flujo vaginal anormal, secreción uretral y dolor abdominal.",
            },
          ],
        },
      ],
    },
    {
      id: "sintomas",
      label: "Síntomas",
      blocks: [
        {
          type: "lead",
          text: "Aunque algunas ITS pueden ser asintomáticas, los síntomas comunes incluyen:",
        },
        {
          type: "chips",
          items: [
            "Flujo vaginal inusual",
            "Secreción uretral en hombres",
            "Picazón o ardor en partes íntimas",
            "Dolor abdominal",
            "Úlceras genitales",
          ],
        },
      ],
    },
    {
      id: "prevencion",
      label: "Prevención",
      blocks: [
        {
          type: "list",
          items: [
            {
              title: "Usa preservativos correctamente",
              text: "durante todas las relaciones sexuales.",
            },
            {
              title: "Realiza controles periódicos y pruebas",
              text: "para detectar ITS, ya que muchas pueden no presentar síntomas.",
            },
            {
              title: "Acude al establecimiento de salud más cercano",
              text: "para recibir orientación y realizar pruebas.",
            },
          ],
        },
      ],
    },
  ],
};

/** Sección: Recursos y videos. */
export const RECURSOS = {
  icon: "spark",
  accent: "blue",
  title: "Recursos",
  subtitle: "La información también es parte de cuidarte",
  lead: "Aquí encuentras herramientas, consejos y recursos para tomar decisiones informadas sobre tu salud sexual y reproductiva.",
  topicsLabel: "Material para ti",
  topics: [
    {
      id: "derechos",
      name: "Derechos sexuales y reproductivos",
      short: "Conoce tus derechos y cómo ejercerlos con libertad y sin presión.",
      icon: "book",
      accent: "blue",
      pdf: "assets/docs/derechos-sexuales-y-reproductivos.pdf",
    },
    {
      id: "metodos",
      name: "Métodos anticonceptivos",
      short: "Opciones para informarte, elegir y planificar con tranquilidad.",
      icon: "pill",
      accent: "mint",
      pdf: "assets/docs/metodos-anticonceptivos.pdf",
    },
    {
      id: "servicios",
      name: "Servicios amigables",
      short: "Espacios gratuitos, confidenciales y sin juicios para orientarte.",
      icon: "mapPin",
      accent: "turquoise",
      pdf: "assets/docs/servicios-amigables.pdf",
    },
    {
      id: "salud-mental",
      name: "Salud mental",
      short: "Bienestar emocional y apoyo para sentirte mejor contigo.",
      icon: "heart",
      accent: "warm",
      pdf: "assets/docs/salud-mental.pdf",
    },
    {
      id: "its",
      name: "Orientación en ITS",
      short: "Información clara para prevenir, detectar y cuidar tu salud.",
      icon: "shieldPlus",
      accent: "blue",
      pdf: "assets/docs/infografia-its.pdf",
    },
    {
      id: "preservativo",
      name: "Uso adecuado del preservativo",
      short: "Aprende a usarlo correctamente y a cuidarte con doble método.",
      icon: "check",
      accent: "mint",
      pdf: "assets/docs/uso-adecuado-preservativo.pdf",
    },
  ],
  consejosLabel: "Consejos clave",
  consejos: [
    "Informarte es importante",
    "Buenas decisiones, un buen futuro",
    "Cuídate y cuida a los demás",
    "Si te quieres cuidar, usa doble método",
    "Puedes tener un gran dolor si no utilizas el condón",
    "Cuidándote, cuidas a todos",
    "No tengas miedo, participa",
    "Acudir con un profesional de la unidad de servicios te puede ayudar",
  ],
  slogan: "Cuídate, participa, aseguremos nuestro futuro",
  videosLabel: "Videos",
  videosNote: "Aprende a tu ritmo.",
  videoCategories: [
    {
      id: "metodos",
      label: "Métodos anticonceptivos",
      icon: "pill",
      accent: "blue",
      videos: [{ id: "SBXwN1RSoXE" }, { id: "NdEKzlIittk" }, { id: "cTLhUk7BlEA" }],
    },
    {
      id: "autocuidado",
      label: "Prácticas de autocuidado",
      icon: "heart",
      accent: "mint",
      videos: [{ id: "UrvQaNvJDCk" }],
    },
    {
      id: "its",
      label: "ITS",
      icon: "shieldPlus",
      accent: "warm",
      videos: [{ id: "nRKEPsJ3hoQ" }, { id: "LLCBe_uLbdc" }, { id: "bdnqEgX1HLU" }],
    },
    {
      id: "servicios",
      label: "Servicios amigables",
      icon: "mapPin",
      accent: "turquoise",
      videos: [],
    },
  ],
};

/** Sección: Nosotros (texto institucional del proyecto). */
export const NOSOTROS = {
  icon: "users",
  accent: "turquoise",
  title: "Nosotros",
  subtitle: "La historia y el propósito detrás de ENTRE JÓVENES",
  lead: "Un proyecto que nace del encuentro entre la academia y la salud pública.",
  project: {
    name: "Conocer y prevenir para mejor vivir",
    tagline: "Tu bienestar es nuestra prioridad",
    paragraphs: [
      "La presente página web constituye uno de los productos desarrollados en el marco del proyecto “Conocer y prevenir para mejor vivir”, realizado durante la Práctica Integrada del programa de Tecnología en Promoción de la Salud de la Universidad de Nariño, periodo B-2026, en articulación con la E.S.E. Pasto Salud, sede La Rosa.",
      "Su elaboración surge a partir de la identificación de la necesidad de fortalecer los conocimientos de los estudiantes del grado 10.º A de la Institución Educativa Municipal La Rosa, con el propósito de promover prácticas de autocuidado en salud sexual y reproductiva. Para ello, la página reúne contenidos educativos que facilitan el acceso a información clara y comprensible sobre diferentes temáticas relacionadas con la salud sexual y reproductiva, favoreciendo el aprendizaje, la toma de decisiones informadas y el ejercicio responsable del autocuidado.",
    ],
  },
  facts: [
    { label: "Proyecto", value: "Conocer y prevenir para mejor vivir" },
    { label: "Programa", value: "Tecnología en Promoción de la Salud" },
    { label: "Universidad", value: "Universidad de Nariño" },
    { label: "Periodo", value: "B-2026" },
    { label: "En articulación con", value: "E.S.E. Pasto Salud, sede La Rosa" },
    { label: "Dirigido a", value: "Grado 10.º A · I.E.M. La Rosa" },
  ],
  team: {
    label: "Equipo creador",
    title: "Quiénes hicieron posible este proyecto",
    note: "Deja listos estos espacios para las fotografías reales del equipo creador.",
    // Reemplaza el "photo" de cada integrante por la ruta de la imagen real.
    members: [
      { name: "[Nombre del integrante]", role: "[Rol o programa]", photo: "assets/img/equipo/integrante-1.jpg", accent: "mint" },
      { name: "[Nombre del integrante]", role: "[Rol o programa]", photo: "assets/img/equipo/integrante-2.jpg", accent: "turquoise" },
    ],
  },
};

/** Sección: Contacto (formulario confidencial + ubicación). */
export const CONTACTO = {
  icon: "mail",
  accent: "mint",
  title: "Contacto",
  subtitle: "Hablemos",
  lead: "Escríbenos tus dudas con total confianza: este es un espacio seguro y confidencial.",
  form: {
    title: "Déjanos tu mensaje",
    note: "Ninguna pregunta sobre salud sexual y reproductiva es incómoda ni motivo de juicio.",
    nameLabel: "Nombre o seudónimo",
    namePlaceholder: "¿Cómo quieres que te llamemos?",
    emailLabel: "Correo de contacto (opcional)",
    emailPlaceholder: "tucorreo@ejemplo.com",
    subjectLabel: "¿Sobre qué tema quieres hablar?",
    subjects: [
      "Métodos anticonceptivos",
      "Infecciones de transmisión sexual (ITS)",
      "Servicios amigables",
      "Salud mental",
      "Otro tema",
    ],
    messageLabel: "Tu mensaje o pregunta",
    messagePlaceholder: "Cuéntanos tu duda con confianza…",
    consentLabel: "Entiendo que mi mensaje será tratado de forma confidencial y sin juicios.",
    submit: "Enviar mensaje",
    success: "¡Gracias por escribirnos! Tu mensaje es confidencial y será atendido por el equipo de la unidad de servicios amigables.",
  },
  info: {
    title: "Unidad de servicios amigables",
    note: "Atención gratuita, confidencial y sin juicios.",
  },
};
