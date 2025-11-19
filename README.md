# 🚗 Frontend - Sistema de Sistematización EMTRASUR

Frontend de la aplicación de consulta de sistematización de vehículos para EMTRASUR La Estrella.

## 📁 Estructura de Carpetas

```
sistematizacion-frontend/
├── public/                      # Archivos públicos estáticos
│   ├── index.html              # HTML principal
│   ├── favicon.ico             # Icono de la aplicación
│   └── logo-emtrasur.png       # Logo de EMTRASUR
│
├── src/                        # Código fuente
│   ├── assets/                 # Recursos estáticos
│   │   ├── images/            # Imágenes
│   │   ├── icons/             # Iconos SVG
│   │   └── fonts/             # Fuentes personalizadas
│   │
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes UI reutilizables
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Alert.tsx
│   │   │
│   │   ├── layout/           # Componentes de layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   │
│   │   └── features/         # Componentes específicos de funcionalidad
│   │       ├── SearchForm.tsx
│   │       ├── ResultCard.tsx
│   │       └── DebtSummary.tsx
│   │
│   ├── pages/                # Páginas/Vistas
│   │   ├── HomePage.tsx
│   │   ├── SearchPage.tsx
│   │   └── NotFoundPage.tsx
│   │
│   ├── services/             # Servicios de API
│   │   ├── api.ts           # Configuración de Axios
│   │   └── sistematizacionService.ts
│   │
│   ├── hooks/                # Custom React Hooks
│   │   ├── useSistematizacion.ts
│   │   └── useDebounce.ts
│   │
│   ├── types/                # Definiciones TypeScript
│   │   ├── sistematizacion.types.ts
│   │   └── api.types.ts
│   │
│   ├── utils/                # Funciones utilitarias
│   │   ├── formatters.ts    # Formateo de datos
│   │   └── validators.ts    # Validaciones
│   │
│   ├── styles/               # Estilos globales
│   │   ├── globals.css
│   │   └── variables.css
│   │
│   ├── App.tsx              # Componente principal
│   ├── index.tsx            # Punto de entrada
│   └── react-app-env.d.ts   # Tipos de React
│
├── .gitignore               # Archivos ignorados por Git
├── package.json             # Dependencias del proyecto
├── tsconfig.json            # Configuración TypeScript
└── README.md                # Este archivo
```

## 🛠️ Tecnologías

- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **CSS3** - Estilos (o TailwindCSS si se prefiere)
- **Axios** - Cliente HTTP

## 📦 Instalación

Para inicializar el proyecto con Create React App:

```bash
# Navegar a la carpeta del frontend
cd sistematizacion-frontend

# Inicializar proyecto con TypeScript
npx create-react-app . --template typescript

# O si prefieres usar la estructura ya creada, instalar dependencias
npm install
```

## 🚀 Comandos

```bash
# Desarrollo
npm start

# Build para producción
npm run build

# Tests
npm test
```

## 🎨 Identidad Visual EMTRASUR

### Colores Principales
- **Azul Institucional**: `#003DA5`
- **Amarillo Tránsito**: `#FFC107`
- **Blanco**: `#FFFFFF`
- **Gris**: `#F5F5F5`

### Colores de Estado
- **Éxito/Al día**: `#4CAF50`
- **Error/Deuda**: `#F44336`
- **Advertencia**: `#FF9800`
- **Info**: `#2196F3`

## 🔌 Conexión con Backend

El frontend se conecta a la API REST en:
- **Desarrollo**: `http://localhost:5000`
- **Producción**: (Por definir)

## 📝 Próximos Pasos

1. Inicializar proyecto con Create React App
2. Instalar dependencias adicionales (axios, react-router-dom, etc.)
3. Configurar servicios de API
4. Crear componentes base
5. Implementar páginas principales
6. Integrar con backend
7. Aplicar estilos de EMTRASUR

## 👥 Equipo de Desarrollo

EMTRASUR - La Estrella, Antioquia
