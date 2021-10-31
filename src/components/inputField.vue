<template>
    <div class="">
        <div>
        <label class="float-start"><small>{{label}}</small><span class="field-sign">*</span></label>
        <input type="text" @blur="validateInput" v-model="value" @change="e=>handleField(e)" :name="`${name}`" id="" >
        <div class="float-start inputtexterror" v-if="usernameValidity === 'invalid'">{{error}} </div>
        </div>
    </div>

</template>

<script>
export default {
    props: ["name","label","error"],
    data () {
        return {
            value: "",
            item:{
              key:"",
              value:""
            },
            usernameValidity:'pending',
        }
    },
    methods: {
        handleField(e) {
            this.item.key=e.target.name;
            this.item.value=e.target.value;
            this.$store.dispatch("getValueFromInputField",this.item)
        },
        validateInput() {
            if(this.value=== ""){
                this.usernameValidity='invalid';
            }
            else if(this.item.key==="mobile" && this.value.length !== 10){
                this.usernameValidity='invalid';
            }
            // else if(this.item.key==="email"){
            //     for(let i=0; i<=this.value.length; i++){
            //         if(this.value.length[i] !== "@"){
            //             this.usernameValidity='invalid';
            //         }
            //     }
            // }
            else{
                this.usernameValidity="valid";
            }
        }
    }
}
</script>

<style scoped>
.field-sign {
    color: red;
}
input[type=text] {
  width: 100%;
  height: 50px;
  padding: 10px 10px;
  border: 1px solid grey;
  border-radius: 5px;
  box-sizing: border-box;
}
.inputtexterror{

color:red
  
}

</style>