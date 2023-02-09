import styles from "./Folders.module.css";

export const Folders = () => {
  return (
    <div className={styles.structure}>
      <pre>
        <code>
          {`
📁 Folder structure

📁 public/
├── favicon.png --> CodeScouts's logo
├── index.html --> Main html file
│
📁 src/
├── 📁 application/ Our use cases
│   ├── get-initial-value-use-case.ts --> Here we model the use cases
│   ├── increment-use-case.ts
│   └── decrement-use-case.ts
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
├── app.tsx
└── index.tsx
`}
        </code>
      </pre>
    </div>
  );
};
