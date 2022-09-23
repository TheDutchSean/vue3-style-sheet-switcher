<template>
  <router-view />
</template>
<script>
// imports

// requires
require("@/styles/global.css");
require("@/styles/bootstrap.scss");

//export
export default {
  name: "App",
  components:{

  },
  data(){
    return{
      myvar:"this is a placeholder var"
    }
  }
}

</script>

<style scoped>

</style>

<style lang="scss">

</style>
