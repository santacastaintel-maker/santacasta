
export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  features: string[];
  isPopular?: boolean;
}

export interface Metric {
  label: string;
  value: string;
}

export interface DiagnosticItem {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}
