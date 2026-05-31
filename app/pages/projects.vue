<script setup lang="ts">
// ============================================================
// PROJECTS PAGE — Grid 2-column layout
// PERBEDAAN dari source: Grid cards (bukan horizontal alternating)
// Hover: scale + overlay + border glow
// Pattern tetap: useAsyncData + queryCollection
// ============================================================

const { data: page } = await useAsyncData("projects-page", () => {
  return queryCollection("pages").path("/projects").first();
});
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

const { data: projects } = await useAsyncData("projects", () => {
  return queryCollection("projects").all();
});

const { global } = useAppConfig();

const openProject = (url: string | undefined) => {
  if (url && import.meta.client) {
    window.open(url, '_blank');
  }
};

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description,
});
</script>

<template>
  <UPage v-if="page">
    <UContainer>
      <!-- Page Header -->
      <UPageHero
        :title="page.title"
        :description="page.description"
        :ui="{
          title: 'mx-0! text-left',
          description: 'mx-0! text-left',
          links: 'justify-start',
        }"
      >
        <template #links>
          <div v-if="page.links" class="flex items-center gap-2">
            <UButton
              :label="page.links[0]?.label"
              :to="global.meetingLink"
              v-bind="page.links[0]"
            />
            <UButton :to="`mailto:${global.email}`" v-bind="page.links[1]" />
          </div>
        </template>
      </UPageHero>

      <!-- Projects Grid -->
      <UPageSection
        :ui="{
          container: 'pt-0!',
        }"
      >
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Motion
            v-for="(project, index) in projects"
            :key="`${project.title}-${$route.path}`"
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ delay: 0.15 * index, duration: 0.4 }"
            :in-view-options="{ once: true }"
          >
            <div
              class="group relative block overflow-hidden rounded-xl border border-default bg-elevated/40 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 cursor-pointer"
              @click="openProject(project.url)"
            >
              <!-- Image -->
              <div class="relative overflow-hidden aspect-video">
                <img
                  :src="project.image"
                  :alt="project.title"
                  width="800"
                  height="450"
                  loading="lazy"
                  class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <!-- Year badge -->
                <span
                  class="absolute top-3 right-3 rounded-full bg-black/50 backdrop-blur-sm px-2.5 py-1 text-xs text-white font-medium"
                >
                  {{ new Date(project.date).getFullYear() }}
                </span>
              </div>

              <!-- Content -->
              <div class="p-6">
                <!-- Tags -->
                <div class="flex flex-wrap gap-1.5 mb-3">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary"
                  >
                    {{ tag }}
                  </span>
                </div>

                <h3
                  class="text-lg font-semibold text-highlighted group-hover:text-primary transition-colors"
                >
                  {{ project.title }}
                </h3>
                <p class="mt-2 text-sm text-muted line-clamp-3">
                  {{ project.description }}
                </p>

                <!-- View link -->
                <div class="mt-4 flex items-center justify-between text-sm">
                  <div class="flex items-center text-primary">
                    <span>View Project</span>
                    <UIcon
                      name="i-lucide-arrow-right"
                      class="size-4 ml-1 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-1.5 text-xs text-muted hover:text-highlighted transition-colors z-10"
                    @click.stop
                  >
                    <UIcon name="i-simple-icons-github" class="size-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </UPageSection>
    </UContainer>
  </UPage>
</template>
