
export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Colony {
  id: string;
  name: string;
  subtitle: string;
  status: 'Dominion' | 'Crown Colony' | 'Protectorate' | 'Crown Jewel' | 'Crown';
  period: string;
  independenceYear: string;
  governance: string;
  overview: string;
  exports: string[];
  milestones: Milestone[];
  mapSnippet: string;
  lat: number;
  lng: number;
  color: string;
}

export const coloniesData: Colony[] = [
    {
      "id": "great britain",
      "name": "Great Britain",
      "subtitle": "Kingdom of Great Britain",
      "status": "Crown",
      "period": "1707–1801",
      "independenceYear": "N/A",
      "governance": "Constitutional Monarchy with Parliamentary Sovereignty",
      "overview": "Great Britain was formed through the Acts of Union 1707, uniting the Kingdom of England and the Kingdom of Scotland under a single parliament. It became the political and economic core of what evolved into the British Empire, directing colonial expansion, naval dominance, and global trade networks. Following the Act of Union 1801, it became part of the United Kingdom of Great Britain and Ireland.",
      "exports": ["Wool Textiles", "Coal", "Iron Goods", "Manufactured Machinery"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Britain_in_Europe.svg",
      "lat": 54.0,
      "lng": -2.5,
      "color": "#FF0000",
      "milestones": [
        {
          "year": "1707",
          "title": "Acts of Union",
          "description": "Political union of the Kingdom of England and the Kingdom of Scotland creating the Kingdom of Great Britain."
        },
        {
          "year": "1763",
          "title": "Treaty of Paris",
          "description": "Victory in the Seven Years' War established Britain as the dominant global colonial power."
        },
        {
          "year": "1801",
          "title": "Act of Union 1801",
          "description": "Union with Ireland formed the United Kingdom of Great Britain and Ireland."
        },
        {
          "year": "1947",
          "title": "Indian Independence",
          "description": "An indirect end to the British Empire"
        }
      ]
    },
    {
      "id": "canada",
      "name": "Canada",
      "subtitle": "Dominion of Canada (1867–1982)",
      "status": "Dominion",
      "period": "1763–1982",
      "independenceYear": "1982",
      "governance": "Responsible Government under Constitutional Monarchy",
      "overview": "Canada became a self-governing dominion in 1867 under the British North America Act. It gradually achieved legislative independence culminating in the patriation of its constitution in 1982.",
      "exports": ["Timber", "Fur", "Wheat", "Fish"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Canada_in_the_World.svg",
      "lat": 56.1304,
      "lng": -106.3468,
      "color": "#3C5A99",
      "milestones": [
        {
          "year": "1763",
          "title": "Treaty of Paris",
          "description": "France cedes Canada to Britain after the Seven Years' War."
        },
        {
          "year": "1867",
          "title": "Confederation",
          "description": "Dominion of Canada established under British North America Act."
        },
        {
          "year": "1931",
          "title": "Statute of Westminster",
          "description": "Legislative equality granted to dominions."
        },
        {
          "year": "1982",
          "title": "Constitution Act",
          "description": "Full constitutional independence achieved."
        }
      ]
    },
    {
      "id": "australia",
      "name": "Australia",
      "subtitle": "Commonwealth of Australia (1901–present)",
      "status": "Dominion",
      "period": "1788–1942",
      "independenceYear": "1942",
      "governance": "Federal Parliamentary Constitutional Monarchy",
      "overview": "Established as a penal colony in 1788, Australia federated in 1901. The Statute of Westminster Adoption Act 1942 formalized legislative independence.",
      "exports": ["Wool", "Gold", "Coal", "Wheat"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Australia_on_the_globe.svg",
      "lat": -25.2744,
      "lng": 133.7751,
      "color": "#2E8B57",
      "milestones": [
        {
          "year": "1788",
          "title": "First Fleet Arrives",
          "description": "British settlement established at Sydney Cove."
        },
        {
          "year": "1901",
          "title": "Federation",
          "description": "Australian colonies unite as a commonwealth."
        },
        {
          "year": "1931",
          "title": "Statute of Westminster",
          "description": "Autonomy recognized for dominions."
        },
        {
          "year": "1942",
          "title": "Statute Adopted",
          "description": "Australia formalizes legislative independence."
        }
      ]
    },
    {
      "id": "south africa",
      "name": "South Africa",
      "subtitle": "Union of South Africa (1910–1961)",
      "status": "Dominion",
      "period": "1806–1961",
      "independenceYear": "1961",
      "governance": "Parliamentary Dominion under British Crown",
      "overview": "Formed in 1910 from British colonies and former Boer republics, South Africa became a republic in 1961, leaving the Commonwealth.",
      "exports": ["Gold", "Diamonds", "Wool", "Maize"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/South_Africa_on_the_globe.svg",
      "lat": -30.5595,
      "lng": 22.9375,
      "color": "#C19A6B",
      "milestones": [
        {
          "year": "1806",
          "title": "British Occupation",
          "description": "Cape Colony secured by Britain."
        },
        {
          "year": "1910",
          "title": "Union Established",
          "description": "Colonies unified into dominion."
        },
        {
          "year": "1931",
          "title": "Statute of Westminster",
          "description": "Dominion autonomy confirmed."
        },
        {
          "year": "1961",
          "title": "Republic Declared",
          "description": "South Africa leaves Commonwealth."
        }
      ]
    },
    {
      "id": "new zealand",
      "name": "New Zealand",
      "subtitle": "Dominion of New Zealand (1907–1947)",
      "status": "Dominion",
      "period": "1840–1947",
      "independenceYear": "1947",
      "governance": "Responsible Government under British Crown",
      "overview": "Following the Treaty of Waitangi in 1840, New Zealand became a dominion in 1907 and adopted the Statute of Westminster in 1947.",
      "exports": ["Wool", "Meat", "Dairy", "Timber"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/New_Zealand_on_the_globe.svg",
      "lat": -40.9006,
      "lng": 174.8860,
      "color": "#4682B4",
      "milestones": [
        {
          "year": "1840",
          "title": "Treaty of Waitangi",
          "description": "Agreement between Māori chiefs and Britain."
        },
        {
          "year": "1907",
          "title": "Dominion Status",
          "description": "Colony becomes dominion."
        },
        {
          "year": "1931",
          "title": "Statute of Westminster",
          "description": "Autonomy recognized."
        },
        {
          "year": "1947",
          "title": "Statute Adopted",
          "description": "Legislative independence formalized."
        }
      ]
    },
    {
      "id": "jamaica",
      "name": "Jamaica",
      "subtitle": "Crown Colony of Jamaica (1866–1962)",
      "status": "Crown Colony",
      "period": "1655–1962",
      "independenceYear": "1962",
      "governance": "Direct Rule by Colonial Governor",
      "overview": "Captured from Spain in 1655, Jamaica became a key Caribbean sugar colony and later gained independence in 1962.",
      "exports": ["Sugar", "Rum", "Bananas", "Coffee"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Jamaica_on_the_globe.svg",
      "lat": 18.1096,
      "lng": -77.2975,
      "color": "#DAA520",
      "milestones": [
        {
          "year": "1655",
          "title": "British Capture",
          "description": "Seized from Spain."
        },
        {
          "year": "1866",
          "title": "Crown Colony Rule",
          "description": "Assembly dissolved after Morant Bay Rebellion."
        },
        {
          "year": "1958",
          "title": "West Indies Federation",
          "description": "Joins regional federation."
        },
        {
          "year": "1962",
          "title": "Independence",
          "description": "Jamaica becomes sovereign nation."
        }
      ]
    },
    {
      "id": "egypt",
      "name": "Egypt",
      "subtitle": "British Protectorate of Egypt (1914–1922)",
      "status": "Protectorate",
      "period": "1882–1956",
      "independenceYear": "1922",
      "governance": "Indirect Rule via Khedivate/Monarchy",
      "overview": "Though nominally Ottoman, Egypt was occupied by Britain in 1882 and declared a protectorate in 1914 before gaining partial independence in 1922.",
      "exports": ["Cotton", "Grain", "Sugar", "Rice"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Egypt_on_the_globe.svg",
      "lat": 26.8206,
      "lng": 30.8025,
      "color": "#C2B280",
      "milestones": [
        {
          "year": "1882",
          "title": "British Occupation",
          "description": "Military intervention secures control."
        },
        {
          "year": "1914",
          "title": "Protectorate Declared",
          "description": "Formalized during World War I."
        },
        {
          "year": "1922",
          "title": "Partial Independence",
          "description": "Kingdom of Egypt recognized."
        },
        {
          "year": "1956",
          "title": "Suez Crisis",
          "description": "Final withdrawal of British troops."
        }
      ]
    },
    {
      "id": "nigeria",
      "name": "Nigeria",
      "subtitle": "Colony and Protectorate of Nigeria (1914–1960)",
      "status": "Protectorate",
      "period": "1861–1960",
      "independenceYear": "1960",
      "governance": "Indirect Rule via Emirs and Chiefs",
      "overview": "Formed from amalgamation of Northern and Southern protectorates in 1914, Nigeria became Britain’s most populous African colony and a major economic hub.",
      "exports": ["Palm Oil", "Cocoa", "Groundnuts", "Tin"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Nigeria_on_the_globe.svg",
      "lat": 9.0820,
      "lng": 8.6753,
      "color": "#2F4F4F",
      "milestones": [
        { "year": "1861", "title": "Lagos Annexed", "description": "Britain annexes Lagos as a crown colony." },
        { "year": "1914", "title": "Amalgamation", "description": "Northern and Southern Nigeria merged." },
        { "year": "1947", "title": "Richards Constitution", "description": "Introduced regional representation." },
        { "year": "1960", "title": "Independence", "description": "Nigeria becomes sovereign nation." }
      ]
    },
    {
      "id": "kenya",
      "name": "Kenya",
      "subtitle": "Colony and Protectorate of Kenya (1920–1963)",
      "status": "Crown Colony",
      "period": "1895–1963",
      "independenceYear": "1963",
      "governance": "Settler Colonial Administration",
      "overview": "Originally the East Africa Protectorate, Kenya became a crown colony in 1920 and experienced major settler migration and resistance movements.",
      "exports": ["Coffee", "Tea", "Sisal", "Pyrethrum"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Kenya_on_the_globe.svg",
      "lat": -0.0236,
      "lng": 37.9062,
      "color": "#8B4513",
      "milestones": [
        { "year": "1895", "title": "Protectorate Established", "description": "East Africa Protectorate formed." },
        { "year": "1920", "title": "Crown Colony", "description": "Official colonial status granted." },
        { "year": "1952", "title": "Mau Mau Uprising", "description": "Armed resistance against British rule." },
        { "year": "1963", "title": "Independence", "description": "Kenya gains sovereignty." }
      ]
    },
    {
      "id": "malaya",
      "name": "Malaya",
      "subtitle": "Federation of Malaya (1948–1957)",
      "status": "Protectorate",
      "period": "1786–1957",
      "independenceYear": "1957",
      "governance": "Indirect Rule via Malay Sultans",
      "overview": "British Malaya was a major source of tin and rubber and strategically vital in Southeast Asia.",
      "exports": ["Rubber", "Tin", "Palm Oil", "Spices"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Malaysia_on_the_globe.svg",
      "lat": 4.2105,
      "lng": 101.9758,
      "color": "#006400",
      "milestones": [
        { "year": "1786", "title": "Penang Acquired", "description": "First British settlement in Malaya." },
        { "year": "1826", "title": "Straits Settlements", "description": "Penang, Malacca, Singapore unified." },
        { "year": "1948", "title": "Federation Formed", "description": "Post-war restructuring." },
        { "year": "1957", "title": "Independence", "description": "Federation of Malaya becomes independent." }
      ]
    },
    {
      "id": "singapore",
      "name": "Singapore",
      "subtitle": "Crown Colony of Singapore (1946–1963)",
      "status": "Crown Colony",
      "period": "1819–1963",
      "independenceYear": "1965",
      "governance": "Direct Colonial Administration",
      "overview": "Founded by Stamford Raffles in 1819, Singapore became one of the British Empire’s most important trading ports.",
      "exports": ["Tin", "Rubber", "Spices", "Petroleum Products"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Singapore_on_the_globe.svg",
      "lat": 1.3521,
      "lng": 103.8198,
      "color": "#DC143C",
      "milestones": [
        { "year": "1819", "title": "Founded", "description": "Raffles establishes trading post." },
        { "year": "1826", "title": "Straits Settlements", "description": "Administrative consolidation." },
        { "year": "1942", "title": "Japanese Occupation", "description": "Captured during WWII." },
        { "year": "1965", "title": "Full Independence", "description": "Becomes sovereign republic." }
      ]
    },
    {
      "id": "hong kong",
      "name": "Hong Kong",
      "subtitle": "British Hong Kong (1841–1997)",
      "status": "Crown Colony",
      "period": "1841–1997",
      "independenceYear": "1997",
      "governance": "Colonial Governor under British Crown",
      "overview": "Acquired after the First Opium War, Hong Kong became a major financial and trading center in East Asia.",
      "exports": ["Textiles", "Electronics", "Shipping Services", "Tea"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Hong_Kong_on_the_globe.svg",
      "lat": 22.3193,
      "lng": 114.1694,
      "color": "#4169E1",
      "milestones": [
        { "year": "1842", "title": "Treaty of Nanking", "description": "Hong Kong ceded to Britain." },
        { "year": "1898", "title": "New Territories Lease", "description": "99-year lease signed." },
        { "year": "1941", "title": "Japanese Occupation", "description": "WWII occupation." },
        { "year": "1997", "title": "Handover", "description": "Transferred to China." }
      ]
    },
    {
      "id": "cyprus",
      "name": "Cyprus",
      "subtitle": "Crown Colony of Cyprus (1925–1960)",
      "status": "Crown Colony",
      "period": "1878–1960",
      "independenceYear": "1960",
      "governance": "Colonial Administration",
      "overview": "Strategically located in the Eastern Mediterranean, Cyprus was administered by Britain from 1878 and became a crown colony in 1925.",
      "exports": ["Copper", "Citrus", "Wine", "Potatoes"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Cyprus_on_the_globe.svg",
      "lat": 35.1264,
      "lng": 33.4299,
      "color": "#B8860B",
      "milestones": [
        { "year": "1878", "title": "British Administration", "description": "Control assumed from Ottomans." },
        { "year": "1925", "title": "Crown Colony", "description": "Formal colonial status." },
        { "year": "1955", "title": "EOKA Revolt", "description": "Armed independence movement." },
        { "year": "1960", "title": "Independence", "description": "Republic of Cyprus established." }
      ]
    },
    {
      "id": "india",
      "name": "India",
      "subtitle": "The British Raj (1858–1947)",
      "status": "Crown Jewel",
      "period": "1757–1947",
      "independenceYear": "1947",
      "governance": "Direct Rule by Viceroy under the British Crown (post-1858)",
      "overview": "India was the most strategically and economically significant territory of the British Empire. Following the East India Company's expansion and the 1857 Rebellion, governance transferred to the Crown. India supplied raw materials, soldiers, and revenue, making it central to imperial power.",
      "exports": ["Cotton", "Tea", "Jute", "Opium"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/British_Raj_1919.svg",
      "lat": 20.5937,
      "lng": 78.9629,
      "color": "#B88A2E",
      "milestones": [
        {
          "year": "1757",
          "title": "Battle of Plassey",
          "description": "East India Company gains decisive control in Bengal."
        },
        {
          "year": "1858",
          "title": "British Raj Established",
          "description": "Crown rule begins after the Indian Rebellion of 1857."
        },
        {
          "year": "1885",
          "title": "Indian National Congress Founded",
          "description": "Political platform for nationalist movement formed."
        },
        {
          "year": "1947",
          "title": "Independence & Partition",
          "description": "British rule ends; India and Pakistan created."
        }
      ]
    },
    {
      "id": "rhodesia",
      "name": "Rhodesia",
      "subtitle": "Southern Rhodesia (1923–1980)",
      "status": "Crown Colony",
      "period": "1890–1980",
      "independenceYear": "1980",
      "governance": "Company Rule (1890–1923), then Self-Governing Colony",
      "overview": "Established by the British South Africa Company under Cecil Rhodes, Southern Rhodesia became a self-governing colony in 1923. A unilateral declaration of independence in 1965 led to international isolation until majority rule was established as Zimbabwe in 1980.",
      "exports": ["Tobacco", "Gold", "Chrome", "Maize"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Zimbabwe_on_the_globe.svg",
      "lat": -19.0154,
      "lng": 29.1549,
      "color": "#8B0000",
      "milestones": [
        {
          "year": "1890",
          "title": "Pioneer Column",
          "description": "British South Africa Company establishes control."
        },
        {
          "year": "1923",
          "title": "Self-Governing Colony",
          "description": "Southern Rhodesia gains responsible government."
        },
        {
          "year": "1965",
          "title": "Unilateral Declaration of Independence",
          "description": "White minority government declares independence."
        },
        {
          "year": "1980",
          "title": "Independence as Zimbabwe",
          "description": "Majority rule established; internationally recognized independence."
        }
      ]
    },
    {
      "id": "ghana",
      "name": "Ghana",
      "subtitle": "Gold Coast Colony (1821–1957)",
      "status": "Crown Colony",
      "period": "1821–1957",
      "independenceYear": "1957",
      "governance": "Colonial Governor with Indirect Rule",
      "overview": "Formerly known as the Gold Coast, Ghana was Britain’s first sub-Saharan African colony to achieve independence. It was a major producer of gold and cocoa and became a center of early African nationalism.",
      "exports": ["Gold", "Cocoa", "Timber", "Palm Oil"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Ghana_on_the_globe.svg",
      "lat": 7.9465,
      "lng": -1.0232,
      "color": "#DAA520",
      "milestones": [
        {
          "year": "1821",
          "title": "Crown Colony Established",
          "description": "British government assumes control of coastal forts."
        },
        {
          "year": "1874",
          "title": "Gold Coast Colony Formalized",
          "description": "Interior territories consolidated."
        },
        {
          "year": "1947",
          "title": "United Gold Coast Convention",
          "description": "Organized nationalist movement emerges."
        },
        {
          "year": "1957",
          "title": "Independence",
          "description": "Gold Coast becomes Ghana under Kwame Nkrumah."
        }
      ]
    }
];
