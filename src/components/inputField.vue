<template>
    <div class="">
        <label class="float-start"><small>{{label}}</small><span class="field-sign">*</span></label>
        <input type="text" v-model="value" @change="e=>handleField(e)" :name="`${name}`" id="" >
    </div>
</template>

<script>
export default {
    props: ["name","label"],
    data () {
        return {
            value: "",
            item:{
              key:"",
              value:""
            }
        }
    },
    methods: {
        handleField(e) {
            this.item.key=e.target.name;
            this.item.value=e.target.value;
            this.$store.dispatch("getValueFromInputField",this.item)
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

</style>