<template>
    <div class="row footer d-flex">
        <div class="d-inline-flex flex-column">
            <div class="logo-container"></div>
            <div class="social d-inline-flex">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fa fa-rss"></i>
                <i class="fa fa-envelope"></i>
            </div>
        </div>
        <NavBar></NavBar>
    </div>
</template>

<script>

    import NavBar from './TheNavBar.vue'

    export default {
        name: 'Footer',
        components: {
            NavBar
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/footer.scss";
</style>
