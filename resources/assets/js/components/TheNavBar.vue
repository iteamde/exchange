<template>
    <div class="row d-flex align-items-center justify-content-between main-navbar">
        <div class="content-container">
            <nav class="navbar navbar-expand-lg navbar-light" >
                <div class="navbar-collapse hide-navbar" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Currencies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Commodities</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Forex</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Widgets</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Help Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/navbar.scss";
</style>
