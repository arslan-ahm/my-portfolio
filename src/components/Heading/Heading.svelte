<script lang="ts">
  import { cn } from '~/utils';

  export let level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
  export let size: 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | undefined = undefined;
  export let className = '';
  export let weight: 'regular' | 'medium' | 'bold' = 'medium';

  $: actualSize = size || `h${level}` as keyof typeof sizeClasses;
  
  const sizeClasses = {
    h0: 'text-h0',
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
    h5: 'text-h5',
  };

  const weightClasses = {
    regular: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  $: headingClasses = cn(
    'leading-title text-textTitle',
    sizeClasses[actualSize],
    weightClasses[weight],
    className
  );

  $: Tag = `h${level}` as keyof HTMLElementTagNameMap;
</script>

<svelte:element this={Tag} class={headingClasses}>
  <slot />
</svelte:element>
