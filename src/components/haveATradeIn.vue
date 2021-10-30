<template>
  <div class="">
      <div class="row" @click="toggle1">
        <div class="col-11 text-start">
          <span class="motor"><i class='fa fa-motorcycle'></i></span>
          <small><b>Have a Trade-in ?</b> <i>(Optional)</i></small>
        </div>
        <div class="col-1">
          <span v-if="!openAccordion1">
            <i class="fa fa-angle-down fs-4 fw-bolder"></i>
          </span>
          <span v-if="openAccordion1">
            <i class="fa fa-angle-up fs-4 fw-bolder"></i>
          </span>
        </div> 
      </div>
      <div class="mt-4" v-if="visible1">
        <div class="row">
            <div class="col-3">
              <button @click="noTrade('noTrade')" id="button-trade">No Trade In</button>
            </div>
            <div class="col-3">
              <button @click="tradeIn('yesTrade')" id="button-trade">Yes, I have A Trade-In</button>
            </div>
        </div>
        <div class="row mt-4" v-if="showTrade">
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
                <DropDown label="Select Year" :yearsArr="yearsArr" name="years"/>
            </div>
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
                <input-field label="Make" name="make"/>
            </div>
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12 mt-3">
                <input-field label="Model" name="model"/>
            </div>
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12 mt-3">
                <DropDown label="Condition" :yearsArr="condition" name="condition"/>
            </div>
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12 mt-3">
                <input-field label="Estimated Milage" name="milage"/>
            </div>
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12 mt-3">
                <input-field label="VIN" name="vin"/>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import InputField from './inputField.vue'   
import DropDown from './dropdown.vue'
export default {
    data(){
        return {
          trade: "",
          showTrade : false,
          openAccordion1 : false,
          yearsArr : [],
          condition:['Excellent','Good','Fair','Poor'],
          visible1: false,
        }
    },
    components: {
        InputField,
        DropDown,
    },
    methods: {
        toggle1() {
          this.openAccordion1 = !this.openAccordion1;
          this.visible1 = !this.visible1;
        },
        noTrade(value) {
          this.trade = value;
          this.showTrade = false;
        },
        tradeIn(value) {
          this.trade = value;
          this.showTrade = true;
        },
        handleField(e){
          this.item.key=e.target.name;
          this.item.value=e.target.value;
          this.$store.dispatch("getValueFromInputField",this.item)
        },
    },
    created(){
      const year = new Date().getFullYear()
      this.yearsArr=Array.from({length: year - 1990}, (value, index) => 1991 + index);
    },
}
</script>

<style scoped>


.motor {
  padding: 8px;
  font-size:20px;
  color:red;
  border: 1px solid red;
  margin-right: 10px;
  border-radius: 50%;
}
#button-trade {
    font-size: 15px;
    height: 50px;
    width: 138px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 5px;
}
#button-trade {
    font-size: 15px;
    height: 50px;
    width: 138px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.trade-buttons {
    background-color: rgb(230, 227, 227);
    border: 2px solid darkred;
    outline-style: solid;
    outline-color: red;
}
    
/* #button-trade:focus {
    font-family: bold;
    background-color: rgb(230, 227, 227);
    border: 2px solid darkred;
    outline-style: solid;
    outline-color: red;
} */
</style>