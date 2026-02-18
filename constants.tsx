
import { Service, Metric, DiagnosticItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'landing',
    title: 'Landing Pages',
    subtitle: 'Diseño persuasivo + Copywriting',
    icon: 'web',
    features: ['Diseño UX/UI Premium', 'Optimización Móvil', 'Integración CRM']
  },
  {
    id: 'ai-systems',
    title: 'Sistemas IA',
    subtitle: 'Chatbots & Workflows',
    icon: 'smart_toy',
    isPopular: true,
    features: ['Asistentes GPT-4o', 'Agenda Automática', 'Lead Scoring']
  },
  {
    id: 'consulting',
    title: 'Optimización 360',
    subtitle: 'Consultoría Continua',
    icon: 'tune',
    features: ['Auditoría de Procesos', 'A/B Testing', 'Reportes Mensuales']
  }
];

export const DIAGNOSTICS: DiagnosticItem[] = [
  {
    icon: 'trending_down',
    title: 'Baja Conversión',
    description: 'Tus visitas no compran.',
    colorClass: 'bg-red-100 text-red-600'
  },
  {
    icon: 'hand_gesture',
    title: 'Manual & Lento',
    description: 'Tareas repetitivas.',
    colorClass: 'bg-orange-100 text-orange-600'
  },
  {
    icon: 'person_off',
    title: 'Leads Perdidos',
    description: 'Sin seguimiento.',
    colorClass: 'bg-amber-100 text-amber-600'
  },
  {
    icon: 'error',
    title: 'Caos Operativo',
    description: 'Sin claridad en datos.',
    colorClass: 'bg-gray-100 text-gray-600'
  }
];

export const METRICS: Metric[] = [
  { label: 'ROI Promedio', value: '+300%' },
  { label: 'Operatividad', value: '24/7' }
];

export const TESTIMONIAL: Testimonial = {
  quote: "SantaCasta cambió nuestra forma de vender. Pasamos de perseguir clientes a tener un calendario lleno automáticamente.",
  author: "Carlos Méndez",
  role: "CEO, TechStart Latam",
  avatar: "https://picsum.photos/seed/carlos/100/100"
};
