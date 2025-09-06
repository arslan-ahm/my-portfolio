<script lang="ts">
  import { onMount } from 'svelte';

  let isOpen = false;
  let audioVolume = 50;
  let animationSpeed = 1;

  function toggleSettings() {
    isOpen = !isOpen;
  }

  function resetSettings() {
    audioVolume = 50;
    animationSpeed = 1;
  }

  function handleVolumeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    audioVolume = parseInt(target.value);
  }

  function handleSpeedChange(event: Event) {
    const target = event.target as HTMLInputElement;
    animationSpeed = parseFloat(target.value);
    
    // Update CSS animation duration
    document.documentElement.style.setProperty('--animation-speed', `${2 / animationSpeed}s`);
  }

  onMount(() => {
    document.documentElement.style.setProperty('--animation-speed', `${2 / animationSpeed}s`);
  });
</script>

<div class={`settings ${isOpen ? 'open' : ''}`}>
  <button class="settings-toggle" on:click={toggleSettings}>
    ⚙️
  </button>
  
  <h3>Settings</h3>
  
  <div class="setting-item">
    <label for="volume">Audio Volume: {audioVolume}%</label>
    <input 
      type="range" 
      id="volume" 
      min="0" 
      max="100" 
      value={audioVolume}
      on:input={handleVolumeChange}
    />
  </div>
  
  <div class="setting-item">
    <label for="speed">Animation Speed: {animationSpeed}x</label>
    <input 
      type="range" 
      id="speed" 
      min="0.5" 
      max="2" 
      step="0.1" 
      value={animationSpeed}
      on:input={handleSpeedChange}
    />
  </div>
  
  <div class="setting-item">
    <button on:click={resetSettings}>Reset to Default</button>
  </div>
</div>
