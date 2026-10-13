/**
 * Innovare Femine — Estética Face & Corpo
 * Arquivo Central de Configuração Institucional
 *
 * ⚙️ INSTRUÇÃO PARA A CLÍNICA:
 * Edite os campos marcados com "PENDENTE" com os dados reais antes da publicação.
 * O site atualizará automaticamente botões, links de WhatsApp, rodapé e mapas.
 *
 * ⚠️ CAMPOS PENDENTES DE CONFIRMAÇÃO:
 *   - contact.whatsappRaw       → confirmar se +55 98 99191-9502 é o WA comercial
 *   - location.addressLine1     → confirmar endereço completo
 *   - location.city / state     → confirmar cidade e estado
 *   - location.cep              → confirmar CEP
 *   - location.mapsUrl          → inserir link real do Google Maps
 *   - hours.weekdays / saturday → confirmar horários de atendimento
 *   - professional.bio          → adicionar texto biográfico autorizado
 */

const CLINIC_CONFIG = {

  // ── Identificação da Marca ──────────────────────────────────────────────────
  name:        "Innovare Femine",
  tagline:     "Estética Face & Corpo",
  slogan:      "Sua beleza, valorizada em cada detalhe.",
  description: "Cuidado especializado, tratamentos estéticos e uma experiência pensada para valorizar sua beleza e seu bem-estar.",

  // ── Profissional Responsável ────────────────────────────────────────────────
  professional: {
    name:        "Aline Terleski",
    role:        "Responsável pela Clínica",
    // ⚠️ Não inclua diplomas, títulos ou especializações sem confirmação da clínica
    bio:          null, // PENDENTE — inserir texto biográfico autorizado
    bioPending:   true
  },

  // ── Contatos Oficiais ───────────────────────────────────────────────────────
  contact: {
    // ⚠️ PENDENTE DE CONFIRMAÇÃO — confirmar se este é o WhatsApp comercial real
    whatsappRaw:          "5598991919502",   // formato: 55 + DDD + número (sem espaços)
    whatsappPendingConfirmation: true,       // altere para false após confirmar o número

    instagram:            "@innovare_femine",
    instagramUrl:         "https://www.instagram.com/innovare_femine/",

    // E-mail (opcional — inserir quando disponível)
    email:                null
  },

  // ── Localização ────────────────────────────────────────────────────────────
  location: {
    // ⚠️ TODOS OS CAMPOS ABAIXO ESTÃO PENDENTES DE CONFIRMAÇÃO
    addressLine1:             null,  // ex: "Rua das Flores, 123, Sala 201"
    addressLine2:             null,  // ex: "Bairro — Cidade, UF"
    city:                     null,
    state:                    null,
    cep:                      null,
    fullAddress:              null,
    mapsUrl:                  null,  // link real do Google Maps
    locationPendingConfirmation: true
  },

  // ── Horários de Atendimento ─────────────────────────────────────────────────
  hours: {
    // ⚠️ PENDENTE DE CONFIRMAÇÃO
    weekdays:                 null, // ex: "Segunda a Sexta: 09h às 18h"
    saturday:                 null, // ex: "Sábados: 09h às 13h (sob agendamento)"
    hoursPendingConfirmation: true
  },

  // ── Mensagens Pré-configuradas para o WhatsApp ─────────────────────────────
  whatsappMessages: {
    hero:        "Olá! Conheci a Innovare Femine pelo site e gostaria de saber mais sobre os tratamentos e agendar uma avaliação.",
    tratamentos: "Olá! Vi os tratamentos no site da Innovare Femine e gostaria de saber mais. Pode me ajudar?",
    contato:     "Olá! Gostaria de agendar uma avaliação na Innovare Femine.",
    general:     "Olá! Vim pelo site da Innovare Femine e tenho interesse em um atendimento."
  },

  // ── Serviços Apresentados no Site ──────────────────────────────────────────
  services: [
    {
      id:          "estetica-facial",
      title:       "Estética Facial",
      description: "Tratamentos estéticos especializados voltados à saúde e à aparência da pele, com protocolos individualizados para cada tipo de pele e objetivo.",
      image:       "images/servico-facial.jpg", // inserir imagem real quando disponível
      imagePending: true
    },
    {
      id:          "estetica-corporal",
      title:       "Estética Corporal",
      description: "Tratamentos estéticos personalizados para o corpo, pensados para atender as necessidades e objetivos individuais de cada cliente.",
      image:       "images/servico-corporal.jpg",
      imagePending: true
    },
    {
      id:          "botox",
      title:       "Botox",
      description: "Informações sobre avaliação e procedimentos realizados por profissional habilitado, mediante avaliação individualizada.",
      image:       "images/servico-botox.jpg",
      imagePending: true
    },
    {
      id:          "terapias-capilares",
      title:       "Terapias Capilares",
      description: "Cuidados capilares especializados para saúde e beleza dos fios. Confirmar disponibilidade atual com a clínica.",
      image:       "images/servico-capilar.jpg",
      imagePending: true
    },
    {
      id:          "pre-pos-operatorio",
      title:       "Pré e Pós-Operatório",
      description: "Tratamentos de suporte estético para os períodos pré e pós-operatórios. Verificar com a clínica quais procedimentos estão disponíveis.",
      image:       "images/servico-pre-pos.jpg",
      imagePending: true
    },
    {
      id:          "depilacao",
      title:       "Depilação",
      description: "Serviços de depilação estética. Confirmar modalidades e disponibilidade atual com a clínica.",
      image:       "images/servico-depilacao.jpg",
      imagePending: true
    }
  ],

  // ── Diferenciais ───────────────────────────────────────────────────────────
  differentials: [
    { icon: "user",    title: "Atendimento Individualizado", desc: "Cada cliente recebe atenção exclusiva, com foco total nos seus objetivos e características únicas." },
    { icon: "search",  title: "Avaliação Personalizada",    desc: "O primeiro passo é sempre entender quem você é e o que você precisa antes de qualquer indicação." },
    { icon: "star",    title: "Cuidado com Cada Detalhe",   desc: "Da recepção ao pós-tratamento, cada etapa é pensada para proporcionar a melhor experiência." },
    { icon: "award",   title: "Orientação Profissional",    desc: "Acompanhamento e orientação por profissional capacitada durante todo o processo de cuidado." },
    { icon: "heart",   title: "Experiência Acolhedora",     desc: "Um ambiente que transmite conforto, privacidade e a atenção que você merece." }
  ]
};

// ── Gerador de Link WhatsApp ────────────────────────────────────────────────
function generateWhatsAppUrl(customMessage) {
  const msg = encodeURIComponent(customMessage || CLINIC_CONFIG.whatsappMessages.hero);

  // Se número não confirmado, abrir WA sem número (usuário digita manualmente)
  if (CLINIC_CONFIG.contact.whatsappPendingConfirmation) {
    return {
      isReady:  false,
      url:      `https://wa.me/?text=${msg}`,
      message:  "O número de WhatsApp comercial ainda está pendente de confirmação. Deseja abrir o WhatsApp para encaminhar sua mensagem?"
    };
  }

  return {
    isReady: true,
    url:     `https://wa.me/${CLINIC_CONFIG.contact.whatsappRaw}?text=${msg}`
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CLINIC_CONFIG, generateWhatsAppUrl };
}
