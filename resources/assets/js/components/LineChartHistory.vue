<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        data: function() {
            return {
                chartData: {},
                dataForDatasetChart: []
            }
        },
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
                        console.log(json);
                        this.chartData = {history: json.history, success: json.success};
                        this.getDataForChart(this.chartData);


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
                        data: this.dataForDatasetChart
                    }
                ]
                
            })
        },
        methods: {
            getDate (){
                var dateString = "";
                var date = new Date();
                date.setTime(1508716800);

                dateString = date.getDate() + " " + this.getNameOfMounth(date.getMonth());
                return dateString;
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

            getDataForChart: function(data){
                if(!data){
                    return
                }
                this.valueForChart = [];
                for(let i = 0; i < data.history.length; i++){
                    this.dataForDatasetChart.push(data.history[i].value);
                }

                // console.log('value')
                // console.log(this.valueForChart);
            },
        }
    }
</script>


