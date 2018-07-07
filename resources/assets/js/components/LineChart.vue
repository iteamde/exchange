<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart({
                labels: ['00:00', '06:00', '12:00', '18:00', '24:00', '00:00', '06:00', '12:00', '18:00', '24:00'],
                datasets: [
                    {
                        label: 'Rates',
                        lineTension: 0,
                        fill: false,
                        borderColor: 'rgba(59, 89, 152, 1)',
                        pointBackgroundColor: 'rgba(46, 67, 105, 1)',
                        data: [0.8702, 0.8722, 0.8732, 0.8755, 0.8775, 0.8702, 0.8722, 0.8732, 0.8755, 0.8775]
                    }
                ]
            })
        }
    }
</script>
