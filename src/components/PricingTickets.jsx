import React, { useState } from 'react';

const Ticket = ({ plan, price, from, to, type, days, features, glow, gradient, icon }) => {
  const [isTorn, setIsTorn] = useState(false);

  const handleTear = (e) => {
    e.preventDefault();
    if (isTorn) return;
    setIsTorn(true);
    
    setTimeout(() => {
      window.location.href = '#contacto';
      setTimeout(() => setIsTorn(false), 800);
    }, 1200);
  };

  return (
    <div className={`relative w-full max-w-sm mx-auto flex flex-col group transition-transform duration-500 ${isTorn ? '' : 'hover:-translate-y-2'}`}>
      
      {/* TOP TICKET PART */}
      <div className={`bg-[#0a0a0a] rounded-t-3xl p-6 relative overflow-hidden border border-white/10 border-b-0 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 ${isTorn ? '-translate-y-4' : ''}`}>
        {/* Background glow */}
        <div className={`absolute top-0 right-0 w-48 h-48 blur-[70px] opacity-30 ${glow} pointer-events-none`}></div>
        
        {/* Header */}
        <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 mb-6 uppercase tracking-widest relative z-10">
           <div>Boarding: <span className="text-white">IMMEDIATE</span></div>
           <div>Class: <span className="text-white">{type}</span></div>
        </div>
        
        {/* Airport Codes representing transformation */}
        <div className="flex items-center justify-between font-pixel text-5xl text-white mb-2 relative z-10 tracking-tighter">
           <span>{from}</span>
           <div className="flex-1 flex justify-center px-4">
             <div className="w-full h-[2px] bg-white/10 relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30 -rotate-45"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
               </div>
             </div>
           </div>
           <span>{to}</span>
        </div>
        <div className="flex items-center justify-between text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-8 relative z-10">
           <span>Current State</span>
           <span>Live Server</span>
        </div>
        
        {/* Plan Name & Price */}
        <div className="mb-8 relative z-10">
           <h3 className="text-xl font-bold uppercase text-white mb-1 tracking-wider">{plan}</h3>
           <div className="flex items-baseline gap-1">
             <span className="text-5xl font-black text-white tracking-tighter">${price}</span>
             <span className="text-sm font-mono text-gray-500">USD</span>
           </div>
        </div>
        
        {/* Features List */}
        <ul className="space-y-3 text-sm text-gray-300 font-light relative z-10">
           {features.map((feat, i) => (
             <li key={i} className="flex items-start gap-3">
               <span className="mt-1">{icon}</span>
               <span dangerouslySetInnerHTML={{ __html: feat }} />
             </li>
           ))}
        </ul>
        
      </div>

      {/* SEPARATOR (The Tear-off line) */}
      <div 
        className={`relative h-10 bg-[#0a0a0a] flex items-center justify-center border-x border-white/10 transition-opacity duration-300 ${isTorn ? 'opacity-0' : 'opacity-100'}`}
        style={{
          maskImage: 'radial-gradient(circle at 0 50%, transparent 16px, black 16.5px), radial-gradient(circle at 100% 50%, transparent 16px, black 16.5px)',
          maskSize: '51% 100%',
          maskRepeat: 'no-repeat',
          maskPosition: 'left, right',
          WebkitMaskImage: 'radial-gradient(circle at 0 50%, transparent 16px, black 16.5px), radial-gradient(circle at 100% 50%, transparent 16px, black 16.5px)',
          WebkitMaskSize: '51% 100%',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'left, right'
        }}
      >
        <div className="w-full h-[2px] border-b-[2px] border-dashed border-white/20 mx-8"></div>
      </div>

      {/* BOTTOM STUB */}
      <div className={`rounded-b-3xl p-6 relative overflow-hidden bg-gradient-to-br ${gradient} shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10 border-t-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-top-left z-20 ${isTorn ? 'translate-y-32 translate-x-4 rotate-[12deg] opacity-0 pointer-events-none' : ''}`}>
         
         <div className="flex justify-between items-end relative z-10">
            <div>
               <div className="text-[9px] font-mono text-black/60 uppercase font-bold tracking-widest mb-1">Passenger</div>
               <div className="text-lg font-black text-black uppercase tracking-tight leading-none">YOUR BRAND</div>
            </div>
            <div className="text-right">
               <div className="text-[8px] font-mono text-black/60 uppercase font-bold tracking-widest mb-1">DURACIÓN APROX.</div>
               <div className="text-xl font-black text-black font-pixel leading-none">{days} DÍAS <span className="text-[10px] font-mono tracking-widest">HÁBILES</span></div>
            </div>
         </div>
         
         {/* Fake Barcode */}
         <div className="w-full h-14 mt-6 flex justify-between items-center opacity-70 mix-blend-overlay">
           {[...Array(35)].map((_, i) => (
             <div key={i} className="h-full bg-black" style={{ width: `${Math.random() * 5 + 1}px`, opacity: Math.random() > 0.8 ? 0 : 1 }}></div>
           ))}
         </div>
         
         {/* Action Button inside the stub */}
         <button 
           onClick={handleTear}
           className="mt-6 w-full py-3 bg-black/90 hover:bg-black text-white text-[10px] font-pixel uppercase tracking-widest rounded-xl flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
         >
           {isTorn ? 'TICKET SECURED' : 'CONFIRM FLIGHT'}
         </button>
      </div>
    </div>
  );
};

export const PricingTickets = () => {
  const plans = [
    {
      plan: 'Starter / Script',
      price: '60',
      from: 'IDEA',
      to: 'WEB',
      type: 'ECONOMY',
      days: '3',
      glow: 'bg-cyan-500',
      gradient: 'from-blue-200 via-cyan-400 to-blue-600',
      icon: <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]"></span>,
      features: [
        '<strong>1 Página</strong> funcional (React/Vue)',
        '<strong>2 Revisiones</strong> completas',
        'Configuración de <strong>Hosting</strong>',
        '1 Instalación de Complemento'
      ]
    },
    {
      plan: 'Full Stack App',
      price: '180',
      from: 'MVP',
      to: 'SAAS',
      type: 'BUSINESS',
      days: '7',
      glow: 'bg-orange-500',
      gradient: 'from-orange-200 via-orange-500 to-red-600',
      icon: <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,1)]"></span>,
      features: [
        '<span class="text-orange-400 font-bold">+ Todo lo de Starter</span>',
        'Hasta <strong>4 Páginas</strong> robustas',
        '<strong>4 Revisiones</strong> completas',
        'Carga de Contenido incluida',
        'Formulario & Autorespuesta',
        'Optimización de Velocidad'
      ]
    },
    {
      plan: 'E-Commerce Pro',
      price: '600',
      from: 'SHOP',
      to: 'GBL',
      type: 'FIRST CLASS',
      days: '14',
      glow: 'bg-purple-500',
      gradient: 'from-fuchsia-300 via-purple-500 to-indigo-600',
      icon: <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,1)]"></span>,
      features: [
        '<span class="text-purple-400 font-bold">+ Todo lo de Full Stack</span>',
        'Hasta <strong>8 Páginas</strong> con tienda',
        'Revisiones <strong>Ilimitadas</strong>',
        '<strong>Integración de Pagos</strong> (Stripe, etc)',
        'Hasta 18 Productos (Carga)',
        'Funcionalidad E-commerce total'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {plans.map((p, i) => (
        <Ticket key={i} {...p} />
      ))}
    </div>
  );
};

export const PricingTicketHorizontal = () => {
  const [isTorn, setIsTorn] = useState(false);

  const handleTear = (e) => {
    e.preventDefault();
    if (isTorn) return;
    setIsTorn(true);
    
    setTimeout(() => {
      window.location.href = '#contacto';
      setTimeout(() => setIsTorn(false), 800);
    }, 1200);
  };

  return (
    <div className="mt-12 w-full max-w-5xl mx-auto flex h-auto min-h-[300px] group transition-transform duration-500 hover:-translate-y-2 px-2 sm:px-4 overflow-hidden md:overflow-visible">
      
      {/* LEFT STUB (Tear-off part) */}
      <div className={`w-16 sm:w-24 md:w-48 bg-[#0a0a0a] rounded-l-2xl md:rounded-l-3xl border border-white/10 border-r-0 relative p-2 sm:p-4 md:p-6 flex flex-col justify-between overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-[1000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-right z-20 ${isTorn ? '-translate-y-32 -translate-x-4 rotate-[-12deg] opacity-0 pointer-events-none' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none"></div>
        {/* Barcode top */}
        <div className="w-full flex justify-between items-start opacity-70">
           <div className="flex gap-[1px] md:gap-[2px] h-16 md:h-32">
             {[...Array(12)].map((_,i) => <div key={i} className="bg-white" style={{ width: Math.random()*2+1 + 'px' }}></div>)}
           </div>
           <div className="writing-vertical text-[8px] md:text-[10px] font-mono text-gray-500 tracking-widest uppercase ml-1" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>TKT-AUTO-99</div>
        </div>
        
        <div className="mt-auto hidden md:block">
          <div className="w-10 h-10 border border-white/20 p-1 mb-4 opacity-50 flex items-center justify-center bg-white/5">
            <div className="w-full h-full border-2 border-dashed border-white/30"></div>
          </div>
          <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest leading-relaxed">
            <div>NET: <span className="text-orange-500">SECURE</span></div>
            <div>NODE: <span className="text-white">ACTIVE</span></div>
          </div>
        </div>
      </div>

      {/* VERTICAL SEPARATOR */}
      <div 
        className={`w-6 sm:w-8 md:w-10 bg-[#0a0a0a] border-y border-white/10 flex flex-col items-center justify-center relative z-10 transition-opacity duration-300 ${isTorn ? 'opacity-0' : 'opacity-100'}`}
        style={{
          maskImage: 'radial-gradient(circle at 50% 0%, transparent 8px, black 8.5px), radial-gradient(circle at 50% 100%, transparent 8px, black 8.5px)',
          maskSize: '100% 51%',
          maskRepeat: 'no-repeat',
          maskPosition: 'top, bottom',
          WebkitMaskImage: 'radial-gradient(circle at 50% 0%, transparent 8px, black 8.5px), radial-gradient(circle at 50% 100%, transparent 8px, black 8.5px)',
          WebkitMaskSize: '100% 51%',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'top, bottom'
        }}
      >
        <div className="h-full w-[2px] border-r-[2px] border-dashed border-white/20 my-4 md:my-6"></div>
      </div>

      {/* RIGHT MAIN BODY */}
      <div className={`flex-1 bg-gradient-to-r from-[#0a0a0a] to-[#140800] rounded-r-2xl md:rounded-r-3xl border border-white/10 border-l-0 p-4 sm:p-6 md:p-12 relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 ${isTorn ? 'translate-x-4' : ''}`}>
        {/* Abstract Glow or image */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-10 w-40 h-40 bg-red-500/10 blur-[80px] pointer-events-none rounded-full"></div>
        
        <div className="relative z-10 flex flex-col xl:flex-row justify-between gap-6 h-full">
           <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-500 font-pixel text-[8px] md:text-[9px] uppercase mb-4 tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                Servicio Independiente
              </div>
              <h3 className="text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 break-words">
                Automatización & Bots
              </h3>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm font-light max-w-xl mb-6 md:mb-8 leading-relaxed">
                ¿Tareas repetitivas en tu negocio? Automatizamos literalmente cualquier proceso operativo, atención al cliente o embudo de ventas. Desarrollamos Bots a la medida para Telegram y WhatsApp que ejecutan tareas 24/7.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-300 font-mono">
                <li className="flex items-center gap-2 md:gap-3"><span className="text-orange-500 text-sm md:text-lg leading-none">❖</span> Bots a medida (Telegram/WA)</li>
                <li className="flex items-center gap-2 md:gap-3"><span className="text-orange-500 text-sm md:text-lg leading-none">❖</span> Automatización de Procesos</li>
                <li className="flex items-center gap-2 md:gap-3"><span className="text-orange-500 text-sm md:text-lg leading-none">❖</span> IA (Cerebros Virtuales)</li>
                <li className="flex items-center gap-2 md:gap-3"><span className="text-orange-500 text-sm md:text-lg leading-none">❖</span> Bases de Datos y CRM</li>
              </ul>
           </div>
           
           <div className="flex flex-col justify-end items-start xl:items-end min-w-[140px] md:min-w-[200px] border-t xl:border-t-0 xl:border-l border-white/10 pt-4 xl:pt-0 xl:pl-8">
              <div className="text-left xl:text-right w-full mb-4 md:mb-6">
                <div className="text-[9px] md:text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-1">Inversión Única</div>
                <div className="flex items-baseline justify-start xl:justify-end gap-1">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">$120</span>
                  <span className="text-xs md:text-sm font-mono text-orange-500">USD</span>
                </div>
                <div className="text-[8px] md:text-[9px] text-orange-500/80 font-pixel mt-1 md:mt-2 tracking-widest">&gt; ENTREGA: 4 DÍAS HÁBILES</div>
              </div>
              
              <button onClick={handleTear} className="w-full py-3 md:py-4 bg-orange-500/10 hover:bg-orange-500 border border-orange-500 text-orange-500 hover:text-black text-[9px] md:text-[10px] font-pixel uppercase tracking-widest rounded-xl text-center transition-all shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                {isTorn ? 'SISTEMA ASEGURADO' : 'SISTEMATIZAR MI NEGOCIO'}
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
