let id = 0

const servicio = document.getElementById('servicio');

function alerta() {
    let servicioSeleccionado = servicio.value;

    switch (servicioSeleccionado) {
        case 'venta_neumaticos':
            mostrarAlerta("Venta de neumáticos", 600);
            break;
        case 'obras_pintura':
            mostrarAlerta("Obras de pintura", 800);
            break;
        case 'aire_acondicionado':
            mostrarAlerta("Aire acondicionado", 400);
            break;
        case 'servicio_agua':
            mostrarAlerta("Servicio de agua", 300);
            break;
        case 'obra_motor':
            mostrarAlerta("Obra de motor", 700);
            break;
        case 'aceite_filtros':
            mostrarAlerta("Aceite de motor y filtros", 500);
            break;
        case 'reparaciones_frenos':
            mostrarAlerta("Reparaciones de freno, cinturones y accesorios", 900);
            break;
        default:
            console.log('No se ha seleccionado ningún servicio válido');
            break;
    }
}

function mostrarAlerta(servicio, costo) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-info m-3",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: `¿Estás seguro de seleccionar ${servicio}?`,
        text: `El costo del servicio de ${servicio} es de $${costo} MXN.`,
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "No, deseo cancelarlo",
        confirmButtonText: "Sí, deseo adquirirlo",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Servicio Adquirido!",
                text: `Has adquirido el servicio de ${servicio}.`,
                icon: "success",
                agregar: agregar()
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: `Has cancelado el servicio de ${servicio}.`,
                icon: "error",
            });
        }
    });
}




function agregar() {
    let nombre = document.getElementById('nombre').value
    let apellidos = document.getElementById('apellidos').value
    let numeroTelefono = document.getElementById('numeroTelefono').value
    let modelo = document.getElementById('modelo').value
    let placas = document.getElementById('placas').value
    let descripcion = document.getElementById('descripcion').value
    let servicio = document.getElementById('servicio').value

    id = id + 1

    let registro = {
        id: id,
        nombre: nombre,
        apellidos: apellidos,
        numeroTelefono: numeroTelefono,
        modelo: modelo,
        placas: placas,
        descripcion: descripcion,
        servicio: servicio
    }

    let registros = JSON.parse(localStorage.getItem('taller')) || []

    registros.push(registro)

    localStorage.setItem('taller',JSON.stringify(registros))
}