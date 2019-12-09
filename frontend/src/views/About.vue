<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title: "Slide #1",
        content: "Slide content.",
        image: "/images/football.jpeg"
      },
      {
        title: "Slide #2",
        content: "Slide content 2.",
        image: "/images/women.png"
      },
      {
        title: "<h1 class='magic'>Sign In Today</h1>",
        content: "<div class='arrows'></div>",
        image: "/images/run.jpeg"
      }
    ]
  })
};
</script>
<template>
  <div id="about">
    <div>
      <vueper-slides>
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          :title="slide.title"
          :content="slide.content"
        ></vueper-slide>
      </vueper-slides>
    </div>
    <div id="description">
      <h1>We know is hard sometime to team up and practice sport</h1>
      <h2>but what about an app who can help you to find your mate and have fun playing football</h2>
      <h2>or tennis or... you name it, in nice location for which you can split the cost</h2>
      <h3>So! What you waiting. JuSt SiGn In!</h3>
    </div>
  </div>
</template>

<style>
#description {
  background: #e73c7e;
}

.vueperslide {
}
.magic {
  color: pink;
}
p {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
}

html {
  font: 12px Tahoma, Geneva, sans-serif;
}
* {
  margin: 0;
  padding: 0;
  color: #fff;
}

.arrows {
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
}

.arrows:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 26.66667px solid rgba(0, 0, 0, 0.7);
  border-bottom: 26.66667px solid rgba(0, 0, 0, 0.7);
  transform: translate(26.66667px, 106.66667px) rotate(-45deg);
  animation: arrows 1.5s linear infinite;
}

.arrows:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 26.66667px solid rgba(0, 0, 0, 0.7);
  border-bottom: 26.66667px solid rgba(0, 0, 0, 0.7);
  transform: translate(53.33333px, 0px) rotate(-45deg);
  animation: arrows 1.5s linear infinite -0.75s;
}

@keyframes arrows {
  0% {
    border-left: 26.66667px solid transparent;
    border-bottom: 26.66667px solid transparent;
    transform: translate(-13.33333px, -53.33333px) rotate(-45deg);
  }
  10%,
  90% {
    border-left: 26.66667px solid transparent;
    border-bottom: 26.66667px solid transparent;
  }
  50% {
    border-left: 26.66667px solid rgba(0, 0, 0, 0.7);
    border-bottom: 26.66667px solid rgba(0, 0, 0, 0.7);
    transform: translate(-13.33333px, 0px) rotate(-45deg);
  }
  100% {
    border-left: 26.66667px solid transparent;
    border-bottom: 26.66667px solid transparent;
    transform: translate(-13.33333px, 53.33333px) rotate(-45deg);
  }
}
</style>
