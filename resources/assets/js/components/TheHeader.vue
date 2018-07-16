<template>
    <div class="row header">
        <div class="col-sm-12 d-flex align-items-center justify-content-between content-container hr">
            <i class="fa fa-bars text-white btn-menu" @click="showNavbar"></i>
            <div class="logo-container"></div>
            <div class="social d-flex none-sm">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fa fa-rss"></i>
                <i class="fa fa-envelope"></i>
                <div class="social-count d-flex flex-column">
                    <span>106</span>
                    <span>shares</span>
                </div>
            </div>

            <div class="search-bar d-flex align-items-center">
                <i class="fa fa-search"></i>
                <input class="form-control none-sm" type="text" placeholder="Search">
            </div>

            <div class="d-flex">
                <div class="saves">
                    <i class="fa fa-star"></i>
                    <span class="none-sm">Saves</span>
                </div>
                <div class="account">
                    <i class="fa fa-user"></i>
                    <span class="none-sm">Account</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            showNavbar: function() {
                document.getElementById('navbarNav').classList.toggle('hide-navbar');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/header.scss";
</style>
