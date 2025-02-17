# Sistema Solar - Aplicación Web

Esta es una aplicación web interactiva del Sistema Solar, desarrollada con **Next.js 15**, **Tailwind CSS** para los estilos, y **Zustand** para el manejo del estado en el **localStorage**. La aplicación hace uso de una API propia para obtener los datos sobre los planetas y sus características.

## Características

- Visualización interactiva de los planetas del sistema solar.
- Información detallada sobre cada planeta (tamaño, distancia al sol, etc.).
- Uso de Zustand para mantener el estado de los datos y almacenarlos en el **localStorage** para persistencia.
- Estilos modernos y responsivos con **Tailwind CSS**.

## Requisitos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes programas:

- **Node.js** (v16 o superior)
- **npm** o **yarn**

## Instalación

1. Clona el repositorio a tu máquina local:

   ```bash
   git clone https://github.com/tu_usuario/solar-system-app.git
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

Los datos se almacenan localmente para mejorar la experiencia del usuario.

### Características de la UI:

- Puedes ver una lista de planetas en una vista general.
- Al hacer clic en un planeta, se muestran detalles adicionales sobre ese planeta.
- Los datos se cargan de forma dinámica desde la API, y el estado se guarda en el **localStorage** gracias a **Zustand**.

## Tecnologías

- **Next.js 15**: Framework de React para renderizado del lado del servidor y generación estática.
- **Tailwind CSS**: Framework de diseño de CSS para un desarrollo rápido y flexible.
- **Zustand**: Librería para el manejo del estado de forma sencilla y eficiente.
- **API propia**: [https://api-solar-system.fly.dev/api](https://api-solar-system.fly.dev/api) para proporcionar datos del sistema solar.
