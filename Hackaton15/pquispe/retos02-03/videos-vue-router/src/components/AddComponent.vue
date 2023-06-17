<template>
  <main class="main">
    <form action="#" class="main__form">
      <h4 class="form__title">Agrear video</h4>
      <div class="form__inputsContainer">
        <input type="text" id="title" name="title" placeholder="Titulo" autocomplete="off" v-model="newVideo.title">
        <input type="text" id="url" name="url" placeholder="url-video" autocomplete="off" v-model="newVideo.url">
      </div>
      <textarea name="description" id="description" rows="6" placeholder="Descripcion" autocomplete="off" v-model="newVideo.description"></textarea>
      <div class="form___buttonsContainer">
        <button type="button" class="btnAdd" @click="postVideo">Agregar</button>
        <button type="button" class="btnCancel">Cancelar</button>
      </div>
    </form>
  </main>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'AddComponent',
  data() {
    return {
      newVideo: {
        title: '',
        url: '',
        description: '',
        views: 0
      }
    };
  },
  methods: {
    postVideo() {
      axios.post('http://localhost:3000/videos/', this.newVideo)
        .catch(error => {
          console.error(`Error al crear nuevo video: ${error}`);
        });
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 8.3rem);
}

.main__form {
  background-color: #fff;
  width: 100%;
  max-width: 625px;
  padding: 20px;
}

.form__title {
  color: #000;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #A0A0A0;
}

.form__inputsContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;
}

.form__inputsContainer input {
  width: 100%;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  padding: 13px;
  border: 1px solid #BCBCBC;
  outline: none;
}

.form__inputsContainer input:focus {
  border: 1px solid #00C1AA;
}

.main__form textarea {
  width: 100%;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  padding: 13px;
  margin-bottom: 30px;
  border: 1px solid #BCBCBC;
  outline: none;
  resize: none;
}

.main__form textarea:focus {
  border: 1px solid #00C1AA;
}

.form___buttonsContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}

.form___buttonsContainer button {
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  padding: 12px 35px;
  border: none;
  cursor: pointer;
}

.btnAdd {
  background: #FF5252;
  color: #fff;
}

.btnCancel {
  background: #C4C4C4;
  color: #000;
}

@media screen and (min-width: 600px) {
  .form__inputsContainer {
    flex-direction: row;
  }

  .form__inputsContainer input {
    width: 50%;
  }
}
</style>
