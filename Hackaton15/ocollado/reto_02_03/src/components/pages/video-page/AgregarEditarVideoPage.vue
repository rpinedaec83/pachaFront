<template>
    <div class="container mt-5">
        <form @submit.prevent="enviarFormulario">
            <h1>{{ titleName }}</h1>
            <hr class="mt-1 mb-1" />
            <div class="row gy-4 pb-5">
                <div class="col-6">
                    <input type="text" class="form-control" v-model="video.titulo" required>
                </div>
                <div class="col-6">
                    <input type="text" class="form-control" v-model="video.urlVideo" required>
                </div>
                <div class="col-12">
                    <textarea class="form-control" v-model="video.descripcion" rows="3" placeholder="Descripcion"
                        required></textarea>
                </div>
            </div>
            <div class="d-flex justify-content-evenly align-items-center">
                <button type="submit" class="button_modal">Agregar</button>
                <button type="button" class="button_modal">Cancelar</button>
            </div>
        </form>
    </div>
</template>
<script lang="js">
export default {
    name: "AgregarEditarVideoPage",
    data() {
        return {
            routeName: '',
            titleName: '',
            buttonName: '',
            video: {
                titulo: '',
                urlVideo: '',
                descripcion: ''
            }
        }
    },
    methods: {
        enviarFormulario() {
            switch (this.routeName) {
                case 'crearVideo':
                    break;
                case 'editarVideo':
                    break;
            }
            this.$redirectPagination(this.$router, 'home');
        }
    },
    mounted() {
        this.routeName = this.$route.name;
        switch (this.routeName) {
            case 'crearVideo':
                this.titleName = 'Agregar video'
                this.buttonName = 'Agregar'
                break;
            case 'editarVideo':
                this.titleName = 'Editar video'
                this.buttonName = 'Editar'
                break;
        }
    }
}
</script>
<style lang="scss"></style>