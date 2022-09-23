<template>
    <section class="container mt-4">
        <p id="theme" class="text-primary text-center">selected theme:{{sheet}}</p>
        <div class="d-flex col justify-content-center" >
          <div class="d-flex align-items-center" v-for="theme in themes" :key="theme">
            <button class="btn btn-sm btn-outline-secondary me-2" @mouseup="selectCSS(theme)">{{theme}} with CSS</button>
          </div>
        </div>
    </section>   
</template>

<script>

export default {
    name: "Style",
    data(){
        return{
            sheet:"global",
            themes:["red","yellow","green"],
            styleTag:null,
            css:[],
        }
    },
    mounted(){

      // get style string objects
      for(const index in this.themes){
        try{
            this.css[index] = require(`@/styles/${this.themes[index]}.js`).default.theme;
        }
        catch(e){
            console.warn(e)
        }
      }
    // end lifecycle hook mounted
    },
    beforeUnmount(){
        this.styleTag.remove();
    // end lifecycle hook unMounted
    },
    methods:{
      selectCSS(sheet){
          this.sheet = sheet;
          this.setCSS(sheet);
      },
      setCSS(sheet){

          let textContent = "";

          for(const index in this.themes){
              if(this.themes[index] === sheet){
                  textContent = this.css[index];
                  break;
              }
          }

          if(this.styleTag === null){
              this.styleTag = document.createElement('style');
              this.styleTag.type = "text/css";
              this.styleTag.textContent = textContent;
              document.head.append(this.styleTag);              
          }
          else{
              this.styleTag.textContent = textContent;
          }
      // end setCSS methode
      },
    // end method    
    }
}
</script>

<style>

</style>