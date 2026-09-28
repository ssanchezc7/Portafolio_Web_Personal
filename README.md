# Portafolio Web — Sergio Jesús Sánchez Castillo

Portafolio personal e interactivo desarrollado con HTML5, CSS3 y JavaScript puro,
como parte de la tarea *Portafolio Web Profesional Interactivo* (UNEMI).



## Tecnologías utilizadas

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `footer`)
- **CSS3** con Custom Properties, Flexbox y CSS Grid
- **JavaScript** (vanilla, sin frameworks)
- Tipografías: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) y [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) vía Google Fonts

## Estructura del proyecto

```
portfolio/
├── index.html          # Estructura semántica de todo el sitio (secciones ancla)
├── css/
│   └── styles.css      # Design tokens (:root), layout y responsive
├── js/
│   └── script.js       # Las 5 funcionalidades interactivas
├── assets/
│   └── avatar.png      # Fotografía de perfil
└── README.md
```

## Secciones incluidas

- Inicio / Presentación
- Sobre mí
- Skills (por categorías: Frontend, Backend, Bases de datos, Herramientas)
- Proyectos destacados (con filtro por tecnología)
- Design System / Componentes
- Contacto (formulario con validación)

## Funcionalidades JavaScript

1. **Menú responsive** — abre/cierra la navegación en móvil.
2. **Tema claro/oscuro con persistencia** — usa `localStorage` para recordar la preferencia del visitante.
3. **Filtro de proyectos por tecnología** — muestra/oculta cards según el botón activo.
4. **Botón "Volver al inicio"** — aparece tras hacer scroll y sube suavemente.
5. **Validación del formulario de contacto** — valida nombre, correo y mensaje antes de "enviar".

## Cómo verlo localmente

No requiere instalación ni dependencias. Basta con abrir `index.html` en el
navegador, o servir la carpeta con cualquier servidor estático, por ejemplo:

```bash
# Con Python
python -m http.server 8000

# Con la extensión Live Server de VS Code
# clic derecho sobre index.html → "Open with Live Server"
```

## Publicación en GitHub Pages

1. Sube el contenido de esta carpeta a un repositorio público en GitHub.
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda y espera unos minutos a que se genere la URL pública.
5. Antes de entregar: abre esa URL en una ventana de incógnito y revisa
   navegación, funcionalidades JS, versión móvil y la consola del navegador.

## Capturas del resultado

<!-- EDITAR: agrega aquí capturas de pantalla del sitio ya publicado -->

## Autor

**Sergio Jesús Sánchez Castillo**
Estudiante de Ingeniería en Software — 8vo semestre
GitHub: [github.com/ssanchezc7](https://github.com/ssanchezc7)
