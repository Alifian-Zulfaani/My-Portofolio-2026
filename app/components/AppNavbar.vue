<script setup lang="ts">
// ============================================================
// APP NAVBAR — Sticky full-width navigation bar
// PERBEDAAN dari source: Bukan floating pill, tapi full-width sticky
// Layout: Logo kiri | Nav links tengah | Dark mode kanan
// Mobile: Hamburger menu
// ============================================================

import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()

const { global } = useAppConfig()
const isMobileMenuOpen = ref(false)
const route = useRoute()

// Tutup mobile menu saat navigasi
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-default bg-default/80 backdrop-blur-xl">
    <UContainer>
      <div class="flex h-16 items-center justify-between">
        <!-- Logo / Brand -->
        <NuxtLink
          to="/"
          class="flex items-center gap-2 font-semibold text-highlighted transition-colors hover:text-primary"
        >
          <UIcon
            name="i-lucide-code-2"
            class="size-5 text-primary"
          />
          <span class="hidden sm:inline">{{ global.name }}</span>
          <span class="sm:hidden">AZ</span>
        </NuxtLink>

        <!-- Desktop Navigation (center) -->
        <nav class="hidden md:flex items-center">
          <UNavigationMenu
            :items="links"
            variant="link"
            color="neutral"
            :ui="{
              link: 'px-3 py-1.5',
              linkLeadingIcon: 'hidden'
            }"
          />
        </nav>

        <!-- Right side: Dark mode + Mobile toggle -->
        <div class="flex items-center gap-1">
          <ColorModeButton />

          <!-- Mobile hamburger -->
          <UButton
            class="md:hidden"
            :icon="isMobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            color="neutral"
            variant="ghost"
            size="sm"
            aria-label="Toggle menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          />
        </div>
      </div>

      <!-- Mobile Menu Drawer -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden border-t border-default pb-4 pt-2"
        >
          <nav class="flex flex-col gap-1">
            <NuxtLink
              v-for="link in links"
              :key="link.label"
              :to="link.to"
              class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-elevated hover:text-highlighted"
              active-class="bg-elevated/80 text-primary"
            >
              <UIcon
                v-if="link.icon"
                :name="link.icon"
                class="size-4"
              />
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>
      </Transition>
    </UContainer>
  </header>
</template>
