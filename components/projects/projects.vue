<template>
      <div class="title text-center p-8">
            <h5 class="sub-title font-mono">
                Browse Recent Projects
            </h5>
            <h3 class="header font-bold text-4xl">
                Projects
            </h3>
            <div class="projects flex flex-wrap mx-auto justify-evenly gap-3 ">
                <!-- flex flex-wrap gap-4 justify-center pt-4 -->
                <div class="project  box-border h-50 w-50 p-4 border-4 rounded-xl items-center ">
                    <div class="image">
                        <img src="~/assets/images/jay.jpg" class="h-32 w-32"  alt="">
                    </div>
                    <p class="font-bold text-xl">FotoMoto </p>
                    <div class="btnss flex gap-3">

                        <p class="btns-project">Github</p>
                        <p class="btns-project">Live Demo</p>
                    </div>
                </div>

                <div class="project box-border h-50 w-50 p-4 border-4 rounded-xl  items-center ">
                    <div class="image">
                        <img src="~/assets/images/jay.jpg" class="h-32 w-32"  alt="">
                    </div>
                    <p class="font-bold text-xl">FotoMoto </p>
                    <div class="btnss flex gap-3">

                        <p class="btns-project">Github</p>
                        <p class="btns-project">Live Demo</p>
                    </div>
                </div>

                    <div class="project h-50 w-50  content-center   ">
                    <Icon name="material-symbols:arrow-forward-rounded" color="#a32a29" size="5rem"/>
                   <p> more projects                   </p>
                 
                </div>


              
            </div>
            </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>