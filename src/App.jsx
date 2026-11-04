import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      {/* Barra superior de confianza */}
      <div className="bg-[#1a1a1a] border-b border-neutral-800 py-2 px-4 text-center text-xs text-neutral-400">
        🔒 Arquitectura de Alto Rendimiento | Asesoría 100% Personalizada con David Forero
      </div>

      {/* Navegación */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-wider text-[#67D948]">
          DF <span className="text-white text-sm font-normal block tracking-normal">DAVID FORERO</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-neutral-300">
          <a href="#inicio" className="hover:text-[#67D948] transition">Inicio</a>
          <a href="#asesoria" className="hover:text-[#67D948] transition">Asesoría Black 1:1</a>
          <a href="#sobre-mi" className="hover:text-[#67D948] transition">Quién Soy</a>
        </nav>
        <a 
          href="https://checkout.wompi.co/l/mL9oLI" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#67D948] text-[#111111] font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition text-sm shadow-md"
        >
          ADQUIRIR ASESORÍA
        </a>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-[#67D948]/10 text-[#67D948] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#67D948]/20 uppercase tracking-wider">
            Plataforma Oficial de Entrenamiento
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
            DOMINA TU CUERPO Y <span className="text-[#67D948]">TRANSFORMA TU FÍSICO</span>
          </h1>
          <p className="text-neutral-400 mt-6 text-lg leading-relaxed">
            Un sistema de entrenamiento diseñado exclusivamente para ti, respaldado por un diagnóstico inicial profundo, sin plantillas genéricas ni etiquetas rígidas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://checkout.wompi.co/l/mL9oLI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#67D948] text-[#111111] font-bold px-8 py-4 rounded-xl hover:opacity-90 transition text-center shadow-lg shadow-[#67D948]/10"
            >
              EMPEZAR ASESORÍA BLACK
            </a>
          </div>
        </div>

        {/* Tarjeta de oferta destacada */}
        <div className="bg-[#1a1a1a] border border-neutral-800 p-8 rounded-2xl relative shadow-2xl">
          <div className="absolute -top-3 right-6 bg-[#67D948] text-[#111111] text-xs font-black px-3 py-1 rounded-full uppercase">
            Cupos Limitados
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Asesoría Black 1:1</h3>
          <p className="text-neutral-400 text-sm mb-6">El acompañamiento definitivo adaptado a tus metas reales.</p>
          
          <ul className="space-y-3 text-sm text-neutral-300 mb-8">
            <li className="flex items-center gap-2">✅ Diagnóstico inicial profundo a medida</li>
            <li className="flex items-center gap-2">✅ Enfoque versátil (Calistenia, Gym, Running, Hyrox)</li>
            <li className="flex items-center gap-2">✅ Pautas nutricionales directas</li>
            <li className="flex items-center gap-2">✅ Soporte continuo por WhatsApp</li>
          </ul>

          <div className="bg-[#111111] p-4 rounded-xl border border-neutral-800 mb-6 flex justify-between items-center">
            <div>
              <span className="text-xs text-neutral-500 line-through block">$350.000 COP</span>
              <span className="text-2xl font-black text-[#67D948]">$199.000 <span className="text-sm font-normal text-neutral-400">COP</span></span>
            </div>
            <span className="text-xs bg-[#67D948]/10 text-[#67D948] px-2.5 py-1 rounded border border-[#67D948]/20">Ahorras $150k</span>
          </div>

          <a 
            href="https://checkout.wompi.co/l/mL9oLI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-[#67D948] text-[#111111] font-bold py-3.5 rounded-xl text-center hover:opacity-90 transition"
          >
            PAGAR CON WOMPI ($199.000)
          </a>
        </div>
      </section>

      {/* Sección de detalles / Metodología */}
      <section id="asesoria" className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-900">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">¿Cómo funciona la Asesoría Black?</h2>
          <p className="text-neutral-400 mt-3">Un proceso estructurado para llevarte del punto A al punto B sin rodeos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a]/50 border border-neutral-800 p-6 rounded-xl">
            <div className="text-[#67D948] font-black text-xl mb-3">01.</div>
            <h4 className="font-bold text-lg mb-2">Diagnóstico Profundo</h4>
            <p className="text-neutral-400 text-sm">Analizamos tu historial, estilo de vida, lesiones y disponibilidad de tiempo u espacio.</p>
          </div>
          <div className="bg-[#1a1a1a]/50 border border-neutral-800 p-6 rounded-xl">
            <div className="text-[#67D948] font-black text-xl mb-3">02.</div>
            <h4 className="font-bold text-lg mb-2">Plan Sin Etiquetas</h4>
            <p className="text-neutral-400 text-sm">Combinamos calistenia, gimnasio, running o Hyrox según lo que tu cuerpo y objetivos necesiten.</p>
          </div>
          <div className="bg-[#1a1a1a]/50 border border-neutral-800 p-6 rounded-xl">
            <div className="text-[#67D948] font-black text-xl mb-3">03.</div>
            <h4 className="font-bold text-lg mb-2">Acompañamiento Real</h4>
            <p className="text-neutral-400 text-sm">Revisiones periódicas y contacto directo para resolver dudas y asegurar evolución constante.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-8 text-center text-xs text-neutral-500">
        <p>© 2026 David Forero · Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}