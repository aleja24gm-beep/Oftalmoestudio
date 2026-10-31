import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCw, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  Lightbulb, 
  Award,
  AlertCircle 
} from 'lucide-react';
import { SUBSPECIALTY_MODULES } from '../data/modulesData';
import { SubspecialtyId } from '../types/ophthalmology';

interface Flashcard {
  id: string;
  subspecialtyId: SubspecialtyId;
  frontQuestion: string;
  backAnswer: string;
  clinicalPearl: string;
  highYieldTag: string;
}

const FLASHCARDS_DECK: Flashcard[] = [
  {
    id: 'fc-1',
    subspecialtyId: 'cornea',
    frontQuestion: '¿Cuál es el patógeno bacteriano capaz de penetrar un epitelio corneal intacto?',
    backAnswer: 'Mnemotecnia CHEN: Corynebacterium diphtheriae, Haemophilus aegyptius, Enterobacteriaceae / Echovirus, Neisseria gonorrhoeae y Neisseria meningitidis (también Listeria monocytogenes).',
    clinicalPearl: 'Neisseria gonorrhoeae puede perforar la córnea en menos de 24-48 horas si no se trata con Ceftriaxona sistémica inmediata.',
    highYieldTag: 'Microbiología Corneal'
  },
  {
    id: 'fc-2',
    subspecialtyId: 'glaucoma',
    frontQuestion: '¿Qué es el síndrome de Vogt-Koyanagi-Harada vs Oftalmia Simpática en anatomopatología?',
    backAnswer: 'Ambas son panuveítis granulomatosas bilaterales T-mediadas. La Oftalmia Simpática requiere el antecedente de trauma ocular penetrante o cirugía previa en el ojo excitador, respetando la coriocapilar en histología. VKH cursa sin antecedente de trauma y asocia afectación del SNC, disacusia y vitiligo.',
    clinicalPearl: 'Nódulos de Dalen-Fuchs: Acúmulos de células epitelioides y macrófagos entre el EPR y la membrana de Bruch.',
    highYieldTag: 'Uveítis Granulomatosa'
  },
  {
    id: 'fc-3',
    subspecialtyId: 'retina',
    frontQuestion: '¿Qué define la regla 4:2:1 en Retinopatía Diabética No Proliferativa Severa?',
    backAnswer: 'Presencia de cualquiera de estos tres criterios: 1) Microaneurismas / hemorragias retinianas severas en los 4 cuadrantes; O 2) Arrosariamiento venoso definido en >=2 cuadrantes; O 3) Anomalías Microvasculares Intrarretinianas (AMIR) en >=1 cuadrante.',
    clinicalPearl: 'Un paciente que cumple la regla 4:2:1 tiene un riesgo del 50% de progresar a Retinopatía Diabética Proliferativa con neovasos en 1 año.',
    highYieldTag: 'ETDRS Diabética'
  },
  {
    id: 'fc-4',
    subspecialtyId: 'catarata',
    frontQuestion: '¿Qué fármaco sistémico es el principal causante del Síndrome de Iris Flácido Intraoperatorio (IFIS)?',
    backAnswer: 'Tamsulosina y otros antagonistas alfa-1 adrenérgicos (usados para hiperplasia prostática benigna). Bloquean los receptores alfa-1 del músculo dilatador del iris de forma irreversible.',
    clinicalPearl: 'Tríada de IFIS: 1) Estroma de iris ondulante y flácido; 2) Tendencia a la miosis intraoperatoria progresiva; 3) Prolapso del iris hacia las incisiones de faco.',
    highYieldTag: 'Complicaciones Quirúrgicas'
  },
  {
    id: 'fc-5',
    subspecialtyId: 'neuroftalmologia',
    frontQuestion: '¿Cómo diferenciar farmacológicamente el Síndrome de Horner preganglionar vs posganglionar?',
    backAnswer: '1) Diagnóstico de Horner: Apraclonidina 0.5% (reversión de anisocoria: la pupila patológica se dilata por hipersensibilidad de denervación) o Cocaína 4-10% (no dilata la pupila patológica). 2) Localización: Hidroxianfetamina 1% (la pupila posganglionar de 3ª neurona no se dilata porque carece de reservas de noradrenalina terminal).',
    clinicalPearl: 'Horner agudo y doloroso en cuello = Disección de arteria carótida interna hasta demostrar lo contrario.',
    highYieldTag: 'Pupilas / Neuro'
  },
  {
    id: 'fc-6',
    subspecialtyId: 'oculoplastica',
    frontQuestion: '¿Cuál es el orden típico de afectación muscular en la Orbitopatía Distiroidea de Graves?',
    backAnswer: 'Mnemotecnia "I\'M SLOw": Recto Inferior (más frecuente) > Recto Medial > Recto Superior > Recto Lateral (el menos frecuente). Los tendones musculares se encuentran típicamente respetados en la TAC.',
    clinicalPearl: 'La afectación aislada del recto lateral o el compromiso del tendón sugiere miositis orbitaria / pseudotumor idiopático, NO Graves.',
    highYieldTag: 'Órbita y TAC'
  },
  {
    id: 'fc-7',
    subspecialtyId: 'pediatria',
    frontQuestion: '¿Qué define la Enfermedad "Plus" en la Retinopatía del Prematuro (ROP)?',
    backAnswer: 'Dilatación y tortuosidad arterial y venosa marcada en al menos 2 cuadrantes del polo posterior. Indica actividad angiogénica severa y es el principal disparador para requerir tratamiento inmediato (láser o anti-VEGF).',
    clinicalPearl: 'ROP en Zona I con cualquier estadío y enfermedad Plus = Criterio estricto de tratamiento urgente en menos de 72 horas.',
    highYieldTag: 'ROP / Pediatría'
  },
  {
    id: 'fc-8',
    subspecialtyId: 'refraccion',
    frontQuestion: '¿Qué es el ángulo Kappa y por qué es crítico en lentes multifocales intraoculares?',
    backAnswer: 'Es el ángulo formado entre el eje pupilar (centro de la pupila) y el eje visual (fijación foveal). Un ángulo Kappa grande (>0.4-0.5 mm) hace que el centro óptico del lente multifocal quede desalineado con la fóvea, produciendo disfotopsias intolerables, halos y pérdida de contraste.',
    clinicalPearl: 'En pacientes con hipermetropía suele haber un ángulo Kappa positivo mayor; evaluar siempre antes de indicar LIO trifocal o EDOF.',
    highYieldTag: 'Óptica Quirúrgica'
  },
  {
    id: 'fc-9',
    subspecialtyId: 'oncologia',
    frontQuestion: '¿Qué traduce la presencia de pigmento naranja (lipofuscina) sobre un tumor coroideo?',
    backAnswer: 'Sobrecarga metabólica y fagocitosis acelerada de fotorreceptores degenerados por el EPR. Es uno de los predictores clínicos más potentes de transformación maligna a melanoma según la regla TFSOM-UHHD.',
    clinicalPearl: 'Las drusas traducen cronicidad y estabilidad (orientan a nevus benigno); el pigmento naranja traduce crecimiento activo (orienta a melanoma).',
    highYieldTag: 'Melanoma Coroideo'
  },
  {
    id: 'fc-10',
    subspecialtyId: 'oncologia',
    frontQuestion: '¿Cuál es la conclusión capital del ensayo COMS respecto a la enucleación vs braquiterapia con I-125?',
    backAnswer: 'En melanomas coroideos de tamaño mediano (2.5 a 10 mm grosor), la braquiterapia epiescleral con Yodo-125 ofrece una supervivencia global y mortalidad por metástasis IDÉNTICA a la enucleación a los 5, 10 y 12 años (~27% a 10 años).',
    clinicalPearl: 'Extirpar el ojo (enucleación) no mejora la supervivencia porque el pronóstico depende de micrometástasis hematógenas previas.',
    highYieldTag: 'Ensayo COMS'
  },
  {
    id: 'fc-11',
    subspecialtyId: 'oncologia',
    frontQuestion: '¿Por qué está formalmente contraindicada la biopsia con aguja fina en retinoblastoma infantil?',
    backAnswer: 'Porque viola la barrera ocular de contención biológica y provoca siembra de células tumorales viables en el trayecto de la punción hacia la órbita, convirtiendo un cáncer intraocular curable en una neoplasia metastásica con mortalidad >90%.',
    clinicalPearl: 'El diagnóstico de retinoblastoma es estrictamente clínico e imagenológico (calcificaciones patognomónicas en ecografía/TC y RM cerebral para tumor trilateral).',
    highYieldTag: 'Retinoblastoma Infantil'
  }
];

export const FlashcardsView: React.FC = () => {
  const [selectedSubspecialty, setSelectedSubspecialty] = useState<SubspecialtyId | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const filteredCards = FLASHCARDS_DECK.filter((fc) =>
    selectedSubspecialty === 'all' ? true : fc.subspecialtyId === selectedSubspecialty
  );

  const safeIndex = Math.min(currentIndex, Math.max(0, filteredCards.length - 1));
  const activeCard = filteredCards[safeIndex] || null;

  const handleNext = () => {
    setIsFlipped(false);
    if (safeIndex < filteredCards.length - 1) {
      setCurrentIndex(safeIndex + 1);
    } else {
      setCurrentIndex(0); // loop
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (safeIndex > 0) {
      setCurrentIndex(safeIndex - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center space-x-2 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>REPASO ACTIVO Y PERLAS DE RESIDENCIA</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
          Tarjetas Flashcard de Alto Rendimiento (High-Yield Pearls)
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Repaso rápido de conceptos clave, mnemotecnias consagradas y trampas clásicas de exámenes de grado, ICO, EBOD y oposiciones. Haz clic en la tarjeta para voltearla.
        </p>

        {/* Subspecialties selector (all 10 modules visible) */}
        <div className="flex flex-wrap items-center gap-1.5 mt-4">
          <button
            onClick={() => {
              setSelectedSubspecialty('all');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedSubspecialty === 'all' ? 'bg-slate-900 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todas las Áreas ({FLASHCARDS_DECK.length})
          </button>
          {SUBSPECIALTY_MODULES.map((m) => {
            const count = FLASHCARDS_DECK.filter((f) => f.subspecialtyId === m.id).length;
            const isSelected = selectedSubspecialty === m.id;
            const isOcularOnco = m.id === 'oncologia';
            return (
              <button
                key={m.id}
                onClick={() => {
                  setSelectedSubspecialty(m.id);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? isOcularOnco
                      ? 'bg-rose-700 text-white shadow-xs ring-2 ring-rose-400'
                      : 'bg-teal-600 text-white shadow-xs'
                    : isOcularOnco
                      ? 'bg-rose-50 text-rose-800 border border-rose-300 hover:bg-rose-100 font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {isOcularOnco && <Sparkles className="w-3 h-3 text-rose-500" />}
                <span>{m.shortName}</span>
                {count > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected
                        ? isOcularOnco ? 'bg-rose-900 text-rose-100' : 'bg-teal-800 text-teal-100'
                        : isOcularOnco ? 'bg-rose-200 text-rose-900' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Flashcard Card */}
      {!activeCard ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
          <p className="text-xs text-slate-500">No hay tarjetas disponibles para esta selección.</p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 px-2 font-medium">
            <span>Tarjeta {safeIndex + 1} de {filteredCards.length}</span>
            <span className="font-bold text-teal-700 uppercase tracking-wider">{activeCard.highYieldTag}</span>
          </div>

          {/* Interactive Flip Box */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[320px] rounded-2xl border-2 transition-all duration-300 p-8 flex flex-col justify-between shadow-md relative overflow-hidden bg-white hover:border-teal-400 group"
          >
            {/* Top Indicator */}
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200">
                {activeCard.subspecialtyId.toUpperCase()}
              </span>
              <div className="flex items-center space-x-1 text-xs text-slate-400 group-hover:text-teal-600 transition-colors">
                <RotateCw className="w-3.5 h-3.5" />
                <span>{isFlipped ? 'Ver Pregunta' : 'Tocar para voltear'}</span>
              </div>
            </div>

            {/* Main Content (Front or Back) */}
            <div className="py-6">
              {!isFlipped ? (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    PREGUNTA DE RESIDENCIA:
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                    {activeCard.frontQuestion}
                  </h3>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-teal-600 uppercase tracking-wider flex items-center space-x-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>RESPUESTA DIRECTA:</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                    {activeCard.backAnswer}
                  </p>
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 font-semibold">
                    💡 Perla: {activeCard.clinicalPearl}
                  </div>
                </div>
              )}
            </div>

            {/* Card Footer */}
            <div className="text-[11px] text-slate-400 text-center border-t border-slate-100 pt-3">
              {isFlipped ? 'Respuesta fundamentada según AAO BCSC' : 'Haz clic en cualquier parte para revelar la respuesta y perla'}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              disabled={safeIndex === 0}
              className="inline-flex items-center space-x-1 px-4 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
            >
              Voltear Tarjeta
            </button>

            <button
              onClick={handleNext}
              className="inline-flex items-center space-x-1 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
