import { coordenadas as gr132Coords } from './gr132_coords.js';

export const rutas = [
  // GR-132: Costas de La Gomera (Ruta circular ~120km, 8 etapas)
  {
    id: 'gr132',
    nombre: 'GR-132 Costas de La Gomera',
    tipo: 'GR',
    dificultad: 'Alta',
    distancia: 115.2,
    duracion: '46h',
    desnivel: 7418,
    descripcion: 'Sendero circular que rodea toda la isla de La Gomera por la costa. Recorre paisajes de acantilados, barrancos y pueblos costeros.',
    inicio: 'San Sebastián de la Gomera',
    fin: 'San Sebastián de la Gomera',
    coordenadas: gr132Coords,
    etapas: [
      { nombre: 'San Sebastián - Hermigua', distancia: 18.5 },
      { nombre: 'Hermigua - Vallehermoso', distancia: 22.3 },
      { nombre: 'Vallehermoso - Alojera', distancia: 15.8 },
      { nombre: 'Alojera - Valle Gran Rey', distancia: 14.2 },
      { nombre: 'Valle Gran Rey - La Dama', distancia: 12.5 },
      { nombre: 'La Dama - Alajeró', distancia: 11.8 },
      { nombre: 'Alajeró - Playa Santiago', distancia: 10.2 },
      { nombre: 'Playa Santiago - San Sebastián', distancia: 14.5 }
    ],
    tieneImagenes360: true
  },

  // GR-131: Cumbres de La Gomera (Ruta transversal ~45km)
  {
    id: 'gr131',
    nombre: 'GR-131 Cumbres de La Gomera',
    tipo: 'GR',
    dificultad: 'Alta',
    distancia: 44.85,
    duracion: '18h',
    desnivel: 2615,
    descripcion: 'Sendero transversal que cruza la isla de San Sebastián a Vallehermoso, pasando por el Alto de Garajonay (1487m) y el Parque Nacional.',
    inicio: 'San Sebastián de la Gomera',
    fin: 'Vallehermoso',
    coordenadas: [
      [28.091234, -17.113695], // San Sebastián
      [28.095000, -17.118000],
      [28.099000, -17.125000],
      [28.103000, -17.135000],
      [28.106000, -17.145000],
      [28.108000, -17.155000],
      [28.109000, -17.165000],
      [28.109500, -17.175000],
      [28.109000, -17.185000],
      [28.108000, -17.195000],
      [28.107000, -17.205000],
      [28.106000, -17.215000],
      [28.104453, -17.118010], // Degollada de Peraza (aprox)
      [28.105000, -17.225000],
      [28.106039, -17.165384], // Fortaleza de Chipude
      [28.108000, -17.235000],
      [28.113982, -17.125356], // Las Hayas
      [28.118000, -17.245000],
      [28.123000, -17.250000],
      [28.128000, -17.250000], // Juego de Bolas
      [28.132000, -17.255000],
      [28.136000, -17.260000],
      [28.140000, -17.263000],
      [28.145000, -17.265000],
      [28.148700, -17.265000], // Alto de Garajonay
      [28.145000, -17.270000],
      [28.140000, -17.275000],
      [28.135000, -17.285000],
      [28.130000, -17.295000],
      [28.128000, -17.305000],
      [28.128000, -17.315000],
      [28.128000, -17.325000],
      [28.128000, -17.335000]  // Vallehermoso
    ],
    etapas: [
      { nombre: 'San Sebastián - Degollada de Peraza', distancia: 10.3 },
      { nombre: 'Degollada de Peraza - Chipude', distancia: 17.3 },
      { nombre: 'Chipude - Vallehermoso', distancia: 16.3 },
      { nombre: 'Ext. Vallehermoso - Playa', distancia: 3.7 }
    ],
    tieneImagenes360: false
  },

  // PR-LG 7: El Contadero - Alto de Garajonay
  {
    id: 'prlg7',
    nombre: 'PR-LG 7 Contadero - Garajonay',
    tipo: 'PR',
    dificultad: 'Media',
    distancia: 6.5,
    duracion: '2.5h',
    desnivel: 400,
    descripcion: 'Sendero que asciende desde El Contadero hasta el punto más alto de La Gomera (1487m).',
    inicio: 'El Contadero',
    fin: 'Alto de Garajonay',
    coordenadas: [
      [28.1100, -17.2500],
      [28.1150, -17.2480],
      [28.1200, -17.2460],
      [28.1250, -17.2450],
      [28.1300, -17.2480],
      [28.1350, -17.2520],
      [28.1400, -17.2550],
      [28.1450, -17.2600],
      [28.1487, -17.2650] // Alto de Garajonay
    ],
    tieneImagenes360: false
  },

  // PR-LG 10: Cañada de Jorge
  {
    id: 'prlg10',
    nombre: 'PR-LG 10 Cañada de Jorge',
    tipo: 'PR',
    dificultad: 'Fácil',
    distancia: 5.2,
    duracion: '2h',
    desnivel: 200,
    descripcion: 'Sendero circular por el bosque de laurisilva en el Parque Nacional de Garajonay.',
    inicio: 'Cañada de Jorge',
    fin: 'Cañada de Jorge',
    coordenadas: [
      [28.1300, -17.2750],
      [28.1320, -17.2720],
      [28.1340, -17.2700],
      [28.1360, -17.2730],
      [28.1380, -17.2760],
      [28.1360, -17.2800],
      [28.1340, -17.2820],
      [28.1320, -17.2800],
      [28.1300, -17.2780],
      [28.1300, -17.2750]
    ],
    tieneImagenes360: false
  },

  // PR-LG 12: Raso de la Bruma - Risquillos de Corgo - Las Creces
  {
    id: 'prlg12',
    nombre: 'PR-LG 12 Raso de la Bruma - Las Creces',
    tipo: 'PR',
    dificultad: 'Fácil',
    distancia: 4,
    duracion: '1h',
    desnivel: 120,
    descripcion: 'Introducción paisajística al bosque de laurisilva. Avanza por una cresta montañosa con vistas a Vallehermoso.',
    inicio: 'Raso de la Bruma',
    fin: 'Las Creces',
    coordenadas: [
      [28.1350, -17.2850], // Raso de la Bruma
      [28.1340, -17.2820],
      [28.1330, -17.2790],
      [28.1320, -17.2760],
      [28.1300, -17.2730],
      [28.1280, -17.2700],
      [28.1260, -17.2680],
      [28.1240, -17.2660],
      [28.1220, -17.2650],
      [28.1200, -17.2650],
      [28.1180, -17.2650] // Las Creces
    ],
    tieneImagenes360: false
  },

  // PR-LG 16: Pajarito - Lajugal
  {
    id: 'prlg16',
    nombre: 'PR-LG 16 Pajarito - Lajugal',
    tipo: 'PR',
    dificultad: 'Fácil',
    distancia: 3.5,
    duracion: '1h',
    desnivel: 100,
    descripcion: 'Sendero accesible por el Parque Nacional de Garajonay, ideal para descubrir la laurisilva.',
    inicio: 'Pajarito',
    fin: 'Lajugal',
    coordenadas: [
      [28.1050, -17.2350],
      [28.1080, -17.2320],
      [28.1120, -17.2290],
      [28.1150, -17.2260],
      [28.1180, -17.2230]
    ],
    tieneImagenes360: false
  },

  // PR-LG 17: Mirador de la Laja - Casa del Manco
  {
    id: 'prlg17',
    nombre: 'PR-LG 17 Mirador de la Laja - Casa del Manco',
    tipo: 'PR',
    dificultad: 'Media',
    distancia: 5.8,
    duracion: '2h',
    desnivel: 350,
    descripcion: 'Sendero con vistas panorámicas impresionantes, incluyendo el Roque Agando y el Teide en días claros.',
    inicio: 'Mirador de la Laja',
    fin: 'Casa del Manco',
    coordenadas: [
      [28.0950, -17.1300],
      [28.0980, -17.1350],
      [28.1020, -17.1400],
      [28.1060, -17.1450],
      [28.1100, -17.1500],
      [28.1150, -17.1550]
    ],
    tieneImagenes360: false
  },

// Ruta circular Laguna Grande - Alto de Garajonay - Laguna Grande (Ruta 14 del Parque Nacional)
// 9.8km, circular, dificultad media
// Basada en la ruta oficial del Parque Nacional de Garajonay
  {
    id: 'ruta14-laguna-garajonay',
    nombre: 'Ruta 14: Laguna Grande - Alto de Garajonay',
    tipo: 'PR',
    dificultad: 'Media',
    distancia: 9.8,
    duracion: '5h',
    desnivel: 311,
    descripcion: 'Ruta circular oficial del Parque Nacional de Garajonay. Comienza en el aparcamiento de Laguna Grande, asciende por un antiguo camino de herradura empedrado, pasa por Laguna Chica y llega al punto más alto de la isla (1.487m). Vistas espectaculares a Tenerife, El Hierro y La Palma en días despejados.',
    inicio: 'Aparcamiento Laguna Grande',
    fin: 'Aparcamiento Laguna Grande',
    esRutaEjemplo360: true,
    coordenadas: [
      // Inicio: Aparcamiento Laguna Grande (altitud ~1.161m)
      [28.1150, -17.2450],
      [28.1152, -17.2445],
      [28.1155, -17.2438],
      [28.1158, -17.2430],
      [28.1162, -17.2422],
      // Camino de herradura ascendente (fayal-brezal)
      [28.1168, -17.2412],
      [28.1175, -17.2400],
      [28.1182, -17.2388],
      [28.1190, -17.2375],
      [28.1198, -17.2362],
      [28.1206, -17.2348],
      [28.1215, -17.2335],
      [28.1224, -17.2320],
      [28.1233, -17.2305],
      // Zona de Laguna Chica
      [28.1242, -17.2290],
      [28.1250, -17.2278],
      [28.1258, -17.2265],
      [28.1266, -17.2252],
      [28.1274, -17.2240],
      // Ascenso final hacia la cumbre
      [28.1282, -17.2230],
      [28.1290, -17.2220],
      [28.1300, -17.2210],
      [28.1310, -17.2200],
      [28.1322, -17.2190],
      [28.1335, -17.2180],
      [28.1348, -17.2170],
      [28.1362, -17.2160],
      [28.1376, -17.2152],
      [28.1390, -17.2145],
      [28.1405, -17.2140],
      [28.1420, -17.2135],
      [28.1435, -17.2130],
      [28.1450, -17.2128],
      [28.1465, -17.2125],
      // Cumbre Alto de Garajonay (1.487m)
      [28.1480, -17.2125],
      [28.1487, -17.2125],
      // Inicio descenso (pista forestal)
      [28.1490, -17.2130],
      [28.1495, -17.2138],
      [28.1500, -17.2148],
      [28.1505, -17.2160],
      [28.1510, -17.2172],
      [28.1515, -17.2185],
      [28.1520, -17.2198],
      [28.1525, -17.2212],
      [28.1530, -17.2228],
      [28.1535, -17.2245],
      [28.1540, -17.2262],
      [28.1545, -17.2280],
      [28.1550, -17.2298],
      [28.1555, -17.2315],
      [28.1558, -17.2332],
      [28.1560, -17.2350],
      // Zona de repoblación forestal (pinar y castaños)
      [28.1558, -17.2368],
      [28.1555, -17.2385],
      [28.1550, -17.2402],
      [28.1545, -17.2418],
      [28.1538, -17.2434],
      [28.1530, -17.2448],
      [28.1520, -17.2460],
      [28.1510, -17.2470],
      [28.1498, -17.2478],
      [28.1485, -17.2485],
      [28.1470, -17.2490],
      [28.1455, -17.2495],
      [28.1440, -17.2498],
      [28.1425, -17.2500],
      [28.1410, -17.2502],
      [28.1395, -17.2505],
      [28.1380, -17.2508],
      [28.1365, -17.2510],
      [28.1350, -17.2512],
      [28.1335, -17.2515],
      [28.1320, -17.2518],
      [28.1305, -17.2520],
      [28.1290, -17.2522],
      [28.1275, -17.2524],
      [28.1260, -17.2525],
      [28.1245, -17.2525],
      [28.1230, -17.2524],
      [28.1215, -17.2522],
      [28.1200, -17.2518],
      [28.1185, -17.2514],
      [28.1172, -17.2508],
      [28.1160, -17.2500],
      [28.1150, -17.2490],
      [28.1142, -17.2478],
      [28.1136, -17.2465],
      // Vuelta a Laguna Grande
      [28.1132, -17.2452],
      [28.1135, -17.2440],
      [28.1140, -17.2432],
      [28.1145, -17.2440],
      [28.1150, -17.2450]
    ],
    tieneImagenes360: true
  },

  // Ruta: Arure - Las Hayas - Arure
  {
    id: 'arure-lashayas',
    nombre: 'Arure - Las Hayas - Arure',
    tipo: 'PR',
    dificultad: 'Media',
    distancia: 6.8,
    duracion: '2.5h',
    desnivel: 380,
    descripcion: 'Ruta circular que ofrece una inmersión en las medianías altas de La Gomera, con monteverde y caseríos tradicionales.',
    inicio: 'Arure',
    fin: 'Arure',
    coordenadas: [
      [28.0650, -17.2850],
      [28.0700, -17.2820],
      [28.0750, -17.2790],
      [28.0800, -17.2760],
      [28.0850, -17.2730], // Las Hayas
      [28.0820, -17.2700],
      [28.0780, -17.2750],
      [28.0740, -17.2780],
      [28.0700, -17.2810],
      [28.0650, -17.2850]
    ],
    tieneImagenes360: false
  },

  // Ruta: El Cedro - Ermita de Lourdes
  {
    id: 'cedro-lourdes',
    nombre: 'El Cedro - Ermita de Lourdes',
    tipo: 'PR',
    dificultad: 'Fácil',
    distancia: 3.2,
    duracion: '1h',
    desnivel: 80,
    descripcion: 'Sendero por el bosque del Cedro hasta la Ermita de Nuestra Señora de Lourdes, rodeado de laurisilva centenaria.',
    inicio: 'El Cedro',
    fin: 'Ermita de Lourdes',
    coordenadas: [
      [28.0900, -17.2700],
      [28.0920, -17.2720],
      [28.0940, -17.2740],
      [28.0960, -17.2760],
      [28.0980, -17.2780]
    ],
    tieneImagenes360: false
  },

  // Ruta: Riscos de La Mérica
  {
    id: 'merica',
    nombre: 'Riscos de La Mérica',
    tipo: 'PR',
    dificultad: 'Media',
    distancia: 5.5,
    duracion: '2h',
    desnivel: 300,
    descripcion: 'Sendero con vistas espectaculares a los riscos y al valle de Hermigua. Popular entre los senderistas.',
    inicio: 'Hermigua',
    fin: 'Riscos de La Mérica',
    coordenadas: [
      [28.1750, -17.2200],
      [28.1720, -17.2250],
      [28.1680, -17.2300],
      [28.1640, -17.2350],
      [28.1600, -17.2400]
    ],
    tieneImagenes360: false
  },

  // Ruta: San Sebastián - Alto de El Cabrito
  {
    id: 'sansebastian-cabrito',
    nombre: 'San Sebastián - Alto de El Cabrito',
    tipo: 'PR',
    dificultad: 'Media',
    distancia: 7.2,
    duracion: '2.5h',
    desnivel: 520,
    descripcion: 'Sendero que asciende desde la capital hasta el Alto de El Cabrito, con vistas panorámicas de la costa este.',
    inicio: 'San Sebastián de la Gomera',
    fin: 'Alto de El Cabrito',
    coordenadas: [
      [28.0883, -17.1142],
      [28.0920, -17.1200],
      [28.0960, -17.1260],
      [28.1000, -17.1320],
      [28.1040, -17.1380],
      [28.1080, -17.1440],
      [28.1120, -17.1500]
    ],
    tieneImagenes360: false
  },

  // Ruta: San Sebastián - Hermigua por Enchereda y GR-132
  {
    id: 'sansebastian-hermigua',
    nombre: 'San Sebastián - Hermigua (GR-132)',
    tipo: 'PR',
    dificultad: 'Alta',
    distancia: 18.5,
    duracion: '6h',
    desnivel: 800,
    descripcion: 'Primera etapa del GR-132 que conecta la capital con Hermigua por la costa norte.',
    inicio: 'San Sebastián de la Gomera',
    fin: 'Hermigua',
    coordenadas: [
      [28.0883, -17.1142],
      [28.0950, -17.1200],
      [28.1020, -17.1280],
      [28.1100, -17.1380],
      [28.1180, -17.1480],
      [28.1280, -17.1580],
      [28.1380, -17.1680],
      [28.1480, -17.1780],
      [28.1580, -17.1900],
      [28.1680, -17.2050],
      [28.1750, -17.2200]
    ],
    tieneImagenes360: false
  },

  // Ruta: Valle Gran Rey - La Calera
  {
    id: 'valle-gran-rey-calera',
    nombre: 'Valle Gran Rey - La Calera',
    tipo: 'PR',
    dificultad: 'Fácil',
    distancia: 2.5,
    duracion: '45min',
    desnivel: 50,
    descripcion: 'Sendero costero corto que conecta el valle con La Calera, el núcleo principal de Valle Gran Rey.',
    inicio: 'Valle Gran Rey',
    fin: 'La Calera',
    coordenadas: [
      [28.0480, -17.2700],
      [28.0500, -17.2650],
      [28.0520, -17.2600],
      [28.0540, -17.2550],
      [28.0560, -17.2500]
    ],
    tieneImagenes360: false
  },

  // Ruta: Reventón Oscuro - El Cedro
  {
    id: 'reventon-cedro',
    nombre: 'Reventón Oscuro - El Cedro',
    tipo: 'PR',
    dificultad: 'Media',
    distancia: 4.8,
    duracion: '2h',
    desnivel: 280,
    descripcion: 'Sendero que conecta Reventón Oscuro con el bosque del Cedro, atravesando laurisilva centenaria.',
    inicio: 'Reventón Oscuro',
    fin: 'El Cedro',
    coordenadas: [
      [28.0850, -17.2650],
      [28.0870, -17.2670],
      [28.0880, -17.2680],
      [28.0890, -17.2690],
      [28.0900, -17.2700]
    ],
    tieneImagenes360: false
  },

  // Ruta: La Vizcaína - El Cercado - La Vizcaína
  {
    id: 'vizcaina-cercado',
    nombre: 'La Vizcaína - El Cercado',
    tipo: 'PR',
    dificultad: 'Fácil',
    distancia: 3.5,
    duracion: '1.5h',
    desnivel: 120,
    descripcion: 'Ruta circular que conecta La Vizcaína con El Cercado, conocido por su artesanía del barro.',
    inicio: 'La Vizcaína',
    fin: 'La Vizcaína',
    coordenadas: [
      [28.1300, -17.3100],
      [28.1280, -17.3150],
      [28.1260, -17.3200],
      [28.1240, -17.3250], // El Cercado
      [28.1260, -17.3200],
      [28.1280, -17.3150],
      [28.1300, -17.3100]
    ],
    tieneImagenes360: false
  },

  // Ruta: Alajeró - Igualero - Arguayoda
  {
    id: 'alajero-igualero',
    nombre: 'Alajeró - Igualero - Arguayoda',
    tipo: 'PR',
    dificultad: 'Media',
    distancia: 8.2,
    duracion: '3h',
    desnivel: 450,
    descripcion: 'Sendero que conecta Alajeró con los caseríos de Igualero y Arguayoda, con vistas al sur de la isla.',
    inicio: 'Alajeró',
    fin: 'Arguayoda',
    coordenadas: [
      [28.0350, -17.1850],
      [28.0300, -17.1900],
      [28.0250, -17.1950],
      [28.0200, -17.2000], // Igualero
      [28.0150, -17.2050],
      [28.0100, -17.2100]  // Arguayoda
    ],
    tieneImagenes360: false
  },

  // Ruta: Contadero - El Cedro
  {
    id: 'contadero-cedro',
    nombre: 'Contadero - El Cedro',
    tipo: 'PR',
    dificultad: 'Fácil',
    distancia: 3.8,
    duracion: '1.5h',
    desnivel: 150,
    descripcion: 'Sendero que conecta El Contadero con el bosque del Cedro, ideal para familias.',
    inicio: 'El Contadero',
    fin: 'El Cedro',
    coordenadas: [
      [28.1100, -17.2500],
      [28.1080, -17.2550],
      [28.1050, -17.2600],
      [28.1000, -17.2650],
      [28.0950, -17.2680],
      [28.0900, -17.2700]
    ],
    tieneImagenes360: false
  },

  // Ruta: San Sebastián - Playa de Santiago
  {
    id: 'sansebastian-playasantiago',
    nombre: 'San Sebastián - Playa de Santiago',
    tipo: 'PR',
    dificultad: 'Media',
    distancia: 12.5,
    duracion: '4h',
    desnivel: 600,
    descripcion: 'Sendero que conecta la capital con Playa de Santiago por el sur de la isla.',
    inicio: 'San Sebastián de la Gomera',
    fin: 'Playa de Santiago',
    coordenadas: [
      [28.0883, -17.1142],
      [28.0850, -17.1200],
      [28.0800, -17.1280],
      [28.0750, -17.1350],
      [28.0700, -17.1420],
      [28.0650, -17.1480],
      [28.0600, -17.1550],
      [28.0550, -17.1600],
      [28.0500, -17.1550],
      [28.0450, -17.1550] // Playa de Santiago
    ],
    tieneImagenes360: false
  },

  // Ruta: Chipude - Playa de Vallehermoso
  {
    id: 'chipude-vallehermoso-playa',
    nombre: 'Chipude - Playa de Vallehermoso',
    tipo: 'PR',
    dificultad: 'Alta',
    distancia: 9.5,
    duracion: '3.5h',
    desnivel: 800,
    descripcion: 'Sendero que desciende desde Chipude hasta la playa de Vallehermoso, con un desnivel importante.',
    inicio: 'Chipude',
    fin: 'Playa de Vallehermoso',
    coordenadas: [
      [28.1050, -17.2300],
      [28.1080, -17.2450],
      [28.1100, -17.2600],
      [28.1150, -17.2750],
      [28.1200, -17.2900],
      [28.1250, -17.3050],
      [28.1280, -17.3200],
      [28.1300, -17.3350],
      [28.1320, -17.3450] // Playa de Vallehermoso
    ],
    tieneImagenes360: false
  },

  // Ruta: Agulo - Juego de Bolas - Agulo
  {
    id: 'agulo-juegobolas',
    nombre: 'Agulo - Juego de Bolas - Agulo',
    tipo: 'PR',
    dificultad: 'Media',
    distancia: 7.5,
    duracion: '3h',
    desnivel: 500,
    descripcion: 'Ruta circular desde Agulo hasta el Centro de Visitantes de Juego de Bolas en Garajonay.',
    inicio: 'Agulo',
    fin: 'Agulo',
    coordenadas: [
      [28.1600, -17.3100],
      [28.1550, -17.3000],
      [28.1500, -17.2900],
      [28.1450, -17.2800],
      [28.1400, -17.2700], // Juego de Bolas
      [28.1450, -17.2800],
      [28.1500, -17.2900],
      [28.1550, -17.3000],
      [28.1600, -17.3100]
    ],
    tieneImagenes360: false
  },

  // Ruta: Hermigua - El Moralito - Hermigua
  {
    id: 'hermigua-moralito',
    nombre: 'Hermigua - El Moralito',
    tipo: 'PR',
    dificultad: 'Fácil',
    distancia: 4.2,
    duracion: '1.5h',
    desnivel: 180,
    descripcion: 'Sendero circular desde Hermigua hasta El Moralito, con vistas al Valle de Hermigua y el Teide.',
    inicio: 'Hermigua',
    fin: 'Hermigua',
    coordenadas: [
      [28.1750, -17.2200],
      [28.1730, -17.2180],
      [28.1700, -17.2150],
      [28.1680, -17.2120], // El Moralito
      [28.1700, -17.2150],
      [28.1730, -17.2180],
      [28.1750, -17.2200]
    ],
    tieneImagenes360: false
  },

  // Ruta: La Laguna Grande I (sendero del parque nacional)
  {
    id: 'laguna-grande-1',
    nombre: 'Sendero Laguna Grande I',
    tipo: 'PR',
    dificultad: 'Fácil',
    distancia: 2.8,
    duracion: '1h',
    desnivel: 50,
    descripcion: 'Sendero corto y accesible alrededor de Laguna Grande, perfecto para familias y personas con movilidad reducida.',
    inicio: 'Laguna Grande',
    fin: 'Laguna Grande',
    coordenadas: [
      [28.1150, -17.2450],
      [28.1160, -17.2440],
      [28.1170, -17.2430],
      [28.1180, -17.2440],
      [28.1170, -17.2460],
      [28.1160, -17.2470],
      [28.1150, -17.2450]
    ],
    tieneImagenes360: false
  },

  // Ruta: La Meseta de Hermigua
  {
    id: 'meseta-hermigua',
    nombre: 'La Meseta de Hermigua',
    tipo: 'PR',
    dificultad: 'Fácil',
    distancia: 3.5,
    duracion: '1.5h',
    desnivel: 80,
    descripcion: 'Sendero por la meseta de Hermigua, con vistas panorámicas al valle y al océano.',
    inicio: 'Hermigua',
    fin: 'La Meseta',
    coordenadas: [
      [28.1750, -17.2200],
      [28.1780, -17.2150],
      [28.1810, -17.2100],
      [28.1840, -17.2050],
      [28.1870, -17.2000]
    ],
    tieneImagenes360: false
  },

  // Ruta: Chipude - Alto de Garajonay - Chipude
  {
    id: 'chipude-garajonay',
    nombre: 'Chipude - Alto de Garajonay',
    tipo: 'PR',
    dificultad: 'Media',
    distancia: 6.2,
    duracion: '2.5h',
    desnivel: 420,
    descripcion: 'Sendero que asciende desde Chipude hasta el Alto de Garajonay, pasando por bosques de laurisilva.',
    inicio: 'Chipude',
    fin: 'Chipude',
    coordenadas: [
      [28.1050, -17.2300],
      [28.1100, -17.2350],
      [28.1150, -17.2400],
      [28.1200, -17.2450],
      [28.1250, -17.2500],
      [28.1300, -17.2550],
      [28.1350, -17.2600],
      [28.1400, -17.2630],
      [28.1450, -17.2650],
      [28.1487, -17.2650],
      [28.1450, -17.2650],
      [28.1400, -17.2630],
      [28.1350, -17.2600],
      [28.1300, -17.2550],
      [28.1250, -17.2500],
      [28.1200, -17.2450],
      [28.1150, -17.2400],
      [28.1100, -17.2350],
      [28.1050, -17.2300]
    ],
    tieneImagenes360: false
  },

  // Ruta: Degollada de Peraza - Chipude
  {
    id: 'degollada-chipude',
    nombre: 'Degollada de Peraza - Chipude',
    tipo: 'PR',
    dificultad: 'Media',
    distancia: 8.5,
    duracion: '3h',
    desnivel: 350,
    descripcion: 'Sendero que conecta la Degollada de Peraza con la Fortaleza de Chipude.',
    inicio: 'Degollada de Peraza',
    fin: 'Chipude',
    coordenadas: [
      [28.1250, -17.1600],
      [28.1230, -17.1700],
      [28.1210, -17.1800],
      [28.1180, -17.1900],
      [28.1150, -17.2000],
      [28.1120, -17.2100],
      [28.1100, -17.2200],
      [28.1080, -17.2250],
      [28.1050, -17.2300]
    ],
    tieneImagenes360: false
  },

  // Ruta: Barranquillos
  {
    id: 'barranquillos',
    nombre: 'Barranquillos',
    tipo: 'PR',
    dificultad: 'Fácil',
    distancia: 2.5,
    duracion: '1h',
    desnivel: 80,
    descripcion: 'Sendero corto por el barranco de Barranquillos, con vegetación de ribera.',
    inicio: 'Barranquillos',
    fin: 'Barranquillos',
    coordenadas: [
      [28.1200, -17.2350],
      [28.1220, -17.2330],
      [28.1240, -17.2310],
      [28.1260, -17.2300],
      [28.1240, -17.2310],
      [28.1220, -17.2330],
      [28.1200, -17.2350]
    ],
    tieneImagenes360: false
  },

  // Ruta: Ermita de Lourdes (Alajeró)
  {
    id: 'ermita-lourdes',
    nombre: 'Ermita de Lourdes (Alajeró)',
    tipo: 'PR',
    dificultad: 'Fácil',
    distancia: 2.2,
    duracion: '45min',
    desnivel: 60,
    descripcion: 'Sendero corto hasta la montaña sagrada de Alajeró y su ermita.',
    inicio: 'Alajeró',
    fin: 'Ermita de Lourdes',
    coordenadas: [
      [28.0350, -17.1850],
      [28.0370, -17.1830],
      [28.0390, -17.1810],
      [28.0410, -17.1790],
      [28.0430, -17.1770]
    ],
    tieneImagenes360: false
  }
];

export const puntosInteres = [
  {
    id: 'garajonay',
    nombre: 'Parque Nacional de Garajonay',
    tipo: 'parque',
    coordenadas: [28.1280, -17.2450],
    descripcion: 'Patrimonio de la Humanidad por la UNESCO. Bosque de laurisilva milenario.',
    tieneImagenes360: false
  },
  {
    id: 'laguna-grande',
    nombre: 'Laguna Grande',
    tipo: 'mirador',
    coordenadas: [28.1150, -17.2450],
    descripcion: 'Laguna legendaria, centro de visitantes del Parque Nacional.',
    tieneImagenes360: false
  },
  {
    id: 'juego-bolas',
    nombre: 'Juego de Bolas',
    tipo: 'centro-visitantes',
    coordenadas: [28.1400, -17.2700],
    descripcion: 'Centro principal de visitantes del Parque Nacional de Garajonay.',
    tieneImagenes360: false
  },
  {
    id: 'roque-agando',
    nombre: 'Roque Agando',
    tipo: 'mirador',
    coordenadas: [28.1100, -17.2100],
    descripcion: 'Impresionante formación volcánica, uno de los símbolos de La Gomera.',
    tieneImagenes360: false
  },
  {
    id: 'mirador-laja',
    nombre: 'Mirador de la Laja',
    tipo: 'mirador',
    coordenadas: [28.0950, -17.1300],
    descripcion: 'Vistas panorámicas espectaculares, incluyendo el Teide en días claros.',
    tieneImagenes360: false
  },
  {
    id: 'san-sebastian',
    nombre: 'San Sebastián de la Gomera',
    tipo: 'pueblo',
    coordenadas: [28.0883, -17.1142],
    descripcion: 'Capital de la isla, donde Cristóbal Colón hizo escala antes de cruzar el Atlántico.',
    tieneImagenes360: false
  },
  {
    id: 'valle-gran-rey',
    nombre: 'Valle Gran Rey',
    tipo: 'pueblo',
    coordenadas: [28.0480, -17.2700],
    descripcion: 'Valle paradisíaco con playas de arena negra y terrazas de cultivo.',
    tieneImagenes360: false
  },
  {
    id: 'hermigua',
    nombre: 'Hermigua',
    tipo: 'pueblo',
    coordenadas: [28.1750, -17.2200],
    descripcion: 'Pueblo del norte con vistas al Teide y al Valle de Hermigua.',
    tieneImagenes360: false
  },
  {
    id: 'vallehermoso',
    nombre: 'Vallehermoso',
    tipo: 'pueblo',
    coordenadas: [28.1280, -17.3300],
    descripcion: 'Pueblo del noroeste con tradiciones ancestrales y gastronomía local.',
    tieneImagenes360: false
  },
  {
    id: 'agulo',
    nombre: 'Agulo',
    tipo: 'pueblo',
    coordenadas: [28.1600, -17.3100],
    descripcion: 'Pueblo del norte con vistas al Roque de Agando.',
    tieneImagenes360: false
  },
  {
    id: 'alajero',
    nombre: 'Alajeró',
    tipo: 'pueblo',
    coordenadas: [28.0350, -17.1850],
    descripcion: 'Pueblo del sur con acceso a rutas de montaña y la Ermita de Lourdes.',
    tieneImagenes360: false
  },
  {
    id: 'cedro',
    nombre: 'El Cedro',
    tipo: 'bosque',
    coordenadas: [28.0900, -17.2700],
    descripcion: 'Bosque de laurisilva centenaria con la Ermita de Lourdes.',
    tieneImagenes360: false
  },
  {
    id: 'chipude',
    nombre: 'Chipude / Fortaleza',
    tipo: 'mirador',
    coordenadas: [28.1050, -17.2300],
    descripcion: 'Fortaleza natural y mirador con vistas al sur de la isla.',
    tieneImagenes360: false
  }
];

// Configuración de accesibilidad
export const nivelesAccesibilidad = [
  {
    nivel: 'Accesible',
    descripcion: 'Rutas sin desnivel significativo, camino firme y ancho. Apto para sillas de ruedas y personas con movilidad reducida.',
    color: '#4ade80',
    icono: '♿'
  },
  {
    nivel: 'Moderado',
    descripcion: 'Rutas con desnivel moderado, pueden presentar algunos tramos irregulares. Requiere cierta condición física.',
    color: '#fbbf24',
    icono: '⚠️'
  },
  {
    nivel: 'No accesible',
    descripcion: 'Rutas con desnivel importante, terreno irregular o estrecho. No apto para sillas de ruedas.',
    color: '#f87171',
    icono: '🚫'
  }
];

// Estructura para las imágenes 360
export const imagenes360 = {
  'ruta14-laguna-garajonay': [
    {
      id: 'ruta14-p01',
      nombre: '📍 Inicio: Aparcamiento Laguna Grande',
      coordenadas: [28.1150, -17.2450],
      imagen: 'https://pannellum.org/images/cerro-toco-0.jpg',
      distanciaRecorrida: '0 m',
      tiempoEstimado: '0 min',
      descripcion: 'Punto de inicio en el área recreativa de Laguna Grande. El sendero comienza junto al aparcamiento, entre la laurisilva del Parque Nacional.'
    },
    {
      id: 'ruta14-p02',
      nombre: '📍 Sendero - Entrada al Fayal-Brezal',
      coordenadas: [28.1162, -17.2422],
      imagen: 'https://pannellum.org/images/alma.jpg',
      distanciaRecorrida: '150 m',
      tiempoEstimado: '3 min',
      descripcion: 'Comienza el camino de herradura ascendente. El fayal-brezal caracteriza esta zona sur del Parque, con fayas y brezos adaptados a condiciones más secas.'
    },
    {
      id: 'ruta14-p03',
      nombre: '📍 Camino de Herradura - Zona Empedrada',
      coordenadas: [28.1175, -17.2400],
      imagen: 'https://pannellum.org/images/lascar.jpg',
      distanciaRecorrida: '350 m',
      tiempoEstimado: '7 min',
      descripcion: 'Tramos del antiguo camino empedrado. Estos senderos fueron usados durante siglos por los habitantes de la isla para comunicarse.'
    },
    {
      id: 'ruta14-p04',
      nombre: '📍 Mirador Intermedio',
      coordenadas: [28.1190, -17.2375],
      imagen: 'https://pannellum.org/images/tocopilla.jpg',
      distanciaRecorrida: '600 m',
      tiempoEstimado: '12 min',
      descripcion: 'Primeras vistas abiertas. Desde aquí se pueden observar los diferentes estratos de vegetación de la ladera sur del Parque.'
    },
    {
      id: 'ruta14-p05',
      nombre: '📍 Ascenso - Taludes de Helechos',
      coordenadas: [28.1206, -17.2348],
      imagen: 'https://pannellum.org/images/cerro-toco-0.jpg',
      distanciaRecorrida: '900 m',
      tiempoEstimado: '18 min',
      descripcion: 'Taludes cubiertos de helechos que forman paredes verdes. Especialmente llamativos en épocas húmedas.'
    },
    {
      id: 'ruta14-p06',
      nombre: '📍 Cerca de Laguna Chica',
      coordenadas: [28.1233, -17.2305],
      imagen: 'https://pannellum.org/images/alma.jpg',
      distanciaRecorrida: '1.4 km',
      tiempoEstimado: '28 min',
      descripcion: 'Zona próxima a Laguna Chica. El bosque se hace más denso y la humedad aumenta conforme ascendemos.'
    },
    {
      id: 'ruta14-p07',
      nombre: '📍 Restos de Eucaliptos',
      coordenadas: [28.1258, -17.2265],
      imagen: 'https://pannellum.org/images/lascar.jpg',
      distanciaRecorrida: '2.0 km',
      tiempoEstimado: '40 min',
      descripcion: 'Grandes troncos de eucaliptos abatidos, vestigios de la restauración ecológica tras el incendio de 2012 para recuperar la vegetación original.'
    },
    {
      id: 'ruta14-p08',
      nombre: '📍 Límite del Parque - Viñedos',
      coordenadas: [28.1282, -17.2230],
      imagen: 'https://pannellum.org/images/tocopilla.jpg',
      distanciaRecorrida: '2.8 km',
      tiempoEstimado: '56 min',
      descripcion: 'Salimos del Parque Nacional. El contraste es evidente: del monte verde a los viñedos y terrenos secos de las medianías.'
    },
    {
      id: 'ruta14-p09',
      nombre: '📍 Pinar de Repoblación',
      coordenadas: [28.1310, -17.2200],
      imagen: 'https://pannellum.org/images/cerro-toco-0.jpg',
      distanciaRecorrida: '3.5 km',
      tiempoEstimado: '1h 10 min',
      descripcion: 'Entramos en una zona de pinar de repoblación y un pequeño bosquete de castaños, especie introducida tradicionalmente usada por las comunidades rurales.'
    },
    {
      id: 'ruta14-p10',
      nombre: '📍 Vistas a la Fortaleza de Cherelepi',
      coordenadas: [28.1348, -17.2170],
      imagen: 'https://pannellum.org/images/alma.jpg',
      distanciaRecorrida: '4.2 km',
      tiempoEstimado: '1h 24 min',
      descripcion: 'Magníficas vistas de la Fortaleza de Cherelepi, un domo volcánico cubierto de vegetación que domina el horizonte insular.'
    },
    {
      id: 'ruta14-p11',
      nombre: '📍 Último Tramo de Ascenso',
      coordenadas: [28.1390, -17.2145],
      imagen: 'https://pannellum.org/images/lascar.jpg',
      distanciaRecorrida: '5.0 km',
      tiempoEstimado: '1h 40 min',
      descripcion: 'Último esfuerzo antes de alcanzar la cumbre. La vegetación se vuelve más baja y el paisaje más abierto.'
    },
    {
      id: 'ruta14-p12',
      nombre: '🏔️ CIMA - Alto de Garajonay (1.487m)',
      coordenadas: [28.1487, -17.2125],
      imagen: 'https://pannellum.org/images/tocopilla.jpg',
      distanciaRecorrida: '5.5 km',
      tiempoEstimado: '1h 50 min',
      descripcion: '¡Punto más alto de La Gomera! En días despejados, vistas espectaculares a Tenerife con el Teide, El Hierro y La Palma. Lugar sagrado para los aborígenes gomeros.'
    },
    {
      id: 'ruta14-p13',
      nombre: '📍 Inicio del Descenso',
      coordenadas: [28.1510, -17.2172],
      imagen: 'https://pannellum.org/images/cerro-toco-0.jpg',
      distanciaRecorrida: '6.0 km',
      tiempoEstimado: '2h 00 min',
      descripcion: 'Comienza el descenso por pista forestal cementada hacia Contadero. Las vistas hacia el sur de la isla son impresionantes.'
    },
    {
      id: 'ruta14-p14',
      nombre: '📍 Pista Forestal - Zona de Brezales',
      coordenadas: [28.1540, -17.2262],
      imagen: 'https://pannellum.org/images/alma.jpg',
      distanciaRecorrida: '6.8 km',
      tiempoEstimado: '2h 16 min',
      descripcion: 'Descenso entre brezales de cumbre con suelo cubierto de musgo. En primavera, tapices de flores violetas de la pata de gallo alegran el camino.'
    },
    {
      id: 'ruta14-p15',
      nombre: '📍 Zona de Matorrales',
      coordenadas: [28.1530, -17.2448],
      imagen: 'https://pannellum.org/images/lascar.jpg',
      distanciaRecorrida: '7.8 km',
      tiempoEstimado: '2h 36 min',
      descripcion: 'Zonas de monte bajo con codesos y jaras de hermosas flores amarillas y blancas. Esta vegetación es característica de las laderas más secas.'
    },
    {
      id: 'ruta14-p16',
      nombre: '📍 Cerrajón y Algaritofe',
      coordenadas: [28.1470, -17.2490],
      imagen: 'https://pannellum.org/images/tocopilla.jpg',
      distanciaRecorrida: '8.5 km',
      tiempoEstimado: '2h 50 min',
      descripcion: 'En los bordes de las pistas crece el cerrajón con sus hojas aserradas y flores amarillas, y el algaritofe con sus tallos cuadrados y hojas olorosas.'
    },
    {
      id: 'ruta14-p17',
      nombre: '📍 Retorno a la Zona de Fayal-Brezal',
      coordenadas: [28.1380, -17.2508],
      imagen: 'https://pannellum.org/images/cerro-toco-0.jpg',
      distanciaRecorrida: '9.0 km',
      tiempoEstimado: '3h 00 min',
      descripcion: 'Volvemos a adentrarnos en el fayal-brezal. El sonido del bosque es diferente aquí, más húmedo y fresco tras haber pasado por las zonas abiertas.'
    },
    {
      id: 'ruta14-p18',
      nombre: '🏁 Llegada a Laguna Grande',
      coordenadas: [28.1150, -17.2450],
      imagen: 'https://pannellum.org/images/alma.jpg',
      distanciaRecorrida: '9.8 km',
      tiempoEstimado: '3h 16 min',
      descripcion: 'Fin de la ruta circular. De vuelta al aparcamiento de Laguna Grande. Si necesitas agua o un descanso, aquí hay un área recreativa con mesas y fuentes.'
    }
  ]
};
