<template>
    <div>
        <Header/>
        <div class="hr-nav head - nav"></div>
        <NavBar/>
        <div class="d-flex align-items-center p-2">
            <CurrencyBar
                v-for="pair in pairRates"
                :key="pair.timestamp">
            </CurrencyBar>
        </div>
        <div class="row m-0">
            <div class="content-container">
                <div class="col-sm-12 with-container">
                    <div class="breadcrumbs d-flex align-items-center">
                        <i class="fa fa-home"></i>
                        <i class="fa fa-chevron-right"></i>
                        <span>Currency Exchange Rates</span>
                        <i class="fa fa-chevron-right"></i>
                        <span>Pounds to Euros</span>
                    </div>
                    <h3 class="hhh">Best Pound to Euro Exchange Rate (GBP/EUR) Today <span>1GBP = 1.1560 EUR</span></h3>
                    <h6 class="sub-text">Updated every minute between Sunday 22:00 and Friday 22:00 (UK)</h6>
                    <p class="text">This Pound to Euro conversion tool allows you to compare the live inter-bank currency rate with competitive travel money
                    exchange rates available within the foreign exchange markets. Sign up for <a class="link" href="#">free exchange rate alerts</a> or just get
                    <a class="link" href="#">daily/weekly rates and news</a> to your inbox? Compare the best travel money rates against the high street below.</p>
                </div>
            </div>
        </div>

        <div class="content-container">
            <ExchangeBar></ExchangeBar>
        </div>

        <div class="row main-section content-container">
            <div class="col-sm-12">
                <i class="fa fa-bars position-absolute"></i>
                <h3>Today's Pound to Euro Exchange Rate</h3>

                <h2 class="exchange-value">1 GBP = 1.1432 EUR</h2>
                <h6 class="sub-text">(1 EUR = 0.28900 GBP)</h6>
            </div>

            <div class="text-center w-100">
                <button class="btn btn-warning">Send Money</button>
                <button class="btn btn-info none-sm">Rate Alert</button>
                <button class="btn btn-info">Daily Rates Email</button>
            </div>

            <h6 class="sub-text text-center w-100 m-4">The EURGBP rate as of 29 Mar 2018 at 4:24 PM</h6>

            <Tabs></Tabs>

            <CurrencyList></CurrencyList>
        </div>
        <div class="m-auto">
            <!--<CurrencyDelivery></CurrencyDelivery>-->
        </div>
        
        <Footer/>
    </div>
</template>

<script>
    import Header from './components/TheHeader.vue'
    import Footer from './components/TheFooter.vue'
    import CurrencyBar from './components/CurrencyBar.vue'
    import ExchangeBar from './components/TheExchangeBar.vue'
    import {CurrencyService} from './common/apiService'
    import NavBar from './components/TheNavBar.vue'
    import Tabs from './components/TheTabs.vue'

    import CurrencyList from './components/CurrencyList.vue'

    //import {rates} from './pair-rates'


    export default {
        name: 'App',
        components: {
            Header,
            CurrencyBar,
            ExchangeBar,
            Footer,
            NavBar,
            Tabs,
            CurrencyList
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
