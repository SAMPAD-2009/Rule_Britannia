
export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  subtitle?: string;
  description: string;
  type: 'charter' | 'battle' | 'coronation' | 'innovation';
  imageUrl: string;
  imagePosition: 'left' | 'right' | 'full';
  linkText: string;
  badge?: string;
  interactive?: boolean;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'eic',
    year: 1600,
    title: 'East India Company',
    description: "Queen Elizabeth I grants a royal charter to 'The Governor and Company of Merchants of London Trading into the East-Indies'.",
    type: 'charter',
    imageUrl: 'https://picsum.photos/seed/ship1/800/500',
    imagePosition: 'left',
    linkText: 'ENTER SCENE',
    badge: '3D Scene'
  },
  {
    id: 'plassey',
    year: 1757,
    title: 'Battle of Plassey',
    description: 'Robert Clive\'s victory over the Nawab of Bengal establishes Company rule in Bengal, marking the start of British imperial dominance in India.',
    type: 'battle',
    imageUrl: 'https://picsum.photos/seed/map1/800/500',
    imagePosition: 'right',
    linkText: 'VIEW ARTIFACTS'
  },
  {
    id: 'waterloo',
    year: 1815,
    title: 'Battle of Waterloo',
    subtitle: 'KEY HISTORICAL EVENT',
    description: 'The final defeat of Napoleon Bonaparte, ending 23 years of recurrent warfare between France and the other powers of Europe. This victory ushered in the Pax Britannica.',
    type: 'battle',
    imageUrl: 'https://picsum.photos/seed/battlefield/1200/600',
    imagePosition: 'full',
    linkText: 'Explore Battlefield',
    interactive: true,
    badge: 'INTERACTIVE SCENE ACTIVE'
  },
  {
    id: 'victoria',
    year: 1837,
    title: 'Victoria Crowned',
    description: 'The coronation of Queen Victoria marks the beginning of the Victorian era, a period of industrial, cultural, political, scientific, and military change.',
    type: 'coronation',
    imageUrl: 'https://picsum.photos/seed/queen/800/500',
    imagePosition: 'left',
    linkText: 'VIEW CORONATION'
  },
  {
    id: 'industrial',
    year: 1851,
    title: 'The Great Exhibition',
    description: 'The first international exhibition of manufactured products, held in the Crystal Palace, showcasing the industrial might of the British Empire.',
    type: 'innovation',
    imageUrl: 'https://picsum.photos/seed/crystal/800/500',
    imagePosition: 'right',
    linkText: 'VIEW INNOVATIONS'
  }
];
