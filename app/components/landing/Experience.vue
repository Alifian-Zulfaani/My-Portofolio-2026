<script setup lang="ts">
// ============================================================
// LANDING EXPERIENCE — Compact vertical timeline (tanpa UPageSection)
// Dipakai side-by-side dengan About di homepage
// ============================================================

import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <div>
    <Motion
      :initial="{ opacity: 0, transform: 'translateY(20px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ duration: 0.5 }"
      :in-view-options="{ once: true }"
    >
      <h2 class="text-xl font-bold tracking-tight text-highlighted sm:text-2xl">
        {{ page.experience.title }}
      </h2>
    </Motion>

    <!-- Timeline -->
    <div class="mt-5 relative">
      <!-- Vertical line -->
      <div class="absolute left-3.5 top-0 bottom-0 w-px bg-default" />

      <div class="space-y-4">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateX(-20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateX(0)' }"
          :transition="{ delay: 0.15 * index, duration: 0.4 }"
          :in-view-options="{ once: true }"
          class="relative pl-10"
        >
          <!-- Timeline dot -->
          <div
            class="absolute left-2 top-3 size-3 rounded-full ring-3 ring-bg"
            :style="{ backgroundColor: experience.company.color }"
          />

          <!-- Content card -->
          <div class="rounded-lg border border-default bg-elevated/40 px-4 py-3 transition-colors hover:bg-elevated/70">
            <p class="text-[11px] font-medium text-muted mb-0.5">
              {{ experience.date }}
            </p>
            <p class="text-sm font-medium text-highlighted">
              {{ experience.position }}
            </p>
            <ULink
              :to="experience.company.url"
              target="_blank"
              class="mt-0.5 inline-flex items-center gap-1 text-xs transition-colors hover:opacity-80"
              :style="{ color: experience.company.color }"
            >
              <UIcon :name="experience.company.logo" class="size-3.5" />
              <span class="font-semibold">{{ experience.company.name }}</span>
            </ULink>
          </div>
        </Motion>
      </div>
    </div>
  </div>
</template>
