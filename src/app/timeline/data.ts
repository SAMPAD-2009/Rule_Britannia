
export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  subtitle?: string;
  description: string;
  type: 'charter' | 'battle' | 'coronation' | 'innovation' | 'settlement' | 'legislation' | 'decolonization';
  imageUrl: string;
  videoUrl?: string; // Link for video interaction
  threeModelUrl?: string; // Link for 3D scene interaction
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
    description: "Queen Elizabeth I grants a royal charter to 'The Governor and Company of Merchants of London Trading into the East-Indies', setting the stage for global trade dominance.",
    type: 'charter',
    imageUrl: 'https://picsum.photos/seed/eic1/800/500',
    threeModelUrl: 'https://sketchfab.com/models/placeholder-ship', // Placeholder 3D link
    imagePosition: 'left',
    linkText: 'ENTER SCENE',
    badge: '3D Scene',
    interactive: true
  },
  {
    id: 'jamestown',
    year: 1607,
    title: 'Jamestown Settlement',
    description: 'The first permanent English settlement in the Americas is established in Virginia, marking the beginning of the British colonial presence in North America.',
    type: 'settlement',
    imageUrl: 'https://picsum.photos/seed/jamestown/800/500',
    videoUrl: 'https://www.youtube.com/watch?v=placeholder1', // Placeholder video link
    imagePosition: 'right',
    linkText: 'VIEW MAPS',
    interactive: true,
    badge: 'Historical Video'
  },
  {
    id: 'union',
    year: 1707,
    title: 'Acts of Union',
    description: 'The Kingdom of England and the Kingdom of Scotland are united into a single, sovereign state called the Kingdom of Great Britain.',
    type: 'charter',
    imageUrl: 'https://picsum.photos/seed/union/800/500',
    imagePosition: 'left',
    linkText: 'VIEW TREATY'
  },
  {
    id: 'plassey',
    year: 1757,
    title: 'Battle of Plassey',
    description: 'Robert Clive\'s victory over the Nawab of Bengal establishes Company rule in Bengal, marking the start of British imperial dominance in India.',
    type: 'battle',
    imageUrl: 'https://picsum.photos/seed/plassey/800/500',
    threeModelUrl: 'https://sketchfab.com/models/placeholder-battlefield',
    imagePosition: 'right',
    linkText: 'VIEW ARTIFACTS',
    interactive: true,
    badge: '3D Artifacts'
  },
  {
    id: 'waterloo',
    year: 1815,
    title: 'Battle of Waterloo',
    subtitle: 'KEY HISTORICAL EVENT',
    description: 'The final defeat of Napoleon Bonaparte, ending 23 years of recurrent warfare between France and the other powers of Europe. This victory ushered in the Pax Britannica.',
    type: 'battle',
    imageUrl: 'https://picsum.photos/seed/waterloo/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=placeholder2',
    imagePosition: 'full',
    linkText: 'Explore Battlefield',
    interactive: true,
    badge: 'INTERACTIVE SCENE'
  },
  {
    id: 'abolition',
    year: 1833,
    title: 'Slavery Abolition Act',
    description: 'Parliament passes the Slavery Abolition Act, outlawing slavery throughout most of the British Empire and providing for the emancipation of enslaved people.',
    type: 'legislation',
    imageUrl: 'https://picsum.photos/seed/freedom/800/500',
    imagePosition: 'right',
    linkText: 'READ ACT'
  },
  {
    id: 'victoria',
    year: 1837,
    title: 'Victoria Crowned',
    description: 'The coronation of Queen Victoria marks the beginning of the Victorian era, a period of unprecedented industrial, cultural, and military expansion.',
    type: 'coronation',
    imageUrl: 'https://picsum.photos/seed/victoria/800/500',
    videoUrl: 'https://www.youtube.com/watch?v=placeholder3',
    imagePosition: 'left',
    linkText: 'VIEW CORONATION',
    interactive: true,
    badge: 'Ceremony Film'
  },
  {
    id: 'exhibition',
    year: 1851,
    title: 'The Great Exhibition',
    description: 'The first international exhibition of manufactured products, held in the Crystal Palace, showcasing the industrial might of the British Empire.',
    type: 'innovation',
    imageUrl: 'https://picsum.photos/seed/crystal/800/500',
    threeModelUrl: 'https://sketchfab.com/models/crystal-palace',
    imagePosition: 'right',
    linkText: 'VIEW INNOVATIONS',
    interactive: true,
    badge: '3D Crystal Palace'
  },
  {
    id: 'wwi',
    year: 1914,
    title: 'World War I',
    description: 'The British Empire enters the First World War. The conflict significantly impacts the empire\'s economy and triggers shifts in colonial relationships.',
    type: 'battle',
    imageUrl: 'https://picsum.photos/seed/wwi/800/500',
    imagePosition: 'left',
    linkText: 'WAR ARCHIVES'
  },
  {
    id: 'india-ind',
    year: 1947,
    title: 'Indian Independence',
    description: 'The British Raj ends as India and Pakistan gain independence, marking the beginning of the major decolonization era for the British Empire.',
    type: 'decolonization',
    imageUrl: 'https://picsum.photos/seed/india1947/800/500',
    imagePosition: 'right',
    linkText: 'EXIT RAJ'
  },
  {
    id: 'hong-kong',
    year: 1997,
    title: 'Hong Kong Handover',
    description: 'Britain transfers sovereignty of Hong Kong to China, widely regarded as the end of the British Empire as a global territorial power.',
    type: 'decolonization',
    imageUrl: 'https://picsum.photos/seed/hk1997/800/500',
    videoUrl: 'https://www.youtube.com/watch?v=placeholder4',
    imagePosition: 'full',
    linkText: 'VIEW CEREMONY',
    interactive: true,
    badge: 'Handover Video'
  }
];
