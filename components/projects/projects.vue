<template>
      <div class="title text-center p-8">
            <h5 class="sub-title font-mono">
                Browse Recent Projects
            </h5>
            <h3 class="header font-bold text-5xl">
                Projects
            </h3>
            <div class="projects flex gap-2">
                <div class="project box-border h-50 w-80 p-4 border-4 rounded-xl flex flex-col items-center ">

                    <div class="image">
                        <img src="~/assets/images/jay.jpg" class="h-32 w-32"  alt="">
                    </div>
                    <p class="font-bold text-2xl">FotoMoto </p>
                    <p>FotoMoto </p>
                </div>
                <div class="project box-border h-50 w-80 p-4 border-4 rounded-xl flex flex-col items-center ">

                    <div class="image">
                        <img src="~/assets/images/jay.jpg" class="h-32 w-32"  alt="">
                    </div>
                    <p>FotoMoto </p>
                    <p>FotoMoto </p>
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