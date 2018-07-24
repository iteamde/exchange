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
        <div id="chartjs-tooltip"></div>

        <TabHistoryTable v-if="dataIsLoad" :dataRates="dataForTable"></TabHistoryTable>
    </div>
</template>

<script>
    import LineChartHistory from './LineChartHistory.vue'
    import TabHistoryTable from './tabHistroryTable.vue'

    export default {
        name: 'TabHistory',
        components: {
            LineChartHistory,
            TabHistoryTable
        },
        data() {
            return {
                activeBtn: 'btn1',
                datacollection: null,
                dataForTable: null,
                dataIsLoad: false,
                options: {}
            }
        },
        mounted() {
            console.log('Component chartHistory mounted.');
            //--- style for line 
            /**/ var ctx = document.getElementById('line-chart').getContext("2d");
            /**/ this.gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            /**/ this.gradientStroke.addColorStop(0, '#365381');

            /**/ this.gradientStroke.addColorStop(1, '#1db1e5');
            // --------------------------------------
            this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/GBP/EUR/history?mindate=2017-10-23\&maxdate=2017-10-30');
            //options for chart
            this.options =  {
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
                },
                tooltips: {
                    enabled: false,
                    mode: 'index',
                    position: 'nearest',
                    custom: function(tooltip) {
            			// Tooltip Element
                        var tooltipEl = document.getElementById('chartjs-tooltip');
                        tooltipEl.remove();

                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        tooltipEl.innerHTML = '<table></table>';
                        this._chart.canvas.parentNode.appendChild(tooltipEl);
                        
                        // Hide if no tooltip
                        if (tooltip.opacity === 0) {
                            tooltipEl.style.opacity = 0;
                            return;
                        }

                        // Set caret Position
                        tooltipEl.classList.remove('above', 'below', 'no-transform');
                        if (tooltip.yAlign) {
                            tooltipEl.classList.add(tooltip.yAlign);
                        } else {
                            tooltipEl.classList.add('no-transform');
                        }

                        function getBody(bodyItem) {
                            return bodyItem.lines;
                        }

                        // Set Text
                        if (tooltip.body) {
                            var titleLines = tooltip.title || [];
                            var bodyLines = tooltip.body.map(getBody);

                            var innerHtml = '<thead>';

                            bodyLines.forEach(function(body) {
                                let text = body[0].match(/(?<=^| )\d+(\.\d+)?(?=$| )/)[0];
                                innerHtml += '<tr><th>' + text +'</th></tr>';
                            });
                            innerHtml += '</thead><tbody>';

                            titleLines.forEach(function(title, i) {
                                innerHtml += '<tr><td class="bottom">' + title + '</td></tr>';
                            });
                            innerHtml += '</tbody>';

                            var tableRoot = tooltipEl.querySelector('table');
                            tableRoot.innerHTML = innerHtml;
                        }

                        var positionY = this._chart.canvas.offsetTop;
                        var positionX = this._chart.canvas.offsetLeft;

                        // get size of tooltipEl
                        var tooltipElWidth = tooltipEl.offsetWidth / 2;

                        // Display, position, and set styles for font
                        tooltipEl.style.opacity = 1;
                        tooltipEl.style.left = positionX + tooltip.caretX + tooltipElWidth + 'px';
                        tooltipEl.style.top = positionY + tooltip.caretY + 'px';
                        tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
                        tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
                        tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
                        tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
                    }
                }
        }
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
            getFullDate(timestamp){
                let fullDate, date = new Date(timestamp*1000);
                fullDate = "" + this.getNameOfDay(date.getDay()) + " " + date.getDay() + " ";
                fullDate += this.getNameOfMounth(date.getMonth()) + " " + date.getFullYear();
                return fullDate;
            },
            getDataForChart: function(data){
                if(!data){
                    return
                }
                var valueForChart = [];
                for(let i = 0; i < data.history.length; i++){
                     valueForChart.push(data.history[i].value);
                }
                return valueForChart;
            },
            getNameOfDay(index){
                let date = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                return date[index]
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
                this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/GBP/EUR/history?mindate=2017-10-23\&maxdate=2017-10-30');
            },
            getDateForMonth(){
                this.activeBtn = 'btn2';
                this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/GBP/EUR/history?mindate=2017-10-1&maxdate=2017-10-30');
            },
            getDateForThreeMonth(){
                this.activeBtn = 'btn3';
                this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/GBP/EUR/history?mindate=2017-7-1&maxdate=2017-10-30');
            },
            getDateForSixMonth(){
                this.activeBtn = 'btn4';
                this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/GBP/EUR/history?mindate=2017-4-1&maxdate=2017-10-30');
            },
            getDateForNineMonth(){
                this.activeBtn = 'btn5';
                this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/GBP/EUR/history?mindate=2017-2-1&maxdate=2017-10-30');
            },
            getDateForTheYear(){
                this.activeBtn = 'btn6';
                this.requestDataForTheChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/GBP/EUR/history?mindate=2016-10-1&maxdate=2017-10-30');
            },
            requestDataForTheChart(url){
                fetch(url, {method: 'GET'})
                .then((response) => {
                    return response.json().then((json) => {
                        // console.log(json);
                        this.getDataForTables(json);
                        this.datacollection = {
                            labels: this.getDateForChart(json),
                            datasets: [
                                {
                                label: 'Rates',
                                // fontColor: "#666",
                                lineTension: 0,
                                pointRadius: 0,
                                fill: false,
                                borderColor: this.gradientStroke,
                                pointHoverRadius: 6,
                                pointBackgroundColor: "rgb(55, 81, 126)",
                                pointBorderColor: "rgb(255, 255, 255)",
                                pointBorderWidth: 3,
                                data: this.getDataForChart(json)
                                }
                            ]
                        };
                        this.dataIsLoad = true;
                    })
                }).catch(function(error){
                    this.dataIsLoad = false;
                    console.log(error);
                });
            },
            getDataForTables(data){
                this.dataForTable = [];
                
                for(let i = 0; i < data.history.length; i++){
                    this.dataForTable.push({
                        fullDate: this.getFullDate(data.history[i].timestamp),
                        rates: "1 " + "GBP" + " = " + data.history[i].value + " EUR"
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../sass/TabHistory.scss";
</style>
