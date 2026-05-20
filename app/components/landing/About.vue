<script setup lang="ts">
// ============================================================
// LANDING ABOUT — Compact text section (tanpa UPageSection)
// Dipakai side-by-side dengan Experience di homepage
// ============================================================

import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <Motion
    :initial="{ opacity: 0, transform: 'translateY(20px)' }"
    :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
    :transition="{ duration: 0.5 }"
    :in-view-options="{ once: true }"
  >
    <div>
      <h2 class="text-xl font-bold tracking-tight text-highlighted sm:text-2xl">
        {{ page.about.title }}
      </h2>
      <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        {{ page.about.description }}
      </p>
    </div>
  </Motion>
</template>
