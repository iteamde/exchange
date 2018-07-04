<template>
    <div class="currency-delivery d-flex align-items-center justify-content-center">
        <div class="currency-delivery-block d-flex align-items-center">
            <img src="../../images/bestforeignexchange.png" alt="">
            <h4>Best Foreign Exchange</h4>
        </div>
        <div class="currency-delivery-block d-flex align-items-center flex-column">
            <h6 class="sub-text">Exchange Rate</h6>
            <h3>1.1432 EUR</h3>
            <span class="divider"></span>
        </div>
        <div class="currency-delivery-block d-flex align-items-center flex-column text-center">
            <h6 class="sub-text">Exchange Rate</h6>
            <h3 class="green">FREE</h3>
            <span class="divider"></span>
        </div>
        <div class="currency-delivery-block d-flex align-items-center flex-column">
            <h6 class="sub-text">500 in EUR*</h6>
            <h3>564.25 EUR</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CurrencyDelivery',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/currency-delivery.scss";
</style>
