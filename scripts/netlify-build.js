import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Ensure the dist directory exists
const distDir = path.resolve(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Run the build command
try {
  console.log('Running TypeScript build...');
  execSync('npx tsc -b', { stdio: 'inherit' });
  
  console.log('Running Vite build...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 