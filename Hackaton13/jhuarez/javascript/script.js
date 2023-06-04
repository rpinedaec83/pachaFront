//OBJETO MODAL

class Modal {

    constructor() {
      this.modal = document.getElementById('myModal');
      this.openBtn1 = document.getElementById('openModalBtn1');
      this.openBtn2 = document.getElementById('openModalBtn2');
      this.acceptBtn = document.getElementById('acceptBtn');
      this.cancelBtn = document.getElementById('cancelBtn');
  
      this.openBtn1.addEventListener('click', this.openModal.bind(this));
      this.openBtn2.addEventListener('click', this.openModal.bind(this));
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
  
    accept() {
      console.log('Botón Aceptar presionado');
      this.modal.style.display = 'none';
    }
  
    cancel() {
      console.log('Botón Cancelar presionado');
      this.modal.style.display = 'none';
    }
}


class Perro {
  constructor(nombre, apellido, raza, telefono, pais, foto, descripcion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.raza = raza;
    this.telefono = telefono;
    this.pais = pais;
    this.foto = foto;
    this.descripcion = descripcion;
  }
}

const modal = new Modal();

let perros=[];

document.getElementById("formularioPerro").addEventListener("submit", async function(event) {
  
  event.preventDefault();
  const nombre = document.getElementById("nombrePerro").value;
  const apellido = document.getElementById("apellidoPerro").value;
  const raza = document.getElementById("razaPerro").value;
  const telefono = document.getElementById("telefonoPerro").value;
  const pais = document.getElementById("paisPerro").value;
  const inputFoto = document.getElementById("fotoPerro").files[0]; // Obtén el archivo de imagen seleccionado
  const descripcion = document.getElementById("descripcionPerro").value;

  if (event.submitter.id === "acceptBtn") {
    if (nombre && apellido && raza && telefono && pais && inputFoto && descripcion) {

      const reader = new FileReader();

      reader.onload = function(event) {

        const foto = event.target.result; // Obtén la representación base64 de la imagen
        const nuevoPerro = new Perro(nombre, apellido, raza, telefono, pais, foto, descripcion);

        perros.push(nuevoPerro);

        // Guardar el array de perros en el Web Storage
        localStorage.setItem("perros", JSON.stringify(perros));

        console.log(perros);

        mostrarPerrosEnPagina(); // Sin async/await, llamada directa

        document.getElementById("formularioPerro").reset();

      } 

      reader.readAsDataURL(inputFoto); // Leer el archivo de imagen y convertirlo a base64

    }
    
    else {
      // Mostrar un mensaje de error o realizar otra acción cuando algún campo esté vacío
      alert("Por favor, complete todos los campos obligatorios.");
      console.log("Por favor, complete todos los campos obligatorios.");
    }
  } 
  
  else {
    // El evento se originó desde el botón de cancelar
    // Realizar acciones adicionales o simplemente ignorar el evento
    console.log("Se ha presionado el botón de cancelar");
  }
});

document.addEventListener("DOMContentLoaded", async function() {
  await mostrarPerrosEnPagina();
});


async function mostrarPerrosEnPagina() {
  try {
    const perros = await obtenerPerros(); // Uso de async/await aquí

    const contenedorPerros = document.getElementById("listaPerros");
    const botonAgregarMascota1 = document.getElementById("openModalBtn1");
    const botonAgregarMascota2 = document.getElementById("openModalBtn2");

    contenedorPerros.innerHTML = "";
    botonAgregarMascota1.classList.toggle("oculto", perros.length > 0);
    botonAgregarMascota2.classList.toggle("oculto", perros.length === 0);

    perros.forEach((perro) => {
      const perroHTML = `
        <div>
          <h3>${perro.nombre} ${perro.apellido}</h3>
          <p>Raza: ${perro.raza}</p>
          <p>Teléfono: ${perro.telefono}</p>
          <p>País: ${perro.pais}</p>
          <img src="${perro.foto}" alt="Foto del perro">
          <p>Descripción: ${perro.descripcion}</p>
        </div>
      `;

      contenedorPerros.innerHTML += perroHTML;
    });
  } catch (error) {
    console.log(error);
  }
}

function obtenerPerros() {
  return new Promise((resolve, reject) => {
    const perrosGuardados = localStorage.getItem("perros");
    if (perrosGuardados) {
      resolve(JSON.parse(perrosGuardados));
    } else {
      reject(new Error("No se encontraron perros almacenados."));
    }
  });
}
