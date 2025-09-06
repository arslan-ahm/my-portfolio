<script lang="ts">
  import { onMount } from 'svelte';

  let cursorInner: HTMLElement;
  let cursorOuter: HTMLElement;

  function updateCursor(e: MouseEvent) {
    if (cursorInner && cursorOuter) {
      cursorInner.style.left = e.clientX + 'px';
      cursorInner.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        if (cursorOuter) {
          cursorOuter.style.left = e.clientX + 'px';
          cursorOuter.style.top = e.clientY + 'px';
        }
      }, 100);
    }
  }

  function handleMouseOver(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('clickable')) {
      cursorInner?.classList.add('grow');
      cursorOuter?.classList.add('grow');
    }
  }

  function handleMouseOut() {
    cursorInner?.classList.remove('grow');
    cursorOuter?.classList.remove('grow');
  }

  onMount(() => {
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  });
</script>

<div class="cursor-inner" bind:this={cursorInner}></div>
<div class="cursor-outer" bind:this={cursorOuter}></div>
