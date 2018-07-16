<template>
    <div>

        <div class="chart-canvas-wrapper">
            <line-chart-history :chart-data="datacollection" :options="options"></line-chart-history>
        </div>

        <!-- <div class="row contact-nav">
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
        </div> -->
    </div>
</template>

<script>
    import LineChartHistory from './../tabHistory/LineChartHistory.vue'

    export default {
        name: 'TabHourHistory',
        components: {
            LineChartHistory
        },
        data() {
            return {
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
            //options for chart
            this.datacollection = {
                labels: ['00:00', '06:00', '12:00', '18:00', '24:00', '00:00', '06:00', '12:00', '18:00', '24:00'],
                datasets: [
                    {
                    label: 'Rates',
                    // fontColor: "#666",
                    lineTension: 0,
                    pointRadius: 0,
                    fill: false,
                    borderColor: gradientStroke,
                    pointBackgroundColor: gradientStroke,
                    data: [0.8702, 0.8722, 0.8732, 0.8755, 0.8775, 0.8702, 0.8722, 0.8732, 0.8755, 0.8775]
                    }
                ]
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../sass/TabHistory.scss";
</style>
