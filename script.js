import tareaService from "./tareaService.js";

const input = document.querySelector(".input-group input");
const btnAgregar = document.querySelector(".input-group button");
const mensajeError = document.querySelector(".error-input");
const listaTareas = document.querySelector(".task-list");
const contadorTotal = document.querySelector(".counter.total");
const contadorCompleted = document.querySelector(".counter.completed");
const contadorIncompleted = document.querySelector(".counter.incompleted");

mensajeError.style.display = "none";

let tareas = [];

// Funciones
function actualizarContadores() {
    const total = tareas.length;
    const completadas = tareas.filter(tarea => tarea.completada).length;
    const incompletas = total - completadas;

    contadorTotal.textContent = `Total: ${total}`;
    contadorCompleted.textContent = `Completed: ${completadas}`;
    contadorIncompleted.textContent = `Incompleted: ${incompletas}`;
}

function crearLiDeTarea(tarea) {
    const li = document.createElement("li");
    li.classList.add("task");
    if (tarea.completada) {
        li.classList.add("completed");
    }
    li.innerHTML = `
        <button class="delete">X</button>
        <span class="task-text">${tarea.texto}</span>
        <button class="complete">✓</button>
    `;
    return li;
}

function renderizarTareas() {
    tareas.forEach(function(tarea) {
        const li = crearLiDeTarea(tarea);
        listaTareas.appendChild(li);
    });
}

async function cargarTareas() {
    try {
        const datosDelServidor = await tareaService.getAllFromServer();

        tareas = datosDelServidor.map(tarea => ({
            id: tarea.id,
            texto: tarea.texto,
            completada: tarea.completada
        }));

        renderizarTareas();
        actualizarContadores();
    } catch (error) {
        console.error("Error al cargar tareas:", error);
    }
}

// Llamada inicial
cargarTareas();

// Eventos (en Fase 2 los conectaremos al servidor)

btnAgregar.addEventListener("click", async function() {
    const texto = input.value.trim();

    if (!texto) {
        mensajeError.style.display = "block";
    } else {
        mensajeError.style.display = "none";

        const nuevaTarea = await tareaService.addOne({
            texto: texto,
            completada: false
        });
        

        // Agregar el array y al html

        tareas =[...tareas,nuevaTarea];
        const li = crearLiDeTarea(nuevaTarea);
        listaTareas.appendChild(li);

        input.value = "";
        actualizarContadores();
    }
});




// Eventos de eliminar y completar:
listaTareas.addEventListener("click", async function(evento) {

    // 1. ELIMINAR
    if (evento.target.classList.contains("delete")) {
        const li = evento.target.closest(".task");
        const textoEliminar = li.querySelector(".task-text").textContent;

        const tareaEliminar = tareas.find(tarea => tarea.texto === textoEliminar);

        if (tareaEliminar) {
            await tareaService.deleteOne(tareaEliminar.id); // Ojo: deleteOne (sin 'te')
            
            tareas = tareas.filter(tarea => tarea.id !== tareaEliminar.id);
            li.remove();
            actualizarContadores();
        }
    }

    // 2. COMPLETAR
    if (evento.target.classList.contains("complete")) {
        const li = evento.target.closest(".task");
        const textoCompletar = li.querySelector(".task-text").textContent;

        const tareaACompletar = tareas.find(tarea => tarea.texto === textoCompletar);

        if (tareaACompletar) {
            await tareaService.updateOne(tareaACompletar.id, {
                completada: !tareaACompletar.completada
            });

            li.classList.toggle("completed");
            tareas = tareas.map(tarea => {
                if (tarea.id === tareaACompletar.id) {
                    return { ...tarea, completada: !tarea.completada };
                }
                return tarea;
            });
            actualizarContadores();
        }
    }
});