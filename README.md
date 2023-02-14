<p align="center">
  <a href="https://www.codescouts.academy/" target="_blank">
    <img alt="CodeScouts" src="https://www.codescouts.academy/images/logo-all-yellow.png" />
  </a>
</p>

<h1 align="center">
  🏗️ Curso de arquitectura FrontEnd 🏭
</h1>

<p align="center">
  Material práctico y ejercitación para el <strong>Curso de arquitectura frontend</strong>
  <br />
  <br />
  <a href="https://github.com/codescouts-academy/curso-arquitectura-frontend/stargazers">Stars are welcome 😊</a>
  <a href="https://github.com/codescouts-academy/curso-arquitectura-frontend/issues">Report an error 🐛</a>
</p>

## 🚀 Environment Setup

### First things First

Para poder ejecutar esta aplicación primero es necesario que agregues en tus host un alias, esto permitirá simular que tenemos alojado en un mismo sitio nuestra aplicación pero con diferentes puntos de entrada

Agregar esto al final de tu archivo hosts

    127.0.0.1 server1
    127.0.0.1 server2

-   Para Windows


    C:\Windows\System32\drivers\etc\hosts

-   En linux


    sudo nano /etc/hosts

### 🧑‍🚀 Getting started

Install dependencies

```sh
npm install
```

### 🚀 Running app

```sh
npm run start
```

## 👩‍💻 Project explanation

### 📁 Folder structure

```

    📁 public/
    ├── favicon.png --> CodeScouts's logo
    ├── index.html --> Main html file
    │
    📁 src/
    ├── 📁 application/ Our use cases
    │   ├── get-initial-value-use-case.ts --> Here we model the use cases
    │   ├── increment-use-case.ts
    │   ├── decrement-use-case.ts
    │   ├── allow-decrement-value-use-case.ts
    │   └── load-configuration-use-case.ts
    │
    ├── 📁 domain/ Our Business logic
    │   ├── 📁 events --> Here we model the domain events
    │   ├── 📁 model --> Here we model our business logic
    │   ├── 📁 repository --> Here exists the domain repositories (only abstractions)
    │   └── 📁 services --> Here exists the domain services (only abstractions)
    │
    ├── 📁 infrastructure/ Our external services implementations
    │   ├── 📁 repository --> Here we model the domain events
    │   │   └── CounterService.ts --> Implementation for domain abstractions
    │   └── 📁 services
    │       └── CounterService.ts --> Implementation for domain abstractions
    │
    ├── 📁 ui/ React things
    │   ├── 📁 components/ --> Stateless components
    │   └── 📁 pages/
    │       └── 📁 home/
    │           ├── Home.tsx --> Page component (View)
    │           └── useHomeViewModel.ts --> Home UI business logic (ViewModel)
    │
    ├── ConfigurationLoader.tsx
    ├── config.json --> Our configuration with custom features and configs by "clients"
    ├── app.tsx
    └── index.tsx
```

## 🤔 Contributing

Si encuentras algún error, crees que hay cosas por mejorar o simplemente quieres contribuir, eres bienvenido/a.
Solo realiza un fork y envíanos tu PR 🙏.
