import { ShieldCheck, Target, UsersRound, Lightbulb, Award, Handshake, Sprout, HeartHandshake } from 'lucide-react';

export const mission = 'To empower young people and women through capacity development, entrepreneurship, innovation, education, mentorship, advocacy, partnerships, and access to opportunities, enabling them to build sustainable livelihoods and become active contributors to social and economic development.';
export const vision = 'To build an inclusive and prosperous society where young people and women are empowered, economically independent, innovative, responsible, and actively contributing to sustainable development.';
export const objectives = [
  { title: 'Youth empowerment and capacity development', description: 'Build knowledge, confidence and practical capacity so young people can participate productively in society.' },
  { title: 'Entrepreneurship and business development', description: 'Support business ideas, enterprise development and pathways to sustainable livelihoods.' },
  { title: 'Innovation and technology', description: 'Encourage innovative thinking and access to technology that helps people create and grow.' },
  { title: 'Women’s economic empowerment', description: 'Expand opportunities, skills and resources for women and women-led enterprises.' },
  { title: 'Education and skills development', description: 'Connect learning and practical training with employability and economic independence.' },
  { title: 'Leadership and responsible citizenship', description: 'Develop ethical leaders and encourage active, responsible participation in community life.' },
  { title: 'Community development', description: 'Enable people to contribute to inclusive, sustainable development in their communities.' },
  { title: 'Peacebuilding and social cohesion', description: 'Encourage dialogue, cooperation and peaceful relationships across communities.' },
  { title: 'Prevention of social vices', description: 'Reduce vulnerability to harmful behaviours through education, mentorship and positive opportunities.' },
  { title: 'Research, advocacy and policy engagement', description: 'Use learning and advocacy to support informed engagement on youth and women’s development.' },
  { title: 'Strategic partnerships', description: 'Connect institutions, businesses and development partners around shared empowerment goals.' },
  { title: 'Investment and market linkages', description: 'Connect emerging enterprises with investors, markets and opportunities for growth.' },
  { title: 'Mentorship and post-programme support', description: 'Provide continued guidance and engagement that helps beneficiaries sustain their progress.' },
];
export const coreValues = [
  { title: 'Integrity', icon: ShieldCheck, description: 'Honesty, accountability and responsible action.' },
  { title: 'Impact', icon: Target, description: 'Meaningful contributions to people and communities.' },
  { title: 'Inclusion', icon: UsersRound, description: 'Opportunity and participation for young people and women.' },
  { title: 'Innovation', icon: Lightbulb, description: 'New ideas and creative responses to challenges.' },
  { title: 'Excellence', icon: Award, description: 'Quality, continuous learning and purposeful work.' },
  { title: 'Collaboration', icon: Handshake, description: 'Shared progress through relationships and partnerships.' },
  { title: 'Empowerment', icon: HeartHandshake, description: 'Knowledge, confidence and the capacity to act.' },
  { title: 'Sustainability', icon: Sprout, description: 'Lasting livelihoods and resilient communities.' },
];
export const expectedImpact = [
  'Increased youth and women entrepreneurship', 'Improved employability and income generation',
  'Increased access to skills and education', 'Growth of youth and women-led businesses',
  'Increased mentorship and investment opportunities', 'Greater youth participation in community development',
  'Increased innovation and technology adoption', 'Reduced youth vulnerability to harmful behaviours',
  'Stronger entrepreneur, investor, institution and market networks', 'More responsible and ethical youth leaders',
  'Stronger and more resilient communities',
];
export const contact = {
  address: '3 Thelma Ottiji Crescent, Umuchigbo, Abakpa Nike, Enugu, Nigeria',
  phone: '08056833892', phoneHref: 'tel:+2348056833892', email: 'impactyouthd@gmail.com',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=3%20Thelma%20Ottiji%20Crescent%2C%20Umuchigbo%2C%20Abakpa%20Nike%2C%20Enugu%2C%20Nigeria',
};
export const president = {
  name: 'Ejike Celestine Nnaji', title: 'President / Convener, Impact Youth Development Initiative',
  roles: ['CEO, Celvia Koncept Ltd', 'Convener, Impact Business Innovation Summit', 'Social Entrepreneur', 'Youth Development Advocate', 'Strategic Communications Professional'],
};
export type EventStatus = 'upcoming' | 'past';
export interface IydiEvent {
  slug: string; title: string; category: string; status: EventStatus; description: string;
  date?: string; time?: string; venue?: string;
  image?: { url: string; alt: string }; speakers?: { name: string; role?: string }[];
  registrationUrl?: string;
}
// Add only confirmed official event details. No demonstration or fabricated entries.
export const events: IydiEvent[] = [];
export function registrationLink(url?: string) {
  if (!url) return undefined;
  try { const parsed = new URL(url); return parsed.protocol === 'https:' && !parsed.username && !parsed.password ? parsed.href : undefined; }
  catch { return undefined; }
}
export const galleryCategories = ['All', 'Events', 'Programmes', 'Community engagement', 'Leadership', 'Other official media'] as const;
export type GalleryCategory = Exclude<typeof galleryCategories[number], 'All'>;
export interface GalleryItem { id: string; title: string; category: GalleryCategory; image: { url: string; alt: string }; caption?: string }
// Use official media URLs from the asset flow; preserve meaningful alternative text.
export const galleryItems: GalleryItem[] = [];