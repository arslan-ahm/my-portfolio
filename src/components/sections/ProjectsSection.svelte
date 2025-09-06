<script lang="ts">
  const projects = [
    {
      id: 'project-box2',
      title: 'Pexelicons',
      description: 'Pexelicons: A world of personalized file folder icons to transform your PC into a reflection of your style.',
      favicon: '/src/webp/pexelicon-favicon.webp',
      image: '/src/webp/Group 76.webp',
      githubUrl: 'https://github.com/vinodjangid07/Pexelicons',
      liveUrl: 'https://vinodjangid07.github.io/Pexelicons/',
      hasGithub: true
    },
    {
      id: 'project-box5',
      title: 'ComicKaze',
      description: 'ComicKaze is an ecommerce website built on wordpress by me as a freelancer. It specializes in selling anime merchandise.',
      favicon: '/src/webp/cropped-1086600-192x192.webp',
      image: '/src/webp/comickaze-preview.webp',
      liveUrl: 'https://comickaze.in',
      hasGithub: false
    },
    {
      id: 'project-box2',
      title: 'Aquaregia',
      description: 'A website for University Maharaja College fest "Aquaregia" for event registrations.',
      favicon: '/src/svg/aquaregia-favicon.svg',
      image: '/src/webp/Aquaregia-project.webp',
      githubUrl: 'https://github.com/vinodjangid07/Aquaregia',
      liveUrl: 'https://vinodjangid07.github.io/Aquaregia/',
      hasGithub: true,
      isAquaregia: true
    },
    {
      id: 'project-box4',
      title: 'QR Generator',
      description: 'A webpage to make a QR Code from text using API.',
      favicon: '/src/webp/qr-favicon.webp',
      image: '/src/webp/QRgeneratorProject.webp',
      githubUrl: 'https://github.com/vinodjangid07/QR-Generator',
      liveUrl: 'https://vinodjangid07.github.io/QR-Generator/',
      hasGithub: true
    },
    {
      id: 'project-box3',
      title: 'React Netflix Clone',
      description: 'A webpage to categorize the shows to redirect user to watch the show.',
      favicon: '/src/ico/netflixfavicon.ico',
      image: '/src/webp/NetflixCloneProject.webp',
      githubUrl: 'https://github.com/vinodjangid07/Netflix-clone',
      liveUrl: 'https://react-project-20.netlify.app/',
      hasGithub: true
    },
    {
      id: 'project-box1',
      title: 'AXOCEAN',
      description: 'E-commerce website frontend work to choose people their favorite design of product and redirect to flipkart shopping site.',
      favicon: '/src/webp/axocean-favicon.webp',
      image: '/src/webp/AXOCEAN-project.webp',
      githubUrl: 'https://github.com/vinodjangid07/AXOCEAN',
      liveUrl: 'https://vinodjangid07.github.io/AXOCEAN/',
      hasGithub: true
    }
  ];
</script>

<section class="projects-section-container" id="projects">
  <div class="projects-section-div">
    <div class="section-heading" data-aos="fade-up">
      <h2
        class="section-heading-article"
        aria-label="My projects starts from here"
      >
        &#60;/Projects&#62;
      </h2>
      <p class="sectionHeadingP"></p>
    </div>
    
    <div class="project-boxes-div">
      {#each projects as project}
        <div data-aos="fade-up" class="project-box-wrapper">
          <div class="project-box {project.id}" id={project.id}>
            <div class="info-div">
              <img
                src={project.favicon}
                alt="{project.title} website favicon"
                class="faviconforProject {project.isAquaregia ? 'faviconforProjectAquaregia' : ''}"
              />
              <article class="ProjectHeading">{project.title}</article>
              <p class="ProjectDescription">
                {project.description}
              </p>
              <div class="project-buttons">
                {#if project.hasGithub}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    class="github-redirect"
                    aria-label="Visit {project.title} on GitHub"
                  >
                    <img
                      src="/src/svg/github.svg"
                      alt="github redirect button"
                    />
                  </a>
                {/if}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  class="cta"
                  aria-label="Visit {project.title} Live"
                >
                  <span>Live view</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div class="image-div">
              <img
                src={project.image}
                alt="{project.title} website preview image"
              />
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
/* Projects section styles */
.projects-section-container {
  padding: 150px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.projects-section-div {
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

.project-boxes-div {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px;
}

.project-box-wrapper {
  width: 100%;
}

.project-box {
  width: 100%;
  height: 400px;
  background-image: linear-gradient(to bottom right, var(--tech-stack-box-first-color), var(--tech-stack-box-second-color));
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition-duration: .3s;
  border-radius: 30px;
  border: 1px solid var(--tech-stack-box-border-color);
  position: relative;
  overflow: hidden;
}

.info-div {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0 40px;
}

.faviconforProject {
  width: 30px;
  border-radius: 50%;
}

.faviconforProjectAquaregia {
  width: 20px;
}

.image-div {
  width: 50%;
  height: 100%;
  padding-top: 70px;
  padding-left: 10px;
  overflow: hidden;
}

.image-div img {
  height: 100%;
  border-top-left-radius: 30px;
}

.ProjectHeading {
  color: var(--color-white);
  font-size: 3.4rem;
  font-weight: 700;
}

.ProjectDescription {
  color: gray;
  font-size: 1.7rem;
  font-weight: 400;
}

.project-buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}

.github-redirect {
  width: 50px;
  text-decoration: none;
}

.github-redirect img {
  width: 45px;
  height: auto;
  transition: .3s;
  filter: brightness(2);
}

.github-redirect:hover img {
  filter: brightness(4);
}

.cta {
  padding: 12px 18px;
  transition: .2s;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  text-decoration: none;
}

.cta::before {
  content: "";
  position: absolute;
  left: 0;
  display: block;
  border-radius: 50px;
  background: #2b2f4e;
  width: 45px;
  height: 45px;
  transition: .3s;
}

.cta:hover:before {
  width: 100%;
}

.cta span {
  position: relative;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: .05em;
  color: var(--color-light-blue);
}

.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: var(--color-light-blue);
  stroke-width: 2;
  transform: translateX(-5px);
  transition: .3s;
}

.cta:hover span {
  color: #fff;
}

.cta:hover svg {
  stroke: white;
  transform: translateX(0);
}

.cta:active {
  transform: scale(.95);
}

/* Responsive styles */
@media screen and (max-width: 1200px) {
  .projects-section-div {
    width: 80%;
  }
}

@media screen and (max-width: 998px) {
  .projects-section-div {
    width: 80%;
  }

  .project-box {
    flex-direction: column;
    height: 800px;
  }

  .info-div {
    width: 100%;
    height: 50%;
  }

  .image-div {
    width: 100%;
    height: 50%;
    padding: 0 0 0 80px;
  }
}

@media screen and (max-width: 768px) {
  .project-boxes-div {
    padding: 40px 0;
  }
}

@media screen and (max-width: 500px) {
  .project-box {
    height: 550px;
  }

  .info-div {
    height: 60%;
  }

  .image-div {
    height: 40%;
    padding-left: 50px;
  }

  .image-div img {
    border-top-left-radius: 10px;
  }
}

@media screen and (max-width: 430px) {
  .projects-section-div {
    width: 80%;
  }

  .info-div {
    padding: 0 30px;
  }
}
</style>