<script setup lang="ts">
// ============================================================
// APP.VUE — Entry point utama
// Setup: SEO global, color mode, navigation data, search
// Pattern sama persis dengan source — useAsyncData + queryCollection
// ============================================================

const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark" ? "#0f172a" : "white",
);

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
  ],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  titleTemplate: "%s - Alifian Zulfaani Portfolio",
  ogImage: "/hero/alif.png",
  twitterCard: "summary_large_image",
});

// Fetch navigation & search data untuk blog
const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData(
    "navigation",
    () => {
      return Promise.all([queryCollectionNavigation("blog")]);
    },
    {
      transform: (data) => data.flat(),
    },
  ),
  useLazyAsyncData(
    "search",
    () => {
      return Promise.all([queryCollectionSearchSections("blog")]);
    },
    {
      server: false,
      transform: (data) => data.flat(),
    },
  ),
]);
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>

    <!-- Command palette search (Ctrl+K) -->
    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        shortcut="meta_k"
        :links="navLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
