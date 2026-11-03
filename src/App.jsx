import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  Play,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Award,
  Flame,
  Dumbbell,
  Clock,
  FileText,
  CreditCard,
  Smartphone,
  Building2,
  UserCheck,
  ArrowRight,
  Menu,
  X,
  Check,
  Sparkles,
  Server,
  KeyRound,
  AlertTriangle,
  Download,
  Trophy,
  Activity,
  HeartHandshake,
  Calendar,
} from 'lucide-react';

// ==========================================
// COMPONENTE DEL LOGOTIPO OFICIAL "DF" (SEGÚN MANUAL DE MARCA)
// Construcción geométrica con la "F" de bloques separados
// ==========================================
const DFLogo = ({
  className = 'h-10',
  color = '#67D948',
  textColor = '#FFFFFF',
  showText = true,
}) => (
  <div className="flex flex-col items-start select-none group cursor-pointer">
    <svg
      viewBox="0 0 230 95"
      className={`${className} transition-transform duration-300 group-hover:scale-105`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Letra D geométrica inclinada con corte deportivo */}
      <path
        d="M18 8 H88 C115 8 130 24 125 50 C120 76 100 88 73 88 H6 L14 44 H42 L38 64 H70 C83 64 92 58 95 48 C97 38 90 32 77 32 H13 L18 8 Z"
        fill={color}
      />
      {/* Tallo vertical inclinado de la F */}
      <path d="M144 8 H174 L158 88 H128 L144 8 Z" fill={color} />
      {/* Bloque superior derecho separado de la F */}
      <rect
        x="182"
        y="8"
        width="42"
        height="34"
        rx="6"
        transform="skewX(-11)"
        fill={color}
      />
      {/* Bloque central derecho separado de la F */}
      <rect
        x="173"
        y="50"
        width="34"
        height="28"
        rx="6"
        transform="skewX(-11)"
        fill={color}
      />
    </svg>
    {showText && (
      <span
        className="font-display text-[11px] tracking-[0.26em] uppercase font-black mt-0.5 leading-none"
        style={{ color: textColor }}
      >
        David Forero
      </span>
    )}
  </div>
);

// ==========================================
// DATOS DE LOS PROGRAMAS Y MÓDULOS DE ENTRENAMIENTO
// ==========================================
const PROGRAMS_DATA = [
  {
    id: 'calistenia-cero',
    badge: 'NIVEL PRINCIPIANTE',
    title: 'De Cero a Dominadas & Fondos',
    subtitle:
      'Construye las bases de fuerza con tu propio peso corporal sin lesiones.',
    priceUSD: 47,
    priceCOP: '185.000',
    duration: '8 Semanas',
    level: 'Principiante',
    access: 'Acceso de por vida',
    featured: false,
    highlights: [
      'Aprende la técnica exacta de empuje y tracción escapular',
      'Consigue tus primeras 10 dominadas estrictas y 15 fondos',
      'Rutinas adaptables en parque de barras o en casa',
      'Guía de alimentación para recomposición corporal',
    ],
    modules: [
      {
        id: 'm1',
        title: 'Módulo 1: Calentamiento, Movilidad y Prevención',
        duration: '4 Lecciones • 45 min',
        lessons: [
          {
            id: 'l1',
            title: 'Activación escapular y manguito rotador',
            time: '12:30',
            reps: '3 series x 12 reps',
            rest: '60 seg',
            videoConcept:
              'Demostración de retracción y protracción escapular colgado en barra.',
          },
          {
            id: 'l2',
            title: 'Movilidad de muñecas y codos para calistenia',
            time: '10:15',
            reps: 'Rutina fluida 8 min',
            rest: 'Sin descanso',
            videoConcept:
              'Ejercicios de preparación articular en suelo para proteger tendones.',
          },
          {
            id: 'l3',
            title: 'Core Hollow Body: La base de todo control',
            time: '14:20',
            reps: '4 series x 30 seg isométrico',
            rest: '45 seg',
            videoConcept:
              'Retroversión pélvica y activación abdominal profunda.',
          },
        ],
      },
      {
        id: 'm2',
        title: 'Módulo 2: Progresiones de Tirón (Dominadas)',
        duration: '5 Lecciones • 1h 20m',
        lessons: [
          {
            id: 'l4',
            title: 'Dominadas Australianas (Remo invertido)',
            time: '15:00',
            reps: '4 series x 10-12 reps',
            rest: '90 seg',
            videoConcept:
              'Ajuste de inclinación corporal para ganar fuerza de espalda.',
          },
          {
            id: 'l5',
            title: 'Dominadas Negativas y Excéntricas Controladas',
            time: '16:40',
            reps: '5 series x 5 reps (5 seg bajada)',
            rest: '2 min',
            videoConcept: 'Control del descenso para romper el estancamiento.',
          },
          {
            id: 'l6',
            title: 'Tu Primera Dominada Estricta Rango Completo',
            time: '18:10',
            reps: '4 series al RPE 8',
            rest: '2 min',
            videoConcept:
              'Rompiendo el plano de la barra con el pecho sin kipping.',
          },
        ],
      },
      {
        id: 'm3',
        title: 'Módulo 3: Progresiones de Empuje (Flexiones y Fondos)',
        duration: '4 Lecciones • 55 min',
        lessons: [
          {
            id: 'l7',
            title: 'Flexiones perfectas y bloqueo de tríceps',
            time: '13:45',
            reps: '4 series x 15 reps',
            rest: '90 seg',
            videoConcept:
              'Alineación de codos a 45 grados para máxima potencia.',
          },
          {
            id: 'l8',
            title: 'Fondos en paralelas: Rango y control',
            time: '17:20',
            reps: '4 series x 8-10 reps',
            rest: '2 min',
            videoConcept:
              'Descenso controlado a 90 grados protegiendo el hombro anterior.',
          },
        ],
      },
      {
        id: 'm4',
        title: 'Módulo 4: Nutrición, Descanso y Mentalidad DF',
        duration: '3 Lecciones • 40 min + PDFs',
        lessons: [
          {
            id: 'l9',
            title: 'Cálculo de Macronutrientes y Proteína Diaria',
            time: '14:00',
            reps: 'Guía PDF descargable',
            rest: 'N/A',
            videoConcept: 'Cómo estructurar tus comidas sin dietas extremas.',
          },
          {
            id: 'l10',
            title: 'Supercompensación y descanso muscular',
            time: '11:50',
            reps: 'Planificador Semanal',
            rest: 'N/A',
            videoConcept:
              'Por qué el músculo crece cuando descansas con disciplina.',
          },
        ],
      },
    ],
  },
  {
    id: 'hipertrofia-calistenia',
    badge: 'MÁS VENDIDO • INTERMEDIO',
    title: 'Fuerza e Hipertrofia con Peso Corporal',
    subtitle:
      'Lleva tu físico al siguiente nivel: músculo denso, definición estética y dominio avanzado.',
    priceUSD: 79,
    priceCOP: '310.000',
    duration: '12 Semanas',
    level: 'Intermedio',
    access: 'Acceso de por vida + Actualizaciones',
    featured: true,
    highlights: [
      'Domina el Muscle-Up en barra y anillas paso a paso',
      'Hipertrofia real aplicando sobrecarga progresiva y tempo',
      'Entrenamiento de piernas explosivas y abdomen de acero',
      'Comunidad privada y resolución de dudas mensuales',
    ],
    modules: [
      {
        id: 'm2_1',
        title: 'Módulo 1: Biomecánica de la Sobrecarga Progresiva',
        duration: '4 Lecciones • 1h 05m',
        lessons: [
          {
            id: 'l201',
            title: 'Cómo hipertrofiar sin pesas: Palancas y Tempo',
            time: '16:20',
            reps: 'Tempo 3-1-X-1',
            rest: '90 seg',
            videoConcept:
              'Manipulación del brazo de momento para multiplicar la tensión mecánica.',
          },
          {
            id: 'l202',
            title: 'Dominadas Explosivas al Pecho y Cintura',
            time: '18:45',
            reps: '5 series x 5 reps explosivas',
            rest: '2.5 min',
            videoConcept: 'Generación de potencia máxima desde colgado pasivo.',
          },
        ],
      },
      {
        id: 'm2_2',
        title: 'Módulo 2: Ruta Completa hacia el Muscle-Up',
        duration: '6 Lecciones • 1h 45m',
        lessons: [
          {
            id: 'l203',
            title: 'La transición perfecta y agarre semiprono',
            time: '21:10',
            reps: '4 series x 6 transiciones',
            rest: '2 min',
            videoConcept:
              'El secreto técnico para pasar sobre la barra sin golpear el pecho.',
          },
          {
            id: 'l204',
            title: 'Fondos en Barra Recta (Straight Bar Dips)',
            time: '14:30',
            reps: '4 series x 10 reps',
            rest: '90 seg',
            videoConcept:
              'Empuje final del Muscle-Up con control de centro de gravedad.',
          },
        ],
      },
      {
        id: 'm2_3',
        title: 'Módulo 3: Piernas Estéticas y Potencia Inferior',
        duration: '4 Lecciones • 50 min',
        lessons: [
          {
            id: 'l205',
            title: 'Pistol Squats (Sentadilla a una pierna) desde cero',
            time: '19:00',
            reps: '4 series x 8 por pierna',
            rest: '2 min',
            videoConcept:
              'Equilibrio, dorsiflexión de tobillo y fuerza unilateral.',
          },
          {
            id: 'l206',
            title: 'Nordic Hamstring Curls y Pliometría',
            time: '15:15',
            reps: '4 series x 6 reps',
            rest: '2 min',
            videoConcept: 'Desarrollo de isquiotibiales blindados.',
          },
        ],
      },
      {
        id: 'm2_4',
        title: 'Módulo 4: Definición Corporal y Suplementación Científica',
        duration: '3 Lecciones • 45 min',
        lessons: [
          {
            id: 'l207',
            title: 'Protocolo de Déficit Calórico sin perder fuerza',
            time: '17:40',
            reps: 'Plantilla Excel Automática',
            rest: 'N/A',
            videoConcept:
              'Optimización del porcentaje graso para mejorar tu relación peso-potencia.',
          },
        ],
      },
    ],
  },
  {
    id: 'coaching-vip',
    badge: 'PERSONALIZADO 1 A 1',
    title: 'Dominio de Estáticos & Coaching VIP 1 a 1',
    subtitle:
      'Planificación 100% individualizada diseñada por David Forero con seguimiento directo.',
    priceUSD: 149,
    priceCOP: '590.000',
    duration: 'Trimestral (90 Días)',
    level: 'Todos los niveles (Adaptado)',
    access: 'Mentoría Directa + App + WhatsApp',
    featured: false,
    highlights: [
      'Evaluación física inicial por videollamada con David Forero',
      'Corrección de técnica en video todas las semanas por WhatsApp',
      'Progresiones hacia Pino (Handstand), Front Lever y Planche',
      'Plan nutricional ajustado mes a mes según tu evolución',
    ],
    modules: [
      {
        id: 'm3_1',
        title: 'Módulo 1: Onboarding y Diagnóstico Biomecánico Individual',
        duration: 'Evaluación Directa 1 a 1',
        lessons: [
          {
            id: 'l301',
            title: 'Formulario Clínico, Antropometría y Test de Fuerza',
            time: '20:00',
            reps: 'Test inicial individual',
            rest: 'Personalizado',
            videoConcept:
              'Cómo grabarte en tus pruebas iniciales para que David diseñe tu mesociclo.',
          },
        ],
      },
      {
        id: 'm3_2',
        title: 'Módulo 2: Pino Libre (Handstand) y Equilibrio Vertical',
        duration: '5 Lecciones • 1h 30m',
        lessons: [
          {
            id: 'l302',
            title: 'Alineación de línea perfecta y rebalanceo con dedos',
            time: '22:15',
            reps: '6 series x 30 seg',
            rest: '90 seg',
            videoConcept:
              'Control del miedo a caer y bloqueo escapular en elevación.',
          },
        ],
      },
      {
        id: 'm3_3',
        title: 'Módulo 3: Tensión de Front Lever y Planche',
        duration: '6 Lecciones • 2h 00m',
        lessons: [
          {
            id: 'l303',
            title: 'Tuck, Advanced Tuck y Straddle Front Lever',
            time: '24:00',
            reps: '5 series x 8-12 seg',
            rest: '3 min',
            videoConcept:
              'Activación dorsal extrema con brazos totalmente rectos.',
          },
        ],
      },
      {
        id: 'm3_4',
        title: 'Módulo 4: Seguimiento Semanal y Feedback de Técnica',
        duration: 'Canal Directo VIP',
        lessons: [
          {
            id: 'l304',
            title: 'Envío de chequeos semanales y ajustes de cargas',
            time: '10:00',
            reps: 'Revisión cada viernes',
            rest: 'N/A',
            videoConcept:
              'Metodología de corrección biomecánica personalizada.',
          },
        ],
      },
    ],
  },
];

export default function App() {
  // Navegación principal: 'home' | 'aula' | 'seguridad'
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('COP'); // 'COP' o 'USD'

  // Cursos comprados / desbloqueados en la sesión (Por defecto tiene 1 de demostración o los que compre)
  const [unlockedCourses, setUnlockedCourses] = useState([
    'hipertrofia-calistenia',
  ]);
  const [selectedProgramForModal, setSelectedProgramForModal] = useState(null);
  const [checkoutProgram, setCheckoutProgram] = useState(null);

  // Estado del Checkout Seguro
  const [paymentMethod, setPaymentMethod] = useState('wompi_pse'); // 'wompi_pse' | 'nequi' | 'card'
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Estado del Aula Virtual
  const [currentCourseId, setCurrentCourseId] = useState(
    'hipertrofia-calistenia'
  );
  const [activeLesson, setActiveLesson] = useState(
    PROGRAMS_DATA[1].modules[0].lessons[0]
  );
  const [completedLessons, setCompletedLessons] = useState(['l201']);
  const [expandedModules, setExpandedModules] = useState({
    m1: true,
    m2_1: true,
    m2_2: true,
    m3_1: true,
  });
  const [isSimulatingVideo, setIsSimulatingVideo] = useState(false);

  // Cambiar curso activo en el aula virtual y seleccionar su primera lección
  const handleSelectCourseInAula = (courseId) => {
    setCurrentCourseId(courseId);
    const found = PROGRAMS_DATA.find((p) => p.id === courseId);
    if (found && found.modules.length > 0) {
      setActiveLesson(found.modules[0].lessons[0]);
      setIsSimulatingVideo(false);
    }
  };

  // Alternar completado de lección
  const toggleLessonComplete = (lessonId) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  // Procesar simulación de pago seguro tokenizado
  const handleProcessCheckout = (e) => {
    e.preventDefault();
    if (!buyerName || !buyerEmail) return;
    setIsProcessingPayment(true);

    setTimeout(() => {
      setIsProcessingPayment(false);
      setPaymentSuccess(true);
      if (checkoutProgram && !unlockedCourses.includes(checkoutProgram.id)) {
        setUnlockedCourses((prev) => [...prev, checkoutProgram.id]);
      }
      setCurrentCourseId(checkoutProgram.id);
      setActiveLesson(checkoutProgram.modules[0].lessons[0]);
    }, 1800);
  };

  // Ir al aula virtual tras comprar
  const goToPurchasedCourse = () => {
    setPaymentSuccess(false);
    setCheckoutProgram(null);
    setActiveTab('aula');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calcular progreso del curso actual
  const currentCourseObj =
    PROGRAMS_DATA.find((p) => p.id === currentCourseId) || PROGRAMS_DATA[1];
  const allCourseLessons = currentCourseObj.modules.flatMap((m) => m.lessons);
  const completedCountInCourse = allCourseLessons.filter((l) =>
    completedLessons.includes(l.id)
  ).length;
  const progressPercentage =
    Math.round((completedCountInCourse / allCourseLessons.length) * 100) || 0;

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans selection:bg-[#67D948] selection:text-[#111111]">
      {/* Carga de tipografías fieles al Manual de Marca: Orbitron (Geométrica/Deportiva como Dovens) + League Spartan (Texto secundario) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;800&family=Orbitron:wght@600;700;800;900&display=swap');
        
        .font-display {
          font-family: 'Orbitron', sans-serif;
        }
        .font-sans {
          font-family: 'League Spartan', system-ui, -apple-system, sans-serif;
        }
        /* Patrón de semitono y malla deportiva sutil inspirado en la tarjeta de presentación del manual */
        .bg-df-mesh {
          background-image: radial-gradient(rgba(103, 217, 72, 0.14) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
        }
      `}</style>

      {/* BARRA SUPERIOR DE SEGURIDAD BLINDADA */}
      <div className="bg-[#0a0a0a] border-b border-white/10 py-2 px-4 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-gray-300">
            <span className="inline-flex items-center gap-1 text-[#67D948] font-semibold">
              <ShieldCheck className="w-4 h-4" /> Arquitectura Blindada
              Anti-Hackeo
            </span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="hidden md:inline text-gray-400">
              SSL 256-Bit • Pagos Tokenizados PCI-DSS • Sin vulnerabilidades SQL
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            {/* Selector de Moneda */}
            <div className="flex items-center bg-[#191919] rounded-full p-0.5 border border-white/10">
              <button
                onClick={() => setCurrency('COP')}
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition ${
                  currency === 'COP'
                    ? 'bg-[#67D948] text-[#111111]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                🇨🇴 COP ($)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition ${
                  currency === 'USD'
                    ? 'bg-[#67D948] text-[#111111]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                🌎 USD ($)
              </button>
            </div>
            <button
              onClick={() => setActiveTab('seguridad')}
              className="text-xs text-[#67D948] hover:underline flex items-center gap-1 font-medium"
            >
              <Lock className="w-3 h-3" /> ¿Por qué es 100% segura?
            </button>
          </div>
        </div>
      </div>

      {/* HEADER / NAVBAR PRINCIPAL */}
      <header className="sticky top-0 z-40 bg-[#111111]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Oficial DF */}
          <div onClick={() => setActiveTab('home')}>
            <DFLogo
              className="h-9 sm:h-10"
              color="#67D948"
              textColor="#FFFFFF"
            />
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium">
            <button
              onClick={() => setActiveTab('home')}
              className={`transition hover:text-[#67D948] ${
                activeTab === 'home'
                  ? 'text-[#67D948] font-bold'
                  : 'text-gray-300'
              }`}
            >
              Inicio & Programas
            </button>
            <a
              href="#sobre-david"
              onClick={() => setActiveTab('home')}
              className="text-gray-300 hover:text-[#67D948] transition"
            >
              Quién Soy
            </a>
            <a
              href="#catalogo-cursos"
              onClick={() => setActiveTab('home')}
              className="text-gray-300 hover:text-[#67D948] transition"
            >
              Módulos de Cursos
            </a>
            <button
              onClick={() => setActiveTab('seguridad')}
              className={`transition hover:text-[#67D948] flex items-center gap-1.5 ${
                activeTab === 'seguridad'
                  ? 'text-[#67D948] font-bold'
                  : 'text-gray-300'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#67D948]" />
              Seguridad Web
            </button>
          </nav>

          {/* Botones de Acción (Aula Virtual y Compra Directa) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setActiveTab('aula')}
              className={`px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition border ${
                activeTab === 'aula'
                  ? 'bg-[#67D948] text-[#111111] border-[#67D948]'
                  : 'bg-[#1a1a1a] text-white border-[#67D948]/50 hover:border-[#67D948]'
              }`}
            >
              <Play className="w-4 h-4 fill-current" />
              Aula Virtual ({unlockedCourses.length})
            </button>
            <a
              href="#catalogo-cursos"
              onClick={() => setActiveTab('home')}
              className="bg-[#67D948] hover:bg-[#58c43a] text-[#111111] font-display font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-[0_0_20px_rgba(103,217,72,0.35)] transition transform hover:-translate-y-0.5"
            >
              Empezar Ahora
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setActiveTab('aula')}
              className="px-3 py-1.5 rounded-lg bg-[#67D948]/15 border border-[#67D948] text-[#67D948] text-xs font-bold flex items-center gap-1"
            >
              <Play className="w-3.5 h-3.5 fill-current" /> Aula
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white bg-white/5"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#161616] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-lg font-bold text-white hover:text-[#67D948]"
            >
              Inicio y Catálogo de Cursos
            </button>
            <button
              onClick={() => {
                setActiveTab('aula');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-lg font-bold text-[#67D948]"
            >
              Entrar al Aula Virtual (Mis Módulos)
            </button>
            <button
              onClick={() => {
                setActiveTab('seguridad');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-base text-gray-300 hover:text-white flex items-center gap-2"
            >
              <ShieldCheck className="w-5 h-5 text-[#67D948]" /> Arquitectura
              Anti-Hackeo
            </button>
          </div>
        )}
      </header>

      {/* ==========================================
          VISTA 1: PÁGINA PRINCIPAL DE VENTAS (HOME)
         ========================================== */}
      {activeTab === 'home' && (
        <main>
          {/* HERO SECTION DE ALTO IMPACTO */}
          <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-df-mesh border-b border-white/10">
            {/* Resplandor verde corporativo de fondo */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#67D948]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#67D948]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Columna Izquierda: Propuesta de Valor */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#67D948]/10 border border-[#67D948]/40 text-[#67D948] text-xs sm:text-sm font-bold tracking-wider uppercase">
                    <Flame className="w-4 h-4" /> Plataforma Oficial de
                    Entrenamiento Online
                  </div>

                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.08] tracking-tight">
                    DOMINA TU CUERPO Y TRANSFORMA TU FÍSICO CON{' '}
                    <span className="text-[#67D948] underline decoration-[#67D948]/30 decoration-wavy underline-offset-8">
                      CALISTENIA
                    </span>
                  </h1>

                  <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
                    Programas de entrenamiento estructurados por módulos paso a
                    paso, respaldados por la ciencia y diseñados para lograr
                    fuerza real, estética y control corporal a largo plazo.
                  </p>

                  {/* Valores de Marca del Manual Corporativo */}
                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2.5 font-semibold">
                      Filosofía y Principios DF:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Disciplina',
                        'Esfuerzo',
                        'Amor Propio',
                        'Constancia',
                        'Seguridad',
                        'Libertad',
                      ].map((valor) => (
                        <span
                          key={valor}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200 flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#67D948]" />
                          {valor}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botones de Acción */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <a
                      href="#catalogo-cursos"
                      className="bg-[#67D948] hover:bg-[#58c43a] text-[#111111] font-display font-black text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(103,217,72,0.4)] flex items-center justify-center gap-3 transition transform hover:-translate-y-0.5"
                    >
                      Ver Programas y Módulos
                      <ArrowRight className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => setActiveTab('aula')}
                      className="bg-[#1b1b1b] hover:bg-white/10 text-white border border-white/20 font-display font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-xl flex items-center justify-center gap-2.5 transition"
                    >
                      <Play className="w-4 h-4 text-[#67D948] fill-current" />
                      Probar Aula Virtual Demo
                    </button>
                  </div>

                  {/* Garantías rápidas */}
                  <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 text-left">
                    <div>
                      <p className="font-display text-xl sm:text-2xl font-black text-[#67D948]">
                        100%
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Acceso inmediato tras el pago
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-xl sm:text-2xl font-black text-white">
                        24/7
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Plataforma digital multidispositivo
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-xl sm:text-2xl font-black text-[#67D948]">
                        SSL
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Pasarela blindada en Colombia y Global
                      </p>
                    </div>
                  </div>
                </div>

                {/* Columna Derecha: Tarjeta Visual de Marca DF */}
                <div className="lg:col-span-5">
                  <div className="relative bg-gradient-to-br from-[#1c1c1c] to-[#0d0d0d] rounded-3xl p-6 sm:p-8 border-2 border-[#67D948]/50 shadow-[0_0_50px_rgba(103,217,72,0.15)] overflow-hidden">
                    {/* Franja diagonal decorativa inspirada en el manual */}
                    <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#67D948] rotate-45 opacity-20 pointer-events-none" />

                    <div className="flex items-center justify-between mb-6">
                      <DFLogo
                        className="h-12"
                        color="#67D948"
                        textColor="#FFFFFF"
                        showText={true}
                      />
                      <span className="px-3 py-1 rounded-full bg-[#67D948]/20 text-[#67D948] font-display text-[11px] font-bold uppercase">
                        Certificado Europeo
                      </span>
                    </div>

                    {/* Representación visual de atleta en calistenia + métricas */}
                    <div className="relative rounded-2xl bg-[#111111] border border-white/10 p-6 mb-6 overflow-hidden">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#67D948] text-[#111111] flex items-center justify-center font-display font-black text-xl shadow-lg">
                          DF
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg text-white">
                            DAVID FORERO
                          </h3>
                          <p className="text-xs sm:text-sm text-[#67D948] font-medium">
                            Entrenador Personal • Sector Fitness European
                            Academy
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                        "Mi misión es brindarte programas de calistenia de la
                        más alta calidad en una plataforma digital intuitiva,
                        diseñada para lograr resultados reales y duraderos."
                      </p>

                      {/* Vista previa interactiva de los módulos incluidos */}
                      <div className="space-y-2.5 bg-[#181818] p-3.5 rounded-xl border border-white/5">
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center justify-between">
                          <span>Estructura de cada programa</span>
                          <span className="text-[#67D948]">Video HD + PDF</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-[#67D948] shrink-0" />
                          <span>Módulos progresivos por nivel y objetivos</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-[#67D948] shrink-0" />
                          <span>
                            Tiempos exactos de descanso, series y técnica
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-[#67D948] shrink-0" />
                          <span>
                            Seguimiento de progreso en tu Aula Virtual
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Botón rápido a vista previa de módulos */}
                    <button
                      onClick={() =>
                        setSelectedProgramForModal(PROGRAMS_DATA[1])
                      }
                      className="w-full py-3.5 px-4 rounded-xl bg-white/5 hover:bg-[#67D948] hover:text-[#111111] text-white font-display font-bold text-xs uppercase tracking-wider border border-white/15 transition flex items-center justify-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      Ver Módulos por Dentro (Ejemplo Real)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN: CATÁLOGO DE PROGRAMAS Y MÓDULOS CON COMPRA DIRECTA */}
          <section
            id="catalogo-cursos"
            className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#67D948] font-display font-bold text-xs uppercase tracking-[0.25em]">
                Programas de Entrenamiento Online
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black uppercase mt-2 mb-4">
                ELIGE TU PROGRAMA Y DESBLOQUEA TUS{' '}
                <span className="text-[#67D948]">MÓDULOS HOY</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Explora el temario completo de cada curso antes de comprar. Una
                vez realizado el pago en nuestra pasarela segura, tu acceso al
                Aula Virtual se activa al instante.
              </p>
            </div>

            {/* Tarjetas de los 3 Programas */}
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {PROGRAMS_DATA.map((program) => {
                const isUnlocked = unlockedCourses.includes(program.id);
                return (
                  <div
                    key={program.id}
                    className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition duration-300 relative ${
                      program.featured
                        ? 'bg-gradient-to-b from-[#1d281a] to-[#141414] border-2 border-[#67D948] shadow-[0_0_40px_rgba(103,217,72,0.18)] lg:-translate-y-2'
                        : 'bg-[#171717] border border-white/10 hover:border-[#67D948]/50'
                    }`}
                  >
                    <div>
                      {/* Etiqueta superior */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className={`px-3 py-1 rounded-full font-display text-[10px] font-bold uppercase tracking-wider ${
                            program.featured
                              ? 'bg-[#67D948] text-[#111111]'
                              : 'bg-white/10 text-gray-300'
                          }`}
                        >
                          {program.badge}
                        </span>
                        {isUnlocked && (
                          <span className="text-xs font-bold text-[#67D948] flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" /> Activo en tu
                            Aula
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-2xl font-black uppercase text-white mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        {program.subtitle}
                      </p>

                      {/* Precio Dinámico COP / USD */}
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-3xl sm:text-4xl font-black text-white">
                            {currency === 'COP'
                              ? `$${program.priceCOP}`
                              : `$${program.priceUSD}`}
                          </span>
                          <span className="text-xs font-bold uppercase text-[#67D948]">
                            {currency === 'COP'
                              ? 'COP • Pago Único'
                              : 'USD • Pago Único'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          {program.duration} • {program.access}
                        </p>
                      </div>

                      {/* Beneficios Clave */}
                      <ul className="space-y-3 mb-6">
                        {program.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm text-gray-200"
                          >
                            <Check className="w-4 h-4 text-[#67D948] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Resumen de Módulos Desplegable */}
                      <div className="bg-[#111111]/90 rounded-2xl p-4 border border-white/10 mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-display font-bold uppercase text-[#67D948]">
                            Contenido ({program.modules.length} Módulos)
                          </span>
                          <button
                            onClick={() => setSelectedProgramForModal(program)}
                            className="text-xs text-white underline hover:text-[#67D948]"
                          >
                            Ver lecciones detalladas
                          </button>
                        </div>
                        <div className="space-y-1.5">
                          {program.modules.map((mod) => (
                            <div
                              key={mod.id}
                              className="text-xs text-gray-300 truncate flex items-center gap-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#67D948] shrink-0" />
                              {mod.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Botones de Compra o Acceso */}
                    <div className="space-y-2.5 pt-2">
                      <button
                        onClick={() => setCheckoutProgram(program)}
                        className={`w-full py-4 px-5 rounded-xl font-display font-black text-xs sm:text-sm uppercase tracking-wider transition flex items-center justify-center gap-2 ${
                          program.featured
                            ? 'bg-[#67D948] hover:bg-[#58c43a] text-[#111111] shadow-[0_0_25px_rgba(103,217,72,0.35)]'
                            : 'bg-white hover:bg-[#67D948] text-[#111111]'
                        }`}
                      >
                        <Lock className="w-4 h-4" />
                        Comprar e Iniciar Ahora
                      </button>

                      <button
                        onClick={() => setSelectedProgramForModal(program)}
                        className="w-full py-2.5 px-4 rounded-xl bg-transparent hover:bg-white/5 text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider border border-white/10 transition"
                      >
                        Explorar Temario Completo
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECCIÓN: QUIÉN ES DAVID FORERO (HISTORIA, MISIÓN Y VISIÓN DEL MANUAL) */}
          <section
            id="sobre-david"
            className="py-20 bg-[#161616] border-y border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5">
                  <div className="bg-[#111111] p-8 rounded-3xl border border-[#67D948]/30 relative">
                    <DFLogo
                      className="h-16 mb-6"
                      color="#67D948"
                      textColor="#FFFFFF"
                    />
                    <div className="space-y-4 text-sm text-gray-300">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                        <Award className="w-6 h-6 text-[#67D948] shrink-0" />
                        <div>
                          <p className="font-bold text-white">
                            Formación Internacional
                          </p>
                          <p className="text-xs text-gray-400">
                            Entrenador Personal — Sector Fitness European
                            Academy
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                        <Activity className="w-6 h-6 text-[#67D948] shrink-0" />
                        <div>
                          <p className="font-bold text-white">
                            Especialista en Calistenia y Peso Corporal
                          </p>
                          <p className="text-xs text-gray-400">
                            Programación basada en biomecánica y adherencia
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                        <HeartHandshake className="w-6 h-6 text-[#67D948] shrink-0" />
                        <div>
                          <p className="font-bold text-white">
                            Acompañamiento Cercano
                          </p>
                          <p className="text-xs text-gray-400">
                            Disciplina, esfuerzo, amor propio, paciencia y
                            constancia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[#67D948] font-display font-bold text-xs uppercase tracking-[0.25em]">
                    Identidad Corporativa • Nosotros
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-black uppercase">
                    MÁS QUE ENTRENAMIENTO: UN ESTILO DE VIDA BASADO EN LA{' '}
                    <span className="text-[#67D948]">DISCIPLINA</span>
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Soy un deportista disciplinado y amante del ejercicio.
                    Gracias a mi pasión por el deporte me formé como entrenador
                    personal en <strong>Sector Fitness European Academy</strong>{' '}
                    con el propósito de ayudar a las personas a alcanzar sus
                    objetivos físicos y mentales de manera sostenible.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 pt-2">
                    <div className="bg-[#111111] p-6 rounded-2xl border border-white/10">
                      <h3 className="font-display font-bold text-[#67D948] uppercase text-sm mb-2">
                        Nuestra Misión
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Brindar acceso a programas de calistenia de muy alta
                        calidad a través de una plataforma digital fácil de
                        usar, combinando ciencia y experiencia para crear planes
                        efectivos que garanticen tu éxito a largo plazo.
                      </p>
                    </div>
                    <div className="bg-[#111111] p-6 rounded-2xl border border-white/10">
                      <h3 className="font-display font-bold text-[#67D948] uppercase text-sm mb-2">
                        Nuestra Visión
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Transformar la industria del fitness haciendo que la
                        calistenia sea accesible para todos, fomentando el
                        aprendizaje, el crecimiento y resultados verdaderamente
                        transformadores en salud y bienestar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ==========================================
          VISTA 2: AULA VIRTUAL INTERACTIVA (ÁREA DE MIEMBROS)
         ========================================== */}
      {activeTab === 'aula' && (
        <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabecera del Aula Virtual */}
          <div className="bg-[#171717] rounded-3xl p-6 sm:p-8 border border-white/10 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#67D948] text-xs font-display font-bold uppercase tracking-wider mb-1">
                <UserCheck className="w-4 h-4" /> Área Privada de Alumnos •
                Sesión Cifrada JWT
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-black uppercase">
                AULA VIRTUAL DAVID FORERO
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Selecciona tu programa activo, reproduce las demostraciones
                técnicas y registra tu avance diario.
              </p>
            </div>

            {/* Selector de Programa dentro del Aula */}
            <div className="flex flex-wrap gap-2">
              {PROGRAMS_DATA.map((prog) => {
                const isOwned = unlockedCourses.includes(prog.id);
                return (
                  <button
                    key={prog.id}
                    onClick={() =>
                      isOwned
                        ? handleSelectCourseInAula(prog.id)
                        : setCheckoutProgram(prog)
                    }
                    className={`px-4 py-2.5 rounded-xl text-xs font-display font-bold uppercase transition flex items-center gap-2 ${
                      currentCourseId === prog.id
                        ? 'bg-[#67D948] text-[#111111]'
                        : isOwned
                        ? 'bg-[#222222] text-white hover:bg-white/10 border border-white/10'
                        : 'bg-[#141414] text-gray-500 border border-white/5 hover:border-[#67D948]/40 hover:text-gray-300'
                    }`}
                  >
                    {isOwned ? (
                      <Play className="w-3.5 h-3.5 fill-current" />
                    ) : (
                      <Lock className="w-3.5 h-3.5" />
                    )}
                    {prog.title.split(' ')[0]} {prog.title.split(' ')[1]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Barra de Progreso del Alumno */}
          <div className="bg-[#171717] rounded-2xl p-5 border border-white/10 mb-8">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-bold text-white flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#67D948]" />
                Progreso en:{' '}
                <span className="text-[#67D948]">{currentCourseObj.title}</span>
              </span>
              <span className="font-display font-bold text-[#67D948]">
                {completedCountInCourse} de {allCourseLessons.length} lecciones
                ({progressPercentage}%)
              </span>
            </div>
            <div className="w-full h-3 bg-[#111111] rounded-full overflow-hidden border border-white/10">
              <div
                className="h-full bg-[#67D948] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Cuerpo del Aula: Reproductor a la izquierda + Módulos a la derecha */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Reproductor de Video y Ficha Técnica de la Rutina */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-[#0b0b0b] rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
                {/* Pantalla de Video */}
                <div className="aspect-video relative bg-gradient-to-br from-[#191919] to-[#0d0d0d] flex flex-col items-center justify-center p-6 text-center">
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <DFLogo className="h-5" color="#67D948" showText={false} />
                    <span className="text-xs font-bold text-gray-200">
                      {activeLesson.title}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-[#67D948]/20 text-[#67D948] border border-[#67D948]/40 px-2.5 py-1 rounded text-xs font-bold">
                    1080p 60FPS • Streaming Protegido
                  </div>

                  {!isSimulatingVideo ? (
                    <div className="max-w-md space-y-4">
                      <button
                        onClick={() => setIsSimulatingVideo(true)}
                        className="w-20 h-20 rounded-full bg-[#67D948] text-[#111111] flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(103,217,72,0.5)] hover:scale-105 transition"
                        aria-label="Reproducir lección"
                      >
                        <Play className="w-9 h-9 fill-current ml-1" />
                      </button>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                        {activeLesson.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {activeLesson.videoConcept}
                      </p>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#67D948]/20 border border-[#67D948] flex items-center justify-center animate-pulse">
                        <Dumbbell className="w-8 h-8 text-[#67D948]" />
                      </div>
                      <p className="font-display text-sm uppercase tracking-wider text-[#67D948]">
                        Reproduciendo demostración biomecánica...
                      </p>
                      <p className="text-sm text-gray-300 max-w-md">
                        "{activeLesson.videoConcept}"
                      </p>
                      <button
                        onClick={() => setIsSimulatingVideo(false)}
                        className="px-4 py-1.5 rounded-lg bg-white/10 text-xs text-gray-300 hover:bg-white/20"
                      >
                        Pausar Video
                      </button>
                    </div>
                  )}
                </div>

                {/* Controles y Prescripción del Ejercicio */}
                <div className="p-6 bg-[#151515] border-t border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <span className="text-xs text-[#67D948] font-bold uppercase">
                        Lección Activa
                      </span>
                      <h2 className="font-display text-xl font-bold text-white mt-0.5">
                        {activeLesson.title}
                      </h2>
                    </div>

                    <button
                      onClick={() => toggleLessonComplete(activeLesson.id)}
                      className={`px-5 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition shrink-0 ${
                        completedLessons.includes(activeLesson.id)
                          ? 'bg-[#67D948] text-[#111111]'
                          : 'bg-white/10 text-white hover:bg-[#67D948]/20 border border-white/15'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {completedLessons.includes(activeLesson.id)
                        ? 'Lección Completada'
                        : 'Marcar como Completada'}
                    </button>
                  </div>

                  {/* Parámetros de Entrenamiento */}
                  <div className="grid sm:grid-cols-3 gap-4 pt-6">
                    <div className="bg-[#111111] p-4 rounded-xl border border-white/5">
                      <span className="text-xs text-gray-400 flex items-center gap-1.5">
                        <Dumbbell className="w-4 h-4 text-[#67D948]" /> Volumen
                        / Series
                      </span>
                      <p className="font-bold text-white mt-1">
                        {activeLesson.reps}
                      </p>
                    </div>
                    <div className="bg-[#111111] p-4 rounded-xl border border-white/5">
                      <span className="text-xs text-gray-400 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#67D948]" /> Descanso
                        entre Series
                      </span>
                      <p className="font-bold text-white mt-1">
                        {activeLesson.rest}
                      </p>
                    </div>
                    <div className="bg-[#111111] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-400 block">
                          Material de Apoyo
                        </span>
                        <span className="font-bold text-[#67D948] text-sm">
                          Ficha Rutina PDF
                        </span>
                      </div>
                      <button
                        onClick={() => toggleLessonComplete(activeLesson.id)}
                        className="p-2.5 rounded-lg bg-[#67D948]/15 text-[#67D948] hover:bg-[#67D948] hover:text-[#111111] transition"
                        title="Descargar PDF de la rutina"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Listado Lateral de Módulos y Lecciones */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-[#171717] rounded-3xl p-5 border border-white/10">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4 flex items-center justify-between">
                  <span>Módulos del Curso</span>
                  <span className="text-xs text-[#67D948]">
                    {currentCourseObj.modules.length} Módulos
                  </span>
                </h3>

                <div className="space-y-3">
                  {currentCourseObj.modules.map((mod) => {
                    const isOpen = expandedModules[mod.id] ?? true;
                    return (
                      <div
                        key={mod.id}
                        className="rounded-2xl bg-[#111111] border border-white/10 overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setExpandedModules((prev) => ({
                              ...prev,
                              [mod.id]: !isOpen,
                            }))
                          }
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 transition"
                        >
                          <div>
                            <p className="font-bold text-sm text-white">
                              {mod.title}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {mod.duration}
                            </p>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-[#67D948] shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="border-t border-white/5 divide-y divide-white/5">
                            {mod.lessons.map((lesson) => {
                              const isCompleted = completedLessons.includes(
                                lesson.id
                              );
                              const isCurrent = activeLesson.id === lesson.id;
                              return (
                                <button
                                  key={lesson.id}
                                  onClick={() => {
                                    setActiveLesson(lesson);
                                    setIsSimulatingVideo(false);
                                  }}
                                  className={`w-full p-3.5 text-left flex items-center justify-between gap-3 transition ${
                                    isCurrent
                                      ? 'bg-[#67D948]/15 text-white'
                                      : 'hover:bg-white/5 text-gray-300'
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    {isCompleted ? (
                                      <CheckCircle2 className="w-4 h-4 text-[#67D948] shrink-0" />
                                    ) : (
                                      <Play
                                        className={`w-4 h-4 shrink-0 ${
                                          isCurrent
                                            ? 'text-[#67D948]'
                                            : 'text-gray-500'
                                        }`}
                                      />
                                    )}
                                    <span className="text-xs sm:text-sm truncate font-medium">
                                      {lesson.title}
                                    </span>
                                  </div>
                                  <span className="text-[11px] text-gray-500 shrink-0">
                                    {lesson.time}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
          VISTA 3: ARQUITECTURA DE SEGURIDAD (ANTI-HACKEO)
         ========================================== */}
      {activeTab === 'seguridad' && (
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#192416] to-[#121212] rounded-3xl p-8 sm:p-12 border-2 border-[#67D948] mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#67D948] text-[#111111] font-display text-xs font-black uppercase mb-4">
              <ShieldCheck className="w-4 h-4" /> Informe Técnico de Blindaje
              para David Forero
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-black uppercase mb-4">
              ¿POR QUÉ ESTA PLATAFORMA NO TE LA PUEDEN HACKEAR COMO UN WORDPRESS
              TRADICIONAL?
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              El 90% de los hackeos a páginas web de entrenadores y negocios
              pequeños ocurren porque usan{' '}
              <strong>WordPress con plugins vulnerables</strong> (WooCommerce
              desactualizado, temas piratas o inyecciones SQL en el servidor
              compartido). Esta nueva plataforma para{' '}
              <strong>davidforerog.com</strong> utiliza arquitectura{' '}
              <strong>Jamstack Serverless</strong> de nivel bancario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#171717] p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#67D948]/15 text-[#67D948] flex items-center justify-center mb-4">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase mb-2">
                1. Cero Plugins Vulnerables y Sin Base SQL Expuesta
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A diferencia de WordPress, aquí no existe una carpeta{' '}
                <code className="text-[#67D948]">/wp-admin</code> ni archivos
                PHP que los bots rusos o chinos puedan atacar por fuerza bruta.
                El frontend se sirve pre-compilado en una red global CDN
                (Cloudflare / Vercel) inmune a inyecciones SQL.
              </p>
            </div>

            <div className="bg-[#171717] p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#67D948]/15 text-[#67D948] flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase mb-2">
                2. Pasarela Tokenizada PCI-DSS (Wompi / Stripe)
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Los datos de tarjetas de crédito, Nequi o PSE de tus clientes{' '}
                <strong>nunca tocan tu servidor</strong>. Se procesan mediante
                iframes criptográficos certificados por Bancolombia (Wompi) o
                Stripe, eliminando cualquier riesgo de robo financiero.
              </p>
            </div>

            <div className="bg-[#171717] p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#67D948]/15 text-[#67D948] flex items-center justify-center mb-4">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase mb-2">
                3. Autenticación por Tokens Cifrados (JWT) y 2FA
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tus alumnos ingresan al Aula Virtual mediante enlaces mágicos al
                correo o contraseñas con hash criptográfico Bcrypt y
                verificación en dos pasos, evitando cuentas compartidas o
                accesos no autorizados a tus videos.
              </p>
            </div>

            <div className="bg-[#171717] p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#67D948]/15 text-[#67D948] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase mb-2">
                4. Protección Anti-DDoS y Dominio Blindado
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Al conectar <strong>davidforerog.com</strong> con Cloudflare DNS
                y activar la renovación automática junto con WHOIS Privacy en tu
                registrador, nadie podrá secuestrar tu dominio ni tumbar la
                página con tráfico malicioso.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setActiveTab('home')}
              className="bg-[#67D948] text-[#111111] font-display font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl"
            >
              Volver a los Programas de Entrenamiento
            </button>
          </div>
        </section>
      )}

      {/* ==========================================
          MODAL 1: DETALLE DE MÓDULOS DE UN PROGRAMA
         ========================================== */}
      {selectedProgramForModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#161616] border-2 border-[#67D948] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProgramForModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-display font-bold uppercase text-[#67D948]">
              Temario Oficial del Curso
            </span>
            <h3 className="font-display text-2xl font-black uppercase text-white mt-1 mb-2">
              {selectedProgramForModal.title}
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              {selectedProgramForModal.subtitle}
            </p>

            <div className="space-y-4 mb-6">
              {selectedProgramForModal.modules.map((mod) => (
                <div
                  key={mod.id}
                  className="bg-[#111111] p-4 rounded-2xl border border-white/10"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-[#67D948] text-sm">
                      {mod.title}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {mod.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {mod.lessons.map((les) => (
                      <li
                        key={les.id}
                        className="text-xs sm:text-sm text-gray-200 flex items-center justify-between bg-white/5 px-3 py-2 rounded-lg"
                      >
                        <span className="flex items-center gap-2">
                          <Play className="w-3.5 h-3.5 text-[#67D948] shrink-0" />
                          {les.title}
                        </span>
                        <span className="text-xs text-gray-400">
                          {les.reps}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const prog = selectedProgramForModal;
                  setSelectedProgramForModal(null);
                  setCheckoutProgram(prog);
                }}
                className="flex-1 bg-[#67D948] hover:bg-[#58c43a] text-[#111111] font-display font-black text-xs uppercase tracking-wider py-4 px-6 rounded-xl flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                Inscribirme a este Programa (
                {currency === 'COP'
                  ? `$${selectedProgramForModal.priceCOP} COP`
                  : `$${selectedProgramForModal.priceUSD} USD`}
                )
              </button>
              <button
                onClick={() => setSelectedProgramForModal(null)}
                className="py-4 px-6 rounded-xl bg-white/10 text-white text-xs font-bold uppercase"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 2: PASARELA DE PAGO TOKENIZADA (CHECKOUT SEGURO)
         ========================================== */}
      {checkoutProgram && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#151515] border-2 border-[#67D948] rounded-3xl max-w-xl w-full p-6 sm:p-8 relative my-8 shadow-[0_0_60px_rgba(103,217,72,0.25)]">
            <button
              onClick={() => {
                setCheckoutProgram(null);
                setPaymentSuccess(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!paymentSuccess ? (
              <form onSubmit={handleProcessCheckout} className="space-y-5">
                <div className="flex items-center gap-2 text-[#67D948] text-xs font-display font-bold uppercase">
                  <ShieldCheck className="w-4 h-4" /> Checkout Cifrado SSL
                  256-Bit • PCI-DSS
                </div>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white">
                    FINALIZAR INSCRIPCIÓN
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                    Acceso inmediato a todos los módulos de{' '}
                    <strong className="text-white">
                      {checkoutProgram.title}
                    </strong>
                  </p>
                </div>

                {/* Resumen del Pedido */}
                <div className="bg-[#111111] p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-sm">
                      {checkoutProgram.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {checkoutProgram.modules.length} Módulos completos + PDFs
                      + Aula 24/7
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-black text-xl text-[#67D948]">
                      {currency === 'COP'
                        ? `$${checkoutProgram.priceCOP} COP`
                        : `$${checkoutProgram.priceUSD} USD`}
                    </p>
                    <span className="text-[10px] text-gray-400 uppercase">
                      Pago Único Seguro
                    </span>
                  </div>
                </div>

                {/* Datos del Alumno para crear cuenta en el Aula Virtual */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-300 mb-1">
                      Tu Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Ramírez"
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111111] border border-white/15 text-white text-sm focus:border-[#67D948] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-300 mb-1">
                      Correo para tu Aula Virtual *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tucorreo@ejemplo.com"
                      value={buyerEmail}
                      onChange={(e) => setBuyerEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111111] border border-white/15 text-white text-sm focus:border-[#67D948] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Selección de Método de Pago (Colombia & Internacional) */}
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-300 mb-2">
                    Selecciona tu Método de Pago Seguro:
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('wompi_pse')}
                      className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                        paymentMethod === 'wompi_pse'
                          ? 'bg-[#67D948]/15 border-[#67D948] text-white'
                          : 'bg-[#111111] border-white/10 text-gray-400'
                      }`}
                    >
                      <Building2 className="w-5 h-5 text-[#67D948] mb-1" />
                      <span className="text-xs font-bold block">
                        PSE / Bancolombia
                      </span>
                      <span className="text-[10px] text-gray-400">
                        Wompi Colombia
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('nequi')}
                      className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                        paymentMethod === 'nequi'
                          ? 'bg-[#67D948]/15 border-[#67D948] text-white'
                          : 'bg-[#111111] border-white/10 text-gray-400'
                      }`}
                    >
                      <Smartphone className="w-5 h-5 text-[#67D948] mb-1" />
                      <span className="text-xs font-bold block">
                        Nequi / Daviplata
                      </span>
                      <span className="text-[10px] text-gray-400">
                        Aprobación 1 clic
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                        paymentMethod === 'card'
                          ? 'bg-[#67D948]/15 border-[#67D948] text-white'
                          : 'bg-[#111111] border-white/10 text-gray-400'
                      }`}
                    >
                      <CreditCard className="w-5 h-5 text-[#67D948] mb-1" />
                      <span className="text-xs font-bold block">
                        Tarjeta Crédito/Débito
                      </span>
                      <span className="text-[10px] text-gray-400">
                        Visa / Master / Stripe
                      </span>
                    </button>
                  </div>
                </div>

                {/* Campos Simulados del Método Elegido */}
                <div className="bg-[#111111] p-4 rounded-2xl border border-white/10 text-xs text-gray-300 space-y-2">
                  {paymentMethod === 'wompi_pse' && (
                    <p>
                      ✅ Conectando con pasarela certificada{' '}
                      <strong>Wompi / PSE</strong>. Tus credenciales bancarias
                      se digitan directamente en la entidad financiera sin pasar
                      por este sitio web.
                    </p>
                  )}
                  {paymentMethod === 'nequi' && (
                    <p>
                      ✅ Recibirás una notificación push de confirmación en tu
                      celular Nequi para autorizar la compra de forma segura.
                    </p>
                  )}
                  {paymentMethod === 'card' && (
                    <p>
                      ✅ Tokenización 3D-Secure activa. Ningún número de tarjeta
                      es almacenado en el servidor de davidforerog.com.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isProcessingPayment}
                  className="w-full py-4 px-6 rounded-xl bg-[#67D948] hover:bg-[#58c43a] text-[#111111] font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(103,217,72,0.4)] transition flex items-center justify-center gap-2"
                >
                  {isProcessingPayment ? (
                    <span>Verificando Token Bancario Seguro...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Pagar{' '}
                      {currency === 'COP'
                        ? `$${checkoutProgram.priceCOP} COP`
                        : `$${checkoutProgram.priceUSD} USD`}{' '}
                      y Desbloquear Curso
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Pantalla de Confirmación de Compra Exitosa */
              <div className="text-center py-6 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#67D948] text-[#111111] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(103,217,72,0.5)]">
                  <Check className="w-9 h-9 stroke-[3]" />
                </div>
                <h3 className="font-display text-2xl font-black uppercase text-white">
                  ¡INSCRIPCIÓN CONFIRMADA, {buyerName.toUpperCase()}!
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Tu pago fue procesado con éxito y hemos enviado el recibo
                  oficial a <strong>{buyerEmail}</strong>. Todos los módulos de{' '}
                  <strong>{checkoutProgram.title}</strong> ya están
                  desbloqueados en tu Aula Virtual.
                </p>
                <button
                  onClick={goToPurchasedCourse}
                  className="w-full py-4 px-6 rounded-xl bg-[#67D948] text-[#111111] font-display font-black text-sm uppercase tracking-wider"
                >
                  Entrar Ahora a Mis Módulos de Entrenamiento
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER CORPORATIVO FIEL AL MANUAL DE MARCA */}
      <footer className="bg-[#0b0b0b] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <DFLogo className="h-9" color="#67D948" textColor="#FFFFFF" />
            <div className="border-l border-white/15 pl-4 text-xs text-gray-400">
              <p className="text-white font-bold">davidforerog.com</p>
              <p>Entrenador Personal • Calistenia & Fitness Online</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1 text-[#67D948]">
              <ShieldCheck className="w-4 h-4" /> Sitio Web Blindado con SSL +
              Tokenización
            </span>
            <span>•</span>
            <span>
              © {new Date().getFullYear()} David Forero. Todos los derechos
              reservados.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
