# Sistema Solar - Aplicación Web

Esta es una aplicación web interactiva del Sistema Solar, desarrollada con **Next.js 15**, **Tailwind CSS** para los estilos, y **Zustand** para el manejo de planetas favoritos en el **localStorage**. La aplicación hace uso de una API propia para obtener los datos sobre los planetas y sus características.

## Características

- Visualización interactiva de los planetas del sistema solar.
- Información detallada sobre cada planeta (tamaño, distancia al sol, etc.).

## Requisitos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes programas:

- **Node.js** (v16 o superior)
- **npm** o **yarn**

## Instalación

1. Clona el repositorio a tu máquina local:

   ```bash
   git clone https://github.com/pietrotor/solar-system-app.git
   cd solar-system-app
   ```

2. Instala las dependencias
   ```bash
   npm install
   ```
3. usa npm para iniciar el proyecto
   ```bash
   npm run dev
   ```

## Uso

La aplicación te permite explorar el sistema solar y obtener información sobre los planetas. Los datos son obtenidos desde la API que has creado:

- **API base**: [https://api-solar-system.fly.dev/api](https://api-solar-system.fly.dev/api)

### Características de la UI:

- Puedes ver una lista de planetas en una vista general.
- Al hacer clic en un planeta, se muestran detalles adicionales sobre ese planeta.
- Los datos se cargan de forma dinámica desde la API, y los planetas favoritos se guarda en el **localStorage** gracias a **Zustand**.

## Tecnologías

- **Next.js 15**: Framework de React para renderizado del lado del servidor y generación estática, permitiendo un buen posicionamiento SEO y mejorando la eficiencia de uso de las request al servidor.
- **Tailwind CSS**: Framework de diseño de CSS para un desarrollo rápido y flexible.
- **Zustand**: Librería para el manejo del estado de forma sencilla y eficiente.
- **API propia**: [https://api-solar-system.fly.dev/api](https://api-solar-system.fly.dev/api) para proporcionar datos del sistema solar, con su [repositorio](https://github.com/pietrotor/api-solar-sytem).
