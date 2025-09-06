<script lang="ts">
  // @ts-ignore
  import config from '../../config.json';
  
  function openURL() {
    var url = "/src/pdf/Arslan_Resume.pdf";
    window.open(url, "_blank");
  }
</script>

<section class="about-section-container" id="about" data-aos="fade-up">
  <div class="about-section">
    <div class="section-heading">
      <h2
        class="section-heading-article"
        aria-label="About me heading"
      >
        &#60;/AboutMe&#62;
      </h2>
      <p class="sectionHeadingP"></p>
    </div>

    <div class="info-dp-section">
      <div class="about-info">
        <p>
          Hi! My name is {config.name}. I'm a web developer and digital visual
          artist. I love creating things that exist on the internet. My
          interest in web development started in 2021 when I decided to
          upload my digital concept arts online.
        </p>
        <br />
        <p>
          Instead of creating an online Concepts Art website, i started
          enjoying web development. Creating custom things for web taught
          me a lot about design & development!
        </p>
        <br />
        <p>
          My main focus these days is building interesting & creative web
          designs, I like to code things from scratch, and enjoy bringing
          ideas to life in the browser.
        </p>
        <!-- Resume button -->
        <button class="resume-btn" id="resume-btn" on:click={openURL}>
          <div class="sign">
            <svg viewBox="0 0 640 512">
              <path
                d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
              />
            </svg>
          </div>
          <div class="text">Resume</div>
        </button>
      </div>

      <div class="dp" data-aos="fade-up">
        <img
          src="/src/png/my_pic_2.jpg"
          alt="Arslan's Image"
        />
      </div>
    </div>
  </div>
</section>

<style>
/* About section styles */
.about-section-container {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 200px;
}

.about-section {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-heading {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-heading-article {
  font-size: 3rem;
  font-family: 'Fira Code', monospace;
  font-weight: 500;
  background-image: linear-gradient(90deg, var(--static-heading-gradient-blue), var(--static-heading-gradient-pink));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sectionHeadingP {
  width: 300px;
  height: 1px;
  background-image: linear-gradient(90deg, var(--static-heading-gradient-blue), var(--static-heading-gradient-pink));
}

.info-dp-section {
  width: 100%;
  display: flex;
  margin-top: 30px;
}

.about-info {
  width: 60%;
  display: flex;
  flex-direction: column;
}

.about-info p {
  color: var(--color-white);
  line-height: 25px;
  font-weight: 400;
  font-size: 2rem;
}

.dp {
  width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  transition-duration: .5s;
}

.dp img {
  width: 300px;
}

.dp::before {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: -2;
  transition-duration: .5s;
  background-color: transparent;
  box-shadow: 2px 2px 0 inset #8000ff, -2px -2px 0 inset transparent;
}

.dp::after {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: -2;
  transition-duration: .5s;
  background-color: transparent;
  box-shadow: 2px 2px 0 inset transparent, -2px -2px 0 inset #8000ff;
}

.dp:hover::after {
  transform: translate(20px, 20px);
  transition-duration: .5s;
}

.dp:hover::before {
  transform: translate(-20px, -20px);
  transition-duration: .5s;
}

.resume-btn {
  margin-top: 25px;
  align-items: center;
  transition-duration: .3s;
  display: flex;
  justify-content: flex-start;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, .199);
  background: linear-gradient(82.3deg, #965de9 10.8%, #6358ee 94.3%);
  position: relative;
  background-color: transparent;
  overflow: hidden;
}

.sign {
  width: 100%;
  align-items: center;
  transition-duration: .3s;
  display: flex;
  justify-content: center;
}

.sign svg {
  width: 17px;
}

.sign svg path {
  fill: white;
}

.text {
  position: absolute;
  right: 0;
  width: 0%;
  opacity: 0;
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  transition-duration: .3s;
}

.resume-btn:hover {
  width: 130px;
  border-radius: 40px;
  transition-duration: .3s;
}

.resume-btn:hover .sign {
  width: 30%;
  transition-duration: .3s;
  padding-left: 20px;
}

.resume-btn:hover .text {
  opacity: 1;
  width: 70%;
  transition-duration: .3s;
  padding-right: 10px;
}

.resume-btn:active {
  transform: translate(2px, 2px);
}

/* Responsive styles */
@media screen and (max-width: 1200px) {
  .about-section {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 998px) {
  .info-dp-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 30px;
  }

  .about-info {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .dp {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .dp::after,
  .dp::before {
    display: none;
  }
}

@media screen and (max-width: 430px) {
  .about-section {
    width: 80%;
  }
}

@media screen and (max-width: 375px) {
  .dp img {
    width: 200px;
  }
}
</style>