/**
 * Image Optimization Script
 * Converts and compresses images for Lighthouse performance
 * 
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp'
import { readdir, stat, mkdir } from 'fs/promises'
import { join, parse, extname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const PUBLIC_DIR = join(__dirname, '..', 'public')

// ============================================================
// CONFIGURATION
// ============================================================

const configs = [
  {
    name: 'Project Screenshots',
    inputDir: join(PUBLIC_DIR, 'project'),
    outputDir: join(PUBLIC_DIR, 'project'),
    maxWidth: 800,
    quality: 80,
    format: 'webp'
  },
  {
    name: 'Hero Marquee Images',
    inputDir: join(PUBLIC_DIR, 'hero'),
    outputDir: join(PUBLIC_DIR, 'hero'),
    maxWidth: 400,  // Displayed at 180x180, 400 is 2x for retina
    quality: 75,
    format: 'webp'
  },
  {
    name: 'Profile Photos',
    inputDir: join(PUBLIC_DIR, 'photo'),
    outputDir: join(PUBLIC_DIR, 'photo'),
    maxWidth: 600,  // Displayed at max 288px, 600 is 2x for retina
    quality: 80,
    format: 'webp'
  }
]

// ============================================================
// HELPERS
// ============================================================

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

async function getFileSize(filePath) {
  const s = await stat(filePath)
  return s.size
}

// ============================================================
// MAIN OPTIMIZATION
// ============================================================

async function optimizeImages(config) {
  console.log(`\n${'='.repeat(60)}`)
  console.log(`📸 ${config.name}`)
  console.log(`${'='.repeat(60)}`)
  console.log(`  Input:  ${config.inputDir}`)
  console.log(`  Max Width: ${config.maxWidth}px | Quality: ${config.quality} | Format: ${config.format}`)

  await mkdir(config.outputDir, { recursive: true })

  const files = await readdir(config.inputDir)
  const imageFiles = files.filter(f => {
    const ext = extname(f).toLowerCase()
    return ['.png', '.jpg', '.jpeg', '.avif', '.webp', '.gif'].includes(ext)
  })

  let totalBefore = 0
  let totalAfter = 0

  for (const file of imageFiles) {
    const inputPath = join(config.inputDir, file)
    const { name } = parse(file)
    const outputPath = join(config.outputDir, `${name}.${config.format}`)

    try {
      const beforeSize = await getFileSize(inputPath)
      totalBefore += beforeSize

      await sharp(inputPath)
        .resize(config.maxWidth, config.maxWidth, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: config.quality })
        .toFile(outputPath)

      const afterSize = await getFileSize(outputPath)
      totalAfter += afterSize

      const savings = ((1 - afterSize / beforeSize) * 100).toFixed(1)
      console.log(`  ✅ ${file} → ${name}.${config.format}`)
      console.log(`     ${formatBytes(beforeSize)} → ${formatBytes(afterSize)} (${savings}% smaller)`)
    } catch (err) {
      console.error(`  ❌ Error processing ${file}:`, err.message)
    }
  }

  const totalSavings = ((1 - totalAfter / totalBefore) * 100).toFixed(1)
  console.log(`\n  📊 Total: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} (${totalSavings}% savings)`)
}

// ============================================================
// RUN
// ============================================================

console.log('🚀 Starting image optimization...\n')

for (const config of configs) {
  await optimizeImages(config)
}

console.log(`\n${'='.repeat(60)}`)
console.log('✨ All done! Image optimization complete.')
console.log(`${'='.repeat(60)}\n`)

console.log('📝 Next steps:')
console.log('   1. Update content YAML files to reference .webp files')
console.log('   2. Delete old PNG/AVIF originals if no longer needed')
console.log('   3. Update components to use <NuxtImg> instead of <img>')
