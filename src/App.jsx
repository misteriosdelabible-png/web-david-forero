import React, { useState } from 'react';

export default function App() {
  const whatsappNumber = "573155185262";

  // Por defecto arranca en el plan trimestral recomendado
  const [selectedPlan, setSelectedPlan] = useState('quarterly');

  const plans = {
    monthly: {
      id: 'monthly',
      durationLabel: '1 Mes',
      tag: 'CUPOS LIMITADOS',
      crossedPrice: '$350.000 COP',
      displayPrice: '$199.000',
      period: 'COP / mes',
      badgeText: 'Ahorras $150k',
      billingSummary: 'Facturado mes a mes sin permanencia',
      wompiBtnText: 'PAGAR CON WOMPI ($199.000)',
      wompiUrl: 'https://checkout.wompi.co/l/mL9oLI',
      whatsappMsg: 'Hola David, me interesa iniciar la asesoría con el Plan Mensual ($199.000 COP).'
    },
    quarterly: {
      id: 'quarterly',
      durationLabel: '3 Meses',
      discountBadge: '15% OFF',
      tag: 'MÁS POPULAR',
      crossedPrice: '$597.000 COP',
      displayPrice: '$169.000',
      period: 'COP / mes',
      badgeText: 'AHORRAS 15% ($90k)',
      billingSummary: '$507.000 COP por los 90 días completos',
      wompiBtnText: 'PAGAR CON WOMPI ($507.000)',
      wompiUrl: 'https://checkout.wompi.co/l/ckqHTp',
      whatsappMsg: 'Hola David, quiero comenzar el Plan Trimestre de Transformación ($507.000 COP).'
    },
    annual: {
      id: 'annual',
      durationLabel: '12 Meses',
      discountBadge: '25% OFF',
      tag: 'MÁXIMO AHORRO',
      crossedPrice: '$2.388.000 COP',
      displayPrice: '$149.000',
      period: 'COP / mes',
      badgeText: 'AHORRAS 25% (Pagas 9, van 12)',
      billingSummary: '$1.788.000 COP en un solo pago anual',
      wompiBtnText: 'PAGAR CON WOMPI ($1.788.000)',
      wompiUrl: 'https://checkout.wompi.co/l/e9RxVj',
      whatsappMsg: 'Hola David, quiero acceder al Plan Anual Atleta Black ($1.788.000 COP).'
    }
  };

  const current = plans[selectedPlan];
  const generalWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola David, quiero información sobre tu asesoría")}`;

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans selection:bg-[#67D948] selection:text-black">
      {/* Barra superior de confianza */}
      <div className="bg-[#1a1a1a] border-b border-neutral-800 py-2 px-4 text-center text-xs tracking-wider uppercase text-neutral-300">
        🔒 Arquitectura de Alto Rendimiento | Asesoría 100% Personalizada con David Forero
      </div>

      {/* Navegación */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-wider text-[#67D948]">
          DF
          <span className="text-white text-sm font-normal block tracking-widest uppercase">David Forero</span>
        </div>
        <a 
          href="#precios"
          className="bg-[#67D948] text-black font-extrabold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider hover:bg-[#5bc23f] transition-all"
        >
          ADQUIRIR ASESORÍA
        </a>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-8 pb-12 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-neutral-800 text-xs text-[#67D948] font-bold tracking-widest uppercase mb-6">
          PLATAFORMA OFICIAL DE ENTRENAMIENTO
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-tight mb-6">
          DOMINA TU CUERPO Y <br className="hidden sm:inline" />
          <span className="text-[#67D948]">TRANSFORMA TU FÍSICO</span>
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Un sistema de entrenamiento diseñado exclusivamente para ti, respaldado por un diagnóstico inicial profundo, sin plantillas genéricas ni etiquetas rígidas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <a
            href="#precios"
            className="w-full py-4 px-6 rounded-2xl font-black text-black bg-[#67D948] hover:bg-[#5bc23f] transition-all uppercase tracking-wider text-sm shadow-lg shadow-[#67D948]/20 text-center"
          >
            EMPEZAR ASESORÍA BLACK
          </a>
          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl font-black text-white bg-[#1a1a1a] border border-neutral-800 hover:border-neutral-700 transition-all uppercase tracking-wider text-sm text-center"
          >
            HACER UNA PREGUNTA
          </a>
        </div>
      </section>

      {/* SECCIÓN DE PRECIOS */}
      <section id="precios" className="relative py-10 px-4 max-w-md mx-auto">
        
        {/* Selector de Frecuencia Pegado a la Tarjeta */}
        <div className="bg-[#181818] p-1.5 rounded-2xl border border-neutral-800 flex items-center justify-between mb-4 shadow-xl">
          {Object.values(plans).map((plan) => {
            const isActive = selectedPlan === plan.id;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelectedPlan(plan.id)}
                className={`flex-1 py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-1 cursor-pointer ${
                  isActive
                    ? 'bg-neutral-800 text-white shadow-md border border-neutral-700'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>{plan.durationLabel}</span>
                {plan.discountBadge && (
                  <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase leading-none ${
                    isActive ? 'bg-[#67D948] text-black' : 'bg-neutral-700 text-neutral-300'
                  }`}>
                    {plan.discountBadge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tarjeta Black 1:1 */}
        <div className="relative bg-[#161616] border border-neutral-800 rounded-3xl p-6 sm:p-7 text-left shadow-2xl">
          {/* Badge superior */}
          <div className="inline-block bg-[#67D948] text-black text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            {current.tag}
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Asesoría Black 1:1
          </h3>
          <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
            El acompañamiento definitivo adaptado a tus metas reales.
          </p>

          {/* Checklist de beneficios actualizado */}
          <ul className="space-y-3.5 text-sm text-neutral-200 mb-8">
            <li className="flex items-start gap-2.5">
              <span className="text-[#67D948] text-base leading-none font-black">✓</span>
              <span>Diagnóstico inicial profundo a medida</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#67D948] text-base leading-none font-black">✓</span>
              <span>Programación adaptada 100% a tus objetivos y equipamiento</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#67D948] text-base leading-none font-black">✓</span>
              <span>Pautas nutricionales directas</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#67D948] text-base leading-none font-black">✓</span>
              <span>Soporte continuo por WhatsApp</span>
            </li>
          </ul>

          {/* Caja con desglose de precios */}
          <div className="bg-[#111111] border border-neutral-800/80 rounded-2xl p-4 sm:p-5 mb-6">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-neutral-500 line-through font-medium">
                {current.crossedPrice}
              </span>
              <span className="bg-[#67D948]/15 text-[#67D948] border border-[#67D948]/30 text-xs font-bold px-2.5 py-0.5 rounded-md">
                {current.badgeText}
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {current.displayPrice}
              </span>
              <span className="text-xs text-neutral-400 font-semibold uppercase">
                {current.period}
              </span>
            </div>

            <p className="text-xs text-neutral-400 mt-2">
              {current.billingSummary}
            </p>
          </div>

          {/* Botón Wompi dinámico */}
          <a
            href={current.wompiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center py-4 px-6 rounded-2xl font-black text-black bg-[#67D948] hover:bg-[#5bc23f] active:scale-[0.98] transition-all uppercase tracking-wide text-sm shadow-lg shadow-[#67D948]/20 mb-4 cursor-pointer text-center"
          >
            {current.wompiBtnText}
          </a>

          {/* Enlace de dudas directo al WhatsApp */}
          <div className="text-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(current.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              <span>¿Tienes dudas antes de pagar? Escríbeme al WhatsApp</span>
              <span className="text-[#67D948]">💬</span>
            </a>
          </div>
        </div>
      </section>

      {/* Botón flotante permanente de WhatsApp */}
      <a
        href={generalWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
      >
        <span className="text-2xl">💬</span>
      </a>
    </div>
  );
}