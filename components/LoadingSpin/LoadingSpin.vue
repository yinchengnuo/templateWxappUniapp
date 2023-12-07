<template>
  <view style="display: flex; flex-wrap: wrap">
    <view :class="loading || name"></view>
  </view>
</template>

<script>
export default {
  name: "LoadingSpin",
  props: {
    loading: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      name: getApp()
        .globalData.loadings.slice()
        .sort(() => Math.random() - 0.5)[0],
    };
  },
};
</script>

<style lang="scss" scoped>
/* HTML: <div class="clones01"></div> */
// .clones01 {
//   width: 25px;
//   aspect-ratio: 1;
//   background: #60b99a;
//   animation: clones01 1.5s infinite;
// }

// @keyframes clones01 {
//   0%,
//   100% {
//     transform: translate(-30px, -30px);
//     box-shadow: 0 0 #f77825, 0 0 #554236;
//   }

//   40% {
//     transform: translate(30px, 30px);
//     box-shadow: -10px -10px #f77825, -20px -20px #554236;
//   }

//   50% {
//     transform: translate(30px, 30px);
//     box-shadow: 0 0 #f77825, 0 0 #554236;
//   }

//   90% {
//     transform: translate(-30px, -30px);
//     box-shadow: 10px 10px #f77825, 20px 20px #554236;
//   }
// }

/* HTML: <div class="clones02"></div> */
// .clones02 {
//   width: 28px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: #f10c49;
//   animation: clones02 1.5s infinite;
// }

// @keyframes clones02 {
//   0%,
//   100% {
//     transform: translate(-35px);
//     box-shadow: 0 0 #f4dd51, 0 0 #e3aad6;
//   }

//   40% {
//     transform: translate(35px);
//     box-shadow: -15px 0 #f4dd51, -30px 0 #e3aad6;
//   }

//   50% {
//     transform: translate(35px);
//     box-shadow: 0 0 #f4dd51, 0 0 #e3aad6;
//   }

//   90% {
//     transform: translate(-35px);
//     box-shadow: 15px 0 #f4dd51, 30px 0 #e3aad6;
//   }
// }

/* HTML: <div class="clones03"></div> */
// .clones03 {
//   width: 28px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: #e3aad6;
//   transform-origin: top;
//   display: grid;
//   animation: clones03-0 1s infinite linear;
// }

// .clones03::before,
// .clones03::after {
//   content: "";
//   grid-area: 1/1;
//   background: #f4dd51;
//   border-radius: 50%;
//   transform-origin: top;
//   animation: inherit;
//   animation-name: clones03-1;
// }

// .clones03::after {
//   background: #f10c49;
//   --s: 180deg;
// }

// @keyframes clones03-0 {
//   0%,
//   20% {
//     transform: rotate(0);
//   }

//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes clones03-1 {
//   50% {
//     transform: rotate(var(--s, 90deg));
//   }

//   100% {
//     transform: rotate(0);
//   }
// }

/* HTML: <div class="clones04"></div> */
// .clones04 {
//   width: 30px;
//   aspect-ratio: 1;
//   background: #554236;
//   display: grid;
//   animation: clones04-0 1s infinite linear;
// }

// .clones04::before,
// .clones04::after {
//   content: "";
//   grid-area: 1/1;
//   background: #f77825;
//   animation: inherit;
//   animation-name: clones04-1;
// }

// .clones04::after {
//   background: #60b99a;
//   --s: 60deg;
// }

// @keyframes clones04-0 {
//   0%,
//   20% {
//     transform: rotate(0);
//   }

//   100% {
//     transform: rotate(90deg);
//   }
// }

// @keyframes clones04-1 {
//   50% {
//     transform: rotate(var(--s, 30deg));
//   }

//   100% {
//     transform: rotate(0);
//   }
// }

/* HTML: <div class="clones05"></div> */
// .clones05 {
//   width: 30px;
//   aspect-ratio: 1;
//   background: #554236;
//   display: grid;
//   transform-origin: top right;
//   animation: clones05-0 4s infinite linear;
// }

// .clones05::before,
// .clones05::after {
//   content: "";
//   grid-area: 1/1;
//   background: #f77825;
//   transform-origin: inherit;
//   animation: inherit;
//   animation-name: clones05-1;
//   animation-duration: 1s;
// }

// .clones05::after {
//   background: #60b99a;
//   --s: 60deg;
// }

// @keyframes clones05-0 {
//   0%,
//   5% {
//     transform: rotate(0);
//   }

//   25%,
//   30% {
//     transform: rotate(90deg);
//   }

//   50%,
//   55% {
//     transform: rotate(180deg);
//   }

//   75%,
//   80% {
//     transform: rotate(270deg);
//   }

//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes clones05-1 {
//   50% {
//     transform: rotate(var(--s, 30deg));
//   }

//   100% {
//     transform: rotate(0);
//   }
// }

/* HTML: <div class="clones06"></div> */
// .clones06 {
//   width: 30px;
//   aspect-ratio: 1;
//   background: #554236;
//   display: grid;
//   transform-origin: top right;
//   animation: clones06-0 1s infinite linear;
// }

// .clones06::before,
// .clones06::after {
//   content: "";
//   grid-area: 1/1;
//   background: #f77825;
//   transform-origin: inherit;
//   animation: inherit;
//   animation-name: clones06-1;
// }

// .clones06::after {
//   background: #60b99a;
//   --s: 180deg;
// }

// @keyframes clones06-0 {
//   70%,
//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes clones06-1 {
//   30% {
//     transform: rotate(var(--s, 90deg));
//   }

//   70% {
//     transform: rotate(0);
//   }
// }

/* HTML: <div class="clones07"></div> */
// .clones07 {
//   width: 28px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: #f10c49;
//   animation: clones07 2s infinite;
// }

// @keyframes clones07 {
//   0%,
//   100% {
//     transform: translate(-30px, -30px);
//     box-shadow: 0 0 #f4dd51, 0 0 #e3aad6;
//   }

//   12.5% {
//     transform: translate(30px, -30px);
//     box-shadow: -15px 0 #f4dd51, -30px 0 #e3aad6;
//   }

//   25% {
//     transform: translate(30px, -30px);
//     box-shadow: 0 0 #f4dd51, 0 0 #e3aad6;
//   }

//   37.5% {
//     transform: translate(30px, 30px);
//     box-shadow: 0 -15px #f4dd51, 0 -30px #e3aad6;
//   }

//   50% {
//     transform: translate(30px, 30px);
//     box-shadow: 0 0 #f4dd51, 0 0 #e3aad6;
//   }

//   62.5% {
//     transform: translate(-30px, 30px);
//     box-shadow: 15px 0 #f4dd51, 30px 0 #e3aad6;
//   }

//   75% {
//     transform: translate(-30px, 30px);
//     box-shadow: 0 0 #f4dd51, 0 0 #e3aad6;
//   }

//   87.5% {
//     transform: translate(-30px, -30px);
//     box-shadow: 0 15px #f4dd51, 0 30px #e3aad6;
//   }
// }

/* HTML: <div class="clones08"></div> */
.clones08 {
  width: 60px;
  aspect-ratio: 1;
  display: flex;
  --c1: linear-gradient(#554236 0 0);
  --c2: linear-gradient(#f77825 0 0);
  --s: calc(100% / 3) calc(100% / 3);
  background: var(--c1) 0 0, var(--c2) 50% 0, var(--c1) 100% 0, var(--c2) 0 50%, var(--c2) 100% 50%, var(--c1) 0 100%, var(--c2) 50% 100%, var(--c1) 100% 100%;
  background-repeat: no-repeat;
  animation: clones08-0 1.5s infinite alternate;
}

.clones08:before {
  content: "";
  width: calc(100% / 3);
  height: calc(100% / 3);
  background: #60b99a;
  animation: inherit;
  animation-delay: 0s;
  animation-name: clones08-1;
}

@keyframes clones08-0 {
  0%,
  12.49% {
    background-size: var(--s), 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  12.5%,
  24.9% {
    background-size: var(--s), var(--s), 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  25%,
  37.4% {
    background-size: var(--s), var(--s), var(--s), 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  37.5%,
  49.9% {
    background-size: var(--s), var(--s), var(--s), 0 0, var(--s), 0 0, 0 0, 0 0;
  }

  50%,
  61.4% {
    background-size: var(--s), var(--s), var(--s), 0 0, var(--s), 0 0, 0 0, var(--s);
  }

  62.5%,
  74.9% {
    background-size: var(--s), var(--s), var(--s), 0 0, var(--s), 0 0, var(--s), var(--s);
  }

  75%,
  86.4% {
    background-size: var(--s), var(--s), var(--s), 0 0, var(--s), var(--s), var(--s), var(--s);
  }

  87.5%,
  100% {
    background-size: var(--s), var(--s), var(--s), var(--s), var(--s), var(--s), var(--s), var(--s);
  }
}

@keyframes clones08-1 {
  0%,
  5% {
    transform: translate(0, 0);
  }

  12.5% {
    transform: translate(100%, 0);
  }

  25% {
    transform: translate(200%, 0);
  }

  37.5% {
    transform: translate(200%, 100%);
  }

  50% {
    transform: translate(200%, 200%);
  }

  62.5% {
    transform: translate(100%, 200%);
  }

  75% {
    transform: translate(0, 200%);
  }

  87.5% {
    transform: translate(0, 100%);
  }

  95%,
  100% {
    transform: translate(100%, 100%);
  }
}

/* HTML: <div class="clones09"></div> */
// .clones09 {
//   width: 28px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: #f10c49;
//   animation: clones09 2s infinite;
// }

// @keyframes clones09 {
//   0% {
//     box-shadow: 0 -16px #f4dd51, calc(16px * 0.707) calc(-16px * 0.707) #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6;
//   }

//   12.5% {
//     box-shadow: 0 0 #f4dd51, calc(16px * 0.707) calc(-16px * 0.707) #e3aad6, 16px 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6;
//   }

//   25% {
//     box-shadow: 0 0 #f4dd51, 0 0 #e3aad6, 16px 0 #f4dd51, calc(16px * 0.707) calc(16px * 0.707) #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6;
//   }

//   37.5% {
//     box-shadow: 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, calc(16px * 0.707) calc(16px * 0.707) #e3aad6, 0 16px #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6;
//   }

//   50% {
//     box-shadow: 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 16px #f4dd51, calc(-16px * 0.707) calc(16px * 0.707) #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6;
//   }

//   62.5% {
//     box-shadow: 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, calc(-16px * 0.707) calc(16px * 0.707) #e3aad6, -16px 0 #f4dd51, 0 0 #e3aad6;
//   }

//   75% {
//     box-shadow: 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, -16px 0 #f4dd51, calc(-16px * 0.707) calc(-16px * 0.707) #e3aad6;
//   }

//   87.5% {
//     box-shadow: 0 -16px #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, calc(-16px * 0.707) calc(-16px * 0.707) #e3aad6;
//   }

//   100% {
//     box-shadow: 0 -16px #f4dd51, calc(16px * 0.707) calc(-16px * 0.707) #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6;
//   }
// }

/* HTML: <div class="clones10"></div> */
.clones10 {
  width: 22px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #f10c49;
  animation: clones10 1.5s infinite linear;
}

@keyframes clones10 {
  0% {
    box-shadow: 0 -30px #f4dd51, calc(30px * 0.707) calc(-30px * 0.707) #e3aad6, 30px 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6;
  }

  12.5% {
    box-shadow: 0 0 #f4dd51, calc(30px * 0.707) calc(-30px * 0.707) #e3aad6, 30px 0 #f4dd51, calc(30px * 0.707) calc(30px * 0.707) #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6;
  }

  25% {
    box-shadow: 0 0 #f4dd51, 0 0 #e3aad6, 30px 0 #f4dd51, calc(30px * 0.707) calc(30px * 0.707) #e3aad6, 0 30px #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6;
  }

  37.5% {
    box-shadow: 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, calc(30px * 0.707) calc(30px * 0.707) #e3aad6, 0 30px #f4dd51, calc(-30px * 0.707) calc(30px * 0.707) #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6;
  }

  50% {
    box-shadow: 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 30px #f4dd51, calc(-30px * 0.707) calc(30px * 0.707) #e3aad6, -30px 0 #f4dd51, 0 0 #e3aad6;
  }

  62.5% {
    box-shadow: 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, calc(-30px * 0.707) calc(30px * 0.707) #e3aad6, -30px 0 #f4dd51, calc(-30px * 0.707) calc(-30px * 0.707) #e3aad6;
  }

  75% {
    box-shadow: 0 -30px #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, -30px 0 #f4dd51, calc(-30px * 0.707) calc(-30px * 0.707) #e3aad6;
  }

  87.5% {
    box-shadow: 0 -30px #f4dd51, calc(30px * 0.707) calc(-30px * 0.707) #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, calc(-30px * 0.707) calc(-30px * 0.707) #e3aad6;
  }

  100% {
    box-shadow: 0 -30px #f4dd51, calc(30px * 0.707) calc(-30px * 0.707) #e3aad6, 30px 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6, 0 0 #f4dd51, 0 0 #e3aad6;
  }
}

/* HTML: <div class="clones11"></div> */
// .clones11 {
//   height: 40px;
//   aspect-ratio: 0.866;
//   display: grid;
//   background: conic-gradient(from -121deg at right, #0000, #bf1e62 1deg 60deg, #0000 61deg);
//   animation: clones11-0 2s infinite;
//   transform-origin: 33% 50%;
// }

// .clones11:before,
// .clones11:after {
//   content: "";
//   grid-area: 1/1;
//   background: conic-gradient(from -121deg at right, #0000, #ffa588 1deg 60deg, #0000 61deg);
//   animation: inherit;
//   animation-name: clones11-1;
// }

// .clones11:after {
//   --s: 30px;
//   background: conic-gradient(from -121deg at right, #0000, #027b7f 1deg 60deg, #0000 61deg);
// }

// @keyframes clones11-0 {
//   0% {
//     transform: translate(-30px) rotate(0) translate(0) rotate(0);
//   }

//   25% {
//     transform: translate(30px) rotate(0) translate(0) rotate(0);
//   }

//   50% {
//     transform: translate(30px) rotate(180deg) translate(0) rotate(0);
//   }

//   75% {
//     transform: translate(30px) rotate(180deg) translate(60px) rotate(0);
//   }

//   100% {
//     transform: translate(30px) rotate(180deg) translate(60px) rotate(180deg);
//   }
// }

// @keyframes clones11-1 {
//   0%,
//   25%,
//   50%,
//   75%,
//   100% {
//     transform: translate(0);
//   }

//   12.5%,
//   62.5% {
//     transform: translate(var(--s, 15px));
//   }
// }

/* HTML: <div class="clones12"></div> */
// .clones12 {
//   height: 40px;
//   aspect-ratio: 0.866;
//   display: grid;
//   background: conic-gradient(from -121deg at right, #0000, #bf1e62 1deg 60deg, #0000 61deg);
//   animation: clones12 2s infinite linear;
//   transform-origin: 33% 50%;
// }

// .clones12:before,
// .clones12:after {
//   content: "";
//   grid-area: 1/1;
//   background: conic-gradient(from -121deg at right, #0000, #ffa588 1deg 60deg, #0000 61deg);
//   transform-origin: inherit;
//   animation: inherit;
// }

// .clones12:after {
//   background: conic-gradient(from -121deg at right, #0000, #027b7f 1deg 60deg, #0000 61deg);
//   animation-duration: 3s;
// }

// @keyframes clones12 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="clones13"></div> */
// .clones13 {
//   width: 80px;
//   aspect-ratio: 1.154;
//   background: repeating-conic-gradient(from -30deg, #027b7f 0 60deg, #ffa588 0 120deg, #bf1e62 0 180deg);
//   animation: clones13 1.5s infinite alternate;
// }

// @keyframes clones13 {
//   0%,
//   10% {
//     clip-path: polygon(50% 50%, 25% 100%, 25% 100%, 25% 100%, 25% 100%, 75% 100%, 75% 100%, 75% 100%);
//   }

//   33%,
//   43% {
//     clip-path: polygon(50% 50%, 0 50%, 0 50%, 0 50%, 25% 100%, 75% 100%, 100% 50%, 100% 50%);
//   }

//   66%,
//   76% {
//     clip-path: polygon(50% 50%, 25% 0, 25% 0, 0 50%, 25% 100%, 75% 100%, 100% 50%, 75% 0);
//   }

//   95%,
//   100% {
//     clip-path: polygon(50% 50%, 75% 0, 25% 0, 0 50%, 25% 100%, 75% 100%, 100% 50%, 75% 0);
//   }
// }

/* HTML: <div class="clones14"></div> */
.clones14 {
  width: 40px;
  aspect-ratio: 1.154;
  display: grid;
  background: conic-gradient(from 149deg at top, #0000, #bf1e62 1deg 60deg, #0000 61deg);
  animation: clones14 2s infinite cubic-bezier(0.5, 500, 0.5, -500);
  transform-origin: top;
}

.clones14:before,
.clones14:after {
  content: "";
  grid-area: 1/1;
  background: conic-gradient(from 149deg at top, #0000, #ffa588 1deg 60deg, #0000 61deg);
  transform-origin: inherit;
  animation: inherit;
}

.clones14:after {
  background: conic-gradient(from 149deg at top, #0000, #027b7f 1deg 60deg, #0000 61deg);
  animation-timing-function: cubic-bezier(0.5, 800, 0.5, -800);
}

@keyframes clones14 {
  100% {
    transform: rotate(0.2deg);
  }
}

/* HTML: <div class="clones15"></div> */
// .clones15 {
//   width: 32px;
//   height: 64px;
//   background: radial-gradient(farthest-side at bottom, #f10c49 90%, #0000), radial-gradient(farthest-side at top, #f10c49 90%, #0000), radial-gradient(farthest-side at bottom, #f4dd51 90%, #0000),
//     radial-gradient(farthest-side at top, #f4dd51 90%, #0000), radial-gradient(farthest-side at bottom, #e3aad6 90%, #0000), radial-gradient(farthest-side at top, #e3aad6 90%, #0000);
//   background-size: 100% 25%;
//   background-repeat: no-repeat;
//   animation: clones15 2s infinite;
// }

// @keyframes clones15 {
//   0% {
//     background-position: 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3), 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3), 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3);
//   }

//   16.67% {
//     background-position: 0 calc(0 * 100% / 3), 0 calc(3 * 100% / 3), 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3), 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3);
//   }

//   33.33% {
//     background-position: 0 calc(0 * 100% / 3), 0 calc(3 * 100% / 3), 0 calc(0 * 100% / 3), 0 calc(3 * 100% / 3), 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3);
//   }

//   50% {
//     background-position: 0 calc(0 * 100% / 3), 0 calc(3 * 100% / 3), 0 calc(0 * 100% / 3), 0 calc(3 * 100% / 3), 0 calc(0 * 100% / 3), 0 calc(3 * 100% / 3);
//   }

//   66.67% {
//     background-position: 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3), 0 calc(0 * 100% / 3), 0 calc(3 * 100% / 3), 0 calc(0 * 100% / 3), 0 calc(3 * 100% / 3);
//   }

//   83.33% {
//     background-position: 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3), 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3), 0 calc(0 * 100% / 3), 0 calc(3 * 100% / 3);
//   }

//   100% {
//     background-position: 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3), 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3), 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3);
//   }
// }

/* HTML: <div class="clones16"></div> */
.clones16 {
  width: 64px;
  aspect-ratio: 1;
  background: radial-gradient(farthest-side at bottom right, #f10c49 90%, #0000), radial-gradient(farthest-side at bottom left, #f10c49 90%, #0000), radial-gradient(farthest-side at top right, #f10c49 90%, #0000),
    radial-gradient(farthest-side at top left, #f10c49 90%, #0000), radial-gradient(farthest-side at bottom right, #f4dd51 90%, #0000), radial-gradient(farthest-side at bottom left, #f4dd51 90%, #0000),
    radial-gradient(farthest-side at top right, #f4dd51 90%, #0000), radial-gradient(farthest-side at top left, #f4dd51 90%, #0000), radial-gradient(farthest-side at bottom right, #e3aad6 90%, #0000),
    radial-gradient(farthest-side at bottom left, #e3aad6 90%, #0000), radial-gradient(farthest-side at top right, #e3aad6 90%, #0000), radial-gradient(farthest-side at top left, #e3aad6 90%, #0000);
  background-size: 25% 25%;
  background-repeat: no-repeat;
  animation: clones16 2s infinite;
}

@keyframes clones16 {
  0% {
    background-position: calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3),
      calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3),
      calc(2 * 100% / 3) calc(2 * 100% / 3);
  }

  16.67% {
    background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3),
      calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3),
      calc(2 * 100% / 3) calc(2 * 100% / 3);
  }

  33.33% {
    background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3), calc(0 * 100% / 3) calc(0 * 100% / 3),
      calc(3 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3),
      calc(2 * 100% / 3) calc(2 * 100% / 3);
  }

  50% {
    background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3), calc(0 * 100% / 3) calc(0 * 100% / 3),
      calc(3 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3), calc(0 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3),
      calc(3 * 100% / 3) calc(3 * 100% / 3);
  }

  66.67% {
    background-position: calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(0 * 100% / 3) calc(0 * 100% / 3),
      calc(3 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3), calc(0 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3),
      calc(3 * 100% / 3) calc(3 * 100% / 3);
  }

  83.33% {
    background-position: calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3),
      calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(0 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3),
      calc(3 * 100% / 3) calc(3 * 100% / 3);
  }

  100% {
    background-position: calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3),
      calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3),
      calc(2 * 100% / 3) calc(2 * 100% / 3);
  }
}

/* HTML: <div class="clones17"></div> */
// .clones17 {
//   width: 60px;
//   aspect-ratio: 1;
//   background: linear-gradient(45deg, #60b99a 50%, #0000 0), linear-gradient(45deg, #0000 50%, #60b99a 0), linear-gradient(-45deg, #f77825 50%, #0000 0), linear-gradient(-45deg, #0000 50%, #f77825 0), linear-gradient(#554236 0 0);
//   background-size: 50% 50%;
//   background-repeat: no-repeat;
//   animation: clones17 1s infinite alternate;
// }

// @keyframes clones17 {
//   0%,
//   20% {
//     background-position: 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
//     background-size: 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
//   }

//   80%,
//   100% {
//     background-position: 0 100%, 100% 0, 100% 100%, 0 0, 50% 50%;
//     background-size: 50% 50%, 50% 50%, 50% 50%, 50% 50%, 100% 100%;
//   }
// }

/* HTML: <div class="clones18"></div> */
.clones18 {
  width: 60px;
  aspect-ratio: 1;
  background: linear-gradient(45deg, #60b99a 50%, #0000 0), linear-gradient(45deg, #0000 50%, #60b99a 0), linear-gradient(-45deg, #f77825 50%, #0000 0), linear-gradient(-45deg, #0000 50%, #f77825 0), linear-gradient(#554236 0 0);
  background-size: 50% 50%;
  background-repeat: no-repeat;
  animation: clones18 1.5s infinite;
}

@keyframes clones18 {
  0% {
    background-position: 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
  }

  25% {
    background-position: 0 100%, 100% 0, 50% 50%, 50% 50%, 50% 50%;
  }

  50% {
    background-position: 0 100%, 100% 0, 100% 100%, 0 0, 50% 50%;
  }

  75% {
    background-position: 50% 50%, 50% 50%, 100% 100%, 0 0, 50% 50%;
  }

  100% {
    background-position: 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
  }
}

/* HTML: <div class="clones19"></div> */
// .clones19 {
//   width: 60px;
//   aspect-ratio: 1;
//   background: linear-gradient(#60b99a 0 0) calc(1 * 100% / 3) 50%/25% 50%, linear-gradient(#60b99a 0 0) calc(2 * 100% / 3) 50%/25% 50%, linear-gradient(#f77825 0 0) 50% calc(1 * 100% / 3) / 50% 25%,
//     linear-gradient(#f77825 0 0) 50% calc(2 * 100% / 3) / 50% 25%, linear-gradient(#554236 0 0) calc(1 * 100% / 3) calc(1 * 100% / 3) / 25% 25%, linear-gradient(#554236 0 0) calc(2 * 100% / 3) calc(1 * 100% / 3) / 25% 25%,
//     linear-gradient(#554236 0 0) calc(1 * 100% / 3) calc(2 * 100% / 3) / 25% 25%, linear-gradient(#554236 0 0) calc(2 * 100% / 3) calc(2 * 100% / 3) / 25% 25%;
//   background-repeat: no-repeat;
//   animation: clones19 1s infinite alternate;
// }

// @keyframes clones19 {
//   90%,
//   100% {
//     background-position: 0 50%, 100% 50%, 50% 0, 50% 100%, 0 0, 100% 0, 0 100%, 100% 100%;
//   }
// }

/* HTML: <div class="clones20"></div> */
.clones20 {
  width: 60px;
  aspect-ratio: 1;
  background: linear-gradient(#f77825 0 0), linear-gradient(#f77825 0 0), linear-gradient(#f77825 0 0), linear-gradient(#f77825 0 0), linear-gradient(#60b99a 0 0), linear-gradient(#60b99a 0 0), linear-gradient(#554236 0 0),
    linear-gradient(#554236 0 0);
  background-size: 25% 25%, 25% 25%, 25% 25%, 25% 25%, 25% 50%, 25% 50%, 50% 25%, 50% 25%;
  background-repeat: no-repeat;
  animation: clones20 1.5s infinite alternate;
}

@keyframes clones20 {
  0%,
  10% {
    background-position: calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) 50%, calc(2 * 100% / 3) 50%,
      50% calc(1 * 100% / 3), 50% calc(2 * 100% / 3);
  }

  33% {
    background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3), calc(1 * 100% / 3) 50%, calc(2 * 100% / 3) 50%,
      50% calc(1 * 100% / 3), 50% calc(2 * 100% / 3);
  }

  66% {
    background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3), calc(0 * 100% / 3) 50%, calc(3 * 100% / 3) 50%,
      50% calc(1 * 100% / 3), 50% calc(2 * 100% / 3);
  }

  90%,
  100% {
    background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3), calc(0 * 100% / 3) 50%, calc(3 * 100% / 3) 50%,
      50% calc(0 * 100% / 3), 50% calc(3 * 100% / 3);
  }
}

/* HTML: <div class="cut01"></div> */
.cut01 {
  width: 70px;
  height: 26px;
  background: #d0af03;
  border-radius: 50px;
  --c: no-repeat radial-gradient(farthest-side, #000 92%, #0000);
  --s: 18px 18px;
  -webkit-mask: var(--c) left 4px top 50%, var(--c) center, var(--c) right 4px top 50%, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: cut01 1.5s infinite;
}

@keyframes cut01 {
  0% {
    -webkit-mask-size: 0 0, 0 0, 0 0, auto;
  }

  16.67% {
    -webkit-mask-size: var(--s), 0 0, 0 0, auto;
  }

  33.33% {
    -webkit-mask-size: var(--s), var(--s), 0 0, auto;
  }

  50% {
    -webkit-mask-size: var(--s), var(--s), var(--s), auto;
  }

  66.67% {
    -webkit-mask-size: 0 0, var(--s), var(--s), auto;
  }

  83.33% {
    -webkit-mask-size: 0 0, 0 0, var(--s), auto;
  }

  100% {
    -webkit-mask-size: 0 0, 0 0, 0 0, auto;
  }
}

/* HTML: <div class="cut02"></div> */
// .cut02 {
//   width: 70px;
//   height: 26px;
//   background: #3fd97f;
//   --c: no-repeat linear-gradient(#000 0 0);
//   --s: 18px 18px;
//   -webkit-mask: var(--c) left 4px top 50%, var(--c) center, var(--c) right 4px top 50%, linear-gradient(#000 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;
//   animation: cut02 1.5s infinite;
// }

// @keyframes cut02 {
//   0% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, auto;
//   }

//   16.67% {
//     -webkit-mask-size: var(--s), 0 0, 0 0, auto;
//   }

//   33.33% {
//     -webkit-mask-size: var(--s), var(--s), 0 0, auto;
//   }

//   50% {
//     -webkit-mask-size: var(--s), var(--s), var(--s), auto;
//   }

//   66.67% {
//     -webkit-mask-size: 0 0, var(--s), var(--s), auto;
//   }

//   83.33% {
//     -webkit-mask-size: 0 0, 0 0, var(--s), auto;
//   }

//   100% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, auto;
//   }
// }

/* HTML: <div class="cut03"></div> */
// .cut03 {
//   width: 78px;
//   height: calc(27px * 0.866 + 8px);
//   background: #fd135a;
//   --c1: conic-gradient(from 150deg at top, #000 60deg, #0000 0);
//   --c2: conic-gradient(from -30deg at bottom, #000 60deg, #0000 0);
//   --s: 27px calc(27px * 0.866);
//   clip-path: polygon(18.1px 0, calc(100% - 18.1px) 0, 100% 100%, 0 100%);
//   -webkit-mask: var(--c1) left 8px top 50%, var(--c2) center, var(--c1) right 8px top 50%, linear-gradient(#000 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;
//   -webkit-mask-repeat: no-repeat;
//   animation: cut03 1.5s infinite;
// }

// @keyframes cut03 {
//   0% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, auto;
//   }

//   16.67% {
//     -webkit-mask-size: var(--s), 0 0, 0 0, auto;
//   }

//   33.33% {
//     -webkit-mask-size: var(--s), var(--s), 0 0, auto;
//   }

//   50% {
//     -webkit-mask-size: var(--s), var(--s), var(--s), auto;
//   }

//   66.67% {
//     -webkit-mask-size: 0 0, var(--s), var(--s), auto;
//   }

//   83.33% {
//     -webkit-mask-size: 0 0, 0 0, var(--s), auto;
//   }

//   100% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, auto;
//   }
// }

/* HTML: <div class="cut04"></div> */
// .cut04 {
//   width: 48px;
//   height: 48px;
//   background: #d0af03;
//   border-radius: 9px;
//   --c: no-repeat radial-gradient(farthest-side, #000 92%, #0000);
//   --s: 18px 18px;
//   -webkit-mask: var(--c) left 4px top 4px, var(--c) right 4px top 4px, var(--c) right 4px bottom 4px, var(--c) left 4px bottom 4px, linear-gradient(#000 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;
//   animation: cut04 1.5s infinite;
// }

// @keyframes cut04 {
//   0% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, 0 0, auto;
//   }

//   12.5% {
//     -webkit-mask-size: var(--s), 0 0, 0 0, 0 0, auto;
//   }

//   25% {
//     -webkit-mask-size: var(--s), var(--s), 0 0, 0 0, auto;
//   }

//   37.5% {
//     -webkit-mask-size: var(--s), var(--s), var(--s), 0 0, auto;
//   }

//   50% {
//     -webkit-mask-size: var(--s), var(--s), var(--s), var(--s), auto;
//   }

//   62.5% {
//     -webkit-mask-size: 0 0, var(--s), var(--s), var(--s), auto;
//   }

//   75% {
//     -webkit-mask-size: 0 0, 0 0, var(--s), var(--s), auto;
//   }

//   87.5% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, var(--s), auto;
//   }

//   100% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, 0 0, auto;
//   }
// }

/* HTML: <div class="cut05"></div> */
// .cut05 {
//   width: 48px;
//   height: 48px;
//   background: #3fd97f;
//   --c: no-repeat linear-gradient(#000 0 0);
//   --s: 18px 18px;
//   -webkit-mask: var(--c) left 4px top 4px, var(--c) right 4px top 4px, var(--c) right 4px bottom 4px, var(--c) left 4px bottom 4px, linear-gradient(#000 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;
//   animation: cut05 1.5s infinite;
// }

// @keyframes cut05 {
//   0% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, 0 0, auto;
//   }

//   12.5% {
//     -webkit-mask-size: var(--s), 0 0, 0 0, 0 0, auto;
//   }

//   25% {
//     -webkit-mask-size: var(--s), var(--s), 0 0, 0 0, auto;
//   }

//   37.5% {
//     -webkit-mask-size: var(--s), var(--s), var(--s), 0 0, auto;
//   }

//   50% {
//     -webkit-mask-size: var(--s), var(--s), var(--s), var(--s), auto;
//   }

//   62.5% {
//     -webkit-mask-size: 0 0, var(--s), var(--s), var(--s), auto;
//   }

//   75% {
//     -webkit-mask-size: 0 0, 0 0, var(--s), var(--s), auto;
//   }

//   87.5% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, var(--s), auto;
//   }

//   100% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, 0 0, auto;
//   }
// }

/* HTML: <div class="cut06"></div> */
// .cut06 {
//   width: 74px;
//   height: calc(27px * 0.866 + 6px);
//   display: grid;
// }

// .cut06:before,
// .cut06:after {
//   content: "";
//   grid-area: 1/1;
//   background: #fd135a;
//   --c1: conic-gradient(from 150deg at top, #000 60deg, #0000 0);
//   --c2: conic-gradient(from -30deg at bottom, #000 60deg, #0000 0);
//   --s: 27px calc(27px * 0.866);
//   clip-path: polygon(17px 0, calc(100% - 17px) 0, 100% 100%, 0 100%);
//   -webkit-mask: var(--c1) left 6px top 4px, var(--c2) center, var(--c1) right 6px top 4px, linear-gradient(#000 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;
//   -webkit-mask-repeat: no-repeat;
//   animation: cut06 2s infinite both;
// }

// .cut06:after {
//   transform: rotate(180deg);
//   transform-origin: 50% 99%;
//   animation-delay: 0.5s;
// }

// @keyframes cut06 {
//   0% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, auto;
//   }

//   8.33% {
//     -webkit-mask-size: var(--s), 0 0, 0 0, auto;
//   }

//   16.67% {
//     -webkit-mask-size: var(--s), var(--s), 0 0, auto;
//   }

//   25%,
//   50% {
//     -webkit-mask-size: var(--s), var(--s), var(--s), auto;
//   }

//   58.33% {
//     -webkit-mask-size: 0 0, var(--s), var(--s), auto;
//   }

//   66.67% {
//     -webkit-mask-size: 0 0, 0 0, var(--s), auto;
//   }

//   75%,
//   100% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, auto;
//   }
// }

/* HTML: <div class="cut07"></div> */
// .cut07 {
//   width: 48px;
//   height: 48px;
//   background: #d0af03;
//   border-radius: 50%;
//   --c: no-repeat linear-gradient(#000 0 0);
//   --s: 15px 15px;
//   -webkit-mask: var(--c) top, var(--c) right, var(--c) bottom, var(--c) left, linear-gradient(#000 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;
//   animation: cut07 1.5s infinite;
// }

// @keyframes cut07 {
//   0% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, 0 0, auto;
//   }

//   12.5% {
//     -webkit-mask-size: var(--s), 0 0, 0 0, 0 0, auto;
//   }

//   25% {
//     -webkit-mask-size: var(--s), var(--s), 0 0, 0 0, auto;
//   }

//   37.5% {
//     -webkit-mask-size: var(--s), var(--s), var(--s), 0 0, auto;
//   }

//   45%,
//   55% {
//     -webkit-mask-size: var(--s), var(--s), var(--s), var(--s), auto;
//   }

//   62.5% {
//     -webkit-mask-size: 0 0, var(--s), var(--s), var(--s), auto;
//   }

//   75% {
//     -webkit-mask-size: 0 0, 0 0, var(--s), var(--s), auto;
//   }

//   87.5% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, var(--s), auto;
//   }

//   100% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, 0 0, auto;
//   }
// }

/* HTML: <div class="cut08"></div> */
// .cut08 {
//   width: 48px;
//   height: 48px;
//   background: #3fd97f;
//   --c: no-repeat radial-gradient(farthest-side, #000 92%, #0000);
//   --s: 20px 20px;
//   -webkit-mask: var(--c) top -8px left 50%, var(--c) right -8px top 50%, var(--c) bottom -8px left 50%, var(--c) left -8px top 50%, linear-gradient(#000 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;
//   animation: cut08 1.5s infinite;
// }

// @keyframes cut08 {
//   0% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, 0 0, auto;
//   }

//   12.5% {
//     -webkit-mask-size: var(--s), 0 0, 0 0, 0 0, auto;
//   }

//   25% {
//     -webkit-mask-size: var(--s), var(--s), 0 0, 0 0, auto;
//   }

//   37.5% {
//     -webkit-mask-size: var(--s), var(--s), var(--s), 0 0, auto;
//   }

//   45%,
//   55% {
//     -webkit-mask-size: var(--s), var(--s), var(--s), var(--s), auto;
//   }

//   62.5% {
//     -webkit-mask-size: 0 0, var(--s), var(--s), var(--s), auto;
//   }

//   75% {
//     -webkit-mask-size: 0 0, 0 0, var(--s), var(--s), auto;
//   }

//   87.5% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, var(--s), auto;
//   }

//   100% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, 0 0, auto;
//   }
// }

/* HTML: <div class="cut09"></div> */
// .cut09 {
//   width: 50px;
//   height: calc(50px * 0.866);
//   background: #fd135a;
//   clip-path: polygon(50% 0, 100% 100%, 0 100%);
//   --c: at 50% 66%, #000 60deg, #0000 0;
//   -webkit-mask: conic-gradient(from 30deg var(--c)) right, conic-gradient(from 150deg var(--c)) bottom, conic-gradient(from -90deg var(--c)) left, linear-gradient(#000 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;
//   -webkit-mask-repeat: no-repeat;
//   animation: cut09 1.5s infinite;
// }

// @keyframes cut09 {
//   0% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, auto;
//   }

//   13.33% {
//     -webkit-mask-size: 100% 100%, 0 0, 0 0, auto;
//   }

//   26.67% {
//     -webkit-mask-size: 100% 100%, 100% 100%, 0 0, auto;
//   }

//   40%,
//   60% {
//     -webkit-mask-size: 100% 100%, 100% 100%, 100% 100%, auto;
//   }

//   73.33% {
//     -webkit-mask-size: 0 0, 100% 100%, 100% 100%, auto;
//   }

//   86.67% {
//     -webkit-mask-size: 0 0, 0 0, 100% 100%, auto;
//   }

//   100% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, auto;
//   }
// }

/* HTML: <div class="cut10"></div> */
// .cut10 {
//   width: 70px;
//   height: 70px;
//   background: #398eb6;
//   border-radius: 50px;
//   -webkit-mask: radial-gradient(circle 31px at 50% calc(100% + 13px), #000 95%, #0000) top 4px left 50%, radial-gradient(circle 31px, #000 95%, #0000) center, radial-gradient(circle 31px at 50% -13px, #000 95%, #0000) bottom 4px left 50%,
//     linear-gradient(#000 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;
//   -webkit-mask-repeat: no-repeat;
//   animation: cut10 1.5s infinite;
// }

// @keyframes cut10 {
//   0% {
//     -webkit-mask-size: 0 18px, 0 18px, 0 18px, auto;
//   }

//   16.67% {
//     -webkit-mask-size: 100% 18px, 0 18px, 0 18px, auto;
//   }

//   33.33% {
//     -webkit-mask-size: 100% 18px, 100% 18px, 0 18px, auto;
//   }

//   50% {
//     -webkit-mask-size: 100% 18px, 100% 18px, 100% 18px, auto;
//   }

//   66.67% {
//     -webkit-mask-size: 0 18px, 100% 18px, 100% 18px, auto;
//   }

//   83.33% {
//     -webkit-mask-size: 0 18px, 0 18px, 100% 18px, auto;
//   }

//   100% {
//     -webkit-mask-size: 0 18px, 0 18px, 0 18px, auto;
//   }
// }

/* HTML: <div class="dancers01"></div> */
// .dancers01 {
//   width: 40px;
//   aspect-ratio: 1;
//   position: relative;
// }

// .dancers01:before,
// .dancers01:after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   margin: -8px 0 0 -8px;
//   width: 16px;
//   aspect-ratio: 1;
//   background: #3fb8af;
//   animation: dancers01-1 2s infinite, dancers01-2 0.5s infinite;
// }

// .dancers01:after {
//   background: #ff3d7f;
//   animation-delay: -1s, 0s;
// }

// @keyframes dancers01-1 {
//   0% {
//     top: 0;
//     left: 0;
//   }

//   25% {
//     top: 100%;
//     left: 0;
//   }

//   50% {
//     top: 100%;
//     left: 100%;
//   }

//   75% {
//     top: 0;
//     left: 100%;
//   }

//   100% {
//     top: 0;
//     left: 0;
//   }
// }

// @keyframes dancers01-2 {
//   80%,
//   100% {
//     transform: rotate(0.5turn);
//   }
// }

/* HTML: <div class="dancers02"></div> */
.dancers02 {
  width: 40px;
  aspect-ratio: 1;
  position: relative;
}

.dancers02:before,
.dancers02:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  margin: -8px 0 0 -8px;
  width: 16px;
  aspect-ratio: 1;
  background: #3fb8af;
  animation: dancers02-1 2s infinite, dancers02-2 1s infinite;
}

.dancers02:after {
  background: #ff3d7f;
  animation-delay: -1s, 0s;
}

@keyframes dancers02-1 {
  0% {
    top: 0;
    left: 0;
  }

  25% {
    top: 100%;
    left: 0;
  }

  50% {
    top: 100%;
    left: 100%;
  }

  75% {
    top: 0;
    left: 100%;
  }

  100% {
    top: 0;
    left: 0;
  }
}

@keyframes dancers02-2 {
  40%,
  50% {
    transform: rotate(0.25turn) scale(0.5);
  }

  100% {
    transform: rotate(0.5turn) scale(1);
  }
}

/* HTML: <div class="dancers03"></div> */
// .dancers03 {
//   width: 60px;
//   height: 16px;
//   display: flex;
//   justify-content: space-between;
//   animation: dancers03-0 2s infinite alternate;
// }

// .dancers03:before,
// .dancers03:after {
//   content: "";
//   width: 16px;
//   background: #3fb8af;
//   animation: dancers03-1 1s infinite alternate;
// }

// .dancers03:after {
//   background: #ff3d7f;
//   --s: -1;
// }

// @keyframes dancers03-0 {
//   0%,
//   40% {
//     transform: rotate(0);
//   }

//   80%,
//   100% {
//     transform: rotate(0.5turn);
//   }
// }

// @keyframes dancers03-1 {
//   80%,
//   100% {
//     transform: translate(calc(var(--s, 1) * 14px));
//   }
// }

/* HTML: <div class="dancers04"></div> */
// .dancers04 {
//   width: 16px;
//   aspect-ratio: 1;
//   background: #3fb8af;
//   box-shadow: 30px 0 #ff3d7f;
//   animation: dancers04-1 1s infinite alternate, dancers04-2 0.5s infinite alternate;
// }

// @keyframes dancers04-1 {
//   0%,
//   40% {
//     transform: rotate(0);
//   }

//   80%,
//   100% {
//     transform: rotate(0.5turn);
//   }
// }

// @keyframes dancers04-2 {
//   80%,
//   100% {
//     box-shadow: 16px 0 #ff3d7f;
//   }
// }

/* HTML: <div class="dancers05"></div> */
// .dancers05 {
//   width: 16px;
//   aspect-ratio: 1;
//   background: #3fb8af;
//   position: relative;
//   animation: dancers05-0 2s infinite linear;
// }

// .dancers05:before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background: #ff3d7f;
//   transform: translate(30px) rotate(0);
//   animation: dancers05-1 0.5s infinite;
// }

// @keyframes dancers05-0 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

// @keyframes dancers05-1 {
//   100% {
//     transform: translate(30px) rotate(0.25turn);
//   }
// }

/* HTML: <div class="dancers06"></div> */
// .dancers06 {
//   width: 16px;
//   aspect-ratio: 1;
//   background: #3fb8af;
//   box-shadow: 0 -16px #ff3d7f;
//   animation: dancers06 2s infinite;
// }

// @keyframes dancers06 {
//   0% {
//     transform: translate(0, 0) rotate(0);
//   }

//   25% {
//     transform: translate(0, 0) rotate(90deg);
//   }

//   50% {
//     transform: translate(100%, -100%) rotate(180deg);
//   }

//   75% {
//     transform: translate(100%, -100%) rotate(270deg);
//   }

//   100% {
//     transform: translate(0, 0) rotate(360deg);
//   }
// }

/* HTML: <div class="dancers07"></div> */
// .dancers07 {
//   width: 18px;
//   aspect-ratio: 1;
//   background: #3fb8af;
//   animation: dancers07-1 1s infinite alternate, dancers07-2 2s infinite alternate;
// }

// @keyframes dancers07-1 {
//   0%,
//   10% {
//     transform: scale(1) rotate(0);
//   }

//   100% {
//     transform: scale(0) rotate(1turn);
//   }
// }

// @keyframes dancers07-2 {
//   0%,
//   49.99% {
//     background: #3fb8af;
//   }

//   50%,
//   100% {
//     background: #ff3d7f;
//   }
// }

/* HTML: <div class="dancers08"></div> */
// .dancers08 {
//   width: 16px;
//   aspect-ratio: 1;
//   background: #3fb8af;
//   position: relative;
//   animation: dancers08-0 2.5s infinite linear alternate;
// }

// .dancers08:before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background: #ff3d7f;
//   transform: translate(100%);
//   transform-origin: top left;
//   animation: dancers08-1 0.5s infinite alternate;
// }

// @keyframes dancers08-0 {
//   0%,
//   19.9%,
//   80%,
//   100% {
//     transform: scale(1, 1);
//   }

//   20%,
//   39.9% {
//     transform: scale(-1, 1);
//   }

//   40%,
//   59.9% {
//     transform: scale(-1, -1);
//   }

//   60%,
//   79.9% {
//     transform: scale(1, -1);
//   }
// }

// @keyframes dancers08-1 {
//   0%,
//   20% {
//     transform: translate(100%) rotate(0);
//   }

//   80%,
//   100% {
//     transform: translate(100%) rotate(-180deg);
//   }
// }

/* HTML: <div class="dancers09"></div> */
// .dancers09 {
//   width: 32px;
//   height: 16px;
//   display: flex;
//   animation: dancers09-0 1s infinite;
// }

// .dancers09:before,
// .dancers09:after {
//   content: "";
//   flex: 1;
//   background: #3fb8af;
//   transform-origin: top right;
//   animation: dancers09-1 1s infinite;
// }

// .dancers09:after {
//   background: #ff3d7f;
//   transform-origin: top left;
//   --s: -1;
// }

// @keyframes dancers09-0 {
//   100% {
//     transform: translateY(100%);
//   }
// }

// @keyframes dancers09-1 {
//   100% {
//     transform: rotate(calc(var(--s, 1) * 90deg));
//   }
// }

/* HTML: <div class="dancers10"></div> */
// .dancers10 {
//   width: 32px;
//   height: 16px;
//   display: flex;
// }

// .dancers10:before,
// .dancers10:after {
//   content: "";
//   flex: 1;
//   background: #3fb8af;
//   transform-origin: top right;
//   animation: dancers10-1 2s infinite;
// }

// .dancers10:after {
//   background: #ff3d7f;
//   transform-origin: top left;
//   animation-delay: 0.25s;
// }

// @keyframes dancers10-1 {
//   0%,
//   5% {
//     transform: rotate(0);
//   }

//   20%,
//   30% {
//     transform: rotate(90deg);
//   }

//   45%,
//   55% {
//     transform: rotate(180deg);
//   }

//   70%,
//   80% {
//     transform: rotate(270deg);
//   }

//   95%,
//   100% {
//     transform: rotate(360deg);
//   }
// }

/* HTML: <div class="hungry01"></div> */
.hungry01 {
  width: 35px;
  height: 80px;
  position: relative;
}

.hungry01:after {
  content: "";
  position: absolute;
  inset: 0;
  padding: 3px 5px;
  border-top: 1px solid #bbb6aa;
  border-bottom: 4px solid #bbb6aa;
  background: linear-gradient(#612329 0 0) bottom no-repeat content-box, #e4e0d7;
  mix-blend-mode: darken;
  animation: hungry01 1.5s infinite linear;
}

.hungry01:before {
  content: "";
  position: absolute;
  inset: -18px calc(50% - 2px) 8px;
  background: #eb6b3e;
  transform-origin: bottom;
  transform: rotate(8deg);
}

@keyframes hungry01 {
  0% {
    background-size: 100% 100%;
  }

  100% {
    background-size: 100% 5%;
  }
}

/* HTML: <div class="hungry02"></div> */
.hungry02 {
  width: 35px;
  height: 80px;
  position: relative;
}

.hungry02:after {
  content: "";
  position: absolute;
  inset: 0 0 20px;
  border-radius: 15px 15px 10px 10px;
  padding: 1px;
  background: repeating-linear-gradient(-45deg, #91d2e2 0 8px, #1296a7 0 12px) content-box;
  --c: radial-gradient(farthest-side, #000 94%, #0000);
  -webkit-mask: linear-gradient(#0000 0 0), var(--c) -10px -10px, var(--c) 15px -14px, var(--c) 9px -6px, var(--c) -12px 9px, var(--c) 14px 9px, var(--c) 23px 27px, var(--c) -8px 35px, var(--c) 50% 50%, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0), var(--c) -10px -10px, var(--c) 15px -14px, var(--c) 9px -6px, var(--c) -12px 9px, var(--c) 14px 9px, var(--c) 23px 27px, var(--c) -8px 35px, var(--c) 50% 50%, linear-gradient(#0000 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude, add, add, add, add, add, add, add, add;
  -webkit-mask-repeat: no-repeat;
  animation: hungry02 3s infinite;
}

.hungry02:before {
  content: "";
  position: absolute;
  inset: 50% calc(50% - 4px) 0;
  background: #e0a267;
  border-radius: 50px;
}

@keyframes hungry02 {
  0% {
    -webkit-mask-size: auto, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  10% {
    -webkit-mask-size: auto, 25px 25px, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  20% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  30% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 30px 30px, 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  40% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 30px 30px, 30px 30px, 0 0, 0 0, 0 0, 0 0;
  }

  50% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 30px 30px, 30px 30px, 25px 25px, 0 0, 0 0, 0 0;
  }

  60% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 30px 30px, 30px 30px, 25px 25px, 25px 25px, 0 0, 0 0;
  }

  70% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 30px 30px, 30px 30px, 25px 25px, 25px 25px, 25px 25px, 0 0;
  }

  80%,
  100% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 30px 30px, 30px 30px, 25px 25px, 25px 25px, 25px 25px, 200% 200%;
  }
}

/* HTML: <div class="hungry03"></div> */
.hungry03 {
  width: 35px;
  height: 80px;
  position: relative;
}

.hungry03:after {
  content: "";
  position: absolute;
  inset: 0 0 20px;
  border-radius: 50px 50px 10px 10px;
  padding: 1px;
  background: linear-gradient(#ff4d80 33%, #ffa104 0 66%, #01ddc7 0) content-box;
  --c: radial-gradient(farthest-side, #000 94%, #0000);
  -webkit-mask: linear-gradient(#0000 0 0), var(--c) -10px -10px, var(--c) 15px -14px, var(--c) 9px -6px, var(--c) -12px 9px, var(--c) 14px 9px, var(--c) 23px 27px, var(--c) -8px 35px, var(--c) 50% 50%, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0), var(--c) -10px -10px, var(--c) 15px -14px, var(--c) 9px -6px, var(--c) -12px 9px, var(--c) 14px 9px, var(--c) 23px 27px, var(--c) -8px 35px, var(--c) 50% 50%, linear-gradient(#0000 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude, add, add, add, add, add, add, add, add;
  -webkit-mask-repeat: no-repeat;
  animation: hungry03 3s infinite;
}

.hungry03:before {
  content: "";
  position: absolute;
  inset: 50% calc(50% - 4px) 0;
  background: #e0a267;
  border-radius: 50px;
}

@keyframes hungry03 {
  0% {
    -webkit-mask-size: auto, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  10% {
    -webkit-mask-size: auto, 25px 25px, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  20% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  30% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 30px 30px, 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  40% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 30px 30px, 30px 30px, 0 0, 0 0, 0 0, 0 0;
  }

  50% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 30px 30px, 30px 30px, 25px 25px, 0 0, 0 0, 0 0;
  }

  60% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 30px 30px, 30px 30px, 25px 25px, 25px 25px, 0 0, 0 0;
  }

  70% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 30px 30px, 30px 30px, 25px 25px, 25px 25px, 25px 25px, 0 0;
  }

  80%,
  100% {
    -webkit-mask-size: auto, 25px 25px, 25px 25px, 30px 30px, 30px 30px, 25px 25px, 25px 25px, 25px 25px, 200% 200%;
  }
}

/* HTML: <div class="hungry04"></div> */
// .hungry04 {
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   border: 8px solid #d1914b;
//   box-sizing: border-box;
//   --c: no-repeat radial-gradient(farthest-side, #d64123 94%, #0000);
//   --b: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
//   background: var(--c) 11px 15px, var(--b) 6px 15px, var(--c) 35px 23px, var(--b) 29px 15px, var(--c) 11px 46px, var(--b) 11px 34px, var(--c) 36px 0px, var(--b) 50px 31px, var(--c) 47px 43px, var(--b) 31px 48px, #f6d353;
//   background-size: 15px 15px, 6px 6px;
//   animation: hungry04 3s infinite;
// }

// @keyframes hungry04 {
//   0% {
//     -webkit-mask: conic-gradient(#0000 0, #000 0);
//   }

//   16.67% {
//     -webkit-mask: conic-gradient(#0000 60deg, #000 0);
//   }

//   33.33% {
//     -webkit-mask: conic-gradient(#0000 120deg, #000 0);
//   }

//   50% {
//     -webkit-mask: conic-gradient(#0000 180deg, #000 0);
//   }

//   66.67% {
//     -webkit-mask: conic-gradient(#0000 240deg, #000 0);
//   }

//   83.33% {
//     -webkit-mask: conic-gradient(#0000 300deg, #000 0);
//   }

//   100% {
//     -webkit-mask: conic-gradient(#0000 360deg, #000 0);
//   }
// }

/* HTML: <div class="hungry05"></div> */
// .hungry05 {
//   width: 80px;
//   height: 75px;
//   --c: no-repeat radial-gradient(farthest-side, #f7b261 85%, #b97850, #0000);
//   --b: no-repeat radial-gradient(farthest-side, #734b46 94%, #0000);
//   --s: 8px 8px, 8px 8px, 8px 8px, 40px 40px;
//   --e: 0 0, 0 0, 0 0, 0 0;
//   background: var(--b) 55% 47%, var(--b) 60% 66%, var(--b) 37% 43%, var(--c) 50% 50%, var(--b) 15px 4px, var(--b) 4px 14px, var(--b) 27px 18px, var(--c) 0 0, var(--b) calc(100% - 15px) 4px, var(--b) calc(100% - 4px) 14px,
//     var(--b) calc(100% - 27px) 18px, var(--c) 100% 0/40px 40px, var(--b) 24px 47px, var(--b) 50% 43px, var(--b) 60% 58px, var(--c) 50% 100%;
//   animation: hungry05 3s infinite;
// }

// @keyframes hungry05 {
//   0%,
//   20% {
//     background-size: var(--s), var(--s), var(--s), var(--s);
//   }

//   20.01%,
//   40% {
//     background-size: var(--e), var(--s), var(--s), var(--s);
//   }

//   40.01%,
//   60% {
//     background-size: var(--e), var(--e), var(--s), var(--s);
//   }

//   60.01%,
//   80% {
//     background-size: var(--e), var(--e), var(--e), var(--s);
//   }

//   80.01%,
//   100% {
//     background-size: var(--e), var(--e), var(--e), var(--e);
//   }
// }

/* HTML: <div class="hungry06"></div> */
// .hungry06 {
//   width: 35px;
//   height: 80px;
//   position: relative;
// }

// .hungry06:before {
//   content: "";
//   position: absolute;
//   inset: 0 0 20px;
//   padding: 1px;
//   background: conic-gradient(from -90deg at calc(100% - 3px) 3px, #7e3c26 135deg, #341612 0 270deg, #0000 0), conic-gradient(from 0deg at 3px calc(100% - 3px), #0000 90deg, #341612 0 225deg, #7e3c26 0), #54281f;
//   background-size: 17px 17px;
//   background-clip: content-box;
//   --c: no-repeat linear-gradient(#000 0 0);
//   -webkit-mask: var(--c) 0 0, var(--c) 17px 0, var(--c) 0 17px, var(--c) 17px 17px, var(--c) 0 34px, var(--c) 17px 34px, linear-gradient(#000 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;
//   animation: hungry06 3s infinite;
// }

// .hungry06:after {
//   content: "";
//   position: absolute;
//   inset: 60% 0 0;
//   background: #b21b01;
//   border-top: 5px solid #c9c7c5;
// }

// @keyframes hungry06 {
//   0%,
//   14% {
//     -webkit-mask-size: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, auto;
//   }

//   15%,
//   29% {
//     -webkit-mask-size: 17px 17px, 0 0, 0 0, 0 0, 0 0, 0 0, auto;
//   }

//   30%,
//   44% {
//     -webkit-mask-size: 17px 17px, 17px 17px, 0 0, 0 0, 0 0, 0 0, auto;
//   }

//   45%,
//   59% {
//     -webkit-mask-size: 17px 17px, 17px 17px, 17px 17px, 0 0, 0 0, 0 0, auto;
//   }

//   60%,
//   74% {
//     -webkit-mask-size: 17px 17px, 17px 17px, 17px 17px, 17px 17px, 0 0, 0 0, auto;
//   }

//   75%,
//   89% {
//     -webkit-mask-size: 17px 17px, 17px 17px, 17px 17px, 17px 17px, 17px 17px, 0 0, auto;
//   }

//   90%,
//   100% {
//     -webkit-mask-size: 17px 17px, 17px 17px, 17px 17px, 17px 17px, 17px 17px, 17px 17px, auto;
//   }
// }

/* HTML: <div class="hungry07"></div> */
// .hungry07 {
//   height: 35px;
//   width: 80px;
//   margin-left: 0px;
//   background: radial-gradient(farthest-side, #ffd1d1 94%, #0000) 4px 22px/5px 5px, radial-gradient(farthest-side, #ffd1d1 94%, #0000) 12px 18px/5px 5px, radial-gradient(farthest-side, #ffd1d1 94%, #0000) 3px 6px/8px 8px,
//     radial-gradient(farthest-side, #eb8594 90%, #0000 94%) left/20px 100%, #bd3342;
//   background-repeat: no-repeat;
//   border-radius: 0 50px 50px 0;
//   border-top-left-radius: 30px 40px;
//   border-bottom-left-radius: 30px 40px;
//   animation: hungry07 3s infinite steps(10);
//   position: relative;
// }

// .hungry07::before {
//   content: " ";
//   position: absolute;
//   inset: calc(50% - 8px) -10px calc(50% - 8px) auto;
//   width: 15px;
//   background: #bd3342;
//   clip-path: polygon(0 50%, 100% 0, 70% 50%, 100% 100%);
// }

// @keyframes hungry07 {
//   100% {
//     width: 20px;
//     margin-left: 60px;
//   }
// }

/* HTML: <div class="hungry08"></div> */
.hungry08 {
  width: 80px;
  height: 40px;
  border-radius: 0 0 100px 100px;
  border: 5px solid #538a2d;
  border-top: 0;
  box-sizing: border-box;
  background: radial-gradient(farthest-side at top, #0000 calc(100% - 5px), #e7ef9d calc(100% - 4px)), radial-gradient(2px 3px, #5c4037 89%, #0000) 0 0/17px 12px, #ff1643;
  --c: radial-gradient(farthest-side, #000 94%, #0000);
  -webkit-mask: linear-gradient(#0000 0 0), var(--c) 12px -8px, var(--c) 29px -8px, var(--c) 45px -6px, var(--c) 22px -2px, var(--c) 34px 6px, var(--c) 21px 6px, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0), var(--c) 12px -8px, var(--c) 29px -8px, var(--c) 45px -6px, var(--c) 22px -2px, var(--c) 34px 6px, var(--c) 21px 6px, linear-gradient(#0000 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude, add, add, add, add, add, add;
  -webkit-mask-repeat: no-repeat;
  animation: hungry08 3s infinite;
}

@keyframes hungry08 {
  0% {
    -webkit-mask-size: auto, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  15% {
    -webkit-mask-size: auto, 20px 20px, 0 0, 0 0, 0 0, 0 0, 0 0;
  }

  30% {
    -webkit-mask-size: auto, 20px 20px, 20px 20px, 0 0, 0 0, 0 0, 0 0;
  }

  45% {
    -webkit-mask-size: auto, 20px 20px, 20px 20px, 20px 20px, 0 0, 0 0, 0 0;
  }

  60% {
    -webkit-mask-size: auto, 20px 20px, 20px 20px, 20px 20px, 20px 20px, 0 0, 0 0;
  }

  75% {
    -webkit-mask-size: auto, 20px 20px, 20px 20px, 20px 20px, 20px 20px, 20px 20px, 0 0;
  }

  90%,
  100% {
    -webkit-mask-size: auto, 20px 20px, 20px 20px, 20px 20px, 20px 20px, 20px 20px, 20px 20px;
  }
}

/* HTML: <div class="time01"></div> */
// .time01 {
//   width: 60px;
//   aspect-ratio: 1;
//   display: flex;
//   color: #000;
//   border: 4px solid;
//   box-sizing: border-box;
//   border-radius: 50%;
//   background: radial-gradient(circle 5px, currentColor 95%, #0000), linear-gradient(currentColor 50%, #0000 0) 50%/4px 60% no-repeat;
//   animation: time01 2s infinite linear;
// }

// .time01:before {
//   content: "";
//   flex: 1;
//   background: linear-gradient(currentColor 50%, #0000 0) 50%/4px 80% no-repeat;
//   animation: inherit;
// }

// @keyframes time01 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="time02"></div> */
// .time02 {
//   width: 40px;
//   aspect-ratio: 1;
//   border: 2px solid;
//   box-sizing: border-box;
//   color: #000;
//   background: radial-gradient(circle 3px, currentColor 95%, #0000), linear-gradient(currentColor 50%, #0000 0) 50%/3px 80% no-repeat, linear-gradient(90deg, currentColor 50%, #0000 0) 50%/60% 3px no-repeat;
//   position: relative;
// }

// .time02:before {
//   content: "";
//   position: absolute;
//   height: 50px;
//   inset: 100% 10% auto;
//   background: radial-gradient(circle closest-side at 50% calc(100% - 10px), currentColor 94%, #0000), linear-gradient(currentColor 0 0) top/3px 80% no-repeat;
//   transform-origin: top;
//   animation: time02 2s infinite cubic-bezier(0.5, 200, 0.5, -200);
// }

// @keyframes time02 {
//   100% {
//     transform: rotate(0.4deg);
//   }
// }

/* HTML: <div class="time03"></div> */
// .time03 {
//   display: inline-flex;
//   border: 2px solid #000;
//   --c: no-repeat linear-gradient(#000 0 0) 50%;
//   background: var(--c) calc(50% - 5px) / 5px 5px, var(--c) calc(50% + 5px) / 5px 5px;
// }

// .time03::before,
// .time03::after {
//   content: "12 00 23 40 31 45 60 17 45 32 29 42 50 08 14 07 46 11 03 55";
//   font-size: 30px;
//   font-family: monospace;
//   font-weight: bold;
//   line-height: 1em;
//   height: 1em;
//   width: 2ch;
//   color: #0000;
//   text-shadow: 0 0 0 #000;
//   overflow: hidden;
//   margin: 5px 10px;
//   animation: time03 1s steps(20) infinite;
// }

// .time03::before {
//   animation-duration: 1.5s;
// }

// @keyframes time03 {
//   100% {
//     text-shadow: 0 -20em 0 #000;
//   }
// }

/* HTML: <div class="time04"></div> */
// .time04 {
//   display: inline-flex;
//   border: 10px solid #000;
//   border-radius: 5px;
// }

// .time04::before,
// .time04::after {
//   content: "0 1 2 3 4 5 6 7 8 9 0";
//   font-size: 30px;
//   font-family: monospace;
//   font-weight: bold;
//   line-height: 1em;
//   height: 1em;
//   width: 1.2ch;
//   text-align: center;
//   outline: 1px solid #000;
//   color: #0000;
//   text-shadow: 0 0 0 #000;
//   overflow: hidden;
//   animation: time04 2s infinite linear;
// }

// .time04::before {
//   animation-duration: 4s;
// }

// @keyframes time04 {
//   100% {
//     text-shadow: 0 var(--t, -10em) 0 #000;
//   }
// }

/* HTML: <div class="time05"></div> */
.time05 {
  --c1: #673b14;
  --c2: #f8b13b;
  width: 40px;
  height: 80px;
  border-top: 4px solid var(--c1);
  border-bottom: 4px solid var(--c1);
  background: linear-gradient(90deg, var(--c1) 2px, var(--c2) 0 5px, var(--c1) 0) 50%/7px 8px no-repeat;
  display: grid;
  overflow: hidden;
  animation: time05-0 2s infinite linear;
}

.time05::before,
.time05::after {
  content: "";
  grid-area: 1/1;
  width: 75%;
  height: calc(50% - 4px);
  margin: 0 auto;
  border: 2px solid var(--c1);
  border-top: 0;
  box-sizing: content-box;
  border-radius: 0 0 40% 40%;
  -webkit-mask: linear-gradient(#000 0 0) bottom/4px 2px no-repeat, linear-gradient(#000 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  background: linear-gradient(var(--d, 0deg), var(--c2) 50%, #0000 0) bottom / 100% 205%, linear-gradient(var(--c2) 0 0) center/0 100%;
  background-repeat: no-repeat;
  animation: inherit;
  animation-name: time05-1;
}

.time05::after {
  transform-origin: 50% calc(100% + 2px);
  transform: scaleY(-1);
  --s: 3px;
  --d: 180deg;
}

@keyframes time05-0 {
  80% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(0.5turn);
  }
}

@keyframes time05-1 {
  10%,
  70% {
    background-size: 100% 205%, var(--s, 0) 100%;
  }

  70%,
  100% {
    background-position: top, center;
  }
}

/* HTML: <div class="time06"></div> */
// .time06 {
//   width: 60px;
//   aspect-ratio: 1;
//   color: #000;
//   border: 10px solid;
//   box-sizing: border-box;
//   border-radius: 50%;
//   animation: time06 2s infinite linear;
//   position: relative;
// }

// .time06:before {
//   content: "";
//   position: absolute;
//   height: 20px;
//   inset: auto calc(50% - 10px) 100%;
//   border-radius: 5px 5px 0 0;
//   background: linear-gradient(currentColor 0 0) top/100% 30%, linear-gradient(currentColor 0 0) top/50% 100%;
//   background-repeat: no-repeat;
// }

// .time06:after {
//   content: "";
//   position: absolute;
//   inset: -8px -10px auto;
//   height: 15px;
//   background: radial-gradient(farthest-side, currentColor 94%, #0000) left, radial-gradient(farthest-side, currentColor 94%, #0000) right;
//   background-size: 15px 15px;
//   background-repeat: no-repeat;
// }

// @keyframes time06 {
//   0% {
//     background: conic-gradient(#77a4bd 0, #0000 0);
//   }

//   12.5% {
//     background: conic-gradient(#77a4bd 45deg, #0000 46deg);
//   }

//   25% {
//     background: conic-gradient(#77a4bd 90deg, #0000 91deg);
//   }

//   37.5% {
//     background: conic-gradient(#77a4bd 135deg, #0000 136deg);
//   }

//   50% {
//     background: conic-gradient(#77a4bd 180deg, #0000 181deg);
//   }

//   62.5% {
//     background: conic-gradient(#77a4bd 225deg, #0000 226deg);
//   }

//   75% {
//     background: conic-gradient(#77a4bd 270deg, #0000 271deg);
//   }

//   87.5% {
//     background: conic-gradient(#77a4bd 315deg, #0000 316deg);
//   }

//   100% {
//     background: conic-gradient(#77a4bd 360deg, #0000 360deg);
//   }
// }

/* HTML: <div class="time07"></div> */
// .time07 {
//   width: 60px;
//   aspect-ratio: 1;
//   border: 3px solid;
//   border-radius: 50%;
//   display: grid;
//   background: radial-gradient(circle 3px, currentColor 95%, #0000), linear-gradient(currentColor 50%, #0000 0) 50%/2px 60% no-repeat;
// }

// .time07:before,
// .time07:after {
//   content: "";
//   grid-area: 1/1;
// }

// .time07:before {
//   background: repeating-conic-gradient(from -2deg, #000 0 4deg, #0000 0 90deg);
//   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 6px), #000 0);
// }

// .time07:after {
//   background: linear-gradient(currentColor 50%, #0000 0) 50%/2px 80% no-repeat;
//   animation: time07 1s infinite;
// }

// @keyframes time07 {
//   0%,
//   100% {
//     transform: rotate(30deg);
//   }

//   90% {
//     transform: rotate(42deg);
//   }

//   95% {
//     transform: rotate(15deg);
//   }
// }

/* HTML: <div class="time08"></div> */
// .time08 {
//   width: fit-content;
//   background: #000;
//   padding: 0 8px;
//   font-size: 30px;
//   font-family: monospace;
//   color: #fff;
//   font-weight: bold;
//   border-radius: 8px;
//   position: relative;
// }

// .time08::before {
//   content: "08:00";
//   white-space: pre;
//   animation: time08 0.5s infinite;
// }

// .time08::after {
//   content: "";
//   position: absolute;
//   inset: auto auto 100% 10px;
//   height: 5px;
//   width: 40%;
//   background: linear-gradient(90deg, red 40%, #0000 0 60%, #444 0);
// }

// @keyframes time08 {
//   100% {
//     content: "  :  ";
//   }
// }

/* HTML: <div class="time09"></div> */
// .time09 {
//   width: 50px;
//   aspect-ratio: 1;
//   color: #ce0800;
//   border: 7px solid;
//   box-sizing: border-box;
//   border-radius: 50%;
//   background: radial-gradient(circle 3px, #000 95%, #0000), linear-gradient(180deg, #000 50%, #0000 0) center/3px 70%, linear-gradient(90deg, #000 50%, #0000 0) center/50% 3px;
//   background-repeat: no-repeat;
//   position: relative;
//   animation: time09 1s infinite;
// }

// .time09:before,
// .time09:after {
//   content: "";
//   position: absolute;
//   border-radius: 20px 20px 0 0;
//   inset: -20px calc(50% - 10px);
//   transform: rotate(40deg);
//   background: linear-gradient(currentColor 0 0) top / 100% 10px, linear-gradient(currentColor 0 0) bottom/3px 10px;
//   background-repeat: no-repeat;
// }

// .time09:after {
//   transform: rotate(-40deg);
// }

// @keyframes time09 {
//   0%,
//   70%,
//   100% {
//     transform: translateY(0) rotate(0);
//   }

//   75%,
//   85%,
//   95% {
//     transform: translateY(-3px) rotate(10deg);
//   }

//   80%,
//   90% {
//     transform: translateY(-3px) rotate(-10deg);
//   }
// }

/* HTML: <div class="time10"></div> */
// .time10 {
//   width: 60px;
//   height: 40px;
//   position: relative;
// }

// .time10::after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background: radial-gradient(farthest-side at bottom, #ffc10a 92%, #0000) top / 30px 15px, radial-gradient(farthest-side at top left, #0000 92%, #ffc10a) bottom left / 15px 20px,
//     radial-gradient(farthest-side at top right, #0000 92%, #ffc10a) bottom right/ 15px 20px, linear-gradient(#ffc10a 0 0) bottom/30px 26px;
//   background-repeat: no-repeat;
//   transform-origin: 50% -3px;
//   animation: time10-1 0.5s infinite alternate linear;
// }

// .time10::before {
//   content: "";
//   position: absolute;
//   inset: -6px calc(50% - 10px) -10px;
//   background: radial-gradient(farthest-side, #ff9f04 90%, #0000) top / 10px 10px, radial-gradient(farthest-side, #ff9f04 90%, #0000) bottom/20px 20px;
//   background-repeat: no-repeat;
//   transform-origin: 50% 3px;
//   animation: time10-2 0.5s infinite alternate linear;
// }

// @keyframes time10-1 {
//   0% {
//     transform: rotate(-30deg);
//   }

//   100% {
//     transform: rotate(30deg);
//   }
// }

// @keyframes time10-2 {
//   0% {
//     transform: rotate(-20deg);
//   }

//   100% {
//     transform: rotate(20deg);
//   }
// }

/* HTML: <div class="nature01"></div> */
// .nature01 {
//   width: 50px;
//   aspect-ratio: 1;
//   background: #ffd738;
//   border-radius: 50%;
//   display: grid;
// }

// .nature01::before,
// .nature01::after {
//   content: "";
//   grid-area: 1/1;
//   background: inherit;
//   clip-path: polygon(0 0, 50% 40%, 100% 0, 60% 50%, 100% 100%, 50% 60%, 0 100%, 40% 50%);
//   animation: nature01 1s infinite alternate;
//   transform: rotate(var(--r, 0)) scale(1);
// }

// .nature01::after {
//   --r: 45deg;
// }

// @keyframes nature01 {
//   100% {
//     transform: rotate(var(--r, 0)) scale(1.4);
//   }
// }

/* HTML: <div class="nature02"></div> */
// .nature02 {
//   width: 60px;
//   aspect-ratio: 1;
//   display: grid;
//   border-radius: 50%;
//   background: radial-gradient(circle 15px, #ffd738 90%, #0000);
//   filter: drop-shadow(0px 0px 1px #ffd738);
//   animation: nature02 1s infinite alternate linear;
// }

// .nature02::before,
// .nature02::after {
//   content: "";
//   grid-area: 1/1;
//   border-radius: 50%;
//   --g: no-repeat linear-gradient(#ffd738 0 0) 50%;
//   background: var(--g) / 100% 5px, var(--g) / 5px 100%;
//   -webkit-mask: radial-gradient(farthest-side, #0000 60%, #000 61%);
// }

// .nature02::after {
//   transform: rotate(45deg);
// }

// @keyframes nature02 {
//   100% {
//     filter: drop-shadow(0px 0px 20px #ffd738);
//   }
// }

/* HTML: <div class="nature03"></div> */
// .nature03 {
//   width: 50px;
//   aspect-ratio: 1;
//   display: flex;
//   filter: drop-shadow(0px 0px 1px #8d847f);
//   animation: nature03 1s infinite alternate linear;
// }

// .nature03:before {
//   content: "";
//   flex: 1;
//   background: #8d847f;
//   border-radius: 50%;
//   -webkit-mask: radial-gradient(circle closest-side at 66% 40%, #0000 115%, #000 118%);
// }

// @keyframes nature03 {
//   100% {
//     filter: drop-shadow(0px 0px 20px #8d847f);
//   }
// }

/* HTML: <div class="nature04"></div> */
// .nature04 {
//   width: 50px;
//   aspect-ratio: 1;
//   background-color: #8d847f;
//   border-radius: 50%;
//   animation: nature04 3s infinite;
// }

// @keyframes nature04 {
//   12.5% {
//     background-image: radial-gradient(80% 65% at left, #0000 94%, #fff9);
//   }

//   25% {
//     background-image: linear-gradient(90deg, #0000 50%, #fff9 0);
//   }

//   37.5% {
//     background-image: radial-gradient(80% 65% at right, #fff9 94%, #0000);
//   }

//   50% {
//     background-image: linear-gradient(#fff9 0 0);
//   }

//   62.5% {
//     background-image: radial-gradient(80% 65% at left, #fff9 94%, #0000);
//   }

//   75% {
//     background-image: linear-gradient(-90deg, #0000 50%, #fff9 0);
//   }

//   87.5% {
//     background-image: radial-gradient(80% 65% at right, #0000 94%, #fff9);
//   }
// }

/* HTML: <div class="nature05"></div> */
// .nature05 {
//   width: 80px;
//   height: 40px;
//   border-radius: 100px 100px 0 0;
//   position: relative;
//   overflow: hidden;
// }

// .nature05:before {
//   content: "";
//   position: absolute;
//   inset: 0 0 -100%;
//   background: radial-gradient(farthest-side, #ffd738 80%, #0000) left 70% top 20%/15px 15px, radial-gradient(farthest-side, #020308 92%, #0000) left 65% bottom 19%/12px 12px,
//     radial-gradient(farthest-side, #ecfefe 92%, #0000) left 70% bottom 20%/15px 15px, linear-gradient(#9eddfe 50%, #020308 0);
//   background-repeat: no-repeat;
//   animation: nature05 2s infinite;
// }

// @keyframes nature05 {
//   0%,
//   20% {
//     transform: rotate(0);
//   }

//   40%,
//   60% {
//     transform: rotate(0.5turn);
//   }

//   80%,
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="nature06"></div> */
// .nature06 {
//   width: 80px;
//   height: 40px;
//   border-radius: 100px 100px 0 0;
//   background: linear-gradient(0deg, #0000, #fff, #0000) 70% 30%, linear-gradient(90deg, #0000, #fff, #0000) 72% 32%, linear-gradient(0deg, #0000, #fff, #0000) 26% 42%, linear-gradient(90deg, #0000, #fff, #0000) 23% 44%,
//     linear-gradient(0deg, #0000, #fff, #0000) 51% 54%, linear-gradient(90deg, #0000, #fff, #0000) 51% 53% #020308;
//   background-size: 2px 10px, 10px 2px;
//   background-repeat: no-repeat;
//   position: relative;
//   overflow: hidden;
// }

// .nature06:before,
// .nature06:after {
//   content: "";
//   position: absolute;
//   inset: 100% auto auto 20px;
//   height: 3px;
//   width: 20px;
//   background: linear-gradient(90deg, #0000, #fff);
//   transform-origin: right;
//   transform: rotate(-20deg) translate(-20px);
//   animation: nature06 2s infinite;
// }

// .nature06:after {
//   inset: 100% auto auto -5px;
//   animation-delay: 0.75s;
// }

// @keyframes nature06 {
//   100% {
//     transform: rotate(-20deg) translate(120px);
//   }
// }

/* HTML: <div class="nature07"></div> */
.nature07 {
  width: 80px;
  height: 40px;
  background: radial-gradient(circle 11px at top, #0000 94%, #b0e5f3) 0 20px, radial-gradient(circle 11px at top, #0000 94%, #5dc1e4) 0 10px, radial-gradient(circle 11px at top, #0000 94%, #008cd9) 0 0;
  background-size: 20px 100%;
  background-repeat: repeat-x;
  animation: nature07 1s infinite linear;
}

@keyframes nature07 {
  50% {
    background-position: 10px 15px, -10px 12px, 15px 8px;
  }

  100% {
    background-position: 20px 20px, -20px 10px, 20px 0px;
  }
}

/* HTML: <div class="nature08"></div> */
.nature08 {
  width: 100px;
  height: 50px;
  border-radius: 100px 100px 0 0;
  position: relative;
  overflow: hidden;
}

.nature08:before {
  content: "";
  position: absolute;
  inset: 0 0 -100%;
  background: radial-gradient(farthest-side at top, #0000 35%, #aa47be, #039be6, #26c6dc, #459e44, #f9ec44, #f68524, #fa3536, #0000) bottom/100% 50% no-repeat;
  animation: nature08 2s infinite;
}

@keyframes nature08 {
  0%,
  20% {
    transform: rotate(0);
  }

  40%,
  60% {
    transform: rotate(0.5turn);
  }

  80%,
  100% {
    transform: rotate(1turn);
  }
}

/* HTML: <div class="nature09"></div> */
// .nature09 {
//   width: 80px;
//   height: 40px;
//   background: #4dbefa;
//   position: relative;
//   overflow: hidden;
//   animation: nature09-0 1.5s infinite steps(10);
// }

// .nature09:before,
// .nature09:after {
//   content: "";
//   position: absolute;
//   inset: -50%;
//   --rad: radial-gradient(1px 4px, #eee 92%, #0000);
//   background: var(--rad) 20% 0, var(--rad) 70% 7%;
//   background-size: var(--w, 20px) var(--h, 18px);
//   animation: nature09-1 0.2s linear infinite;
//   transform: skew(-10deg);
// }

// .nature09:after {
//   --h: 12px;
//   --w: 16px;
//   animation-duration: 0.3s;
// }

// @keyframes nature09-0 {
//   0%,
//   15%,
//   20%,
//   30%,
//   100% {
//     background: #4dbefa;
//   }

//   10%,
//   22% {
//     background: #7accf7;
//   }
// }

// @keyframes nature09-1 {
//   100% {
//     transform: skew(-10deg) translateY(var(--h, 18px));
//   }
// }

/* HTML: <div class="nature10"></div> */
// .nature10 {
//   width: 80px;
//   height: 40px;
//   background: radial-gradient(circle 25px at top right, #ffd738 40%, #0000), #4dbefa;
//   position: relative;
//   overflow: hidden;
// }

// .nature10:before,
// .nature10:after {
//   content: "";
//   position: absolute;
//   top: 4px;
//   left: -40px;
//   width: 36px;
//   height: 20px;
//   --c: radial-gradient(farthest-side, #fff 96%, #0000);
//   background: var(--c) 100% 100% /30% 60%, var(--c) 70% 0 /50% 100%, var(--c) 0 100% /36% 68%, var(--c) 27% 18% /26% 40%, linear-gradient(#fff 0 0) bottom/67% 58%;
//   background-repeat: no-repeat;
//   animation: nature10 2s linear infinite;
// }

// .nature10:after {
//   top: 15px;
//   --l: 200%;
// }

// @keyframes nature10 {
//   100% {
//     left: var(--l, 105%);
//   }
// }

/* HTML: <div class="nature11"></div> */
// .nature11 {
//   width: calc(6 * 30px);
//   height: 50px;
//   display: flex;
//   color: #8d7958;
//   filter: drop-shadow(30px 25px 0 currentColor) drop-shadow(60px 0 0 currentColor) drop-shadow(120px 0 0 currentColor);
//   clip-path: inset(0 100% 0 0);
//   animation: nature11 2s infinite steps(7);
// }

// .nature11:before {
//   content: "";
//   width: 30px;
//   height: 25px;
//   background: currentColor;
//   clip-path: polygon(0 50%, 30% 40%, 100% 0, 60% 40%, 100% 50%, 60% 60%, 100% 100%, 30% 60%);
// }

// @keyframes nature11 {
//   100% {
//     clip-path: inset(0 -30px 0 0);
//   }
// }

/* HTML: <div class="nature12"></div> */
// .nature12 {
//   width: calc(6 * 30px);
//   height: 50px;
//   display: flex;
//   color: #8d7958;
//   filter: drop-shadow(30px 25px 0 currentColor) drop-shadow(60px 0 0 currentColor) drop-shadow(120px 0 0 currentColor);
//   clip-path: inset(0 100% 0 0);
//   animation: nature12 2s infinite steps(7);
// }

// .nature12:before {
//   content: "";
//   width: 30px;
//   height: 25px;
//   --c: no-repeat radial-gradient(farthest-side, currentColor 92%, #0000);
//   background: var(--c) left / 70% 70%, var(--c) right/20% 20%, var(--c) top 0 right 15%/20% 20%, var(--c) bottom 0 right 15%/20% 20%;
// }

// @keyframes nature12 {
//   100% {
//     clip-path: inset(0 -30px 0 0);
//   }
// }

/* HTML: <div class="nature13"></div> */
// .nature13 {
//   width: calc(6 * 30px);
//   height: 50px;
//   display: flex;
//   color: #8d7958;
//   filter: drop-shadow(30px 25px 0 currentColor) drop-shadow(60px 0 0 currentColor) drop-shadow(120px 0 0 currentColor);
//   clip-path: inset(0 100% 0 0);
//   animation: nature13 2s infinite steps(7);
// }

// .nature13:before {
//   content: "";
//   width: 30px;
//   height: 25px;
//   background: radial-gradient(farthest-side at right, currentColor 92%, #0000) left/20px 100% no-repeat, radial-gradient(farthest-side, currentColor 92%, #0000) right/17px 9px repeat-y;
// }

// @keyframes nature13 {
//   100% {
//     clip-path: inset(0 -30px 0 0);
//   }
// }

/* HTML: <div class="nature14"></div> */
// .nature14 {
//   width: calc(6 * 30px);
//   height: 50px;
//   display: grid;
//   color: #8d7958;
//   filter: drop-shadow(30px 25px 0 currentColor) drop-shadow(60px 0 0 currentColor) drop-shadow(120px 0 0 currentColor);
//   clip-path: inset(0 100% 0 0);
//   animation: nature14 2s infinite steps(7);
// }

// .nature14:before,
// .nature14:after {
//   content: "";
//   width: 24px;
//   grid-area: 1/1;
//   height: 9px;
//   background: radial-gradient(farthest-side, currentColor 90%, #0000) left/10px 9px, conic-gradient(from -106deg at right, #0000, currentColor 2deg 29deg, #0000 33deg) right/17px 11px;
//   background-repeat: no-repeat;
//   transform: rotate(7deg);
//   transform-origin: 5px 50%;
// }

// .nature14:after {
//   margin-top: 12px;
//   transform: rotate(-7deg);
// }

// @keyframes nature14 {
//   100% {
//     clip-path: inset(0 -30px 0 0);
//   }
// }

/* HTML: <div class="nature15"></div> */
// .nature15 {
//   width: 80px;
//   height: 40px;
//   background: #83def1;
//   position: relative;
//   overflow: hidden;
// }

// .nature15:before {
//   content: "";
//   position: absolute;
//   top: 10px;
//   left: 0;
//   height: 20px;
//   width: 30px;
//   background: radial-gradient(farthest-side, #000 50%, #fff 52% 80%, #0000) 78% 22%/5px 5px, radial-gradient(farthest-side, #fb4f05 92%, #0000) right/80% 100%, radial-gradient(farthest-side at left, #fb4f05 92%, #0000) left/35% 80%;
//   background-repeat: no-repeat;
//   clip-path: polygon(0 0, 100% 0, 100% 40%, 81% 50%, 100% 60%, 100% 100%, 0 100%, 20% 50%);
//   animation: nature15 1.5s infinite;
// }

// @keyframes nature15 {
//   0% {
//     transform: translate(-100%);
//   }

//   40% {
//     transform: translate(15px);
//   }

//   80%,
//   100% {
//     transform: translate(100px);
//   }
// }

/* HTML: <div class="nature16"></div> */
.nature16 {
  width: 20px;
  height: 80px;
  background: #935936;
  position: relative;
}

.nature16:before {
  content: "";
  position: absolute;
  top: 10px;
  left: -22px;
  width: 25px;
  height: 60px;
  background: radial-gradient(farthest-side, #fff 92%, #0000) 60% 6px/4px 4px, radial-gradient(50% 60%, #53707b 92%, #0000) center/70% 55%, radial-gradient(farthest-side, #53707b 92%, #0000) 50% 3px/14px 14px,
    radial-gradient(142% 100% at bottom right, #0000 64%, #53707b 65%) bottom/57% 40%, conic-gradient(from -120deg at right, #53707b 36deg, #0000 0) 100% 3px/51% 12px,
    conic-gradient(from 120deg at top left, #0000, #ef524a 2deg 40deg, #0000 43deg) top/100% 10px;
  background-repeat: no-repeat;
  transform: rotate(-26deg);
  transform-origin: 100% 80%;
  animation: nature16 0.25s infinite linear alternate;
}

.nature16:after {
  content: "";
  position: absolute;
  width: 6px;
  height: 12px;
  left: -6px;
  bottom: 15px;
  border-radius: 100px 0 0 100px;
  background: #53707b;
}

@keyframes nature16 {
  100% {
    transform: rotate(0);
  }
}

/* HTML: <div class="colorful01"></div> */
// .colorful01 {
//   width: 40px;
//   aspect-ratio: 1;
//   background: linear-gradient(#00aaff 0 0), linear-gradient(#ff00aa 0 0), #00aaff;
//   background-repeat: no-repeat;
//   animation: colorful01 1.5s infinite;
// }

// @keyframes colorful01 {
//   0% {
//     background-size: 100% 0, 0 100%;
//   }

//   30%,
//   50% {
//     background-size: 100% 0, 100% 100%;
//   }

//   80%,
//   100% {
//     background-size: 100% 100%, 100% 100%;
//   }
// }

/* HTML: <div class="colorful02"></div> */
// .colorful02 {
//   width: 40px;
//   aspect-ratio: 1;
//   background: linear-gradient(45deg, #0000 50%, #00aaff 0), linear-gradient(-45deg, #0000 50%, #ff00aa 0), #00aaff;
//   background-size: 200% 200%;
//   background-repeat: no-repeat;
//   animation: colorful02 1.5s infinite;
// }

// @keyframes colorful02 {
//   0% {
//     background-position: bottom left, bottom right;
//   }

//   30%,
//   50% {
//     background-position: bottom left, top left;
//   }

//   80%,
//   100% {
//     background-position: top right, top left;
//   }
// }

/* HTML: <div class="colorful03"></div> */
// .colorful03 {
//   width: 40px;
//   aspect-ratio: 1;
//   background: linear-gradient(45deg, #00aaff 50%, #0000 0), linear-gradient(-45deg, #f1bbbb 50%, #0000 0), linear-gradient(45deg, #0000 50%, #aa00ff 0), linear-gradient(-45deg, #0000 50%, #ff00aa 0), #00aaff;
//   background-size: 200% 200%;
//   background-repeat: no-repeat;
//   animation: colorful03 2.5s infinite;
// }

// @keyframes colorful03 {
//   0% {
//     background-position: 100% 0, 0 0, 0 100%, 100% 100%;
//   }

//   15%,
//   25% {
//     background-position: 100% 0, 0 0, 0 100%, 0 0;
//   }

//   40%,
//   50% {
//     background-position: 100% 0, 0 0, 100% 0, 0 0;
//   }

//   65%,
//   75% {
//     background-position: 100% 0, 100% 100%, 100% 0, 0 0;
//   }

//   90%,
//   100% {
//     background-position: 0 100%, 100% 100%, 100% 0, 0 0;
//   }
// }

/* HTML: <div class="colorful04"></div> */
// .colorful04 {
//   width: 40px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: radial-gradient(farthest-side, #ed303c 94%, #0000), radial-gradient(farthest-side, #ff9c5b 94%, #0000), #ed303c;
//   background-position: center;
//   background-repeat: no-repeat;
//   animation: colorful04 1.5s infinite;
// }

// @keyframes colorful04 {
//   0% {
//     background-size: 0 0, 0 0;
//   }

//   30%,
//   50% {
//     background-size: 0 0, 120% 120%;
//   }

//   80%,
//   100% {
//     background-size: 120% 120%, 120% 120%;
//   }
// }

/* HTML: <div class="colorful05"></div> */
// .colorful05 {
//   width: 40px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: radial-gradient(farthest-side, #ed303c 94%, #0000), radial-gradient(farthest-side, #3b8183 94%, #0000), radial-gradient(farthest-side, #fad089 94%, #0000), radial-gradient(farthest-side, #ff9c5b 94%, #0000), #ed303c;
//   background-size: 105% 105%;
//   background-repeat: no-repeat;
//   animation: colorful05 2s infinite;
// }

// @keyframes colorful05 {
//   0% {
//     background-position: 50% -50px, -40px 50%, 50% calc(100% + 50px), calc(100% + 50px) 50%;
//   }

//   20%,
//   25% {
//     background-position: 50% -50px, -50px 50%, 50% calc(100% + 50px), 50% 50%;
//   }

//   45%,
//   50% {
//     background-position: 50% -50px, -50px 50%, 50% 50%, 50% 50%;
//   }

//   75%,
//   75% {
//     background-position: 50% -50px, 50% 50%, 50% 50%, 50% 50%;
//   }

//   95%,
//   100% {
//     background-position: 50% 50%, 50% 50%, 50% 50%, 50% 50%;
//   }
// }

/* HTML: <div class="colorful06"></div> */
// .colorful06 {
//   width: 40px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: linear-gradient(#ed303c 0 0), linear-gradient(#ed303c 0 0), linear-gradient(#3b8183 0 0), linear-gradient(#3b8183 0 0), linear-gradient(#fad089 0 0), linear-gradient(#fad089 0 0), linear-gradient(#ff9c5b 0 0),
//     linear-gradient(#ff9c5b 0 0), #ed303c;
//   background-position: top left, bottom right;
//   background-repeat: no-repeat;
//   animation: colorful06 2.5s infinite;
// }

// @keyframes colorful06 {
//   0% {
//     background-size: 0 100%, 0 100%, 100% 0, 100% 0, 0 100%, 0 100%, 100% 0, 100% 0;
//   }

//   20%,
//   25% {
//     background-size: 0 100%, 0 100%, 100% 0, 100% 0, 0 100%, 0 100%, 100% 50%, 100% 50%;
//   }

//   45%,
//   50% {
//     background-size: 0 100%, 0 100%, 100% 0, 100% 0, 50% 100%, 50% 100%, 100% 50%, 100% 50%;
//   }

//   70%,
//   75% {
//     background-size: 0 100%, 0 100%, 100% 50%, 100% 50%, 50% 100%, 50% 100%, 100% 50%, 100% 50%;
//   }

//   95%,
//   100% {
//     background-size: 50% 100%, 50% 100%, 100% 50%, 100% 50%, 50% 100%, 50% 100%, 100% 50%, 100% 50%;
//   }
// }

/* HTML: <div class="colorful07"></div> */
// .colorful07 {
//   width: 50px;
//   aspect-ratio: 1.154;
//   clip-path: polygon(50% 0, 100% 100%, 0 100%);
//   display: grid;
//   background: #3a89c9;
// }

// .colorful07::before,
// .colorful07::after {
//   content: "";
//   grid-area: 1/1;
//   background: inherit;
//   clip-path: inherit;
//   transform-origin: 50% 66%;
//   animation: colorful07-1 2s infinite;
// }

// .colorful07::before {
//   background: #9cc4e4;
//   animation: colorful07-2 2s infinite 1s;
// }

// @keyframes colorful07-1 {
//   0%,
//   99.9% {
//     transform: scale(1);
//   }

//   50%,
//   99% {
//     transform: scale(0);
//   }
// }

// @keyframes colorful07-2 {
//   0%,
//   51% {
//     transform: scale(1);
//   }

//   50% {
//     transform: scale(0);
//   }
// }

/* HTML: <div class="colorful08"></div> */
// .colorful08 {
//   width: 50px;
//   aspect-ratio: 1.154;
//   clip-path: polygon(50% 0, 100% 100%, 0 100%);
//   display: grid;
//   background: conic-gradient(from 0deg at 50% 60%, #3a89c9 120deg, #0000 0), conic-gradient(from 120deg at 50% 60%, #3a89c9 120deg, #0000 0), conic-gradient(from 240deg at 50% 60%, #3a89c9 120deg, #0000 0),
//     conic-gradient(from 0deg at 50% 60%, #9cc4e4 120deg, #0000 0), conic-gradient(from 120deg at 50% 60%, #9cc4e4 120deg, #0000 0), conic-gradient(from 240deg at 50% 60%, #9cc4e4 120deg, #0000 0), #3a89c9;
//   background-size: 200% 200%;
//   background-repeat: no-repeat;
//   animation: colorful08 1.5s infinite;
// }

// @keyframes colorful08 {
//   0% {
//     background-position: left, top, right;
//   }

//   30%,
//   50% {
//     background-position: left, top, right, center, center, center;
//   }

//   80%,
//   100% {
//     background-position: center;
//   }
// }

/* HTML: <div class="colorful09"></div> */
// .colorful09 {
//   width: 50px;
//   aspect-ratio: 1.154;
//   clip-path: polygon(50% 0, 100% 100%, 0 100%);
//   position: relative;
// }

// .colorful09::before {
//   content: "";
//   position: absolute;
//   inset: -150% -100% -50%;
//   background: repeating-conic-gradient(from 30deg, #ffabab 0 60deg, #abe4ff 0 120deg, #ff7373 0 180deg);
//   animation: colorful09 2s infinite;
// }

// @keyframes colorful09 {
//   0% {
//     transform: rotate(0);
//   }

//   23%,
//   33% {
//     transform: rotate(60deg);
//   }

//   56%,
//   66% {
//     transform: rotate(120deg);
//   }

//   90%,
//   100% {
//     transform: rotate(180deg);
//   }
// }

/* HTML: <div class="colorfucolorful10"></div> */
// .colorful10 {
//   width: 80px;
//   aspect-ratio: 2;
//   --c: linear-gradient(#ffd412 25%, #abd406 0 50%, #ff821c 0 75%, #ffd412 0);
//   background: var(--c), var(--c), var(--c), var(--c);
//   background-size: 26% 400%;
//   background-position: calc(0 * 100% / 3) 100%, calc(1 * 100% / 3) 100%, calc(2 * 100% / 3) 100%, calc(3 * 100% / 3) 100%;
//   background-repeat: no-repeat;
//   animation: colorful10 2s infinite;
// }

// @keyframes colorful10 {
//   0% {
//     background-position: calc(0 * 100% / 3) calc(3 * 100% / 3), calc(1 * 100% / 3) calc(3 * 100% / 3), calc(2 * 100% / 3) calc(3 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3);
//   }

//   8.33% {
//     background-position: calc(0 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(3 * 100% / 3), calc(2 * 100% / 3) calc(3 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3);
//   }

//   16.67% {
//     background-position: calc(0 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(3 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3);
//   }

//   25% {
//     background-position: calc(0 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3);
//   }

//   30%,
//   33.33% {
//     background-position: calc(0 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(3 * 100% / 3) calc(2 * 100% / 3);
//   }

//   41.67% {
//     background-position: calc(0 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(3 * 100% / 3) calc(2 * 100% / 3);
//   }

//   50% {
//     background-position: calc(0 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(3 * 100% / 3) calc(2 * 100% / 3);
//   }

//   58.33% {
//     background-position: calc(0 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(3 * 100% / 3) calc(2 * 100% / 3);
//   }

//   63%,
//   66.67% {
//     background-position: calc(0 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(3 * 100% / 3) calc(1 * 100% / 3);
//   }

//   75% {
//     background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(3 * 100% / 3) calc(1 * 100% / 3);
//   }

//   83.33% {
//     background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(1 * 100% / 3) calc(0 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(3 * 100% / 3) calc(1 * 100% / 3);
//   }

//   91.67% {
//     background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(1 * 100% / 3) calc(0 * 100% / 3), calc(2 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(1 * 100% / 3);
//   }

//   97%,
//   100% {
//     background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(1 * 100% / 3) calc(0 * 100% / 3), calc(2 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(0 * 100% / 3);
//   }
// }

/* HTML: <div class="colorful11"></div> */
// .colorful11 {
//   width: 50px;
//   aspect-ratio: 1;
//   display: flex;
//   --c: linear-gradient(90deg, #ffd412 25%, #abd406 0 50%, #ff821c 0 75%, #ffd412 0);
// }

// .colorful11:before,
// .colorful11:after {
//   content: "";
//   flex: 1;
//   background: var(--c), var(--c), var(--c), var(--c);
//   background-size: 400% 26%;
//   background-repeat: no-repeat;
//   animation: colorful11 2s infinite;
// }

// .colorful11:after {
//   transform: scaleX(-1);
// }

// @keyframes colorful11 {
//   0% {
//     background-position: calc(3 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(1 * 100% / 3), calc(3 * 100% / 3) calc(2 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3);
//   }

//   8.33% {
//     background-position: calc(2 * 100% / 3) calc(0 * 100% / 3), calc(3 * 100% / 3) calc(1 * 100% / 3), calc(3 * 100% / 3) calc(2 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3);
//   }

//   16.67% {
//     background-position: calc(2 * 100% / 3) calc(0 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(3 * 100% / 3) calc(2 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3);
//   }

//   25% {
//     background-position: calc(2 * 100% / 3) calc(0 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(3 * 100% / 3) calc(3 * 100% / 3);
//   }

//   30%,
//   33.33% {
//     background-position: calc(2 * 100% / 3) calc(0 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(3 * 100% / 3);
//   }

//   41.67% {
//     background-position: calc(1 * 100% / 3) calc(0 * 100% / 3), calc(2 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(3 * 100% / 3);
//   }

//   50% {
//     background-position: calc(1 * 100% / 3) calc(0 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3), calc(2 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(3 * 100% / 3);
//   }

//   58.33% {
//     background-position: calc(1 * 100% / 3) calc(0 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(2 * 100% / 3) calc(3 * 100% / 3);
//   }

//   63%,
//   66.67% {
//     background-position: calc(1 * 100% / 3) calc(0 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(3 * 100% / 3);
//   }

//   75% {
//     background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(1 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(3 * 100% / 3);
//   }

//   83.33% {
//     background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(1 * 100% / 3), calc(1 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(3 * 100% / 3);
//   }

//   91.67% {
//     background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(1 * 100% / 3), calc(0 * 100% / 3) calc(2 * 100% / 3), calc(1 * 100% / 3) calc(3 * 100% / 3);
//   }

//   97%,
//   100% {
//     background-position: calc(0 * 100% / 3) calc(0 * 100% / 3), calc(0 * 100% / 3) calc(1 * 100% / 3), calc(0 * 100% / 3) calc(2 * 100% / 3), calc(0 * 100% / 3) calc(3 * 100% / 3);
//   }
// }

/* HTML: <div class="colorful12"></div> */
// .colorful12 {
//   width: 50px;
//   aspect-ratio: 1;
//   background: linear-gradient(#ed303c 0 0), linear-gradient(#3b8183 0 0), linear-gradient(#ff9c5b 0 0) #ed303c;
//   background-position: center;
//   background-repeat: no-repeat;
//   animation: colorful12 2s infinite;
// }

// @keyframes colorful12 {
//   0% {
//     background-size: 100% 100%, 100% 100%, 100% 100%;
//   }

//   33% {
//     background-size: 0px 0px, 100% 100%, 100% 100%;
//   }

//   66% {
//     background-size: 0px 0px, 0px 0px, 100% 100%;
//   }

//   100% {
//     background-size: 0px 0px, 0px 0px, 0px 0px;
//   }
// }

/* HTML: <div class="colorful13"></div> */
// .colorful13 {
//   width: 50px;
//   aspect-ratio: 1;
//   display: grid;
//   --c: #cff09e 25%, #79bd9a 0 50%, #0b486b 0 75%, #cff09e 0;
// }

// .colorful13:before,
// .colorful13:after {
//   content: "";
//   background: linear-gradient(90deg, var(--c)), linear-gradient(-90deg, var(--c));
//   background-size: 400% 52%;
//   background-repeat: no-repeat;
//   animation: colorful13 2s infinite;
// }

// @keyframes colorful13 {
//   0% {
//     background-position: calc(3 * 100% / 3) 0, calc(0 * 100% / 3) 100%;
//   }

//   23%,
//   33% {
//     background-position: calc(2 * 100% / 3) 0, calc(1 * 100% / 3) 100%;
//   }

//   56%,
//   66% {
//     background-position: calc(1 * 100% / 3) 0, calc(2 * 100% / 3) 100%;
//   }

//   90%,
//   100% {
//     background-position: calc(0 * 100% / 3) 0, calc(3 * 100% / 3) 100%;
//   }
// }

/* HTML: <div class="colorful14"></div> */
// .colorful14 {
//   width: 50px;
//   aspect-ratio: 1;
//   transform: translate(-100%, 100%);
//   animation: colorful14 2s infinite;
// }

// @keyframes colorful14 {
//   0% {
//     box-shadow: 50px -50px #b5ac01, 50px -50px #ecba09, 50px -50px #0000, 50px -50px #0000, 50px -50px #0000;
//   }

//   25% {
//     box-shadow: 100px -50px #0000, 50px -50px #ecba09, 50px -50px #e86e1c, 50px -50px #0000, 50px -50px #0000;
//   }

//   50% {
//     box-shadow: 100px -50px #0000, 50px -100px #0000, 50px -50px #e86e1c, 50px -50px #d41e45, 50px -50px #0000;
//   }

//   75% {
//     box-shadow: 100px -50px #0000, 50px -100px #0000, 0px -50px #0000, 50px -50px #d41e45, 50px -50px #b5ac01;
//   }

//   100% {
//     box-shadow: 100px -50px #0000, 50px -100px #0000, 0px -50px #0000, 50px 0px #0000, 50px -50px #b5ac01;
//   }
// }

/* HTML: <div class="colorful15"></div> */
// .colorful15 {
//   width: 50px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: linear-gradient(#ff003c 0 0), linear-gradient(#ff003c 0 0), linear-gradient(#ff003c 0 0), linear-gradient(#ff003c 0 0), linear-gradient(#00c176 0 0), linear-gradient(#00c176 0 0), linear-gradient(#00c176 0 0),
//     linear-gradient(#00c176 0 0), #ff003c;
//   background-position: 0 0, 100% 0, 100% 100%, 0 100%;
//   background-repeat: no-repeat;
//   animation: colorful15 2s infinite;
// }

// @keyframes colorful15 {
//   0% {
//     background-size: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
//   }

//   40%,
//   50% {
//     background-size: 0 0, 0 0, 0 0, 0 0, 51% 51%, 51% 51%, 51% 51%, 51% 51%;
//   }

//   90%,
//   100% {
//     background-size: 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%;
//   }
// }

/* HTML: <div class="colorful16"></div> */
// .colorful16 {
//   width: 50px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: linear-gradient(#cc333f 0 0), linear-gradient(#cc333f 0 0), linear-gradient(#cc333f 0 0), linear-gradient(#cc333f 0 0), linear-gradient(#00a0b0 0 0), linear-gradient(#00a0b0 0 0), linear-gradient(#00a0b0 0 0),
//     linear-gradient(#00a0b0 0 0), #cc333f;
//   background-position: 0 0, 100% 0, 100% 100%, 0 100%;
//   background-repeat: no-repeat;
//   animation: colorful16 2s infinite;
// }

// @keyframes colorful16 {
//   0% {
//     background-size: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
//   }

//   12.5% {
//     background-size: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 51% 51%;
//   }

//   25% {
//     background-size: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 51% 51%, 51% 51%;
//   }

//   37.5% {
//     background-size: 0 0, 0 0, 0 0, 0 0, 0 0, 51% 51%, 51% 51%, 51% 51%;
//   }

//   50% {
//     background-size: 0 0, 0 0, 0 0, 0 0, 51% 51%, 51% 51%, 51% 51%, 51% 51%;
//   }

//   62.5% {
//     background-size: 0 0, 0 0, 0 0, 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%;
//   }

//   75% {
//     background-size: 0 0, 0 0, 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%;
//   }

//   87.5% {
//     background-size: 0 0, 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%;
//   }

//   100% {
//     background-size: 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%, 51% 51%;
//   }
// }

/* HTML: <div class="colorful17"></div> */
// .colorful17 {
//   width: 40px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   margin-top: -30px;
//   display: flex;
//   justify-content: center;
//   overflow: hidden;
//   transform-origin: 50% 116.5%;
//   animation: colorful17 2s infinite linear;
// }

// .colorful17:before {
//   content: "";
//   min-width: 233%;
//   height: 233%;
//   background: radial-gradient(farthest-side, #00da3c 90%, #0000) top, radial-gradient(farthest-side, #00cbe7 90%, #0000) left, radial-gradient(farthest-side, #fd8603 90%, #0000) bottom, radial-gradient(farthest-side, #f4f328 90%, #0000) right;
//   background-size: 43% 43%;
//   background-repeat: no-repeat;
//   animation: inherit;
//   animation-direction: reverse;
// }

// @keyframes colorful17 {
//   100% {
//     transform: rotate(360deg);
//   }
// }

/* HTML: <div class="colorful18"></div> */
// .colorful18 {
//   width: 60px;
//   aspect-ratio: 1;
//   background: linear-gradient(90deg, #cee879 50%, #ff5254 0) top/100% 50% no-repeat, linear-gradient(90deg, #fcb653 50%, #5cacc4 0);
//   -webkit-mask: linear-gradient(#000 0 0) 0 0/50% 50% no-repeat;
//   animation: colorful18 2s infinite;
// }

// @keyframes colorful18 {
//   0% {
//     -webkit-mask-position: 0 0;
//   }

//   25% {
//     -webkit-mask-position: 100% 0;
//   }

//   50% {
//     -webkit-mask-position: 100% 100%;
//   }

//   75% {
//     -webkit-mask-position: 0 100%;
//   }

//   100% {
//     -webkit-mask-position: 0 0;
//   }
// }

/* HTML: <div class="colorful19"></div> */
.colorful19 {
  width: 40px;
  aspect-ratio: 0.577;
  clip-path: polygon(0 0, 100% 100%, 0 100%, 100% 0);
  position: relative;
  animation: colorful19 2s infinite linear;
  overflow: hidden;
}

.colorful19:before {
  content: "";
  position: absolute;
  inset: -150% -150%;
  background: repeating-conic-gradient(from 30deg, #ffabab 0 60deg, #abe4ff 0 120deg, #ff7373 0 180deg);
  animation: inherit;
  animation-direction: reverse;
}

@keyframes colorful19 {
  100% {
    transform: rotate(360deg);
  }
}

/* HTML: <div class="colorful20"></div> */
// .colorful20 {
//   width: 70px;
//   aspect-ratio: 1;
//   background: conic-gradient(from -45deg, #8a8780 90deg, #94ba65 0 180deg, #2790b0 0 270deg, #2b4e72 0);
//   animation: colorful20 2s infinite;
// }

// @keyframes colorful20 {
//   0% {
//     clip-path: polygon(0 0, 100% 0, 50% 50%);
//   }

//   25% {
//     clip-path: polygon(100% 0, 100% 100%, 50% 50%);
//   }

//   50% {
//     clip-path: polygon(100% 100%, 0 100%, 50% 50%);
//   }

//   75% {
//     clip-path: polygon(0 100%, 0 0, 50% 50%);
//   }

//   100% {
//     clip-path: polygon(0 0, 100% 0, 50% 50%);
//   }
// }

/* HTML: <div class="continuous01"></div> */
// .continuous01 {
//   width: 120px;
//   height: 20px;
//   background: linear-gradient(90deg, #0001 33%, #0005 50%, #0001 66%) #f2f2f2;
//   background-size: 300% 100%;
//   animation: continuous01 1s infinite linear;
// }

// @keyframes continuous01 {
//   0% {
//     background-position: right;
//   }
// }

/* HTML: <div class="continuous02"></div> */
// .continuous02 {
//   width: 120px;
//   height: 20px;
//   background: linear-gradient(90deg, #0000, orange) left -50px top 0/50px 20px no-repeat lightblue;
//   animation: continuous02 1s infinite linear;
// }

// @keyframes continuous02 {
//   100% {
//     background-position: right -50px top 0;
//   }
// }

/* HTML: <div class="continuous03"></div> */
// .continuous03 {
//   width: 120px;
//   height: 20px;
//   transform: skewX(-45deg);
//   background: linear-gradient(#f03355 0 0) left -30px top 0/30px 20px no-repeat #ccc;
//   animation: continuous03 1s infinite linear;
// }

// @keyframes continuous03 {
//   100% {
//     background-position: right -30px top 0;
//   }
// }

/* HTML: <div class="continuous04"></div> */
.continuous04 {
  width: 120px;
  height: 22px;
  border-radius: 40px;
  color: #514b82;
  border: 2px solid;
  position: relative;
  overflow: hidden;
}

.continuous04::before {
  content: "";
  position: absolute;
  margin: 2px;
  width: 14px;
  top: 0;
  bottom: 0;
  left: -20px;
  border-radius: inherit;
  background: currentColor;
  box-shadow: -10px 0 12px 3px currentColor;
  clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%, -30px 50%);
  animation: continuous04 1s infinite linear;
}

@keyframes continuous04 {
  100% {
    left: calc(100% + 20px);
  }
}

/* HTML: <div class="continuous05"></div> */
// .continuous05 {
//   width: 120px;
//   height: 20px;
//   background: linear-gradient(#25b09b 0 0) left -40px top 0/40px 20px, linear-gradient(#ddd 0 0) center/100% 50%;
//   background-repeat: no-repeat;
//   animation: continuous05 1s infinite linear;
// }

// @keyframes continuous05 {
//   100% {
//     background-position: right -40px top 0, center;
//   }
// }

/* HTML: <div class="continuous06"></div> */
// .continuous06 {
//   width: 120px;
//   height: 20px;
//   background: radial-gradient(circle 10px, #000 95%, #0000) right / calc(200% + 20px) 100%, linear-gradient(#000 0 0) center/100% 6px;
//   background-repeat: no-repeat;
//   -webkit-mask: radial-gradient(circle 4px, #0000 93%, #000) right/calc(200% + 20px) 100%;
//   animation: continuous06 1s infinite linear;
// }

// @keyframes continuous06 {
//   100% {
//     background-position: left;
//     -webkit-mask-position: left;
//   }
// }

/* HTML: <div class="continuous07"></div> */
// .continuous07 {
//   width: 120px;
//   height: 20px;
//   -webkit-mask: linear-gradient(90deg, #000 70%, #0000 0) left/20% 100%;
//   background: linear-gradient(#000 0 0) left -25% top 0 /20% 100% no-repeat #ddd;
//   animation: continuous07 1s infinite steps(6);
// }

// @keyframes continuous07 {
//   100% {
//     background-position: right -25% top 0;
//   }
// }

/* HTML: <div class="continuous08"></div> */
// .continuous08 {
//   width: 40px;
//   aspect-ratio: 1;
//   background: linear-gradient(to bottom right, #0000 calc(50% - 40px), #fff 50%, #0000 calc(50% + 40px)) bottom right/calc(200% + 80px) calc(200% + 80px) orange;
//   animation: continuous08 1s infinite;
// }

// @keyframes continuous08 {
//   100% {
//     background-position: top left;
//   }
// }

/* HTML: <div class="continuous09"></div> */
// .continuous09 {
//   width: 120px;
//   height: 20px;
//   background: radial-gradient(circle closest-side, #f03355 94%, #0000) 50% 50% / calc(50% + 10px) 70% repeat-x #ccc;
//   animation: continuous09 1s infinite cubic-bezier(0.3, 1, 0, 1);
// }

// @keyframes continuous09 {
//   100% {
//     background-position: calc(200% - 5px);
//   }
// }

/* HTML: <div class="continuous10"></div> */
// .continuous10 {
//   width: 120px;
//   height: 20px;
//   background: linear-gradient(#514b82 0 0) left -40px top 0/40px 100% no-repeat #eee;
//   -webkit-mask: conic-gradient(from 90deg at 5px 5px, #0000 25%, #000 0) 0 0 / calc((100% - 5px) / 5) calc(100% - 5px);
//   animation: continuous10 1s infinite linear;
// }

// @keyframes continuous10 {
//   100% {
//     background-position: right -40px top 0;
//   }
// }

/* HTML: <div class="flipping01"></div> */
// .flipping01 {
//   width: 40px;
//   aspect-ratio: 1;
//   background: #000;
//   animation: flipping01 1s infinite;
// }

// @keyframes flipping01 {
//   0% {
//     transform: perspective(150px) rotateX(0deg);
//   }

//   100% {
//     transform: perspective(150px) rotateX(180deg);
//   }
// }

/* HTML: <div class="flipping02"></div> */
// .flipping02 {
//   width: 40px;
//   aspect-ratio: 1;
//   animation: flipping02-1 2s infinite linear, flipping02-2 1s infinite steps(1) alternate;
// }

// @keyframes flipping02-1 {
//   0% {
//     transform: perspective(150px) rotateX(0deg);
//   }

//   100% {
//     transform: perspective(150px) rotateX(360deg);
//   }
// }

// @keyframes flipping02-2 {
//   0% {
//     background: #ffa516;
//   }

//   50% {
//     background: #f03355;
//   }
// }

/* HTML: <div class="flipping03"></div> */
// .flipping03 {
//   width: 40px;
//   aspect-ratio: 1;
//   animation: flipping03-1 2s infinite linear, flipping03-2 3s infinite steps(1) -0.5s;
// }

// @keyframes flipping03-1 {
//   0% {
//     transform: perspective(150px) rotateX(0deg) rotateY(0deg);
//   }

//   50% {
//     transform: perspective(150px) rotateX(180deg) rotateY(0deg);
//   }

//   100% {
//     transform: perspective(150px) rotateX(180deg) rotateY(180deg);
//   }
// }

// @keyframes flipping03-2 {
//   0% {
//     background: #ffa516;
//   }

//   33% {
//     background: #f03355;
//   }

//   66% {
//     background: #25b09b;
//   }
// }

/* HTML: <div class="flipping04"></div> */
// .flipping04 {
//   width: 60px;
//   aspect-ratio: 1;
//   display: grid;
//   grid: 50%/50%;
//   animation: flipping04-0 2s infinite steps(1);
// }

// .flipping04::before {
//   content: "";
//   transform-origin: bottom;
//   animation: flipping04-1 0.5s infinite linear alternate, flipping04-2 0.5s infinite steps(1) alternate;
// }

// @keyframes flipping04-0 {
//   0% {
//     transform: scale(1, 1) rotate(0deg);
//   }

//   25% {
//     transform: scale(1, -1) rotate(90deg);
//   }

//   50% {
//     transform: scale(-1, -1) rotate(0deg);
//   }

//   75% {
//     transform: scale(-1, 1) rotate(90deg);
//   }
// }

// @keyframes flipping04-1 {
//   0% {
//     transform: perspective(150px) rotateX(0deg);
//   }

//   100% {
//     transform: perspective(150px) rotateX(180deg);
//   }
// }

// @keyframes flipping04-2 {
//   0% {
//     background: #ffa516;
//   }

//   50% {
//     background: #f03355;
//   }
// }

/* HTML: <div class="flipping05"></div> */
// .flipping05 {
//   width: 60px;
//   aspect-ratio: 1;
//   animation: flipping05-0 1s infinite steps(1);
// }

// .flipping05::before,
// .flipping05::after {
//   content: "";
//   position: absolute;
//   inset: 0 50% 50% 0;
//   transform-origin: bottom right;
//   animation: flipping05-1 0.5s infinite linear alternate, flipping05-2 0.5s infinite steps(1) alternate;
// }

// .flipping05::after {
//   --s: -1, -1;
// }

// @keyframes flipping05-0 {
//   0% {
//     transform: scale(1, 1) rotate(0deg);
//   }

//   50% {
//     transform: scale(1, -1) rotate(90deg);
//   }
// }

// @keyframes flipping05-1 {
//   0% {
//     transform: scale(var(--s, 1)) perspective(150px) rotateX(0deg);
//   }

//   100% {
//     transform: scale(var(--s, 1)) perspective(150px) rotateX(180deg);
//   }
// }

// @keyframes flipping05-2 {
//   0% {
//     background: #25b09b;
//   }

//   50% {
//     background: #514b82;
//   }
// }

/* HTML: <div class="flipping06"></div> */
// .flipping06 {
//   width: 60px;
//   aspect-ratio: 1;
//   display: grid;
//   grid: 50%/50%;
//   color: #25b09b;
//   --_g: no-repeat linear-gradient(currentColor 0 0);
//   background: var(--_g), var(--_g), var(--_g);
//   background-size: 50.1% 50.1%;
//   animation: flipping06-0 1.5s infinite steps(1) alternate, flipping06-0-0 3s infinite steps(1);
// }

// .flipping06::before {
//   content: "";
//   background: currentColor;
//   transform: perspective(150px) rotateY(0deg) rotateX(0deg);
//   transform-origin: bottom right;
//   animation: flipping06-1 1.5s infinite linear alternate;
// }

// @keyframes flipping06-0 {
//   0% {
//     background-position: 0 100%, 100% 100%, 100% 0;
//   }

//   33% {
//     background-position: 100% 100%, 100% 100%, 100% 0;
//   }

//   66% {
//     background-position: 100% 0, 100% 0, 100% 0;
//   }
// }

// @keyframes flipping06-0-0 {
//   0% {
//     transform: scaleX(1) rotate(0deg);
//   }

//   50% {
//     transform: scaleX(-1) rotate(-90deg);
//   }
// }

// @keyframes flipping06-1 {
//   16.5% {
//     transform: perspective(150px) rotateX(-90deg) rotateY(0deg) rotateX(0deg);
//     filter: grayscale(0.8);
//   }

//   33% {
//     transform: perspective(150px) rotateX(-180deg) rotateY(0deg) rotateX(0deg);
//   }

//   66% {
//     transform: perspective(150px) rotateX(-180deg) rotateY(-180deg) rotateX(0deg);
//   }

//   100% {
//     transform: perspective(150px) rotateX(-180deg) rotateY(-180deg) rotateX(-180deg);
//     filter: grayscale(0.8);
//   }
// }

/* HTML: <div class="flipping07"></div> */
// .flipping07 {
//   width: 60px;
//   aspect-ratio: 1;
//   color: #ffa516;
//   background: linear-gradient(currentColor 0 0) 100% 0, linear-gradient(currentColor 0 0) 0 100%;
//   background-size: 50.1% 50.1%;
//   background-repeat: no-repeat;
//   animation: flipping07-0 1s infinite steps(1);
// }

// .flipping07::before,
// .flipping07::after {
//   content: "";
//   position: absolute;
//   inset: 0 50% 50% 0;
//   background: currentColor;
//   transform: scale(var(--s, 1)) perspective(150px) rotateY(0deg);
//   transform-origin: bottom right;
//   animation: flipping07-1 0.5s infinite linear alternate;
// }

// .flipping07::after {
//   --s: -1, -1;
// }

// @keyframes flipping07-0 {
//   0% {
//     transform: scaleX(1) rotate(0deg);
//   }

//   50% {
//     transform: scaleX(-1) rotate(-90deg);
//   }
// }

// @keyframes flipping07-1 {
//   49.99% {
//     transform: scale(var(--s, 1)) perspective(150px) rotateX(-90deg);
//     filter: grayscale(0);
//   }

//   50% {
//     transform: scale(var(--s, 1)) perspective(150px) rotateX(-90deg);
//     filter: grayscale(0.8);
//   }

//   100% {
//     transform: scale(var(--s, 1)) perspective(150px) rotateX(-180deg);
//     filter: grayscale(0.8);
//   }
// }

/* HTML: <div class="flipping08"></div> */
// .flipping08 {
//   width: 60px;
//   aspect-ratio: 1;
//   display: flex;
//   animation: flipping08-0 2s infinite sptes(1);
// }

// .flipping08::before,
// .flipping08::after {
//   content: "";
//   flex: 1;
//   animation: flipping08-1 1s infinite linear alternate, flipping08-2 2s infinite steps(1) -0.5s;
// }

// .flipping08::after {
//   --s: -1, -1;
// }

// @keyframes flipping08-0 {
//   0% {
//     transform: scaleX(1) rotate(0deg);
//   }

//   50% {
//     transform: scaleX(-1) rotate(-90deg);
//   }
// }

// @keyframes flipping08-1 {
//   0%,
//   5% {
//     transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateY(0deg);
//   }

//   33% {
//     transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(0deg);
//   }

//   66% {
//     transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-180deg);
//   }

//   95%,
//   100% {
//     transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateX(-180deg);
//   }
// }

// @keyframes flipping08-2 {
//   0% {
//     background: #f03355;
//   }

//   50% {
//     background: #ffa516;
//   }
// }

/* HTML: <div class="flipping09"></div> */
.flipping09 {
  width: 60px;
  aspect-ratio: 1;
  display: grid;
  grid: 50%/50%;
  color: #ffa516;
  border-radius: 50%;
  --_g: no-repeat linear-gradient(currentColor 0 0);
  background: var(--_g), var(--_g), var(--_g);
  background-size: 50.1% 50.1%;
  animation: flipping09-0 1.5s infinite steps(1) alternate, flipping09-0-0 3s infinite steps(1) alternate;
}

.flipping09::before {
  content: "";
  background: currentColor;
  border-top-left-radius: 100px;
  transform: perspective(150px) rotateY(0deg) rotateX(0deg);
  transform-origin: bottom right;
  animation: flipping09-1 1.5s infinite linear alternate;
}

@keyframes flipping09-0 {
  0% {
    background-position: 0 100%, 100% 100%, 100% 0;
  }

  33% {
    background-position: 100% 100%, 100% 100%, 100% 0;
  }

  66% {
    background-position: 100% 0, 100% 0, 100% 0;
  }
}

@keyframes flipping09-0-0 {
  0% {
    transform: scaleX(1) rotate(0deg);
  }

  50% {
    transform: scaleX(-1) rotate(-90deg);
  }
}

@keyframes flipping09-1 {
  16.5% {
    transform: perspective(150px) rotateX(-90deg) rotateY(0deg) rotateX(0deg);
    filter: grayscale(0.8);
  }

  33% {
    transform: perspective(150px) rotateX(-180deg) rotateY(0deg) rotateX(0deg);
  }

  66% {
    transform: perspective(150px) rotateX(-180deg) rotateY(-180deg) rotateX(0deg);
  }

  100% {
    transform: perspective(150px) rotateX(-180deg) rotateY(-180deg) rotateX(-180deg);
    filter: grayscale(0.8);
  }
}

/* HTML: <div class="flipping10"></div> */
// .flipping10 {
//   width: 60px;
//   aspect-ratio: 1;
//   display: flex;
//   animation: flipping10-0 2s infinite steps(1);
// }

// .flipping10::before,
// .flipping10::after {
//   content: "";
//   flex: 1;
//   animation: flipping10-1 1s infinite linear alternate, flipping10-2 2s infinite steps(1) -0.5s;
// }

// .flipping10::after {
//   --s: -1, -1;
// }

// @keyframes flipping10-0 {
//   0% {
//     transform: scaleX(1) rotate(0deg);
//   }

//   50% {
//     transform: scaleX(-1) rotate(-90deg);
//   }
// }

// @keyframes flipping10-1 {
//   0%,
//   5% {
//     transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateY(0deg);
//   }

//   33% {
//     transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(0deg);
//   }

//   66% {
//     transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-180deg);
//   }

//   95%,
//   100% {
//     transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateX(-180deg);
//   }
// }

// @keyframes flipping10-2 {
//   0% {
//     background: #514b82;
//     border-radius: 0;
//   }

//   50% {
//     background: #25b09b;
//     border-radius: 100px 0 0 100px;
//   }
// }

/* HTML: <div class="flipping11"></div> */
// .flipping11 {
//   width: 60px;
//   aspect-ratio: 1;
//   display: flex;
//   animation: flipping11-0 2s infinite linear;
// }

// .flipping11::before,
// .flipping11::after {
//   content: "";
//   flex: 1;
//   clip-path: polygon(100% 0, 100% 100%, 0 50%);
//   animation: flipping11-1 1s infinite linear alternate, flipping11-2 2s infinite linear -0.5s;
// }

// .flipping11::after {
//   --s: -1, -1;
// }

// @keyframes flipping11-0 {
//   0%,
//   49.99% {
//     transform: scaleX(1) rotate(0deg);
//   }

//   50%,
//   100% {
//     transform: scaleX(-1) rotate(-90deg);
//   }
// }

// @keyframes flipping11-1 {
//   0%,
//   5% {
//     transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateY(0deg);
//   }

//   33% {
//     transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(0deg);
//   }

//   66% {
//     transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-180deg);
//   }

//   95%,
//   100% {
//     transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateX(-180deg);
//   }
// }

// @keyframes flipping11-2 {
//   0%,
//   49.99% {
//     background: #eb9f9f;
//   }

//   50%,
//   100% {
//     background: #a79c8e;
//   }
// }

/* HTML: <div class="flipping12"></div> */
// .flipping12 {
//   width: 60px;
//   aspect-ratio: 1;
//   display: flex;
//   animation: flipping12-0 4s infinite linear 0.5s;
// }

// .flipping12::before,
// .flipping12::after {
//   content: "";
//   flex: 1;
//   background: #a79c8e;
//   clip-path: polygon(100% 0, 100% 100%, 0 50%);
//   animation: flipping12-1 1s infinite linear;
// }

// .flipping12::after {
//   transform: scale(-1);
//   animation: none;
// }

// @keyframes flipping12-0 {
//   0%,
//   12.49% {
//     transform: rotate(0deg);
//   }

//   12.5%,
//   37.49% {
//     transform: rotate(90deg);
//   }

//   37.5%,
//   62.49% {
//     transform: rotate(180deg);
//   }

//   62.5%,
//   87.49% {
//     transform: rotate(270deg);
//   }

//   87.5%,
//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes flipping12-1 {
//   0%,
//   5% {
//     transform: translate(0px) perspective(150px) rotateY(0deg);
//   }

//   33% {
//     transform: translate(-10px) perspective(150px) rotateX(0deg);
//   }

//   66% {
//     transform: translate(-10px) perspective(150px) rotateX(-180deg);
//   }

//   95%,
//   100% {
//     transform: translate(0px) perspective(150px) rotateX(-180deg);
//   }
// }

/* HTML: <div class="flipping13"></div> */
// .flipping13 {
//   width: 60px;
//   aspect-ratio: 1;
//   display: flex;
//   animation: flipping13-0 4s infinite linear 0.5s;
// }

// .flipping13::before,
// .flipping13::after {
//   content: "";
//   flex: 1;
//   background: #fa6900;
//   clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
//   animation: flipping13-1 1s infinite linear;
// }

// .flipping13::after {
//   transform: scale(-1);
//   animation: none;
// }

// @keyframes flipping13-0 {
//   0%,
//   12.49% {
//     transform: rotate(0deg);
//   }

//   12.5%,
//   37.49% {
//     transform: rotate(90deg);
//   }

//   37.5%,
//   62.49% {
//     transform: rotate(180deg);
//   }

//   62.5%,
//   87.49% {
//     transform: rotate(270deg);
//   }

//   87.5%,
//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes flipping13-1 {
//   0%,
//   5% {
//     transform: translate(0px) perspective(150px) rotateY(0deg);
//   }

//   33% {
//     transform: translate(-10px) perspective(150px) rotateX(0deg);
//   }

//   66% {
//     transform: translate(-10px) perspective(150px) rotateX(-180deg);
//   }

//   95%,
//   100% {
//     transform: translate(0px) perspective(150px) rotateX(-180deg);
//   }
// }

/* HTML: <div class="flipping14"></div> */
// .flipping14 {
//   width: 60px;
//   aspect-ratio: 1;
//   display: flex;
// }

// .flipping14::before,
// .flipping14::after {
//   content: "";
//   flex: 1;
//   animation: flipping14 1.5s -0.25s infinite linear alternate both;
// }

// .flipping14::after {
//   --s: -1, -1;
//   animation-delay: 0.5s;
// }

// @keyframes flipping14 {
//   0%,
//   30% {
//     transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateY(0deg);
//     clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
//     background: #fa6900;
//   }

//   37.5% {
//     transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(0deg);
//     clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
//     background: #fa6900;
//   }

//   50% {
//     transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-90deg);
//     clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
//     background: #fa6900;
//     border-radius: 0;
//   }

//   50.01% {
//     transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-90.1deg);
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 25%);
//     background: #2fb8ac;
//     border-radius: 100px 0 0 100px;
//   }

//   62.5% {
//     transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-180deg);
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 25%);
//     background: #2fb8ac;
//     border-radius: 100px 0 0 100px;
//   }

//   70%,
//   100% {
//     transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateX(-180deg);
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 25%);
//     background: #2fb8ac;
//     border-radius: 100px 0 0 100px;
//   }
// }

/* HTML: <div class="flipping15"></div> */
// .flipping15 {
//   width: 80px;
//   height: 40px;
//   display: flex;
// }

// .flipping15::before,
// .flipping15::after {
//   content: "";
//   flex: 1;
//   clip-path: polygon(0 0, 100% 0, 100% 100%);
//   background: #fc3a51;
//   animation: flipping15-1 1s infinite linear alternate, flipping15-2 2s infinite linear -0.5s;
// }

// .flipping15::after {
//   --s: -1, -1;
// }

// @keyframes flipping15-1 {
//   0%,
//   10% {
//     transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateY(0deg);
//   }

//   33% {
//     transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(0deg);
//   }

//   66% {
//     transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-180deg);
//   }

//   90%,
//   100% {
//     transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateX(-180deg);
//   }
// }

// @keyframes flipping15-2 {
//   0%,
//   49.99% {
//     background: #fc3a51;
//   }

//   50%,
//   100% {
//     background: #eb9f9f;
//   }
// }

/* HTML: <div class="flipping16"></div> */
// .flipping16 {
//   width: 50px;
//   aspect-ratio: 1;
//   display: flex;
//   color: orange;
//   background: linear-gradient(currentColor 0 0) right / 51% 100%, linear-gradient(currentColor 0 0) bottom / 100% 51%;
//   background-repeat: no-repeat;
//   animation: flipping16-0 2s infinite linear 0.25s;
// }

// .flipping16::before {
//   content: "";
//   width: 50%;
//   height: 50%;
//   background: currentColor;
//   animation: flipping16-1 0.5s infinite linear;
// }

// @keyframes flipping16-0 {
//   0%,
//   12.49% {
//     transform: rotate(0deg);
//   }

//   12.5%,
//   37.49% {
//     transform: rotate(90deg);
//   }

//   37.5%,
//   62.49% {
//     transform: rotate(180deg);
//   }

//   62.5%,
//   87.49% {
//     transform: rotate(270deg);
//   }

//   87.5%,
//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes flipping16-1 {
//   0% {
//     transform: perspective(80px) rotate3d(-1, -1, 0, 0);
//   }

//   80%,
//   100% {
//     transform: perspective(80px) rotate3d(-1, -1, 0, -180deg);
//   }
// }

/* HTML: <div class="flipping17"></div> */
// .flipping17 {
//   width: 50px;
//   height: 50px;
//   display: flex;
//   color: #514b82;
//   background: linear-gradient(currentColor 0 0) right / 51% 100%, linear-gradient(currentColor 0 0) bottom / 100% 51%;
//   background-repeat: no-repeat;
//   animation: flipping17-0 2s infinite linear 0.25s;
// }

// .flipping17::before {
//   content: "";
//   width: 50%;
//   height: 50%;
//   background: currentColor;
//   transform-origin: 10% 10%;
//   animation: flipping17-1 0.5s infinite linear;
// }

// @keyframes flipping17-0 {
//   0%,
//   12.49% {
//     transform: rotate(0deg);
//   }

//   12.5%,
//   37.49% {
//     transform: rotate(90deg);
//   }

//   37.5%,
//   62.49% {
//     transform: rotate(180deg);
//   }

//   62.5%,
//   87.49% {
//     transform: rotate(270deg);
//   }

//   87.5%,
//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes flipping17-1 {
//   0% {
//     transform: perspective(80px) rotate3d(-1, 1, 0, 0);
//   }

//   80%,
//   100% {
//     transform: perspective(80px) rotate3d(-1, 1, 0, -360deg);
//   }
// }

/* HTML: <div class="flipping18"></div> */
// .flipping18 {
//   width: 60px;
//   height: 60px;
//   display: flex;
//   color: #fc3a51;
//   --c: #0000 calc(100% - 20px), currentColor calc(100% - 19px) 98%, #0000;
//   background: radial-gradient(farthest-side at left, var(--c)) right / 50% 100%, radial-gradient(farthest-side at top, var(--c)) bottom/100% 50%;
//   background-repeat: no-repeat;
//   animation: flipping18-0 2s infinite linear 0.25s;
// }

// .flipping18::before {
//   content: "";
//   width: 50%;
//   height: 50%;
//   background: radial-gradient(farthest-side at bottom right, var(--c));
//   animation: flipping18-1 0.5s infinite linear;
// }

// @keyframes flipping18-0 {
//   0%,
//   12.49% {
//     transform: rotate(0deg);
//   }

//   12.5%,
//   37.49% {
//     transform: rotate(90deg);
//   }

//   37.5%,
//   62.49% {
//     transform: rotate(180deg);
//   }

//   62.5%,
//   87.49% {
//     transform: rotate(270deg);
//   }

//   87.5%,
//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes flipping18-1 {
//   0% {
//     transform: perspective(150px) rotateY(0) rotate(0);
//   }

//   50% {
//     transform: perspective(150px) rotateY(180deg) rotate(0);
//   }

//   80%,
//   100% {
//     transform: perspective(150px) rotateY(180deg) rotate(90deg);
//   }
// }

/* HTML: <div class="flipping19"></div> */
// .flipping19 {
//   width: 60px;
//   aspect-ratio: 1;
//   display: grid;
// }

// .flipping19:before,
// .flipping19:after {
//   content: "";
//   grid-area: 1/1;
//   color: #25b09b;
//   animation: flipping19 1.5s infinite linear;
// }

// .flipping19:before {
//   margin: 5px 20px;
//   background: currentColor;
// }

// .flipping19:after {
//   border: solid;
//   border-width: 5px 20px;
//   --s: 0;
// }

// @keyframes flipping19 {
//   0% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 0);
//   }

//   25% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 90deg);
//   }

//   25.01% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 90deg);
//   }

//   40%,
//   60% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 180deg);
//   }

//   75% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 270deg);
//   }

//   75.01% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 270deg);
//   }

//   90%,
//   100% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 360deg);
//   }
// }

/* HTML: <div class="flipping20"></div> */
// .flipping20 {
//   width: 60px;
//   height: 60px;
//   display: grid;
// }

// .flipping20:before,
// .flipping20:after {
//   content: "";
//   grid-area: 1/1;
//   background: #514b82;
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 75% 25%, 0 0, 0 100%, 100% 100%, 25% 75%, 0 0);
//   animation: flipping20 1.5s infinite linear;
// }

// .flipping20:after {
//   clip-path: polygon(0 0, 76% 24%, 100% 100%, 24% 76%);
//   --s: 0;
// }

// @keyframes flipping20 {
//   0% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 0);
//   }

//   25% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, -90deg);
//   }

//   25.01% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, -90deg);
//   }

//   40%,
//   60% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, -180deg);
//   }

//   75% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, -270deg);
//   }

//   75.01% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, -270deg);
//   }

//   90%,
//   100% {
//     transform: perspective(100px) rotate3d(1, var(--s, 1), 0, -360deg);
//   }
// }

/* HTML: <div class="wobbling01"></div> */
// .wobbling01 {
//   width: 120px;
//   height: 20px;
//   background: linear-gradient(#000 0 0) left/20px 20px no-repeat #ddd;
//   animation: wobbling01 1s infinite linear;
// }

// @keyframes wobbling01 {
//   50% {
//     background-position: right;
//   }
// }

/* HTML: <div class="wobbling02"></div> */
// .wobbling02 {
//   width: 120px;
//   height: 20px;
//   border-radius: 20px;
//   background: radial-gradient(farthest-side, orange 94%, #0000) left/20px 20px no-repeat lightblue;
//   animation: wobbling02 1s infinite linear;
// }

// @keyframes wobbling02 {
//   50% {
//     background-position: right;
//   }
// }

/* HTML: <div class="wobbling03"></div> */
// .wobbling03 {
//   width: 120px;
//   height: 22px;
//   border-radius: 40px;
//   color: #514b82;
//   border: 2px solid;
//   position: relative;
// }

// .wobbling03::before {
//   content: "";
//   position: absolute;
//   margin: 2px;
//   width: 25%;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   border-radius: inherit;
//   background: currentColor;
//   animation: wobbling03 1s infinite linear;
// }

// @keyframes wobbling03 {
//   50% {
//     left: 100%;
//     transform: translateX(calc(-100% - 4px));
//   }
// }

/* HTML: <div class="wobbling04"></div> */
// .wobbling04 {
//   width: 20px;
//   aspect-ratio: 1;
//   background: #25b09b;
//   box-shadow: 0 0 60px 15px #25b09b;
//   transform: translate(-80px);
//   clip-path: inset(0);
//   animation: wobbling04-1 0.5s ease-in-out infinite alternate, wobbling04-2 1s ease-in-out infinite;
// }

// @keyframes wobbling04-1 {
//   100% {
//     transform: translateX(80px);
//   }
// }

// @keyframes wobbling04-2 {
//   33% {
//     clip-path: inset(0 0 0 -100px);
//   }

//   50% {
//     clip-path: inset(0 0 0 0);
//   }

//   83% {
//     clip-path: inset(0 -100px 0 0);
//   }
// }

/* HTML: <div class="wobbling05"></div> */
.wobbling05 {
  width: 120px;
  height: 20px;
  clip-path: polygon(10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0 50%);
  background: conic-gradient(from 135deg at top, #f03355 90deg, #0000 0) top left, conic-gradient(from -45deg at bottom, #f03355 90deg, #0000 0) bottom left, #ccc;
  background-size: 20px 50%;
  background-repeat: no-repeat;
  animation: wobbling05 1s infinite linear;
}

@keyframes wobbling05 {
  50% {
    background-position: top right, bottom right;
  }
}

/* HTML: <div class="wobbling06"></div> */
// .wobbling06 {
//   width: 120px;
//   height: 21px;
//   background: linear-gradient(#000 0 0) left/10px 100% no-repeat #ddd;
//   animation: wobbling06 1s infinite cubic-bezier(0, 0.2, 1, 1);
//   position: relative;
// }

// .wobbling06:before,
// .wobbling06:after {
//   content: "";
//   position: absolute;
//   left: 0;
//   right: 0;
//   height: 7px;
//   background: linear-gradient(#000 0 0) left/10px 100% no-repeat #ddd;
//   animation: inherit;
// }

// .wobbling06:before {
//   top: 0;
//   animation-timing-function: cubic-bezier(0, 0, 1, 1);
// }

// .wobbling06:after {
//   bottom: 0;
//   animation-timing-function: cubic-bezier(0, 0.4, 1, 1);
// }

// @keyframes wobbling06 {
//   50% {
//     background-position: right;
//   }
// }

/* HTML: <div class="wobbling07"></div> */
// .wobbling07 {
//   width: 20px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: radial-gradient(at 30% 30%, #0000, #000a) red;
//   position: relative;
//   left: 0;
//   top: 0;
//   animation: wobbling07-1 0.6s, wobbling07-2 0.3s;
//   animation-timing-function: cubic-bezier(0.5, -200, 0.5, 200);
//   animation-iteration-count: infinite;
// }

// @keyframes wobbling07-1 {
//   100% {
//     left: 1px;
//   }
// }

// @keyframes wobbling07-2 {
//   100% {
//     top: 0.3px;
//   }
// }

/* HTML: <div class="wobbling08"></div> */
// .wobbling08 {
//   width: 20px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   position: relative;
//   transform-origin: 50% -200%;
//   background: radial-gradient(at 30% 30%, #0000, #000a) red;
//   animation: wobbling08 1s cubic-bezier(0.5, -200, 0.5, 200) infinite;
// }

// .wobbling08:before {
//   content: "";
//   position: absolute;
//   inset: -200% 8px 100%;
//   background: #ddd;
// }

// @keyframes wobbling08 {
//   100% {
//     transform: rotate(1deg);
//   }
// }

/* HTML: <div class="wobbling09"></div> */
// .wobbling09 {
//   width: 80px;
//   height: 20px;
//   color: #514b82;
//   background: radial-gradient(farthest-side, currentColor 98%, #0000) left / 20px 20px, radial-gradient(farthest-side, currentColor 98%, #0000) right / 20px 20px, radial-gradient(farthest-side, #000 98%, #0000) center/5px 5px,
//     linear-gradient(currentColor 0 0) center/100% 2px;
//   background-repeat: no-repeat;
//   animation: wobbling09 1s cubic-bezier(0.5, -150, 0.5, 150) infinite;
// }

// @keyframes wobbling09 {
//   100% {
//     transform: rotate(1deg);
//   }
// }

/* HTML: <div class="wobbling10"></div> */
// .wobbling10 {
//   width: calc(100px - 14px);
//   height: 50px;
//   border-radius: 50px;
//   background: radial-gradient(farthest-side, #0000 calc(100% - 15px), #ccc calc(100% - 14px) 99%, #0000) left, radial-gradient(farthest-side, #0000 calc(100% - 15px), #ccc calc(100% - 14px) 99%, #0000) right;
//   background-size: calc(50% + 7px) 100%;
//   background-repeat: no-repeat;
//   position: relative;
//   animation: wobbling10-0 1s infinite linear;
// }

// .wobbling10:before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   margin: auto;
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background: #f03355;
//   transform-origin: -14px 50%;
//   animation: wobbling10-1 0.5s infinite linear;
// }

// @keyframes wobbling10-0 {
//   0%,
//   49.99% {
//     transform: scaleX(1);
//   }

//   50%,
//   100% {
//     transform: scaleX(-1);
//   }
// }

// @keyframes wobbling10-1 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="wobbling11"></div> */
.wobbling11 {
  width: 30px;
  aspect-ratio: 1;
  display: grid;
  transform: translateY(100%);
}

.wobbling11::before,
.wobbling11::after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  transform-origin: bottom;
  position: relative;
}

.wobbling11::before {
  background: radial-gradient(at 30% 30%, #0000, #000a) red;
  transform: scaleY(0.65);
  top: 0;
  animation: wobbling11-1, wobbling11-2;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0, 400, 1, 400), ease;
  animation-iteration-count: infinite;
}

.wobbling11::after {
  background: #ccc;
  filter: blur(8px);
  transform: scaleY(0.3) translate(0px, 0px);
  left: 0;
  animation: wobbling11-3 2s cubic-bezier(0, 400, 1, 400) infinite;
}

@keyframes wobbling11-1 {
  100% {
    top: -0.2px;
  }
}

@keyframes wobbling11-2 {
  4%,
  96% {
    transform: scaleY(1);
  }
}

@keyframes wobbling11-3 {
  100% {
    transform: scaleY(0.3) translate(0.1px, -0.1px);
  }
}

/* HTML: <div class="wobbling12"></div> */
.wobbling12 {
  width: 100px;
  height: 60px;
  display: flex;
  animation: wobbling12-0 2s infinite linear;
}

.wobbling12::before,
.wobbling12::after {
  content: "";
  flex: 4;
  background: radial-gradient(at 50% 20%, #0000, #000a) bottom left/20px 20px repeat-x, linear-gradient(red 0 0) bottom/100% 20px no-repeat #ddd;
  -webkit-mask: repeating-linear-gradient(90deg, #000 0 4px, #0000 0 20px) 8px 0, radial-gradient(farthest-side, #000 90%, #0000) left bottom/20px 20px repeat-x;
}

.wobbling12::after {
  flex: 1;
  transform-origin: top;
  animation: wobbling12-1 1s cubic-bezier(0, 20, 1, 20) infinite;
}

@keyframes wobbling12-0 {
  0%,
  49.9% {
    transform: scaleX(1);
  }

  50%,
  100% {
    transform: scaleX(-1);
  }
}

@keyframes wobbling12-1 {
  100% {
    transform: rotate(-2deg);
  }
}

/* HTML: <div class="wobbling13"></div> */
// .wobbling13 {
//   width: 20px;
//   aspect-ratio: 1;
//   animation: wobbling13-0 2s linear infinite;
// }

// .wobbling13::before,
// .wobbling13::after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   border-radius: 50%;
//   background: radial-gradient(at 30% 30%, #0000, #000a) red;
//   animation: wobbling13-1 0.5s cubic-bezier(0.5, -500, 0.5, 500) infinite;
// }

// .wobbling13::after {
//   animation-delay: -0.15s;
// }

// @keyframes wobbling13-0 {
//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes wobbling13-1 {
//   100% {
//     transform: translate(0.5px);
//   }
// }

/* HTML: <div class="wobbling14"></div> */
// .wobbling14 {
//   width: 80px;
//   aspect-ratio: 1;
//   background: radial-gradient(farthest-side at top, #0000 calc(100% - 21px), lightblue calc(100% - 20px) 99%, #0000) bottom/100% 50%, radial-gradient(farthest-side, lightblue 94%, #0000) left / 20px 20px,
//     radial-gradient(farthest-side, lightblue 94%, #0000) right/20px 20px;
//   background-repeat: no-repeat;
//   position: relative;
// }

// .wobbling14::before {
//   content: "";
//   position: absolute;
//   width: 20px;
//   height: 20px;
//   inset: auto 0 0;
//   margin: auto;
//   border-radius: 50%;
//   background: orange;
//   transform-origin: 50% -20px;
//   animation: wobbling14 1s infinite cubic-bezier(0.5, 623, 0.5, -623);
// }

// @keyframes wobbling14 {
//   100% {
//     transform: rotate(0.5deg);
//   }
// }

/* HTML: <div class="wobbling15"></div> */
// .wobbling15 {
//   height: 80px;
//   width: 20px;
//   color: #514b82;
//   background: radial-gradient(farthest-side, currentColor 94%, #0000) top/8px 8px, linear-gradient(currentColor 0 0) top/4px 70%, conic-gradient(from -30deg at bottom, #0000, currentColor 2deg 58deg, #0000 60deg) bottom / 100% 20px,
//     conic-gradient(from 150deg at top, #0000, currentColor 2deg 58deg, #0000 60deg) bottom 20px left 0/100% 20px;
//   background-repeat: no-repeat;
//   transform-origin: 50% 4px;
//   animation: wobbling15 2s infinite cubic-bezier(0.5, 300, 0.5, -300);
// }

// @keyframes wobbling15 {
//   100% {
//     transform: rotate(0.5deg);
//   }
// }

/* HTML: <div class="wobbling16"></div> */
// .wobbling16 {
//   width: 80px;
//   height: 50px;
//   background: radial-gradient(farthest-side, #0000 calc(100% - 15px), #ccc calc(100% - 14px) 99%, #0000) center/50px 100%, linear-gradient(#ccc 0 0) bottom/100% 14px;
//   background-repeat: no-repeat;
//   position: relative;
//   animation: wobbling16-0 2s -0.5s infinite linear;
// }

// .wobbling16:before {
//   content: "";
//   position: absolute;
//   inset: auto auto 2px 0;
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background: #f03355;
//   transform-origin: 50% -14px;
//   animation: wobbling16-1 0.5s infinite linear alternate;
// }

// @keyframes wobbling16-0 {
//   0%,
//   49.99% {
//     transform: scaleX(1);
//   }

//   50%,
//   100% {
//     transform: scaleX(-1);
//   }
// }

// @keyframes wobbling16-1 {
//   0% {
//     transform: translate(0) rotate(0);
//   }

//   50% {
//     transform: translate(34px) rotate(0);
//   }

//   100% {
//     transform: translate(34px) rotate(-180deg);
//   }
// }

/* HTML: <div class="wobbling17"></div> */
// .wobbling17 {
//   height: 20px;
//   width: 80px;
//   transform: rotate(-30deg);
//   background: radial-gradient(farthest-side, #f03355 90%, #0000) left bottom/15px 15px no-repeat #ddd;
//   animation: wobbling17-0 2s infinite alternate linear, wobbling17-1 2s infinite cubic-bezier(0.75, 0, 1, 0.6);
// }

// @keyframes wobbling17-0 {
//   50% {
//     transform: rotate(30deg);
//   }
// }

// @keyframes wobbling17-1 {
//   50% {
//     background-position: right bottom;
//   }
// }

/* HTML: <div class="wobbling18"></div> */
// .wobbling18 {
//   height: 40px;
//   aspect-ratio: 2;
//   --c: no-repeat linear-gradient(#25b09b 0 0);
//   background: var(--c), var(--c), var(--c), var(--c);
//   background-size: 26% 50%;
//   animation: wobbling18 1s infinite cubic-bezier(0.5, 150, 0.5, -150);
// }

// @keyframes wobbling18 {
//   0% {
//     background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%, calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%;
//   }

//   100% {
//     background-position: calc(0 * 100% / 3) 51%, calc(1 * 100% / 3) 50.5%, calc(2 * 100% / 3) 49.5%, calc(3 * 100% / 3) 49%;
//   }
// }

/* HTML: <div class="wobbling19"></div> */
// .wobbling19 {
//   height: 30px;
//   aspect-ratio: 3;
//   --c: no-repeat linear-gradient(#514b82 0 0);
//   background: var(--c) calc(0 * 100% / 5) 50%, var(--c) calc(1 * 100% / 5) 50%, var(--c) calc(2 * 100% / 5) 50%, var(--c) calc(3 * 100% / 5) 50%, var(--c) calc(4 * 100% / 5) 50%, var(--c) calc(5 * 100% / 5) 50%;
//   background-size: calc(100% / 6 + 1px) 50%;
//   animation: wobbling19 1s infinite cubic-bezier(0.5, 170, 0.5, -170);
// }

// @keyframes wobbling19 {
//   14.28% {
//     background-position: calc(0 * 100% / 5) 51%, calc(1 * 100% / 5) 50%, calc(2 * 100% / 5) 50%, calc(3 * 100% / 5) 50%, calc(4 * 100% / 5) 50%, calc(5 * 100% / 5) 50%;
//   }

//   28.57% {
//     background-position: calc(0 * 100% / 5) 50%, calc(1 * 100% / 5) 51%, calc(2 * 100% / 5) 50%, calc(3 * 100% / 5) 50%, calc(4 * 100% / 5) 50%, calc(5 * 100% / 5) 50%;
//   }

//   42.85% {
//     background-position: calc(0 * 100% / 5) 50%, calc(1 * 100% / 5) 50%, calc(2 * 100% / 5) 51%, calc(3 * 100% / 5) 50%, calc(4 * 100% / 5) 50%, calc(5 * 100% / 5) 50%;
//   }

//   57.14% {
//     background-position: calc(0 * 100% / 5) 50%, calc(1 * 100% / 5) 50%, calc(2 * 100% / 5) 50%, calc(3 * 100% / 5) 51%, calc(4 * 100% / 5) 50%, calc(5 * 100% / 5) 50%;
//   }

//   71.42% {
//     background-position: calc(0 * 100% / 5) 50%, calc(1 * 100% / 5) 50%, calc(2 * 100% / 5) 50%, calc(3 * 100% / 5) 50%, calc(4 * 100% / 5) 51%, calc(5 * 100% / 5) 50%;
//   }

//   85.71% {
//     background-position: calc(0 * 100% / 5) 50%, calc(1 * 100% / 5) 50%, calc(2 * 100% / 5) 50%, calc(3 * 100% / 5) 50%, calc(4 * 100% / 5) 50%, calc(5 * 100% / 5) 51%;
//   }
// }

/* HTML: <div class="wobbling20"></div> */
// .wobbling20 {
//   height: 60px;
//   aspect-ratio: 1;
//   position: relative;
// }

// .wobbling20::before,
// .wobbling20::after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   border-radius: 50%;
//   transform-origin: bottom;
// }

// .wobbling20::after {
//   background: radial-gradient(at 75% 15%, #fffb, #0000 35%), radial-gradient(at 80% 40%, #0000, #0008), radial-gradient(circle 5px, #fff 94%, #0000), radial-gradient(circle 10px, #000 94%, #0000),
//     linear-gradient(#f93318 0 0) top / 100% calc(50% - 5px), linear-gradient(#fff 0 0) bottom/100% calc(50% - 5px) #000;
//   background-repeat: no-repeat;
//   animation: wobbling20 1s infinite cubic-bezier(0.5, 120, 0.5, -120);
// }

// .wobbling20::before {
//   background: #ddd;
//   filter: blur(8px);
//   transform: scaleY(0.4) translate(-13px, 0px);
// }

// @keyframes wobbling20 {
//   30%,
//   70% {
//     transform: rotate(0deg);
//   }

//   49.99% {
//     transform: rotate(0.2deg);
//   }

//   50% {
//     transform: rotate(-0.2deg);
//   }
// }

/* HTML: <div class="progress01"></div> */
// .progress01 {
//   width: 120px;
//   height: 20px;
//   background: linear-gradient(#000 0 0) 0/0% no-repeat #ddd;
//   animation: progress01 2s infinite linear;
// }

// @keyframes progress01 {
//   100% {
//     background-size: 100%;
//   }
// }

/* HTML: <div class="progress02"></div> */
// .progress02 {
//   width: 120px;
//   height: 20px;
//   border-radius: 20px;
//   background: linear-gradient(orange 0 0) 0/0% no-repeat lightblue;
//   animation: progress02 2s infinite steps(10);
// }

// @keyframes progress02 {
//   100% {
//     background-size: 110%;
//   }
// }

/* HTML: <div class="progress03"></div> */
.progress03 {
  width: 120px;
  height: 20px;
  border-radius: 20px;
  background: repeating-linear-gradient(135deg, #f03355 0 10px, #ffa516 0 20px) 0/0% no-repeat, repeating-linear-gradient(135deg, #ddd 0 10px, #eee 0 20px) 0/100%;
  animation: progress03 2s infinite;
}

@keyframes progress03 {
  100% {
    background-size: 100%;
  }
}

/* HTML: <div class="progress04"></div> */
// .progress04 {
//   width: 120px;
//   height: 20px;
//   -webkit-mask: linear-gradient(90deg, #000 70%, #0000 0) 0/20%;
//   background: linear-gradient(#000 0 0) 0/0% no-repeat #ddd;
//   animation: progress04 2s infinite steps(6);
// }

// @keyframes progress04 {
//   100% {
//     background-size: 120%;
//   }
// }

/* HTML: <div class="progress05"></div> */
// .progress05 {
//   width: 80px;
//   height: 40px;
//   color: #000;
//   border: 2px solid currentColor;
//   border-right-color: transparent;
//   padding: 3px;
//   background: repeating-linear-gradient(90deg, currentColor 0 10px, #0000 0 15px) 0/0% no-repeat content-box content-box;
//   position: relative;
//   animation: progress05 2s infinite steps(6);
// }

// .progress05::before {
//   content: "";
//   position: absolute;
//   top: -2px;
//   bottom: -2px;
//   left: 100%;
//   width: 10px;
//   background: linear-gradient(#0000 calc(50% - 7px), currentColor 0 calc(50% - 5px), #0000 0 calc(50% + 5px), currentColor 0 calc(50% + 7px), #0000 0) left / 100% 100%,
//     linear-gradient(currentColor calc(50% - 5px), #0000 0 calc(50% + 5px), currentColor 0) left / 2px 100%, linear-gradient(#0000 calc(50% - 5px), currentColor 0 calc(50% + 5px), #0000 0) right/2px 100%;
//   background-repeat: no-repeat;
// }

// @keyframes progress05 {
//   100% {
//     background-size: 120%;
//   }
// }

/* HTML: <div class="progress06"></div> */
// .progress06 {
//   width: 120px;
//   height: 22px;
//   border-radius: 20px;
//   color: #514b82;
//   border: 2px solid;
//   position: relative;
// }

// .progress06::before {
//   content: "";
//   position: absolute;
//   margin: 2px;
//   inset: 0 100% 0 0;
//   border-radius: inherit;
//   background: currentColor;
//   animation: progress06 2s infinite;
// }

// @keyframes progress06 {
//   100% {
//     inset: 0;
//   }
// }

/* HTML: <div class="progress07"></div> */
// .progress07 {
//   width: 120px;
//   height: 24px;
//   -webkit-mask: radial-gradient(circle closest-side, #000 94%, #0000) 0 0/25% 100%, linear-gradient(#000 0 0) center/calc(100% - 12px) calc(100% - 12px) no-repeat;
//   background: linear-gradient(#25b09b 0 0) 0/0% no-repeat #ddd;
//   animation: progress07 2s infinite linear;
// }

// @keyframes progress07 {
//   100% {
//     background-size: 100%;
//   }
// }

/* HTML: <div class="progress08"></div> */
// .progress08 {
//   width: 60px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   -webkit-mask: linear-gradient(0deg, #000 55%, #0000 0) bottom/100% 18.18%;
//   background: linear-gradient(#f03355 0 0) bottom/100% 0% no-repeat #ddd;
//   animation: progress08 2s infinite steps(7);
// }

// @keyframes progress08 {
//   100% {
//     background-size: 100% 115%;
//   }
// }

/* HTML: <div class="progress09"></div> */
// .progress09 {
//   --r1: 154%;
//   --r2: 68.5%;
//   width: 60px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: radial-gradient(var(--r1) var(--r2) at top, #0000 79.5%, #269af2 80%), radial-gradient(var(--r1) var(--r2) at bottom, #269af2 79.5%, #0000 80%), radial-gradient(var(--r1) var(--r2) at top, #0000 79.5%, #269af2 80%), #ccc;
//   background-size: 50.5% 220%;
//   background-position: -100% 0%, 0% 0%, 100% 0%;
//   background-repeat: no-repeat;
//   animation: progress09 2s infinite linear;
// }

// @keyframes progress09 {
//   33% {
//     background-position: 0% 33%, 100% 33%, 200% 33%;
//   }

//   66% {
//     background-position: -100% 66%, 0% 66%, 100% 66%;
//   }

//   100% {
//     background-position: 0% 100%, 100% 100%, 200% 100%;
//   }
// }

/* HTML: <div class="progress10"></div> */
// .progress10 {
//   width: 120px;
//   height: 60px;
//   border-radius: 200px 200px 0 0;
//   -webkit-mask: repeating-radial-gradient(farthest-side at bottom, #0000 0, #000 1px 12%, #0000 calc(12% + 1px) 20%);
//   background: radial-gradient(farthest-side at bottom, #514b82 0 95%, #0000 0) bottom/0% 0% no-repeat #ddd;
//   animation: progress10 2s infinite steps(6);
// }

// @keyframes progress10 {
//   100% {
//     background-size: 120% 120%;
//   }
// }

/* HTML: <div class="progress11"></div> */
// .progress11 {
//   width: 60px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   animation: progress11 2s infinite;
// }

// @keyframes progress11 {
//   0% {
//     background: conic-gradient(#f03355 0, #0000 0);
//   }

//   12.5% {
//     background: conic-gradient(#f03355 45deg, #0000 46deg);
//   }

//   25% {
//     background: conic-gradient(#f03355 90deg, #0000 91deg);
//   }

//   37.5% {
//     background: conic-gradient(#f03355 135deg, #0000 136deg);
//   }

//   50% {
//     background: conic-gradient(#f03355 180deg, #0000 181deg);
//   }

//   62.5% {
//     background: conic-gradient(#f03355 225deg, #0000 226deg);
//   }

//   75% {
//     background: conic-gradient(#f03355 270deg, #0000 271deg);
//   }

//   87.5% {
//     background: conic-gradient(#f03355 315deg, #0000 316deg);
//   }

//   100% {
//     background: conic-gradient(#f03355 360deg, #0000 360deg);
//   }
// }

/* HTML: <div class="progress12"></div> */
// .progress12 {
//   width: 120px;
//   height: 20px;
//   background: linear-gradient(#000 50%, #0000 0), linear-gradient(#0000 50%, #000 0), linear-gradient(#000 50%, #0000 0), linear-gradient(#0000 50%, #000 0), linear-gradient(#000 50%, #0000 0), linear-gradient(#0000 50%, #000 0) #ddd;
//   background-size: calc(100% / 6 + 1px) 200%;
//   background-repeat: no-repeat;
//   animation: progress12 2s infinite;
// }

// @keyframes progress12 {
//   0% {
//     background-position: calc(0 * 100% / 5) 100%, calc(1 * 100% / 5) 0%, calc(2 * 100% / 5) 100%, calc(3 * 100% / 5) 0%, calc(4 * 100% / 5) 100%, calc(5 * 100% / 5) 0%;
//   }

//   16.67% {
//     background-position: calc(0 * 100% / 5) 0%, calc(1 * 100% / 5) 0%, calc(2 * 100% / 5) 100%, calc(3 * 100% / 5) 0%, calc(4 * 100% / 5) 100%, calc(5 * 100% / 5) 0%;
//   }

//   33.33% {
//     background-position: calc(0 * 100% / 5) 0%, calc(1 * 100% / 5) 100%, calc(2 * 100% / 5) 100%, calc(3 * 100% / 5) 0%, calc(4 * 100% / 5) 100%, calc(5 * 100% / 5) 0%;
//   }

//   50% {
//     background-position: calc(0 * 100% / 5) 0%, calc(1 * 100% / 5) 100%, calc(2 * 100% / 5) 0%, calc(3 * 100% / 5) 0%, calc(4 * 100% / 5) 100%, calc(5 * 100% / 5) 0%;
//   }

//   66.67% {
//     background-position: calc(0 * 100% / 5) 0%, calc(1 * 100% / 5) 100%, calc(2 * 100% / 5) 0%, calc(3 * 100% / 5) 100%, calc(4 * 100% / 5) 100%, calc(5 * 100% / 5) 0%;
//   }

//   83.33% {
//     background-position: calc(0 * 100% / 5) 0%, calc(1 * 100% / 5) 100%, calc(2 * 100% / 5) 0%, calc(3 * 100% / 5) 100%, calc(4 * 100% / 5) 0%, calc(5 * 100% / 5) 0%;
//   }

//   100% {
//     background-position: calc(0 * 100% / 5) 0%, calc(1 * 100% / 5) 100%, calc(2 * 100% / 5) 0%, calc(3 * 100% / 5) 100%, calc(4 * 100% / 5) 0%, calc(5 * 100% / 5) 100%;
//   }
// }

/* HTML: <div class="progress13"></div> */
// .progress13 {
//   width: 124px;
//   height: 24px;
//   -webkit-mask: conic-gradient(from 135deg at top, #0000, #000 0.5deg 90deg, #0000 90.5deg) 0 0, conic-gradient(from -45deg at bottom, #0000, #000 0.5deg 90deg, #0000 90.5deg) 0 100%;
//   -webkit-mask-size: 25% 50%;
//   -webkit-mask-repeat: repeat-x;
//   background: linear-gradient(#25b09b 0 0) left/0% 100% no-repeat #ddd;
//   animation: progress13 2s infinite linear;
// }

// @keyframes progress13 {
//   100% {
//     background-size: 100% 100%;
//   }
// }

/* HTML: <div class="progress14"></div> */
// .progress14 {
//   width: 60px;
//   height: 50px;
//   --m: no-repeat linear-gradient(90deg, #000 70%, #0000 0);
//   -webkit-mask: var(--m) calc(0 * 100% / 4) 100% / calc(100% / 5) calc(1 * 100% / 5), var(--m) calc(1 * 100% / 4) 100% / calc(100% / 5) calc(2 * 100% / 5), var(--m) calc(2 * 100% / 4) 100% / calc(100% / 5) calc(3 * 100% / 5),
//     var(--m) calc(3 * 100% / 4) 100% / calc(100% / 5) calc(4 * 100% / 5), var(--m) calc(4 * 100% / 4) 100% / calc(100% / 5) calc(5 * 100% / 5);
//   background: linear-gradient(#514b82 0 0) left/0% 100% no-repeat #ddd;
//   animation: progress14 2s infinite steps(6);
// }

// @keyframes progress14 {
//   100% {
//     background-size: 120% 100%;
//   }
// }

/* HTML: <div class="progress15"></div> */
// .progress15 {
//   width: 80px;
//   aspect-ratio: 1.154;
//   clip-path: polygon(50% 0, 100% 100%, 0 100%);
//   --c: no-repeat linear-gradient(#f03355 0 0);
//   background: var(--c), var(--c), var(--c), var(--c), var(--c);
//   background-size: 100% calc(100% / 5 + 1px);
//   animation: progress15 2s infinite;
// }

// @keyframes progress15 {
//   0% {
//     background-position: 0 calc(-2 * 100% / 4), 0 calc(-2 * 100% / 4), 0 calc(-2 * 100% / 4), 0 calc(-2 * 100% / 4), 0 calc(-2 * 100% / 4);
//   }

//   20% {
//     background-position: 0 calc(4 * 100% / 4), 0 calc(-2 * 100% / 4), 0 calc(-2 * 100% / 4), 0 calc(-2 * 100% / 4), 0 calc(-2 * 100% / 4);
//   }

//   40% {
//     background-position: 0 calc(4 * 100% / 4), 0 calc(3 * 100% / 4), 0 calc(-2 * 100% / 4), 0 calc(-2 * 100% / 4), 0 calc(-2 * 100% / 4);
//   }

//   60% {
//     background-position: 0 calc(4 * 100% / 4), 0 calc(3 * 100% / 4), 0 calc(2 * 100% / 4), 0 calc(-2 * 100% / 4), 0 calc(-2 * 100% / 4);
//   }

//   80% {
//     background-position: 0 calc(4 * 100% / 4), 0 calc(3 * 100% / 4), 0 calc(2 * 100% / 4), 0 calc(1 * 100% / 4), 0 calc(-2 * 100% / 4);
//   }

//   100% {
//     background-position: 0 calc(4 * 100% / 4), 0 calc(3 * 100% / 4), 0 calc(2 * 100% / 4), 0 calc(1 * 100% / 4), 0 calc(0 * 100% / 4);
//   }
// }

/* HTML: <div class="progress16"></div> */
// .progress16 {
//   height: 4px;
//   width: 130px;
//   --c: no-repeat linear-gradient(#6100ee 0 0);
//   background: var(--c), var(--c), #d7b8fc;
//   background-size: 60% 100%;
//   animation: progress16 3s infinite;
// }

// @keyframes progress16 {
//   0% {
//     background-position: -150% 0, -150% 0;
//   }

//   66% {
//     background-position: 250% 0, -150% 0;
//   }

//   100% {
//     background-position: 250% 0, 250% 0;
//   }
// }

/* HTML: <div class="progress17"></div> */
// .progress17 {
//   width: 120px;
//   height: 20px;
//   -webkit-mask: radial-gradient(circle closest-side, #000 94%, #0000) left/20% 100%;
//   background: linear-gradient(#000 0 0) left/0% 100% no-repeat #ddd;
//   animation: progress17 2s infinite steps(6);
// }

// @keyframes progress17 {
//   100% {
//     background-size: 120% 100%;
//   }
// }

/* HTML: <div class="progress18"></div> */
// .progress18 {
//   width: 60px;
//   aspect-ratio: 1;
//   border: 15px solid #ddd;
//   border-radius: 50%;
//   position: relative;
//   transform: rotate(45deg);
// }

// .progress18::before {
//   content: "";
//   position: absolute;
//   inset: -15px;
//   border-radius: 50%;
//   border: 15px solid #514b82;
//   animation: progress18 2s infinite linear;
// }

// @keyframes progress18 {
//   0% {
//     clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
//   }

//   25% {
//     clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
//   }

//   50% {
//     clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
//   }

//   75% {
//     clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
//   }

//   100% {
//     clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
//   }
// }

/* HTML: <div class="progress19"></div> */
// .progress19 {
//   width: 60px;
//   aspect-ratio: 1;
//   background: linear-gradient(#dc1818 0 0) bottom/100% 0% no-repeat #ccc;
//   -webkit-mask: radial-gradient(circle at 60% 65%, #000 62%, #0000 65%) top left, radial-gradient(circle at 40% 65%, #000 62%, #0000 65%) top right, linear-gradient(to bottom left, #000 42%, #0000 43%) bottom left,
//     linear-gradient(to bottom right, #000 42%, #0000 43%) bottom right;
//   -webkit-mask-size: 50% 50%;
//   -webkit-mask-repeat: no-repeat;
//   animation: progress19 2s infinite linear;
// }

// @keyframes progress19 {
//   90%,
//   100% {
//     background-size: 100% 100%;
//   }
// }

/* HTML: <div class="progress20"></div> */
// .progress20 {
//   --s: 40px;
//   height: calc(var(--s) * 0.9);
//   width: calc(var(--s) * 5);
//   --v1: transparent, #000 0.5deg 108deg, #0000 109deg;
//   --v2: transparent, #000 0.5deg 36deg, #0000 37deg;
//   -webkit-mask: conic-gradient(from 54deg at calc(var(--s) * 0.68) calc(var(--s) * 0.57), var(--v1)), conic-gradient(from 90deg at calc(var(--s) * 0.02) calc(var(--s) * 0.35), var(--v2)),
//     conic-gradient(from 126deg at calc(var(--s) * 0.5) calc(var(--s) * 0.7), var(--v1)), conic-gradient(from 162deg at calc(var(--s) * 0.5) 0, var(--v2));
//   -webkit-mask-size: var(--s) var(--s);
//   -webkit-mask-composite: xor, destination-over;
//   mask-composite: exclude, add;
//   -webkit-mask-repeat: repeat-x;
//   background: linear-gradient(#ffb940 0 0) left/0% 100% #ddd no-repeat;
//   animation: progress20 2s infinite linear;
// }

// @keyframes progress20 {
//   90%,
//   100% {
//     background-size: 100% 100%;
//   }
// }

/* HTML: <div class="shapes01"></div> */
// .shapes01 {
//   width: 40px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: #f03355;
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
//   animation: shapes01 2s infinite cubic-bezier(0.3, 1, 0, 1);
// }

// @keyframes shapes01 {
//   33% {
//     border-radius: 0;
//     background: #514b82;
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
//   }

//   66% {
//     border-radius: 0;
//     background: #ffa516;
//     clip-path: polygon(50% 0, 50% 0, 100% 100%, 0 100%);
//   }
// }

/* HTML: <div class="shapes02"></div> */
// .shapes02 {
//   width: 40px;
//   aspect-ratio: 1;
//   background: #25b09b;
//   clip-path: polygon(0 0, 100% 0, 100% 100%);
//   animation: shapes02 2s infinite cubic-bezier(0.3, 1, 0, 1);
// }

// @keyframes shapes02 {
//   25% {
//     clip-path: polygon(0 0, 100% 0, 0 100%);
//   }

//   50% {
//     clip-path: polygon(0 0, 100% 100%, 0 100%);
//   }

//   75% {
//     clip-path: polygon(100% 0, 100% 100%, 0 100%);
//   }

//   100% {
//     clip-path: polygon(100% 0, 100% 100%, 0 0);
//   }
// }

/* HTML: <div class="shapes03"></div> */
// .shapes03 {
//   width: 50px;
//   height: 50px;
//   display: flex;
//   transform: rotate(45deg);
//   animation: shapes03-0 1.5s infinite linear;
// }

// .shapes03:before,
// .shapes03:after {
//   content: "";
//   width: 50%;
//   background: #514b82;
//   clip-path: polygon(0 50%, 100% 0, 100% 100%);
//   animation: inherit;
//   animation-name: shapes03-1;
// }

// .shapes03:after {
//   clip-path: polygon(0 0, 100% 50%, 0% 100%);
//   animation-name: shapes03-2;
// }

// @keyframes shapes03-0 {
//   25% {
//     width: 50px;
//     height: 50px;
//     transform: rotate(0);
//   }

//   50% {
//     width: 50px;
//     height: 50px;
//   }

//   75% {
//     width: 70.7px;
//     height: 35.35px;
//   }

//   100% {
//     width: 70.7px;
//     height: 35.35px;
//     transform: rotate(0);
//   }
// }

// @keyframes shapes03-1 {
//   0%,
//   25% {
//     clip-path: polygon(0 50%, 100% 0, 100% 100%);
//     transform: translate(0.3px);
//   }

//   50% {
//     clip-path: polygon(0 50%, 100% 0, 100% 100%);
//     transform: translate(-5px);
//   }

//   75% {
//     clip-path: polygon(0 100%, 0 0, 100% 100%);
//     transform: translate(-5px);
//   }

//   100% {
//     clip-path: polygon(0 100%, 0 0, 100% 100%);
//     transform: translate(17.7px);
//   }
// }

// @keyframes shapes03-2 {
//   0%,
//   25% {
//     clip-path: polygon(0 0, 100% 50%, 0 100%);
//     transform: translate(-0.3px);
//   }

//   50% {
//     clip-path: polygon(0 0, 100% 50%, 0 100%);
//     transform: translate(5px);
//   }

//   75% {
//     clip-path: polygon(0 0, 100% 0, 100% 100%);
//     transform: translate(5px);
//   }

//   100% {
//     clip-path: polygon(0 0, 100% 0, 100% 100%);
//     transform: translate(-17.7px);
//   }
// }

/* HTML: <div class="shapes04"></div> */
// .shapes04 {
//   width: 40px;
//   height: 40px;
//   color: #f03355;
//   background: conic-gradient(from -45deg at top 20px left 50%, #0000, currentColor 1deg 90deg, #0000 91deg), conic-gradient(from 45deg at right 20px top 50%, #0000, currentColor 1deg 90deg, #0000 91deg),
//     conic-gradient(from 135deg at bottom 20px left 50%, #0000, currentColor 1deg 90deg, #0000 91deg), conic-gradient(from -135deg at left 20px top 50%, #0000, currentColor 1deg 90deg, #0000 91deg);
//   animation: shapes04 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
// }

// @keyframes shapes04 {
//   50% {
//     width: 60px;
//     height: 60px;
//     transform: rotate(180deg);
//   }

//   100% {
//     transform: rotate(360deg);
//   }
// }

/* HTML: <div class="shapes05"></div> */
// .shapes05 {
//   width: 40px;
//   height: 40px;
//   --c: no-repeat linear-gradient(orange 0 0);
//   background: var(--c), var(--c), var(--c), var(--c);
//   background-size: 21px 21px;
//   animation: shapes05 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
// }

// @keyframes shapes05 {
//   0% {
//     background-position: 0 0, 100% 0, 100% 100%, 0 100%;
//   }

//   33% {
//     background-position: 0 0, 100% 0, 100% 100%, 0 100%;
//     width: 60px;
//     height: 60px;
//   }

//   66% {
//     background-position: 100% 0, 100% 100%, 0 100%, 0 0;
//     width: 60px;
//     height: 60px;
//   }

//   100% {
//     background-position: 100% 0, 100% 100%, 0 100%, 0 0;
//   }
// }

/* HTML: <div class="shapes06"></div> */
// .shapes06 {
//   width: 40px;
//   height: 40px;
//   display: grid;
//   animation: shapes06-0 1.5s infinite linear;
// }

// .shapes06:before,
// .shapes06:after {
//   content: "";
//   grid-area: 1/1;
//   background: #514b82;
//   animation: shapes06-1 1.5s infinite linear, shapes06-2 1.5s infinite linear;
// }

// .shapes06:after {
//   --s: -1;
//   animation-direction: reverse;
// }

// @keyframes shapes06-0 {
//   0%,
//   9%,
//   91%,
//   100% {
//     background: #514b82;
//   }

//   10%,
//   90% {
//     background: #0000;
//   }
// }

// @keyframes shapes06-1 {
//   0%,
//   33% {
//     clip-path: polygon(0 0, 50% 100%, 100% 0, 100% 100%, 0 100%);
//   }

//   66%,
//   100% {
//     clip-path: polygon(50% 0, 50% 100%, 50% 0, 100% 100%, 0 100%);
//   }
// }

// @keyframes shapes06-2 {
//   0%,
//   10%,
//   90%,
//   100% {
//     transform: scale(var(--s, 1)) translateY(0);
//   }

//   33%,
//   66% {
//     transform: scale(var(--s, 1)) translateY(50%);
//   }
// }

/* HTML: <div class="shapes07"></div> */
// .shapes07 {
//   width: 40px;
//   aspect-ratio: 1;
//   color: #f03355;
//   position: relative;
//   background: conic-gradient(from 134deg at top, currentColor 92deg, #0000 0) top, conic-gradient(from -46deg at bottom, currentColor 92deg, #0000 0) bottom;
//   background-size: 100% 50%;
//   background-repeat: no-repeat;
// }

// .shapes07:before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   --g: currentColor 14.5px, #0000 0 calc(100% - 14.5px), currentColor 0;
//   background: linear-gradient(45deg, var(--g)), linear-gradient(-45deg, var(--g));
//   animation: shapes07 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
// }

// @keyframes shapes07 {
//   33% {
//     inset: -10px;
//     transform: rotate(0deg);
//   }

//   66% {
//     inset: -10px;
//     transform: rotate(90deg);
//   }

//   100% {
//     inset: 0;
//     transform: rotate(90deg);
//   }
// }

/* HTML: <div class="shapes08"></div> */
// .shapes08 {
//   width: 40px;
//   aspect-ratio: 1;
//   display: grid;
//   animation: shapes08-0 1.5s infinite linear;
// }

// .shapes08:before,
// .shapes08:after {
//   content: "";
//   grid-area: 1/1;
//   background: #25b09b;
//   clip-path: polygon(0 0%, 100% 0, 100% 100%);
//   animation: inherit;
//   animation-name: shapes08-1;
// }

// .shapes08:after {
//   --s: -1;
// }

// @keyframes shapes08-0 {
//   66% {
//     transform: skewX(0deg);
//   }

//   80%,
//   100% {
//     transform: skewX(-45deg);
//   }
// }

// @keyframes shapes08-1 {
//   0% {
//     transform: scale(var(--s, 1)) translate(-0.5px, 0);
//   }

//   33% {
//     transform: scale(var(--s, 1)) translate(calc(1px - 50%), calc(1px - 50%));
//   }

//   66% {
//     transform: scale(var(--s, 1)) translate(calc(1px - 50%), 0%);
//   }

//   100% {
//     transform: scale(var(--s, 1)) translate(calc(0.5px - 50%), 0%);
//   }
// }

/* HTML: <div class="shapes09"></div> */
// .shapes09 {
//   width: 40px;
//   height: 20px;
//   background: orange;
//   position: relative;
//   animation: shapes09-0 1.5s infinite linear;
// }

// .shapes09:before,
// .shapes09:after {
//   content: "";
//   position: absolute;
//   background: inherit;
//   bottom: 100%;
//   width: 50%;
//   height: 100%;
//   animation: inherit;
//   animation-name: shapes09-1;
// }

// .shapes09:before {
//   left: 0;
//   transform-origin: bottom left;
//   --s: -1;
// }

// .shapes09:after {
//   right: 0;
//   transform-origin: bottom right;
// }

// @keyframes shapes09-0 {
//   0%,
//   10% {
//     transform: translateY(0%) scaleY(1);
//   }

//   49.99% {
//     transform: translateY(-50%) scaleY(1);
//   }

//   50% {
//     transform: translateY(-50%) scaleY(-1);
//   }

//   90%,
//   100% {
//     transform: translateY(-100%) scaleY(-1);
//   }
// }

// @keyframes shapes09-1 {
//   10%,
//   90% {
//     transform: rotate(0deg);
//   }

//   50% {
//     transform: rotate(calc(var(--s, 1) * 180deg));
//   }
// }

/* HTML: <div class="shapes10"></div> */
// .shapes10 {
//   display: flex;
//   width: 50px;
//   aspect-ratio: 1;
//   animation: shapes10-0 1.5s infinite linear;
// }

// .shapes10:before,
// .shapes10:after {
//   content: "";
//   width: 50%;
//   background: #514b82;
//   clip-path: polygon(0 0, 100% 50%, 0% 100%);
//   animation: inherit;
//   animation-name: shapes10-1;
//   transform-origin: bottom left;
// }

// .shapes10:before {
//   clip-path: polygon(0 50%, 100% 0, 100% 100%);
//   transform-origin: bottom right;
//   --s: -1;
// }

// @keyframes shapes10-0 {
//   0%,
//   34.99% {
//     transform: scaley(1);
//   }

//   35%,
//   70% {
//     transform: scaley(-1);
//   }

//   90%,
//   100% {
//     transform: scaley(-1) rotate(180deg);
//   }
// }

// @keyframes shapes10-1 {
//   0%,
//   10%,
//   70%,
//   100% {
//     transform: translateY(-100%) rotate(calc(var(--s, 1) * 135deg));
//   }

//   35% {
//     transform: translateY(0%) rotate(0deg);
//   }
// }

/* HTML: <div class="shapes11"></div> */
// .shapes11 {
//   width: 40px;
//   aspect-ratio: 1;
//   display: grid;
// }

// .shapes11::before,
// .shapes11::after {
//   content: "";
//   grid-area: 1/1;
//   background: #25b09b;
//   clip-path: polygon(0 0, 50% 50%, 0 100%);
//   animation: shapes11 2s infinite;
// }

// .shapes11::after {
//   animation-delay: -1.5s;
//   --s: 90deg;
// }

// @keyframes shapes11 {
//   0%,
//   12.5% {
//     transform: rotate(var(--s, 0deg)) rotate(0deg);
//   }

//   37.5%,
//   62.5% {
//     transform: rotate(var(--s, 0deg)) rotate(-180deg);
//   }

//   87.5%,
//   100% {
//     transform: rotate(var(--s, 0deg)) rotate(-360deg);
//   }
// }

/* HTML: <div class="shapes12"></div> */
// .shapes12 {
//   width: 40px;
//   aspect-ratio: 1;
//   color: #514b82;
//   background: repeating-conic-gradient(from -47deg, #0000 0deg, currentColor 1deg 91deg, #0000 94deg 180deg);
//   display: flex;
//   animation: shapes12-0 2s infinite linear;
// }

// .shapes12::before,
// .shapes12::after {
//   content: "";
//   flex: 1;
//   background: currentColor;
//   clip-path: polygon(0 0, 100% 50%, 0 100%);
//   animation: shapes12 1s infinite alternate;
//   transform-origin: bottom left;
// }

// .shapes12::after {
//   clip-path: polygon(100% 0, 100% 100%, 0 50%);
//   transform-origin: top right;
// }

// @keyframes shapes12-0 {
//   0%,
//   49.9% {
//     transform: scaleX(1);
//   }

//   50%,
//   100% {
//     transform: scaleX(-1);
//   }
// }

// @keyframes shapes12 {
//   0%,
//   20% {
//     transform: rotate(0deg);
//   }

//   80%,
//   100% {
//     transform: rotate(-270deg);
//   }
// }

/* HTML: <div class="shapes13"></div> */
// .shapes13 {
//   width: 40px;
//   aspect-ratio: 1;
//   display: grid;
// }

// .shapes13::before,
// .shapes13::after {
//   content: "";
//   grid-area: 1/1;
//   background: orange;
//   clip-path: polygon(0 0, 101% 0, 0 100%);
//   animation: shapes13 2s infinite;
// }

// .shapes13::after {
//   --s: -1, -1;
// }

// @keyframes shapes13 {
//   0%,
//   10% {
//     transform: scale(var(--s, 1)) translate(0, 0) rotate(0deg);
//   }

//   33% {
//     transform: scale(var(--s, 1)) translate(20px, -20px) rotate(0deg);
//   }

//   66% {
//     transform: scale(var(--s, 1)) translate(20px, -20px) rotate(180deg);
//   }

//   90%,
//   100% {
//     transform: scale(var(--s, 1)) translate(0px, 0px) rotate(180deg);
//   }
// }

/* HTML: <div class="shapes14"></div> */
// .shapes14 {
//   width: 40px;
//   aspect-ratio: 1;
//   color: #f03355;
//   background: conic-gradient(currentColor 0 270deg, #0000 0);
//   border-radius: 50%;
//   animation: shapes14-0 4s infinite linear;
// }

// .shapes14::before {
//   content: "";
//   display: block;
//   height: 50%;
//   width: 50%;
//   border-top-left-radius: 100px;
//   background: currentColor;
//   animation: shapes14 0.5s infinite alternate;
// }

// @keyframes shapes14-0 {
//   0%,
//   24.99% {
//     transform: rotate(0deg);
//   }

//   25%,
//   49.99% {
//     transform: rotate(90deg);
//   }

//   50%,
//   74.99% {
//     transform: rotate(180deg);
//   }

//   75%,
//   100% {
//     transform: rotate(270deg);
//   }
// }

// @keyframes shapes14 {
//   100% {
//     transform: translate(-10px, -10px);
//   }
// }

/* HTML: <div class="shapes15"></div> */
// .shapes15 {
//   width: 40px;
//   aspect-ratio: 1;
//   display: flex;
//   transform-origin: 50% 125%;
//   animation: shapes15-0 1.5s infinite linear;
// }

// .shapes15:before,
// .shapes15:after {
//   content: "";
//   flex: 1;
//   background: orange;
//   animation: inherit;
//   transform-origin: bottom left;
//   animation-name: shapes15-1;
// }

// .shapes15:before {
//   transform-origin: bottom right;
//   --s: -1;
// }

// @keyframes shapes15-0 {
//   0%,
//   10% {
//     transform: translateY(0) scaleY(1);
//   }

//   49.99% {
//     transform: translateY(-75%) scaleY(1);
//   }

//   50% {
//     transform: translateY(-75%) scaleY(-1);
//   }

//   90%,
//   100% {
//     transform: translateY(-150%) scaleY(-1);
//   }
// }

// @keyframes shapes15-1 {
//   10%,
//   90% {
//     transform: rotate(0deg);
//   }

//   50% {
//     transform: rotate(calc(var(--s, 1) * 90deg));
//   }
// }

/* HTML: <div class="shapes16"></div> */
.shapes16 {
  width: 40px;
  height: 40px;
  position: relative;
  --c: no-repeat linear-gradient(#25b09b 0 0);
  background: var(--c) center/100% 10px, var(--c) center/10px 100%;
}

.shapes16:before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--c) 0 0, var(--c) 100% 0, var(--c) 0 100%, var(--c) 100% 100%;
  background-size: 15.5px 15.5px;
  animation: shapes16 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
}

@keyframes shapes16 {
  33% {
    inset: -10px;
    transform: rotate(0deg);
  }

  66% {
    inset: -10px;
    transform: rotate(90deg);
  }

  100% {
    inset: 0;
    transform: rotate(90deg);
  }
}

/* HTML: <div class="shapes17"></div> */
// .shapes17 {
//   width: 40px;
//   height: 60px;
//   position: relative;
// }

// .shapes17::before,
// .shapes17::after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background: #514b82;
//   clip-path: polygon(0 0, 100% 0, 100% 67%, 50% 67%, 50% 34%, 0 34%);
//   animation: shapes17 2s infinite;
// }

// .shapes17::after {
//   --s: -1, -1;
// }

// @keyframes shapes17 {
//   0%,
//   10% {
//     transform: scale(var(--s, 1)) translate(0, 0) rotate(0deg);
//   }

//   33% {
//     transform: scale(var(--s, 1)) translate(0, -20px) rotate(0deg);
//   }

//   66% {
//     transform: scale(var(--s, 1)) translate(10px, -20px) rotate(-90deg);
//   }

//   90%,
//   100% {
//     transform: scale(var(--s, 1)) translate(10px, -10px) rotate(-90deg);
//   }
// }

/* HTML: <div class="shapes18"></div> */
// .shapes18 {
//   width: 40px;
//   aspect-ratio: 1;
//   color: #f03355;
//   position: relative;
//   background: radial-gradient(10px, currentColor 94%, #0000);
// }

// .shapes18:before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   border-radius: 50%;
//   background: radial-gradient(9px at bottom right, #0000 94%, currentColor) top left, radial-gradient(9px at bottom left, #0000 94%, currentColor) top right, radial-gradient(9px at top right, #0000 94%, currentColor) bottom left,
//     radial-gradient(9px at top left, #0000 94%, currentColor) bottom right;
//   background-size: 20px 20px;
//   background-repeat: no-repeat;
//   animation: shapes18 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
// }

// @keyframes shapes18 {
//   33% {
//     inset: -10px;
//     transform: rotate(0deg);
//   }

//   66% {
//     inset: -10px;
//     transform: rotate(90deg);
//   }

//   100% {
//     inset: 0;
//     transform: rotate(90deg);
//   }
// }

/* HTML: <div class="shapes19"></div> */
// .shapes19 {
//   width: 40px;
//   height: 20px;
//   background: orange;
//   position: relative;
//   animation: shapes19-0 1.5s infinite linear;
// }

// .shapes19:before,
// .shapes19:after {
//   content: "";
//   position: absolute;
//   background: inherit;
//   bottom: 100%;
//   width: 50%;
//   height: 100%;
//   animation: inherit;
//   animation-name: shapes19-1;
// }

// .shapes19:before {
//   left: 0;
//   --s: -1, 1;
// }

// .shapes19:after {
//   right: 0;
// }

// @keyframes shapes19-0 {
//   0%,
//   30% {
//     transform: translateY(0) scaleY(1);
//   }

//   49.99% {
//     transform: translateY(-50%) scaleY(1);
//   }

//   50% {
//     transform: translateY(-50%) scaleY(-1);
//   }

//   70%,
//   100% {
//     transform: translateY(-100%) scaleY(-1);
//   }
// }

// @keyframes shapes19-1 {
//   0%,
//   10%,
//   90%,
//   100% {
//     transform: scale(var(--s, 1)) translate(0);
//   }

//   30%,
//   70% {
//     transform: scale(var(--s, 1)) translate(20px);
//   }

//   50% {
//     transform: scale(var(--s, 1)) translate(20px, 20px);
//   }
// }

/* HTML: <div class="shapes20"></div> */
// .shapes20 {
//   width: 40px;
//   aspect-ratio: 1;
//   display: flex;
//   transform-origin: 0% 150%;
//   animation: shapes20-0 2s infinite linear;
// }

// .shapes20:before,
// .shapes20:after {
//   content: "";
//   flex: 1;
//   background: #f03355;
//   animation: shapes20-1 1s infinite linear alternate;
//   border-radius: 100px 0 0 100px;
//   transform-origin: 100% 100%;
// }

// .shapes20:after {
//   border-radius: 0 100px 100px 0;
//   transform-origin: 0% 100%;
//   --s: -1;
// }

// @keyframes shapes20-0 {
//   0%,
//   10% {
//     transform: translateY(0) scaleY(1);
//   }

//   49.99% {
//     transform: translateY(-100%) scaleY(1);
//   }

//   50% {
//     transform: translateY(-100%) scaleY(-1);
//   }

//   90%,
//   100% {
//     transform: translateY(-200%) scaleY(-1);
//   }
// }

// @keyframes shapes20-1 {
//   0%,
//   20% {
//     transform: rotate(0deg) translate(0, 0) rotate(0deg);
//   }

//   50% {
//     transform: rotate(calc(var(--s, 1) * -90deg)) translate(0, 0) rotate(0deg);
//   }

//   100% {
//     transform: rotate(calc(var(--s, 1) * -90deg)) translate(0, -20px) rotate(calc(var(--s, 1) * -90deg));
//   }
// }

/* HTML: <div class="shapes21"></div> */
// .shapes21 {
//   width: 40px;
//   aspect-ratio: 1;
//   display: flex;
// }

// .shapes21:before,
// .shapes21:after {
//   content: "";
//   flex: 1;
//   background: #f03355;
//   animation: shapes21 2s infinite;
//   border-radius: 100px 0 0 100px;
//   transform-origin: top right;
//   transform: translateY(calc(var(--s, 1) * 0%)) rotate(0);
// }

// .shapes21:after {
//   transform-origin: bottom left;
//   border-radius: 0 100px 100px 0;
//   --s: -1;
// }

// @keyframes shapes21 {
//   33% {
//     transform: translate(0, calc(var(--s, 1) * 50%)) rotate(0);
//   }

//   66% {
//     transform: translate(0, calc(var(--s, 1) * 50%)) rotate(-90deg);
//   }

//   90%,
//   100% {
//     transform: translate(calc(var(--s, 1) * -100%), calc(var(--s, 1) * 50%)) rotate(-90deg);
//   }
// }

/* HTML: <div class="shapes22"></div> */
// .shapes22 {
//   width: 36px;
//   aspect-ratio: 1;
//   color: #514b82;
//   background: conic-gradient(from 134deg at top, currentColor 92deg, #0000 0);
//   position: relative;
//   animation: shapes22-0 2s infinite linear;
// }

// .shapes22:before,
// .shapes22:after {
//   content: "";
//   position: absolute;
//   width: 50%;
//   height: 50%;
//   background: currentColor;
//   transform-origin: top right;
//   clip-path: polygon(100% 0, 100% 100%, 0 100%);
//   inset: auto 100% 0 auto;
//   animation: shapes22-1 1s infinite linear alternate;
// }

// .shapes22:after {
//   inset: auto auto 0 100%;
//   transform-origin: top left;
//   --s: -1;
//   clip-path: polygon(0 0, 100% 100%, 0 100%);
// }

// @keyframes shapes22-0 {
//   0%,
//   49.99% {
//     transform: scaleY(1);
//   }

//   50%,
//   90% {
//     transform: scaleY(-1);
//   }

//   100% {
//     transform: scaleY(-1) rotate(180deg);
//   }
// }

// @keyframes shapes22-1 {
//   0%,
//   30% {
//     transform: rotate(calc(var(--s, 1) * 0));
//   }

//   70%,
//   100% {
//     transform: rotate(calc(var(--s, 1) * 180deg));
//   }
// }

/* HTML: <div class="shapes23"></div> */
// .shapes23 {
//   width: 36px;
//   aspect-ratio: 1;
//   color: #25b09b;
//   background: linear-gradient(45deg, #0000 24%, currentColor 0 76%, #0000 0);
//   position: relative;
//   animation: shapes23-0 1.5s infinite;
// }

// .shapes23:before,
// .shapes23:after {
//   content: "";
//   position: absolute;
//   width: 50%;
//   height: 50%;
//   background: currentColor;
//   transform-origin: top left;
//   clip-path: polygon(-2px 0, 0 -1px, 100% 100%, -2px 100%);
//   inset: auto auto 0 0;
//   animation: shapes23-1 1.5s infinite;
// }

// .shapes23:after {
//   inset: 0 0 auto auto;
//   transform-origin: bottom right;
//   clip-path: polygon(0 0, calc(100% + 2px) 0, calc(100% + 2px) 100%, 100% calc(100% + 1px));
// }

// @keyframes shapes23-0 {
//   0%,
//   50% {
//     transform: skewX(0);
//   }

//   90%,
//   100% {
//     transform: skewX(-45deg);
//   }
// }

// @keyframes shapes23-1 {
//   40%,
//   100% {
//     transform: rotate(180deg);
//     box-shadow: 0 0 0 3px;
//   }
// }

/* HTML: <div class="shapes24"></div> */
// .shapes24 {
//   width: 40px;
//   aspect-ratio: 1;
//   display: grid;
// }

// .shapes24:before,
// .shapes24:after {
//   content: "";
//   background: orange;
//   transform-origin: left;
//   animation: shapes24 2s infinite;
// }

// .shapes24:before {
//   transform-origin: right;
//   --s: -1;
// }

// @keyframes shapes24 {
//   0%,
//   10% {
//     transform: translate(0, 0) scale(1);
//   }

//   33% {
//     transform: translate(calc(var(--s, 1) * 50%), 0) scale(1);
//   }

//   66% {
//     transform: translate(calc(var(--s, 1) * 50%), calc(var(--s, 1) * -50%)) scale(1);
//   }

//   90%,
//   100% {
//     transform: translate(calc(var(--s, 1) * 50%), calc(var(--s, 1) * -50%)) scale(0.5, 2);
//   }
// }

/* HTML: <div class="shapes25"></div> */
// .shapes25 {
//   width: 40px;
//   aspect-ratio: 1;
//   position: relative;
// }

// .shapes25:before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   border-radius: 50%;
//   --c: #0000, #f03355 1deg 120deg, #0000 121deg;
//   background: conic-gradient(from 0deg, var(--c)) top right, conic-gradient(from 120deg, var(--c)) bottom, conic-gradient(from 240deg, var(--c)) top left;
//   background-size: 40px 40px;
//   background-repeat: no-repeat;
//   animation: shapes25 2s infinite cubic-bezier(0.3, 1, 0, 1);
// }

// @keyframes shapes25 {
//   33% {
//     inset: -8px;
//     transform: rotate(0deg);
//   }

//   66% {
//     inset: -8px;
//     transform: rotate(180deg);
//   }

//   100% {
//     inset: 0;
//     transform: rotate(180deg);
//   }
// }

/* HTML: <div class="shapes26"></div> */
// .shapes26 {
//   width: 60px;
//   aspect-ratio: 1;
//   color: #514b82;
//   position: relative;
// }

// .shapes26::before,
// .shapes26::after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(currentColor 0 0) 0 calc(var(--s, 0) * -100%) / 100% calc(100% / 3), repeating-linear-gradient(90deg, currentColor 0 25%, #0000 0 50%) calc(var(--s, 0) * 100%) 50% / calc(4 * 100% / 3) calc(100% / 3);
//   background-repeat: no-repeat;
//   animation: shapes26 2s infinite;
// }

// .shapes26::after {
//   --s: -1;
// }

// @keyframes shapes26 {
//   0%,
//   10% {
//     transform: translateY(calc(var(--s, 1) * 0));
//     background-position: 0 calc(var(--s, 0) * -100%), calc(var(--s, 0) * 100%) 50%;
//   }

//   33% {
//     transform: translateY(calc(var(--s, 1) * -20%));
//     background-position: 0 calc(var(--s, 0) * -100%), calc(var(--s, 0) * 100%) 50%;
//   }

//   66% {
//     transform: translateY(calc(var(--s, 1) * -20%));
//     background-position: 0 calc(var(--s, 0) * -100%), calc(var(--s, 0) * 100% + 100%) 50%;
//   }

//   90%,
//   100% {
//     transform: translateY(calc(var(--s, 1) * 0));
//     background-position: 0 calc(var(--s, 0) * -100%), calc(var(--s, 0) * 100% + 100%) 50%;
//   }
// }

/* HTML: <div class="shapes27"></div> */
// .shapes27 {
//   width: 50px;
//   aspect-ratio: 1.154;
//   position: relative;
//   background: conic-gradient(from 120deg at 50% 64%, #0000, #25b09b 1deg 120deg, #0000 121deg);
//   animation: shapes27-0 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
// }

// .shapes27:before,
// .shapes27:after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background: inherit;
//   transform-origin: 50% 66%;
//   animation: shapes27-1 1.5s infinite;
// }

// .shapes27:after {
//   --s: -1;
// }

// @keyframes shapes27-0 {
//   0%,
//   30% {
//     transform: rotate(0);
//   }

//   70% {
//     transform: rotate(120deg);
//   }

//   70.01%,
//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes shapes27-1 {
//   0% {
//     transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
//   }

//   30%,
//   70% {
//     transform: rotate(calc(var(--s, 1) * 120deg)) translate(calc(var(--s, 1) * -5px), 10px);
//   }

//   100% {
//     transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
//   }
// }

/* HTML: <div class="shapes28"></div> */
// .shapes28 {
//   width: 20px;
//   aspect-ratio: 1;
//   background: #514b82;
//   position: relative;
//   transform-origin: top right;
//   animation: shapes28-0 2s infinite linear;
// }

// .shapes28:before,
// .shapes28:after {
//   content: "";
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: inherit;
//   transform-origin: bottom right;
//   clip-path: polygon(0 0, 100% 100%, 0 100%);
//   inset: auto auto 100% 0;
//   animation: shapes28-1 1s infinite linear alternate;
// }

// .shapes28:after {
//   inset: auto auto 0 100%;
//   transform-origin: top left;
//   --s: -1;
// }

// @keyframes shapes28-0 {
//   0%,
//   49.99% {
//     transform: scale(1);
//   }

//   50%,
//   90% {
//     transform: scale(-1);
//   }

//   100% {
//     transform: scale(-1) rotate(180deg);
//   }
// }

// @keyframes shapes28-1 {
//   0%,
//   30% {
//     transform: rotate(calc(var(--s, 1) * 0));
//   }

//   70%,
//   100% {
//     transform: rotate(calc(var(--s, 1) * 90deg));
//   }
// }

/* HTML: <div class="shapes29"></div> */
// .shapes29 {
//   width: 60px;
//   aspect-ratio: 1;
//   --c: no-repeat linear-gradient(orange 0 0);
//   background: var(--c) left 20px top 0, var(--c) top 20px right 0, var(--c) right 20px bottom 0, var(--c) bottom 20px left 0;
//   background-size: calc(100% / 3) calc(100% / 3);
//   animation: shapes29-1 0.75s infinite alternate linear, shapes29-2 1.5s infinite;
// }

// @keyframes shapes29-1 {
//   90%,
//   100% {
//     background-size: calc(2 * 100% / 3) calc(100% / 3), calc(100% / 3) calc(2 * 100% / 3);
//   }
// }

// @keyframes shapes29-2 {
//   0%,
//   49.99% {
//     transform: scaleX(1);
//   }

//   50%,
//   100% {
//     transform: scaleX(-1);
//   }
// }

/* HTML: <div class="shapes30"></div> */
// .shapes30 {
//   width: 40px;
//   aspect-ratio: 1;
//   display: grid;
//   animation: shapes30-0 1.5s infinite linear;
// }

// .shapes30:before,
// .shapes30:after {
//   content: "";
//   grid-area: 1/1;
//   background: #25b09b;
//   animation: inherit;
//   animation-name: shapes30-1;
// }

// .shapes30:after {
//   transform-origin: bottom right;
//   --s: 1;
// }

// @keyframes shapes30-0 {
//   0%,
//   66% {
//     transform: scaleY(1);
//   }

//   66.01%,
//   100% {
//     transform: scaleY(-1);
//   }
// }

// @keyframes shapes30-1 {
//   0%,
//   10% {
//     transform: scaleX(calc(var(--s, -1) * -1)) rotate(calc(var(--s, 0) * 90deg));
//     clip-path: polygon(0 0, 0 100%, 100% 100%);
//   }

//   33% {
//     transform: scaleX(calc(var(--s, -1) * -1)) rotate(calc(var(--s, 0) * 0deg));
//     clip-path: polygon(0 0, 0 100%, 100% 100%);
//   }

//   66% {
//     transform: scaleX(calc(var(--s, -1) * -1)) rotate(calc(var(--s, 0) * 0deg));
//     clip-path: polygon(0 0, 0 100%, 100% 0);
//   }

//   66.01% {
//     transform: scaleX(calc(var(--s, -1) * -1)) rotate(calc(var(--s, 0) * 0deg));
//     clip-path: polygon(0 0, 0 100%, 100% 100%);
//   }

//   90%,
//   100% {
//     transform: scaleX(calc(var(--s, -1) * -1)) rotate(calc(var(--s, 0) * 90deg));
//     clip-path: polygon(0 0, 0 100%, 100% 100%);
//   }
// }

/* HTML: <div class="shapes31"></div> */
// .shapes31 {
//   --c: no-repeat linear-gradient(orange 0 0);
//   background: var(--c) 0 0, var(--c) 0 50%, var(--c) 0 100%, var(--c) 50% 0, var(--c) 50% 50%, var(--c) 50% 100%, var(--c) 100% 0, var(--c) 100% 50%, var(--c) 100% 100%;
//   background-size: 16px 16px;
//   animation: shapes31 0.5s infinite alternate;
// }

// @keyframes shapes31 {
//   0%,
//   20% {
//     width: 45px;
//     height: 45px;
//   }

//   90%,
//   100% {
//     width: 65px;
//     height: 65px;
//   }
// }

/* HTML: <div class="shapes32"></div> */
// .shapes32 {
//   --c: no-repeat linear-gradient(orange 0 0);
//   background: var(--c), var(--c), var(--c), var(--c), var(--c), var(--c), var(--c), var(--c), var(--c);
//   background-size: 16px 16px;
//   animation: shapes32-1 1s infinite, shapes32-2 1s infinite;
// }

// @keyframes shapes32-1 {
//   0%,
//   100% {
//     width: 45px;
//     height: 45px;
//   }

//   35%,
//   65% {
//     width: 65px;
//     height: 65px;
//   }
// }

// @keyframes shapes32-2 {
//   0%,
//   40% {
//     background-position: 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 50% 50%;
//   }

//   60%,
//   100% {
//     background-position: 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 0 0, 50% 50%;
//   }
// }

/* HTML: <div class="shapes33"></div> */
// .shapes33 {
//   height: 45px;
//   --c: no-repeat linear-gradient(#514b82 0 0);
//   background: var(--c) left, var(--c) center, var(--c) right;
//   background-size: 16px 100%;
//   animation: shapes33-1 1.5s infinite, shapes33-2 1.5s infinite;
// }

// @keyframes shapes33-1 {
//   0%,
//   100% {
//     width: 45px;
//   }

//   35%,
//   65% {
//     width: 65px;
//   }
// }

// @keyframes shapes33-2 {
//   0%,
//   40% {
//     transform: rotate(0);
//   }

//   60%,
//   100% {
//     transform: rotate(90deg);
//   }
// }

/* HTML: <div class="shapes34"></div> */
// .shapes34 {
//   height: 60px;
//   aspect-ratio: 1;
//   --c: no-repeat linear-gradient(#514b82 0 0);
//   background: var(--c), var(--c), var(--c), var(--c), var(--c), var(--c);
//   animation: shapes34-1 2s infinite alternate, shapes34-2 2s infinite alternate;
// }

// @keyframes shapes34-1 {
//   0%,
//   20% {
//     background-size: 20px 20px;
//   }

//   40%,
//   60% {
//     background-size: 100% 20px;
//   }

//   80%,
//   100% {
//     background-size: 20px 20px;
//   }
// }

// @keyframes shapes34-2 {
//   0%,
//   40% {
//     background-position: 0 0, 100% 0, 50% 50%, 50% 50%, 0 100%, 100% 100%;
//   }

//   60%,
//   100% {
//     background-position: 50% 0, 50% 0, 0 50%, 100% 50%, 50% 100%, 50% 100%;
//   }
// }

/* HTML: <div class="shapes35"></div> */
// .shapes35 {
//   width: 50px;
//   aspect-ratio: 1;
//   display: grid;
// }

// .shapes35:before,
// .shapes35:after {
//   content: "";
//   grid-area: 1/1;
//   border-radius: 50%;
//   background: #f03355;
//   -webkit-mask: repeating-linear-gradient(#000 0 5px, #0000 0 10px);
//   animation: shapes35 1.5s infinite;
// }

// .shapes35:after {
//   -webkit-mask: repeating-linear-gradient(#0000 0 5px, #000 0 10px);
//   --s: -1;
// }

// @keyframes shapes35 {
//   0%,
//   10% {
//     transform: translate(0) rotate(0);
//   }

//   35% {
//     transform: translate(calc(var(--s, 1) * 50%)) rotate(0);
//   }

//   66% {
//     transform: translate(calc(var(--s, 1) * 50%)) rotate(calc(var(--s, 1) * 180deg));
//   }

//   90%,
//   100% {
//     transform: translate(0) rotate(calc(var(--s, 1) * 180deg));
//   }
// }

/* HTML: <div class="shapes36"></div> */
// .shapes36 {
//   width: 50px;
//   aspect-ratio: 1;
//   display: grid;
// }

// .shapes36:before,
// .shapes36:after {
//   content: "";
//   grid-area: 1/1;
//   border-radius: 50%;
//   background: #f03355;
//   -webkit-mask: repeating-linear-gradient(#000 0 10px, #0000 0 20px);
// }

// .shapes36:after {
//   -webkit-mask: repeating-linear-gradient(#0000 0 10px, #000 0 20px);
//   animation: shapes36 1.5s infinite;
// }

// @keyframes shapes36 {
//   0%,
//   10% {
//     transform: rotate(0) translate(0);
//   }

//   35% {
//     transform: rotate(0) translate(100%);
//   }

//   66% {
//     transform: rotate(180deg) translate(100%);
//   }

//   90%,
//   100% {
//     transform: rotate(180deg) translate(0);
//   }
// }

/* HTML: <div class="shapes37"></div> */
// .shapes37 {
//   width: 60px;
//   aspect-ratio: 1.154;
//   --c: #0000, #25b09b 2deg 59deg, #0000 61deg;
//   --c1: conic-gradient(from 149deg at top, var(--c));
//   --c2: conic-gradient(from -31deg at bottom, var(--c));
//   background: var(--c1) top, var(--c1) bottom right, var(--c2) bottom, var(--c1) bottom left;
//   background-size: 50% 50%;
//   background-repeat: no-repeat;
//   animation: shapes37 1s infinite;
// }

// @keyframes shapes37 {
//   80%,
//   100% {
//     background-position: bottom right, bottom left, bottom, top;
//   }
// }

/* HTML: <div class="shapes38"></div> */
// .shapes38 {
//   width: 60px;
//   aspect-ratio: 1.154;
//   color: #25b09b;
//   display: grid;
//   animation: shapes38-0 6s infinite linear;
// }

// .shapes38:before,
// .shapes38:after {
//   content: "";
//   grid-area: 1/1;
// }

// .shapes38:before {
//   clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
//   background: conic-gradient(from -30deg, #0000 60deg, currentColor 0);
// }

// .shapes38:after {
//   background: conic-gradient(from -30deg, currentColor 60deg, #0000 0);
//   animation: shapes38 0.5s infinite alternate;
// }

// @keyframes shapes38-0 {
//   0%,
//   16.66% {
//     transform: rotate(0deg);
//   }

//   16.67%,
//   33.33% {
//     transform: rotate(60deg);
//   }

//   33.34%,
//   50% {
//     transform: rotate(120deg);
//   }

//   50.1%,
//   66.66% {
//     transform: rotate(180deg);
//   }

//   66.67%,
//   83.33% {
//     transform: rotate(240deg);
//   }

//   83.34%,
//   100% {
//     transform: rotate(300deg);
//   }
// }

// @keyframes shapes38 {
//   100% {
//     transform: translateY(-20px);
//   }
// }

/* HTML: <div class="shapes39"></div> */
// .shapes39 {
//   width: 50px;
//   aspect-ratio: 1;
//   color: #398eb6;
//   background: currentColor;
//   border-radius: 50%;
//   position: relative;
// }

// .shapes39:before {
//   content: "";
//   position: absolute;
//   background: radial-gradient(farthest-side at bottom right, #0000 94%, currentColor 96%) 0 0, radial-gradient(farthest-side at bottom left, #0000 94%, currentColor 96%) 100% 0,
//     radial-gradient(farthest-side at top left, #0000 94%, currentColor 96%) 100% 100%, radial-gradient(farthest-side at top right, #0000 94%, currentColor 96%) 0 100%;
//   background-size: 25px 25px;
//   background-repeat: no-repeat;
//   animation: shapes39-1 1s infinite, shapes39-2 1s infinite;
// }

// @keyframes shapes39-1 {
//   0%,
//   10%,
//   90%,
//   100% {
//     inset: 0;
//   }

//   40%,
//   60% {
//     inset: -10px;
//   }
// }

// @keyframes shapes39-2 {
//   0%,
//   40% {
//     transform: rotate(0);
//   }

//   60%,
//   100% {
//     transform: rotate(90deg);
//   }
// }

/* HTML: <div class="shapes40"></div> */
// .shapes40 {
//   width: 50px;
//   aspect-ratio: 1;
//   color: #398eb6;
//   position: relative;
//   animation: l40 0.5s infinite alternate;
// }

// .shapes40:before,
// .shapes40:after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background-size: 25px 25px;
//   background-position: 0 0, 100% 0, 100% 100%, 0 100%;
//   background-repeat: no-repeat;
// }

// .shapes40:before {
//   background-image: radial-gradient(farthest-side at top left, currentColor 96%, #0000), radial-gradient(farthest-side at top right, currentColor 96%, #0000), radial-gradient(farthest-side at bottom right, currentColor 96%, #0000),
//     radial-gradient(farthest-side at bottom left, currentColor 96%, #0000);
//   animation: shapes40-1 1s infinite;
// }

// .shapes40:after {
//   background-image: radial-gradient(farthest-side at top left, #0000 94%, currentColor 96%), radial-gradient(farthest-side at top right, #0000 94%, currentColor 96%), radial-gradient(farthest-side at bottom right, #0000 94%, currentColor 96%),
//     radial-gradient(farthest-side at bottom left, #0000 94%, currentColor 96%);
//   animation: shapes40-2 1s infinite;
// }

// @keyframes shapes40-1 {
//   0%,
//   10%,
//   90%,
//   100% {
//     inset: 0;
//   }

//   40%,
//   60% {
//     inset: -10px;
//   }
// }

// @keyframes shapes40-2 {
//   0%,
//   40% {
//     transform: rotate(0);
//   }

//   60%,
//   100% {
//     transform: rotate(90deg);
//   }
// }

/* HTML: <div class="spinner01"></div> */
// .spinner01 {
//   width: 50px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   border: 8px solid;
//   border-color: #000 #0000;
//   animation: spinner01 1s infinite;
// }

// @keyframes spinner01 {
//   to {
//     transform: rotate(0.5turn);
//   }
// }

/* HTML: <div class="spinner02"></div> */
.spinner02 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid lightblue;
  border-right-color: orange;
  animation: spinner02 1s infinite linear;
}

@keyframes spinner02 {
  to {
    transform: rotate(1turn);
  }
}

/* HTML: <div class="spinner03"></div> */
.spinner03 {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: spinner03 1s infinite linear;
}

@keyframes spinner03 {
  to {
    transform: rotate(1turn);
  }
}

/* HTML: <div class="spinner04"></div> */
// .spinner04 {
//   width: 50px;
//   --b: 8px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   padding: 1px;
//   background: conic-gradient(#0000 10%, #f03355) content-box;
//   -webkit-mask: repeating-conic-gradient(#0000 0deg, #000 1deg 20deg, #0000 21deg 36deg), radial-gradient(farthest-side, #0000 calc(100% - var(--b) - 1px), #000 calc(100% - var(--b)));
//   -webkit-mask-composite: destination-in;
//   mask-composite: intersect;
//   animation: spinner04 1s infinite steps(10);
// }

// @keyframes spinner04 {
//   to {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner05"></div> */
// .spinner05 {
//   width: 50px;
//   --b: 8px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: #514b82;
//   -webkit-mask: repeating-conic-gradient(#0000 0deg, #000 1deg 70deg, #0000 71deg 90deg), radial-gradient(farthest-side, #0000 calc(100% - var(--b) - 1px), #000 calc(100% - var(--b)));
//   -webkit-mask-composite: destination-in;
//   mask-composite: intersect;
//   animation: spinner05 1s infinite;
// }

// @keyframes spinner05 {
//   to {
//     transform: rotate(0.5turn);
//   }
// }

/* HTML: <div class="spinner06"></div> */
// .spinner06 {
//   width: 50px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   padding: 3px;
//   background: radial-gradient(farthest-side, #ffa516 95%, #0000) 50% 0/12px 12px no-repeat, radial-gradient(farthest-side, #0000 calc(100% - 5px), #ffa516 calc(100% - 4px)) content-box;
//   animation: spinner06 2s infinite;
// }

// @keyframes spinner06 {
//   to {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner07"></div> */
// .spinner07 {
//   width: 50px;
//   aspect-ratio: 1;
//   --_c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
//   background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
//   background-size: 12px 12px;
//   animation: spinner07 1s infinite;
// }

// @keyframes spinner07 {
//   to {
//     transform: rotate(0.5turn);
//   }
// }

/* HTML: <div class="spinner08"></div> */
// .spinner08 {
//   width: 50px;
//   aspect-ratio: 1;
//   color: #f03355;
//   --_c: no-repeat radial-gradient(farthest-side, currentColor 92%, #0000);
//   background: var(--_c) 50% 0 /12px 12px, var(--_c) 50% 100%/12px 12px, var(--_c) 100% 50%/12px 12px, var(--_c) 0 50%/12px 12px, var(--_c) 50% 50%/12px 12px,
//     conic-gradient(from 90deg at 4px 4px, #0000 90deg, currentColor 0) -4px -4px / calc(50% + 2px) calc(50% + 2px);
//   animation: spinner08 1s infinite linear;
// }

// @keyframes spinner08 {
//   to {
//     transform: rotate(0.5turn);
//   }
// }

/* HTML: <div class="spinner09"></div> */
// .spinner09 {
//   width: 50px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: radial-gradient(farthest-side, #f03355 95%, #0000) 50% 1px/12px 12px no-repeat, radial-gradient(farthest-side, #0000 calc(100% - 14px), #ccc 0);
//   animation: spinner09 2s infinite linear;
// }

// @keyframes spinner09 {
//   to {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner10"></div> */
// .spinner10 {
//   width: 50px;
//   aspect-ratio: 1;
//   color: #854f1d;
//   border-radius: 50%;
//   display: grid;
//   background: conic-gradient(from 90deg at 4px 4px, #0000 90deg, currentColor 0) -4px -4px / calc(50% + 2px) calc(50% + 2px), radial-gradient(farthest-side, currentColor 6px, #0000 7px calc(100% - 6px), currentColor calc(100% - 5px)) no-repeat;
//   animation: spinner10 2s infinite linear;
//   position: relative;
// }

// .spinner10:before {
//   content: "";
//   border-radius: inherit;
//   background: inherit;
//   transform: rotate(45deg);
// }

// @keyframes spinner10 {
//   to {
//     transform: rotate(0.5turn);
//   }
// }

/* HTML: <div class="spinner11"></div> */
// .spinner11 {
//   width: 50px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   padding: 6px;
//   background: conic-gradient(from 135deg at top, currentColor 90deg, #0000 0) 0 calc(50% - 4px) / 17px 8.5px,
//     radial-gradient(farthest-side at bottom left, #0000 calc(100% - 6px), currentColor calc(100% - 5px) 99%, #0000) top right/50% 50% content-box content-box,
//     radial-gradient(farthest-side at top, #0000 calc(100% - 6px), currentColor calc(100% - 5px) 99%, #0000) bottom / 100% 50% content-box content-box;
//   background-repeat: no-repeat;
//   animation: spinner11 1s infinite linear;
// }

// @keyframes spinner11 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner12"></div> */
.spinner12 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
}

.spinner12::before,
.spinner12::after {
  content: "";
  grid-area: 1/1;
  --c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
  background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%, var(--c) 0 50%;
  background-size: 12px 12px;
  animation: spinner12 1s infinite;
}

.spinner12::before {
  margin: 4px;
  filter: hue-rotate(45deg);
  background-size: 8px 8px;
  animation-timing-function: linear;
}

@keyframes spinner12 {
  100% {
    transform: rotate(0.5turn);
  }
}

/* HTML: <div class="spinner13"></div> */
// .spinner13 {
//   width: 50px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: radial-gradient(farthest-side, #ffa516 94%, #0000) top/8px 8px no-repeat, conic-gradient(#0000 30%, #ffa516);
//   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
//   animation: spinner13 1s infinite linear;
// }

// @keyframes spinner13 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner14"></div> */
// .spinner14 {
//   width: 50px;
//   aspect-ratio: 1;
//   display: grid;
//   animation: spinner14 4s infinite;
// }

// .spinner14::before,
// .spinner14::after {
//   content: "";
//   grid-area: 1/1;
//   border: 8px solid;
//   border-radius: 50%;
//   border-color: red red #0000 #0000;
//   mix-blend-mode: darken;
//   animation: spinner14 1s infinite linear;
// }

// .spinner14::after {
//   border-color: #0000 #0000 blue blue;
//   animation-direction: reverse;
// }

// @keyframes spinner14 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner15"></div> */
.spinner15 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: #25b09b;
  animation: spinner15 1s infinite linear;
}

.spinner15::before,
.spinner15::after {
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: spinner15 2s infinite;
}

.spinner15::after {
  margin: 8px;
  animation-duration: 3s;
}

@keyframes spinner15 {
  100% {
    transform: rotate(1turn);
  }
}

/* HTML: <div class="spinner16"></div> */
.spinner16 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-color: #ccc #0000;
  animation: spinner16 1s infinite linear;
}

.spinner16::before,
.spinner16::after {
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
}

.spinner16::before {
  border-color: #f03355 #0000;
  animation: inherit;
  animation-duration: 0.5s;
  animation-direction: reverse;
}

.spinner16::after {
  margin: 8px;
}

@keyframes spinner16 {
  100% {
    transform: rotate(1turn);
  }
}

/* HTML: <div class="spinner17"></div> */
.spinner17 {
  width: 70px;
  aspect-ratio: 1;
  background: radial-gradient(farthest-side, #ffa516 90%, #0000) center/16px 16px, radial-gradient(farthest-side, green 90%, #0000) bottom/12px 12px;
  background-repeat: no-repeat;
  animation: spinner17 1s infinite linear;
  position: relative;
}

.spinner17::before {
  content: "";
  position: absolute;
  width: 8px;
  aspect-ratio: 1;
  inset: auto 0 16px;
  margin: auto;
  background: #ccc;
  border-radius: 50%;
  transform-origin: 50% calc(100% + 10px);
  animation: inherit;
  animation-duration: 0.5s;
}

@keyframes spinner17 {
  100% {
    transform: rotate(1turn);
  }
}

/* HTML: <div class="spinner18"></div> */
// .spinner18 {
//   width: 50px;
//   aspect-ratio: 1;
//   --c: no-repeat radial-gradient(farthest-side, #514b82 92%, #0000);
//   background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%, var(--c) 0 50%;
//   background-size: 10px 10px;
//   animation: spinner18 1s infinite;
//   position: relative;
// }

// .spinner18::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   margin: 3px;
//   background: repeating-conic-gradient(#0000 0 35deg, #514b82 0 90deg);
//   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 3px), #000 0);
//   border-radius: 50%;
// }

// @keyframes spinner18 {
//   100% {
//     transform: rotate(0.5turn);
//   }
// }

/* HTML: <div class="spinner19"></div> */
// .spinner19 {
//   width: 50px;
//   aspect-ratio: 1;
//   display: grid;
//   color: #854f1d;
//   background: radial-gradient(farthest-side, currentColor calc(100% - 6px), #0000 calc(100% - 5px) 0);
//   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 13px), #000 calc(100% - 12px));
//   border-radius: 50%;
//   animation: spinner19 2s infinite linear;
// }

// .spinner19::before,
// .spinner19::after {
//   content: "";
//   grid-area: 1/1;
//   background: linear-gradient(currentColor 0 0) center, linear-gradient(currentColor 0 0) center;
//   background-size: 100% 10px, 10px 100%;
//   background-repeat: no-repeat;
// }

// .spinner19::after {
//   transform: rotate(45deg);
// }

// @keyframes spinner19 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner20"></div> */
// .spinner20 {
//   width: 50px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   border: 8px solid #514b82;
//   animation: spinner20-1 0.8s infinite linear alternate, spinner20-2 1.6s infinite linear;
// }

// @keyframes spinner20-1 {
//   0% {
//     clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
//   }

//   12.5% {
//     clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
//   }

//   25% {
//     clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
//   }

//   50% {
//     clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
//   }

//   62.5% {
//     clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
//   }

//   75% {
//     clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
//   }

//   100% {
//     clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
//   }
// }

// @keyframes spinner20-2 {
//   0% {
//     transform: scaleY(1) rotate(0deg);
//   }

//   49.99% {
//     transform: scaleY(1) rotate(135deg);
//   }

//   50% {
//     transform: scaleY(-1) rotate(0deg);
//   }

//   100% {
//     transform: scaleY(-1) rotate(-135deg);
//   }
// }

/* HTML: <div class="spinner21"></div> */
// .spinner21 {
//   width: 50px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: repeating-conic-gradient(#000 0 90deg, #ccc 0 180deg);
//   animation: spinner21 1s infinite linear;
// }

// @keyframes spinner21 {
//   100% {
//     transform: rotate(0.5turn);
//   }
// }

/* HTML: <div class="spinner22"></div> */
// .spinner22 {
//   width: 50px;
//   aspect-ratio: 1;
//   display: grid;
//   border-radius: 50%;
//   background: conic-gradient(#25b09b 25%, #f03355 0 50%, #514b82 0 75%, #ffa516 0);
//   animation: spinner22 2s infinite linear;
// }

// .spinner22::before,
// .spinner22::after {
//   content: "";
//   grid-area: 1/1;
//   margin: 15%;
//   border-radius: 50%;
//   background: inherit;
//   animation: inherit;
// }

// .spinner22::after {
//   margin: 25%;
//   animation-duration: 3s;
// }

// @keyframes spinner22 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner23"></div> */
// .spinner23 {
//   width: 50px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   border: 8px solid #0000;
//   border-right-color: #ffa50097;
//   position: relative;
//   animation: spinner23 1s infinite linear;
// }

// .spinner23:before,
// .spinner23:after {
//   content: "";
//   position: absolute;
//   inset: -8px;
//   border-radius: 50%;
//   border: inherit;
//   animation: inherit;
//   animation-duration: 2s;
// }

// .spinner23:after {
//   animation-duration: 4s;
// }

// @keyframes spinner23 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner24"></div> */
// .spinner24 {
//   width: 50px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: #514b82;
//   -webkit-mask: radial-gradient(circle closest-side at 50% 40%, #0000 94%, #000);
//   transform-origin: 50% 40%;
//   animation: spinner24 1s infinite linear;
// }

// @keyframes spinner24 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner25"></div> */
// .spinner25 {
//   width: 50px;
//   aspect-ratio: 1;
//   display: grid;
//   -webkit-mask: conic-gradient(from 15deg, #0000, #000);
//   animation: spinner25 1s infinite steps(12);
// }

// .spinner25,
// .spinner25:before,
// .spinner25:after {
//   background: radial-gradient(closest-side at 50% 12.5%, #f03355 96%, #0000) 50% 0/20% 80% repeat-y, radial-gradient(closest-side at 12.5% 50%, #f03355 96%, #0000) 0 50%/80% 20% repeat-x;
// }

// .spinner25:before,
// .spinner25:after {
//   content: "";
//   grid-area: 1/1;
//   transform: rotate(30deg);
// }

// .spinner25:after {
//   transform: rotate(60deg);
// }

// @keyframes spinner25 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner26"></div> */
.spinner26 {
  --d: 22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: #25b09b;
  box-shadow: calc(1 * var(--d)) calc(0 * var(--d)) 0 0, calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px, calc(0 * var(--d)) calc(1 * var(--d)) 0 2px, calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px, calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px, calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
  animation: spinner26 1s infinite steps(8);
}

@keyframes spinner26 {
  100% {
    transform: rotate(1turn);
  }
}

/* HTML: <div class="spinner27"></div> */
// .spinner27 {
//   width: 50px;
//   aspect-ratio: 1;
//   display: grid;
//   color: #514b82;
//   background: conic-gradient(from 90deg at 3px 3px, #0000 90deg, currentColor 0) -3px -3px / calc(50% + 1.5px) calc(50% + 1.5px);
//   animation: spinner27 2s infinite;
// }

// .spinner27::before,
// .spinner27::after {
//   content: "";
//   grid-area: 1/1;
//   background: repeating-conic-gradient(#0000 0 35deg, currentColor 0 90deg);
//   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 3px), #000 0);
//   border-radius: 50%;
// }

// .spinner27::after {
//   margin: 20%;
// }

// @keyframes spinner27 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner28"></div> */
// .spinner28 {
//   width: 50px;
//   aspect-ratio: 1;
//   --_c: no-repeat linear-gradient(orange 0 0) 50%;
//   background: var(--_c) / 100% 50%, var(--_c) / 50% 100%;
//   border-radius: 50%;
//   animation: spinner28 2s infinite linear;
// }

// @keyframes spinner28 {
//   100% {
//     transform: rotate(1turn);
//   }
// }

/* HTML: <div class="spinner29"></div> */
// .spinner29 {
//   --R: 30px;
//   --g1: #514b82 96%, #0000;
//   --g2: #eeeeee 96%, #0000;
//   width: calc(2 * var(--R));
//   aspect-ratio: 1;
//   border-radius: 50%;
//   display: grid;
//   -webkit-mask: linear-gradient(#000 0 0);
//   animation: spinner29 2s infinite linear;
// }

// .spinner29::before,
// .spinner29::after {
//   content: "";
//   grid-area: 1/1;
//   width: 50%;
//   background: radial-gradient(farthest-side, var(--g1)) calc(var(--R) + 0.866 * var(--R) - var(--R)) calc(var(--R) - 0.5 * var(--R) - var(--R)),
//     radial-gradient(farthest-side, var(--g1)) calc(var(--R) + 0.866 * var(--R) - var(--R)) calc(var(--R) - 0.5 * var(--R) - var(--R)),
//     radial-gradient(farthest-side, var(--g2)) calc(var(--R) + 0.5 * var(--R) - var(--R)) calc(var(--R) - 0.866 * var(--R) - var(--R)), radial-gradient(farthest-side, var(--g1)) 0 calc(-1 * var(--R)),
//     radial-gradient(farthest-side, var(--g2)) calc(var(--R) - 0.5 * var(--R) - var(--R)) calc(var(--R) - 0.866 * var(--R) - var(--R)),
//     radial-gradient(farthest-side, var(--g1)) calc(var(--R) - 0.866 * var(--R) - var(--R)) calc(var(--R) - 0.5 * var(--R) - var(--R)), radial-gradient(farthest-side, var(--g2)) calc(-1 * var(--R)) 0,
//     radial-gradient(farthest-side, var(--g1)) calc(var(--R) - 0.866 * var(--R) - var(--R)) calc(var(--R) + 0.5 * var(--R) - var(--R));
//   background-size: calc(2 * var(--R)) calc(2 * var(--R));
//   background-repeat: no-repeat;
// }

// .spinner29::after {
//   transform: rotate(180deg);
//   transform-origin: right;
// }

// @keyframes spinner29 {
//   100% {
//     transform: rotate(-1turn);
//   }
// }
</style>
