<script lang="ts">
  import { onMount } from 'svelte';
  import { Instagram, Linkedin, Github, Mail } from 'lucide-svelte';
  import { AUTHOR } from "../../constants";
  import { yearToWords } from "../../utils/dateAndTimeConvertor.ts";
  import { IMGS } from '~/constants/assets';
  
  onMount(() => {
    // Eye tracking functionality
    let Pupils = document.getElementsByClassName('footer-pupil');
    let pupilsArr = Array.from(Pupils);

    let pupilStartPoint = -10;
    let pupilRangeX = 20;
    let pupilRangeY = 15;

    // mouse X 
    let mouseXStartPoint = 0;
    let mouseXEndPoint = window.innerWidth;
    let currentXPosition = 0;
    let fracXValue = 0;

    // mouse Y position 
    let mouseYEndPoint = window.innerHeight;
    let currentYPosition = 0;
    let fracYValue = 0;

    let mouseXRange = mouseXEndPoint - mouseXStartPoint;

    const mouseMove = (event: MouseEvent) => {
        currentXPosition = event.clientX - mouseXStartPoint;
        fracXValue = currentXPosition / mouseXRange;

        currentYPosition = event.clientY;
        fracYValue = currentYPosition / mouseYEndPoint;
 
        // footer
        let pupilXCurrrentPosition = pupilStartPoint + (fracXValue * pupilRangeX);
        let pupilYCurrrentPosition = pupilStartPoint + (fracYValue * pupilRangeY);

        // footer
        pupilsArr.forEach((curPupil) => {
          (curPupil as HTMLElement).style.transform = `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
        });
    };

    const windowResize = (event: Event) => {
        mouseXEndPoint = window.innerWidth;
        mouseYEndPoint = window.innerHeight;
        mouseXRange = mouseXEndPoint - mouseXStartPoint;
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('resize', windowResize);

    // Back to top button functionality
    let mybutton = document.getElementById("backtotopbutton");
    
    const scrollFunction = () => {
      if (mybutton) {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    };

    window.addEventListener('scroll', scrollFunction);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', windowResize);
      window.removeEventListener('scroll', scrollFunction);
    };
  });
  
  function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const SOCIAL_LINKS = [
    {
      href: "https://www.instagram.com/pexel_ui/",
      ariaLabel: "My instagram",
      icon: Instagram
    },
    {
      href: "https://www.linkedin.com/in/vinod-jangid-b401111a1?original_referer=",
      ariaLabel: "My LinkedIn",
      icon: Linkedin
    },
    {
      href: "https://github.com/vinodjangid07",
      ariaLabel: "My github",
      icon: Github
    },
    {
      href: "mailto:infovinodjangid@gmail.com",
      ariaLabel: "My Gmail",
      icon: Mail
    },
  ];

  
</script>

<footer id="footer">
  <button class="fas" id="backtotopbutton" on:click={scrolltoTopfunction}>
    <article aria-label="Back to top">&#8592;BACK TO TOP</article>
  </button>
  
  <div class="footer-background">
    <div class="footer-blob"></div>
  </div>
  
  <div class="footer-foreground">
    <div class="footercontainer">
      <div class="two-words">
        <article
          aria-label="Learning, Living, and Leveling Up, my quote"
        >
          "Learning, Living, and Leveling Up."
        </article>
      </div>
      
      <div class="social-media-container">
        <div class="getintouch-heading">
          <article>GetinTouch();</article>
        </div>
        <div class="logos">
          {#each SOCIAL_LINKS as link}
            <a
              href={link.href}
              target="_blank"
              aria-label={link.ariaLabel}
            >
              <svelte:component 
                this={link.icon} 
                size={24} 
                strokeWidth={1.5}
                color="white"
                class="SocialHandle"
              />
            </a>
          {/each}
        </div>
      </div>
      
      <div class="footer-avatar-container">
        <img
          src={IMGS.FOOTER_AVATAR}
          alt="animation-head"
          class="footer-avatar-img"
          id="footer-wala-avatar"
        />
        <div class="footer-avatar-face">
          <div class="footer-avatar-eye footer-left-eye">
            <div class="footer-pupil"></div>
          </div>
          <div class="footer-avatar-eye footer-right-eye">
            <div class="footer-pupil"></div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <article>
          All Rights Reserved by {AUTHOR} © {yearToWords(new Date().getFullYear())}
        </article>
      </div>
    </div>
  </div>
</footer>

<style>
/* Footer styles */
footer {
  width: 100%;
  height: fit-content;
  border-top: 1px solid var(--tech-stack-box-border-color);
  position: relative;
  overflow: hidden;
}

.footer-background {
  width: 100%;
  height: 100vh;
  background-color: #0b0b0b;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1;
}

.footer-blob {
  width: 100%;
  height: 200px;
  background-color: var(--color-light-purple);
  border-radius: 50%;
  filter: blur(100px);
  opacity: .7;
}

.footer-foreground {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.footercontainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.two-words {
  color: #b3b3b3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.two-words article {
  font-size: 3rem;
  font-family: 'Fira Code', monospace;
}

.social-media-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.social-media-container a {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 10px;
  border-radius: 50%;
  border: 2px solid #e2dede;
  position: relative;
  box-shadow: 0 0 0 #8000ff inset;
  transition-duration: .3s;
}

.getintouch-heading {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.getintouch-heading article {
  font-size: 2rem;
  background: linear-gradient(-45deg, var(--color-light-blue), var(--color-light-purple), var(--color-light-blue), var(--color-light-purple));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-family: 'Fira Code', monospace;
}

.logos {
  height: 80px;
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
}

.SocialHandle {
  color: white;
  width: 60%;
}

#GmailLogo {
  height: 70%;
  fill: white;
}

.social-media-container a:hover {
  box-shadow: 0 0 50px 100px #8000ff inset;
  transition-duration: 1s;
  border: none;
}

.social-media-container a::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  border-radius: 50%;
  transform: scale(0);
  background-color: transparent;
  transition-duration: .3s;
  z-index: -1;
}

.social-media-container a:hover::before {
  transform: scale(1);
  transition-duration: .3s;
}

.footer-avatar-container {
  width: 220px;
  margin-top: 20px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.footer-avatar-img {
  width: 100%;
  z-index: 2;
}

.footer-avatar-face {
  position: absolute;
  width: 100%;
  height: 97%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding-left: 5px;
}

.footer-avatar-eye {
  width: 50px;
  height: 50px;
  background-color: #dfd2d2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-pupil {
  width: 20px;
  height: 20px;
  background-color: #000;
  border-radius: 50%;
  border: 5px solid #413333;
  filter: blur(.6px);
}

.footer-right-eye {
  box-shadow: 15px 15px 5px rgba(0, 0, 0, .233) inset, 10px 10px 5px rgba(41, 33, 33, .644) inset;
  position: relative;
}

.footer-left-eye {
  box-shadow: -10px -15px 5px rgba(0, 0, 0, .349) inset;
  position: relative;
}

.footer-avatar-eye::before {
  position: absolute;
  content: "";
  width: 2px;
  height: 5px;
  border-radius: 50%;
  background-color: rgba(214, 214, 214, .726);
  z-index: 2;
  filter: blur(.2px);
  left: 15px;
  transform: rotate(45deg);
}

.footer-bottom {
  background-color: #0b0b0b;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  z-index: 3;
}

.footer-bottom article {
  font-size: 1.5rem;
  color: #b0b0b0;
  font-family: 'Fira Code', monospace;
}

/* Back to top button */
#backtotopbutton {
  position: fixed;
  right: 10px;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  width: 3rem;
  height: 15rem;
  z-index: 101;
  text-align: center;
  transition: .4s;
  display: none;
  background-color: transparent;
}

#backtotopbutton article {
  font-size: 1.5rem;
  color: var(--color-white);
  font-weight: 400;
  writing-mode: vertical-rl;
  mix-blend-mode: difference;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

#backtotopbutton:hover {
  transform: translate(0, -20px);
  text-decoration: line-through var(--color-white);
}

/* Responsive styles */
@media screen and (max-width: 375px) {
  .two-words {
    height: 50px;
  }

  .two-words article {
    font-size: 2rem;
  }

  .footer-bottom article {
    font-size: 1.3rem;
  }

  .logos {
    gap: 20px;
  }
}

@media screen and (max-width: 300px) {
  .two-words {
    align-items: flex-end;
    height: 50px;
  }

  .two-words article {
    font-size: 1.5rem;
  }

  .footer-bottom article {
    font-size: 1rem;
  }
}
</style>