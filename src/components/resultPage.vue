<template>
<div>
    <div class="container resultPage">
        <div class="row border">
            <div class="col-4 text-start bg-dark text-white"><strong>First Name</strong></div><div class="col-8 border-bottom">{{modalData.fname}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Last Name</strong></div><div class="col-8 border-bottom">{{modalData.lname}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Email</strong></div><div class="col-8 border-bottom">{{modalData.email}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Mobile</strong></div><div class="col-8 border-bottom">{{modalData.mobile}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>My Offer</strong></div><div class="col-8 border-bottom">{{modalData.myOffer}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Years</strong></div><div class="col-8 border-bottom">{{modalData.years}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Make</strong></div><div class="col-8 border-bottom">{{modalData.make}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Model</strong></div><div class="col-8 border-bottom">{{modalData.model}} </div>
            <div class="col-4 text-start bg-dark text-white"><strong>Condition</strong> </div><div class="col-8 border-bottom">{{modalData.condition}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Milage</strong></div><div class="col-8 border-bottom">{{modalData.milage}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>VIN</strong></div><div class="col-8 border-bottom">{{modalData.vin}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Message</strong></div><div class="col-8">{{modalData.message}}</div>
        </div>
    </div>
    <div class="footer">
        <hr style="width:95%;text-align:center;background-color:lightslategray">
        <button class="close" @click="closeModal()">Close</button>
    </div>
</div>
</template>

<script>
import { mapState } from "vuex"
export default {
    methods: {
        closeModal() {
            this.$emit('close-modal');
        }
    },
    computed: {
        ...mapState({
            modalData : "modalData"
        })
    }
}
</script>

<style scoped>
#heading-result {
    padding-left: 15px;
}
.footer {
    background-color: white;
    position: relative;
}
.close {
    font-size: 20px;
    height: 50px;
    width: 300px;
    color: white;
    background: darkslategrey;
    border-radius: 5px;
}
.resultPage {
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    height: 350px;
    overflow: auto;
}
</style>
