# Instrucciones de Edición - Skatma Landing Page

Esta landing page ha sido construida con **React**, **Tailwind CSS** y **Framer Motion**. Sigue estas instrucciones para personalizar el contenido.

## 1. Reemplazar el Logo (Texto por Imagen PNG)
Si tienes un logo oficial en formato PNG (sin fondo), puedes reemplazar el texto "SKATMA" gigante en la pantalla de inicio:

1. Sube tu archivo `logo.png` a la carpeta `public/` (o asegúrate de tener la URL).
2. Abre el archivo `src/App.tsx`.
3. Busca las siguientes líneas al principio del componente `App`:
   ```javascript
   const SHOW_LOGO_IMAGE = false; // Cambia esto a true
   const LOGO_URL = "/logo.png";  // Asegúrate de que la ruta sea correcta
   ```
4. Cambia `SHOW_LOGO_IMAGE` a `true`.

## 2. Editar Imágenes del Carrusel
El carrusel moderno utiliza un array de URLs. Para usar tus propias fotos:

1. Busca la constante `BAND_IMAGES` en `src/App.tsx`.
2. Reemplaza las URLs de ejemplo por las rutas de tus imágenes:
   ```javascript
   const BAND_IMAGES = [
     "/fotos/banda-1.jpg",
     "/fotos/concierto.jpg",
     // ... añade tantas como quieras
   ];
   ```

## 3. Integrar Spotify y YouTube
He dejado contenedores preparados para los widgets oficiales:

- **Spotify:** Ve a tu álbum/canción en Spotify, haz clic en "Compartir" -> "Insertar" y copia el código. En `App.tsx`, busca el comentario `Widget de Spotify aquí` y reemplaza el `<p>` por el `<iframe>` que te dio Spotify.
- **YouTube:** Haz lo mismo con el video de YouTube ("Compartir" -> "Insertar"). Busca `Video de YouTube aquí` en `App.tsx`.

## 4. Live Sessions (Shows en vivo)
He añadido una sección dedicada a tus presentaciones en vivo o sesiones de estudio:

1. Busca la constante `LIVE_SESSIONS` en `src/App.tsx`.
2. Edita los objetos para añadir tus videos:
   ```javascript
   const LIVE_SESSIONS = [
     { 
       id: "1", 
       title: "Nombre del Show", 
       thumbnail: "/ruta/a/miniatura.jpg", 
       url: "https://youtube.com/watch?v=..." 
     },
     // ...
   ];
   ```

## 5. Configurar WhatsApp
Para que los mensajes lleguen a tu número:

1. Busca `const whatsappNumber = "1234567890";` en `src/App.tsx`.
2. Cambia el número por el tuyo (incluyendo el código de país, sin el signo +). Ejemplo: `5215512345678`.

## 5. Estilo y Colores
El estilo "Gótico Moderno" se controla principalmente desde `src/index.css` y las clases de Tailwind en `App.tsx`.
- Los colores principales están definidos en `@theme` dentro de `src/index.css` como `--color-ska-yellow`, `--color-ska-black`, etc.
- La tipografía gótica es **Metal Mania** y la moderna es **Syne**.

---
*Skatma - Ska Core • Oscuridad • Resistencia*
