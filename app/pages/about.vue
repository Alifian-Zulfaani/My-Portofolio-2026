<script setup lang="ts">
// ============================================================
// ABOUT PAGE — Full-width bio + skills grid + image gallery
// PERBEDAAN dari source: Menambahkan skills badges, layout berbeda
// Source: horizontal hero + polaroid gallery
// Clone: full-width bio card + skills + clean image grid
// ============================================================

const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <UContainer>
      <!-- Hero section with profile -->
      <UPageSection
        :ui="{
          container: 'py-16 sm:py-24'
        }"
      >
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 items-start">
          <!-- Left: Profile card -->
          <Motion
            :initial="{ opacity: 0, transform: 'translateX(-20px)' }"
            :animate="{ opacity: 1, transform: 'translateX(0)' }"
            :transition="{ duration: 0.5 }"
            class="lg:sticky lg:top-24"
          >
            <div class="rounded-2xl border border-default bg-elevated/40 p-6 text-center">
              <UColorModeAvatar
                class="mx-auto size-28 rounded-2xl ring-2 ring-default ring-offset-4 ring-offset-bg"
                :light="global.picture?.light!"
                :dark="global.picture?.dark!"
                :alt="global.picture?.alt!"
              />
              <h1 class="mt-4 text-xl font-bold text-highlighted">
                {{ global.name }}
              </h1>
              <p class="text-sm text-muted mt-1">
                {{ global.role }}
              </p>

              <!-- Availability badge -->
              <div class="mt-4 flex items-center justify-center gap-2">
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
                <span class="text-xs font-medium" :class="global.available ? 'text-success' : 'text-error'">
                  {{ global.available ? 'Available for hire' : 'Not available' }}
                </span>
              </div>

              <!-- Contact buttons -->
              <div class="mt-6 flex flex-col gap-2">
                <UButton
                  :to="`mailto:${global.email}`"
                  label="Get in touch"
                  icon="i-lucide-mail"
                  block
                />
                <UButton
                  :to="global.meetingLink"
                  label="Book a call"
                  icon="i-lucide-calendar"
                  variant="outline"
                  color="neutral"
                  block
                />
              </div>

              <!-- Skills -->
              <div
                v-if="page.skills?.length"
                class="mt-6 pt-6 border-t border-default"
              >
                <h3 class="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                  Skills
                </h3>
                <div class="flex flex-wrap justify-center gap-1.5">
                  <SkillBadge
                    v-for="skill in page.skills"
                    :key="skill"
                    :label="skill"
                  />
                </div>
              </div>
            </div>
          </Motion>

          <!-- Right: Bio content -->
          <div class="lg:col-span-2">
            <Motion
              :initial="{ opacity: 0, transform: 'translateY(20px)' }"
              :animate="{ opacity: 1, transform: 'translateY(0)' }"
              :transition="{ duration: 0.5, delay: 0.1 }"
            >
              <h2 class="text-3xl font-bold text-highlighted mb-2">
                {{ page.title }}
              </h2>
              <p class="text-muted mb-8">
                {{ page.description }}
              </p>
            </Motion>

            <Motion
              :initial="{ opacity: 0, transform: 'translateY(20px)' }"
              :animate="{ opacity: 1, transform: 'translateY(0)' }"
              :transition="{ duration: 0.5, delay: 0.2 }"
              class="prose prose-slate dark:prose-invert max-w-none"
            >
              <MDC
                :value="page.content"
                unwrap="p"
              />
            </Motion>

            <!-- Image Gallery -->
            <Motion
              v-if="page.images?.length"
              :initial="{ opacity: 0, transform: 'translateY(20px)' }"
              :animate="{ opacity: 1, transform: 'translateY(0)' }"
              :transition="{ duration: 0.5, delay: 0.3 }"
              class="mt-12"
            >
              <h3 class="text-lg font-semibold text-highlighted mb-4">
                Gallery
              </h3>
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div
                  v-for="(image, index) in page.images"
                  :key="index"
                  class="group overflow-hidden rounded-xl border border-default"
                >
                  <img
                    :src="image.src"
                    :alt="image.alt"
                    class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  >
                  <p class="px-3 py-2 text-xs text-muted text-center">
                    {{ image.alt }}
                  </p>
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </UPageSection>
    </UContainer>
  </UPage>
</template>
