<template>
    <!-- <div class="containr mx-auto"> -->
       <header class="containr  w-full sticky top-0  mx-auto p-5 shadow-sm bg-white">
        <nav class="container mx-auto flex flex-wrap justify-between" >
            
            <!-- <NuxtLink class=" flex justify-between"> -->
            <NuxtLink to="/" class="font-bold text-2xl">Jason Kiptoo 🐝</NuxtLink>
            <ul class="flex  gap-4">
            <li><NuxtLink to="/" class="">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="font-bold text-2x">About</NuxtLink></li>
            <li><NuxtLink to="/experience" class="font-bold text-2x">Experience</NuxtLink></li>
            <li><NuxtLink to="/projecccts" class="font-bold text-2x">Projects</NuxtLink></li>
            <li><NuxtLink to="/contact" class="font-bold text-2x">Contact me</NuxtLink></li>
        
        </ul>
            <!-- </NuxtLink> -->

        </nav>
       </header>


       

       <div class="container mx-auto mt-4">
            <slot />
        </div>
       
    <!-- </div> -->
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active{
    color: #a32a29;
}
</style>