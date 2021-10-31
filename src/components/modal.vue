<template>
        <div class="popup">
            <div class="pop-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-11 d-flex">
                            <h3 class="float-start" id="heading-landPage">Make An Offer</h3>
                        </div>
                        <div class="col-1">
                            <span @click="close()">
                                <i class="fa fa-close float-end" style="font-size:36px"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="land-page" v-if="showLandPage">
                    <LandPage v-on:close-submit="submit" v-on:close-close="$emit('close-modal')" />
                </div>
                <div class="result-page"  v-if="showResultPage">
                    <ResultPage v-on:close-modal="$emit('close-modal')" :items="items" :tradeItems="tradeItems" />
                </div>

            </div>
        </div>
</template>

<script>
import LandPage from './landPage.vue'
import ResultPage from './resultPage.vue'

export default {
    components: {
        LandPage,
        ResultPage,
    },
    data(){
        return{
            items:{},
            tradeItems: {},
            showLandPage:true,
            showResultPage:false,
        }
    },
    methods: {
        submit(item,tradeItem) {
            this.items = item;
            this.tradeItems = tradeItem;
            this.showLandPage = false;
            this.showResultPage = true;
        },
        close(){
            this.$emit('close-modal');
        }
    }
}
</script>

<style scoped>
.popup {
    position: fixed;
    padding-top: 60px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    
}
.pop-inner {
    margin-top: 0;
    height: 85%;
    padding-left: 15px;
    width: 50%;
    background: #fff;
    border-radius: 15px;
    padding-top: 20px;
    padding-right: 15px;
    border: 1px solid black;
}
@media only screen and (max-width: 600px) {
  .pop-inner {
    width: 100%;
    height: 100%;
  }
}
</style>
