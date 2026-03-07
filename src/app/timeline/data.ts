
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
    "id": "east-india-company-1600",
    "year": 1600,
    "title": "East India Company Charter",
    "description": "Queen Elizabeth I grants a royal charter to the East India Company, laying the foundation for British global trade dominance.",
    "type": "charter",
    "imageUrl": "https://pictu-rest.vercel.app/api/i/charter",
    "imagePosition": "left",
    "linkText": "More",
    "badge": "Trade",
    "interactive": true
  },
  {
    "id": "coronation-james-i-1603",
    "year": 1603,
    "title": "Coronation of James I",
    "description": "James VI of Scotland becomes James I of England, uniting the crowns and beginning the Stuart dynasty.",
    "type": "coronation",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/63/JamesIEngland.jpg",
    "imagePosition": "left",
    "linkText": "VIEW IMAGE",
    "badge": "Monarchy",
    "interactive": true
  },
  {
    "id": "jamestown-1607",
    "year": 1607,
    "title": "Jamestown Settlement",
    "description": "The first permanent English settlement in North America is established in Virginia, marking the beginning of British colonial presence.",
    "type": "settlement",
    "imageUrl": "https://pictu-rest.vercel.app/api/i/james",
    "videoUrl": "https://youtu.be/hkY9-tQql8w?si=yvkEQhQ-8m-1F99N",
    "imagePosition": "right",
    "linkText": "Learn More",
    "badge": "Colonization",
    "interactive": true
  },
  {
    "id": "mayflower-1620",
    "year": 1620,
    "title": "Mayflower Voyage",
    "description": "English Pilgrims sail to North America aboard the Mayflower, founding Plymouth Colony.",
    "type": "settlement",
    "imageUrl": "https://pictu-rest.vercel.app/api/i/mayflower-voyage",
    "videoUrl": "https://youtu.be/273j5nZ1hi4?si=6-PoqC6pJ7EFvY25",
    "imagePosition": "right",
    "linkText": "Learn More",
    "badge": "Colonization",
    "interactive": true
  },
  {
    "id": "english-civil-war-1642",
    "year": 1642,
    "title": "Battle of Edgehill",
    "description": "The first major battle of the English Civil War between Royalists and Parliamentarians, shaping the struggle for political power.",
    "type": "battle",
    "imageUrl": "https://pictu-rest.vercel.app/api/i/eng-civil-war",
    "videoUrl": "https://youtu.be/B3s-UiERX_U?si=y_CgJcdhvknJPO1y",
    "imagePosition": "full",
    "linkText": "WATCH HISTORY",
    "badge": "Civil War",
    "interactive": true
  },
  {
    "id": "battle-naseby-1645",
    "year": 1645,
    "title": "Battle of Naseby",
    "description": "Decisive clash of the English Civil War where Parliament’s New Model Army defeats King Charles I’s forces.",
    "type": "battle",
    "imageUrl": "https://pictu-rest.vercel.app/api/i/nesby-battle",
    "videoUrl": "https://youtu.be/rTbKpSTYxPI?si=6pFTiiipczCVCHFO",
    "imagePosition": "full",
    "linkText": "WATCH BATTLE",
    "badge": "Civil War",
    "interactive": true
  },
  {
    "id": "navigation-acts-1651",
    "year": 1651,
    "title": "Navigation Acts",
    "description": "Parliament passes laws restricting colonial trade to English ships, strengthening mercantilism.",
    "type": "legislation",
    "imageUrl": "https://cdn.britannica.com/41/132141-050-AAC5B4EC/Sampson-ships-Salvadore-Dutch-St-George-Spanish.jpg",
    "videoUrl": "https://youtu.be/AMOV-a8G2og?si=LmvDQ84gzE_WsPyM",
    "imagePosition": "left",
    "linkText": "VIEW MORE",
    "badge": "Trade",
    "interactive": true
  },
  {
    "id": "restoration-charles-ii-1660",
    "year": 1660,
    "title": "Restoration of Charles II",
    "description": "The monarchy is restored after the English Civil War and Cromwell’s Commonwealth, marking a new era.",
    "type": "coronation",
    "imageUrl": "https://pictu-rest.vercel.app/api/i/charles2",
    "videoUrl": "https://youtu.be/_R53H-Id4_Q?si=gjEEuJN_6_LZO2cq",
    "imagePosition": "right",
    "linkText": "VIEW MORE",
    "badge": "Restoration",
    "interactive": true
  },
  {
    "id": "royal-society-1660",
    "year": 1660,
    "title": "Founding of the Royal Society",
    "description": "King Charles II charters the Royal Society, advancing scientific innovation and experimentation.",
    "type": "innovation",
    "imageUrl": "https://pictu-rest.vercel.app/api/i/royal-society",
    "videoUrl": "https://youtu.be/eMAkbFH0JgU?si=owqBc_Zf6AQF8zco",
    "imagePosition": "left",
    "linkText": "ENTER MORE",
    "badge": "Science",
    "interactive": true
  },
  {
    "id": "glorious-revolution-1688",
    "year": 1688,
    "title": "Glorious Revolution",
    "description": "William of Orange and Mary II replace King James II in a bloodless revolution, establishing constitutional monarchy in England.",
    "type": "coronation",
    "imageUrl": "https://pictu-rest.vercel.app/api/i/glorious-revolution",
    "imagePosition": "left",
    "linkText": "VIEW IMAGE",
    "badge": "Revolution",
    "interactive": true
  },
  {
    "id": "act-of-union-1707",
    "year": 1707,
    "title": "Act of Union",
    "description": "England and Scotland unite under the Act of Union, forming the Kingdom of Great Britain.",
    "type": "legislation",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Articles_of_Union_between_England_and_Scotland_28_Jan_1707.png",
    "imagePosition": "right",
    "linkText": "VIEW DOCUMENT",
    "badge": "Union",
    "interactive": true
  }
];
