<template>
<div>
      <div class="mt-3">
          <div class="row" @click="toggle3">
            <div class="col-11 text-start">
              <span class="edit-icon"><i class='fa fa-edit'></i></span>
              <small><b>Message Dealer</b> <i>(Optional)</i></small>
            </div>
            <div class="col-1">
              <span class="angle" v-if="!openAccordion3">
                <i class="fa fa-angle-down fs-4 fw-bolder"></i>
              </span>
              <span v-if="openAccordion3">
                <i class="fa fa-angle-up fs-4 fw-bolder"></i>
              </span>
          </div>
        </div>
      </div>   
      <div class="panel--body mt-4" v-if="visible3">
            <label for="exampleFormControlTextarea1" class="form-label float-start">Add a short message to the dealer:</label>
            <textarea class="form-control" rows="6" v-model="value" @change="e=>handleField(e)" name="message" placeholder="Write here any thing you want to send to dealer"></textarea>
            <p class="flot-start">
                <small>
                    Stay Safe. Read more about avoiding scams and protecting your money. By using this site, you agree to our Terms of Use & our Privacy Policy.
                </small>
            </p>
      </div>
</div>
</template>


<script>
export default {
    data(){
        return {
          openAccordion3: false,
          visible3: false,
          value: "",
          item :{
            key:"",
            value: ""
          }
        }
    },
    components: {
    },
    methods: {
        toggle3() {
          this.openAccordion3 = !this.openAccordion3;
          this.visible3 = !this.visible3;
        },
        
        handleField(e){
          this.item.key=e.target.name;
          this.item.value=e.target.value;
          this.$store.dispatch("getValueFromInputField",this.item)
        },
    },
}
</script>

<style scoped>
input[type=text] {
  width: 70%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.edit-icon {
  padding: 8px;
  font-size:20px;
  color:red;
  border: 1px solid red;
  margin-right: 10px;
  border-radius: 50%;
}
</style> 
