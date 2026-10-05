import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ProgrammeGrid, JoinCTA } from '@/components/iydi-sections';
import { pageHead } from '@/lib/iydi-content';

export const Route = createFileRoute('/programmes')({ head: () => pageHead('Our programmes', 'Explore IYDI’s nine programme areas, from agribusiness and entrepreneurship to technology, women’s empowerment and community development.'), component: Programmes });
function Programmes() { return <><PageIntro label="Our programmes" title="Pathways to possibility."><p>Skills, enterprise, leadership and community. Nine connected areas of focus for young people and women.</p></PageIntro><section className="section programmes-section"><div className="site-container"><ProgrammeGrid /><div className="programme-note"><span className="eyebrow">Our commitment</span><p>Empowering people to become productive, innovative and responsible contributors to sustainable development.</p></div></div></section><JoinCTA /></>; }