# MapTab - Extensión de Chrome Nueva Pestaña

[English](README.md) | [中文](README.zh.md) | [日本語](README.ja.md) | [Français](README.fr.md) | [Español](README.es.md) | [Русский](README.ru.md)

Una extensión moderna de Chrome que transforma tu página de nueva pestaña en un centro de productividad integral con motores de búsqueda integrados, modelos de IA, marcadores e historial del navegador. Construida con Vue.js y tecnologías web modernas.

## 🚀 Características

### 🔍 **Búsqueda Multiplataforma**
- **Motores de búsqueda**: Google, Kagi, Perplexity, V2EX, 小红书 (Xiaohongshu), 淘宝 (Taobao), 知乎 (Zhihu)
- **Modelos de IA**: Acceso a Claude Sonnet 4, o3, GPT-4.1, GPT-4.1-mini a través de Poe
- **Entrada inteligente**: Área de texto multilínea expandible para consultas y prompts largos
- **Acceso rápido**: Búsqueda de un clic en múltiples plataformas

### 📚 **Gestión Inteligente de Marcadores**
- **Visualización jerárquica**: Estructura de carpetas expandible que coincide con la organización de Chrome
- **Indicadores visuales**: Iconos de carpetas, iconos de documentos y flechas de expandir/contraer
- **Clic para expandir**: Carpetas interactivas que muestran/ocultan su contenido
- **Acceso directo**: Haz clic en cualquier marcador para abrirlo en una nueva pestaña

### 📖 **Integración del Historial del Navegador**
- **Historial reciente**: Muestra tu historial de navegación reciente
- **Contadores de visitas**: Muestra cuántas veces has visitado cada página
- **Marcas de tiempo inteligentes**: Visualización de tiempo relativo (ej: "hace 2h", "hace 3d")
- **Acceso rápido**: Haz clic en cualquier elemento del historial para revisitar

### 🎨 **Interfaz Moderna**
- **Diseño de dos pantallas**: Contenido principal + segunda pantalla en blanco para funciones futuras
- **Morfismo de vidrio**: Hermoso diseño semitransparente con efecto de desenfoque de fondo
- **Diseño responsivo**: Se adapta a diferentes tamaños de pantalla
- **Animaciones suaves**: Efectos de hover y transiciones

### ⚡ **Rendimiento y UX**
- **Carga rápida**: Optimizado para inicio rápido
- **Paneles desplazables**: Desplazamiento independiente para marcadores e historial
- **Atajos de teclado**: Enter para buscar, Shift+Enter para nueva línea
- **Redimensionamiento automático**: Área de texto que crece dinámicamente con el contenido

## 🛠️ Stack Tecnológico

- **Frontend**: Vue.js 2.5.2, Element UI 2.0.1
- **Gestión de estado**: Vuex 3.0.0
- **Enrutamiento**: Vue Router 3.0.1
- **Estilos**: SCSS con características CSS modernas
- **Herramienta de build**: Webpack 3.8.1
- **Gestor de paquetes**: Yarn
- **APIs de Chrome**: Marcadores, Historial, Pestañas

## 📁 Estructura del Proyecto

```
maptab/
├── core/                    # Archivos de configuración de Webpack
│   ├── webpack.base.js     # Configuración base de webpack
│   ├── webpack.dev.js      # Configuración de desarrollo
│   └── webpack.prod.js     # Configuración de producción
├── src/                    # Código fuente
│   ├── backend/           # Scripts de fondo
│   ├── content/           # Scripts de contenido (se ejecutan en páginas web)
│   ├── devtools/          # Integración de Chrome DevTools
│   ├── ext/               # Utilidades y scripts compartidos
│   ├── options/           # Página de opciones de la extensión
│   ├── popup/             # Interfaz popup de la extensión
│   ├── tab/               # Página de nueva pestaña (aplicación principal)
│   └── manifest.js        # Manifiesto de la extensión de Chrome
├── static/                # Assets estáticos
│   └── icons/             # Iconos de la extensión
└── package.json           # Dependencias y scripts
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (v16 o superior)
- Gestor de paquetes Yarn
- Navegador Google Chrome

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <your-repo-url>
   cd maptab
   ```

2. **Instalar dependencias**
   ```bash
   yarn
   ```

3. **Construir la extensión**
   ```bash
   yarn build
   ```

4. **Cargar en Chrome**
   - Abrir Chrome e ir a `chrome://extensions/`
   - Habilitar "Modo desarrollador" (interruptor en la esquina superior derecha)
   - Hacer clic en "Cargar extensión descomprimida"
   - Seleccionar la carpeta `core/build` de tu proyecto

## 🎯 Cómo Usar

### **Búsqueda y Prompts de IA**
1. **Escribe tu consulta** en el cuadro de búsqueda (admite texto multilínea)
2. **Elige tu plataforma**:
   - **Motores de búsqueda**: Haz clic en Google, Kagi, Perplexity, etc.
   - **Modelos de IA**: Haz clic en Claude, o3, GPT-4.1, etc.
3. **Los resultados se abren automáticamente en nuevas pestañas**

### **Marcadores**
1. **Navega por tus carpetas** - haz clic para expandir/contraer
2. **Ve todos tus marcadores** en su estructura organizada
3. **Haz clic en cualquier marcador** para abrirlo en una nueva pestaña

### **Historial**
1. **Ve las páginas recientes** que has visitado
2. **Ve los contadores de visitas** y marcas de tiempo
3. **Haz clic en cualquier elemento** para revisitar la página

## 🛠️ Desarrollo

### Scripts Disponibles

- `yarn dev` - Build en modo desarrollo con recarga en caliente
- `yarn build` - Build de producción
- `yarn lint` - Ejecutar ESLint para verificar la calidad del código

### Flujo de Desarrollo

1. **Iniciar modo desarrollo**
   ```bash
   yarn dev
   ```

2. **Hacer cambios** a los componentes Vue en el directorio `src/`

3. **Recargar la extensión** en la página de extensiones de Chrome para ver los cambios

4. **Construir para producción** cuando esté listo
   ```bash
   yarn build
   ```

## 📋 Componentes de la Extensión

### 🎯 Nueva Pestaña (`src/tab/`)
La interfaz principal que aparece cuando abres una nueva pestaña. Características:
- **Sección de búsqueda**: Búsqueda multimotor con integración de modelos de IA
- **Panel de marcadores**: Visualización jerárquica y expandible de marcadores
- **Panel de historial**: Historial de navegación reciente con contadores de visitas
- **Diseño de dos pantallas**: Contenido principal + segunda pantalla en blanco

### 🔧 Página de Opciones (`src/options/`)
Permite a los usuarios personalizar el comportamiento de la extensión:
- Preferencias de motores de búsqueda
- Organización de marcadores
- Configuración de tema
- Opciones de privacidad

### 🎪 Popup (`src/popup/`)
Interfaz de acceso rápido al hacer clic en el icono de la extensión:
- Búsqueda rápida
- Marcadores recientes
- Estado de la extensión

### 🔍 DevTools (`src/devtools/`)
Integración de herramientas de desarrollo para depuración y desarrollo.

### 📄 Scripts de Contenido (`src/content/`)
Scripts que se ejecutan en el contexto de las páginas web para funcionalidades mejoradas.

### 🔄 Fondo (`src/backend/`)
Procesos de fondo que manejan:
- Sincronización de datos
- Notificaciones
- Interacciones de API
- Gestión de estado

## 🎨 Personalización

### Agregar Nuevos Motores de Búsqueda

Edita los métodos de búsqueda en `src/tab/root.vue`:

```javascript
// Ejemplo: Agregar un nuevo motor de búsqueda
searchNewEngine () {
  if (this.searchQuery.trim()) {
    chrome.tabs.create({ url: `https://newengine.com/search?q=${encodeURIComponent(this.searchQuery)}` })
  }
}
```

### Agregar Nuevos Modelos de IA

Agrega nuevos botones y métodos de modelos de IA:

```javascript
// Ejemplo: Agregar un nuevo modelo de IA
searchNewAI () {
  if (this.searchQuery.trim()) {
    chrome.tabs.create({ url: `https://poe.com/NewModel?prompt=${encodeURIComponent(this.searchQuery)}` })
  }
}
```

### Estilos

El proyecto usa SCSS para los estilos. Los archivos de estilo principales se encuentran en cada directorio de componente. Los estilos globales se pueden agregar a archivos de estilo compartidos.

## 📦 Construcción para Distribución

1. **Construir la extensión**
   ```bash
   yarn build
   ```

2. **La extensión construida** estará en el directorio `core/build/`

3. **Para Chrome Web Store**:
   - Comprimir el contenido de `core/build/`
   - Subir al Chrome Web Store

## 🔧 Solución de Problemas

### Problemas Comunes

**La construcción falla con error de node-sass:**
- Este proyecto usa `sass` moderno en lugar del `node-sass` obsoleto
- Si encuentras problemas, ejecuta `yarn` para reinstalar las dependencias

**La extensión no se carga:**
- Asegúrate de cargar desde el directorio `core/build/`
- Verifica los mensajes de error en la página de extensiones de Chrome
- Verifica que se hayan otorgado todos los permisos (marcadores, historial, pestañas)

**Los cambios no aparecen:**
- Recarga la extensión en la página de extensiones de Chrome
- Limpia el caché del navegador si es necesario
- Verifica los errores en la consola del navegador

**La búsqueda no funciona:**
- Asegúrate de que la extensión tenga los permisos necesarios
- Verifica que las URLs de búsqueda sean correctas
- Verifica que las APIs de Chrome sean accesibles

## 🤝 Contribución

1. Fork el repositorio
2. Crear una rama de función (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🙏 Agradecimientos

- **Vue.js** para el framework reactivo
- **Element UI** para la biblioteca de componentes
- **Chrome Extensions API** para la integración del navegador
- **Poe** para el acceso a modelos de IA 