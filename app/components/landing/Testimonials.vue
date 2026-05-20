<script setup lang="ts">
// ============================================================
// LANDING TESTIMONIALS — Bento grid (tanpa UPageSection)
// ============================================================

import type { IndexCollectionItem } from "@nuxt/content";

defineProps<{
  page: IndexCollectionItem;
}>();
</script>

<template>
  <div>
    <Motion
      :initial="{ opacity: 0, transform: 'translateY(20px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ duration: 0.5 }"
      :in-view-options="{ once: true }"
    >
      <h2
        class="text-xl font-bold tracking-tight text-highlighted sm:text-2xl mb-6"
      >
        What People Say
      </h2>
    </Motion>

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <Motion
        v-for="(testimonial, index) in page.testimonials"
        :key="index"
        :initial="{ opacity: 0, transform: 'translateY(20px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.1 * index, duration: 0.4 }"
        :in-view-options="{ once: true }"
        class="rounded-xl border border-default bg-elevated/40 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-elevated/60"
        :class="{ 'lg:col-span-2': index === 0 }"
      >
        <!-- Quote icon -->
        <UIcon name="i-lucide-quote" class="size-6 text-primary/30 mb-3" />

        <!-- Quote text -->
        <p class="text-sm leading-relaxed text-muted italic">
          "{{ testimonial.quote }}"
        </p>

        <!-- Author -->
        <div class="mt-4 flex items-center gap-3">
          <UAvatar
            v-if="testimonial.author.avatar"
            :src="testimonial.author.avatar.src"
            :alt="testimonial.author.name"
            size="sm"
          />
          <div>
            <p class="text-sm font-semibold text-highlighted">
              {{ testimonial.author.name }}
            </p>
            <p class="text-xs text-muted">
              {{ testimonial.author.description }}
            </p>
          </div>
        </div>
      </Motion>
    </div>
  </div>
</template>
