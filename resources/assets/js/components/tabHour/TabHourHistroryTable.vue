<template>
    <div class="content-container currency-list">
        <div class="row">
            <div class="col-lg-6 from table-left">
                <table class="currency-table">
                    <thead>
                        <tr class="row">
                            <th class="col-6">British Pound Sterling</th>
                            <th class="col-6">Euro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row" v-for="(item, index) in cyrencysArray" v-bind:key="index">
                            <td class="col-6 td-el"><span class="from-currency">{{item}}</span></td>
                            <td class="col-6 td-el">{{ (item * rate).toFixed(5) }} {{isoTo}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-6 table-right">
                <table class="currency-table">
                    <thead>
                        <tr class="row">
                            <th class="col-6">Euro</th>
                            <th class="col-6">British Pound Sterling</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row" v-for="(item, index) in cyrencysArray" v-bind:key="index">
                            <td class="col-6"><span class="from-currency">{{item}}</span></td>
                            <td class="col-6">{{ (item / rate).toFixed(5) }} {{isoFrom}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabHourHistroryTable',
        props: ['isoFrom', 'isoTo', 'rate'],
        data: function(){
            return {
                cyrencysArray: [1, 5, 10, 20, 50, 100, 250, 500, 1000, 2000, 5000, 10000]
            }
        },
        mounted() {
            console.log('TabHourHistroryTable.');
            console.log(this.rate);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../sass/currency-list.scss";
</style>