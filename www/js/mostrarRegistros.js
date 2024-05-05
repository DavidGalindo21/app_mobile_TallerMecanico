let padre = document.getElementById('row')

let registros = JSON.parse(localStorage.getItem('taller')) || []

registros.forEach(element => {
    padre.innerHTML += `
            <div class="col-12" >
                <div class="card my-3 py-3 px-2 border-3 border-black  ">
                    <div class="card-header border-0 d-flex justify-content-between gap-4 " >
                        <h4 class="text-center" >${element.nombre}</h4>
                        <h4  class="text-center">${element.apellidos}</h4>
                    </div>
                    <div class="card-body border-0 row">
                        <div class="col-6 text-center d-flex flex-column align-items-center  justify-content-center " >
                            <h3 class="fw-bolder">Modelo</h3>
                            <h4>${element.modelo}</h4>
                        </div>
                        <div class="col-6 text-center d-flex flex-column align-items-center  justify-content-center ">
                            <h3 class="fw-bolder">Placas</h3>
                            <h4>${element.placas}</h4>
                        </div>
                        <div class="col-12 text-center mt-3 ">
                            <h3 class="fw-bolder">Teléfono</h3>
                            <h4>${element.numeroTelefono}</h4>
                        </div>
                    </div>
                    <div class="card-footer border-0 row" >
                        <div class="col-12 text-center " >
                            <h3 class="fw-bolder">Servicio</h3>
                            <h4>${element.servicio}</h4>
                        </div>
                        <div class="col-12 mt-3 text-center " >
                            <h3 class="fw-bolder">Descripción del problema</h3>
                            <h4>${element.descripcion}</h4>
                        </div>
                    </div>
                </div>
            </div>
        `
});

const nav = document.querySelector('nav')

window.onscroll = () => {
    let scroll = scrollY
    if (scroll > 50) {
        nav.style.background = 'rgba(255,255,255,0.1)';
        nav.style.backdropFilter = 'blur(5px)';
        nav.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        nav.style.transition = 'all 0.5s ease';
    } else if(scroll < 50) {
        nav.style.background = 'transparent';
        nav.style.transition = 'all 0.5s ease';
        nav.style.boxShadow = 'none';
        nav.style.backdropFilter = 'none';
    }
}