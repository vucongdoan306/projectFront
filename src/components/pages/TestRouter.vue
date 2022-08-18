<template>
    <button @click="Open">một</button>
    <div>

      <base-test v-if="isOpen"
      :mainData="this.data"
      :nameData="'DepartmentName'"
      :idData="'DepartmentId'"
      :codeData="'DepartmentCode'"
      >
      
      </base-test>

    </div>
</template>

<script>

import BaseTest from "../base/BaseTest.vue";
import CommonAPI from "../../APIs/CommonApi.js";
export default {
  components:{
    BaseTest,
  },
  created() {
    var me = this;
    CommonAPI.getAll("Departments").then((respon)=>{
      me.data = respon.data;
      console.log(me.data);
    })
  },
  data(){
    return{
      data: [],
      isOpen: false,
    }

  },
  methods:{
    Open(){
      this.isOpen = !this.isOpen;
    }
  }
  
}
</script>

<style lang="css">
    
</style>