import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Create the public directory if it doesn't exist
const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Path to the icon file
const iconPath = path.resolve(process.cwd(), 'public/images/k8sgpt-icon.svg');
const faviconDir = path.resolve(process.cwd(), 'public/favicons');

// Create favicons directory if it doesn't exist
if (!fs.existsSync(faviconDir)) {
  fs.mkdirSync(faviconDir, { recursive: true });
}

// Check if the icon file exists
if (!fs.existsSync(iconPath)) {
  console.error(`Icon file not found at ${iconPath}`);
  process.exit(1);
}

// Define sizes for different devices
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 64, name: 'favicon-64x64.png' },
  { size: 128, name: 'favicon-128x128.png' },
  { size: 192, name: 'apple-touch-icon.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

// Generate favicons for each size
const generateFavicons = async () => {
  try {
    // Generate PNG favicons
    for (const { size, name } of sizes) {
      const outputPath = path.join(faviconDir, name);
      await sharp(iconPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .toFile(outputPath);
      console.log(`Created ${name}`);
    }

    // Create a manifest.json file for PWA support
    const manifestPath = path.join(publicDir, 'manifest.json');
    const manifest = {
      name: 'K8sGPT',
      short_name: 'K8sGPT',
      description: 'Giving Kubernetes Superpowers to Everyone',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#3b82f6',
      icons: [
        {
          src: '/favicons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          src: '/favicons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: '/favicons/favicon-48x48.png',
          sizes: '48x48',
          type: 'image/png'
        },
        {
          src: '/favicons/favicon-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: '/favicons/favicon-128x128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: '/favicons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    };

    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log('Created manifest.json');

    // Create a simple ico file for older browsers
    const icoPath = path.join(publicDir, 'favicon.ico');
    await sharp(iconPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toFile(icoPath);
    console.log('Created favicon.ico');

    console.log('All favicons created successfully!');
  } catch (err) {
    console.error('Error creating favicons:', err);
    process.exit(1);
  }
};

generateFavicons(); 