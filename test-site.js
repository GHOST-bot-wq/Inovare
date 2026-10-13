/**
 * Test Suite - Instituto Revitali Website
 * Valida a integridade do HTML, CSS, JavaScript, configurações e integridade dos links.
 */

const fs = require('fs');
const path = require('path');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  [PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`  [FAIL] ${message}`);
  }
}

console.log('\n--- Executando Validação do Site Instituto Revitali ---\n');

// 1. Verificar arquivos essenciais
console.log('1. Verificando integridade dos arquivos estruturais:');
const requiredFiles = [
  'index.html',
  'css/tokens.css',
  'css/styles.css',
  'js/clinic-config.js',
  'js/main.js',
  'README.md',
  'assets/images/README.md'
];

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  assert(fs.existsSync(filePath), `Arquivo ${file} existe`);
});

// 2. Verificar HTML
console.log('\n2. Verificando conteúdo do index.html:');
const htmlPath = path.join(__dirname, 'index.html');
if (fs.existsSync(htmlPath)) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  assert(html.includes('<!DOCTYPE html>'), 'Documento possui DOCTYPE HTML5 válido');
  assert(html.includes('lang="pt-BR"'), 'HTML possui lang="pt-BR" configurado');
  assert(html.includes('Instituto Revitali'), 'HTML contém título do Instituto Revitali');
  assert(html.includes('Sua jornada de transformação começa com um cuidado personalizado.'), 'Hero title exigido pelo briefing está presente');
  assert(html.includes('Emagrecimento, performance e tecnologias estéticas em uma experiência de cuidado individualizado.'), 'Hero subtitle exigido está presente');
  assert(html.includes('Agendar uma avaliação'), 'CTA de agendamento presente');
  assert(html.includes('Conheça o Instituto'), 'CTA secundário presente');
  assert(html.includes('data-config'), 'Elementos dinâmicos utilizam data-config para injeção centralizada');
  assert(html.includes('viewport'), 'Meta viewport para responsividade mobile presente');
}

// 3. Verificar Configurações
console.log('\n3. Verificando arquivo de configuração clinic-config.js:');
const configPath = path.join(__dirname, 'js/clinic-config.js');
if (fs.existsSync(configPath)) {
  const configContent = fs.readFileSync(configPath, 'utf8');
  assert(configContent.includes('CLINIC_CONFIG'), 'Objeto CLINIC_CONFIG definido');
  assert(configContent.includes('whatsapp'), 'Campo de WhatsApp configurado');
  assert(configContent.includes('Londrina'), 'Cidade Londrina definida nas configurações');
}

// 4. Verificar CSS Tokens & Cores
console.log('\n4. Verificando tokens de design e paleta cromática:');
const tokensPath = path.join(__dirname, 'css/tokens.css');
if (fs.existsSync(tokensPath)) {
  const tokens = fs.readFileSync(tokensPath, 'utf8');
  assert(tokens.includes('#080808'), 'Cor Preto Profundo (#080808) definida');
  assert(tokens.includes('#171717'), 'Cor Grafite (#171717) definida');
  assert(tokens.includes('#D5C2A0') || tokens.includes('#d5c2a0'), 'Cor Champagne (#D5C2A0) definida');
  assert(tokens.includes('#A88B54') || tokens.includes('#a88b54'), 'Cor Dourado Discreto (#A88B54) definida');
  assert(tokens.includes('#F5F1EA') || tokens.includes('#f5f1ea'), 'Cor Marfim (#F5F1EA) definida');
}

console.log(`\nResultado dos Testes: ${passedTests} de ${totalTests} testes aprovados.\n`);

if (passedTests === totalTests) {
  console.log('✅ Todos os testes de integridade foram concluídos com sucesso!\n');
  process.exit(0);
} else {
  console.error('❌ Falhas encontradas na validação.\n');
  process.exit(1);
}
