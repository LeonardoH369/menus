# Menus · Actividad 11

**Cuaderno de diseño** es un proyecto de Leonardo Hinojosa Castro con tres secciones. Usa Next.js y TypeScript para la interfaz, Node.js con Express para la API y MySQL para el catálogo.

| Sección | Ruta | Contenido |
| --- | --- | --- |
| Inicio | `/` | Presentación del cuaderno y enlace al catálogo. |
| Proyectos | `/proyectos` | Ejercicios de identidad visual, tipografía y composición consultados en MySQL. |
| Contacto | `/contacto` | Canal de comentarios por medio de GitHub Issues. |

`app/layout.tsx` es la vista compartida. Define el menú y el pie con el autor, y recibe el contenido de cada ruta en `children`. `app/nav.tsx` usa `usePathname()` para marcar el enlace actual con `aria-current="page"`. Esta implementación adapta el ejercicio de plantillas a Next.js. La rúbrica original solicita Laravel Blade.

## Ejecución local

1. Requiere Node.js 24 y MySQL 8.4. Clona el repositorio y ejecuta `npm ci`.
2. Copia `.env.example` a `.env` y asigna contraseñas a `DB_PASSWORD` y `MYSQL_ROOT_PASSWORD`.
3. Con Docker Compose, ejecuta `docker compose up -d db`. El contenedor importa `db/init.sql` al inicializar un volumen nuevo. Si ya tienes MySQL, crea el esquema y el usuario configurados en `.env`, importa `db/init.sql` dentro del esquema y concede al usuario de la API permiso de lectura en `projects`.
4. En una terminal ejecuta `npm run api`. En otra, ejecuta `npm run dev` y abre [http://127.0.0.1:3000](http://127.0.0.1:3000).
5. Comprueba `GET /api/health` en el puerto de Express. `GET /api/projects` devuelve los registros del catálogo que muestra la interfaz. Ejecuta `npm run typecheck` y `npm run build` para validar el frontend.

Repositorio: [LeonardoH369/menus](https://github.com/LeonardoH369/menus).
