const d=document;
const lista = d.getElementById("listaVideos");
const formulario = d.getElementById("formularioVideo");
const tituloFormulario = d.getElementById("tituloFormulario");
const template=d.getElementById("crud-template").content; //no entiendo bien porque el content
const fragment=d.createDocumentFragment();

const getAll = async() => {
    try{
        let res=await fetch("http://localhost:3000/videos"),
        json= await res.json();

        if(!res.ok) throw{ status:res.status, statusText: res.statusText};

        console.log(json);

        json.forEach(el => {
            template.querySelector(".titulillo").innerText=el.titulo;
            template.querySelector(".urlillo").src=el.url;
            template.querySelector(".descripciencillo").innerText=el.descripcion;

            let clone=d.importNode(template,true);
            fragment.appendChild(clone);
        })

        lista.appendChild(fragment);
        
    } catch(err){
        let message = err.statusText || "Ocurrio un error";
        lista.insertAdjacentHTML("afterend", `<p><b> Error ${err.status}: ${message}</b></p>`);        
    }
}

d.addEventListener("DOMContentLoaded", getAll);

//OBJETO MODAL
/*class Modal {

  constructor(idModal, idBtnModal, idAcceptBtn, idCancelBtn) {
    this.modal = document.getElementById(idModal);
    this.openBtn1 = document.getElementById(idBtnModal);
    this.acceptBtn = document.getElementById(idAcceptBtn);
    this.cancelBtn = document.getElementById(idCancelBtn);

    this.openBtn1.addEventListener('click', this.agregarNuevoVideo.bind(this));
    this.acceptBtn.addEventListener('click', this.accept.bind(this));
    this.cancelBtn.addEventListener('click', this.cancel.bind(this));
    window.addEventListener("click", this.closeModal.bind(this));
  }
  
    openModal() {
      this.modal.style.display = 'block';
    }

    closeModal(event) {
        if (event.target == this.modal) {
            this.modal.style.display = 'none';
        }
    };

    agregarNuevoVideo() {
      // Restablecer los valores del formulario
      
      formulario.reset();
      
      // Abrir el modal
      this.openModal();
    }
  
    accept() {
      const index = this.acceptBtn.dataset.index; // Obtén el índice del perro
      const perros = JSON.parse(localStorage.getItem("perros")); // Obtén los perros del almacenamiento local
    
      if (perros && perros.length > 0) {
        const perro = perros[index]; // Obtén el perro correspondiente al índice
    
        // Verifica si el perro existe
        if (perro) {
          // Actualiza los valores del perro con los valores del formulario
          perro.nombre = document.getElementById("tituloVideo").value;
          perro.apellido = document.getElementById("urlVideo").value;
          perro.descripcion = document.getElementById("descripcionVideo").value;
    
          // Guarda los perros actualizados en el almacenamiento local
          localStorage.setItem("perros", JSON.stringify(perros));
    
          // Cierra el modal y actualiza la lista de perros en la página
          this.modal.style.display = "none";
          mostrarPerrosEnPagina();
        } else {
          this.modal.style.display = "none";
          console.log("El perro no existe.");
          return; // Salir del método o realizar alguna acción adicional
        }
      } else {
        this.modal.style.display = "none";
        console.log("El arreglo de videos está vacío o no existe.");
        return; 
      }
    }
  
    cancel() {
      console.log('Botón Cancelar presionado');
      this.modal.style.display = 'none';
    }

    llenarFormulario(perro) {
      const tituloVideo = document.getElementById("tituloVideo");
      const urlVideo = document.getElementById("urlVideo");
      const descripcionVideo = document.getElementById("descripcionVideo");
  
      tituloVideo.value = perro.nombre;
      urlVideo.value = perro.apellido;
      descripcionVideo.value = perro.descripcion;
    }

    aceptarEdicion(event, index, perros) {
      event.preventDefault();
    
      // Obtener los valores actualizados del formulario
      const tituloVideo = document.getElementById("tituloVideo").value;
      const urlVideo = document.getElementById("urlVideo").value;
      const descripcionVideo = document.getElementById("descripcionVideo").value;
    
      // Actualizar los valores del perro seleccionado
      const perro = perros[index];
      perro.nombre = tituloVideo;
      perro.apellido = urlVideo;
      perro.raza = razaPerro;
      perro.telefono = telefonoPerro;
      perro.pais = paisPerro;
      perro.descripcion = descripcionVideo;
    
      // Actualizar el array de perros en el almacenamiento local
      localStorage.setItem("perros", JSON.stringify(perros));
    
      // Cerrar el modal y actualizar la lista de perros en la página
      modal.modal.style.display = "none";
      mostrarPerrosEnPagina();
      resetFileInput(); // Restablecer el campo de entrada de archivo
      
    }
}

class Modal2 {
  constructor() {
    this.modal = document.getElementById('myModal2');
    this.modalMensaje = document.getElementById('modal2Mensaje');
    this.modalAceptarBtn = document.getElementById('modal2AceptarBtn');
    this.modalCancelarBtn = document.getElementById('modal2CancelarBtn');

    this.modalAceptarBtn.addEventListener('click', this.aceptar.bind(this));
    this.modalCancelarBtn.addEventListener('click', this.cancelar.bind(this));
  }

  mostrar(mensaje, aceptarCallback) {
    this.modalMensaje.textContent = mensaje;
    this.modalAceptarBtn.addEventListener('click', aceptarCallback);
    this.modal.style.display = 'block';
  }

  ocultar() {
    this.modal.style.display = 'none';
    this.modalAceptarBtn.removeEventListener('click', this.aceptar);
  }

  aceptar() {
    this.ocultar();
  }

  cancelar() {
    this.ocultar();
  }
}


class Video {
  constructor(tituloVideo, urlVideo, descripcionVideo) {
    this.tituloVideo = tituloVideo;
    this.urlVideo = urlVideo;
    this.descripcionVideo = descripcionVideo;
  }
}

const modalAddVideo1 = new Modal("myModal", "openModalBtn1", "acceptBtn", "cancelBtn");
const modalAddVideo2 = new Modal("myModal", "openModalBtn2", "acceptBtn", "cancelBtn")
const modalConfirmacion = new Modal2();

*/