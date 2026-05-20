<script setup lang="ts">
// ============================================================
// BLOG INDEX — 3-column card grid
// PERBEDAAN dari source: Card grid clean (bukan horizontal tilted images)
// Pattern tetap: useAsyncData + queryCollection
// ============================================================

const { data: page } = await useAsyncData('blog-page', () => {
  return queryCollection('pages').path('/blog').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data: posts } = await useAsyncData('blogs', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog posts not found',
    fatal: true
  })
}

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
      <UPageHero
        :title="page.title"
        :description="page.description"
        :ui="{
          title: 'mx-0! text-left',
          description: 'mx-0! text-left',
          links: 'justify-start'
        }"
      />

      <UPageSection
        :ui="{
          container: 'pt-0!'
        }"
      >
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              class="group flex flex-col overflow-hidden rounded-xl border border-default bg-elevated/40 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <!-- Image -->
              <div class="overflow-hidden aspect-video">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
              </div>

              <!-- Content -->
              <div class="flex flex-1 flex-col p-5">
                <div class="flex items-center gap-2 text-xs text-muted mb-3">
                  <span v-if="post.date">
                    {{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
                  </span>
                  <span v-if="post.minRead">• {{ post.minRead }} min read</span>
                </div>

                <h3 class="font-semibold text-highlighted group-hover:text-primary transition-colors line-clamp-2">
                  {{ post.title }}
                </h3>
                <p class="mt-2 text-sm text-muted line-clamp-2 flex-1">
                  {{ post.description }}
                </p>

                <div class="mt-4 flex items-center text-sm text-primary">
                  <span>Read article</span>
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="size-4 ml-1 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </div>
              </div>
            </NuxtLink>
          </Motion>
        </div>
      </UPageSection>
    </UContainer>
  </UPage>
</template>
