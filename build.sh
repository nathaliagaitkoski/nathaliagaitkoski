#!/bin/bash
set -e

echo "Installing dependencies..."
pnpm install

echo "Building with Vite..."
pnpm build

echo "Checking build output..."
if [ -d "dist" ]; then
  echo "✓ dist/ directory found"
  ls -la dist/
else
  echo "✗ dist/ directory NOT found"
  echo "Checking for dist/public..."
  if [ -d "dist/public" ]; then
    echo "Found dist/public, moving to dist..."
    mv dist/public dist_temp
    rm -rf dist
    mv dist_temp dist
  fi
fi

echo "Build complete!"
