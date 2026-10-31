import { TopicDeepDive } from '../types/ophthalmology';
import { CORNEA_TOPICS } from './corneaTopicsData';
import { GLAUCOMA_TOPICS } from './glaucomaTopicsData';
import { RETINA_TOPICS } from './retinaTopicsData';
import { CATARACT_TOPICS } from './cataractTopicsData';
import { UVEITIS_TOPICS } from './uveitisTopicsData';
import { ONCOLOGY_TOPICS } from './oncologyTopicsData';
import { NEURO_TOPICS } from './neuroTopicsData';
import { PEDIATRIC_TOPICS } from './pediatricTopicsData';
import { OCULOPLASTIC_TOPICS } from './oculoplasticTopicsData';
import { REFRACTION_TOPICS } from './refractionTopicsData';

export const TOPICS_DATA: TopicDeepDive[] = [
  // ==========================================
  // 1. CÓRNEA Y SUPERFICIE OCULAR
  // ==========================================
  ...CORNEA_TOPICS,

  // ==========================================
  // 2. GLAUCOMA Y PRESIÓN INTRAOCULAR
  // ==========================================
  ...GLAUCOMA_TOPICS,

  // ==========================================
  // 3. RETINA Y VÍTREO
  // ==========================================
  ...RETINA_TOPICS,

  // ==========================================
  // 4. CIRUGÍA DE CATARATA Y SEGMENTO ANTERIOR
  // ==========================================
  ...CATARACT_TOPICS,

  // ==========================================
  // 5. NEUROFTALMOLOGÍA
  // ==========================================
  ...NEURO_TOPICS,

  // ========================================== 
  // 6. UVEÍTIS E INFLAMACIÓN OCULAR
  // ==========================================
  ...UVEITIS_TOPICS,

  // ==========================================
  // 7. OFTALMOLOGÍA PEDIÁTRICA Y ESTRABISMO
  // ==========================================
  ...PEDIATRIC_TOPICS,

  // ==========================================
  // 8. OCULOPLÁSTICA Y ÓRBITA
  // ==========================================
  ...OCULOPLASTIC_TOPICS,

  // ==========================================
  // 9. CÓRNEA REFRACTIVA Y ÓPTICA
  // ==========================================
  ...REFRACTION_TOPICS,

  // ==========================================
  // 10. ONCOLOGÍA OCULAR
  // ==========================================
  ...ONCOLOGY_TOPICS
];
