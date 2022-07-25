const texto = document.querySelector('#entrada');
const btnAgregar = document.querySelector('#boton');
const listaDeTareas = document.querySelector('#tarea');
const tablaTareas = document.querySelector('#tbody');
const total = document.querySelector('#total');
const realizada = document.querySelector('#realizada')

let tareas = [
    {
        id: 16,
        descripcion: "Ir al supermercado",
        estado: false
    },

    {
        id: 60,
        descripcion: "Estudiar para la prueba",
        estado: false
    },

    {
        id: 24,
        descripcion: "Sacar a pasear a Yogu",
        estado: false
    }
];

function cargaInicial() {
    let html = ""
    for(let tarea of tareas) {
        html += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.descripcion}</td>
                    <td><input type="checkbox" id="cbox1" value="first_checkbox" ${tarea.estado === true ? 'checked' : ''} onclick="cambiarEstadoTarea(event, ${tarea.id})"><br></td>
                    <td><button type="button" onclick="eliminarTarea(${tarea.id})"><i class="fas fa-trash-alt"></i></button></td>
                </tr>`;
    }
    tablaTareas.innerHTML = html;
    total.innerHTML = tareas.length;
}

let contador = 1;

btnAgregar.addEventListener('click', () => {
    const nuevaTarea = {id: contador, descripcion: texto.value, estado: false};

    tareas.push(nuevaTarea);
    texto.value = '';

    let html = ""
    for(let tarea of tareas) {
        html += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.descripcion}</td>
                    <td><input type="checkbox" id="cbox1" value="first_checkbox" ${tarea.estado === true ? 'checked' : ''} onclick="cambiarEstadoTarea(event, ${tarea.id})"><br></td>
                    <td><button type="button" onclick="eliminarTarea(${tarea.id})"><i class="fas fa-trash-alt"></i></button></td>
                </tr>`;
    }

    tablaTareas.innerHTML = html;
    contador ++;
    total.innerHTML = tareas.length;
})

function eliminarTarea(id) {
    const index = tareas.findIndex((e) => e.id === id);
    tareas.splice(index,1);

    let html = ""
    for(let tarea of tareas) {
        html += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.descripcion}</td>
                    <td><input type="checkbox" id="cbox1" value="first_checkbox" ${tarea.estado === true ? 'checked' : ''} onclick="cambiarEstadoTarea(event, ${tarea.id})"><br></td>
                    <td><button type="button" onclick="eliminarTarea(${tarea.id})"><i class="fas fa-trash-alt"></i></button></td>
                </tr>`;
    }

    tablaTareas.innerHTML = html;
    total.innerHTML = tareas.length;
    let tareasRealizadas = tareas.filter(tarea => tarea.estado === true);
    realizada.innerHTML = tareasRealizadas.length;
}

function cambiarEstadoTarea(event, id) {
    let indiceTarea = tareas.findIndex(tarea => tarea.id === id);
    if (event.target.checked === true) {
        tareas[indiceTarea].estado = true;
    } else {
        tareas[indiceTarea].estado = false;
    }

    let tareasRealizadas = tareas.filter(tarea => tarea.estado === true);
    realizada.innerHTML = tareasRealizadas.length;
}

cargaInicial();