import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = '/Users/hrajgpt/Downloads/Digitech Search Labs Logo.png';
const outputDir = './public';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function convertLogo() {
  try {
    console.log('🎨 Converting logo...');
    
    // Convert to WebP with optimization
    await sharp(inputPath)
      .resize(500, 500, { 
        fit: 'contain', 
        background: { r: 15, g: 23, b: 42, alpha: 0 } 
      })
      .webp({ quality: 90 })
      .toFile(path.join(outputDir, 'logo.webp'));
    
    console.log('✅ WebP created: public/logo.webp');
    
    // Also create optimized PNG fallback
    await sharp(inputPath)
      .resize(500, 500, { 
        fit: 'contain', 
        background: { r: 15, g: 23, b: 42, alpha: 0 } 
      })
      .png({ compressionLevel: 9 })
      .toFile(path.join(outputDir, 'logo.png'));
    
    console.log('✅ PNG created: public/logo.png');
    
    // Show file sizes
    const webpSize = fs.statSync(path.join(outputDir, 'logo.webp')).size;
    const pngSize = fs.statSync(path.join(outputDir, 'logo.png')).size;
    
    console.log(`\n📊 File Sizes:`);
    console.log(`  WebP: ${(webpSize / 1024).toFixed(2)} KB`);
    console.log(`  PNG:  ${(pngSize / 1024).toFixed(2)} KB`);
    console.log(`  Savings: ${((1 - webpSize / pngSize) * 100).toFixed(1)}%`);
    
  } catch (error) {
    console.error('❌ Error converting logo:', error.message);
    process.exit(1);
  }
}

convertLogo();
