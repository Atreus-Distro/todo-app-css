



const input = document.querySelector(".input-group input");

const btnAgregar = document.querySelector(".input-group button");

const mensajeError = document.querySelector(".error-input");

const listaTareas = document.querySelector(".task-list");

const contadorTotal = document.querySelector(".counter.total");

const contadorCompleted = document.querySelector(".counter.completed");

const contadorIncompleted = document.querySelector(".counter.incompleted");


mensajeError.style.display = "none";

let tareas = [];






const tareasGuardadas = localStorage.getItem("tareas");
if (tareasGuardadas) {
    tareas =JSON.parse(tareasGuardadas);
}


// Funciones:

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}


function actualizarContadores(){
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




// Llamadas Iniciales:


renderizarTareas();
actualizarContadores();



// Boton de agregar.

btnAgregar.addEventListener("click", function() {
    const texto = input.value.trim();

    if (!texto) {
    mensajeError.style.display = "block";
} else {

    mensajeError.style.display = "none";
    const nuevaTarea = {texto: texto, completada:false };
    tareas = [...tareas, nuevaTarea];
    console.log (tareas);

    const li = crearLiDeTarea(nuevaTarea);
    listaTareas.appendChild(li);

    input.value="";

    actualizarContadores();
    
    guardarTareas();

}
    
 

});


// Lista de tareas:


listaTareas.addEventListener("click", function(evento) {
    if (evento.target.classList.contains("delete")) {
        const li = evento.target.closest(".task");
        const textoEliminar = li.querySelector(".task-text").textContent;

        tareas = tareas.filter(tarea=>tarea.texto !== textoEliminar);
        li.remove();

        console.log(tareas);

        actualizarContadores();
    
        guardarTareas();
        
            
    }

    if (evento.target.classList.contains("complete")) {
    const li = evento.target.closest(".task");
    const textoCompletar = li.querySelector(".task-text").textContent;

    li.classList.toggle("completed");

    tareas = tareas.map(function(tarea) {
        if (tarea.texto === textoCompletar) {
            return {...tarea, completada: !tarea.completada};
        }

        return tarea;   
        
    });

    actualizarContadores();
    
    guardarTareas();

}

});



