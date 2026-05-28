<script setup lang="ts">
// ============================================================
// LANDING PROJECTS — Grid preview (3 terbaru, tanpa UPageSection)
// ============================================================

import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: projects } = await useAsyncData('landing-projects', () =>
  queryCollection('projects').order('date', 'DESC').limit(3).all()
)
</script>

<template>
  <div>
    <div class="flex items-end justify-between mb-6">
      <Motion
        :initial="{ opacity: 0, transform: 'translateY(20px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ duration: 0.5 }"
        :in-view-options="{ once: true }"
      >
        <h2 class="text-xl font-bold tracking-tight text-highlighted sm:text-2xl">
          Featured Projects
        </h2>
        <p class="mt-1 text-sm text-muted">
          Some highlights from my recent work
        </p>
      </Motion>

      <Motion
        :initial="{ opacity: 0 }"
        :while-in-view="{ opacity: 1 }"
        :transition="{ delay: 0.3 }"
        :in-view-options="{ once: true }"
      >
        <UButton
          to="/projects"
          label="View All"
          variant="ghost"
          color="primary"
          size="sm"
          trailing-icon="i-lucide-arrow-right"
        />
      </Motion>
    </div>

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <Motion
        v-for="(project, index) in projects"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(20px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.1 * index, duration: 0.4 }"
        :in-view-options="{ once: true }"
      >
        <NuxtLink
          :to="project.url"
          class="group block overflow-hidden rounded-xl border border-default bg-elevated/40 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
        >
          <!-- Image -->
          <div class="relative overflow-hidden aspect-video">
            <img
              :src="project.image"
              :alt="project.title"
              class="size-full object-cover transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <!-- Content -->
          <div class="p-4">
            <div class="flex flex-wrap gap-1 mb-2">
              <span
                v-for="tag in project.tags?.slice(0, 3)"
                :key="tag"
                class="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
              >
                {{ tag }}
              </span>
            </div>
            <h3 class="text-sm font-semibold text-highlighted group-hover:text-primary transition-colors">
              {{ project.title }}
            </h3>
            <p class="mt-1 text-xs text-muted line-clamp-2">
              {{ project.description }}
            </p>
            <div v-if="project.github" class="mt-3 flex justify-end">
              <a
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1.5 text-[10px] text-muted hover:text-highlighted transition-colors z-10"
                @click.stop
              >
                <UIcon name="i-simple-icons-github" class="size-3.5" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </NuxtLink>
      </Motion>
    </div>
  </div>
</template>
