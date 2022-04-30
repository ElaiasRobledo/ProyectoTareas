window.onload = Iniciar;
let tareasPendientes = [];
let tareasEnProgreso = [];
let tareasFinalizadas = [];


function Iniciar() {


    let btnPendiente = document.getElementById("btnPendiente");
    btnPendiente.addEventListener("click", AgregarTareaPendiente);

    let btnProgreso = document.getElementById("btnProgreso");
    btnProgreso.addEventListener("click", AgregarTareaEnProgreso);

    let btnFinalizada = document.getElementById("btnFinalizada");
    btnFinalizada.addEventListener("click", AgregarTareaFinalizada)

    var btnEliminarPendiente = document.getElementById("btnEliminarPendiente");
    btnEliminarPendiente.addEventListener("click", DeleteTareaPendiente);
}

function AgregarTareaPendiente() {
    var txtTarea = document.getElementById("txtTarea");

    var tarea = txtTarea.value;

    if (btnPendiente) {
        tareasPendientes.push(tarea);
        MostrarTarea();
    }


}

function AgregarTareaFinalizada() {
    var txtTarea = document.getElementById("txtTarea");

    var tarea = txtTarea.value;

    if (btnFinalizada) {
        tareasFinalizadas.push(tarea);
        MostrarTareaFin();
    }
}

function AgregarTareaEnProgreso() {
    var txtTarea = document.getElementById("txtTarea");

    var tarea = txtTarea.value;

    if (btnProgreso) {
        tareasEnProgreso.push(tarea);
        MostrarTareaPro();
    }
}



function DeleteTareaPendiente() {
    var txtTarea = document.getElementById("txtTarea");
    var txtDeleteTarea = document.getElementById("txtDeleteTarea");
    var tareaDelete = txtDeleteTarea.value;
    var tarea = txtTarea.value;

    tareasPendientes = tareasPendientes.filter(function(elemento) {
        return elemento !== tareaDelete;
    });

    MostrarTarea();

}

function DeleteTareaProgreso() {

    var txtTarea = document.getElementById("txtTarea");
    var txtDeleteTarea = document.getElementById("txtDeleteTarea");
    var tareaDelete = txtDeleteTarea.value;
    var tarea = txtTarea.value;

    for (let tarea of tareasEnProgreso) {
        if (tareaDelete == tarea) {
            tareasEnProgreso.pop(tareaDelete);
        }
    }
}

function DeleteTareaFinalizada() {
    var txtTarea = document.getElementById("txtTarea");
    var txtDeleteTarea = document.getElementById("txtDeleteTarea");
    var tareaDelete = txtDeleteTarea.value;
    var tarea = txtTarea.value;

    for (let tarea of tareasFinalizadas) {
        if (tareaDelete == tarea) {
            tareasFinalizadas.pop(tareaDelete);
        }
    }
}





function MostrarTarea() {
    var listaPendiente = document.getElementById("pendiente");
    var html = "";
    for (var tarea of tareasPendientes) {
        html += "<li>" + tarea + "<br/>"
    }
    listaPendiente.innerHTML = html
    debugger;

}

function MostrarTareaPro() {
    let listaProgreso = document.getElementById("progreso");
    let htmlPro = "";
    for (let tarea of tareasEnProgreso) {
        htmlPro += "<li>" + tarea + "<br/>"
    }
    listaProgreso.innerHTML = htmlPro
    debugger;
}

function MostrarTareaFin() {
    let listaFinalizada = document.getElementById("finalizada");
    let htmlPro = "";
    for (let tarea of tareasFinalizadas) {
        htmlPro += "<li>" + tarea + "<br/>"
    }
    listaFinalizada.innerHTML = htmlPro
    debugger;
}