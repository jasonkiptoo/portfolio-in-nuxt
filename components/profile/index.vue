<template>
     <div class="car flex justify-center gap-20">
      <div class="image content-center mt-4">
        <img
          class=" content-center"
           src="~/assets/images/jay.jpg"
          alt="Jason Kiptoo"
        >
      </div>
  
      <div class="about content-center text-center">
        <h5 class="text-3xl font-mono">Hello, I'm</h5>
        <h3 class="font-bold text-5xl">Jason Kiptoo</h3>
        <h2 class="font-mono text-3xl">~ Frontend Developer ~</h2>

        <div v-if="show" class="color-overlay" :style="{ background: overlayColor }"></div>
        
        <div class="buttons flex justify-around">
          <div class="btns">
            <!-- <a href="JasonKiptoo.pdf" download="Jason kiptoo.pdf"></a> -->
            <a href="/assets/docs/resume.pdf" download="Jason Kiptoo.pdf" >
              Download CV
            </a>
          </div>
          <div class="btns">Contact me</div>
        </div>
        <div class="socials flex gap-3 justify-center p-3">
            <SocialIconsSocialIcon/>
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
  .image {
    background-color: #a32a29;
  }
  
  .about {
    /* background-color: purple; */
  }
  .image{
    cursor: pointer;
    border-radius: 80%;
    height: 510px;
    width: 505px;
  }
  img{
    cursor: pointer;
    border-radius: 80%;
    height: 500px;
    width: 500px;
  }
  img:hover{
    transform: scale(1.05);
    transition: 10ms;
    transform: skewZ(5deg);
  }

  @media (max-width: 368px) {
  .car {
    display: flex;
    flex-direction: column; /* Switch to horizontal layout on larger screens */
    align-items: center; /* Center items horizontally */
  }

  
}
.container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff); /* Example gradient */
}

.color-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

  
  /* .btns {
    @apply bg-[#a32a29] text-white px-3 py-2 rounded-full text-sm cursor-pointer border border-[#a32a29];
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: white;
      color: #a32a29;
    }
  } */
  </style>
  