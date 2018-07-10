<template>
    <div class="footer">
        <div class="content-container row d-flex justify-content-between">
            <div class="col-lg-2 col-md-2">
                <div class="logo-container"></div>
                <div class="social d-inline-flex">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fa fa-rss"></i>
                    <i class="fa fa-envelope"></i>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <NavBar></NavBar>
                <ul class="info-navbar">
                    <li><a href="">Contact</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Legal Disclaimer</a></li>
                    <li><a href="">Terms</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 order-sm-2 d-flex flex-column align-items-end">
                <input type="text" class="form-control with-dd lang-dd">
                <div class="copyrights">Copyright © 2016-2018  Exchange Rates UK</div>
            </div>
        </div>
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
