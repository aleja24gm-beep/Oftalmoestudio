# OftalmoResident - Plataforma de Estudio y Preparación para Residentes de Oftalmología

Plataforma educativa integral de alta especialidad para residentes y fellows de Oftalmología. Contiene más de 100 monografías completas organizadas en 10 subespecialidades, banco de preguntas con aplicación clínica directa, calculadoras clínicas interactivas y motor de inteligencia artificial impulsado por Google Gemini.

---

## 🚀 Opciones de Publicación y Despliegue

La aplicación está preparada para desplegarse con **0 configuración** tanto en **Vercel** como en **GitHub Pages** o servidores dedicados (Node.js/Docker).

---

### Opción 1: Publicar en Vercel (Recomendado - 2 minutos)

Vercel detecta automáticamente el proyecto Vite y utiliza el archivo `vercel.json` incluido:

1. **Crear repositorio en GitHub:**
   - Sube o haz push de este código a un repositorio en tu cuenta de GitHub (ej. `oftalmo-resident`).
2. **Entrar a Vercel:**
   - Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. **Importar Proyecto:**
   - Haz clic en **"Add New..."** -> **"Project"**.
   - Selecciona tu repositorio `oftalmo-resident`.
4. **Desplegar:**
   - Vercel detectará la configuración automáticamente (`Framework Preset: Vite`, `Build Command: npm run build`, `Output Directory: dist`).
   - (Opcional) En *Environment Variables*, puedes agregar `GEMINI_API_KEY` si deseas una clave global de servidor, o dejarla vacía para que cada usuario use la suya en el navegador con el botón 🔑.
   - Haz clic en **"Deploy"**.
   - ¡Listo! En menos de 1 minuto tendrás tu URL activa (ej. `https://oftalmo-resident.vercel.app`).

---

### Opción 2: Publicar en GitHub Pages (Gratuito en GitHub)

El proyecto incluye un flujo de trabajo automatizado de GitHub Actions (`.github/workflows/deploy.yml`):

1. **Subir el código a GitHub:**
   - Sube el código a tu rama principal (`main` o `master`).
2. **Habilitar GitHub Pages:**
   - En tu repositorio de GitHub, entra a **Settings** (Configuración).
   - En el menú lateral izquierdo, selecciona **Pages**.
   - En la sección **Build and deployment** -> **Source**, selecciona:
     👉 **"GitHub Actions"** (en lugar de "Deploy from a branch").
3. **Despliegue automático:**
   - En la pestaña **Actions** de tu repositorio verás cómo se ejecuta el workflow `Deploy to GitHub Pages`.
   - Cuando termine (1-2 minutos), tu web estará publicada en:
     `https://<tu-usuario>.github.io/<tu-repositorio>/`
4. **Rutas relativas garantizadas:**
   - `vite.config.ts` ya tiene configurado `base: './'`, por lo que todos los scripts, estilos e imágenes cargan perfectamente sin importar el nombre del repositorio.

---

### Opción 3: Ejecución Local en tu Computadora

```bash
# 1. Clonar el repositorio
git clone https://github.com/<tu-usuario>/oftalmo-resident.git
cd oftalmo-resident

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
# Abre http://localhost:3000 en tu navegador

# 4. Construir para producción
npm run build
```

---

## 🔑 Configuración de la API de Google Gemini

La aplicación incluye un botón con icono de llave (**🔑**) en la barra superior que permite a cualquier usuario ingresar su propia clave de API gratuita de Google Gemini:

1. Entra a [aistudio.google.com](https://aistudio.google.com).
2. Inicia sesión con tu cuenta de Google.
3. Haz clic en la opción **"Get API key"** en el menú lateral.
4. Presiona **"Create API key"** y copia el código generado.
5. En la aplicación, abre el modal 🔑, pega la clave y presiona **"Probar Conexión"** o **"Guardar clave en el navegador"**.

> **Nota:** Si la aplicación se usa sin API key o sin conexión a internet, el motor clínico integrado continuará respondiendo con la base de conocimiento curada de más de 100 monografías y casos clínicos.

---

## 📚 Estructura de Subespecialidades Incluidas (10 Módulos)

1. **Córnea y Superficie Ocular** (12 monografías)
2. **Glaucoma y Presión Intraocular** (18 monografías)
3. **Retina y Vítreo** (14 monografías)
4. **Cristalino y Cirugía de Catarata** (14 monografías)
5. **Neuroftalmología** (10 monografías)
6. **Uveítis e Inflamación Ocular** (14 monografías)
7. **Estrabismo y Oftalmopediatría** (10 monografías)
8. **Oculoplástica, Órbita y Vía Lagrimal** (12 monografías)
9. **Refracción, Óptica y Córnea Quirúrgica** (7 monografías)
10. **Oncología Ocular y Tumores Intraoculares** (9 monografías)
