<template>
    <div class="row exchange-section">
        <div class="col-sm-12 d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column container-control">
                <span class="sup-text">From</span>
                <input type="text" class="form-control" v-model="valueFrom" @change="updateData">
            </div>

            <!-- <input type="text" class="form-control with-dd"> -->
            <div class="d-flex flex-column container-control">
                <!-- <select name="" id="" class="form-control with-select">
                    <option value="eng" selected>
                        <span class="option-el">Eng</span>
                    </option>
                </select> -->
                <div class="custom-select ">
                    <div class="selected-el-container" ref="fromElement">
                        <div class="option-el" data-value="eng">
                            <img class="select-img-el" src="images/flags/gb.png" alt=""> GBR
                        </div>
                    </div>
                    <div class="option-elements hide-options">
                        <div class="option-el" data-value="" v-for="(item, index) in currencies" v-bind:key="index" @click="selectFrom(item)">
                            <img class="select-img-el" v-bind:src="'images/flags/' + item.flag + '.png'" alt=""> {{item.iso}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="sync" @click="swapCurrency">
                <i class="fa fa-sync"></i>
            </div>
            <div class="d-flex flex-column position-relative container-control">
                <span class="sup-text">To</span>
                <input type="text" class="form-control to" v-model="valueTo">
            </div>
            <div class="d-flex flex-column container-control">
                <!-- <input type="text" class="form-control with-dd"> -->
                <div class="custom-select ">
                    <div class="selected-el-container" ref="toElement">
                        <div class="option-el" data-value="eng">
                            <img class="select-img-el" src="images/flags/europeanunion.png" alt=""> EUR
                        </div>
                    </div>
                    <div class="option-elements hide-options">
                        <div class="option-el" data-value="" v-for="(item, index) in currencies" v-bind:key="index" @click="selectTo(item)">
                            <img class="select-img-el" v-bind:src="'images/flags/' + item.flag + '.png'" alt=""> {{item.iso}}
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="none-sm">&lt; &#47; &gt; Add to Site</a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'TheExchangeBar',
        data(){
            return {
                currencies: null,
                dataIsoFrom: 'GBP',
                dataIsoTo: 'EUR',
                valueFrom: '1',
                valueTo: '0'
            }
        },
        methods: {
            selectFrom(item){
                this.dataIsoFrom = item.iso;
                console.log(item.iso);
                this.updateData();
            },
            selectTo(item){
                this.dataIsoTo = item.iso;

                this.updateData();
            },
            updateData(){
                axios.get('https://api.ukfx.co.uk.staging.ukfx.co.uk/pairs/' + this.dataIsoFrom + '/' + this.dataIsoTo)
                .then((response)=>{
                    this.valueTo = response.data.rates[0].lastdaily * this.valueFrom;
                });
            },
            swapCurrency(){
                let bufferFrom, bufferTo = this.dataIsoTo;
                this.dataIsoTo = this.dataIsoFrom;
                this.dataIsoFrom = bufferTo;

                bufferTo = this.$refs.toElement.innerHTML;
                bufferFrom = this.$refs.fromElement.innerHTML

                this.$refs.fromElement.innerHTML = bufferTo;
                this.$refs.toElement.innerHTML = bufferFrom;

                this.updateData();
            }
        },
        mounted() {
            console.log('Component ExchangeBar mounted.');

            axios.get('https://api.ukfx.co.uk.staging.ukfx.co.uk/currency').then((response)=>{
                // console.log(response.data.entities);
                this.currencies = response.data.entities;;
            })

            this.updateData();

            //select controll
            Array.prototype.map.call(document.getElementsByClassName('custom-select'), function(element){
            element.addEventListener('click', function(e){
                e.currentTarget.querySelector(".option-elements").classList.toggle("hide-options");
            });
            element.querySelector('.option-elements').addEventListener('click', function(e){
                let selectedElement = element.querySelector('.selected-el-container');
                selectedElement.innerHTML = e.target.outerHTML;
                selectedElement.dataset.selected = e.target.dataset.value;
            });
            element.querySelector('.option-elements').addEventListener('mouseleave', function(e){
                // console.log(e.target);
                // if(e.target.classList.contains('custom-select')){
                //     return
                // }
                // console.log(e.target.classList.contains('option-el'))
                // console.log('mouseout')
                e.preventDefault();

                element.querySelector(".option-elements").classList.toggle("hide-options");
            }, false);
        })
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/exchange.scss";
</style>
