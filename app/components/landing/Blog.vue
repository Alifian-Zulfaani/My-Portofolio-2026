<script setup lang="ts">
// ============================================================
// LANDING BLOG — 3-column card grid preview (tanpa UPageSection)
// ============================================================

import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: posts } = await useAsyncData('index-blogs', () =>
  queryCollection('blog').order('date', 'DESC').limit(3).all()
)
if (!posts.value) {
  throw createError({ statusCode: 404, statusMessage: 'Blog posts not found', fatal: true })
}
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
          {{ page.blog.title }}
        </h2>
        <p class="mt-1 text-sm text-muted">
          {{ page.blog.description }}
        </p>
      </Motion>

      <Motion
        :initial="{ opacity: 0 }"
        :while-in-view="{ opacity: 1 }"
        :transition="{ delay: 0.3 }"
        :in-view-options="{ once: true }"
      >
        <UButton
          to="/blog"
          label="All Articles"
          variant="ghost"
          color="primary"
          size="sm"
          trailing-icon="i-lucide-arrow-right"
        />
      </Motion>
    </div>

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <Motion
        v-for="(post, index) in posts"
        :key="index"
        :initial="{ opacity: 0, transform: 'translateY(20px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.1 * index, duration: 0.4 }"
        :in-view-options="{ once: true }"
      >
        <NuxtLink
          :to="post.path"
          class="group block overflow-hidden rounded-xl border border-default bg-elevated/40 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
        >
          <div class="overflow-hidden aspect-video">
            <img
              :src="post.image"
              :alt="post.title"
              class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
          </div>

          <div class="p-4">
            <div class="flex items-center gap-2 text-[11px] text-muted mb-1.5">
              <span v-if="post.date">
                {{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
              </span>
              <span v-if="post.minRead">• {{ post.minRead }} min read</span>
            </div>
            <h3 class="text-sm font-semibold text-highlighted group-hover:text-primary transition-colors line-clamp-2">
              {{ post.title }}
            </h3>
            <p class="mt-1 text-xs text-muted line-clamp-2">
              {{ post.description }}
            </p>
          </div>
        </NuxtLink>
      </Motion>
    </div>
  </div>
</template>
