<script setup lang="ts">
// ============================================================
// HOME PAGE — Compose semua landing sections
// FIXED: Sections lebih compact, About+Experience side-by-side,
// visual dividers antar sections
// ============================================================

const { data: page } = await useAsyncData("index", () => {
  return queryCollection("index").first();
});
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description,
});
</script>

<template>
  <UPage v-if="page">
    <!-- Hero -->
    <LandingHero :page />

    <!-- About + Experience: side-by-side -->
    <section class="border-b border-default/50">
      <UContainer class="py-16 sm:py-20">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <LandingAbout :page />
          <LandingExperience :page />
        </div>
      </UContainer>
    </section>

    <!-- Projects -->
    <section class="border-b border-default/50">
      <UContainer class="py-16 sm:py-20">
        <LandingProjects :page />
      </UContainer>
    </section>

    <!-- Blog -->
    <section class="border-b border-default/50">
      <UContainer class="py-16 sm:py-20">
        <LandingBlog :page />
      </UContainer>
    </section>

    <!-- Testimonials -->
    <!-- <section class="border-b border-default/50">
      <UContainer class="py-16 sm:py-20">
        <LandingTestimonials :page />
      </UContainer>
    </section> -->

    <!-- FAQ -->
    <section>
      <UContainer class="py-16 sm:py-20">
        <LandingFAQ :page />
      </UContainer>
    </section>
  </UPage>
</template>
