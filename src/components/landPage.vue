<template>
<div>
    <div class="landPage">
        <div class="row mt-4">
            <div class="col-md-6">
                <h6 class="basic step-heading bold text-start"><small><b>Contact Information</b></small></h6>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-lg-7 col-md-6 col-xs-12">
                <p class="float-start">
                    <span class="required-red">
                        *
                    </span>
                    <small>Required</small>
                </p>
            </div>
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
                <InputFeild label="First Name" name="fname" error="Invalid fist name"/>
            </div>
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
                <InputFeild label="Last Name" name="lname" error="Invalid fist name"/>
            </div>
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12 mt-3">
                <InputFeild label="Email" name="email" error="Invalid fist name"/>
            </div>
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12 mt-3">
                <InputFeild label="Phone Number" name="mobile" error="Invalid fist name"/>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
                <span class="float-start" id=""><small><b>My Offer</b></small></span>
                <p class="labletext2"><i>Current Asking Price: $9,999</i></p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
                <InputFeild label="Enter Offer" name="myOffer" error="Invalid fist name"/>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-6 col-lg-12 col-md-12 col-xs-6 mt-4">
                <hr style="height:2px;background-color:lightslategray">
                <have-a-trade-in />
                <hr style="height:2px;background-color:lightslategray">
                <review-payment />
                <hr style="height:2px;background-color:lightslategray">
                <dealer-message />

            </div>
        </div>
    </div>
    <div class="footer mt-3">
        <hr style="width:100%; text-align:center; background-color:lightslategray">
        <button class=" col-sm-12 col-lg-6 col-md-6 col-xs-12 btn-submit" @click="submit()">Submit</button><br>
    </div>
</div>    
</template>

<script>
import ReviewPayment from './reviewPayment.vue'
import HaveATradeIn from './haveATradeIn.vue'
import InputFeild from './inputField.vue'
import dealerMessage from './dealerMessage.vue'
export default {
    data: () => {
        return {
            item: {},
            tradeItem: {},
        }
    },
    components: {
        InputFeild,
        dealerMessage,
        ReviewPayment,
        HaveATradeIn,
    },
    methods: {
        submit() {
            this.$emit('close-submit',this.item,this.tradeItem)
        },
    }
}
</script>

<style scoped>

.btn-submit {
    font-weight: 10px;
    font-size: 14px;
    height: 50px;
    width: 300px;
    background-color: rgb(61, 61, 61);
    color: rgb(255, 255, 255);
    cursor: pointer;
    border-radius: 5px;
}

.landPage {
    padding-left: 12px;
    width: 600px;
    height: 350px;
    overflow: auto;
    overflow-x: hidden;
}
.required-red {
    color: red;
}
::-webkit-scrollbar{
  width:0px;
}
::-webkit-scrollbar-thumb{
  background: #ff0000;
}
.labletext2 {
    color: gray;
    padding-left: 75px;
}
@media only screen and (max-width: 600px) {
  .landPage {
    padding-right: 250px;
  }
}

</style>
