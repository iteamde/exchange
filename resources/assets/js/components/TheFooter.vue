<template>
    <div class="footer">
        <div class="content-container row d-flex justify-content-between">
            <div class="col-lg-2 col-md-2 col-12 order-1">
                <div class="logo-container"></div>
                <div class="social d-inline-flex">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fa fa-rss"></i>
                    <i class="fa fa-envelope"></i>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 order-3 nav">
                <div class="none-sm">
                    <NavBar></NavBar>
                    <ul class="info-navbar">
                        <li><a href="">Contact</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Legal Disclaimer</a></li>
                        <li><a href="">Terms</a></li>
                    </ul>
                </div>
                <div class="d-flex show-sm footer-nav-sm">
                    <div class="col-6">
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
                    <div class="col-7">
                        <ul class="info-navbar">
                            <li><a href="">Contact</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Legal Disclaimer</a></li>
                            <li><a href="">Terms</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-12 order-2 d-flex flex-column align-items-end select-language">
                <select type="text" class="form-control with-dd lang-dd">
                    <option value="eng">ENG</option>
                </select>
                <div class="copyrights none-sm">Copyright © 2016-2018  Exchange Rates UK</div>
            </div>
        </div>
        <div class="copyrights hide-lg">Copyright © 2016-2018  Exchange Rates UK</div>
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
