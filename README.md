

# ✅ TODO App - Full Stack

> Una aplicación completa de lista de tareas. El frontend está construido con HTML, CSS y JavaScript, y se conecta a una API REST simulada con `json-server` y Node.js.

## 🚀 Demo Visual
Puedes ver la interfaz de usuario en vivo gracias a GitHub Pages: 
👉 **[Ver la TODO App](https://Atreus-Distro.github.io/todo-app-css/)**

*(⚠️ **Nota:** GitHub Pages solo aloja sitios estáticos. Para probar la funcionalidad real de guardar, editar y eliminar tareas, debes correr el servidor en local siguiendo las instrucciones de abajo).*

---

## 🛠️ Tecnologías Utilizadas

**Frontend:**
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Backend:**
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-000000?style=for-the-badge&logo=json&logoColor=white)

---

## ⚙️ Cómo correr el proyecto en local

Para que la aplicación funcione al 100% y puedas guardar tus tareas en la base de datos, necesitas encender el servidor backend. Sigue estos pasos:

1. **Clona el repositorio** o descarga los archivos.
2. **Abre una terminal** y navega a la carpeta del servidor:
   ```bash
   cd server
   ```
3. **Instala las dependencias de Node:**
   ```bash
   npm install
   ```
4. **Enciende el servidor:**
   ```bash
   npm run server
   ```
   *(Verás un mensaje indicando que el servidor está corriendo en `http://localhost:3000`)*
5. **Abre el Frontend:** Haz doble clic en el archivo `index.html` o ábrelo con la extensión *Live Server* de VS Code.

---

## ✨ Características

- [x] **CRUD Completo:** Agregar, leer, eliminar y completar tareas.
- [x] **Persistencia Real:** Los datos se guardan en un archivo `db.json` mediante el servidor.
- [x] **Métodos HTTP:** Uso de `GET`, `POST`, `DELETE` y `PATCH`.
- [x] **Arquitectura Limpia:** Separación de responsabilidades (`fetchService.js`, `tareaService.js`, `script.js`).
- [x] **Diseño Responsive:** Adaptable a móviles y escritorio.
- [x] **Temas:** Soporte automático para modo claro y oscuro.

---

## 👨‍💻 Autor

**Atreus-Distro**
- GitHub: [@Atreus-Distro](https://github.com/Atreus-Distro)

