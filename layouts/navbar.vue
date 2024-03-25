<template>
    <header class="containe w-full sticky top-0 mx-auto p-5 shadow-sm bg-white">
      <nav class="container mx-auto flex flex-wrap justify-between">
        <NuxtLink to="/" class="font-bold text-2xl">Jason Kiptoo 🐝</NuxtLink>
        <ul class="flex gap-8 nav" v-bind:class="{ 'hidden': isMenuOpen }">
          <li><NuxtLink to="/" class="">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="font-bold text-2x">About</NuxtLink></li>
          <li><NuxtLink to="/experience" class="font-bold text-2x">Experience</NuxtLink></li>
          <li><NuxtLink to="/projects" class="font-bold text-2x">Projects</NuxtLink></li>
          <li><NuxtLink to="/contact" class="font-bold text-2x">Contact me</NuxtLink></li>
        </ul>
        <div class="menu-icon" @click="isMenuOpen = !isMenuOpen">
          <Icon size="40px" color="#a32a29" name="material-symbols:lists-rounded"/>
        </div>
      </nav>
    </header>
  
    <div class="container mx-auto mt-4">
      <slot />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    console.log("click");
    isMenuOpen.value = false;
  };
  </script>
  
  <style scoped>
  .router-link-exact-active {
    color: #a32a29;
  }
  
  .nav {
    display: flex;
    gap: 8px;
  }
  
  .menu-icon {
    display: none;
    cursor: pointer;
  }
  
  /* Media query for small screens */
  @media screen and (max-width: 768px) {
    .nav {
        display: flex;
        flex-direction: column;
        position:absolute;
        left: 10px;
        top: 50px;
        background-color: white;
        padding: 20px;
      display: none;
    }
  
    .menu-icon {
      display: block;
    }
  }
  </style>
  