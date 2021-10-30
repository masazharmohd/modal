<template>
  <div>
    <label class="float-start"><small>{{label}}</small><span class="dd-sign">*</span></label>
        <select class="form-control" :name="`${name}`" @change="e=>getDD(e)">
          <option selected></option>
            <option v-for="year in yearsArr" :key="year">{{ year }}</option>
        </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item:{
        key:"",
        value:"",
      }
    }
  },
  props: ["name","yearsArr","label"],
  methods:{
    getDD(e){
      this.item.key=e.target.name;
      this.item.value=e.target.value;
      this.$store.dispatch("getValueFromDropdown",this.item)
    }
  }
};
</script>

<style scoped>
.dd-sign {
  color: red;
}
select {
  width: 100%;
  padding: 10px 10px;
  border: 1px solid grey;
  border-radius: 5px;
  box-sizing: border-box;
}
</style>
