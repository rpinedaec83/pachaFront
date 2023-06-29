const d=document;
const lista = d.getElementById("listaVideos");
const formulario = d.getElementById("formularioVideo");
const tituloFormulario = d.getElementById("tituloFormulario");
const template=d.getElementById("crud-template").content; //no entiendo bien porque el content
const fragment=d.createDocumentFragment();

const openBtn=d.getElementById("openModalBtn");

const getAll = async() => {
    try{
        let res=await fetch("http://localhost:3000/videos"),
        json= await res.json();

        if(!res.ok) throw{ status:res.status, statusText: res.statusText};

        console.log(json);
        if(json.length === 0) {
            document.getElementById("principal").classList.remove("oculto");
            document.getElementById("pachaTube").classList.add("oculto");
            document.getElementById("openModalBtn2").classList.add("oculto");
        }
        else{
            document.getElementById("principal").classList.add("oculto");
            document.getElementById("pachaTube").classList.remove("oculto");
            document.getElementById("openModalBtn2").classList.remove("oculto");
        }

        json.forEach(el => {
            template.querySelector(".titulillo").innerText=el.titulo;
            template.querySelector(".urlillo").src=el.url;
            template.querySelector(".descripciencillo").innerText=el.descripcion;

            template.querySelector(".btn-editar").dataset.id=el.id;
            template.querySelector(".btn-editar").dataset.titulo=el.titulo;
            template.querySelector(".btn-editar").dataset.url=el.url;
            template.querySelector(".btn-editar").dataset.descripcion=el.descripcion;
            template.querySelector(".btn-eliminar").dataset.id=el.id;

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

d.addEventListener("submit", async e=>{
    if(e.target===formulario){
        e.preventDefault();

        if(!e.target.id.value ){
            //CREATE POST
            try{
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    },
                    body:JSON.stringify({
                        titulo: e.target.tituloVideo.value,
                        url: e.target.urlVideo.value,
                        descripcion: e.target.descripcionVideo.value
                    })    
                },
                    res= await fetch("http://localhost:3000/videos", options),
                    json= await res.json();                  

                    if(!res.ok) throw{ status:res.status, statusText: res.statusText};

                    modal.closeModal(); 
                    location.reload(); 

            } catch(err){
                let message = err.statusText || "Ocurrio un error";
                formulario.insertAdjacentHTML("afterend", `<p><b> Error ${err.status}: ${message}</b></p>`);
            }
        }
        else {
            //update por PUT
            try{
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    },
                    body:JSON.stringify({
                        titulo: e.target.tituloVideo.value,
                        url: e.target.urlVideo.value,
                        descripcion: e.target.descripcionVideo.value
                    })    
                },
                    res= await fetch(`http://localhost:3000/videos/${e.target.id.value}`, options),
                    json= await res.json();                

                    if(!res.ok) throw{ status:res.status, statusText: res.statusText};

                    modal.closeModal(); 
                    location.reload();

            } catch(err){
                let message = err.statusText || "Ocurrio un error";
                formulario.insertAdjacentHTML("afterend", `<p><b> Error ${err.status}: ${message}</b></p>`);
            }
        }
    }
})

d.addEventListener("click", e =>{
    if(e.target.matches(".btn-editar")){

        modal.openModal();

        tituloFormulario.textContent="Editar Video";
        formulario.titulo.value=e.target.dataset.titulo;
        formulario.url.value=e.target.dataset.url;
        formulario.descripcion.value=e.target.dataset.descripcion;;
        formulario.id.value = e.target.dataset.id;
    }

    if(e.target.matches(".btn-eliminar")){

        modal2.openModal();
        const elemento=`${e.target.dataset.id}`;
        //let isDelete=confirm(`¿Estas seguro de eliminar el id ${e.target.dataset.id}?`);

    
        d.addEventListener("click",async e =>{
            if(e.target.matches(".aceptar-eliminar")){
                //DELETE
                try{
                    let options = {
                        method: "DELETE",
                        headers: {
                            "Content-type":"application/json; charset=utf-8"
                        },
                        },
                        res= await fetch(`http://localhost:3000/videos/${elemento}`, options),
                        json= await res.json();  
                    
                        modal2.closeModal();

                        if(!res.ok) throw{ status:res.status, statusText: res.statusText};
                        location.reload();

                    } catch(err){
                        let message = err.statusText || "Ocurrio un error";
                        alert(`Error ${err.status}: ${message}`);
                }
            }
        })
    }
})

//OBJETO MODAL
class Modal {

    constructor(idModal, classBtnModal, idAcceptBtn, idCancelBtn) {
      this.modal = document.getElementById(idModal);
      this.openBtn = document.querySelectorAll(classBtnModal);
      this.acceptBtn = document.getElementById(idAcceptBtn);
      this.cancelBtn = document.getElementById(idCancelBtn);
  
      this.addCloseEventListener(idModal, idCancelBtn);
      this.addOpenEventListener();
    }
    
      openModal() {
          this.modal.classList.remove("oculto");
      }
  
      closeModal() {
          this.modal.classList.add("oculto");
      };
  
      addCloseEventListener = (idModal, idCancelBtn) => {
          this.modal.addEventListener("click",(e) => {
              if (e.target.id === idCancelBtn || e.target.id === idModal){
                  this.closeModal();
              }
          })
      }
  
      addOpenEventListener = () => {
          this.openBtn.forEach(b => {
              b.addEventListener("click", () => {
                  this.openModal();
                  console.log("me hicieron click");
              })
          })
      }
  }
  
  const modal = new Modal("myModal", ".openModalBtn", "acceptBtn", "cancelBtn");
  //const modalConfirmacion = new Modal2();
  const modal2 = new Modal("myModal2", ".btn-eliminar", "modal2AceptarBtn", "modal2CancelarBtn");