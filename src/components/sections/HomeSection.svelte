<script lang="ts">
  import { onMount } from 'svelte';
  import { HERO_SECTION_ANIMATED_TEXT } from '~/constants/pages';
  
  let isSettingsOpen = false;
  let isLightMode = false;
  let isSoundOn = false;
  let audio: HTMLAudioElement;
  
  onMount(() => {
    audio = document.getElementById('audioPlayer') as HTMLAudioElement;
    
    // Add jello hover effect to letters
    const jelloElements = document.querySelectorAll('.jello');
    jelloElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('jello-hover');
      });
      element.addEventListener('animationend', () => {
        element.classList.remove('jello-hover');
      });
    });
  });
  
  // Reactive statements for functionality
  $: if (typeof document !== 'undefined') {
    document.body.classList.toggle('light-mode', isLightMode);
    document.querySelectorAll('.needtobeinvert').forEach(el => el.classList.toggle('invertapplied', isLightMode));
  }
  $: if (typeof document !== 'undefined' && audio) {
    if (isSoundOn) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }
</script>

<section class="landing-page-container" id="home">
  <div class="blob"></div>

  <div class="text-content">
    <article id="hello-friend" data-aos="fade-up" data-aos-delay="0">
      {#each HERO_SECTION_ANIMATED_TEXT.GREET_TEXT.split('') as char}
        {#if char === ' '}
          &nbsp;
        {:else}
          <p class="jello">{char}</p>
        {/if}
      {/each}
    </article>
    
    <article id="name" data-aos="fade-up" data-aos-delay="200">
      {#each HERO_SECTION_ANIMATED_TEXT.NAME_TEXT.split('') as char}
        {#if char === ' '}
          &nbsp;
        {:else}
          <p class="jello">{char}</p>
        {/if}
      {/each}
    </article>

    <article id="work" data-aos="fade-up" data-aos-delay="400">
      {#each HERO_SECTION_ANIMATED_TEXT.WORK_TEXT.split(' ') as group}
        <div>
          {#each group.split('') as char}
            <p class="jello">{char}</p>
          {/each}
        </div>
      {/each}
    </article>
    
    <p id="info-para" data-aos="fade-up" data-aos-delay="600">
      Passionate Web Developer with experience in both Frontend and Backend. 
      <br />
      <br />
      I love creating clean, simple, and engaging web interfaces. Let's build something amazing together!
    </p>
    
    <div class="contact-btn-div" data-aos="fade-up" data-aos-delay="800">
      <a href="mailto:mycomputer2214@gmail.com" tabindex="-1">
        <button class="letsTalkBtn">
          <p class="letsTalkBtn-text">Let's Talk!</p>
          <span class="letsTalkBtn-BG"></span>
        </button>
      </a>
      
      <div class="setting-container" id="setting-container" class:settingactivate={isSettingsOpen}>
        <input
          type="checkbox"
          id="switchforsetting"
          bind:checked={isSettingsOpen}
        />

        <label
          for="switchforsetting"
          class="needtobeinvert"
          id="labelforsetting"
          aria-label="settings for sound and appearance"
        ></label>

        <div
          class="visualmodetogglebuttoncontainer"
          id="visualmodetogglebuttoncontainer"
          class:visualmodeshow={isSettingsOpen}
        >
          <input
            type="checkbox"
            id="switchforvisualmode"
            bind:checked={isLightMode}
          />
          <label
            for="switchforvisualmode"
            id="labelforvisualmode"
            aria-label="switch appearance"
          ></label>
        </div>

        <div
          class="soundtogglebuttoncontainer"
          id="soundtogglebuttoncontainer"
          class:soundmodeshow={isSettingsOpen}
        >
          <input
            type="checkbox"
            id="switchforsound"
            bind:checked={isSoundOn}
          />
          <label
            for="switchforsound"
            id="labelforsound"
            aria-label="switch sound"
            class="needtobeinvert"
          ></label>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
/* Landing page styles */
.landing-page-container {
  width: 100%;
  height: calc(100vh - 115px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.blob {
  position: absolute;
  right: -15%;
  top: 0;
  background-color: var(--color-light-purple);
  width: 600px;
  height: 100vh;
  filter: blur(300px);
  opacity: .3;
  animation: breath 1s linear infinite alternate-reverse;
  border-radius: 50%;
}

@keyframes breath {
  from {
    opacity: .3;
  }
  to {
    opacity: .5;
  }
}

.text-content {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
}

#hello-friend {
  font-size: 3.5rem;
  font-weight: 600;
  width: fit-content;
  display: flex;
  align-items: flex-end;
  color: var(--color-white);
  font-family: 'Fira Code', monospace;
}

#name {
  font-size: 8rem;
  width: fit-content;
  display: flex;
  font-weight: 700;
  align-items: flex-start;
  background: linear-gradient(-45deg, var(--color-light-blue), var(--color-light-purple), var(--color-light-blue), var(--color-light-purple));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: gradient 3s infinite;
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

#work {
  font-size: 8rem;
  width: fit-content;
  display: flex;
  font-weight: 700;
  align-items: flex-start;
  flex-wrap: wrap;
  color: var(--color-white);
}

#work div {
  display: flex;
  margin: 0 12px 0 0;
}

.jello {
  display: inline-block;
  transition: all 0.3s ease;
}

.jello:hover {
  color: #03e6ff;
  animation: jello-vertical 0.9s both;
  position: relative;
  z-index: 10;
}

#name .jello:hover {
  background: none;
  -webkit-background-clip: initial;
  -webkit-text-fill-color: #03e6ff;
  background-clip: initial;
  color: #03e6ff;
}

@keyframes jello-vertical {
  0%, 100% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(.75, 1.25, 1);
  }
  40% {
    transform: scale3d(1.25, .75, 1);
  }
  50% {
    transform: scale3d(.85, 1.15, 1);
  }
  65% {
    transform: scale3d(1.05, .95, 1);
  }
  75% {
    transform: scale3d(.95, 1.05, 1);
  }
}

#info-para {
  width: 75%;
  padding-top: 30px;
  color: var(--color-ddd-color);
  line-height: 20px;
  font-weight: 400;
  font-size: 2rem;
}

.contact-btn-div {
  width: 100%;
  padding-top: 50px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.letsTalkBtn {
  position: relative;
  border: none;
  width: 180px;
  height: 40px;
  border-radius: 0;
  cursor: pointer;
  transition: .3s;
  background-color: transparent;
}

.letsTalkBtn-text {
  width: 100%;
  height: 100%;
  background-color: rgba(230, 230, 230, .466);
  border: none;
  border-radius: 7px;
  backdrop-filter: blur(5px);
  color: #000;
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  letter-spacing: .8px;
}

.letsTalkBtn-BG {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(150deg, #71cbff, #8000ff);
  z-index: -1;
  left: 6px;
  top: 6px;
  border-radius: 7px;
  pointer-events: none;
  transition: .3s;
}

.letsTalkBtn:hover {
  transform: translateY(-2px) translateX(-2px);
}

.letsTalkBtn:hover .letsTalkBtn-BG {
  transform: translateY(2px) translateX(2px);
}

.letsTalkBtn:active {
  transform: translateY(7px) translateX(7px);
}

.letsTalkBtn:active .letsTalkBtn-BG {
  transform: translateY(-7px) translateX(-7px);
}

/* Settings container */
.setting-container {
  width: 60px;
  height: 50px;
  margin-left: 50px;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
  transform-origin: left;
  transition-duration: .5s;
}

.settingactivate {
  width: 200px;
  transform-origin: left;
  transition-duration: .5s;
}

.visualmodetogglebuttoncontainer {
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.visualmodeshow {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.soundtogglebuttoncontainer {
  align-items: center;
  width: fit-content;
  transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s;
  height: fit-content;
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateX(-50px);
  pointer-events: none;
}

.soundmodeshow {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

#switchforsetting,
#switchforsound,
#switchforvisualmode {
  display: none;
}

#labelforsetting {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-image: url(/src/svg/settings-svgrepo-com.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
  transition-duration: .5s;
  cursor: pointer;
}

#switchforsetting:checked+#labelforsetting {
  transform: rotate(180deg);
  transition-duration: .5s;
}

#labelforvisualmode {
  position: relative;
  width: 40px;
  height: 40px;
  background-image: url(/src/png/crescent-moon-1.png);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  transition-duration: .5s;
  cursor: pointer;
}

#switchforvisualmode:checked+#labelforvisualmode {
  transform: rotate(360deg);
  transition-duration: .5s;
  background-image: url(/src/png/sun.png);
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
}

#labelforsound {
  position: relative;
  height: 40px;
  background-size: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  background-image: url(/src/svg/Mute_Icon.svg);
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition-duration: .5s;
}

#switchforsound:checked+#labelforsound {
  transition-duration: .5s;
  background-image: url(/src/svg/Speaker_Icon.svg);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
}

/* Responsive styles */
@media screen and (max-width: 768px) {
  .text-content {
    padding-left: 0;
    width: 80%;
  }

  #hello-friend {
    height: 100px;
    font-size: 3.5rem;
  }

  #name,
  #work {
    font-size: 5.5rem;
  }

  #info-para {
    width: 100%;
  }

  .contact-btn-div {
    height: 140px;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
  }

  .setting-container {
    margin-left: 0;
  }
}

@media screen and (max-width: 500px) {
  #hello-friend {
    font-size: 2.5rem;
  }

  .landing-page-container {
    height: 85vh;
  }

  .text-content {
    justify-content: flex-start;
  }
}
</style>