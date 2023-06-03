class Modal {

    constructor() {
      this.modal = document.getElementById('myModal');
      this.openBtn = document.getElementById('openModalBtn');
      this.acceptBtn = document.getElementById('acceptBtn');
      this.cancelBtn = document.getElementById('cancelBtn');
  
      this.openBtn.addEventListener('click', this.openModal.bind(this));
      this.acceptBtn.addEventListener('click', this.accept.bind(this));
      this.cancelBtn.addEventListener('click', this.cancel.bind(this));
      window.addEventListener("click", this.closeModal.bind(this));

    }
  
    openModal() {
      this.modal.style.display = 'block';
    }

    closeModal(event) {
        if (event.target == this.modal) {
            this.modal.style.display = "none";
        }
    };
  
    accept() {
      console.log('Botón Aceptar presionado');
    }
  
    cancel() {
      console.log('Botón Cancelar presionado');
      this.modal.style.display = 'none';
    }
}

const modal = new Modal();