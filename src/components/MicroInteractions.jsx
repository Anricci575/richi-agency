import React, { useState, useEffect } from 'react';

export const MiniChart = () => {
  const [data, setData] = useState([128, 137, 122, 112, 126, 159, 129, 114, 128, 119]);
  const max = 200; // Fijo para que la escala no salte
  
  const [monthly, setMonthly] = useState(8097);
  const [yearly, setYearly] = useState(312134);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMonthly(prev => prev + Math.floor(Math.random() * 15) - 3);
      setYearly(prev => prev + Math.floor(Math.random() * 120) - 20);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setIsInteracting(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // El contenedor tiene 10 barras con 'justify-between', calculamos aproximadamente el índice
    const barIndex = Math.floor((x / rect.width) * 10);
    
    if (barIndex >= 0 && barIndex < 10) {
      // Y=0 es arriba, Y=height es abajo. Invertimos para el porcentaje de altura.
      const heightPct = Math.max(0.1, Math.min(0.95, 1 - (y / rect.height)));
      const newValue = Math.floor(heightPct * max);
      
      setData(prev => {
        const newData = [...prev];
        if (newData[barIndex] !== newValue) {
          newData[barIndex] = newValue;
        }
        return newData;
      });
    }
  };

  return (
    <>
      <div className="absolute inset-0 top-6 left-6 right-6 bottom-32 flex flex-col transition-opacity duration-500 pointer-events-auto z-20">
        
        {/* Bars container */}
        <div 
          className="flex items-end justify-between h-[60%] pb-2 border-b border-white/10 mt-4 cursor-crosshair"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsInteracting(false)}
        >
          {data.map((val, i) => {
            const heightPct = (val / max) * 100;
            return (
              <div key={i} className="flex flex-col items-center justify-end h-full w-[7%] group/bar relative">
                {/* Value on top */}
                <span className="text-[10px] font-pixel text-gray-400 mb-1 leading-none group-hover/bar:text-white group-hover/bar:scale-125 transition-all">{val}</span>
                
                {/* The Bar */}
                <div 
                  className="w-full bg-gradient-to-t from-blue-700 via-cyan-400 to-green-400 rounded-t-sm shadow-[0_0_12px_rgba(34,211,238,0.3)] group-hover/bar:shadow-[0_0_20px_rgba(52,211,153,1)] transition-all ease-out"
                  style={{
                    height: `${heightPct}%`,
                    transitionDuration: isInteracting ? '300ms' : '500ms', // Más suave y con inercia
                    animation: isInteracting ? 'none' : `pulseHeight ${1 + (i % 3) * 0.5}s infinite alternate ease-in-out`
                  }}
                />
                
                {/* X-Axis Label */}
                <span className="text-[10px] font-pixel text-gray-500 mt-2 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            )
          })}
        </div>
        
        {/* Fake UI Stats to match the reference */}
        <div className="flex justify-between mt-4 font-pixel px-2">
           <div>
             <div className="text-[9px] text-gray-400 flex items-center gap-1"><span className="text-emerald-400">✦</span> Monthly</div>
             <div className="text-lg text-white font-bold tracking-wider">${monthly.toLocaleString()}</div>
           </div>
           <div>
             <div className="text-[9px] text-gray-400 flex items-center gap-1"><span className="text-yellow-500">❖</span> Yearly</div>
             <div className="text-lg text-white font-bold tracking-wider">${yearly.toLocaleString()}</div>
           </div>
        </div>
      </div>
      
      {/* Fade overlay for main card text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none h-full top-1/2"></div>
    </>
  );
};

export const AIPulse = () => {
  return (
    <>
      <div className="absolute inset-0 top-4 left-4 right-4 bottom-32 flex flex-col items-center justify-center transition-opacity duration-500 pointer-events-none group">
        
        {/* SVG Wires with flowing data and gradients */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none" style={{ willChange: 'transform' }}>
          <defs>
            <linearGradient id="wire1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" /> {/* Emerald */}
              <stop offset="100%" stopColor="#f97316" /> {/* Orange */}
            </linearGradient>
            <linearGradient id="wire2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" /> {/* Orange */}
              <stop offset="100%" stopColor="#a855f7" /> {/* Purple */}
            </linearGradient>
            <linearGradient id="wire3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" /> {/* Orange */}
              <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
            </linearGradient>
          </defs>
          <style>
            {`
              @keyframes dash {
                to { stroke-dashoffset: -20; }
              }
              .wire {
                fill: none;
                stroke-width: 1.5;
                stroke-dasharray: 4 4;
                opacity: 0.3;
                transition: opacity 0.5s;
              }
              .group:hover .wire {
                opacity: 1;
                animation: dash 1s linear infinite;
              }
            `}
          </style>
          {/* Data Flow Lines */}
          <path d="M 20 50 Q 50 48 80 50" className="wire" stroke="url(#wire1)" />
          <path d="M 120 50 C 140 50, 150 25, 170 25" className="wire" stroke="url(#wire2)" />
          <path d="M 120 50 C 140 50, 150 75, 170 75" className="wire" stroke="url(#wire3)" />
        </svg>

        {/* Nodes layer (HTML) */}
        <div className="absolute inset-0 w-full h-full flex items-center">
          
          {/* Left Node: Trigger (WhatsApp / Green) */}
          <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-9 h-9 rounded-full border border-emerald-500 bg-[#061c11] flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-shadow">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <span className="text-[7px] font-pixel text-emerald-500 mt-2 uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">Input</span>
          </div>

          {/* Center Node: AI Brain (Orange) */}
          <div className="absolute left-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-16 h-16 border border-orange-500/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] transition-opacity"></div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500 to-yellow-300 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] rotate-45 transition-shadow">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" className="-rotate-45"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
              </div>
            </div>
            <span className="text-[8px] font-pixel text-orange-400 mt-4 uppercase tracking-widest opacity-50 group-hover:opacity-100 group-hover:animate-pulse transition-opacity">Brain</span>
          </div>

          {/* Right Node 1: Action (Stripe/API / Purple) */}
          <div className="absolute left-[85%] -translate-x-1/2 top-[25%] -translate-y-1/2 flex flex-col items-center">
            <div className="w-8 h-8 rounded-md border border-purple-500 bg-[#160b24] flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-shadow">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <span className="text-[7px] font-pixel text-purple-400 mt-2 uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">API</span>
          </div>

          {/* Right Node 2: Database (Airtable/Postgres / Cyan) */}
          <div className="absolute left-[85%] -translate-x-1/2 top-[75%] -translate-y-1/2 flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg border border-cyan-500 bg-[#061724] flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
            </div>
            <span className="text-[7px] font-pixel text-cyan-400 mt-2 uppercase tracking-widest">DB</span>
          </div>

        </div>
      </div>
      
      {/* Fade overlay for main card text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none h-full top-1/2"></div>
    </>
  );
};

export const SecurityHash = () => {
  const [status, setStatus] = useState('idle'); // idle, scanning, granted

  const handleAuth = () => {
    if (status !== 'idle') return;
    setStatus('scanning');
    
    // Simulate network/biometric delay
    setTimeout(() => {
      setStatus('granted');
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <>
      <div className="absolute inset-0 top-4 left-4 right-4 bottom-32 flex flex-col items-center justify-center pointer-events-auto z-20">
        
        {/* Glassmorphism Login Widget with Smooth Hover Effect */}
        <div className="w-full max-w-[180px] p-3 rounded-2xl bg-[#0a0514]/80 border border-purple-500/20 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col items-center gap-3 transition-all duration-700 ease-out opacity-20 group-hover:opacity-100 scale-90 group-hover:scale-100 translate-y-8 group-hover:-translate-y-2">
          
          {/* Avatar / Lock Icon */}
          <div className={`relative w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
            status === 'granted' ? 'border-emerald-400 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-110' : 
            status === 'scanning' ? 'border-purple-400 bg-purple-500/10 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]' : 
            'border-white/10 bg-white/5 text-gray-400'
          }`}>
            {status === 'granted' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            ) : status === 'scanning' ? (
              <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            )}
            
            {/* Ping effect when scanning */}
            {status === 'scanning' && (
              <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-30"></div>
            )}
          </div>

          {/* Fake Inputs */}
          <div className="w-full space-y-2">
            <div className="w-full h-7 rounded-lg bg-black/50 border border-white/5 flex items-center px-3">
              <span className="text-[9px] font-mono text-purple-200/50">admin@nexus.ai</span>
            </div>
            <div className="w-full h-7 rounded-lg bg-black/50 border border-white/5 flex items-center px-3">
              <span className="text-[12px] font-mono text-purple-200/30 tracking-widest mt-1">••••••••</span>
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={handleAuth}
            disabled={status !== 'idle'}
            className={`w-full py-2 rounded-lg text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
              status === 'granted' ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 
              status === 'scanning' ? 'bg-purple-500/30 text-purple-200 cursor-wait' :
              'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] cursor-pointer hover:-translate-y-0.5'
            }`}
          >
            {status === 'idle' && 'Login'}
            {status === 'scanning' && 'Verifying...'}
            {status === 'granted' && 'Granted'}
          </button>
        </div>

      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none h-full top-1/2"></div>
    </>
  );
};

export const PaymentStream = () => {
  const cards = [
    { id: 1, type: 'Visa', color: 'from-blue-900 to-blue-700', logo: <span className="font-black italic text-white text-[12px] tracking-tighter">VISA</span> },
    { id: 2, type: 'Mastercard', color: 'from-gray-900 to-gray-800', logo: <div className="flex"><div className="w-4 h-4 rounded-full bg-red-500/90 -mr-2 mix-blend-screen"></div><div className="w-4 h-4 rounded-full bg-orange-500/90 mix-blend-screen"></div></div> },
    { id: 3, type: 'Stripe', color: 'from-indigo-600 to-purple-600', logo: <span className="font-bold text-white text-[11px] tracking-tight">stripe</span> },
    { id: 4, type: 'Binance', color: 'from-zinc-900 to-black', logo: <span className="font-bold text-[#F3BA2F] text-[10px] tracking-wider">BINANCE</span> },
    { id: 5, type: 'PayPal', color: 'from-blue-800 to-cyan-700', logo: <span className="font-black italic text-white text-[12px] tracking-tighter">PayPal</span> },
  ];

  const CardUI = ({ card }) => (
    <div className={`w-32 h-20 rounded-xl bg-gradient-to-br ${card.color} p-3 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/10 shrink-0 relative overflow-hidden`}>
      {/* Glare effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none"></div>
      
      <div className="flex justify-between items-start relative z-10">
        {/* EMV Chip */}
        <div className="w-5 h-4 rounded-sm bg-gradient-to-br from-yellow-200 to-yellow-500 border border-yellow-600/50 flex flex-col justify-evenly p-[2px] opacity-90 shadow-sm">
          <div className="w-full h-[1px] bg-yellow-800/30"></div>
          <div className="w-full h-[1px] bg-yellow-800/30"></div>
        </div>
        {/* Wireless icon */}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0 M1.42 9a16 16 0 0 1 21.16 0 M8.53 16.11a6 6 0 0 1 6.95 0 M12 20h.01"/></svg>
      </div>
      
      <div className="flex justify-between items-end relative z-10">
        {/* Card Number Dots */}
        <div className="flex gap-1.5 opacity-60 mb-0.5">
          <div className="w-1 h-1 rounded-full bg-white"></div>
          <div className="w-1 h-1 rounded-full bg-white"></div>
          <div className="w-1 h-1 rounded-full bg-white"></div>
          <div className="w-1 h-1 rounded-full bg-white"></div>
        </div>
        {/* Brand Logo */}
        {card.logo}
      </div>
    </div>
  );

  return (
    <>
      <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none -rotate-[8deg] scale-110 pb-6">
        
        {/* Row 1 - Moving Left */}
        <div className="w-full overflow-hidden flex">
          <div className="flex w-max animate-[slideLeft_15s_linear_infinite]">
            {/* Set 1 */}
            <div className="flex gap-4 px-2">
              {cards.map(c => <CardUI key={c.id} card={c} />)}
            </div>
            {/* Set 2 (Exact duplicate for seamless loop) */}
            <div className="flex gap-4 px-2">
              {cards.map(c => <CardUI key={`dup-${c.id}`} card={c} />)}
            </div>
          </div>
        </div>
        
        {/* Row 2 - Moving Right */}
        <div className="w-full overflow-hidden flex mt-4 ml-[-60px]">
          <div className="flex w-max animate-[slideRight_18s_linear_infinite]">
            {/* Set 1 */}
            <div className="flex gap-4 px-2">
              {[...cards].reverse().map(c => <CardUI key={`r1-${c.id}`} card={c} />)}
            </div>
            {/* Set 2 (Exact duplicate for seamless loop) */}
            <div className="flex gap-4 px-2">
              {[...cards].reverse().map(c => <CardUI key={`r2-${c.id}`} card={c} />)}
            </div>
          </div>
        </div>

      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none h-full top-1/2"></div>
    </>
  );
};
