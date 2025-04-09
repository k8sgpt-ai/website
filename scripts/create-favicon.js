import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Create the public directory if it doesn't exist
const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Path to the logo file
const logoPath = path.resolve(process.cwd(), 'public/images/k8sgpt-logo.png');
const faviconPath = path.resolve(process.cwd(), 'public/favicon.ico');

// Check if the logo file exists
if (!fs.existsSync(logoPath)) {
  console.error(`Logo file not found at ${logoPath}`);
  process.exit(1);
}

// Convert the logo to an ico file
sharp(logoPath)
  .resize(32, 32, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 0 }
  })
  .toFile(faviconPath)
  .then(() => {
    console.log(`Favicon created successfully at ${faviconPath}`);
  })
  .catch(err => {
    console.error('Error creating favicon:', err);
    process.exit(1);
  }); 