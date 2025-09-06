<script lang="ts">
  import { cn } from '~/utils';

  export let size: 'body-l' | 'body-m' | 'body-s' = 'body-m';
  export let as: 'p' | 'span' | 'div' = 'p';
  export let className = '';
  export let weight: 'regular' | 'medium' | 'bold' = 'regular';

  const sizeClasses = {
    'body-l': 'text-body-l',
    'body-m': 'text-body-m',
    'body-s': 'text-body-s',
  };

  const weightClasses = {
    regular: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  $: textClasses = cn(
    'leading-body text-textBody',
    sizeClasses[size],
    weightClasses[weight],
    className
  );

  $: Tag = as;
</script>

<svelte:element this={Tag} class={textClasses}>
  <slot />
</svelte:element>
