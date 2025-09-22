<script lang="ts">
  import { TECH_STACKS_LIST } from "~/constants/profile";
</script>

<section class="skills-section-container" id="skills">
  <div class="skills-section">
    <div class="section-heading" data-aos="fade-up">
      <h2
        class="section-heading-article"
        aria-label="skills heading"
      >
        &#60;/Skills&#62;
      </h2>
      <p class="sectionHeadingP"></p>
    </div>

    <div class="frontend-dev-section">
      <h3
        class="frontend-dev-heading"
        data-aos="fade-up"
        aria-label="As a frontend a developer these are the skills i have"
      >
        Tech Stack
      </h3>
      <ul class="tech-stack-wrapper">
        {#each TECH_STACKS_LIST as tech}
          <li class="tech-stack-box" data-aos="fade-up">
            <img
              src={tech.logo}
              alt="{tech.name} skill"
              class="tech-stack-logo {tech.needInvert ? 'needtobeinvert' : ''}"
            />
            <span class="tooltip">{tech.tooltip}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style>
/* Skills section styles */
.skills-section-container {
  padding-top: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skills-section {
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

.frontend-dev-section {
  width: 100%;
  margin-top: 50px;
}

.frontend-dev-heading {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 900;
  height: 100px;
  letter-spacing: 5px;
  background-image: linear-gradient(90deg, var(--static-heading-gradient-blue), var(--static-heading-gradient-pink));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tech-stack-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 50px;
}

.tech-stack-box {
  width: 160px;
  height: 160px;
  background-image: linear-gradient(to bottom right, var(--tech-stack-box-first-color), var(--tech-stack-box-second-color));
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid var(--tech-stack-box-border-color);
  position: relative;
}

.tech-stack-box img {
  width: 80%;
}

.tech-stack-box:hover .tooltip {
  opacity: 1;
  transition-duration: .3s;
}

.tooltip {
  position: absolute;
  top: -20px;
  opacity: 0;
  background: linear-gradient(to bottom right, var(--tech-stack-box-first-color), var(--tech-stack-box-second-color));
  border: 1px solid var(--tech-stack-box-border-color);
  padding: 5px 10px;
  border-radius: 5px;
  align-items: center;
  display: flex;
  justify-content: center;
  transition-duration: .2s;
  pointer-events: none;
  letter-spacing: .5px;
  font-size: 1.6rem;
  backdrop-filter: blur(5px);
  font-weight: 500;
  color: var(--color-white);
}

.light-mode .tooltip {
  color: var(--color-black);
}

/* Responsive styles */
@media screen and (max-width: 1200px) {
  .skills-section {
    width: 80%;
  }
}

@media screen and (max-width: 998px) {
  /* Responsive handled by media queries */
}

@media screen and (max-width: 768px) {
  /* Responsive handled by media queries */
}

@media screen and (max-width: 500px) {
  .tech-stack-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .tech-stack-box {
    width: 100%;
    height: calc(76vw/2);
  }
}

@media screen and (max-width: 430px) {
  .skills-section {
    width: 80%;
  }
}
</style>