<template>
  <section class="modalDelete">
    <form action="#" class="modalDelete__form">
      <div class="form__title">
        <h4>Eliminar video</h4>
        <img src="../assets/close.svg" alt="close" @click="closeModal">
      </div>
      <p class="form__question">¿Estas seguro que quieres eliminar este video?</p>
      <div class="form___buttonsContainer">
        <button type="button" class="btnDelete" @click="acceptModal">Eliminar</button>
        <button type="button" class="btnCancel" @click="closeModal">Cancelar</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['closeModal', 'acceptModal'],
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    acceptModal() {
      this.$emit('acceptModal');
    }
  }
};
</script>

<style scoped>
.modalDelete {
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
}

.modalDelete__form {
  background-color: #fff;
  width: 100%;
  max-width: 532px;
  padding: 20px 20px 50px;
  border: 1px solid #ABABAB;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}

.form__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #A0A0A0;
}

.form__title h4 {
  color: #000;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 700;
}

.form__title img {
  width: 12px;
  height: 26px;
  cursor: pointer;
}

.form__question {
  color: #808080;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  margin-bottom: 35px;
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

.btnDelete {
  background: #FF5252;
  color: #fff;
}

.btnCancel {
  background: #C4C4C4;
  color: #000;
}
</style>
