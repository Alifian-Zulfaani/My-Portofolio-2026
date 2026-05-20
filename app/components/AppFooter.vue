<script setup lang="ts">
// ============================================================
// APP FOOTER — 3-column layout
// PERBEDAAN dari source: Multi-column footer (bukan simple 2-slot)
// Kolom 1: Branding  |  Kolom 2: Quick Links  |  Kolom 3: Social
// Bottom bar: Credits
// ============================================================

const { footer, global } = useAppConfig()
</script>

<template>
  <footer class="border-t border-default bg-elevated/30">
    <UContainer>
      <!-- 3-Column Grid -->
      <div class="grid grid-cols-1 gap-8 py-12 sm:grid-cols-3">
        <!-- Col 1: Branding -->
        <div>
          <NuxtLink
            to="/"
            class="flex items-center gap-2 font-semibold text-highlighted"
          >
            <UIcon
              name="i-lucide-code-2"
              class="size-5 text-primary"
            />
            {{ global.name }}
          </NuxtLink>
          <p class="mt-3 text-sm text-muted leading-relaxed">
            Building clean, modern, and performant web experiences with passion and precision.
          </p>
        </div>

        <!-- Col 2: Quick Links -->
        <div>
          <h3 class="text-sm font-semibold text-highlighted mb-4">
            Quick Links
          </h3>
          <nav class="flex flex-col gap-2">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.label"
              :to="link.to"
              class="text-sm text-muted transition-colors hover:text-primary"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Col 3: Connect -->
        <div>
          <h3 class="text-sm font-semibold text-highlighted mb-4">
            Connect
          </h3>
          <div class="flex items-center gap-1">
            <UButton
              v-for="(link, index) of footer?.links"
              :key="index"
              v-bind="{ size: 'sm', color: 'neutral', variant: 'ghost', ...link }"
            />
          </div>
          <p class="mt-3 text-sm text-muted">
            {{ global.email }}
          </p>
        </div>
      </div>

      <!-- Bottom Bar: Credits -->
      <div class="border-t border-default py-6">
        <p class="text-center text-xs text-muted">
          {{ footer.credits }}
        </p>
      </div>
    </UContainer>
  </footer>
</template>
