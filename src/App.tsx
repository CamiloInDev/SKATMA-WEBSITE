import { motion, AnimatePresence } from "motion/react";
import { Music, Users, Youtube, Instagram, Facebook, MessageCircle, Play, ExternalLink, ChevronLeft, ChevronRight, Radio } from "lucide-react";
import { useState } from "react";

const BAND_IMAGES = [
  "/Carrousel1.webp",  
  "/Carrousel2.webp",
  "/Carrousel3.webp",
  "/Carrousel4.png",
];

const LIVE_SESSIONS = [
  { id: "1", title: "En Vivo en  El parque Santander", thumbnail: "/Carrousel2.webp", url: "#" },
  { id: "2", title: "Skatma Live Session - SAPO", thumbnail: "/sapo.webp", url: "https://www.youtube.com/watch?v=_IdjIAl_3KU" },
  { id: "3", title: "Ska para Todos Fest - LA SOLUCIÓN", thumbnail: "/Carrousel1.webp", url: "https://www.youtube.com/watch?v=sLWByZZbB-o" },
];

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const whatsappNumber = "573177206725";
  const whatsappMessage = encodeURIComponent("HOLA, VENGO DE LA PAGINA DE SKATMA");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const SHOW_LOGO_IMAGE = true; 
  const LOGO_URL = "/LOGO.png"; 

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % BAND_IMAGES.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + BAND_IMAGES.length) % BAND_IMAGES.length);

  return (
    <div className="min-h-screen selection:bg-ska-yellow selection:text-ska-black bg-ska-black relative">
      {/* Noise Overlay */}
      <div className="fixed inset-0 noise z-[9999]" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-ska-black/95 border-b border-ska-yellow/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-3xl font-display text-ska-yellow tracking-tighter"
          >
            SKATMA
          </motion.div>
          <div className="hidden md:flex space-x-10">
            {["Quienes Somos", "Musica", "Live", "Próximas Fechas", "Contacto"].map((item) => (
              <a
                key={item}
                href={item === "Próximas Fechas" ? "#proximas-fechas" : `#${item.toLowerCase().replace(" ", "-")}`}
                className="text-[10px] font-modern font-black uppercase tracking-[0.4em] hover:text-ska-yellow transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ska-yellow transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <span className="text-ska-yellow font-display text-xl">MENU</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 checkerboard pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ska-black via-transparent to-ska-black z-10" />
        
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {SHOW_LOGO_IMAGE ? (
              <img src={LOGO_URL} alt="Skatma Logo" className="w-[80%] max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mb-8" referrerPolicy="no-referrer" />
            ) : (
              <h1 className="text-8xl md:text-[14rem] leading-none mb-4 text-ska-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] tracking-tighter">
                SKATMA
              </h1>
            )}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm md:text-base font-modern font-black tracking-[0.8em] text-ska-yellow uppercase"
          >
            Ska Core • Oscuridad • Resistencia
          </motion.p>
        </div>

        {/* Vertical Text Detail */}
        <div className="absolute left-8 bottom-24 hidden lg:block">
          <p className="font-modern text-[10px] font-black uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr] text-zinc-600">
            SKA-CORE OSCURO DESDE EL 2011
          </p>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="bg-ska-yellow py-4 border-y-2 border-ska-black overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-ska-black font-display text-4xl whitespace-nowrap">
                SKATMA SKA CORE  EST 2011• SKATMA SKA CORE EST 2011• 
              </span>
            ))}
          </div>
          <div className="marquee-content">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-ska-black font-display text-4xl whitespace-nowrap">
                SKATMA SKA CORE • SKATMA SKA CORE • 
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <section className="py-20 bg-ska-dark relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative aspect-video md:aspect-[21/9] overflow-hidden border-x border-ska-yellow/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={BAND_IMAGES[currentImage]}
                initial={{ opacity: 0, filter: "blur(10px) grayscale(1)" }}
                animate={{ opacity: 1, filter: "blur(0px) grayscale(1)" }}
                exit={{ opacity: 0, filter: "blur(10px) grayscale(1)" }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-r from-ska-black/40 via-transparent to-ska-black/40" />
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 bg-ska-black/80 text-ska-yellow hover:bg-ska-yellow hover:text-ska-black transition-all border border-ska-yellow/20"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 bg-ska-black/80 text-ska-yellow hover:bg-ska-yellow hover:text-ska-black transition-all border border-ska-yellow/20"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Quienes Somos */}
      <section id="quienes-somos" className="py-32 bg-ska-black relative">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl mb-10 text-ska-yellow">
              <span className="text-xl font-modern font-black opacity-20 block mb-2">01. ORIGEN</span>
              HISTORIA
            </h2>
            <div className="space-y-8 text-lg font-modern leading-relaxed text-zinc-400">
              <p className="first-letter:text-6xl first-letter:font-display first-letter:text-ska-yellow first-letter:mr-4 first-letter:float-left">
                Skatma nace en un barrio del centro de Bogotá, Colombia, entre un grupo de amigos amantes de la 
                musica radical y el skateboarding. 
                Skatma no es solo música, es el eco de una generación que se niega a callar. 
                Nacidos en la penumbra de la escena underground, fusionamos la síncopa del ska 
                con la brutalidad del hardcore punk . Actualmente somos 9 personas en la banda,
                2 trompetas, 1 saxofon, 1 trombon, 2 guitarristas, 1 bajista, 1 baterista y un vocalista.
              </p>
              <p>
                Nuestras letras exploran la dualidad humana, la lucha interna y la resistencia social. 
                Un sonido crudo, oscuro y directo a la yugular.
              </p>
            </div>
          </motion.div>
          <div className="relative group">
            <div className="absolute -inset-2 border border-ska-yellow/20 group-hover:rotate-0 transition-transform duration-500 rotate-3 pointer-events-none" />
            <img 
              src="/Historia.webp" 
              alt="Skatma Live" 
              className="w-full grayscale contrast-125 border border-white/5"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Musica Section */}
      <section id="musica" className="py-32 bg-ska-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-6xl md:text-7xl mb-20 text-center">SONIDO</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-ska-black p-10 border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-ska-yellow/20" />
              <h3 className="text-2xl mb-8 text-ska-yellow flex items-center gap-3 font-modern font-black">
                <Play className="fill-current" size={20} /> SPOTIFY
              </h3>
              <div className="aspect-video bg-zinc-900/30 flex items-center justify-center border border-white/5 group-hover:border-ska-yellow/30 transition-colors relative overflow-hidden">
                <img 
                  src="/tote1.webp" 
                  alt="Spotify Preview" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <a 
                  href="https://open.spotify.com/artist/0rCcUmQ4Ma0QoQP8Gqm58m" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative z-10 flex flex-col items-center justify-center text-zinc-400 hover:text-ska-yellow transition-colors group"
                >
                  <Play size={48} className="mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-modern uppercase tracking-widest">Escuchar en Spotify</span>
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-ska-black p-10 border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-white/10" />
              <h3 className="text-2xl mb-8 text-ska-white flex items-center gap-3 font-modern font-black">
                <Youtube size={24} /> YOUTUBE
              </h3>
              <div className="aspect-video bg-zinc-900/30 flex items-center justify-center border border-white/5 group-hover:border-white/30 transition-colors relative overflow-hidden">
                <img 
                  src="/tote2.webp" 
                  alt="YouTube Preview" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <a 
                  href="https://www.youtube.com/channel/UCPEGCJDwVcnCi4n7vlS_tYg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative z-10 flex flex-col items-center justify-center text-zinc-400 hover:text-ska-white transition-colors group"
                >
                  <Youtube size={48} className="mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-modern uppercase tracking-widest">Ver en YouTube</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Sessions Section (NUEVA) */}
      <section id="live" className="py-32 bg-ska-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-6xl md:text-7xl text-ska-white">LIVE SESSIONS</h2>
            <p className="font-modern text-zinc-500 uppercase tracking-widest text-xs mb-4">La energía del directo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LIVE_SESSIONS.map((session, i) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <a 
                  href={session.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-video overflow-hidden border border-white/5">
                    <img 
                      src={session.thumbnail} 
                      alt={session.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-ska-black/40 group-hover:bg-transparent transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-ska-yellow flex items-center justify-center rounded-full text-ska-black">
                        <Play fill="currentColor" size={24} />
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-modern font-black uppercase tracking-widest group-hover:text-ska-yellow transition-colors">
                    {session.title}
                  </h3>
                  <div className="mt-2 h-px w-full bg-white/5 group-hover:bg-ska-yellow/30 transition-colors" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximas Fechas Section */}
      <section id="proximas-fechas" className="py-32 bg-ska-dark relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-6xl md:text-7xl text-ska-yellow">PRÓXIMAS FECHAS</h2>
            <p className="font-modern text-zinc-500 uppercase tracking-widest text-xs mb-4">Presentaciones en vivo</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fecha 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-ska-black p-8 border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-ska-yellow/20" />
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="text-center">
                    <div className="text-4xl font-display text-ska-yellow font-black">27</div>
                    <div className="text-sm font-modern uppercase tracking-widest text-zinc-500">FEB</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-modern font-black text-ska-white mb-2">PunkHood Festival</h3>
                  <p className="text-zinc-400 font-modern mb-4">Relevent Music Hall - Bogotá, Colombia</p>
                  <div className="flex items-center gap-4 text-sm font-modern text-zinc-500">
                    <span className="uppercase tracking-widest">21:00</span>
                    <span className="text-ska-yellow">$60.000</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-white/5 group-hover:bg-ska-yellow/30 transition-colors" />
            </motion.div>

            {/* Fecha 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-ska-black p-8 border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-white/10" />
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="text-center">
                    <div className="text-4xl font-display text-ska-white font-black">14</div>
                    <div className="text-sm font-modern uppercase tracking-widest text-zinc-500">MAR</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-modern font-black text-ska-yellow mb-2">Equipo animal por el Catatumbo</h3>
                  <p className="text-zinc-400 font-modern mb-4">Casa cultural los Martires - Bogota</p>
                  <div className="flex items-center gap-4 text-sm font-modern text-zinc-500">
                    <span className="uppercase tracking-widest">16:00</span>
                    <span className="text-ska-white">Alimento no perecedero / Aporte voluntario</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-white/5 group-hover:bg-white/30 transition-colors" />
            </motion.div>

            {/* Fecha 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-ska-black p-8 border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-ska-yellow/20" />
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="text-center">
                    <div className="text-4xl font-display text-ska-yellow font-black">11</div>
                    <div className="text-sm font-modern uppercase tracking-widest text-zinc-500">ABR</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-modern font-black text-ska-white mb-2">Festival Kalle y Ruido</h3>
                  <p className="text-zinc-400 font-modern mb-4">Garage - Restrepo, Bogota</p>
                  <div className="flex items-center gap-4 text-sm font-modern text-zinc-500">
                    <span className="uppercase tracking-widest">16:00</span>
                    <span className="text-ska-yellow">$30.000</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-white/5 group-hover:bg-ska-yellow/30 transition-colors" />
            </motion.div>

            {/* Fecha 4 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-ska-black p-8 border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-white/10" />
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="text-center">
                    <div className="text-4xl font-display text-ska-white font-black">16</div>
                    <div className="text-sm font-modern uppercase tracking-widest text-zinc-500">MAY</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-modern font-black text-ska-yellow mb-2">Estruendo PunkRock</h3>
                  <p className="text-zinc-400 font-modern mb-4">El Estruendo bar, Bogota</p>
                  <div className="flex items-center gap-4 text-sm font-modern text-zinc-500">
                    <span className="uppercase tracking-widest">19:00</span>
                    <span className="text-ska-white">$18.000 en preventa</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-white/5 group-hover:bg-white/30 transition-colors" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-32 bg-ska-dark relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative z-10">
            <h2 className="text-6xl md:text-8xl mb-8">RUIDO</h2>
            <p className="text-xl font-modern text-zinc-500 mb-16 max-w-lg mx-auto">
              Para contrataciones, prensa o alianzas oscuras.
            </p>
            
            <div className="flex justify-center gap-16 mb-24">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/skatma.sc/" },
                { Icon: Facebook, href: "https://www.facebook.com/skatma.skacore" },
                { Icon: MessageCircle, href: whatsappUrl }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-ska-yellow transition-all hover:-translate-y-2">
                  <item.Icon size={32} />
                </a>
              ))}
            </div>

            <div className="group relative inline-block">
              <div className="absolute -inset-2 bg-ska-yellow/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-ska-yellow text-ska-black px-12 py-5 font-modern font-black text-xl tracking-tighter hover:bg-ska-white transition-colors cursor-pointer">
                SKATMASKACORE@GMAIL.COM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-ska-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <Radio className="text-ska-yellow animate-pulse" />
            <p className="text-ska-yellow font-display text-4xl">SKATMA</p>
          </div>
          <div className="text-right">
            <p className="text-zinc-700 text-[10px] font-modern uppercase tracking-[0.5em] mb-2">
              © {new Date().getFullYear()} • CamiloInDev • Skatma
            </p>
            <p className="text-zinc-800 text-[8px] font-modern uppercase tracking-[0.3em]">
              Designed for the resistance
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Bubble */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="fixed bottom-8 right-8 z-[100] bg-ska-black text-ska-yellow p-5 border border-ska-yellow/30 shadow-2xl flex items-center justify-center group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-6 bg-ska-yellow text-ska-black px-4 py-2 font-modern font-black text-[10px] uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none translate-x-4 group-hover:translate-x-0">
          WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
