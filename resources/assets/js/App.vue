<template>
    <div>
        <Header/>
        <NavBar/>
        <div class="d-flex align-items-center p-2 content-container none-sm" v-if="currencyRatio.success">
            <CurrencyBar
                v-for="(pair, index) in currencyRatio.rates.slice(0, 7)"
                :key="index" :pair = pair>
            </CurrencyBar>
            <div class="">
                <span @click="closeCyrrencyBar" class="currency-close-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="11" 
                        viewBox="0 0 11 11"><defs><path id="rpvaa" d="M1521.8 176.2c.2.2.2.5 0 .7l-4.6 4.6 4.6 4.6a.5.5 0 1 1-.7.7l-4.6-4.6-4.6 4.6a.5.5 0 0 1-.7-.7l4.6-4.6-4.6-4.6a.5.5 0 0 1 .7-.7l4.6 4.6 4.6-4.6c.2-.2.5-.2.7 0z"/>
                        </defs><g><g transform="translate(-1511 -176)"><use fill="#424449" xlink:href="#rpvaa"/></g></g>
                    </svg>
                </span>
            </div>
        </div>
        <div class="row m-0">
            <div class="content-container">
                <div class="col-sm-12 with-container">
                    <div class="breadcrumbs d-flex align-items-center none-sm">
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
            <i class="fa fa-bars position-absolute"></i>
            <div class="offset-sm-1 offset-md-0 col-10 col-lg-12 col-md-12 currency-panel">
                <h3 class="none-sm">Today's Pound to Euro Exchange Rate</h3>

                <h2 class="exchange-value">1 GBP = 1.1432 EUR</h2>
                <h6 class="sub-text">(1 EUR = 0.28900 GBP)</h6>
            </div>

            <div class="text-center w-100 btns-panel">
                <button class="btn btn-warning">Send Money</button>
                <button class="btn btn-info none-sm">Rate Alert</button>
                <button class="btn btn-info">Daily Rates Email</button>
            </div>

            <h6 class="sub-text text-center w-100 m-4">The EURGBP rate as of 29 Mar 2018 at 4:24 PM</h6>

            <Tabs></Tabs>

            <CurrencyList></CurrencyList>
        </div>
        <div class="m-auto">
            <!-- <CurrencyDelivery></CurrencyDelivery> -->
        </div>
            <CurrencyPages></CurrencyPages>
        
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
    import CurrencyPages from './components/CurrencyPages'

    import CurrencyList from './components/CurrencyList.vue'
    import axios from 'axios';

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
            CurrencyList,
            CurrencyPages
        },
        data() {
            return {
                currencyRatio: {
                    success: false,
                    rates: []
                }
            }
        },
        computed: {
            pairRates () {
                /*CurrencyService.getLatestPairRates('GBP')*/
                //return rates;
            }
        },
        mounted () {
            axios.get('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/GBP').then((response) => {
                console.log(response.data.success);
                this.currencyRatio.success = response.data.success;
                for(let i = 0; i<response.data.rates.length; i++){
                    this.currencyRatio.rates.push(response.data.rates[i]);
                }
            })
            console.log('app mounted');
        },
        methods: {
            closeCyrrencyBar(){
                this.currencyRatio.success = false;
            }
        }
    }
</script>

<style></style>
