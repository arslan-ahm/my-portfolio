<script lang="ts">
  import { onMount } from 'svelte';
  import { IMGS } from '~/constants/assets';
  
  let isSettingsOpen = false;
  let isLightMode = false;
  let isSoundOn = false;
  let audio: HTMLAudioElement;
  
  onMount(() => {
    audio = document.getElementById('audioPlayer') as HTMLAudioElement;
    
    // Preloader functionality
    const loader = document.getElementById('preloader');
    window.addEventListener('load', function() {
      if (loader) {
        loader.style.display = 'none';
      }
      document.querySelector('.hey')?.classList.add('popup');
    });
  });
  
  function toggleSettings() {
    isSettingsOpen = !isSettingsOpen;
    const container = document.getElementById('setting-container');
    const visualContainer = document.getElementById('visualmodetogglebuttoncontainer');
    const soundContainer = document.getElementById('soundtogglebuttoncontainer');
    
    if (container) {
      container.classList.toggle('settingactivate');
    }
    if (visualContainer) {
      visualContainer.classList.toggle('visualmodeshow');
    }
    if (soundContainer) {
      soundContainer.classList.toggle('soundmodeshow');
    }
  }
  
  function toggleLightMode() {
    isLightMode = !isLightMode;
    document.body.classList.toggle('light-mode');
    const elements = document.querySelectorAll('.needtobeinvert');
    elements.forEach(element => {
      element.classList.toggle('invertapplied');
    });
  }
  
  function toggleSound() {
    isSoundOn = !isSoundOn;
    if (audio) {
      if (isSoundOn) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
  
  function handleLogoHover() {
    const logo = document.querySelector<HTMLElement>('.logo');
    if (logo) {
      logo.style.transform = 'translateY(200px)';
      logo.style.transitionDuration = '1s';
    }
  }
  
  function handleLogoLeave() {
    const logo = document.querySelector<HTMLElement>('.logo');
    if (logo) {
      logo.style.transform = 'translateY(0)';
      logo.style.transitionDuration = '1s';
    }
  }
</script>

<header>
  <div class="navbar" id="navbar">
    <div class="hey">Hey!</div>
    <div 
      class="logo" 
      role="button"
      tabindex="0"
      aria-label="arslan ahmad logo"
      on:mouseenter={handleLogoHover}
      on:mouseleave={handleLogoLeave}
      on:keydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleLogoHover();
          setTimeout(handleLogoLeave, 1000);
        }
      }}
    >
      <div class="logo-top">
        <img
          src={IMGS.NAVBAR_AVATAR}
          alt="animation-head"
          id="nav-avatar"
        />
      </div>
      <div class="face">
        <div class="eye left-eye">
          <div class="pupil"></div>
        </div>
        <div class="eye right-eye">
          <div class="pupil"></div>
        </div>
      </div>
    </div>
    <div class="navbar-tabs" id="navbar-tabs">
      <ul class="navbar-tabs-ul">
        <!-- {#each NAVBAR_LINKS as link}
          <li
            class="{link.name.toLowerCase()} navbar-tabs-li"
            data-aos="fade-down"
            data-aos-delay={link.delay}
          >
            <a href={link.href} aria-label="{link.name} menu button">
              &#60;/{link.name}&#62;
            </a>
          </li>
        {/each} -->
        <li
          class="home activeThistab navbar-tabs-li"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <a href="#home" tabindex="0" aria-label="Home menu button">
            &#60;/Home&#62;
          </a>
        </li>

        <li
          class="about navbar-tabs-li"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <a href="#about" aria-label="about menu button">
            &#60;/AboutMe&#62;
          </a>
        </li>

        <li
          class="skills navbar-tabs-li"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <a href="#skills" aria-label="skills menu button">
            &#60;/Skills&#62;
          </a>
        </li>

        <li
          class="projects navbar-tabs-li"
          data-aos="fade-down"
          data-aos-delay="700"
        >
          <a href="#projects" aria-label="projects menu button">
            &#60;/Projects&#62;
          </a>
        </li>
      </ul>
    </div>
  </div>
</header>

<style>
/* Header styles */
header {
  width: 100%;
  height: 115px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.navbar {
  background-image: linear-gradient(to bottom right, var(--tech-stack-box-first-color), var(--tech-stack-box-second-color));
  backdrop-filter: blur(10px);
  height: 80px;
  width: 80%;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  border: 1px solid var(--color-navbarBorder-dark);
  border-radius: 50px;
  display: flex;
  position: fixed;
  overflow: hidden;
}

.navbar-tabs {
  display: flex;
  width: 80%;
  height: 100%;
  align-items: center;
}

.navbar-tabs-ul {
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
  justify-content: flex-end;
  gap: 80px;
  color: var(--color-white);
  align-items: center;
}

.navbar-tabs-ul li {
  position: relative;
  display: flex;
  width: fit-content;
  height: 30px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-family: 'Fira Code', monospace;
}

.navbar-tabs-ul li:hover:before {
  content: "";
  position: absolute;
  background-color: var(--color-white);
  height: 10px;
  width: 10px;
  left: -20px;
  border-radius: 5px;
  z-index: -1;
}

.navbar-tabs-ul a {
  color: var(--color-white);
  font-weight: 100;
  text-decoration: none;
}

.logo {
  width: 10%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition-duration: 1s;
  overflow: hidden;
}

.logo:hover {
  transition-duration: 1s;
}

.logo-top {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: bottom;
  position: relative;
}

.logo-top img {
  height: 100%;
  z-index: 2;
}

.face {
  content: "";
  position: absolute;
  height: 74%;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  z-index: 1;
  padding-left: 1px;
}

.eye {
  width: 8px;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
}

.left-eye {
  box-shadow: -1px -2px 2px rgba(0, 0, 0, .589) inset;
}

.right-eye {
  box-shadow: 1px 3px 2px rgba(0, 0, 0, .589) inset;
}

.pupil {
  width: 3.5px;
  height: 3.5px;
  background: #241010;
  border-radius: 50%;
}

.hey {
  color: #fff;
  position: absolute;
  font-size: 2.5rem;
  font-weight: 300;
  background-color: #20222e;
  padding: 5px 10px;
  border-radius: 20px;
  left: 120px;
  bottom: 80px;
  opacity: 0;
}

.popup {
  animation: 3s linear pop-up;
}

@keyframes pop-up {
  from {
    bottom: -50px;
    left: 50px;
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.activeThistab {
  color: var(--color-white);
}

.activeThistab:before {
  content: "";
  position: absolute;
  background-color: var(--color-white);
  height: 10px;
  width: 10px;
  left: -20px;
  border-radius: 50%;
  z-index: -1;
}

/* Hide navbar on mobile - handled by hamburger menu */
@media screen and (max-width: 998px) {
  .navbar-tabs-ul {
    display: none;
  }
}
</style>