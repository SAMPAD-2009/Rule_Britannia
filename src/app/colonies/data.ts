export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Colony {
  id: string;
  name: string;
  subtitle: string;
  status: 'Dominion' | 'Crown Colony' | 'Protectorate' | 'Crown Jewel';
  period: string;
  independenceYear: string;
  governance: string;
  overview: string;
  exports: string[];
  milestones: Milestone[];
  mapSnippet: string;
  coordinates: { x: number; y: number }; // Percentage based for positioning on the map
}

export const coloniesData: Colony[] = [
  {
    id: 'india',
    name: 'India',
    subtitle: 'The British Raj (1858–1947)',
    status: 'Crown Jewel',
    period: '1858–1947',
    independenceYear: '1947',
    governance: 'Direct Rule',
    overview: 'India was often referred to as "The Jewel in the Crown" of the British Empire due to its immense wealth in resources and strategic location. The region was a major source of raw materials like cotton, tea, and spices, while also providing a vast market for British manufactured goods.',
    exports: ['Tea', 'Cotton', 'Spices', 'Gems'],
    mapSnippet: 'https://picsum.photos/seed/india-map/400/300',
    coordinates: { x: 72, y: 55 },
    milestones: [
      {
        year: '1600',
        title: 'East India Company Formed',
        description: 'Royal charter granted by Queen Elizabeth I for trade with Asia.'
      },
      {
        year: '1858',
        title: 'British Raj Established',
        description: 'Direct rule begins following the Indian Rebellion of 1857.'
      },
      {
        year: '1947',
        title: 'Independence & Partition',
        description: 'End of British rule; creation of independent nations India and Pakistan.'
      }
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    subtitle: 'The Dominion of Canada',
    status: 'Dominion',
    period: '1867–1982',
    independenceYear: '1867',
    governance: 'Self-Governing',
    overview: 'Canada was the first to be granted "Dominion" status. It evolved from several British colonies into a unified, self-governing federation, serving as a model for colonial transition to sovereignty.',
    exports: ['Timber', 'Fur', 'Wheat', 'Minerals'],
    mapSnippet: 'https://picsum.photos/seed/canada-map/400/300',
    coordinates: { x: 20, y: 30 },
    milestones: [
      {
        year: '1763',
        title: 'Treaty of Paris',
        description: 'France cedes its North American territories to Britain.'
      },
      {
        year: '1867',
        title: 'Confederation',
        description: 'British North America Act creates the Dominion of Canada.'
      },
      {
        year: '1982',
        title: 'Patriation',
        description: 'Full constitutional independence achieved with the Canada Act.'
      }
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    subtitle: 'The Commonwealth of Australia',
    status: 'Dominion',
    period: '1788–1901',
    independenceYear: '1901',
    governance: 'Federal Dominion',
    overview: 'Originally established as a series of penal colonies, Australia grew into a wealthy collection of states that federated into a Dominion at the start of the 20th century.',
    exports: ['Wool', 'Gold', 'Wheat', 'Meat'],
    mapSnippet: 'https://picsum.photos/seed/australia-map/400/300',
    coordinates: { x: 85, y: 75 },
    milestones: [
      {
        year: '1770',
        title: 'Cook\'s Landing',
        description: 'Captain James Cook claims the east coast for Great Britain.'
      },
      {
        year: '1788',
        title: 'First Fleet',
        description: 'The arrival of the first convict ships at Sydney Cove.'
      },
      {
        year: '1901',
        title: 'Federation',
        description: 'The six colonies unite to form the Commonwealth of Australia.'
      }
    ]
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    subtitle: 'The Union of South Africa',
    status: 'Dominion',
    period: '1806–1910',
    independenceYear: '1910',
    governance: 'Colonial Administration',
    overview: 'South Africa was strategically vital for its location on the sea route to India and its immense mineral wealth, leading to complex conflicts between British, Boer, and indigenous peoples.',
    exports: ['Gold', 'Diamonds', 'Wine', 'Fruit'],
    mapSnippet: 'https://picsum.photos/seed/sa-map/400/300',
    coordinates: { x: 55, y: 75 },
    milestones: [
      {
        year: '1806',
        title: 'Cape Colony Captured',
        description: 'Britain takes control of the Cape from the Dutch.'
      },
      {
        year: '1886',
        title: 'Gold Rush',
        description: 'Discovery of gold leads to massive British investment and migration.'
      },
      {
        year: '1910',
        title: 'Union of South Africa',
        description: 'Four colonies unite as a self-governing Dominion.'
      }
    ]
  }
];
