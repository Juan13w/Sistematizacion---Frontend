# 🚀 Instrucciones de Instalación y Ejecución

## Frontend - Sistema de Sistematización EMTRASUR

---

## 📋 Requisitos Previos

- **Node.js** versión 16 o superior
- **npm** versión 8 o superior
- Backend de la API corriendo en `http://localhost:5000`

---

## 🔧 Instalación

### 1. Navegar a la carpeta del frontend

```bash
cd sistematizacion-frontend
```

### 2. Instalar dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias:
- React 18
- TypeScript
- Axios (para llamadas HTTP)
- React Scripts (herramientas de desarrollo)

---

## ▶️ Ejecución

### Modo Desarrollo

```bash
npm start
```

Esto iniciará el servidor de desarrollo en:
- **URL:** http://localhost:3000
- La aplicación se recargará automáticamente cuando hagas cambios
- Los errores de lint aparecerán en la consola

### Build para Producción

```bash
npm run build
```

Crea una versión optimizada para producción en la carpeta `build/`

---

## 🔌 Configuración de la API

Por defecto, el frontend se conecta a:
```
http://localhost:5000
```

Si tu backend está en otra URL, puedes cambiarla creando un archivo `.env` en la raíz del proyecto:

```env
REACT_APP_API_URL=http://tu-servidor:puerto
```

---

## 🎨 Características Implementadas

### ✅ Componentes UI
- **Button** - Botón reutilizable con variantes y estados de carga
- **Input** - Campo de texto con validación y mensajes de error
- **Card** - Tarjeta para agrupar contenido
- **Alert** - Alertas para mensajes de éxito/error

### ✅ Layout
- **Header** - Cabecera con logo de EMTRASUR
- **Footer** - Pie de página con información de contacto

### ✅ Features
- **SearchForm** - Formulario de búsqueda por placa
- **ResultCard** - Visualización de resultados de sistematización

### ✅ Funcionalidades
- Consulta de sistematización por placa
- Validación de formato de placa
- Visualización de deudas pendientes
- Cálculo de deuda total
- Manejo de errores
- Estados de carga
- Diseño responsive

---

## 🎨 Colores EMTRASUR

La aplicación usa la identidad visual de EMTRASUR:

- **Azul Institucional:** `#003DA5`
- **Amarillo Tránsito:** `#FFC107`
- **Verde (Al día):** `#4CAF50`
- **Rojo (Deuda):** `#F44336`

---

## 📁 Estructura del Proyecto

```
sistematizacion-frontend/
├── public/
│   └── index.html              # HTML principal
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── logo-emtrasur.jpg
│   ├── components/
│   │   ├── ui/                 # Componentes base
│   │   ├── layout/             # Header, Footer
│   │   └── features/           # SearchForm, ResultCard
│   ├── pages/
│   │   └── HomePage.tsx        # Página principal
│   ├── services/
│   │   ├── api.ts              # Configuración Axios
│   │   └── sistematizacionService.ts
│   ├── types/                  # Tipos TypeScript
│   ├── utils/                  # Utilidades
│   ├── styles/                 # Estilos globales
│   ├── App.tsx                 # Componente raíz
│   └── index.tsx               # Punto de entrada
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🐛 Solución de Problemas

### Error: "Cannot find module 'react'"

```bash
npm install
```

### Error: "Port 3000 is already in use"

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# O usa otro puerto
set PORT=3001 && npm start
```

### Error de conexión con el backend

1. Verifica que el backend esté corriendo en `http://localhost:5000`
2. Revisa la consola del navegador para ver el error específico
3. Verifica que CORS esté habilitado en el backend

---

## 📝 Notas Importantes

- Los errores de TypeScript que ves actualmente se resolverán automáticamente al ejecutar `npm install`
- El logo de EMTRASUR ya está cargado en `src/assets/images/logo-emtrasur.jpg`
- La aplicación está lista para conectarse con tu backend en ASP.NET Core

---

## 🚀 Próximos Pasos

1. Ejecutar `npm install` para instalar dependencias
2. Iniciar el backend en `http://localhost:5000`
3. Ejecutar `npm start` para iniciar el frontend
4. Abrir http://localhost:3000 en tu navegador
5. Probar la consulta con una placa de prueba

---

## 📞 Soporte

Para cualquier problema o pregunta, revisa:
- La consola del navegador (F12)
- La consola donde ejecutaste `npm start`
- Los logs del backend
