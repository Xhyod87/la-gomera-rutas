# 🥾 Rutas La Gomera Accesible

Mapa interactivo de las rutas de senderismo de La Gomera con visor de vistas 360° estilo Street View. Diseñado para que personas con discapacidades físicas puedan explorar las rutas de la isla antes de visitarlas, evaluando su accesibilidad y terreno.

---

## 📋 Características

- **Mapa interactivo** con la red completa de senderos de La Gomera (600+ km)
- **Street View 360°** - Recorre las rutas paso a paso como si estuvieses andando
- **Barra de progreso** - Muestra distancia recorrida y tiempo estimado en cada punto
- **PWA instalable** - Funciona como app nativa en móvil, tablet y escritorio
- **Accesibilidad** - Clasificación de rutas por nivel de accesibilidad para personas con movilidad reducida
- **Filtros** - Búsqueda por nombre y filtrado por dificultad (Fácil, Media, Alta)
- **Puntos de interés** - Miradores, pueblos, parques nacionales marcados en el mapa

---

## 🗺️ Rutas incluidas

### Grandes Rutas (GR)
| Ruta | Distancia | Dificultad | Descripción |
|------|-----------|------------|-------------|
| **GR-132** Costas de La Gomera | 115.2 km | Alta | Circular por toda la costa, 8 etapas |
| **GR-131** Cumbres de La Gomera | 37 km | Alta | Travesía centro, 3 etapas + ramal |

### Ruta de ejemplo con Street View 360°
| Ruta | Distancia | Puntos 360 | Descripción |
|------|-----------|------------|-------------|
| **Ruta 14** Laguna Grande - Alto de Garajonay | 9.8 km | 18 | Circular, ascenso al punto más alto (1.487m) |

### Pequeñas Rutas (PR-LG) - 25+ rutas
PR-LG 1, 5, 6, 7, 10, 12, 16, 17, Arure-Las Hayas, El Cedro, Riscos de La Mérica, y más.

---

## 🚀 Instalación

### Requisitos
- **Node.js** 18 o superior ([descargar aquí](https://nodejs.org))
- **npm** (viene incluido con Node.js)

### Instalación

```bash
# 1. Navega al directorio del proyecto
cd la-gomera-rutas

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Abre el navegador en la URL que aparece en la terminal (normalmente `http://localhost:5173`).

### Comandos disponibles

```bash
npm run dev       # Servidor de desarrollo (con hot-reload)
npm run build     # Compila para producción (carpeta dist/)
npm run preview   # Previsualiza la versión de producción
```

### Instalación como PWA
Una vez desplegada, puedes instalarla como app:
- **Escritorio**: Clic en el icono de instalación en la barra de URL
- **Móvil (Android)**: Menú del navegador > "Añadir a pantalla de inicio"
- **Móvil (iOS)**: Botón compartir > "Añadir a pantalla de inicio"

---

## 📷 Cómo añadir tus imágenes 360°

### Paso 1: Preparar las imágenes

1. Transfiere las fotos desde tu **Insta360** al ordenador
2. Asegúrate de que están en formato **equirectangular** (ratio 2:1). La Insta360 las genera así automáticamente.
3. Formato: `.jpg` es el recomendado
4. Nómbralas de forma descriptiva (ej: `laguna-grande-inicio.jpg`, `bosque-fayal.jpg`)

### Paso 2: Guardar las imágenes

Copia los archivos a esta carpeta del proyecto:
```
la-gomera-rutas/public/images/360/
```

### Paso 3: Obtener las coordenadas GPS

Necesitas las coordenadas exactas de cada punto donde tomaste la foto:

**Método A - Desde el teléfono:**
- Abre Google Maps en tu móvil
- Mantén pulsado en el punto exacto donde hiciste la foto
- Aparecerán las coordenadas (ej: `28.1150, -17.2450`)

**Método B - Desde el mapa del proyecto:**
1. Abre la app en el navegador
2. Haz clic en el lugar aproximado del sendero
3. Usa las coordenadas que ves en la barra de búsqueda

### Paso 4: Registrar los puntos en el código

Abre el archivo `src/data/rutas.js` y busca la sección `export const imagenes360`.

Cada ruta que tenga imágenes 360 tiene una entrada con un array de puntos. Añade un objeto por cada foto:

```javascript
export const imagenes360 = {
  'ruta14-laguna-garajonay': [
    {
      id: 'ruta14-p01',                    // ID único (cualquier nombre)
      nombre: '📍 Inicio: Aparcamiento',   // Título que aparece en el visor
      coordenadas: [28.1150, -17.2450],    // [latitud, longitud]
      imagen: '/images/360/laguna-grande-inicio.jpg',  // Ruta al archivo
      distanciaRecorrida: '0 m',           // Distancia desde el inicio
      tiempoEstimado: '0 min',             // Tiempo acumulado
      descripcion: 'Descripción de lo que se ve en este punto.'
    },
    {
      id: 'ruta14-p02',
      nombre: '📍 Camino por el fayal-brezal',
      coordenadas: [28.1162, -17.2422],
      imagen: '/images/360/fayal-brezal.jpg',
      distanciaRecorrida: '150 m',
      tiempoEstimado: '3 min',
      descripcion: 'Aquí se puede ver el sendero empedrado...'
    }
  ]
};
```

### Paso 5: Verificar

Guarda el archivo. La app se recargará automáticamente y los nuevos puntos aparecerán en el visor Street View al seleccionar esa ruta.

---

## 📁 Estructura del proyecto

```
la-gomera-rutas/
│
├── public/
│   ├── images/
│   │   ├── 360/              # ← AQUÍ van tus imágenes equirectangulares
│   │   └── leaflet/          # Iconos del mapa
│   └── favicon.svg           # Icono del navegador
│
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Barra superior con menú
│   │   ├── Sidebar.jsx       # Panel lateral con búsqueda y filtros
│   │   ├── RouteDetail.jsx   # Panel de detalle de la ruta seleccionada
│   │   ├── Viewer360.jsx     # Visor Street View 360° con barra de progreso
│   │   ├── Legend.jsx        # Leyenda del mapa
│   │   └── FloatingButtons.jsx # Botones flotantes
│   │
│   ├── data/
│   │   └── rutas.js          # TODOS los datos: rutas, puntos interés, imágenes 360
│   │
│   ├── App.jsx               # Componente principal (mapa + lógica)
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales
│
├── index.html                # HTML base
├── package.json              # Dependencias y scripts
└── vite.config.js            # Configuración de Vite + PWA
```

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| **React 18** | Framework de interfaz |
| **Vite** | Bundler y servidor de desarrollo |
| **Leaflet** | Mapa interactivo open-source |
| **React-Leaflet** | Componentes de React para Leaflet |
| **Pannellum** | Visor de panorámicas 360° (cargado desde CDN) |
| **Vite PWA** | Progressive Web App |
| **OpenStreetMap** | Capa base del mapa |

---

## ♿ Sistema de accesibilidad

Las rutas se clasifican automáticamente según su dificultad:

| Nivel | Color | Descripción |
|-------|-------|-------------|
| **♿ Accesible** | 🟢 Verde | Camino firme y ancho, sin desnivel. Apto para sillas de ruedas. |
| **⚠️ Moderado** | 🟡 Amarillo | Desnivel moderado, algunos tramos irregulares. Requiere condición física básica. |
| **🚫 No accesible** | 🔴 Rojo | Desnivel importante, terreno irregular o estrecho. No apto para movilidad reducida. |

---

## 📊 Datos de cada ruta

Cada ruta en `src/data/rutas.js` incluye:

```javascript
{
  id: 'ruta14-laguna-garajonay',   // Identificador único
  nombre: 'Ruta 14: ...',          // Nombre visible
  tipo: 'PR',                      // Tipo: GR (Gran Recorrido) o PR (Pequeño Recorrido)
  dificultad: 'Media',             // Fácil, Media, Alta
  distancia: 9.8,                  // Kilómetros
  duracion: '5h',                  // Tiempo estimado total
  desnivel: 311,                   // Desnivel acumulado en metros
  descripcion: '...',              // Descripción de la ruta
  inicio: 'Laguna Grande',         // Punto de inicio
  fin: 'Laguna Grande',            // Punto de fin
  coordenadas: [[lat, lon], ...],  // Array de coordenadas GPS del trazado
  tieneImagenes360: true,          // Si tiene imágenes 360
  esRutaEjemplo360: true           // Si es la ruta demo con street view
}
```

---

## 🔄 Flujo de uso

1. **El usuario abre la app** → Ve el mapa de La Gomera con todas las rutas dibujadas
2. **Navega por el sidebar** → Filtra por dificultad o busca por nombre
3. **Selecciona una ruta** → El mapa hace zoom y dibuja el trazado completo resaltado
4. **Ve los detalles** → Distancia, duración, desnivel, accesibilidad, descripción
5. **Abre Street View** → Recorre la ruta punto a punto con imágenes 360°, viendo distancia y tiempo

---

## 📝 Fuentes de información

- [Turismo La Gomera](https://lagomera.travel/)
- [Parque Nacional de Garajonay](https://www.miteco.gob.es/es/parques-nacionales/red-parques-nacionales/parques-nacionales/garajonay/)
- [Senderos de Canarias](https://lagomera.senderosdecanarias.com/)
- [Forwalk - La Gomera](https://lagomera.forwalk.org/)
- [Hola Islas Canarias](https://www.holaislascanarias.com/senderos/la-gomera/)

---

## 📄 Licencia

Proyecto personal. Las imágenes de ejemplo 360° son del proyecto [Pannellum](https://pannellum.org) (CC-BY).
