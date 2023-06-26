<template>
    <header>
        <div class="header-nav d-flex justify-content-between align-items-center">
            <h2 class="ms-4 header-nav_Titulo">{{ titulo }}</h2>
            <div v-if="showHeader" class="me-4 cursor-pointer" @click="$redirectPagination($router, 'crearVideo');">
                <h6>Agregar video</h6>
            </div>
        </div>
    </header>
</template>
<script lang="js">
export default {
    name: 'HeaderView',
    props: {
        titulo: String,
        showHeader: Boolean,
    }
}
</script>
<style lang="scss"></style>