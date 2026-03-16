# Portfolio — Jose Montoro (React + Vite)

Migración completa del portfolio de HTML/CSS/JS a React con Vite.

## Estructura del proyecto

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx             ← Punto de entrada
    ├── App.jsx              ← Componente raíz
    ├── index.css            ← Estilos globales
    ├── assets/              ← ⚠️ Coloca aquí todas tus imágenes
    │   ├── foto.png
    │   ├── pro1.png
    │   ├── pro2.png
    │   ├── angular.png
    │   ├── github.png
    │   ├── HTML.png
    │   ├── CSS.png
    │   ├── js.png
    │   ├── nodo js.png
    │   └── spring-boot.svg
    └── components/
        ├── MatrixBackground.jsx
        ├── Header.jsx
        ├── Hero.jsx
        ├── Sobre.jsx
        ├── Proyectos.jsx
        ├── Habilidades.jsx
        ├── Contacto.jsx
        ├── Footer.jsx
        └── ScrollToTop.jsx
```

## Instalación y uso

### 1. Instalar dependencias
```bash
npm install
```

### 2. Copiar imágenes
Copia toda tu carpeta `img/` original dentro de `src/assets/`:
```
src/assets/foto.png
src/assets/pro1.png
src/assets/pro2.png
src/assets/angular.png
... etc
```

### 3. Arrancar en desarrollo
```bash
npm run dev
```
Abre http://localhost:5173

### 4. Build de producción
```bash
npm run build
```
Los archivos finales quedan en `/dist` listos para subir a Vercel, Netlify, etc.

## Despliegue en Vercel (recomendado)
1. Sube el proyecto a GitHub
2. Entra en vercel.com → New Project → importa el repo
3. Framework: Vite → Deploy ✓

## Cambios respecto al original
- Cada sección es un componente React independiente
- El formulario de contacto usa estado controlado (`useState`)
- El slider infinito usa `useRef` + `requestAnimationFrame`
- El canvas Matrix usa `useEffect` con cleanup correcto
- El header sticky detecta scroll con `useEffect`
- `ScrollToTop` reemplaza `subir.js`
- Animaciones fade-in con `IntersectionObserver` en cada sección
- Las imágenes se importan directamente (Vite las optimiza automáticamente)
