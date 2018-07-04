<template>
    <div>
        <Header></Header>
        <div class="d-flex align-items-center p-2">
            <CurrencyBar></CurrencyBar>
        </div>
        <Exchange></Exchange>
        <div class="m-auto">
            <CurrencyDelivery></CurrencyDelivery>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import CurrencyBar from './components/CurrencyBar.vue'
    import Exchange from './components/Exchange.vue'
    import CurrencyDelivery from './components/CurrencyDelivery.vue'

    export default {
        name: 'App',
        components: {
            Header,
            CurrencyBar,
            Exchange,
            CurrencyDelivery
        },
        mounted () {
            console.log('app mounted');
        }
    }
</script>

<style></style>
