<script setup lang="ts">
// ============================================================
// LANDING FAQ — Flat accordion (tanpa UPageSection)
// ============================================================

import type { IndexCollectionItem } from '@nuxt/content'

const props = defineProps<{
  page: IndexCollectionItem
}>()

// Flatten semua FAQ dari semua kategori jadi satu list
const allQuestions = computed(() => {
  return props.page.faq?.categories.flatMap(cat => cat.questions) || []
})
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <Motion
      :initial="{ opacity: 0, transform: 'translateY(20px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ duration: 0.5 }"
      :in-view-options="{ once: true }"
      class="text-center mb-6"
    >
      <h2 class="text-xl font-bold tracking-tight text-highlighted sm:text-2xl">
        {{ page.faq.title }}
      </h2>
      <p class="mt-1 text-sm text-muted">
        {{ page.faq.description }}
      </p>
    </Motion>

    <Motion
      :initial="{ opacity: 0, transform: 'translateY(20px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ delay: 0.2, duration: 0.5 }"
      :in-view-options="{ once: true }"
    >
      <UAccordion
        trailing-icon="lucide:plus"
        :items="allQuestions"
        :unmount-on-hide="false"
        :ui="{
          item: 'border-none',
          trigger: 'mb-2 border-0 group px-4 py-3 transform-gpu rounded-lg bg-elevated/50 will-change-transform hover:bg-elevated/80 text-sm transition-colors',
          trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135 text-sm text-muted transition-transform'
        }"
      >
        <template #body="{ item }">
          <MDC
            :value="item.content"
            unwrap="p"
            class="px-4 pb-2 text-sm text-muted leading-relaxed"
          />
        </template>
      </UAccordion>
    </Motion>
  </div>
</template>
