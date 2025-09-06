<script lang="ts">
  import { onMount } from 'svelte';
  import Heading from '~/components/Heading/Heading.svelte';
  import Text from '~/components/Text/Text.svelte';
  import Button from '~/components/Button/Button.svelte';
  import config from '~/config.json';

  let mounted = false;
  let form: HTMLFormElement;
  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';

  onMount(() => {
    mounted = true;
  });

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    isSubmitting = true;
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    isSubmitting = false;
    submitStatus = 'success';
    
    // Reset form
    form.reset();
    
    // Reset status after 3 seconds
    setTimeout(() => {
      submitStatus = 'idle';
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: `https://github.com/${config.github}`,
      icon: 'github'
    },
    {
      name: 'Figma',
      url: `https://figma.com/${config.figma}`,
      icon: 'figma'
    },
    {
      name: 'Bluesky',
      url: `https://bsky.app/profile/${config.bluesky}`,
      icon: 'bluesky'
    }
  ];
</script>

<section id="contact" class="py-20 bg-background">
  <div class="container mx-auto px-outer">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class={`text-center mb-16 transition-all duration-l ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Heading level={2} size="h1" className="mb-6">
          Let's Work Together
        </Heading>
        <Text size="body-l" className="max-w-2xl mx-auto text-textBody">
          Have a project in mind? I'd love to hear about it. 
          Send me a message and let's create something amazing together.
        </Text>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Contact Form -->
        <div class={`transition-all duration-l delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <form bind:this={form} on:submit={handleSubmit} class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-textTitle mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                         text-text placeholder-textBody focus:border-primary focus:outline-none 
                         focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-textTitle mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                         text-text placeholder-textBody focus:border-primary focus:outline-none 
                         focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-textTitle mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                       text-text placeholder-textBody focus:border-primary focus:outline-none 
                       focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-textTitle mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                       text-text placeholder-textBody focus:border-primary focus:outline-none 
                       focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Project Collaboration"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-textTitle mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                       text-text placeholder-textBody focus:border-primary focus:outline-none 
                       focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              className="w-full"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            {#if submitStatus === 'success'}
              <div class="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <Text size="body-s" className="text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </Text>
              </div>
            {/if}
          </form>
        </div>

        <!-- Contact Info -->
        <div class={`transition-all duration-l delay-400 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div class="space-y-8">
            <div>
              <Heading level={3} size="h4" className="mb-4">
                Get in Touch
              </Heading>
              <Text size="body-m" className="text-textBody">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology.
              </Text>
            </div>

            <div>
              <Heading level={4} size="h5" className="mb-4">
                Follow Me
              </Heading>
              <div class="flex space-x-4">
                {#each socialLinks as link}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center w-12 h-12 bg-white/5 
                           border border-white/10 rounded-lg hover:border-primary/50 
                           hover:bg-primary/10 transition-all duration-m group"
                  >
                    <span class="text-textBody group-hover:text-primary transition-colors">
                      {link.name.charAt(0)}
                    </span>
                  </a>
                {/each}
              </div>
            </div>

            <div class="p-6 bg-white/5 rounded-xl border border-white/10">
              <Heading level={4} size="h5" className="mb-4">
                Available for
              </Heading>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <Text size="body-s">Frontend Development</Text>
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <Text size="body-s">Full Stack Projects</Text>
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <Text size="body-s">Mobile App Development</Text>
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <Text size="body-s">Blockchain Solutions</Text>
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <Text size="body-s">Technical Consulting</Text>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
