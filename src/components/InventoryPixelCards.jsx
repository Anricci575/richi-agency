import React from 'react';

const PixelCard = ({ title, price, desc, features, isPopular, stationNum, btnText, days }) => {
  const bgMain = isPopular ? 'bg-black' : 'bg-[#F2C94C]';
  const textMain = isPopular ? 'text-[#F2C94C]' : 'text-black';
  const borderMain = isPopular ? 'border-[#F2C94C]' : 'border-black';
  const dotColor = isPopular ? '#F2C94C' : 'black';

  return (
    <div className={`relative w-full max-w-sm mx-auto group hover:-translate-y-2 transition-transform duration-500 p-1 ${isPopular ? 'bg-black shadow-[0_0_40px_rgba(242,201,76,0.4)]' : 'bg-transparent'}`}>
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-300">
        <div className="w-full h-4 bg-gradient-to-b from-transparent via-white to-transparent animate-[scanline_4s_linear_infinite]" style={{ willChange: 'transform' }}></div>
      </div>

      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F2C94C] text-black font-pixel text-[10px] px-4 py-2 uppercase tracking-widest border-[3px] border-black z-30 whitespace-nowrap group-hover:animate-pulse">
          ★ MÁS SOLICITADO ★
        </div>
      )}

      {/* Inner wrapper - split into 3 pieces for the mask to work */}
      <div className="h-full flex flex-col relative">
        
        {/* Top Header Section */}
        <div className={`border-[3px] border-b-0 ${borderMain} p-5 flex justify-between items-start relative z-10 ${bgMain} ${textMain} overflow-hidden`}>
          {/* Dot grid background */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: `radial-gradient(${dotColor} 2px, transparent 2px)`, backgroundSize: '12px 12px' }}></div>
          
          <div className="relative z-10">
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1 opacity-80 group-hover:opacity-100 transition-opacity">STATION NUMBER</div>
            <div className="font-pixel text-6xl leading-none">{stationNum}</div>
          </div>
          <div className="text-right flex flex-col items-end relative z-10">
             <div className={`text-[7px] font-mono uppercase px-2 py-1 mb-2 font-bold tracking-widest border-2 transition-colors ${isPopular ? 'bg-[#F2C94C] text-black border-[#F2C94C]' : 'bg-black text-[#F2C94C] border-black'}`}>
               LINES ON THIS STATION<br/>1, 2, 3, 5
             </div>
             {/* Animated Fake Pixel QR Code */}
             <div className={`w-10 h-10 border-2 p-1 flex flex-wrap gap-[2px] ${borderMain} opacity-80 group-hover:opacity-100 transition-opacity`}>
               {[...Array(16)].map((_, i) => (
                 <div 
                   key={i} 
                   className={`w-[6px] h-[6px] ${isPopular ? 'bg-[#F2C94C]' : 'bg-black'} opacity-0 group-hover:animate-[pixel-flicker_steps(2,jump-none)_infinite]`}
                   style={{
                     animationDuration: `${Math.random() * 1.5 + 0.5}s`,
                     animationDelay: `${Math.random()}s`,
                   }}
                 ></div>
               ))}
             </div>
          </div>
        </div>
        
        {/* Perforated Separator (True Mask) */}
        <div 
          className={`relative h-12 flex items-center justify-center border-l-[3px] border-r-[3px] ${borderMain} ${bgMain} z-10`}
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
           {/* Dot grid background for separator */}
           <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: `radial-gradient(${dotColor} 2px, transparent 2px)`, backgroundSize: '12px 12px' }}></div>
           
           <div className={`w-full border-b-[4px] border-dotted mx-8 relative z-10 ${isPopular ? 'border-[#F2C94C]' : 'border-black'}`}></div>
        </div>
        
        {/* Main Content Body */}
        <div className={`border-[3px] border-t-0 ${borderMain} p-6 flex-1 flex flex-col relative z-10 ${bgMain} ${textMain} overflow-hidden`}>
           {/* Dot grid background */}
           <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: `radial-gradient(${dotColor} 2px, transparent 2px)`, backgroundSize: '12px 12px' }}></div>
           
           <div className="relative z-10 flex-1 flex flex-col">
             <h3 className="font-pixel text-2xl uppercase mb-4 leading-tight">{title}</h3>
           
           <div className="flex flex-col mb-6">
             <div className="flex items-baseline gap-2">
               <span className="text-5xl font-black tracking-tighter">{price}</span>
               {price !== 'A MEDIDA' && <span className="text-sm font-mono font-bold opacity-80">USD</span>}
             </div>
             {days && (
               <div className={`mt-2 font-pixel text-[9px] uppercase tracking-widest ${isPopular ? 'text-[#F2C94C]/90' : 'text-black/80'}`}>
                 &gt; ENTREGA: {days} DÍAS HÁBILES
               </div>
             )}
           </div>
           
           <p className="text-[13px] font-mono font-bold mb-8 flex-1 leading-relaxed opacity-100 min-h-[60px]">
             {desc}
           </p>
           
           <ul className="space-y-4 text-[13px] md:text-[14px] font-mono font-bold mb-10 opacity-100">
             {features.map((feat, i) => (
               <li key={i} className="flex items-start gap-3">
                 <span className={`text-[14px] leading-none ${isPopular ? 'text-[#F2C94C]' : 'text-black'}`}>■</span> 
                 <span dangerouslySetInnerHTML={{ __html: feat }} />
               </li>
             ))}
           </ul>
           
           {/* CTA Button */}
           <a 
             href="#contacto" 
             className={`w-full py-4 font-pixel text-xs uppercase tracking-widest text-center transition-all border-[3px] relative overflow-hidden group/btn
               ${isPopular 
                 ? 'bg-[#F2C94C] text-black border-[#F2C94C] hover:bg-black hover:text-[#F2C94C]' 
                 : 'bg-black text-[#F2C94C] border-black hover:bg-[#F2C94C] hover:text-black'
               }`}
           >
             <span className="relative z-10">{btnText}</span>
             {/* Pixel hover effect for button */}
             <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity" style={{ backgroundImage: `radial-gradient(${isPopular ? '#F2C94C' : 'black'} 2px, transparent 2px)`, backgroundSize: '8px 8px' }}></div>
           </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InventoryPixelCards = () => {
  const plans = [
    {
      stationNum: '14',
      title: 'CONTROL BÁSICO',
      price: '$80',
      days: '4',
      desc: 'Digitalización de inventario en la nube. Sal del desorden del papel y controla tu stock visualmente.',
      isPopular: false,
      btnText: 'SOLICITAR',
      features: [
        'Panel de Control en Nube',
        'Hasta 100 Productos (Carga)',
        'Fórmulas Autocalculables',
        'Historial de Movimientos'
      ]
    },
    {
      stationNum: '20',
      title: 'ECOSISTEMA OPERATIVO',
      price: '$200',
      days: '8',
      desc: 'Gestión total sincronizada. Comandos de entrada/salida, alertas y generación de reportes en PDF.',
      isPopular: true,
      btnText: 'SOLICITAR',
      features: [
        '<span class="font-black underline decoration-2">+ Todo lo de Control Básico</span>',
        'Integración con Bot Telegram',
        'Generación PDF Automática',
        'Alertas de Bajo Stock y Pedidos',
        'Hasta 500 Productos'
      ]
    },
    {
      stationNum: '99',
      title: 'CUSTOM ERP A MEDIDA',
      price: 'A MEDIDA',
      days: '20+',
      desc: 'Arquitectura empresarial 100% adaptable a las necesidades exactas y logística de tu negocio.',
      isPopular: false,
      btnText: 'COTIZAR PROYECTO',
      features: [
        '<span class="font-black underline decoration-2">+ Todo el Ecosistema</span>',
        'Requisiciones Complejas',
        'Analítica y Dashboards Financieros',
        'Múltiples Sucursales / Permisos',
        'Soluciones 100% Personalizadas'
      ]
    }
  ];

  return (
    <>
      <style>{`
        @keyframes pixel-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(800%); opacity: 0; }
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mt-16">
        {plans.map((p, i) => (
          <PixelCard key={i} {...p} />
        ))}
      </div>
    </>
  );
};
