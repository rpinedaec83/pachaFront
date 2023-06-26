<template>
    <div v-if="videos.length > 0">
        <h1 class="pb-5">Lista de videos</h1>
        <div class="row gy-4 pb-5">
            <div v-for="video in videos" :key="video.id" class="col-md-6 col-lg-3">
                <div class="card">
                    <div>
                        <div class="d-flex justify-content-between">
                            <div
                                class="cursor-pointer mt-3 ms-3 p-1 d-flex flex-column align-items-center position-absolute top-0 start-0 button_editarEliminar">
                                <img src="../../../assets/svg/pen.svg" width="20" alt="">
                            </div>
                            <div
                                class="cursor-pointer mt-3 me-3 p-1 d-flex flex-column align-items-center position-absolute top-0 end-0 button_editarEliminar">
                                <img src="../../../assets/svg/x.svg" width="20" alt="">
                            </div>
                        </div>
                        <iframe width="100%" height="100%" :src="$buildYoutubeURL(video.urlVideo)" frameborder="0"></iframe>
                    </div>
                    <div class="card-body text-start d-flex flex-column">
                        <h5 class="card-title">{{ video.titulo }}</h5>
                        <h6>{{ video.visualizaciones }} visualizaciones</h6>
                        <p>{{ video.descripcion }}</p>
                        <button type="button" class="btn btn-success" @click="redirigirDetalleVideo(video.id)">Ver
                            detalle</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//import YouTube from 'vue3-youtube'
export default {
    name: "ListaVideoPage",
    components: {
        //YouTube
    },
    props: {
        videos: {
            type: Array,
            required: true
        }
    },
    data() {
        return {

        }
    },
    methods: {
        onReady() {
            this.$refs.youtube.playVideo();
        },
        redirigirDetalleVideo(id) {
            this.$redirectPagination(this.$router, 'detalleVideo', { id });
        }
    }
}
</script>
<style lang="scss" scoped></style>