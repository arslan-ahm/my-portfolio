<script lang="ts">
  import { onMount } from 'svelte';
  import { AUDIO } from '~/constants/assets';

  let isPlaying = false;
  let audioElement: HTMLAudioElement;

  function toggleAudio() {
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play().catch(console.error);
    }
    isPlaying = !isPlaying;
  }

  onMount(() => {
    // Create audio element
    audioElement = new Audio(AUDIO.BACKGROUND_MUSIC);
    audioElement.loop = true;
    audioElement.volume = 0.3;

    audioElement.addEventListener('play', () => {
      isPlaying = true;
    });

    audioElement.addEventListener('pause', () => {
      isPlaying = false;
    });

    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  });
</script>

<div class="audio-controls">
  <button on:click={toggleAudio} title={isPlaying ? 'Pause Music' : 'Play Music'}>
    {#if isPlaying}
      ⏸️
    {:else}
      ▶️
    {/if}
  </button>
</div>
