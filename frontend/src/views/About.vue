<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";


export default {
    components: { VueperSlides, VueperSlide },
    data: () => ({
        slides: [
            {
                content: "<h3>We know is hard sometime to team up and practice sport</h3>.",
                image: "/images/football.jpeg"
            },
            {
                content: "<div><h3>but what about an app who can help you to find your mate and have fun playing football</h3></br><h3>or tennis or... you name it, in nice location for which you can split the cost</h3></div>",
                image: "/images/playing.jpeg"
            },
            {
                title: "<h1 class='magic'>Sign In, Today</h1>",
                content: "<div class='arrows'></div>",
                image: "/images/running.jpeg"
            }
        ]
    })
};
</script>
<template>
    <div id="about">
        <div>
            <vueper-slides>
                <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title" :content="slide.content"></vueper-slide>
            </vueper-slides>
        </div>
        <div id="description">
            
            
            <h1>So! What you are waiting</h1> 
            <h2>
              <span>S</span>
              <span>i</span>
              <span>g</span>
              <span>n</span><br>
              <span>up</span>
              </h2>
        </div>
        </div>
        
</template>

<style>
#description {
color:chartreuse
}
h3{
  color:brown
}

.vueperslide {
}
.magic {
    color:red;
}

/*html {
  font: 12px Tahoma, Geneva, sans-serif;
}*/
/** {
    margin: 0;
    padding: 0;
    color: #fff;
}*/

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


::selection {
  background: transparent;
}

/* JUMP */
h2 {
  cursor: default;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  margin: auto;
  display: block;
  text-align: center;
}

h2 span {
  position: relative;
  top: 20px;
  display: inline-block;
  -webkit-animation: bounce 0.3s ease infinite alternate;
  font-size: 80px;
  color: #fff;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
    0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
    0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
}

h2 span:nth-child(1) {
  -webkit-animation-delay: 0.1s;
}

h2 span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
}

h2 span:nth-child(3) {
  -webkit-animation-delay: 0.3s;
}

h2 span:nth-child(4) {
  -webkit-animation-delay: 0.4s;
}

h2 span:nth-child(5) {
  -webkit-animation-delay: 0.5s;
}




/* ANIMATION */
@-webkit-keyframes bounce {
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
      0 50px 25px rgba(0, 0, 0, 0.2);
  }
}

</style>
