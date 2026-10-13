# Instituto Revitali — Emagrecimento & Performance (Londrina - PR)

Website institucional premium desenvolvido sob medida para o **Instituto Revitali**, combinando estética de agência de alto padrão, rigor em conformidade com o Conselho Federal de Medicina (CFM), design responsivo mobile-first e arquitetura rápida e leve (zero dependências pesadas, sem necessidade de build complexo).

---

## 🎨 Identidade Visual & Design System

A paleta e os componentes visuais foram projetados para transmitir exclusividade, calor e autoridade médica:

- **Preto Profundo (`#080808`):** Base contrastante e elegante da primeira dobra e seções noturnas.
- **Grafite Sofisticado (`#171717`):** Superfícies de cartões e tecnologia.
- **Champagne (`#D5C2A0`):** Acentos nobres, iluminação suave e detalhes refinados.
- **Dourado Discreto (`#A88B54`):** Realces contidos, bordas e ícones sem excessos.
- **Marfim (`#F5F1EA`):** Alternância diurna acolhedora nas seções institucionais e estrutura.
- **Branco Puro (`#FFFFFF`):** Leitura de títulos e alto contraste.
- **Tipografia:** Serif editorial para títulos (`Playfair Display`) combinada com sans-serif moderna de alta legibilidade (`Plus Jakarta Sans`).

---

## 🚀 Como Executar Localmente

### Opção 1: Direto no Navegador (Mais Rápido)
Basta abrir o arquivo `index.html` com dois cliques em qualquer navegador moderno (Chrome, Edge, Safari, Firefox). O site é 100% autônomo e não depende de servidores externos.

### Opção 2: Servidor de Desenvolvimento Local
Caso possua o Node.js instalado:
```bash
# Iniciar servidor local
npx serve .

# Ou rodar o teste de integridade
node test-site.js
```

---

## ⚙️ Configuração Centralizada (`js/clinic-config.js`)

Todos os dados de contato, redes sociais, telefone e textos estão centralizados em um único arquivo:  
📂 `js/clinic-config.js`

### 1. Como Atualizar o WhatsApp Oficial:
Abra `js/clinic-config.js` e localize o bloco `contact`:
```javascript
contact: {
  // Insira o número oficial com código do país (55) + DDD (43) + número
  whatsappRaw: "5543999998888", 
  isWhatsAppConfirmed: true, // Altere para true
  phoneDisplayMobile: "(43) 99999-8888",
  ...
}
```
Assim que você alterar este campo, todos os botões da página (Header, Hero, Serviços, Rodapé e Botão Flutuante) passarão a direcionar os pacientes instantaneamente para a recepção real da clínica.

### 2. Como Atualizar o Endereço Físico:
No mesmo arquivo, edite `location`:
```javascript
location: {
  addressLine1: "Av. Ayrton Senna da Silva, 500 - Gleba Palhano",
  addressLine2: "Edifício Torre Pietra - Sala 801",
  cep: "86050-460",
  fullAddress: "Av. Ayrton Senna da Silva, 500 — Gleba Palhano, Londrina - PR",
  mapsUrl: "https://maps.google.com/?q=..."
}
```

---

## 📸 Como Inserir as Fotografias Reais da Clínica

O site possui uma pasta organizada pronta para receber os arquivos fotográficos originais:  
📂 `assets/images/`

Para substituir as ilustrações conceituais pelas fotos reais do Instituto Revitali, basta salvar seus arquivos nas pastas correspondentes com os nomes abaixo:

| Foto | Pasta de Destino | Nome Recomendado |
|---|---|---|
| **Recepção / Interior (Hero)** | `assets/images/recepcao/` | `hero-recepcao.jpg` |
| **Fachada Externa** | `assets/images/estrutura/` | `fachada.jpg` |
| **Consultório Médico** | `assets/images/estrutura/` | `consultorio.jpg` |
| **Sala de Procedimentos** | `assets/images/estrutura/` | `sala-procedimentos.jpg` |
| **Ultraformer MPT Real** | `assets/images/tecnologias/` | `ultraformer.jpg` |
| **Scanner Corporal 3D** | `assets/images/tecnologias/` | `scanner-3d.jpg` |
| **Foto do Responsável Técnico** | `assets/images/equipe/` | `responsavel-tecnico.jpg` |
| **Foto da Nutricionista** | `assets/images/equipe/` | `nutricionista.jpg` |

> ℹ️ *Consulte as instruções detalhadas em `assets/images/README.md`.*

---

## 🏛️ Seções Desenvolvidas Conforme o Briefing

1. **Primeira Dobra (Hero):** Título oficial, subtítulo, botões de agendamento e conhecimento, badge de Londrina-PR e visual da recepção.
2. **Apresentação Institucional:** Narrativa autoral, medicina baseada em evidências e pilares da clínica boutique.
3. **Emagrecimento Individualizado:** Metodologia em 3 etapas (Investigação, Prescrição, Consolidação).
4. **Performance & Composição Corporal:** Foco em massa magra, saúde mitocondrial e homeostase metabólica.
5. **Tecnologias Verificadas:** Ultraformer MPT, Scanner Corporal 3D e Terapia Transdérmica com aviso ético regulatório.
6. **Galeria da Estrutura Física:** Recepção, suítes médicas, procedimentos e fachada.
7. **Corpo Clínico & Equipe Multidisciplinar:** Estrutura pronta para os registros do CRM-PR, CRN-8 e CREFITO-8.
8. **Mídia & Conteúdos Educativos:** Cards para publicações do Instagram e artigos técnicos.
9. **Depoimentos Reais:** Avaliações de pacientes respeitando o anonimato e padrões do CFM.
10. **FAQ (Perguntas Frequentes):** Accordion interativo com navegação por teclado e respostas claras.
11. **Contato, Localização & Agendamento:** Formulário interativo com disparo de mensagem personalizada para WhatsApp e rotas no Google Maps.
12. **Rodapé Completo:** Declaração de responsabilidade médica e conformidade com a Resolução CFM nº 2.336/2023.
