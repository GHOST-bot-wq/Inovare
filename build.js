/**
 * Build Script — Instituto Revitali
 * Garante compatibilidade total tanto para deploys na raiz (.) quanto em diretório /public
 */

const fs = require('fs');
const path = require('path');

console.log('Iniciando build de produção do Instituto Revitali...');

const publicDir = path.join(__dirname, 'public');

// Criar pasta public caso não exista
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Lista de arquivos e diretórios a sincronizar com /public
const itemsToCopy = ['index.html', 'manifest.json', 'css', 'js', 'assets'];

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else if (exists) {
    fs.copyFileSync(src, dest);
  }
}

itemsToCopy.forEach((item) => {
  const srcPath = path.join(__dirname, item);
  const destPath = path.join(publicDir, item);
  if (fs.existsSync(srcPath)) {
    copyRecursiveSync(srcPath, destPath);
    console.log(`✓ Sincronizado: ${item} -> public/${item}`);
  }
});

console.log('✅ Build concluído com sucesso! Suporte a raiz (.) e a /public garantido.');
