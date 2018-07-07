<template>
    <div class="row exchange-section">
        <div class="col-sm-12 d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column">
                <span class="sup-text">From</span>
                <input type="text" class="form-control">
            </div>

            <input type="text" class="form-control with-dd">
            <div class="sync">
                <i class="fa fa-sync"></i>
            </div>
            <div class="d-flex flex-column position-relative">
                <span class="sup-text">To</span>
                <input type="text" class="form-control to">
            </div>
            <input type="text" class="form-control with-dd">
            <a href="#"><&#47;> Add to Site</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheExchangeBar',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/exchange.scss";
</style>
