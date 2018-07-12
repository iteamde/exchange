<template>
    <ul class="nav nav-tabs">
        <li class="nav-item" v-on:click="tab = 0" >
            <a class="nav-link" v-bind:class="{active: tab == 0}">
                Today
                <i class="fa fa-chevron-up"></i>
                <i class="fa fa-chevron-down"></i>
            </a>
        </li>
        <li class="nav-item" v-on:click="tab = 1">
            <a class="nav-link" v-bind:class="{active: tab == 1}">
                History
                <i class="fa fa-chevron-up"></i>
                <i class="fa fa-chevron-down"></i>
            </a>
        </li>
        <li class="nav-item" v-on:click="tab = 2">
            <a class="nav-link" v-bind:class="{active: tab == 2}">
                Best Rates
                <i class="fa fa-chevron-up"></i>
                <i class="fa fa-chevron-down"></i>
            </a>
        </li>

        <div class="text-center tab-content" v-if="tab == 0">
            <p class="text">Exchange Rate Today for EUR to GBP. Below you can see the chart for the Pound rate today compared to the Euro.</p>
            <LineChart></LineChart>
        </div>

        <div class="text-center tab-content" v-if="tab == 1">
            <p class="text">The best GBP to EUR rate over a historical period can be determined using the history chart and prices below:</p>
            <LineChartHistory></LineChartHistory>
        </div>


        <div class="text-center w-100" v-if="tab == 2">
            <p class="text">Compare Travel Money: Best EUR Tourist Exchange Rates</p>
            <h4>Today's best UK deal for £500 will get you 564.25 EUR plus delivery.</h4>
            <h6 class="sub-text">Check the table of travel money rates below to see the most competitive deals.</h6>

            <CurrencyDelivery></CurrencyDelivery>

            <a class="link" href="">Click here to see full best rates</a>
        </div>

        <div id="chartjs-tooltip"></div>
    </ul>
</template>

<script>
    import CurrencyDelivery from './CurrencyDelivery.vue'
    import LineChart from './LineChart.vue'
    import LineChartHistory from './LineChartHistory.vue'

    export default {
        name: 'Tabs',
        components: {
            CurrencyDelivery,
            LineChart,
            LineChartHistory
        },
        data() {
            return {tab: 0}
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/tabs.scss";
</style>
