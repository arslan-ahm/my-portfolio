<script lang="ts">
  import { onMount } from 'svelte';

  let eyeElement: HTMLElement;
  let pupilElement: HTMLElement;
  let headingElement: HTMLElement;

  function handleMouseMove(event: MouseEvent) {
    if (!eyeElement || !pupilElement) return;

    const eye = eyeElement.getBoundingClientRect();
    const eyeCenterX = eye.left + eye.width / 2;
    const eyeCenterY = eye.top + eye.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const deltaX = mouseX - eyeCenterX;
    const deltaY = mouseY - eyeCenterY;

    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 15);

    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;

    pupilElement.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
  }

  function handleEyeClick() {
    if (headingElement) {
      headingElement.classList.add('jello-horizontal');
      setTimeout(() => {
        headingElement.classList.remove('jello-horizontal');
      }, 900);
    }
  }

  onMount(() => {
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<main class="main-content" id="home">
  <div class="content">
    <div class="eye" bind:this={eyeElement} on:click={handleEyeClick}>
      <div class="pupil" bind:this={pupilElement}></div>
    </div>
    
    <h1 bind:this={headingElement}>
      Hello, I'm <span>Vinod Jangid</span>
    </h1>
    
    <p class="subtitle">Full Stack Developer</p>
    
    <p class="description">
      I create beautiful and functional web applications using modern technologies. 
      Passionate about clean code, user experience, and innovative solutions.
    </p>
    
    <div class="tech-stack">
      <h3>Tech Stack</h3>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>Git</li>
      </ul>
    </div>
  </div>
</main>
