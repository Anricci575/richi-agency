import React from 'react';

export const ContactTerminal = () => {
  return (
    <div id="contacto" className="mt-32 pt-16 relative scroll-mt-20">
      
      {/* Background HUD elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_#90CAF9]"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 border-t border-dashed border-white/10"></div>
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/5 border-l border-dashed border-white/10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 mb-24">
        
        {/* Terminal Header */}
        <div className="flex flex-col items-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/30 bg-primary/5 shadow-[inset_0_0_20px_rgba(144,202,249,0.1)] mb-8">
            <span className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_10px_#90CAF9]"></span>
            <span className="font-mono text-primary text-xs uppercase tracking-[0.3em]">SECURE_CHANNEL_OPEN</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-lg">
            ESTABLECER ENLACE
          </h2>
          <p className="font-mono text-primary/70 text-xs md:text-sm uppercase tracking-widest max-w-2xl mx-auto text-center">
            &gt; Selecciona un nodo de comunicación para transferir datos de tu proyecto.
          </p>
        </div>

        {/* HUD Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
          
          {/* Decorative Corner Brackets (Background Frame) */}
          <div className="hidden lg:block absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-primary/30 pointer-events-none"></div>
          <div className="hidden lg:block absolute -top-8 -right-8 w-16 h-16 border-t-2 border-r-2 border-primary/30 pointer-events-none"></div>
          <div className="hidden lg:block absolute -bottom-8 -left-8 w-16 h-16 border-b-2 border-l-2 border-primary/30 pointer-events-none"></div>
          <div className="hidden lg:block absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-primary/30 pointer-events-none"></div>

          {/* ---------------- AGENCIA NODE ---------------- */}
          <div className="relative group p-1">
            {/* Cyberpunk Animated Background & Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/5 opacity-30 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 border border-primary/20 group-hover:border-primary/50 transition-colors shadow-[0_0_30px_rgba(144,202,249,0)] group-hover:shadow-[0_0_30px_rgba(144,202,249,0.15)]"></div>
            
            <div className="relative h-full bg-[#050508]/90 backdrop-blur-md p-8 lg:p-10 flex flex-col border-t-[4px] border-t-primary">
              
              {/* Header Panel */}
              <div className="flex justify-between items-start mb-10 border-b border-primary/10 pb-6">
                <div>
                  <h3 className="font-pixel text-2xl text-white uppercase tracking-widest mb-3 flex items-center gap-3">
                    <span className="text-primary animate-pulse">&gt;</span> AGENCIA RICHI
                  </h3>
                  <p className="text-primary/70 text-[10px] font-mono uppercase tracking-[0.2em] bg-primary/10 inline-block px-2 py-1">
                    [ NODO CORPORATIVO ]
                  </p>
                </div>
                {/* Tech Deco */}
                <div className="text-right hidden sm:block">
                  <div className="text-[10px] font-mono text-gray-500 mb-1">SYS.STATUS: ONLINE</div>
                  <div className="text-[10px] font-mono text-gray-500">LATENCY: 12ms</div>
                </div>
              </div>
              
              {/* Commands */}
              <div className="flex-grow space-y-4 font-mono">
                
                <a href="https://wa.me/584161437190" target="_blank" rel="noreferrer" 
                   className="block relative bg-primary/5 hover:bg-primary/20 border border-primary/20 hover:border-primary/60 p-5 transition-all duration-300 group/cmd cursor-pointer overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary transform scale-y-0 group-hover/cmd:scale-y-100 transition-transform origin-top"></div>
                  <div className="flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="text-primary text-xs opacity-50">C:\&gt;</span>
                      <span className="text-sm font-bold tracking-widest text-white group-hover/cmd:text-primary transition-colors">CONNECT_WHATSAPP</span>
                    </div>
                    <span className="text-xs text-primary/50 group-hover/cmd:text-primary/90 hidden sm:block">+58 416-1437190</span>
                  </div>
                </a>

                <a href="https://www.instagram.com/richy_r.90/" target="_blank" rel="noreferrer" 
                   className="block relative bg-primary/5 hover:bg-primary/20 border border-primary/20 hover:border-primary/60 p-5 transition-all duration-300 group/cmd cursor-pointer overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary transform scale-y-0 group-hover/cmd:scale-y-100 transition-transform origin-top"></div>
                  <div className="flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="text-primary text-xs opacity-50">C:\&gt;</span>
                      <span className="text-sm font-bold tracking-widest text-white group-hover/cmd:text-primary transition-colors">EXEC_INSTAGRAM</span>
                    </div>
                    <span className="text-xs text-primary/50 group-hover/cmd:text-primary/90 hidden sm:block">@richy_r.90</span>
                  </div>
                </a>

              </div>
              
              {/* Footer Panel Deco */}
              <div className="mt-12 pt-4 border-t border-white/5 flex justify-between items-center opacity-40 font-mono text-[9px]">
                <span>ID: #0089-R</span>
                <span className="w-24 h-[1px] bg-gradient-to-r from-primary to-transparent"></span>
              </div>
            </div>
          </div>

          {/* ---------------- FOUNDER NODE ---------------- */}
          <div className="relative group p-1 mt-4 lg:mt-0 lg:top-8">
             {/* Cyberpunk Animated Background & Border */}
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-purple-500/5 opacity-30 group-hover:opacity-100 transition-opacity duration-700"></div>
             <div className="absolute inset-0 border border-purple-500/20 group-hover:border-purple-500/50 transition-colors shadow-[0_0_30px_rgba(168,85,247,0)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"></div>
             
             <div className="relative h-full bg-[#050508]/90 backdrop-blur-md p-8 lg:p-10 flex flex-col border-t-[4px] border-t-purple-500">
               
               {/* Header Panel */}
               <div className="flex justify-between items-start mb-10 border-b border-purple-500/10 pb-6">
                 <div>
                   <h3 className="font-pixel text-2xl text-white uppercase tracking-widest mb-3 flex items-center gap-3">
                     <span className="text-purple-400 animate-pulse">&gt;</span> ANDRÉS RICCI
                   </h3>
                   <p className="text-purple-400/70 text-[10px] font-mono uppercase tracking-[0.2em] bg-purple-500/10 inline-block px-2 py-1">
                     [ ADMIN // FULL STACK ]
                   </p>
                 </div>
                 {/* Tech Deco */}
                 <div className="text-right hidden sm:block">
                   <div className="text-[10px] font-mono text-gray-500 mb-1">AUTH: VERIFIED</div>
                   <div className="text-[10px] font-mono text-gray-500">ACCESS: ROOT</div>
                 </div>
               </div>
               
               {/* Commands */}
               <div className="flex-grow space-y-4 font-mono">
                 
                 <a href="https://wa.me/584144322229" target="_blank" rel="noreferrer" 
                    className="block relative bg-purple-500/5 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/60 p-5 transition-all duration-300 group/cmd cursor-pointer overflow-hidden">
                   <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 transform scale-y-0 group-hover/cmd:scale-y-100 transition-transform origin-top"></div>
                   <div className="flex justify-between items-center relative z-10">
                     <div className="flex items-center gap-4">
                       <span className="text-purple-400 text-xs opacity-50">C:\&gt;</span>
                       <span className="text-sm font-bold tracking-widest text-white group-hover/cmd:text-purple-400 transition-colors">CONNECT_DIRECT</span>
                     </div>
                     <span className="text-xs text-purple-400/50 group-hover/cmd:text-purple-400/90 hidden sm:block">+58 414-4322229</span>
                   </div>
                 </a>
 
                 <div className="grid grid-cols-2 gap-4">
                   <a href="https://richi-dev.vercel.app/" target="_blank" rel="noreferrer" 
                      className="block relative bg-purple-500/5 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/60 p-4 transition-all duration-300 group/cmd cursor-pointer overflow-hidden text-center">
                     <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 transform scale-x-0 group-hover/cmd:scale-x-100 transition-transform origin-left"></div>
                     <span className="block text-xs font-bold tracking-widest text-white group-hover/cmd:text-purple-400 mb-2">PORTAFOLIO</span>
                     <span className="block text-[9px] text-purple-400/50 bg-black/50 py-1 rounded">WEB_VIEW</span>
                   </a>
                   
                   <a href="https://github.com/Anricci575" target="_blank" rel="noreferrer" 
                      className="block relative bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/60 p-4 transition-all duration-300 group/cmd cursor-pointer overflow-hidden text-center">
                     <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover/cmd:scale-x-100 transition-transform origin-left"></div>
                     <span className="block text-xs font-bold tracking-widest text-white group-hover/cmd:text-white mb-2">GITHUB</span>
                     <span className="block text-[9px] text-white/50 bg-black/50 py-1 rounded">REPO_ACCESS</span>
                   </a>
                 </div>
 
                 <a href="https://www.instagram.com/andres.ricci.90/" target="_blank" rel="noreferrer" 
                    className="block relative bg-pink-500/5 hover:bg-pink-500/20 border border-pink-500/20 hover:border-pink-500/60 p-5 transition-all duration-300 group/cmd cursor-pointer overflow-hidden">
                   <div className="absolute left-0 top-0 h-full w-1 bg-pink-500 transform scale-y-0 group-hover/cmd:scale-y-100 transition-transform origin-top"></div>
                   <div className="flex justify-between items-center relative z-10">
                     <div className="flex items-center gap-4">
                       <span className="text-pink-500 text-xs opacity-50">C:\&gt;</span>
                       <span className="text-sm font-bold tracking-widest text-white group-hover/cmd:text-pink-400 transition-colors">EXEC_INSTAGRAM</span>
                     </div>
                     <span className="text-xs text-pink-500/50 group-hover/cmd:text-pink-400/90 hidden sm:block">@andres.ricci.90</span>
                   </div>
                 </a>
 
               </div>
               
               {/* Footer Panel Deco */}
               <div className="mt-12 pt-4 border-t border-white/5 flex justify-between items-center opacity-40 font-mono text-[9px]">
                 <span>KEY: #FNDR-X9</span>
                 <span className="w-24 h-[1px] bg-gradient-to-l from-purple-500 to-transparent"></span>
               </div>
             </div>
           </div>
          
        </div>
      </div>
    </div>
  );
};
