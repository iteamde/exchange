<template>
    <div class="row exchange-section">
        <div class="col-sm-12 d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column container-control">
                <span class="sup-text">From</span>
                <input type="text" class="form-control">
            </div>

            <!-- <input type="text" class="form-control with-dd"> -->
            <div class="d-flex flex-column container-control">
                <!-- <select name="" id="" class="form-control with-select">
                    <option value="eng" selected>
                        <span class="option-el">Eng</span>
                    </option>
                </select> -->
                <div class="custom-select ">
                    <div class="selected-el-container" data-selected="eng">
                        <div class="option-el" data-value="eng">
                            <img class="select-img-el" src="images/layerEng.png" alt=""> ENG
                        </div>
                    </div>
                    <div class="option-elements hide-options">
                        <div class="option-el" data-value="eng">
                            <img class="select-img-el" src="images/layerEng.png" alt=""> ENG
                        </div>
                        <div class="option-el" data-value="rus">
                            <img class="select-img-el" src="images/layerEng.png" alt=""> RUS
                        </div>
                        <div class="option-el" data-value="usa">
                            <img class="select-img-el" src="images/layerEng.png" alt=""> USA
                        </div>
                        <div class="option-el" data-value="ua">
                            <img class="select-img-el" src="images/layerEng.png" alt=""> UA
                        </div>
                    </div>
                </div>
            </div>
            <div class="sync">
                <i class="fa fa-sync"></i>
            </div>
            <div class="d-flex flex-column position-relative container-control">
                <span class="sup-text">To</span>
                <input type="text" class="form-control to">
            </div>
            <div class="d-flex flex-column container-control">
                <input type="text" class="form-control with-dd">
            </div>
            <a href="#" class="none-sm">&lt; &#47; &gt; Add to Site</a>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'TheExchangeBar',
        mounted() {
            console.log('Component mounted.');
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/exchange.scss";
</style>
