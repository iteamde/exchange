<template>
    <div>
        <p class="text">The best GBP to EUR rate over a historical period can be determined using the history chart and prices below:</p>

        <div class="chart-canvas-wrapper">
            <line-chart-history :chart-data="datacollection" :options="options"></line-chart-history>
        </div>

        <div class="chart-controls">
            <button class="chart-btn-control" :class="{active: activeBtn === 'btn1'}" v-on:click="getDataForSevenDays()"> <span>7</span>D</button>
            <button class="chart-btn-control" :class="{active: activeBtn === 'btn2'}" v-on:click="getDateForMonth()"><span>1</span>M</button>
            <button class="chart-btn-control" :class="{active: activeBtn === 'btn3'}" v-on:click="getDateForThreeMonth()"><span>3</span>M</button>
            <button class="chart-btn-control" :class="{active: activeBtn === 'btn4'}" v-on:click="getDateForSixMonth()"><span>6</span>M</button>
            <button class="chart-btn-control" :class="{active: activeBtn === 'btn5'}" v-on:click="getDateForNineMonth()"><span>9</span>M</button>
            <button class="chart-btn-control" :class="{active: activeBtn === 'btn6'}" v-on:click="getDateForTheYear()"><span>1</span>Y</button>
        </div>

        <div class="row contact-nav">
            <div class="col-6 col-sm-6 col-md-4 col-lg-6">
                <button class="btn btn-embed">
                    Embed
                </button>
                <button class="btn btn-print">
                    <i class="fas fa-print"></i> print
                </button>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-6 d-flex flex-row-reverse">
                <button class="btn btn-w">
                    <i class="fas fa-wifi"></i>
                </button>
                           <button class="btn btn-t">
                    <i class="fab fa-twitter"></i>
                </button>
                <button class="btn btn-f">
                    <i class="fab fa-facebook-f"></i>
                </button>
                <span class="none-sm">Share</span>
            </div>
        </div>
    </div>
</template>

<script>
    import LineChartHistory from './LineChartHistory.vue'

    export default {
        name: 'TabHistory',
        components: {
            LineChartHistory
        },
        data() {
            return {
                activeBtn: 'btn1',
                datacollection: null,
                options: {
                        legend: {
                        display: false
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales:{
                        xAxes:[{
                            gridLines: {
                                display: false
                            }
                        }]
                    }
                }
            }
        },
        mounted() {
            console.log('Component chartHistory mounted.');
            //--- style for line 
            /**/ var ctx = document.getElementById('line-chart').getContext("2d");
            /**/ var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            /**/ gradientStroke.addColorStop(0, '#365381');

            /**/gradientStroke.addColorStop(1, '#1db1e5');
            // --------------------------------------
            this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/USD/GBP/history?mindate=2017-10-23\&maxdate=2017-10-30');
            //options for chart
        },
        methods: {
            getDateForChart(data){
                if(!data){
                    return;
                }
                var dateArray = [];
                for(let i = 0; i < data.history.length; i++){
                     dateArray.push(this.getDate(data.history[i].timestamp));
                }
                return dateArray;
                
            },
            getDate (timestamp){
                var dateString = "";
                var date = new Date(timestamp*1000);

                dateString = date.getDate() + " " + this.getNameOfMounth(date.getMonth());
                return dateString;
            },
            getDataForChart: function(data){
                if(!data){
                    return
                }
                var valueForChart = [];
                for(let i = 0; i < data.history.length; i++){
                    // this.dataForDatasetChart.push(data.history[i].value);
                     valueForChart.push(data.history[i].value);
                }
                return valueForChart;
                // console.log('value')
                // console.log(this.valueForChart);
            },
            getNameOfMounth(index){
                switch (index) {
                    case 0:
                        return 'January'
                        break;
                    case 1:
                        return 'February'
                        break;
                    case 2:
                        return 'March'
                        break;
                    case 3:
                        return 'April'
                        break;
                    case 4:
                        return 'May'
                        break;
                    case 5:
                        return 'June'
                        break;
                    case 6:
                        return 'July'
                        break;
                    case 7:
                        return 'August'
                        break;
                    case 8:
                        return 'September'
                        break;
                    case 9:
                        return 'October'
                        break;
                    case 10:
                        return 'November'
                        break;
                    case 11:
                        return 'December'
                        break;
                    default:
                        break;
                }
            },
            getDataForSevenDays(){
                this.activeBtn = 'btn1';
                this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/USD/GBP/history?mindate=2017-10-23\&maxdate=2017-10-30');
            },
            getDateForMonth(){
                this.activeBtn = 'btn2';
                this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/USD/GBP/history?mindate=2017-10-1&maxdate=2017-10-30');
            },
            getDateForThreeMonth(){
                this.activeBtn = 'btn3';
                this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/USD/GBP/history?mindate=2017-7-1&maxdate=2017-10-30');
            },
            getDateForSixMonth(){
                this.activeBtn = 'btn4';
                this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/USD/GBP/history?mindate=2017-4-1&maxdate=2017-10-30');
            },
            getDateForNineMonth(){
                this.activeBtn = 'btn5';
                this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/USD/GBP/history?mindate=2017-2-1&maxdate=2017-10-30');
            },
            getDateForTheYear(){
                this.activeBtn = 'btn6';
                this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/USD/GBP/history?mindate=2016-10-1&maxdate=2017-10-30');
            },
            requestDataForTheChart(url){
                //--- style for line 
                /**/ var ctx = document.getElementById('line-chart').getContext("2d");
                /**/ var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
                /**/ gradientStroke.addColorStop(0, '#365381');
                /**/gradientStroke.addColorStop(1, '#1db1e5');
                // --------------------------------------
                fetch(url, {method: 'GET'})
                .then((response) => {
                    return response.json().then((json) => {
                        this.datacollection = {
                            labels: this.getDateForChart(json),
                            datasets: [
                                {
                                label: 'Rates',
                                // fontColor: "#666",
                                lineTension: 0,
                                pointRadius: 0,
                                fill: false,
                                borderColor: gradientStroke,
                                pointBackgroundColor: gradientStroke,
                                data: this.getDataForChart(json)
                                }
                            ]
                        }
                    })
                }).catch(function(error){
                    console.log('There has been a problem with TabHistory fetch operation: ' + error.message);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../sass/TabHistory.scss";
</style>
