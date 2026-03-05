
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Anne_of_Great_Britain_statue_near_St_Paul%27s._London.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Auberge_Du_Tresor.jpg/960px-Auberge_Du_Tresor.jpg?_=20220826205019",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Princetown_%28AU%29%2C_Port_Campbell_National_Park%2C_Twelve_Apostles_--_2019_--_0930.jpg/960px-Princetown_%28AU%29%2C_Port_Campbell_National_Park%2C_Twelve_Apostles_--_2019_--_0930.jpg?_=20240721050247",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Cross_daGama2.jpg/250px-Cross_daGama2.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Long_Sound_Fiordland_New_Zealand_Aotearoa.jpg/960px-Long_Sound_Fiordland_New_Zealand_Aotearoa.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Cane_cutters_in_Jamaica.jpg/120px-Cane_cutters_in_Jamaica.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Balloon_over_Luxor_-_Egypt_denoised.jpg/960px-Balloon_over_Luxor_-_Egypt_denoised.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Petrol_station_in_B%C3%A9nin.jpg/250px-Petrol_station_in_B%C3%A9nin.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Three_zebras_in_Masai_Mara_National_Park%2C_Kenya.jpg/250px-Three_zebras_in_Masai_Mara_National_Park%2C_Kenya.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/2nd_Div_reoccupation_of_Malaya.jpg/120px-2nd_Div_reoccupation_of_Malaya.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Boat_passing_under_Elgin_Bridge_during_blue_hour_%282023%29-L1003785.jpg/250px-Boat_passing_under_Elgin_Bridge_during_blue_hour_%282023%29-L1003785.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hong_Kong_city_landscape_-_Wikimania_2013_-_2276.jpg/120px-Hong_Kong_city_landscape_-_Wikimania_2013_-_2276.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Columns_in_Roman_gymnasium%2C_Salamis%2C_Northern_Cyprus.jpg/250px-Columns_in_Roman_gymnasium%2C_Salamis%2C_Northern_Cyprus.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Macaque_India_3.jpg/120px-Macaque_India_3.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Southern_Rhodesia_%281909%29_%2814804694073%29.jpg/250px-Southern_Rhodesia_%281909%29_%2814804694073%29.jpg",
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
      "mapSnippet": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pupil_washes_hands_during_COVID-19_pandemic_in_Ghana.jpg/250px-Pupil_washes_hands_during_COVID-19_pandemic_in_Ghana.jpg",
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
    },
    {
      "id": "uganda",
      "name": "Uganda",
      "subtitle": "Uganda Protectorate (1894–1962)",
      "status": "Protectorate",
      "period": "1894–1962",
      "independenceYear": "1962",
      "governance": "Indirect Rule via Local Kingdoms",
      "overview": "Uganda became a British protectorate in 1894. The British governed largely through traditional kingdoms such as Buganda, integrating them into colonial administration.",
      "exports": ["Coffee", "Cotton", "Tea", "Copper"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Uganda_on_the_globe.svg",
      "lat": 1.3733,
      "lng": 32.2903,
      "color": "#556B2F",
      "milestones": [
        { "year": "1894", "title": "Protectorate Declared", "description": "Britain formally establishes the Uganda Protectorate." },
        { "year": "1900", "title": "Buganda Agreement", "description": "Defines political structure between Britain and Buganda Kingdom." },
        { "year": "1950", "title": "Nationalist Movements", "description": "Rise of independence political movements." },
        { "year": "1962", "title": "Independence", "description": "Uganda gains sovereignty." }
      ]
    },
    {
      "id": "zambia",
      "name": "Zambia",
      "subtitle": "Northern Rhodesia (1924–1964)",
      "status": "Protectorate",
      "period": "1890–1964",
      "independenceYear": "1964",
      "governance": "British Colonial Administration",
      "overview": "Originally administered by the British South Africa Company, Northern Rhodesia later became a British protectorate and major copper mining region.",
      "exports": ["Copper", "Cobalt", "Tobacco", "Maize"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Zambia_on_the_globe.svg",
      "lat": -13.1339,
      "lng": 27.8493,
      "color": "#CD853F",
      "milestones": [
        { "year": "1890", "title": "Company Administration", "description": "British South Africa Company governs territory." },
        { "year": "1924", "title": "Protectorate Rule", "description": "Administration transferred to British government." },
        { "year": "1953", "title": "Central African Federation", "description": "Joined federation with Rhodesia and Nyasaland." },
        { "year": "1964", "title": "Independence", "description": "Northern Rhodesia becomes Zambia." }
      ]
    },
    {
      "id": "malawi",
      "name": "Malawi",
      "subtitle": "Nyasaland Protectorate (1907–1964)",
      "status": "Protectorate",
      "period": "1891–1964",
      "independenceYear": "1964",
      "governance": "Colonial Governor with Local Chiefs",
      "overview": "Nyasaland was a British protectorate in southeastern Africa and part of the Federation of Rhodesia and Nyasaland before gaining independence as Malawi.",
      "exports": ["Tobacco", "Tea", "Sugar", "Cotton"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Malawi_on_the_globe.svg",
      "lat": -13.2543,
      "lng": 34.3015,
      "color": "#708090",
      "milestones": [
        { "year": "1891", "title": "Protectorate Established", "description": "Britain proclaims Central Africa Protectorate." },
        { "year": "1907", "title": "Renamed Nyasaland", "description": "Administrative restructuring." },
        { "year": "1953", "title": "Federation Formed", "description": "Joined Federation of Rhodesia and Nyasaland." },
        { "year": "1964", "title": "Independence", "description": "Nyasaland becomes Malawi." }
      ]
    },
    {
      "id": "sierra leone",
      "name": "Sierra Leone",
      "subtitle": "Crown Colony of Sierra Leone (1808–1961)",
      "status": "Crown Colony",
      "period": "1808–1961",
      "independenceYear": "1961",
      "governance": "Colonial Governor",
      "overview": "Founded as a settlement for freed slaves, Sierra Leone became a major British colony in West Africa and an administrative center for anti-slavery patrols.",
      "exports": ["Diamonds", "Palm Oil", "Cocoa", "Coffee"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Sierra_Leone_on_the_globe.svg",
      "lat": 8.4606,
      "lng": -11.7799,
      "color": "#2E8B57",
      "milestones": [
        { "year": "1787", "title": "Freed Slave Settlement", "description": "Freetown established for freed slaves." },
        { "year": "1808", "title": "Crown Colony", "description": "Direct British colonial rule begins." },
        { "year": "1896", "title": "Protectorate Expanded", "description": "Interior territories added." },
        { "year": "1961", "title": "Independence", "description": "Sierra Leone becomes sovereign." }
      ]
    },
    {
      "id": "barbados",
      "name": "Barbados",
      "subtitle": "Colony of Barbados (1627–1966)",
      "status": "Crown Colony",
      "period": "1627–1966",
      "independenceYear": "1966",
      "governance": "Colonial Assembly under British Crown",
      "overview": "Barbados was one of Britain’s earliest Caribbean colonies and a major sugar plantation economy in the Atlantic world.",
      "exports": ["Sugar", "Rum", "Molasses", "Cotton"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Barbados_on_the_globe.svg",
      "lat": 13.1939,
      "lng": -59.5432,
      "color": "#C19A6B",
      "milestones": [
        { "year": "1627", "title": "English Settlement", "description": "First permanent English colony established." },
        { "year": "1650", "title": "Sugar Economy", "description": "Plantation economy expands." },
        { "year": "1958", "title": "West Indies Federation", "description": "Joins regional federation." },
        { "year": "1966", "title": "Independence", "description": "Barbados becomes independent." }
      ]
    },
    {
      "id": "bahamas",
      "name": "Bahamas",
      "subtitle": "Crown Colony of the Bahamas (1718–1973)",
      "status": "Crown Colony",
      "period": "1718–1973",
      "independenceYear": "1973",
      "governance": "Colonial Governor",
      "overview": "The Bahamas became a crown colony in 1718 after suppression of piracy and later developed an economy based on tourism and shipping.",
      "exports": ["Salt", "Sponges", "Fish", "Rum"],
      "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Bahamas_on_the_globe.svg",
      "lat": 25.0343,
      "lng": -77.3963,
      "color": "#00CED1",
      "milestones": [
        { "year": "1718", "title": "Crown Colony", "description": "British crown asserts control." },
        { "year": "1783", "title": "British Loyalists Arrive", "description": "Settlers arrive after American Revolution." },
        { "year": "1964", "title": "Self-Government", "description": "Internal self-rule granted." },
        { "year": "1973", "title": "Independence", "description": "Bahamas becomes sovereign nation." }
      ]
    },
  {
    "id": "sri lanka",
    "name": "Sri Lanka",
    "subtitle": "Crown Colony of Ceylon (1815–1948)",
    "status": "Crown Colony",
    "period": "1815–1948",
    "independenceYear": "1948",
    "governance": "Colonial Governor under British Crown",
    "overview": "Known as Ceylon during British rule, the island became a crown colony after the fall of the Kandyan Kingdom. It developed into a major plantation economy producing tea, rubber, and coconut.",
    "exports": ["Tea", "Rubber", "Coconut", "Cinnamon"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Sri_Lanka_on_the_globe.svg",
    "lat": 7.8731,
    "lng": 80.7718,
    "color": "#8B0000",
    "milestones": [
      { "year": "1796", "title": "British Occupation", "description": "Britain takes Dutch possessions in Ceylon." },
      { "year": "1815", "title": "Kandyan Convention", "description": "Entire island brought under British rule." },
      { "year": "1931", "title": "Donoughmore Constitution", "description": "Universal suffrage introduced." },
      { "year": "1948", "title": "Independence", "description": "Dominion of Ceylon established." }
    ]
  },
  {
    "id": "maldives",
    "name": "Maldives",
    "subtitle": "British Protectorate of Maldives (1887–1965)",
    "status": "Protectorate",
    "period": "1887–1965",
    "independenceYear": "1965",
    "governance": "Indirect Rule via Sultanate",
    "overview": "The Maldives remained internally self-governing while Britain controlled defense and foreign affairs from Ceylon.",
    "exports": ["Fish", "Coir Rope", "Coconuts", "Shell Products"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Maldives_on_the_globe.svg",
    "lat": 3.2028,
    "lng": 73.2207,
    "color": "#20B2AA",
    "milestones": [
      { "year": "1887", "title": "Protectorate Treaty", "description": "Maldives becomes British protectorate." },
      { "year": "1932", "title": "First Constitution", "description": "Modern governance reforms begin." },
      { "year": "1953", "title": "First Republic", "description": "Brief attempt to abolish the sultanate." },
      { "year": "1965", "title": "Independence", "description": "Maldives becomes fully sovereign." }
    ]
  },
  {
    "id": "burma",
    "name": "Burma",
    "subtitle": "British Burma (1824–1948)",
    "status": "Crown Colony",
    "period": "1824–1948",
    "independenceYear": "1948",
    "governance": "Colonial Administration under Governor",
    "overview": "Burma was gradually annexed after three Anglo-Burmese wars. Initially administered as part of British India, it later became a separate colony in 1937.",
    "exports": ["Rice", "Teak", "Oil", "Gemstones"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Myanmar_on_the_globe.svg",
    "lat": 21.9162,
    "lng": 95.9560,
    "color": "#DAA520",
    "milestones": [
      { "year": "1824", "title": "First Anglo-Burmese War", "description": "Beginning of British expansion into Burma." },
      { "year": "1885", "title": "Full Annexation", "description": "King Thibaw deposed; Burma annexed." },
      { "year": "1937", "title": "Separate Colony", "description": "Burma separated from British India." },
      { "year": "1948", "title": "Independence", "description": "Union of Burma established." }
    ]
  },
  {
    "id": "malta",
    "name": "Malta",
    "subtitle": "Crown Colony of Malta (1813–1964)",
    "status": "Crown Colony",
    "period": "1813–1964",
    "independenceYear": "1964",
    "governance": "Colonial Governor",
    "overview": "Malta was a strategically vital naval base in the Mediterranean and played a major role during both World Wars.",
    "exports": ["Cotton", "Ship Repairs", "Stone", "Textiles"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Malta_on_the_globe.svg",
    "lat": 35.9375,
    "lng": 14.3754,
    "color": "#B22222",
    "milestones": [
      { "year": "1814", "title": "British Possession", "description": "Treaty of Paris confirms British rule." },
      { "year": "1921", "title": "Self-Government", "description": "Constitution grants local autonomy." },
      { "year": "1942", "title": "George Cross Award", "description": "Island honored for WWII resistance." },
      { "year": "1964", "title": "Independence", "description": "Malta becomes sovereign state." }
    ]
  },
  {
    "id": "gibraltar",
    "name": "Gibraltar",
    "subtitle": "British Overseas Territory of Gibraltar",
    "status": "Crown Colony",
    "period": "1713–present",
    "independenceYear": "N/A",
    "governance": "British Overseas Territory",
    "overview": "A strategic fortress at the entrance of the Mediterranean, Gibraltar has remained under British sovereignty since 1713.",
    "exports": ["Shipping Services", "Finance", "Tourism", "Military Logistics"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Gibraltar_on_the_globe.svg",
    "lat": 36.1408,
    "lng": -5.3536,
    "color": "#708090",
    "milestones": [
      { "year": "1704", "title": "British Capture", "description": "Anglo-Dutch forces capture Gibraltar." },
      { "year": "1713", "title": "Treaty of Utrecht", "description": "Spain cedes Gibraltar to Britain." },
      { "year": "1967", "title": "Referendum", "description": "Residents vote to remain British." },
      { "year": "2006", "title": "New Constitution", "description": "Expanded self-government." }
    ]
  },
  {
    "id": "fiji",
    "name": "Fiji",
    "subtitle": "Colony of Fiji (1874–1970)",
    "status": "Crown Colony",
    "period": "1874–1970",
    "independenceYear": "1970",
    "governance": "Colonial Governor with Indigenous Administration",
    "overview": "Fiji became a British colony after local chiefs ceded the islands. It developed a plantation economy using indentured labor from India.",
    "exports": ["Sugar", "Coconut", "Gold", "Timber"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Fiji_on_the_globe.svg",
    "lat": -17.7134,
    "lng": 178.0650,
    "color": "#4682B4",
    "milestones": [
      { "year": "1874", "title": "Cession to Britain", "description": "Chiefs sign deed of cession." },
      { "year": "1879", "title": "Indentured Labor", "description": "Indian workers brought for plantations." },
      { "year": "1963", "title": "Political Reform", "description": "Expanded representation." },
      { "year": "1970", "title": "Independence", "description": "Fiji becomes sovereign." }
    ]
  },
  {
    "id": "solomon islands",
    "name": "Solomon Islands",
    "subtitle": "British Solomon Islands Protectorate (1893–1978)",
    "status": "Protectorate",
    "period": "1893–1978",
    "independenceYear": "1978",
    "governance": "Colonial Administration",
    "overview": "Britain declared a protectorate over the Solomon Islands to regulate trade and suppress labor recruitment abuses.",
    "exports": ["Copra", "Timber", "Fish", "Palm Oil"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Solomon_Islands_on_the_globe.svg",
    "lat": -9.6457,
    "lng": 160.1562,
    "color": "#2E8B57",
    "milestones": [
      { "year": "1893", "title": "Protectorate Declared", "description": "Britain establishes authority." },
      { "year": "1942", "title": "Battle of Guadalcanal", "description": "Major WWII campaign." },
      { "year": "1976", "title": "Self-Government", "description": "Internal autonomy granted." },
      { "year": "1978", "title": "Independence", "description": "Solomon Islands becomes sovereign." }
    ]
  },
  {
    "id": "gilbert and ellice islands",
    "name": "Gilbert and Ellice Islands",
    "subtitle": "British Colony (1916–1976)",
    "status": "Crown Colony",
    "period": "1892–1976",
    "independenceYear": "1978–1979",
    "governance": "Colonial Administration",
    "overview": "A Pacific colony later divided into Kiribati and Tuvalu before independence.",
    "exports": ["Copra", "Phosphate", "Fish", "Coconut Products"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Kiribati_on_the_globe.svg",
    "lat": 1.8709,
    "lng": -157.3630,
    "color": "#1E90FF",
    "milestones": [
      { "year": "1892", "title": "Protectorate Declared", "description": "Britain establishes authority." },
      { "year": "1916", "title": "Crown Colony", "description": "Administrative consolidation." },
      { "year": "1976", "title": "Separation", "description": "Ellice Islands split." },
      { "year": "1979", "title": "Independence", "description": "Kiribati becomes sovereign." }
    ]
  },
  {
    "id": "tonga",
    "name": "Tonga",
    "subtitle": "British Protected State (1900–1970)",
    "status": "Protectorate",
    "period": "1900–1970",
    "independenceYear": "1970",
    "governance": "Protected Monarchy",
    "overview": "Tonga remained a sovereign monarchy but accepted British protection over foreign affairs.",
    "exports": ["Copra", "Bananas", "Vanilla", "Fish"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Tonga_on_the_globe.svg",
    "lat": -21.1789,
    "lng": -175.1982,
    "color": "#8B0000",
    "milestones": [
      { "year": "1900", "title": "Protection Treaty", "description": "Tonga becomes British protected state." },
      { "year": "1918", "title": "Influenza Pandemic", "description": "Major population impact." },
      { "year": "1958", "title": "Political Reforms", "description": "Modern governance evolves." },
      { "year": "1970", "title": "Independence", "description": "Protection treaty ends." }
    ]
  },
  {
    "id": "iraq",
    "name": "Iraq",
    "subtitle": "British Mandate of Mesopotamia (1920–1932)",
    "status": "Protectorate",
    "period": "1917–1932",
    "independenceYear": "1932",
    "governance": "League of Nations Mandate with British Advisors",
    "overview": "Following the collapse of the Ottoman Empire after World War I, Britain administered Mesopotamia under a League of Nations mandate and installed a Hashemite monarchy.",
    "exports": ["Oil", "Dates", "Wool", "Grain"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Iraq_on_the_globe.svg",
    "lat": 33.2232,
    "lng": 43.6793,
    "color": "#8B4513",
    "milestones": [
      { "year": "1917", "title": "British Capture Baghdad", "description": "Ottoman control collapses during WWI." },
      { "year": "1920", "title": "League of Nations Mandate", "description": "Britain formally administers Mesopotamia." },
      { "year": "1921", "title": "King Faisal Installed", "description": "Hashemite monarchy established." },
      { "year": "1932", "title": "Independence", "description": "Iraq joins League of Nations as sovereign state." }
    ]
  },
  {
    "id": "palestine",
    "name": "Palestine",
    "subtitle": "British Mandate for Palestine (1920–1948)",
    "status": "Protectorate",
    "period": "1917–1948",
    "independenceYear": "1948",
    "governance": "League of Nations Mandate Administration",
    "overview": "Britain administered Palestine after the fall of the Ottoman Empire. The region became the center of Arab-Jewish tensions and nationalist movements.",
    "exports": ["Citrus", "Olive Oil", "Soap", "Textiles"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/State_of_Palestine_on_the_globe.svg",
    "lat": 31.9522,
    "lng": 35.2332,
    "color": "#556B2F",
    "milestones": [
      { "year": "1917", "title": "Balfour Declaration", "description": "Britain supports Jewish national home." },
      { "year": "1920", "title": "Mandate Confirmed", "description": "League of Nations grants Britain control." },
      { "year": "1936", "title": "Arab Revolt", "description": "Major uprising against British rule." },
      { "year": "1948", "title": "End of Mandate", "description": "Britain withdraws from Palestine." }
    ]
  },
  {
    "id": "transjordan",
    "name": "Transjordan",
    "subtitle": "Emirate of Transjordan (1921–1946)",
    "status": "Protectorate",
    "period": "1921–1946",
    "independenceYear": "1946",
    "governance": "Hashemite Monarchy under British Supervision",
    "overview": "Separated from the Palestine Mandate, Transjordan was ruled by Emir Abdullah with British military and financial support.",
    "exports": ["Phosphates", "Livestock", "Grain", "Salt"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Jordan_on_the_globe.svg",
    "lat": 30.5852,
    "lng": 36.2384,
    "color": "#A0522D",
    "milestones": [
      { "year": "1921", "title": "Emirate Established", "description": "Abdullah becomes Emir under British protection." },
      { "year": "1928", "title": "Constitution Granted", "description": "Political reforms introduced." },
      { "year": "1946", "title": "Independence", "description": "Transjordan becomes Kingdom of Jordan." },
      { "year": "1949", "title": "Name Change", "description": "Renamed Hashemite Kingdom of Jordan." }
    ]
  },
  {
    "id": "kuwait",
    "name": "Kuwait",
    "subtitle": "British Protectorate of Kuwait (1899–1961)",
    "status": "Protectorate",
    "period": "1899–1961",
    "independenceYear": "1961",
    "governance": "Sheikhdom under British Protection",
    "overview": "Kuwait became a British protectorate through a treaty that placed its foreign affairs under British control while retaining internal autonomy.",
    "exports": ["Oil", "Pearls", "Fish", "Dates"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Kuwait_on_the_globe.svg",
    "lat": 29.3117,
    "lng": 47.4818,
    "color": "#2F4F4F",
    "milestones": [
      { "year": "1899", "title": "Protection Treaty", "description": "Britain assumes control of foreign policy." },
      { "year": "1938", "title": "Oil Discovery", "description": "Major petroleum reserves found." },
      { "year": "1950", "title": "Economic Boom", "description": "Oil transforms economy." },
      { "year": "1961", "title": "Independence", "description": "Kuwait becomes sovereign." }
    ]
  },
  {
    "id": "bahrain",
    "name": "Bahrain",
    "subtitle": "British Protectorate of Bahrain (1861–1971)",
    "status": "Protectorate",
    "period": "1861–1971",
    "independenceYear": "1971",
    "governance": "Al Khalifa Monarchy under British Protection",
    "overview": "Bahrain was a key naval and trade hub in the Persian Gulf and the first Gulf state where oil was discovered.",
    "exports": ["Oil", "Pearls", "Aluminum", "Fish"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Bahrain_on_the_globe.svg",
    "lat": 26.0667,
    "lng": 50.5577,
    "color": "#B22222",
    "milestones": [
      { "year": "1861", "title": "Protection Treaty", "description": "Britain establishes protectorate relationship." },
      { "year": "1932", "title": "Oil Discovery", "description": "First oil discovery in the Gulf." },
      { "year": "1950", "title": "Economic Modernization", "description": "Rapid development begins." },
      { "year": "1971", "title": "Independence", "description": "Bahrain becomes sovereign state." }
    ]
  },
  {
    "id": "qatar",
    "name": "Qatar",
    "subtitle": "British Protectorate of Qatar (1916–1971)",
    "status": "Protectorate",
    "period": "1916–1971",
    "independenceYear": "1971",
    "governance": "Al Thani Monarchy under British Protection",
    "overview": "Qatar came under British protection during World War I and later became a major oil and gas exporter.",
    "exports": ["Oil", "Natural Gas", "Pearls", "Fish"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Qatar_on_the_globe.svg",
    "lat": 25.3548,
    "lng": 51.1839,
    "color": "#800080",
    "milestones": [
      { "year": "1916", "title": "Protection Treaty", "description": "Britain signs treaty with Al Thani rulers." },
      { "year": "1940", "title": "Oil Discovery", "description": "Petroleum reserves discovered." },
      { "year": "1968", "title": "British Withdrawal Plan", "description": "Britain announces Gulf withdrawal." },
      { "year": "1971", "title": "Independence", "description": "Qatar becomes sovereign state." }
    ]
  },
  {
    "id": "trucial states",
    "name": "Trucial States",
    "subtitle": "British Protectorates (1820–1971)",
    "status": "Protectorate",
    "period": "1820–1971",
    "independenceYear": "1971",
    "governance": "Local Emirates under British Protection",
    "overview": "The Trucial States consisted of several Gulf sheikhdoms that later united to form the United Arab Emirates.",
    "exports": ["Pearls", "Fish", "Dates", "Oil"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/United_Arab_Emirates_on_the_globe.svg",
    "lat": 23.4241,
    "lng": 53.8478,
    "color": "#4682B4",
    "milestones": [
      { "year": "1820", "title": "General Maritime Treaty", "description": "Britain establishes influence over Gulf sheikhdoms." },
      { "year": "1892", "title": "Exclusive Agreements", "description": "States become British protectorates." },
      { "year": "1968", "title": "British Withdrawal", "description": "Britain plans to leave Gulf." },
      { "year": "1971", "title": "UAE Formed", "description": "United Arab Emirates established." }
    ]
  },
  {
    "id": "aden",
    "name": "Aden",
    "subtitle": "Colony of Aden (1839–1967)",
    "status": "Crown Colony",
    "period": "1839–1967",
    "independenceYear": "1967",
    "governance": "Colonial Governor",
    "overview": "Aden served as a crucial refueling port for ships traveling between Europe and Asia, especially after the opening of the Suez Canal.",
    "exports": ["Oil Products", "Coffee", "Salt", "Fish"],
    "mapSnippet": "https://commons.wikimedia.org/wiki/Special:FilePath/Yemen_on_the_globe.svg",
    "lat": 15.3694,
    "lng": 44.1910,
    "color": "#8B0000",
    "milestones": [
      { "year": "1839", "title": "British Occupation", "description": "Aden captured to secure trade routes." },
      { "year": "1937", "title": "Crown Colony", "description": "Separated from British India." },
      { "year": "1963", "title": "Aden Emergency", "description": "Insurgency against British rule." },
      { "year": "1967", "title": "Independence", "description": "People's Republic of South Yemen established." }
    ]
  }
]
