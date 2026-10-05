import { Sprout, BriefcaseBusiness, Wrench, Cpu, Palette, Landmark, HeartHandshake, GraduationCap, Handshake } from 'lucide-react';

export const organizationName = 'Impact Youth Development Initiative';
export const navigation = [
  { label: 'Home', to: '/' }, { label: 'About', to: '/about' },
  { label: 'Programmes', to: '/programmes' }, { label: 'Events', to: '/events' },
  { label: 'Impact', to: '/impact' }, { label: 'Gallery', to: '/gallery' },
  { label: 'Leadership', to: '/leadership' }, { label: 'Contact', to: '/contact' },
] as const;

export const programmes = [
  { title: 'Agriculture & Agribusiness', icon: Sprout, description: 'Productive opportunities at the intersection of agriculture, enterprise and sustainable development.' },
  { title: 'Entrepreneurship & Business Development', icon: BriefcaseBusiness, description: 'Entrepreneurship education, business development and connections for emerging enterprises.' },
  { title: 'Skills & Employability', icon: Wrench, description: 'Skills and capacity building that help young people prepare for productive work.' },
  { title: 'Technology & Innovation', icon: Cpu, description: 'Technology exposure and innovative thinking for young people and emerging businesses.' },
  { title: 'Fashion, Creativity & Creative Economy', icon: Palette, description: 'Creative skills, enterprise and opportunities for young professionals and creatives.' },
  { title: 'Leadership & Governance', icon: Landmark, description: 'Leadership development and responsible participation in community and national life.' },
  { title: 'Women’s Empowerment', icon: HeartHandshake, description: 'Skills, mentorship and opportunities for women and women-led businesses.' },
  { title: 'Education & Mentorship', icon: GraduationCap, description: 'Learning and guidance that connect ambition with personal and professional development.' },
  { title: 'Peacebuilding & Community Development', icon: Handshake, description: 'Collaboration, active citizenship and sustainable community development.' },
];
export const impactSteps = [
  { title: 'Identify', description: 'Recognise the needs, potential and opportunities of young people and women.' },
  { title: 'Empower', description: 'Build skills, knowledge and confidence through education and capacity development.' },
  { title: 'Connect', description: 'Bring people together with mentors, networks and opportunities.' },
  { title: 'Support', description: 'Encourage progress through guidance, collaboration and enterprise development.' },
  { title: 'Measure', description: 'Focus on learning and meaningful contributions to sustainable development.' },
];
export const beneficiaries = [
  'Young people & emerging entrepreneurs', 'Women & women-led businesses',
  'Students & recent graduates', 'Early-stage entrepreneurs',
  'Small & growing businesses', 'Innovators & technology enterprises',
  'Young professionals & creatives', 'Vulnerable & underserved youth',
  'Community-based groups & organizations',
];
export interface Initiative {
  id: string;
  name: string;
  label: string;
  description: string;
  audiences: string[];
  activities: string[];
  date?: string;
  venue?: string;
  registrationUrl?: string;
}
// Add confirmed dates, venues and HTTPS registration URLs only when supplied by IYDI.
export const initiatives: Initiative[] = [{
  id: 'impact-business-innovation-summit',
  name: 'Impact Business Innovation Summit',
  label: 'Flagship initiative',
  description: 'A meeting point for enterprise, innovation and opportunity. The summit brings young people and women together with the people and organizations shaping business and development.',
  audiences: ['Young people', 'Women', 'Entrepreneurs', 'Investors', 'Business leaders', 'Innovators', 'Policymakers', 'Development organizations', 'Other stakeholders'],
  activities: ['Entrepreneurship education', 'Business development', 'Innovation & technology exposure', 'Leadership & capacity building', 'Mentorship', 'Networking', 'Investment opportunities', 'Business idea competitions', 'Market & investor linkages'],
}];
export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — IYDI`;
  return { meta: [{ title: fullTitle }, { name: 'description', content: description }, { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}