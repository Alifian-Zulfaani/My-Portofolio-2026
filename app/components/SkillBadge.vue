<script setup lang="ts">
// ============================================================
// SKILL BADGE — Komponen baru (tidak ada di source)
// Menampilkan skill tags dengan gradient background
// Dipakai di halaman About
// ============================================================

defineProps<{
  label: string
}>()
</script>

<template>
  <span class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary ring-1 ring-primary/20 transition-all duration-200 hover:bg-primary/20 hover:ring-primary/40">
    {{ label }}
  </span>
</template>
