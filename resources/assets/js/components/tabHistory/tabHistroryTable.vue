<template>
    <div>
        <table>
            <tbody>
                <tr v-for="(item, index) in dataRates.slice(0,7)" v-bind:key="index">
                    <td>
                        {{item.fullDate}}
                    </td>
                    <td>
                        {{item.rates}}
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="table-link">
            <p>For full history please visit <a href="#">GBP/EUR exchange rate history page</a></p>
        </div>
    </div>
</template>


<script>
export default {
    name : "TabHistoryTable",
    props : ['dataRates']
}
</script>

<style lang="scss" scoped>
    @import "../../../sass/TabHistoryTable.scss";
</style>
