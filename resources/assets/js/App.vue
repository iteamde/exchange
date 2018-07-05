<template>
    <div>
        <Header/>
        <NavBar/>
        <i class="fa fa-bars text-white"></i>
        <div class="d-flex align-items-center p-2">
            <CurrencyBar
                v-for="pair in pairRates"
                :key="pair.timestamp">
            </CurrencyBar>
        </div>
        <Exchange></Exchange>
        <div class="m-auto">
            <CurrencyDelivery></CurrencyDelivery>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Header from './components/TheHeader.vue'
    import Footer from './components/TheFooter.vue'
    import CurrencyBar from './components/CurrencyBar.vue'
    import Exchange from './components/Exchange.vue'
    import CurrencyDelivery from './components/CurrencyDelivery.vue'
    import {CurrencyService} from './common/apiService'
    import NavBar from './components/TheNavBar.vue'

    //import {rates} from './pair-rates'


    export default {
        name: 'App',
        components: {
            Header,
            CurrencyBar,
            Exchange,
            CurrencyDelivery,
            Footer,
            NavBar
        },
        computed: {
            pairRates () {
                /*CurrencyService.getLatestPairRates('GBP')*/
                //return rates;
            }
        },
        mounted () {
            console.log('app mounted');
        }
    }
</script>

<style></style>
