<template>
    <div class="flex flex-wrap justify-center">
        <div class="content-center p-8">
            <h5 class="font-mono  ">Get to Know more</h5>
             <p class="font-bold text-center text-3xl">About me</p>
        </div>

        
    </div>
    <div class="car flex flex-wrap justify-center gap-3">

<div class="image p-4 border-2 rounded-lg flex-col items-center justify-center">
    <img class="shadow-none" src="~/assets/images/jay1.jpg" width="200px" height="400px" alt="">
</div>

<div class="flex-col flex-wrap	 justify-center items-center gap-4">


    <div class="about flex flex-wrap justify-center items-start gap-4 ">
    
        <div class="box-border h-50 w-80 p-4 border-4 rounded-xl flex flex-col items-center justify-center">
            <Icon name="grommet-icons:certificate" size="50px" color="#a32a29"/>
            <p class="font-bold">Experience</p>
            <p class="font-mono">2+ Years</p>
            <p class="font-mono">Front-end Development</p>
            <p class="font-mono">Testing</p>
        </div>
        <div class="box-border h-50 w-80 p-4 border-4 rounded-xl flex flex-col items-center justify-center">
            <Icon name="grommet-icons:attraction" size="50px" color="#a32a29"/>
            <p class="font-bold">Education</p>
            <p class="font-mono">Bsc. Computer Science</p>
            <p class="font-mono">Software Engineering</p>
<p class="font-mono"></p>
        </div>  
        <div class="box-border h-50 w-80 p-4 border-4 rounded-xl flex flex-col items-center justify-center">
            <Icon name="grommet-icons:settings-option" size="50px" color="#a32a29"/>
            <p class="font-bold">Skill Set</p>
            <p class="font-mono text-center">Vue js, Angular, React, Java-Springboot, Nuxt JS, Docker & Rails</p>

        </div>  
    </div>
    <div class="fles-co text-center justify-en">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quam ratione Lorem ipsum dolor sit amet consectetur,
        Lorem ipsum <br/> dolor sit amet consectetur, adipisicing elit. Cupiditate quam ratione Lorem ipsum dolor sit amet consectetur
        Lorem ipsum dolor<br/> sit amet consectetur, adipisicing elit. Cupiditate quam ratione Lorem ipsum dolor sit amet consectetur
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
.experience{

    padding: 20px;
    border: 1px solid black;
    border-radius: 20px;
    justify-content: center;
}
</style>