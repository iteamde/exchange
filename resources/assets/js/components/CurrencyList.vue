<template>
    <div class="content-container currency-list">
        <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 offset-lg-2 col-sm-4 offset-md-2 offset-sm-2 offset-sm-0 list-from">
                <table class="currency-table">
                    <thead>
                        <tr class="row">
                            <th class="col-6">British Pound Sterling</th>
                            <th class="col-6">Euro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row" v-for="(item, index) in cyrencysArray">
                            <td class="col-6 td-el"><span class="from-currency">{{item}}</span></td>
                            <td class="col-6 td-el"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 table-from">
                <table class="currency-table">
                    <thead>
                        <tr class="row">
                            <th class="col-6">Euro</th>
                            <th class="col-6">British Pound Sterling</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row" v-for="(item, index) in cyrencysArray">
                            <td class="col-6"><span class="from-currency">{{item}}</span></td>
                            <td class="col-6"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CurrencyList',
        data: function(){
            return {
                cyrencysArray: [1, 5, 10, 20, 50, 100, 250, 500, 1000, 2000, 5000, 10000]
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/currency-list.scss";
</style>
