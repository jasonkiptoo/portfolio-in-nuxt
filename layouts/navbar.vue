<template>
    <!-- <div class="containr mx-auto"> -->
       <header class="containr w-full  mx-auto p-5 shadow-sm bg-white">
        <nav class="container mx-auto" >
            <NuxtLink class=" flex justify-between">
                <NuxtLink to="/" class="font-bold text-2xl">Jason Kiptoo 🐝</NuxtLink>
            <ul class="flex  gap-4">
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact me</li>
        </ul>
            </NuxtLink>

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