import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  ChevronRight, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Gamepad2, 
  ShieldCheck, 
  Wrench, 
  Instagram, 
  Facebook, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

// --- DATA ---
const CARS = [
  {
    id: 1,
    name: 'Porsche 911 GT3 RS',
    category: 'Supercar',
    price: '$285,000',
    stats: { hp: '518', top: '296 km/h', acceleration: '3.2s' },
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 2,
    name: 'Range Rover SV',
    category: 'Luxury SUV',
    price: '$210,000',
    stats: { hp: '523', top: '250 km/h', acceleration: '4.4s' },
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 3,
    name: 'BMW M8 Competition',
    category: 'Coupe',
    price: '$145,000',
    stats: { hp: '617', top: '305 km/h', acceleration: '3.0s' },
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 4,
    name: 'Mercedes-Benz G63 AMG',
    category: 'Off-Road Luxury',
    price: '$195,000',
    stats: { hp: '577', top: '220 km/h', acceleration: '4.5s' },
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=1200',
  },
];

const SERVICES = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Procedência Garantida',
    description: 'Todos os nossos veículos passam por uma rigorosa perícia técnica e documental.'
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Pós-Venda Especializado',
    description: 'Suporte técnico completo e oficina de alta performance para manter seu investimento impecável.'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Importação Sob Medida',
    description: 'Trazemos o carro dos seus sonhos diretamente para Ciudad del Este com agilidade e transparência.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Exclusividade',
    description: 'Acesso antecipado aos lançamentos mais desejados do mercado automotivo mundial.'
  }
];

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-luxury-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative overflow-hidden w-10 h-10 flex items-center justify-center bg-primary-red rounded-sm">
            <Car className="text-white w-6 h-6" />
            <motion.div 
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-xl tracking-tighter uppercase italic text-primary-red">Multi</span>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase opacity-60 ml-0.5">Marcas CDE</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Inventário', 'Serviços', 'Sobre nós', 'Contato'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium tracking-wide uppercase hover:text-primary-red transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-primary-red text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-white hover:text-luxury-black transition-all duration-300">
            Falar Consultor
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-luxury-gray border-t border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {['Inventário', 'Serviços', 'Sobre nós', 'Contato'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-lg font-display uppercase font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="w-full bg-primary-red py-4 text-sm font-bold uppercase tracking-widest">
              Agendar Visita
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-luxury-black/20 to-luxury-black z-10" />
        <motion.img 
          src="https://images.unsplash.com/photo-1614162692292-7ac51d7b7e1e?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Car Dark Background"
          className="w-full h-full object-cover scale-110"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 border border-primary-red/30 bg-primary-red/5 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase text-primary-red mb-6">
            Exclusividade & Tradição MultiMarcas
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-light leading-[0.9] tracking-tighter mb-8 max-w-4xl mx-auto text-balance">
            DEFININDO O <span className="font-bold underline decoration-primary-red/30">PADRÃO LUXO</span> NO PARAGUAI
          </h1>
          <p className="text-lg md:text-xl font-light text-white/60 max-w-2xl mx-auto mb-12">
            A boutique automotiva mais exclusiva de Ciudad del Este. Onde a paixão por motores encontra a sofisticação absoluta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-red text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary-red/20 group flex items-center justify-center gap-2">
              Ver Coleção
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-luxury-black transition-all">
              Agendar Visita
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Footer Meta */}
      <div className="absolute bottom-10 left-0 w-full z-20 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-end border-t border-white/10 pt-8">
          <div className="flex gap-16">
            <div>
              <p className="text-[10px] uppercase font-bold text-white/40 mb-1 tracking-widest">Localização</p>
              <p className="text-xs font-medium">Ciudad del Este, Paraguai</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-white/40 mb-1 tracking-widest">Ano de Origem</p>
              <p className="text-xs font-medium">Desde 2012</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[10px] uppercase font-bold text-white/40 mb-1 tracking-widest">Nossas Redes</p>
            <div className="flex gap-4">
              <Instagram className="w-4 h-4 text-white/60 hover:text-primary-red cursor-pointer transition-colors" />
              <Facebook className="w-4 h-4 text-white/60 hover:text-primary-red cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Inventory = () => {
  return (
    <section id="inventário" className="py-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary-red font-bold text-xs uppercase tracking-[0.3em] block mb-4">Seleção Exclusiva</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight">INVENTÁRIO <span className="opacity-30">PREMIUM</span></h2>
          </div>
          <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
            <span className="text-xs font-bold uppercase tracking-widest">Ver todos os modelos</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARS.map((car, index) => (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-luxury-gray"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-0.5 bg-primary-red text-[8px] font-black uppercase tracking-widest">{car.category}</span>
                    <span className="text-lg font-display font-bold">{car.price}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium mb-4">{car.name}</h3>
                  
                  <div className="grid grid-cols-3 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="text-center p-2 bg-white/5 backdrop-blur-sm rounded-sm">
                      <p className="text-[8px] uppercase text-white/40 tracking-widest mb-1">Potência</p>
                      <p className="text-xs font-bold">{car.stats.hp} HP</p>
                    </div>
                    <div className="text-center p-2 bg-white/5 backdrop-blur-sm rounded-sm">
                      <p className="text-[8px] uppercase text-white/40 tracking-widest mb-1">Top Speed</p>
                      <p className="text-xs font-bold">{car.stats.top}</p>
                    </div>
                    <div className="text-center p-2 bg-white/5 backdrop-blur-sm rounded-sm">
                      <p className="text-[8px] uppercase text-white/40 tracking-widest mb-1">0-100</p>
                      <p className="text-xs font-bold">{car.stats.acceleration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Services = () => {
  return (
    <section id="serviços" className="py-24 bg-luxury-gray relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-red/5 blur-[120px] rounded-full -mr-20 -mt-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary-red font-bold text-xs uppercase tracking-[0.3em] block mb-4">Nossa Excelência</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">POR QUE ESCOLHER A <span className="italic text-primary-red uppercase">MultiMarcas</span>?</h2>
            <p className="text-lg text-white/60 mb-12 max-w-xl">
              Referência em Ciudad del Este, a MultiMarcas une tradição e exclusividade. Oferecemos uma seleção criteriosa dos melhores veículos mundiais.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-red text-white">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold uppercase text-sm tracking-wide mb-2">{service.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative max-w-md">
              <div className="absolute -inset-4 border border-primary-red/20 z-0 hidden sm:block" />
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Showroom Details" 
                className="relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-6 -left-10 bg-primary-red p-8 z-20 hidden lg:block">
                <p className="text-4xl font-display font-bold italic line-height-1 mb-1">+12</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Anos de Liderança</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-12">ESTAMOS <br/><span className="text-primary-red">À SUA ESPERA</span></h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 flex items-center justify-center ring-1 ring-white/10 rounded-full flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-red" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Nosso Endereço</h4>
                  <p className="text-lg">Av. Monseñor Rodriguez, Km 4 <br/>7000 Ciudad del Este, Paraguai</p>
                  <a href="https://maps.app.goo.gl/uXhV34XAAyeTXCu46" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-xs font-bold text-primary-red uppercase tracking-widest border-b border-primary-red/30 pb-0.5 hover:border-primary-red transition-all">Ver no Google Maps</a>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 flex items-center justify-center ring-1 ring-white/10 rounded-full flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-red" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Atendimento</h4>
                  <p className="text-lg">+595 983 617192</p>
                  <p className="text-sm text-white/50">vendas@multimarcascde.com.py</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button className="flex-1 bg-white/5 border border-white/10 py-4 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Instagram className="w-4 h-4" /> Instagram
              </button>
              <button className="flex-1 bg-white/5 border border-white/10 py-4 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Facebook className="w-4 h-4" /> Facebook
              </button>
            </div>
          </div>

          <div className="bg-luxury-gray p-10 relative">
            <h3 className="text-xl font-display font-medium mb-8 uppercase tracking-widest">Enviar Mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase font-bold text-white/40 mb-2 block tracking-widest">Nome Completo</label>
                  <input type="text" className="w-full bg-luxury-black border-none focus:ring-1 focus:ring-primary-red p-4 text-sm" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-white/40 mb-2 block tracking-widest">WhatsApp</label>
                  <input type="text" className="w-full bg-luxury-black border-none focus:ring-1 focus:ring-primary-red p-4 text-sm" placeholder="+595 ..." />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold text-white/40 mb-2 block tracking-widest">Assunto de interesse</label>
                <select className="w-full bg-luxury-black border-none focus:ring-1 focus:ring-primary-red p-4 text-sm appearance-none">
                  <option>Consultar veículo em estoque</option>
                  <option>Encomendar modelo exclusivo</option>
                  <option>Vender meu veículo</option>
                  <option>Serviços mecânicos</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold text-white/40 mb-2 block tracking-widest">Mensagem</label>
                <textarea rows={4} className="w-full bg-luxury-black border-none focus:ring-1 focus:ring-primary-red p-4 text-sm" placeholder="Como podemos ajudá-lo?" />
              </div>
              <button className="w-full bg-primary-red py-5 text-sm font-bold uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                ENVIAR AGORA
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const Footer = () => {
  return (
    <footer className="bg-luxury-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 flex items-center justify-center bg-primary-red rounded-sm">
                <Car className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter uppercase italic text-primary-red">MultiMarcas</span>
            </div>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed mb-8">
              A maior variedade de veículos premium da fronteira. Qualidade, confiança e atendimento Personalizado em um só lugar.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#inventários" className="hover:text-primary-red transition-colors">Estoque</a></li>
              <li><a href="#serviços" className="hover:text-primary-red transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-primary-red transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-primary-red transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-white mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-primary-red transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary-red transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary-red transition-colors">Garantia</a></li>
              <li><a href="#" className="hover:text-primary-red transition-colors">Exportação</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2026 MultiMarcas CDE. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <p className="text-[10px] text-white/20 uppercase tracking-widest cursor-pointer hover:text-white">Cookies</p>
            <p className="text-[10px] text-white/20 uppercase tracking-widest cursor-pointer hover:text-white">Legal</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Inventory />
      <div className="h-px bg-white/5" />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
