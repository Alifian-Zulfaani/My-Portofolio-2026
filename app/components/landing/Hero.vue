<script setup lang="ts">
// ============================================================
// LANDING HERO — Split-screen layout (FIXED)
// Teks di kiri | Foto profil di kanan (pakai NuxtImg, bukan UColorModeAvatar)
// Spacing dikurangi, marquee dirapikan
// ============================================================

import type { IndexCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <section class="relative overflow-hidden">
    <UContainer class="py-16 sm:py-20 lg:py-28">
      <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <!-- Left: Text Content -->
        <div class="order-2 lg:order-1">
          <Motion
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :animate="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ duration: 0.5 }"
          >
            <p class="text-sm font-medium text-primary mb-2">
              👋 Hello, I'm
            </p>
          </Motion>

          <Motion
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :animate="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ duration: 0.5, delay: 0.1 }"
          >
            <h1 class="text-3xl font-bold tracking-tight text-highlighted sm:text-4xl lg:text-5xl leading-tight">
              {{ global.name }}
              <span class="block text-primary">{{ global.role }}</span>
            </h1>
          </Motion>

          <Motion
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :animate="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ duration: 0.5, delay: 0.2 }"
          >
            <p class="mt-4 text-base text-muted leading-relaxed max-w-md sm:text-lg">
              {{ page.description }}
            </p>
          </Motion>

          <!-- CTA Buttons -->
          <Motion
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :animate="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <div
              v-if="page.hero.links"
              class="mt-6 flex flex-wrap items-center gap-3"
            >
              <UButton
                v-bind="page.hero.links[0]"
                size="lg"
              />
              <UButton
                :color="global.available ? 'success' : 'error'"
                variant="soft"
                size="lg"
                class="gap-2"
                :to="global.available ? global.meetingLink : ''"
                :label="global.available ? 'Available for hire' : 'Not available'"
              >
                <template #leading>
                  <span class="relative flex size-2">
                    <span
                      class="absolute inline-flex size-full rounded-full opacity-75"
                      :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
                    />
                    <span
                      class="relative inline-flex size-2 scale-90 rounded-full"
                      :class="global.available ? 'bg-success' : 'bg-error'"
                    />
                  </span>
                </template>
              </UButton>
            </div>
          </Motion>

          <!-- Social Links -->
          <Motion
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :animate="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ duration: 0.5, delay: 0.4 }"
          >
            <div class="mt-5 flex items-center gap-1">
              <UButton
                v-for="(link, index) of footer?.links"
                :key="index"
                v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
              />
            </div>
          </Motion>
        </div>

        <!-- Right: Profile Image (using NuxtImg for reliability) -->
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
          <Motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.6, delay: 0.2 }"
          >
            <div class="relative">
              <!-- Gradient glow behind image -->
              <div class="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-xl" />
              <img
                :src="global.picture?.light"
                :alt="global.picture?.alt"
                width="288"
                height="288"
                loading="eager"
                fetchpriority="high"
                class="relative size-52 sm:size-64 lg:size-72 rounded-3xl object-cover shadow-2xl ring-2 ring-default/50 ring-offset-4 ring-offset-bg"
              />
            </div>
          </Motion>
        </div>
      </div>
    </UContainer>

    <!-- Marquee Images -->
    <Motion
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 0.8, delay: 0.5 }"
    >
      <UMarquee
        pause-on-hover
        class="py-4 [--duration:40s] border-y border-default/50"
      >
        <img
          v-for="(img, index) in page.hero.images"
          :key="index"
          width="180"
          height="180"
          loading="lazy"
          class="rounded-lg aspect-square object-cover mx-1.5"
          :class="index % 2 === 0 ? '-rotate-1' : 'rotate-1'"
          v-bind="img"
        />
      </UMarquee>
    </Motion>
  </section>
</template>
