<template>
    <div class="currency-bar rate-up">
        <div class="currency-compare">
            {{pair.iso}} / {{pair.iso2}}
            <i class="fa fa-caret-up"></i>
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <div class="currency-rate">
                {{pair.value}}
            </div>
            <div class="currency-change">
                <span class="rate-change">{{pair.diff}}</span>
                <br>
                <span class="rate-change">{{pair.diffp}} %</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CurrencyBar',
        props: {
            pair: {type: Object, required: true}
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/currency-bar.scss";
</style>
