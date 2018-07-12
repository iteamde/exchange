<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        mounted () {
            var ctx = document.getElementById('line-chart').getContext("2d");

            //--- style for line 
            /**/ var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            /**/ gradientStroke.addColorStop(0, '#365381');

            /**/gradientStroke.addColorStop(1, '#1db1e5');
            // --------------------------------------

            fetch('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/USD/GBP/history?mindate=2017-10-23\&maxdate=2017-10-30', {method: 'GET'})
            .then((response) => {
                return response.json().then((json) => {
                        // console.log(json)
                        // this.chartData = json;
                        // console.log(chartData);
                        //console.log("JSON", json);
                        })
             }).catch(function(error){
                 console.log('There has been a problem with your fetch operation: ' + error.message);
             });

            // Overwriting base render method with actual data.
            this.renderChart({
                labels: ['00:00', '06:00', '12:00', '18:00', '24:00', '00:00', '06:00', '12:00', '18:00', '24:00'],
                datasets: [
                    {
                        label: 'Rates',
                        // fontColor: "#666",
                        lineTension: 0,
                        // pointRadius: 0,
                        fill: false,
                        borderColor: gradientStroke,
                        pointBackgroundColor: gradientStroke,
                        data: [0.8702, 0.8722, 0.8732, 0.8755, 0.8775, 0.8702, 0.8722, 0.8732, 0.8755, 0.8775]
                    }
                ]
                
            })
        },
        data: function() {
            return {
            }
        }
    }
</script>


