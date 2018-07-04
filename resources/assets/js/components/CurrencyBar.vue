<template>
    <div class="currency-bar rate-up">
        <div class="currency-compare">
            GBP / HNL
            <i class="fa fa-caret-up"></i>
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <div class="currency-rate">
                1686.10151
            </div>
            <div class="currency-change">
                <span class="rate-change">0.1</span>
                <br>
                <span class="rate-change">0.24 %</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CurrencyBar',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/currency-bar.scss";
</style>
