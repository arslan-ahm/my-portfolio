<script lang="ts">
  import { cn } from '~/utils';
  import Heading from '~/components/Heading/Heading.svelte';
  import Text from '~/components/Text/Text.svelte';
  import Button from '~/components/Button/Button.svelte';

  export let project: {
    id: string;
    title: string;
    description: string;
    image: string;
    imagePlaceholder: string;
    imageAlt: string;
    technologies: string[];
    roles: string[];
    year: string;
    url?: string;
    repo?: string;
  };

  export let className = '';
  export let index = 0;

  let imageLoaded = false;
  let cardElement: HTMLElement;

  const handleImageLoad = () => {
    imageLoaded = true;
  };
</script>

<article 
  bind:this={cardElement}
  class={cn(
    'group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm',
    'border border-white/10 transition-all duration-l hover:border-primary/50',
    'hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2',
    className
  )}
>
  <!-- Project Image -->
  <div class="relative aspect-video overflow-hidden">
    <div class={cn(
      'absolute inset-0 bg-cover bg-center transition-all duration-l',
      'group-hover:scale-105',
      imageLoaded ? 'opacity-100' : 'opacity-0'
    )}
    style="background-image: url({project.image})"
    />
    
    <!-- Placeholder -->
    <div class={cn(
      'absolute inset-0 bg-cover bg-center blur-sm transition-all duration-l',
      imageLoaded ? 'opacity-0' : 'opacity-100'
    )}
    style="background-image: url({project.imagePlaceholder})"
    />
    
    <!-- Hidden image for loading detection -->
    <img 
      src={project.image} 
      alt={project.imageAlt}
      class="hidden"
      on:load={handleImageLoad}
    />
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    
    <!-- Year badge -->
    <div class="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm text-white">
      {project.year}
    </div>
  </div>

  <!-- Content -->
  <div class="p-6 space-y-4">
    <Heading level={3} size="h4" className="text-textTitle group-hover:text-primary transition-colors">
      {project.title}
    </Heading>
    
    <Text size="body-m" className="line-clamp-3">
      {project.description}
    </Text>
    
    <!-- Technologies -->
    <div class="flex flex-wrap gap-2">
      {#each project.technologies.slice(0, 4) as tech}
        <span class="px-2 py-1 bg-primary/10 text-primary text-sm rounded-md">
          {tech}
        </span>
      {/each}
      {#if project.technologies.length > 4}
        <span class="px-2 py-1 bg-white/5 text-textBody text-sm rounded-md">
          +{project.technologies.length - 4} more
        </span>
      {/if}
    </div>
    
    <!-- Roles -->
    <div class="space-y-2">
      <Text size="body-s" className="text-textBody font-medium">Roles:</Text>
      <Text size="body-s" className="text-textBody">
        {project.roles.join(', ')}
      </Text>
    </div>
    
    <!-- Actions -->
    <div class="flex gap-3 pt-4">
      {#if project.url}
        <Button variant="primary" size="sm" href={project.url} className="flex-1">
          View Project
        </Button>
      {/if}
      {#if project.repo}
        <Button variant="secondary" size="sm" href={project.repo} className="flex-1">
          View Code
        </Button>
      {/if}
    </div>
  </div>
</article>

<style>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
