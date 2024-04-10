<template>
  <NuxtLayout>
    <div class="justify-end" style="margin-right: 10px; position: absolute; top: 0; right: 0;">
      <v-switch
        v-model="toggleState"
        color="primary"
        :label="toggleState ? 'Light mode' : 'Dark mode'"
        @change="toggleMode"
      ></v-switch>
    </div>

    <Profile />
    <About />
    <Skills />
    <Projects />
    <Footer />
    <Contact />
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const toggleState = ref(false)

// Retrieve the saved mode when the component is mounted
onMounted(() => {
  const savedMode = localStorage.getItem('mode')
  console.log("save", savedMode);
  if (savedMode !== null) {
    document.body.classList.toggle('dark-mode', savedMode)
    toggleState.value = savedMode === 'true'
  }
})

const toggleMode = () => {
  document.body.classList.toggle('dark-mode', toggleState.value)
  
  // Save the mode to localStorage
  localStorage.setItem('mode', toggleState.value)
}
</script>

<style>
body.dark-mode {
  background-color: #1f1a24;
  color: white;
}
</style>
