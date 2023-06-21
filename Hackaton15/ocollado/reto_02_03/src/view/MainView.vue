<template>
    <main>
        <div class="container mt-4">
            <div v-if="videos.length === 0" class="d-flex justify-content-center align-items-center">
                <button @click="() => $emit('redirect', 'agregar')" id="btnAgregarVideo" type="button"
                    class="button_agregarVideo">Agregar video</button>
            </div>
            <lista-video-page :videos="videos"/>
        </div>
    </main>
</template>
<script>
import ListaVideoPage from '../components/pages/video-page/ListaVideoPage.vue';
export default {
    name: 'MainView',
    components: {
        ListaVideoPage,
    },
    data() {
        return {
            videos: [
                {
                    id: 1,
                    titulo: 'BOHEMIAN RHAPSDOSADSA',
                    urlVideo: '8z6wJHPhJUM',
                    descripcion: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mag meaning',
                    visualizaciones: 5
                },
                {
                    id: 2,
                    titulo: 'BOHEMIAN RHAPSDOSADSA',
                    urlVideo: '8z6wJHPhJUM',
                    descripcion: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mag meaning',
                    visualizaciones: 5
                },
                {
                    id: 3,
                    titulo: 'BOHEMIAN RHAPSDOSADSA',
                    urlVideo: '8z6wJHPhJUM',
                    descripcion: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mag meaning',
                    visualizaciones: 5
                },
                {
                    id: 4,
                    titulo: 'BOHEMIAN RHAPSDOSADSA',
                    urlVideo: '8z6wJHPhJUM',
                    descripcion: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mag meaning',
                    visualizaciones: 5
                },
                {
                    id: 5,
                    titulo: 'BOHEMIAN RHAPSDOSADSA',
                    urlVideo: '8z6wJHPhJUM',
                    descripcion: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mag meaning',
                    visualizaciones: 5
                },
                {
                    id: 6,
                    titulo: 'BOHEMIAN RHAPSDOSADSA',
                    urlVideo: '8z6wJHPhJUM',
                    descripcion: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mag meaning',
                    visualizaciones: 5
                }
            ]
        }
    },
    watch: {
        videos: function() {
            this.emitirVideos();
        }
    },
    methods: {
        emitirVideos() {
            this.$emit('watch-videos', this.videos.length > 0);
        }
    },
    mounted() {
        this.emitirVideos();
    }
}
</script>
<style lang="">
    
</style>