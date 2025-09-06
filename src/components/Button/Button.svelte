<script lang="ts">
  import { cn } from '~/utils';

  export let variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let disabled = false;
  export let href: string | undefined = undefined;
  export let className = '';
  export let loading = false;

  $: baseClasses = cn(
    'inline-flex items-center justify-center font-medium transition-all duration-m ease-fastout-slowin',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    {
      // Variants
      'bg-primary text-black hover:bg-opacity-90': variant === 'primary',
      'bg-transparent border border-primary text-primary hover:bg-primary hover:text-black': variant === 'secondary',
      'bg-transparent text-textBody hover:text-text': variant === 'ghost',
      
      // Sizes
      'px-3 py-2 text-sm': size === 'sm',
      'px-4 py-3 text-base': size === 'md',
      'px-6 py-4 text-lg': size === 'lg',
    },
    className
  );

  $: Tag = href ? 'a' : 'button';
</script>

<svelte:element 
  this={Tag} 
  class={baseClasses}
  {disabled}
  {href}
  on:click
  on:mouseenter
  on:mouseleave
  on:focus
  on:blur
  role="button"
  tabindex={disabled ? -1 : 0}
>
  {#if loading}
    <div class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
  {/if}
  <slot />
</svelte:element>
