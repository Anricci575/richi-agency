import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'
import WarpText from './components/WarpText'
import TextType from './components/TextType'
import StrokeText from './components/StrokeText'
import { MiniChart, AIPulse, SecurityHash, PaymentStream } from './components/MicroInteractions';

// Lazy loaded components for better performance
const AsciiRipple = lazy(() => import('./components/AsciiRipple'));
const PixelSwap = lazy(() => import('./components/PixelSwap'));
const BorderGlow = lazy(() => import('./components/BorderGlow'));
const ContactTerminal = lazy(() => import('./components/ContactTerminal').then(module => ({ default: module.ContactTerminal })));
const PricingTickets = lazy(() => import('./components/PricingTickets').then(module => ({ default: module.PricingTickets })));
const PricingTicketHorizontal = lazy(() => import('./components/PricingTickets').then(module => ({ default: module.PricingTicketHorizontal })));
const InventoryPixelCards = lazy(() => import('./components/InventoryPixelCards').then(module => ({ default: module.InventoryPixelCards })));

function App() {
  const backgroundImages = [
    '/bg4.jpg', // Luna
    '/bg1.jpg',
    '/bg2.jpg',
    '/bg3.jpg'
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 12000); // Cambia cada 12 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0B0E] text-white overflow-hidden selection:bg-primary selection:text-black">
      
      {/* Tech-Nature Background Slider with Breathing/Cloud effect */}
      <div className="fixed inset-0 z-0 pointer-events-none animate-cloud-blur mix-blend-lighten">
        {backgroundImages.map((img, index) => (
          <div 
            key={img}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[4000ms] ease-in-out ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`} 
            style={{ backgroundImage: `url("${img}")` }}
          ></div>
        ))}
      </div>
      {/* Vignette/Gradient overlay to blend the image into the dark void */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0B0B0E_80%)] pointer-events-none"></div>

      {/* Background Blobs for Mesh Gradient Effect con aparición suave */}
      <div className="animate-glow-in pointer-events-none">
        <div className="blob blob-blue"></div>
        <div className="blob blob-orange"></div>
        <div className="blob blob-purple"></div>
        <div className="blob blob-cyan"></div>
      </div>

      {/* Optional Noise Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      <div className="relative z-10 flex flex-col min-h-screen border-x border-white/10 max-w-7xl mx-auto animate-page-enter">
        
        {/* Header */}
        <header className="flex justify-between items-center p-6 border-b border-white/10 backdrop-blur-sm">
          <div className="cursor-pointer select-none flex items-center">
            <StrokeText
              text="RICHI_"
              fontSize={40}
              strokeWidth={1.5}
              strokeColor="#90CAF9"
              fillColor="#ffffff"
              fontFamily="'Inter', system-ui, -apple-system, sans-serif"
              fontWeight={900}
              letterSpacing={0}
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-light">
             <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
             <a href="#ecosistema" className="hover:text-primary transition-colors">Ecosistema</a>
             <a href="#tienda" className="hover:text-primary transition-colors">Tienda</a>
             <a href="#contacto" className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all">Cotizar</a>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center p-6 md:p-12 lg:p-24 relative">
          
          <div className="max-w-5xl">
            <div className="mb-6 lg:mb-12" style={{ height: 'clamp(120px, 20vw, 240px)', width: '120%', marginLeft: '-2%' }}>
              <WarpText
                text="LABS_"
                color="#ffffff"
                warpStrength={0.1}
                warpScale={1.5}
                speed={0.5}
                pointerInfluence={0.5}
                pointerStrength={0.5}
                refraction={0.03}
                ripple
                fontFamily="'Inter', system-ui, -apple-system, sans-serif"
                fontSize="clamp(6rem, 18vw, 13rem)"
                fontWeight={900}
                letterSpacing="-0.04em"
                style={{ height: '100%', width: '100%' }}
              />
            </div>
            
            <p className="text-xl md:text-3xl font-light text-gray-300 max-w-3xl mb-12 leading-relaxed">
              Laboratorio de innovación digital y software. Desarrollamos arquitecturas web de alto impacto, automatizaciones con IA y sistemas a la medida para negocios en expansión.
            </p>

            <div className="h-px bg-gradient-to-r from-primary via-orange-500 to-transparent w-full max-w-md mb-12 opacity-80"></div>

            <p className="font-pixel text-2xl md:text-3xl text-primary mb-16 uppercase tracking-widest drop-shadow-lg">
              &gt; INNOVATION IN DIGITAL ARCHITECTURE.
            </p>

            {/* Stats / Grid Section like the mobile screens */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 mt-12">
              <div className="border-l border-primary/50 pl-4">
                <h3 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">500k<span className="text-primary">+</span></h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Lines of Code</p>
              </div>
              <div className="border-l border-orange-500/50 pl-4">
                <h3 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">34<span className="text-orange-500">*</span></h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Active Nodes</p>
              </div>
              <div className="border-l border-purple-500/50 pl-4">
                <h3 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">04</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">NOVA System</p>
              </div>
            </div>
          </div>
        </main>

        {/* Services / Ecosystem Section */}
        <section id="servicios" className="p-6 md:p-12 lg:p-24 border-t border-white/10 bg-[#0B0B0E]/60 backdrop-blur-md relative">
          <div className="flex flex-col mb-16 gap-6 max-w-5xl">
            <div>
              <span className="font-pixel text-primary text-xl tracking-widest uppercase mb-2 block">&gt; ARQUITECTURA DE SERVICIOS</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight min-h-[3em]">
                SOLUCIONES DIGITALES //{' '}
                <span className="text-primary text-2xl md:text-4xl lg:text-5xl">
                  <TextType
                    as="span"
                    text={[
                      "A LA MEDIDA",
                      "LANDING PAGES",
                      "AUTOMATIZACIONES IA",
                      "TIENDAS ONLINE",
                      "SISTEMAS INVENTARIO"
                    ]}
                    typingSpeed={65}
                    deletingSpeed={35}
                    pauseDuration={2200}
                    showCursor={true}
                    cursorCharacter="_"
                    cursorClassName="text-primary animate-pulse"
                    startOnVisible={true}
                  />
                </span>
              </h2>
            </div>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl font-light">
              Desarrollamos infraestructura tecnológica para escalar negocios, optimizar operaciones y crear experiencias web que dominan su mercado.
            </p>
          </div>

          {/* Grid de Servicios (Bento Style) */}
          <Suspense fallback={<div className="h-64 flex items-center justify-center text-primary font-mono text-sm">CARGANDO MÓDULOS...</div>}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Servicio 1 */}
              <BorderGlow className="group" backgroundColor="#09090b" borderRadius={12} colors={['#90CAF9', '#38bdf8', '#c084fc']}>
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <span className="font-pixel text-primary text-xl md:text-2xl mb-4 block group-hover:translate-x-1 transition-transform">01 //</span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-3">Landing Pages & Webs</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    Páginas ultrarrápidas, diseño futurista de alto impacto y arquitectura orientada 100% a la conversión de clientes calificados.
                  </p>
                  <div className="flex gap-2 flex-wrap text-[9px] md:text-[10px] font-pixel text-primary/80 mt-auto">
                    <span className="px-2 py-1 bg-primary/10 rounded">REACT 19</span>
                    <span className="px-2 py-1 bg-primary/10 rounded">TAILWIND</span>
                    <span className="px-2 py-1 bg-primary/10 rounded">SEO PERFORMANCE</span>
                  </div>
                </div>
              </BorderGlow>

              {/* Servicio 2 */}
              <BorderGlow className="group" backgroundColor="#09090b" borderRadius={12} colors={['#f97316', '#fb923c', '#fdba74']} glowColor="25 90 60">
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <span className="font-pixel text-orange-500 text-xl md:text-2xl mb-4 block group-hover:translate-x-1 transition-transform">02 //</span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-3">Automatizaciones & IA</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    Eliminamos tareas repetitivas mediante agentes inteligentes, flujos de trabajo autónomos y conexión de APIs entre tus aplicaciones.
                  </p>
                  <div className="flex gap-2 flex-wrap text-[9px] md:text-[10px] font-pixel text-orange-500/80 mt-auto">
                    <span className="px-2 py-1 bg-orange-500/10 rounded">WORKFLOWS</span>
                    <span className="px-2 py-1 bg-orange-500/10 rounded">AGENTS</span>
                    <span className="px-2 py-1 bg-orange-500/10 rounded">APIs</span>
                  </div>
                </div>
              </BorderGlow>

              {/* Servicio 3 */}
              <BorderGlow className="group" backgroundColor="#09090b" borderRadius={12} colors={['#a855f7', '#c084fc', '#d8b4fe']} glowColor="270 90 70">
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <span className="font-pixel text-purple-400 text-xl md:text-2xl mb-4 block group-hover:translate-x-1 transition-transform">03 //</span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-3">Tiendas Online (E-Commerce)</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    Plataformas de venta online blindadas, checkout ultra fluido, integración con múltiples pasarelas de pago y experiencia móvil superior.
                  </p>
                  <div className="flex gap-2 flex-wrap text-[9px] md:text-[10px] font-pixel text-purple-400/80 mt-auto">
                    <span className="px-2 py-1 bg-purple-500/10 rounded">PASARELAS</span>
                    <span className="px-2 py-1 bg-purple-500/10 rounded">CHECKOUT RÁPIDO</span>
                    <span className="px-2 py-1 bg-purple-500/10 rounded">PWA</span>
                  </div>
                </div>
              </BorderGlow>

              {/* Servicio 4 */}
              <BorderGlow className="lg:col-span-2 group" backgroundColor="#09090b" borderRadius={12} colors={['#90CAF9', '#38bdf8', '#c084fc']}>
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <span className="font-pixel text-primary text-xl md:text-2xl mb-4 block group-hover:translate-x-1 transition-transform">04 //</span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-3">Sistemas a la Medida & Software</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    Desarrollo de herramientas internas, portales para clientes, bases de datos y plataformas operativas diseñadas con base en la lógica exacta de tu negocio.
                  </p>
                  <div className="flex gap-2 flex-wrap text-[9px] md:text-[10px] font-pixel text-primary/80 mt-auto">
                    <span className="px-2 py-1 bg-primary/10 rounded">FULL-STACK</span>
                    <span className="px-2 py-1 bg-primary/10 rounded">CLOUD ARCHITECTURE</span>
                    <span className="px-2 py-1 bg-primary/10 rounded">ESCALABILIDAD</span>
                  </div>
                </div>
              </BorderGlow>

              {/* Servicio 5 */}
              <BorderGlow className="group" backgroundColor="#09090b" borderRadius={12} colors={['#ffffff', '#e5e7eb', '#9ca3af']} glowColor="0 0 100">
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <span className="font-pixel text-white text-xl md:text-2xl mb-4 block group-hover:translate-x-1 transition-transform">05 //</span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-3">Sistemas de Inventario</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    Monitoreo de stock en tiempo real, trazabilidad de órdenes, reportes analíticos y sincronización multi-sucursal sin fricción.
                  </p>
                  <div className="flex gap-2 flex-wrap text-[9px] md:text-[10px] font-pixel text-gray-300 mt-auto">
                    <span className="px-2 py-1 bg-white/10 rounded">STOCK REALTIME</span>
                    <span className="px-2 py-1 bg-white/10 rounded">DASHBOARDS</span>
                  </div>
                </div>
              </BorderGlow>

            </div>
          </Suspense>

          {/* UI Arsenal Section */}
          <div className="mt-32 mb-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-white/10 pb-6">
              <div>
                <span className="font-pixel text-primary text-xl tracking-widest uppercase mb-2 block">&gt; ARSENAL UI //</span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                  MÓDULOS INTEGRABLES
                </h2>
              </div>
              <p className="text-gray-400 font-light max-w-sm mt-4 md:mt-0 text-sm md:text-right">
                Catálogo de características premium y componentes interactivos que podemos inyectar en tu ecosistema web.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1: ASCII WebGL (Video) */}
              <div className="group relative border border-white/10 rounded-xl overflow-hidden bg-black aspect-video lg:col-span-2">
                <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                  <Suspense fallback={<div className="h-full w-full flex items-center justify-center text-primary/50 text-xs font-mono">Iniciando WebGL...</div>}>
                    <AsciiRipple columns={50} rows={25} color="#90CAF9" backgroundColor="#000000" />
                  </Suspense>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 pointer-events-none">
                  <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-[10px] font-pixel mb-3 inline-block uppercase tracking-wider">
                    Efecto Cinemático
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold uppercase mb-2 text-white">Shaders WebGL & ASCII Art</h4>
                  <p className="text-gray-400 text-sm md:text-base font-light max-w-xl">
                    Interacciones fluidas y simulaciones en tiempo real para crear experiencias hipnóticas. Añade texturas de código vivas que reaccionan al mouse de tus usuarios.
                  </p>
                </div>
              </div>

              {/* Card 2: Pasarelas */}
              <div 
                className="group relative border border-white/10 rounded-xl overflow-hidden bg-black p-6 hover:border-primary/40 transition-all flex flex-col justify-end min-h-[320px] bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80')` }}
              >
                <PaymentStream />
                <div className="relative z-10 mt-auto pt-24">
                  <div className="absolute top-0 right-0 opacity-20 group-hover:opacity-100 transition-opacity">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                  </div>
                  <h4 className="text-xl font-bold uppercase mb-2 text-white">Pasarelas Multi-Divisa</h4>
                  <p className="text-gray-400 text-sm font-light">
                    Cobros automáticos integrados. Conexión segura con Stripe, PayPal, Binance Pay (Crypto) y verificación de Zelle.
                  </p>
                </div>
              </div>

              {/* Card 3: Dashboards */}
              <div 
                className="group relative border border-white/10 rounded-xl overflow-hidden bg-black p-6 hover:border-emerald-400/40 transition-all flex flex-col justify-end min-h-[320px] bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80')` }}
              >
                <MiniChart />
                <div className="relative z-10 mt-auto pt-24">
                  <div className="absolute top-0 right-0 opacity-20 group-hover:opacity-100 transition-opacity">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                  </div>
                  <h4 className="text-xl font-bold uppercase mb-2 text-white">Dashboards Analíticos</h4>
                  <p className="text-gray-400 text-sm font-light">
                    Paneles de administración personalizados con gráficos en tiempo real para visualizar ventas, tráfico y métricas vitales.
                  </p>
                </div>
              </div>

              {/* Card 4: IA Bots */}
              <div 
                className="group relative border border-white/10 rounded-xl overflow-hidden bg-black p-6 hover:border-orange-500/40 transition-all flex flex-col justify-end min-h-[320px] bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80')` }}
              >
                <AIPulse />
                <div className="relative z-10 mt-auto pt-24">
                  <div className="absolute top-0 right-0 opacity-20 group-hover:opacity-100 transition-opacity">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                  </div>
                  <h4 className="text-xl font-bold uppercase mb-2 text-white">Asistentes IA Nativos</h4>
                  <p className="text-gray-400 text-sm font-light">
                    Integramos cerebros virtuales (LLMs) directamente en tu web para brindar soporte técnico, reservas o ventas 24/7.
                  </p>
                </div>
              </div>
              
              {/* Card 5: Auth */}
              <div 
                className="group relative border border-white/10 rounded-xl overflow-hidden bg-black p-6 hover:border-purple-400/40 transition-all flex flex-col justify-end min-h-[320px] bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80')` }}
              >
                <SecurityHash />
                <div className="relative z-10 mt-auto pt-24">
                  <div className="absolute top-0 right-0 opacity-20 group-hover:opacity-100 transition-opacity">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <h4 className="text-xl font-bold uppercase mb-2 text-white">Autenticación Segura</h4>
                  <p className="text-gray-400 text-sm font-light">
                    Sistemas de Login de grado militar. Inicio de sesión ultra rápido con Google, Apple, Microsoft o Enlaces Mágicos.
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div id="planes" className="mt-32 mb-16">
            <div className="text-center mb-16">
              <span className="font-pixel text-primary text-xl tracking-widest uppercase mb-2 block">&gt; PLANES DE DESPLIEGUE</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                INVERSIÓN TECNOLÓGICA
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
                Estructuras de costos transparentes y adaptadas al mercado local venezolano. Aceptamos pagos seguros en USD vía USDT (Binance), Zelle, PayPal o Efectivo.
              </p>
            </div>

            <Suspense fallback={<div className="h-64 flex items-center justify-center text-primary font-mono text-sm">CARGANDO PLANES...</div>}>
              <PricingTickets />
              <PricingTicketHorizontal />
            </Suspense>

            {/* Inventory Plans Section */}
            <div className="mt-24 mb-16">
              <div className="text-center mb-12">
                <span className="font-pixel text-emerald-400 text-xl tracking-widest uppercase mb-2 block">&gt; ALMACENES DIGITALES & DATOS</span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                  SISTEMAS DE INVENTARIO
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light">
                  Digitalización operativa y control de stock en tiempo real con integraciones automatizadas.
                </p>
              </div>

              <Suspense fallback={<div className="h-64 flex items-center justify-center text-emerald-400 font-mono text-sm">CARGANDO MÓDULOS DE INVENTARIO...</div>}>
                <InventoryPixelCards />
              </Suspense>
            </div>

            {/* Extras Section */}
            <div className="mt-8 max-w-6xl mx-auto border border-white/10 rounded-xl p-8 bg-black/40 backdrop-blur-sm">
              <h4 className="font-pixel text-primary text-xl mb-6">&gt; ADD-ONS DE DESARROLLO WEB //</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-400">
                <div className="flex flex-col border-l border-white/10 pl-4 hover:border-primary/50 transition-colors">
                  <span className="text-white font-bold mb-1">+ Módulo E-Commerce</span> 
                  <span className="font-pixel text-primary">$250 <span className="text-gray-500">| +5 Días</span></span>
                </div>
                <div className="flex flex-col border-l border-white/10 pl-4 hover:border-primary/50 transition-colors">
                  <span className="text-white font-bold mb-1">+ Integración de Pagos</span> 
                  <span className="font-pixel text-primary">$100 <span className="text-gray-500">| +2 Días</span></span>
                </div>
                <div className="flex flex-col border-l border-white/10 pl-4 hover:border-primary/50 transition-colors">
                  <span className="text-white font-bold mb-1">+ Auto-responder Web</span> 
                  <span className="font-pixel text-primary">$40 <span className="text-gray-500">| +2 Días</span></span>
                </div>
                <div className="flex flex-col border-l border-white/10 pl-4 hover:border-primary/50 transition-colors">
                  <span className="text-white font-bold mb-1">+ Página Adicional</span> 
                  <span className="font-pixel text-primary">$30 <span className="text-gray-500">| +2 Días</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Banner Puente al Ecosistema: RICHI Tienda */}
          <div id="ecosistema" className="scroll-mt-20"></div>
          <div id="tienda" className="mt-16 rounded-2xl overflow-hidden border border-primary/30 transition-all duration-300 group cursor-pointer hover:border-primary/60 shadow-[0_0_40px_rgba(144,202,249,0.1)] bg-[#0B0B0E]">
            <Suspense fallback={<div className="h-64 flex items-center justify-center text-primary font-mono text-sm">CARGANDO ECOSISTEMA...</div>}>
              <PixelSwap
                trigger="hover"
                pixelSize={80}
                pattern="diagonal"
                duration={600}
                pixelDuration={250}
                aspectRatio="auto"
                firstContent={
                  <div className="w-full h-full bg-gradient-to-r from-primary/10 via-[#0B0B0E] to-purple-950/20"></div>
                }
                secondContent={
                  <div className="w-full h-full bg-primary"></div>
                }
              >
                <div className="w-full h-full p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none pointer-events-auto">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary font-pixel text-xs uppercase mb-3">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      Ecosistema RICHI
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">¿Buscas Productos y Artículos de la Marca?</h3>
                    <p className="text-gray-400 text-sm max-w-xl font-light">
                      Visita el brazo retail de nuestro ecosistema. Explora el catálogo de productos físicos y digitales en nuestra tienda oficial.
                    </p>
                  </div>
                  <div className="px-8 py-4 rounded-xl border border-primary text-primary font-pixel text-xl uppercase tracking-widest whitespace-nowrap shadow-[0_0_20px_rgba(144,202,249,0.2)]">
                    IR A RICHI TIENDA &gt;
                  </div>
                </div>

                <a 
                  href="#tienda" 
                  className="absolute inset-0 z-20 w-full h-full p-8 md:p-12 flex flex-col items-center justify-center gap-4 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-auto"
                >
                  <span className="font-pixel text-4xl uppercase tracking-widest drop-shadow-md">ENTRAR_</span>
                  <span className="font-mono text-sm uppercase tracking-widest opacity-80">Redireccionando al nodo comercial</span>
                </a>
              </PixelSwap>
            </Suspense>
          </div>

          {/* Spacer antes del Contact Terminal */}
          <div className="h-24"></div>

        </section>

        {/* --- FUERA DEL MAIN CONTAINER --- */}
        {/* Usamos un wrapper full-width para el terminal de contacto */}
        <div className="w-full border-t border-white/10 bg-[#050508]">
           <Suspense fallback={<div className="h-64 flex items-center justify-center text-primary font-mono text-sm">INICIANDO TERMINAL DE CONTACTO...</div>}>
             <ContactTerminal />
           </Suspense>
        </div>

        {/* Footer */}
        <footer className="p-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 backdrop-blur-md bg-[#0B0B0E]/50 gap-4 mt-auto">
          <span>NOVA SYSTEM // DIRECTOR DE ECOSISTEMA</span>
          <div className="flex gap-6">
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#ecosistema" className="hover:text-primary transition-colors">Ecosistema</a>
            <a href="#tienda" className="hover:text-primary transition-colors">Tienda</a>
          </div>
          <span className="text-primary/70">© 2026 RICHI // ALL RIGHTS RESERVED</span>
        </footer>
      </div>
    </div>
  )
}

export default App
