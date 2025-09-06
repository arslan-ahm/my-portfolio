<script lang="ts">
  import { onMount } from 'svelte';
  
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
          <a
            href="https://www.instagram.com/pexel_ui/"
            target="_blank"
            aria-label="My instagram"
          >
            <svg viewBox="0 0 448 512" class="SocialHandle">
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/vinod-jangid-b401111a1?original_referer="
            target="_blank"
            aria-label="My Linkdin"
          >
            <svg class="SocialHandle" viewBox="0 0 448 512">
              <path
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>
          </a>

          <a
            href="https://github.com/vinodjangid07"
            target="_blank"
            aria-label="My github"
          >
            <svg viewBox="0 0 496 512" class="SocialHandle">
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>

          <a
            href="mailto:infovinodjangid@gmail.com"
            target="_blank"
            aria-label="My G mail"
          >
            <svg id="GmailLogo" viewBox="0 0 512 512">
              <path
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              />
            </svg>
          </a>
        </div>
      </div>
      
      <div class="footer-avatar-container">
        <img
          src="/src/png/footer-avatar-vinod.png"
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
          Design & Built by Arslan Ahmad &#169; twentytwentyfour
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
  fill: white;
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