<template>
    <div class="none-sm content-container currency-pages-container">
        <div class="head">
            <h3>Currency Pages</h3>
        </div>
        <div class="nav-curency">
            <div class="nav-curency-wr">
                <a class="cur-link">A</a>
                <a class="cur-link">B</a>
                <a class="cur-link">C</a>
                <a class="cur-link">D</a>
                <a class="cur-link">E</a>
                <a class="cur-link">F</a>
                <a class="cur-link">G</a>
                <a class="cur-link">H</a>
                <a class="cur-link">I</a>
                <a class="cur-link">J</a>
                <a class="cur-link">K</a>
                <a class="cur-link">L</a>
                <a class="cur-link">M</a>
                <a class="cur-link">N</a>
                <a class="cur-link">O</a>
                <a class="cur-link">P</a>
                <a class="cur-link">Q</a>
                <a class="cur-link">R</a>
                <a class="cur-link">S</a>
                <a class="cur-link">T</a>
                <a class="cur-link">U</a>
                <a class="cur-link">V</a>
                <a class="cur-link">W</a>
                <a class="cur-link">X</a>
                <a class="cur-link">Y</a>
            </div>
        </div>
        <div class="curency-pages-list">
            <div class=" page-list-el" v-if="listOfCountries.A">
                <h4>A</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('A')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.B">
                <h4>B</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('B')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.C">
                <h4>C</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('C')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.C">
                <h4>D</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('D')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.E">
                <h4>E</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('E')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.F">
                <h4>F</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('F')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li> 
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.G">
                <h4>G</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('G')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.H">
                <h4>H</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('H')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.I">
                <h4>I</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('I')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.J">
                <h4>J</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('J')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.K">
                <h4>K</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('K')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.L">
                <h4>L</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('L')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.M">
                <h4>M</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('M')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class="page-list-el" v-if="listOfCountries.N">
                <h4>N</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('N')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.O">
                <h4>O</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('O')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.P">
                <h4>P</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('P')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class=" page-list-el" v-if="listOfCountries.Q">
                <h4>Q</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('Q')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 page-list-el" v-if="listOfCountries.R">
                <h4>R</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('R')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 page-list-el" v-if="listOfCountries.S">
                <h4>S</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('S')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 page-list-el" v-if="listOfCountries.T">
                <h4>T</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('T')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 page-list-el" v-if="listOfCountries.U">
                <h4>U</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('U')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 page-list-el" v-if="listOfCountries.V">
                <h4>V</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('V')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 page-list-el" v-if="listOfCountries.W">
                <h4>W</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('W')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 page-list-el" v-if="listOfCountries.X">
                <h4>X</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('X')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 page-list-el" v-if="listOfCountries.Y">
                <h4>Y</h4>
                <ul>
                    <li v-for="(item, index) in getCountiesByTheFirstLetter('Y')" v-bind:key="index">
                        {{item.currency}} ({{item.iso}})
                    </li>
                </ul>
            </div>`
        </div>
    </div>
</template>

<script>
    import axois from 'axios'
    export default {
        name: 'CurrencyPages',
        data: function(){
            return {
                pages: null,
                listOfCountries: {
                    A: true,
                    B: true,
                    C: true,
                    D: true,
                    E: true,
                    F: true,
                    G: true,
                    H: true,
                    I: true,
                    J: true,
                    K: true,
                    L: true,
                    M: true,
                    N: true,
                    O: true,
                    P: true,
                    Q: true,
                    R: true,
                    S: true,
                    T: true,
                    U: true,
                    V: true,
                    W: true,
                    X: true,
                    Y: true
                }
            }
        },
        mounted() {
            console.log('Component mounted.');
            fetch('https://api.ukfx.co.uk.staging.ukfx.co.uk/currency', {method: 'GET'}).then((response) => {
                return response.json().then((json) => {
                        this.pages = {succes: json.succes, entities: json.entities};
                        //console.log("JSON", json);
                        })
             }).catch(function(error){
                 console.log('There has been a problem with your fetch operation: ' + error.message);
             });
        }, 
        methods: {
            getCountiesByTheFirstLetter: function(letter){
                if(!this.pages) {
                    return
                }
                let curentItems = {};
                curentItems = this.pages.entities.filter((item) => {
                   return item.currency[0] === letter;
                });
                
                if(curentItems[0]){
                    this.listOfCountries[letter] = true;
                } else {
                    this.listOfCountries[letter] = false;
                }
                return curentItems;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/currency-pages.scss";
</style>
