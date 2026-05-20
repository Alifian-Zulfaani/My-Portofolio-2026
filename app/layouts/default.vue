<script setup lang="ts">
// ============================================================
// DEFAULT LAYOUT — Wrapper untuk semua halaman
// PERBEDAAN dari source: Full-width (bukan contained border-x)
// Navbar sticky di atas, content di tengah, footer di bawah
// ============================================================
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Sticky Navbar -->
    <AppNavbar :links="navLinks" />

    <!-- Page Content -->
    <div class="flex-1">
      <slot />
    </div>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>
