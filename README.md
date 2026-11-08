# ASTROEQUE
## Plataforma de intercambio de productos

**Proyecto formativo – SENA ADSO**

### 1. Descripción del proyecto

Astroeque es una plataforma web orientada al intercambio de productos entre usuarios, promoviendo la reutilización de artículos y el aprovechamiento de recursos mediante un sistema de trueque.

El proyecto se desarrolla como parte del programa de formación en Análisis y Desarrollo de Software (ADSO) del Servicio Nacional de Aprendizaje (SENA).

### 2. Objetivo

Desarrollar una plataforma web que facilite la publicación, consulta y gestión de productos destinados al intercambio, mediante una interfaz organizada y accesible.

### 3. Funcionalidades del frontend

- Visualización del catálogo de productos.
- Publicación de productos para intercambio.
- Consulta de información detallada de productos.
- Edición y eliminación de publicaciones.
- Interfaces para propuestas de intercambio.
- Visualización de eventos de trueque.
- Formularios y navegación entre secciones.

### 4. Tecnologías utilizadas

- **React:** desarrollo de interfaces mediante componentes.
- **JavaScript:** lógica de funcionamiento del frontend.
- **Vite:** entorno de desarrollo y compilación.
- **CSS:** estilos y diseño visual.
- **Git:** control de versiones.
- **GitHub:** alojamiento y gestión del repositorio.

### 5. Requisitos de instalación

Para ejecutar el frontend se requiere:

- Node.js compatible con Vite 8.
- npm.
- Git.
- Un navegador web actualizado.
- Un editor de código, preferiblemente Visual Studio Code.

### 6. Instalación y ejecución

**Paso 1. Clonar el repositorio**

```bash
git clone https://github.com/jhon753sp/astroeque-frontend.git
```

**Paso 2. Ingresar al proyecto**

```bash
cd astroeque-frontend
```

**Paso 3. Instalar dependencias**

```bash
npm install
```

**Paso 4. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

Abrir en el navegador la dirección local indicada por Vite.

### 7. Comandos disponibles

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

### 8. Organización del proyecto

- `public/`: recursos públicos.
- `src/assets/`: recursos gráficos.
- `src/components/`: componentes de la interfaz.
- `src/data/`: datos utilizados por el frontend.
- `src/App.jsx`: componente principal.
- `src/App.css`: estilos de la aplicación.
- `src/index.css`: estilos generales.
- `package.json`: dependencias y comandos.
- `.gitignore`: exclusiones del control de versiones.

### 9. Estrategia de control de versiones

El proyecto utiliza Git y GitHub para registrar los cambios realizados durante el desarrollo.

**Ramas utilizadas:**

- `main`: rama principal del proyecto.
- `develop`: rama de integración de cambios.
- `feature/publicar-producto`: rama utilizada para documentar el componente de publicación de productos.

**Procedimiento aplicado:**

1. Creación de una rama de funcionalidad.
2. Modificación y documentación del componente.
3. Registro de los cambios mediante commit.
4. Publicación de la rama en GitHub.
5. Creación de un Pull Request.
6. Revisión y fusión de los cambios en `develop`.
7. Sincronización del repositorio local.
8. Eliminación de la rama de funcionalidad una vez integrada.

### 10. Estado del proyecto

Frontend en desarrollo y evolución continua como parte de las actividades académicas del programa ADSO.

### 11. Información académica

**Institución:** Servicio Nacional de Aprendizaje – SENA

**Programa:** Tecnología en Análisis y Desarrollo de Software (ADSO)

**Aprendiz:** John Alexander Soracipa Patarroyo

**Proyecto:** Astroeque

**Evidencia:** GA7-220501096-AA1-EV02

**Actividad:** Control de versiones y gestión del repositorio

**Año:** 2026
