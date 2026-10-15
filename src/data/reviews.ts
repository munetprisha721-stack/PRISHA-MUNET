import { RestaurantReview } from '../types';

export const RESTAURANT_REVIEWS: RestaurantReview[] = [
  {
    id: 'rev-1',
    name: 'The Saffron Hearth',
    city: 'New Delhi',
    locationDetails: 'Connaught Place Outer Circle, New Delhi',
    cuisine: 'Awadhi & North Indian',
    priceRange: '$$$',
    reviewDate: '2026-03-15',
    dishRecommendations: [
      'Slow-Cooked Kakori Kebab with Roomali Roti',
      '18-Hour Dal Makhani',
      'Awadhi Dum Gosht Biryani',
      'Shahi Tukda with Reduced Rabdi'
    ],
    pros: [
      'Exemplary spice restraint; aromas shine through without excessive oil',
      'Muted amber brass decor with comfortable acoustics (under 65 dB)',
      'Extensive vegetarian Awadhi selections beyond paneer'
    ],
    cons: [
      'Weekend table reservations require at least 3 days advance booking',
      'The roomali rotis cool quickly if main courses are served together'
    ],
    ambience: 'Muted amber brass chandeliers, warm reclaimed teak wood tables, acoustic treatment that allows intimate conversation.',
    foodScore: 'Exemplary culinary execution with nuanced ground mace and cardamom',
    serviceScore: 'Attentive, discreet, and deeply knowledgeable on allergen safety',
    valueScore: 'Fairly priced for premium slow-simmered regional dining',
    summary: 'A refined dining room that honours Awadhi slow-cooking traditions with remarkable dignity and restraint.',
    overallVerdict: 'The Saffron Hearth demonstrates that North Indian fine dining does not have to rely on excessive cream or generic gravies. A masterclass in gentle, aromatic heat.',
    coverImage: '/src/assets/images/butter_chicken_kadai_1792023725673.jpg',
    isFictionalDemo: true
  },
  {
    id: 'rev-2',
    name: 'Coastal Bay Bistro',
    city: 'Mumbai',
    locationDetails: 'Bandra West, Mumbai',
    cuisine: 'Konkan & Mangalorean Seafood',
    priceRange: '$$',
    reviewDate: '2026-03-02',
    dishRecommendations: [
      'Kundapur Prawn Ghee Roast',
      'Crispy Rava Pomfret Fry',
      'Lacy Neer Dosa',
      'Solkadhi (Chilled Kokum & Coconut Milk)'
    ],
    pros: [
      'Exceptional freshness in day-boat seafood sourcing',
      'The ghee roast achieves deep red caramelization without scorching',
      'Lively coastal music and refreshing sea breeze ambience'
    ],
    cons: [
      'Seating is relatively compact with narrow walkways',
      'Limited choices for strict vegetarian or Jain diners'
    ],
    ambience: 'Airy whitewashed brick walls with maritime artifacts, rattan chairs, and natural greenery.',
    foodScore: 'Vibrant, fiery red chillies balanced by nutty coconut and ghee',
    serviceScore: 'Friendly, fast-paced service accustomed to high evening turnover',
    valueScore: 'Solid portions with great seafood freshness for coastal dining',
    summary: 'A joyful tribute to the Konkan shoreline with unforgettable ghee roast curries and cloud-soft neer dosas.',
    overallVerdict: 'If you crave coastal warmth, tangy kokum, and impeccably crisped seafood, Coastal Bay Bistro delivers one of the most energetic dining experiences in the city.',
    coverImage: '/src/assets/images/hero_indian_feast_1792023725138.jpg',
    isFictionalDemo: true
  },
  {
    id: 'rev-3',
    name: 'Annapurna Rasoi',
    city: 'Jaipur',
    locationDetails: 'Near C-Scheme, Jaipur',
    cuisine: 'Traditional Rajasthani & Marwari',
    priceRange: '$$',
    reviewDate: '2026-02-18',
    dishRecommendations: [
      'Royal Dal Baati Churma with Pure Desi Ghee',
      'Desert Ker Sangri Sabzi',
      'Gatte Ki Sabzi in Spiced Curd Gravy',
      'Clay Cup Kesar Malai Lassi'
    ],
    pros: [
      'Uncompromising traditional recipes using stone-ground flours and cold-pressed oils',
      'Unlimited traditional thali service served on heavy embossed bronze plates',
      '100% vegetarian with extensive Jain-compliant options'
    ],
    cons: [
      'The thali portions are extremely generous and rich in pure ghee; pace yourself carefully',
      'No alcohol or espresso served on premise'
    ],
    ambience: 'Traditional frescoed arches with hand-painted peacocks, brass lanterns, and low Baithak seating options.',
    foodScore: 'Authentic desert spices, tangy amchur, and fragrant dry beans',
    serviceScore: 'Warm Rajasthani hospitality with servers urging second helpings',
    valueScore: 'Exceptional thali value offering over 18 distinct traditional items',
    summary: 'A pure vegetarian haven bringing the rich, wholesome feast traditions of royal Rajasthan to life.',
    overallVerdict: 'Annapurna Rasoi provides an unforgettable cultural journey into desert gastronomy. Every baati is crisp, the lentils piping hot, and the churma deeply fragrant.',
    coverImage: '/src/assets/images/hero_indian_feast_1792023725138.jpg',
    isFictionalDemo: true
  },
  {
    id: 'rev-4',
    name: 'Southern Saffron',
    city: 'Bengaluru',
    locationDetails: 'Indiranagar 100ft Road, Bengaluru',
    cuisine: 'Chettinad & Karnataka Regional',
    priceRange: '$$',
    reviewDate: '2026-02-10',
    dishRecommendations: [
      'Black Pepper Mushroom Chukka',
      'Chettinad Kozhi Curry with Kal Dosa',
      'Bisi Bele Bath with Spiced Boondi',
      'Filter Coffee Mousse with Cardamom Tuile'
    ],
    pros: [
      'Freshly cracked spices toasted daily in-house',
      'Balanced spice levels that showcase peppercorn complexity rather than pure heat',
      'Great shaded outdoor verandah seating under heritage rain trees'
    ],
    cons: [
      'Parking on 100ft Road can be challenging during peak dinner hours',
      'The filter coffee dessert sells out quickly on weekends'
    ],
    ambience: 'Courtyard-style verandah with lush green foliage, terracotta tiles, and soft instrumental Carnatic fusion.',
    foodScore: 'Masterful hand with whole peppercorns, star anise, and curry leaves',
    serviceScore: 'Courteous staff eager to explain regional culinary differences',
    valueScore: 'Well-portioned dishes at honest cafe bistro prices',
    summary: 'A breezy culinary oasis celebrating the vibrant, peppery dishes of Tamil Nadu and Karnataka.',
    overallVerdict: 'Southern Saffron proves that South Indian cuisine extends far beyond standard breakfast dosas. Their complex gravies and fluffy kal dosas are a revelation.',
    coverImage: '/src/assets/images/dum_biryani_handi_1792023727593.jpg',
    isFictionalDemo: true
  },
  {
    id: 'rev-5',
    name: 'Kolkata Kathi & Chaat Junction',
    city: 'Kolkata',
    locationDetails: 'Park Street Extension, Kolkata',
    cuisine: 'Bengali Street & Heritage Snacks',
    priceRange: '$',
    reviewDate: '2026-01-28',
    dishRecommendations: [
      'Flaky Double Egg Double Chicken Kathi Roll',
      'Mughlai Paratha with Potato Alur Dom',
      'Tangy Puchka with Gondhoraj Lemon Water',
      'Baked Rosogolla with Date Palm Jaggery'
    ],
    pros: [
      'The parathas are rolled and fried fresh to order on enormous iron tawas',
      'Remarkably budget-friendly for students and daily commuters',
      'Signature green chilli-onion lime marinade is addictive'
    ],
    cons: [
      'High-traffic casual counter with limited standing tables and no reservations',
      'Expect a 10–12 minute wait during evening peak hours'
    ],
    ambience: 'Fast-paced, vibrant open-kitchen counter with neon heritage typography and historical black-and-white city prints.',
    foodScore: 'Crispy flaky paratha crusts with succulent, smoky fillings',
    serviceScore: 'Brisk, highly efficient assembly line ticketing',
    valueScore: 'Incredible value—an entire feast under ₹350 per person',
    summary: 'The quintessential taste of Kolkata’s legendary street food culture served hot, fast, and authentic.',
    overallVerdict: 'For a quick lunch or late-night street bite, this junction sets the gold standard for Kolkata-style kathi rolls. The crunch of the paratha against the tender chicken is unmatched.',
    coverImage: '/src/assets/images/street_food_puri_1792023725550.jpg',
    isFictionalDemo: true
  }
];
