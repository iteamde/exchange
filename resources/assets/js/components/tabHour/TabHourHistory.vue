<template>
    <div>
        <div class="chart-canvas-wrapper">
            <line-chart-history :chart-data="datacollection" :options="options"></line-chart-history>
        </div>

        <div class="row contact-nav">
            <div class="col-6 col-sm-6 col-md-4 col-lg-6 d-flex">
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

        <TabHourHistroryTable iso-from="GBR" iso-to="EUR" :rate="valueRates"></TabHourHistroryTable>
    </div>
</template>

<script>
    import LineChartHistory from './../tabHistory/LineChartHistory.vue';
    import TabHourHistroryTable from './TabHourHistroryTable.vue'
    import axios from 'axios';

    export default {
        name: 'TabHourHistory',
        components: {
            LineChartHistory,
            TabHourHistroryTable
        },
        data() {
            return {
                dataForChartLabels: [],
                dataForChart: [],
                datacollection: null,
                gradientStroke: null,
                valueRates: null,
                isoFrom: "GBP",
                isoTo: "EUR",
                options: {
                        legend: {
                        display: false
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales:{
                        xAxes:[{
                            isplay: true,
                            ticks: {
							    callback: function(dataLabel, index) {
							        // Hide the label of every 30nd dataset. return null to hide the grid line too
								    return index % 30 === 0 ? dataLabel : '';
							    }
						    },
                            gridLines: {
                                display: false,
                            }
                        }]
                    },
                    tooltips: {
                        enabled: false,
                        mode: 'index',
                        position: 'nearest',
                        custom: function(tooltip){
                			// Tooltip Element
                            var tooltipEl = document.getElementById('chartjs-tooltip');

                            if (!tooltipEl) {
                                tooltipEl = document.createElement('div');
                                tooltipEl.id = 'chartjs-tooltip';
                                tooltipEl.innerHTML = '<table></table>';

                                this._chart.canvas.parentNode.appendChild(tooltipEl);
                            }

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
                                    innerHtml += '<tr><th>' + body +'</th></tr>';
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

                            // Display, position, and set styles for font
                            tooltipEl.style.opacity = 1;
                            tooltipEl.style.left = positionX + tooltip.caretX + 'px';
                            tooltipEl.style.top = positionY + tooltip.caretY + 'px';
                            tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
                            tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
                            tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
                            tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
                        }
                        // callbacks:{
                        //     title: (tooltipItem) => {
                        //         return Number(tooltipItem.yLabel)//this.dataForChartLabels[tooltipItem[0]['index']];
                        //     },
                        //     label: (tooltipItem) => {
                        //       return this.dataForChartLabels[tooltipItem['index']]
                        //     }
                        // },
                        // backgroundColor: '#FFF',
                        // titleFontSize: 16,
                        // bodyFontColor: '#000',
                        // bodyFontSize: 14,
                        // displayColors: false
                    }
                }
            }
        },
        mounted() {
            console.log('Component TabHourHistory mounted.');
            this.getDataForChart('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/GBP/EUR/full');
            //--- style for line 
            /**/ var ctx = document.getElementById('line-chart').getContext("2d");
            /**/ this.gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            /**/ this.gradientStroke.addColorStop(0, '#365381');

            /**/ this.gradientStroke.addColorStop(1, '#1db1e5');
            // --------------------------------------
            //options for chart
            this.datacollection = null;

            axios.get('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/' + "GBP" + '/' + "EUR")
            .then((response)=>{
                this.valueRates = response.data.rates[0].lastdaily;
            });
        },
        methods: {
            getDataForChart(url){
                var data;
                axios.get(url).then((response) => {
                    return response.data;
                }).then((data) => {
                    var dataForLabelsChart = [];
                    for(let i = 0; i < data.history.length; i++){
                        if(data.history[i].timestamp){
                            this.dataForChartLabels.push(this.getExactTime(data.history[i].timestamp));
                            this.dataForChart.push(data.history[i].value);
                        }
                    }
                    this.datacollection = {
                        labels: this.dataForChartLabels, //['00:00', '06:00', '12:00', '18:00', '24:00', '00:00', '06:00', '12:00', '18:00', '24:00'],
                        datasets: [
                            {
                            label: 'Rates',
                            // fontColor: "#666",
                            lineTension: 0,
                            pointRadius: 0,
                            fill: false,
                            borderColor: this.gradientStroke,
                            pointBackgroundColor: this.gradientStroke,
                            data: this.dataForChart //[0.8702, 0.8722, 0.8732, 0.8755, 0.8775, 0.8702, 0.8722, 0.8732, 0.8755, 0.8775]
                            }
                        ]
                    }
                    }).catch((error) => {
                        console.log("Error in TabHourHistory: ", error);
                    })
                },
            
            getExactTime(timestamp){
                let date = new Date(timestamp*1000);
                let time = "";
                time = (date.getHours() < 10) ? "0" + date.getHours() + ":" : date.getHours() + ":";
                time += (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes() + "";
                return time;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../sass/TabHistory.scss";
</style>
