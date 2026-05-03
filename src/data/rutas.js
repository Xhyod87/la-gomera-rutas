// Metadata de rutas (coordenadas importadas desde src/routes/)

import { coordenadas as gr132Coords } from '../routes/gr132/coords.js';
import { coordenadas as gr131Coords } from '../routes/gr131/coords.js';
import { coordenadas as prlg7Coords } from '../routes/prlg7/coords.js';
import { coordenadas as prlg10Coords } from '../routes/prlg10/coords.js';
import { coordenadas as prlg12Coords } from '../routes/prlg12/coords.js';
import { coordenadas as prlg16Coords } from '../routes/prlg16/coords.js';
import { coordenadas as prlg17Coords } from '../routes/prlg17/coords.js';
import { coordenadas as ruta14Coords } from '../routes/ruta14/coords.js';
import { coordenadas as arureLashayasCoords } from '../routes/arure-lashayas/coords.js';
import { coordenadas as cedroLourdesCoords } from '../routes/cedro-lourdes/coords.js';
import { coordenadas as mericaCoords } from '../routes/merica/coords.js';
import { coordenadas as sansebastianCabritoCoords } from '../routes/sansebastian-cabrito/coords.js';
import { coordenadas as sansebastianHermiguaCoords } from '../routes/sansebastian-hermigua/coords.js';
import { coordenadas as valleGranReyCaleraCoords } from '../routes/valle-gran-rey-calera/coords.js';
import { coordenadas as reventonCedroCoords } from '../routes/reventon-cedro/coords.js';
import { coordenadas as vizcainaCercadoCoords } from '../routes/vizcaina-cercado/coords.js';
import { coordenadas as alajeroIgualeroCoords } from '../routes/alajero-igualero/coords.js';
import { coordenadas as contaderoCedroCoords } from '../routes/contadero-cedro/coords.js';
import { coordenadas as sansebastianPlayasantiagoCoords } from '../routes/sansebastian-playasantiago/coords.js';
import { coordenadas as chipudeVallehermosoPlayaCoords } from '../routes/chipude-vallehermoso-playa/coords.js';
import { coordenadas as aguloJuegobolasCoords } from '../routes/agulo-juegobolas/coords.js';
import { coordenadas as hermiguaMoralitoCoords } from '../routes/hermigua-moralito/coords.js';
import { coordenadas as lagunaGrande1Coords } from '../routes/laguna-grande-1/coords.js';
import { coordenadas as mesetaHermiguaCoords } from '../routes/meseta-hermigua/coords.js';
import { coordenadas as chipudeGarajonayCoords } from '../routes/chipude-garajonay/coords.js';
import { coordenadas as degolladaChipudeCoords } from '../routes/degollada-chipude/coords.js';
import { coordenadas as barranquillosCoords } from '../routes/barranquillos/coords.js';
import { coordenadas as ermitaLourdesCoords } from '../routes/ermita-lourdes/coords.js';

export const rutas = [
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
    tieneImagenes360: false
  },
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
    coordenadas: gr131Coords,
    etapas: [
      { nombre: 'San Sebastián - Degollada de Peraza', distancia: 10.3 },
      { nombre: 'Degollada de Peraza - Chipude', distancia: 17.3 },
      { nombre: 'Chipude - Vallehermoso', distancia: 16.3 },
      { nombre: 'Ext. Vallehermoso - Playa', distancia: 3.7 }
    ],
    tieneImagenes360: false
  },
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
    coordenadas: prlg7Coords,
    tieneImagenes360: false
  },
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
    coordenadas: prlg10Coords,
    tieneImagenes360: false
  },
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
    coordenadas: prlg12Coords,
    tieneImagenes360: false
  },
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
    coordenadas: prlg16Coords,
    tieneImagenes360: false
  },
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
    coordenadas: prlg17Coords,
    tieneImagenes360: false
  },
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
    coordenadas: ruta14Coords,
    tieneImagenes360: true
  },
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
    coordenadas: arureLashayasCoords,
    tieneImagenes360: false
  },
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
    coordenadas: cedroLourdesCoords,
    tieneImagenes360: false
  },
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
    coordenadas: mericaCoords,
    tieneImagenes360: false
  },
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
    coordenadas: sansebastianCabritoCoords,
    tieneImagenes360: false
  },
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
    coordenadas: sansebastianHermiguaCoords,
    tieneImagenes360: false
  },
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
    coordenadas: valleGranReyCaleraCoords,
    tieneImagenes360: false
  },
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
    coordenadas: reventonCedroCoords,
    tieneImagenes360: false
  },
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
    coordenadas: vizcainaCercadoCoords,
    tieneImagenes360: false
  },
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
    coordenadas: alajeroIgualeroCoords,
    tieneImagenes360: false
  },
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
    coordenadas: contaderoCedroCoords,
    tieneImagenes360: false
  },
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
    coordenadas: sansebastianPlayasantiagoCoords,
    tieneImagenes360: false
  },
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
    coordenadas: chipudeVallehermosoPlayaCoords,
    tieneImagenes360: false
  },
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
    coordenadas: aguloJuegobolasCoords,
    tieneImagenes360: false
  },
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
    coordenadas: hermiguaMoralitoCoords,
    tieneImagenes360: false
  },
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
    coordenadas: lagunaGrande1Coords,
    tieneImagenes360: false
  },
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
    coordenadas: mesetaHermiguaCoords,
    tieneImagenes360: false
  },
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
    coordenadas: chipudeGarajonayCoords,
    tieneImagenes360: false
  },
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
    coordenadas: degolladaChipudeCoords,
    tieneImagenes360: false
  },
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
    coordenadas: barranquillosCoords,
    tieneImagenes360: false
  },
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
    coordenadas: ermitaLourdesCoords,
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

// Export imagenes360 from ruta14 folder
export { imagenes360 } from '../routes/ruta14/imagenes360.js';
