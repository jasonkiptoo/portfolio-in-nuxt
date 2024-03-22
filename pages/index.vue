<template>
    <div class="flex justify-center gap-12">

        <div class="image content-center">
            <img class="rounded-full content-center" width="500px" height="400px"  src="https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jason Kiptoo">
        </div>

        <div class=" about content-center text-center ">

            <h5 class="text-3xl font-mono" >Hello, I'm</h5>
            <h3 class="font-bold text-5xl">Jason Kiptoo  </h3>
            <h2 class="font-mono text-3xl">Frontend Developer</h2>

        <div class="buttons flex justify-around">
            <div class="btns">

Download CV
</div>
<div class="btns">
    Contact me
</div>
        </div>


        </div>


      

    </div>
    
</template>

<script setup>
definePageMeta({
    layout: 'navbar'
})

</script>

<style scoped>
.image{
    /* background-color: red; */
}
.about{
    /* background-color: purple; */
}

</style>