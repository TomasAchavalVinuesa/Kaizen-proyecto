let arregloitems= []
botonEnviar.addEventListener("click", function() {
    let nombre = document.querySelector("#inputNombre").value;
    let apellido = document.querySelector("#inputApellido").value;
    let fecha = document.querySelector("#inputFecha").value;
    let color = document.querySelector("#inputColor").value;
    let email = document.querySelector("#inputEmail").value;
    var item = {
        id: Date.now(),
        nombre: nombre,
        apellido: apellido,
        fecha: fecha,
        color: color,
        email: email
    };
    arregloitems.push(item)
    agregarItem(item);
});

function agregarItem(item){
    let tBody = document.querySelector("#tBody")
    let fila = document.createElement("tr");
    
    fila.innerHTML =
        '<td>' + item.nombre + '</td>' +
        '<td>' + item.apellido + '</td>' +
        '<td>' + item.email + '</td>' +
        '<td>' + item.fecha + '</td>' +
        '<td style="background-color:' + item.color + ';"></td>'+
        '<td> <lord-icon id="'+item.id+'" src="https://cdn.lordicon.com/wloilxuq.json" trigger="click" style="width:30px;height:30px"> </lord-icon> <lord-icon id="'+item.id+'" src="https://cdn.lordicon.com/gsqxdxog.json" trigger="click" style="width:30px;height:30px"> </lord-icon> </td>'+
        '<td>' + item.id + '</td>'
    ;
    tBody.appendChild(fila);
}





















botonBorrar.addEventListener("click", function() {

    let itemSeleccionado = item
    setTimeout(eliminarElemento(itemSeleccionado) , 3000)
});

function eliminarElemento(item){
	let fila2 = document.getElementById(item.id);
	tBody = fila2.parentNode;
	tBody.removeChild(fila2);
}