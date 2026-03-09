
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
    "id":"act-of-settlement",
    "year":1701,
    "title":"Act of Settlement",
    "description":"English Parliament passes the Act of Settlement ensuring the Protestant succession to the throne, shaping the political stability that would support imperial expansion.",
    "type":"legislation",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/act-of-settlement",
    "imagePosition":"left",
    "linkText":"View Act",
    "badge":"Parliament",
    "interactive": true
    },
    {
    "id":"war-of-spanish-succession",
    "year":1702,
    "title":"War of the Spanish Succession",
    "description":"Britain enters a major European conflict against France and Spain, fighting for control of colonial territories and trade routes.",
    "type":"battle",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/war-of-spanish-succession",
    "videoUrl":"https://youtu.be/EMt65cnau1M?si=c-nBAXlrpjHa97Vv",
    "imagePosition":"full",
    "linkText":"View Campaign",
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
  },
    {
    "id":"south-sea-company",
    "year":1711,
    "title":"South Sea Company Founded",
    "description":"The British government establishes the South Sea Company to consolidate national debt and manage trade with Spanish America.",
    "type":"innovation",
    "imageUrl":"https://upload.wikimedia.org/wikipedia/commons/c/c2/Edward_Matthew_Ward_%281816-1879%29_-_The_South_Sea_Bubble%2C_a_Scene_in_%27Change_Alley_in_1720_-_N00432_-_National_Gallery.jpg",
    "imagePosition":"right",
    "linkText":"View Picture",
    "interactive": true
    },
    {
    "id":"treaty-of-utrecht",
    "year":1713,
    "title":"Treaty of Utrecht",
    "description":"The treaty ends the War of the Spanish Succession and grants Britain Gibraltar, Minorca, and valuable trading rights including the asiento slave contract.",
    "type":"legislation",
    "imageUrl":"https://upload.wikimedia.org/wikipedia/commons/1/1a/The_Treaty_of_Utrecht_%28clean%29.jpg",
    "imagePosition":"left",
    "linkText":"View Treaty",
    "badge":"Diplomacy",
    "interactive": true
    },
    {
    "id":"georgia-colony-founded",
    "year":1733,
    "title":"Georgia Colony Founded",
    "description":"James Oglethorpe establishes the colony of Georgia as a buffer between British South Carolina and Spanish Florida.",
    "type":"settlement",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/georgia-colony",
    "imagePosition":"full",
    "linkText":"View Settlement",
    "interactive": true
    },
    {
    "id":"war-of-jenkins-ear",
    "year":1739,
    "title":"War of Jenkins’ Ear",
    "description":"Conflict begins between Britain and Spain over trade rights and smuggling in the Caribbean and Spanish America.",
    "type":"battle",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/jetkin's-war",
    "imagePosition":"full",
    "linkText":"View Conflict",
    "interactive": true
    },
    {
    "id":"seven-years-war",
    "year":1756,
    "title":"Seven Years' War Begins",
    "description":"A global conflict erupts between Britain and France across Europe, North America, Africa, and India, often called the first world war.",
    "type":"battle",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/seven-years-war",
    "videoUrl":"https://youtu.be/lqH8bqObMqE?si=jlNp91zWgGPAU2FH",
    "imagePosition":"full",
    "linkText":"View War",
    "badge":"Global War",
    "interactive": true
    },
    {
    "id":"battle-of-plassey",
    "year":1757,
    "title":"Battle of Plassey",
    "description":"British East India Company forces defeat the Nawab of Bengal, establishing British dominance in Bengal and marking a turning point in Indian colonial rule.",
    "type":"battle",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/battle-of-plassey",
    "imagePosition":"full",
    "linkText":"View Image",
    "interactive": true
    },
    {
    "id":"treaty-of-paris-1763",
    "year":1763,
    "title":"Treaty of Paris",
    "description":"The treaty ends the Seven Years' War and transfers vast French territories in North America and India to Britain.",
    "type":"legislation",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/treaty-of-paris-1763",
    "videoUrl":"https://youtu.be/S7ii4avbdfY?si=xP0vy90yG6EkcW_u",
    "imagePosition":"left",
    "linkText":"View Treaty",
    "badge":"Empire Expansion",
    "interactive": true
    },
    {
    "id":"stamp-act",
    "year":1765,
    "title":"Stamp Act",
    "description":"Parliament introduces direct taxation on American colonies, triggering widespread protests and resistance.",
    "type":"legislation",
    "imageUrl":"https://upload.wikimedia.org/wikipedia/commons/4/40/Parliament_Stamp_Act1765.jpg",
    "imagePosition":"left",
    "linkText":"View Act",
    "interactive": true
    },
    {
    "id":"boston-massacre",
    "year":1770,
    "title":"Boston Massacre",
    "description":"British troops fire on colonial protesters in Boston, escalating tensions leading to revolution.",
    "type":"battle",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/boston-massacre",
    "imagePosition":"full",
    "linkText":"View Incident",
    "interactive": true
    },
    {
    "id":"boston-tea-party",
    "year":1773,
    "title":"Boston Tea Party",
    "description":"American colonists dump British tea into Boston Harbor in protest against taxation and trade monopolies.",
    "type":"battle",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/boston-tea-party",
    "videoUrl": "https://youtu.be/1cT_Z0KGhP8?si=NuN-TQFmybRdIytf",
    "imagePosition":"full",
    "linkText":"View Protest",
    "interactive": true
    },
    {
    "id":"american-war-of-independence",
    "year":1775,
    "title":"American War of Independence",
    "description":"Thirteen American colonies begin armed rebellion against British rule, leading to the formation of the United States.",
    "type":"battle",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/battle-of-longisland",
    "videoUrl":"https://youtu.be/N8p7tmoHZ1k?si=LYDFgS3mAPH4RvD2",
    "imagePosition":"full",
    "linkText":"View War",
    "interactive": true
    },
    {
    "id":"declaration-of-independence",
    "year":1776,
    "title":"American Declaration of Independence",
    "description":"The American colonies formally declare independence from British rule.",
    "type":"decolonization",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/declaration-of-independence",
    "imagePosition":"full",
    "linkText":"View Declaration",
    "interactive": true
    },
    {
    "id":"surrender-at-yorktown",
    "year":1781,
    "title":"Surrender at Yorktown",
    "description":"British General Cornwallis surrenders to American and French forces, effectively ending the Revolutionary War.",
    "type":"battle",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/war-of-independence",
    "imagePosition":"full",
    "linkText":"View Image",
    "interactive": true
    },
    {
    "id":"treaty-of-paris-1783",
    "year":1783,
    "title":"Treaty of Paris",
    "description":"Britain formally recognizes the independence of the United States, ending the American Revolutionary War.",
    "type":"decolonization",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/treaty-of-paris-1783",
    "imagePosition":"left",
    "linkText":"View Image",
    "interactive": true
    },
    {
    "id":"australia-first-fleet",
    "year":1788,
    "title":"First Fleet Arrives in Australia",
    "description":"British ships carrying convicts arrive at Botany Bay and establish the colony of New South Wales.",
    "type":"settlement",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/australia-first-fleet",
    "videoUrl":"https://youtu.be/7QrdsV_0GUA?si=lLxhcY7zCHWbsyFz",
    "imagePosition":"right",
    "linkText":"View History",
    "badge":"New Colony",
    "interactive": true
    },
    {
    "id":"canada-constitutional-act",
    "year":1791,
    "title":"Constitutional Act",
    "description":"Britain divides Quebec into Upper and Lower Canada and establishes representative institutions.",
    "type":"legislation",
    "imageUrl":"https://upload.wikimedia.org/wikipedia/commons/9/9b/Royal_Coat_of_arms_of_Canada.svg",
    "imagePosition":"left",
    "linkText":"View Coat of Arms of Canada",
    "interactive": true
    },
    {
    "id":"battle-of-the-nile",
    "year":1798,
    "title":"Battle of the Nile",
    "description":"Admiral Nelson destroys the French fleet in Egypt, securing British naval dominance in the Mediterranean.",
    "type":"battle",
    "imageUrl":"https://pictu-rest.vercel.app/api/i/battle-of-nile",
    "videoUrl":"https://youtu.be/gJmaRZC2ROE?si=QeJW3YG4VY8DdbcK",
    "imagePosition":"full",
    "linkText":"View Naval Battle",
    "interactive": true
    },
    {
    "id":"act-of-union-ireland",
    "year":1801,
    "title":"Act of Union Passed",
    "description":"British Parliament passes legislation uniting Great Britain and Ireland into the United Kingdom, effective in 1801.",
    "type":"legislation",
    "imageUrl":"https://upload.wikimedia.org/wikipedia/commons/7/73/Order_in_Council%2C_5th_November_1800_%E2%80%93_illustrations_of_the_new_arms%2C_flag%2C_and_standard_of_the_United_Kingdom_of_Great_Britain_and_Ireland_%28PC_2-157%29.jpg",
    "videoUrl":"https://youtu.be/qvVDBp4-pW0?si=A6CsmUC1wuUv3knA",
    "imagePosition":"full",
    "linkText":"View Legislation",
    "interactive": true
    }
];
