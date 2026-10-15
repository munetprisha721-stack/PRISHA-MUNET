import { Recipe } from '../types';

export const RECIPES: Recipe[] = [
  {
    id: 'recipe-1',
    slug: 'restaurant-style-butter-chicken',
    name: 'Restaurant-Style Butter Chicken (Murgh Makhani)',
    category: 'Mughlai & North Indian',
    cuisine: 'North Indian',
    dishType: 'Curry',
    isVegetarian: false,
    prepTimeMinutes: 25,
    cookTimeMinutes: 40,
    servings: 4,
    difficulty: 'Medium',
    coverImage: '/src/assets/images/butter_chicken_kadai_1792023725673.jpg',
    description: 'Tender charred chicken thighs simmered in a velvet-smooth, aromatic tomato-cashew gravy with pure butter, fresh cream, and fragrant kasuri methi.',
    ingredients: [
      { name: 'Boneless chicken thighs (cut into bite-sized pieces)', quantity: 750, unit: 'g' },
      { name: 'Fresh lemon juice', quantity: 15, unit: 'ml' },
      { name: 'Hung Greek-style whole curd / yogurt', quantity: 120, unit: 'g' },
      { name: 'Ginger-garlic paste (freshly pounded)', quantity: 30, unit: 'g' },
      { name: 'Kashmiri red chilli powder', quantity: 18, unit: 'g', notes: 'for brilliant natural ruby color' },
      { name: 'Ripe plum tomatoes (roughly chopped)', quantity: 750, unit: 'g' },
      { name: 'Raw unsalted cashew nuts', quantity: 45, unit: 'g' },
      { name: 'Unsalted butter', quantity: 60, unit: 'g', notes: 'cold, cubed' },
      { name: 'Heavy whipping cream', quantity: 80, unit: 'ml' },
      { name: 'Dried kasuri methi (fenugreek leaves)', quantity: 5, unit: 'g', notes: 'lightly toasted' },
      { name: 'Wild forest honey or organic jaggery', quantity: 15, unit: 'ml' },
      { name: 'Green cardamom pods', quantity: 3, unit: 'pcs' },
      { name: 'Cloves', quantity: 3, unit: 'pcs' },
      { name: 'Garam masala powder', quantity: 4, unit: 'g' },
      { name: 'Salt', quantity: 8, unit: 'g' }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Toss chicken thighs with lemon juice and 4g salt. Rest for 15 minutes. In a bowl, whisk yogurt with ginger-garlic paste, 10g Kashmiri chilli, garam masala, and a splash of mustard oil. Coat chicken thoroughly; marinate in the refrigerator for at least 2 hours.',
        tip: 'Overnight marination yields the most tender, flavorful chicken fibers.'
      },
      {
        stepNumber: 2,
        instruction: 'Preheat oven broiler to 230°C or heat a ridged cast-iron skillet over high flame. Sear chicken for 4–5 minutes per side until charred on the edges with blistered tandoori spots. Remove and set aside with all pan juices.',
        tip: 'Do not crowd the skillet; sear in two batches to ensure high-heat caramelization rather than steaming.'
      },
      {
        stepNumber: 3,
        instruction: 'In a pot, combine chopped tomatoes, cashew nuts, green cardamom, cloves, remaining ginger-garlic paste, and 150ml water. Simmer covered on medium heat for 20 minutes until tomatoes collapse and cashews soften.',
        tip: 'Ripe Roma or San Marzano tomatoes provide natural sweetness and low acidity.'
      },
      {
        stepNumber: 4,
        instruction: 'Let tomato mixture cool slightly, then blend in a high-speed blender until silky. Pass the puree through a fine-mesh sieve directly into a clean saucepan, pressing with a ladle to discard tomato skins and seeds.',
        tip: 'Straining is the indispensable restaurant secret that delivers true velvet makhani texture.'
      },
      {
        stepNumber: 5,
        instruction: 'Melt 20g butter in the saucepan with remaining 8g Kashmiri chilli powder for 15 seconds. Pour in strained sauce. Simmer for 10 minutes until glossy. Stir in honey and adjust salt to balance acidity.',
        tip: 'A touch of honey balances the bright tang of fresh tomatoes.'
      },
      {
        stepNumber: 6,
        instruction: 'Slide charred chicken pieces and resting juices into gravy. Simmer gently for 6 minutes. Turn heat to lowest setting. Swirl in heavy cream and the remaining cold butter cubes until emulsified. Finish by crushing toasted kasuri methi between your palms over the pot.',
        tip: 'Do not boil vigorously after adding cream and finishing butter to keep sauce glossy and stable.'
      }
    ],
    equipment: ['Cast-iron skillet or grill pan', 'High-speed blender', 'Fine mesh sieve', 'Wide saucepan'],
    substitutions: [
      'Nut allergy: Swap cashews with soaked melon seeds (magaz) or sunflower seeds.',
      'Vegetarian: Replace chicken with 500g pan-seared paneer cubes or roasted cauliflower florets.'
    ],
    storage: 'Refrigerate in an airtight glass container for up to 3 days. Reheat gently over low heat with a splash of warm milk.',
    allergens: ['Dairy (Butter, Cream, Curd)', 'Tree Nuts (Cashews)'],
    seo: {
      metaTitle: 'Restaurant Butter Chicken Recipe | TasteTrails',
      metaDescription: 'Cook authentic restaurant-style Butter Chicken with charred tandoori chicken, strained tomato-cashew makhani gravy, and butter emulsion.',
      mainKeyword: 'homemade butter chicken recipe',
      relatedKeywords: ['creamy murgh makhani', 'boneless chicken curry'],
      canonicalUrl: 'https://tastetrails.app/recipe/restaurant-style-butter-chicken',
    }
  },
  {
    id: 'recipe-2',
    slug: 'authentic-hyderabadi-dum-biryani',
    name: 'Authentic Hyderabadi Chicken Dum Biryani',
    category: 'Royal Heritage & Rice',
    cuisine: 'Hyderabadi',
    dishType: 'Rice',
    isVegetarian: false,
    prepTimeMinutes: 40,
    cookTimeMinutes: 45,
    servings: 6,
    difficulty: 'Advanced',
    coverImage: '/src/assets/images/dum_biryani_handi_1792023727593.jpg',
    description: 'The monarch of Indian rice feasts: long-grain aged basmati rice layered with spiced marinated chicken, saffron milk, fried golden onions, fresh mint, and slow-cooked in a sealed handi.',
    ingredients: [
      { name: 'Aged long-grain Basmati rice (soaked for 40 mins)', quantity: 500, unit: 'g' },
      { name: 'Bone-in chicken (curry cut)', quantity: 800, unit: 'g' },
      { name: 'Thick whole milk curd (dahi)', quantity: 200, unit: 'g' },
      { name: 'Fried onions (birista)', quantity: 150, unit: 'g' },
      { name: 'Fresh mint leaves (chopped)', quantity: 30, unit: 'g' },
      { name: 'Fresh coriander leaves (chopped)', quantity: 30, unit: 'g' },
      { name: 'Ginger-garlic paste', quantity: 35, unit: 'g' },
      { name: 'Pure desi ghee', quantity: 45, unit: 'g' },
      { name: 'Pure saffron strands soaked in 50ml warm milk', quantity: 1, unit: 'g' },
      { name: 'Shahi jeera (caraway seeds)', quantity: 4, unit: 'g' },
      { name: 'Green cardamom pods', quantity: 6, unit: 'pcs' },
      { name: 'Cinnamon stick (5cm)', quantity: 1, unit: 'pcs' },
      { name: 'Cloves', quantity: 5, unit: 'pcs' },
      { name: 'Kashmiri red chilli powder', quantity: 12, unit: 'g' },
      { name: 'Biryani masala powder', quantity: 8, unit: 'g' },
      { name: 'Salt for rice boiling water', quantity: 25, unit: 'g' }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Marinate chicken in a heavy-bottom handi or Dutch oven with curd, ginger-garlic paste, half the fried onions, mint, coriander, chilli powder, biryani masala, half the ghee, and 8g salt. Let rest for at least 3 hours.',
        tip: 'Bone-in chicken yields a richer, gelatinous sauce at the base of the pot.'
      },
      {
        stepNumber: 2,
        instruction: 'Bring 3 liters of water to a rolling boil with 25g salt, shahi jeera, cinnamon, 3 cardamom pods, and cloves. Add drained soaked basmati rice.',
        tip: 'The cooking water should taste as salty as sea water so the rice absorbs seasoning internally.'
      },
      {
        stepNumber: 3,
        instruction: 'Cook rice in stages: After 4 minutes (60% cooked), ladle one third of the rice directly over the raw chicken. After another 2 minutes (75% cooked), layer the second third. After 1 more minute (85% cooked), top with the final layer of rice.',
        tip: 'Staggered cooking accounts for steam rising: the lower rice absorbs meat juices while the top steams gently.'
      },
      {
        stepNumber: 4,
        instruction: 'Top the layered rice with saffron milk, remaining fried birista onions, chopped herbs, and melted desi ghee. Seal the rim with whole wheat dough and press a tight lid down firmly.',
        tip: 'An airtight seal traps pressurized steam (dum) inside the vessel.'
      },
      {
        stepNumber: 5,
        instruction: 'Place the handi on high heat for 8 minutes until steam builds up inside. Place a heavy cast-iron tawa underneath the handi and reduce flame to lowest setting. Dum cook for 25 minutes.',
        tip: 'The tawa acts as a heat diffuser, preventing the marinated meat at the base from scorching.'
      },
      {
        stepNumber: 6,
        instruction: 'Turn off heat and let the handi rest undisturbed for 15 minutes. Break the dough seal, take a wide flat spoon, and gently slice down to the bottom, bringing up fluffy saffron grains and tender spiced chicken.',
        tip: 'Never stir vigorously or you will break the delicate, fragrant long grains.'
      }
    ],
    equipment: ['Heavy-bottomed handi or Dutch oven', 'Cast-iron tawa (diffuser)', 'Fine colander', 'Tight-fitting lid'],
    substitutions: [
      'Vegetarian: Substitute chicken with 500g mixed parboiled vegetables (potatoes, carrots, beans, cauliflower) and 200g paneer cubes.'
    ],
    storage: 'Keep in an airtight container for up to 2 days. Reheat by sprinkling a tablespoon of water and microwaving covered, or steaming.',
    allergens: ['Dairy (Ghee, Curd, Milk)'],
    seo: {
      metaTitle: 'Hyderabadi Chicken Dum Biryani Recipe | TasteTrails',
      metaDescription: 'Master authentic Hyderabadi Dum Biryani with marinated raw chicken, aged basmati rice, saffron milk, and aromatic dough-sealed handi dum cooking.',
      mainKeyword: 'authentic Hyderabadi chicken dum biryani',
      relatedKeywords: ['kacchi dum cooking method', 'aged basmati rice feast'],
      canonicalUrl: 'https://tastetrails.app/recipe/authentic-hyderabadi-dum-biryani',
    }
  },
  {
    id: 'recipe-3',
    slug: 'classic-mumbai-vada-pav',
    name: 'Classic Mumbai Vada Pav with Fiery Dry Garlic Chutney',
    category: 'Street Food & Chaat',
    cuisine: 'Maharashtrian',
    dishType: 'Street Food',
    isVegetarian: true,
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    servings: 6,
    difficulty: 'Easy',
    coverImage: '/src/assets/images/street_food_puri_1792023725550.jpg',
    description: 'Crisp golden spiced potato fritters encased in fluffy pav rolls, slathered with fiery dry garlic-peanut chutney, tangy tamarind, and fried green chillies.',
    ingredients: [
      { name: 'Boiled and peeled potatoes (coarsely mashed)', quantity: 500, unit: 'g' },
      { name: 'Soft bakery pav buns', quantity: 6, unit: 'pcs' },
      { name: 'Gram flour (besan)', quantity: 150, unit: 'g' },
      { name: 'Rice flour (for extra crunch)', quantity: 20, unit: 'g' },
      { name: 'Mustard seeds (rai)', quantity: 4, unit: 'g' },
      { name: 'Fresh curry leaves (kadi patta)', quantity: 12, unit: 'pcs' },
      { name: 'Green chillies (finely minced)', quantity: 3, unit: 'pcs' },
      { name: 'Garlic cloves (for potato mix)', quantity: 6, unit: 'pcs' },
      { name: 'Turmeric powder', quantity: 4, unit: 'g' },
      { name: 'Asafoetida (hing)', quantity: 1, unit: 'g' },
      { name: 'Desiccated coconut', quantity: 30, unit: 'g', notes: 'for dry chutney' },
      { name: 'Roasted unsalted peanuts', quantity: 25, unit: 'g', notes: 'for dry chutney' },
      { name: 'Garlic cloves (unpeeled, for dry chutney)', quantity: 8, unit: 'pcs' },
      { name: 'Kashmiri chilli powder (for dry chutney)', quantity: 15, unit: 'g' },
      { name: 'Oil for deep frying', quantity: 500, unit: 'ml' }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Heat 15ml oil in a pan. Add mustard seeds until they crackle. Add curry leaves, hing, minced green chillies, and crushed garlic. Sauté for 30 seconds until fragrant. Add turmeric and mashed potatoes with salt. Cook for 2 minutes, then let cool and shape into 6 smooth round balls.',
        tip: 'Do not puree the potatoes; coarse texture gives the vada authentic bite.'
      },
      {
        stepNumber: 2,
        instruction: 'Make the batter: In a bowl, whisk besan, rice flour, turmeric, a pinch of hing, salt, and approximately 120ml water into a smooth, lump-free batter that coats the back of a spoon.',
        tip: 'Adding rice flour guarantees a light, crisp shell that does not become soggy.'
      },
      {
        stepNumber: 3,
        instruction: 'Make the famous dry garlic chutney: Roast desiccated coconut, roasted peanuts, unpeeled garlic, and fried batter droplets (boondi) in a dry pan until golden. Grind with Kashmiri chilli powder and salt into a coarse, fiery crimson powder.',
        tip: 'Save the crunchy fried chickpea droplets from the frying pan to grind into this chutney.'
      },
      {
        stepNumber: 4,
        instruction: 'Heat oil in a kadai to 180°C. Dip each potato ball into the besan batter, ensuring an even coating, and gently slide into hot oil. Fry for 4–5 minutes until crisp and pale golden. Drain on paper towels.',
        tip: 'Drizzle small drippings of batter into the oil alongside the vadas to make crunchy chura.'
      },
      {
        stepNumber: 5,
        instruction: 'Slit pav buns 3/4 through. Spread spicy green chutney on one side, sweet tamarind chutney on the other, and dust generously with the fiery dry garlic chutney. Insert the hot batata vada, press gently, and serve with a salted fried green chilli.',
        tip: 'Serve immediately while the vada is piping hot and the pav soft.'
      }
    ],
    equipment: ['Deep frying kadai or wok', 'Slotted skimmer spoon', 'Spice grinder'],
    substitutions: [
      'Gluten-conscious: Ensure your asafoetida is gluten-free and serve the vada on gluten-free burger buns.'
    ],
    storage: 'Best enjoyed fresh. Reheat leftover vadas in an air fryer at 180°C for 4 minutes to restore crispiness.',
    allergens: ['Peanuts (in dry chutney)', 'Gluten (Pav buns, check hing)'],
    seo: {
      metaTitle: 'Mumbai Vada Pav with Dry Garlic Chutney | TasteTrails',
      metaDescription: 'Crisp spiced potato fritters in fluffy pav buns slathered with fiery dry garlic-peanut chutney and tangy tamarind for the ultimate street bite.',
      mainKeyword: 'Mumbai vada pav recipe',
      relatedKeywords: ['batata vada snack', 'spicy dry garlic chutney'],
      canonicalUrl: 'https://tastetrails.app/recipe/classic-mumbai-vada-pav',
    }
  },
  {
    id: 'recipe-4',
    slug: 'dal-makhani-slow-cooked',
    name: 'Slow-Cooked Punjabi Dal Makhani',
    category: 'Mughlai & North Indian',
    cuisine: 'Punjabi',
    dishType: 'Curry',
    isVegetarian: true,
    prepTimeMinutes: 15,
    cookTimeMinutes: 90,
    servings: 5,
    difficulty: 'Medium',
    coverImage: '/src/assets/images/butter_chicken_kadai_1792023725673.jpg',
    description: 'Whole black urad lentils and kidney beans slow-simmered for hours with butter, fresh tomato puree, garlic, and cream until rich, creamy, and deeply comforting.',
    ingredients: [
      { name: 'Whole black gram (Sabut Urad Dal)', quantity: 200, unit: 'g', notes: 'soaked overnight' },
      { name: 'Red kidney beans (Rajma)', quantity: 50, unit: 'g', notes: 'soaked overnight' },
      { name: 'Pure desi butter', quantity: 70, unit: 'g' },
      { name: 'Fresh heavy cream', quantity: 60, unit: 'ml' },
      { name: 'Fresh tomato puree (fine)', quantity: 250, unit: 'g' },
      { name: 'Ginger-garlic paste', quantity: 25, unit: 'g' },
      { name: 'Kashmiri red chilli powder', quantity: 10, unit: 'g' },
      { name: 'Garam masala', quantity: 3, unit: 'g' },
      { name: 'Dried kasuri methi (crushed)', quantity: 4, unit: 'g' },
      { name: 'Salt', quantity: 8, unit: 'g' }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Wash soaked urad dal and rajma under cold water multiple times until water runs clear. In a pressure cooker or heavy pot, boil with 1 liter water, 1 tsp salt, and a pinch of Kashmiri chilli for 40 minutes until lentils can be crushed between two fingers with zero resistance.',
        tip: 'Washing the soaked lentils vigorously removes surface starch and dark muddy bitterness.'
      },
      {
        stepNumber: 2,
        instruction: 'Melt 30g butter in a large pot. Add ginger-garlic paste and sauté for 1 minute. Add tomato puree and Kashmiri chilli powder; cook for 8 minutes until butter begins separating at the perimeter.',
        tip: 'Using smooth tomato puree rather than chopped tomatoes gives the dal its signature glossy finish.'
      },
      {
        stepNumber: 3,
        instruction: 'Add boiled lentils along with their cooking liquor into the tomato base. Mash about 25% of the lentils against the side of the pot using a potato masher or back of a ladle.',
        tip: 'Mashing releases natural starches that create an authentic creamy emulsion without needing excessive flour or starches.'
      },
      {
        stepNumber: 4,
        instruction: 'Simmer on low heat for at least 45 minutes (the longer the better), stirring occasionally and adding small splashes of warm water as it thickens.',
        tip: 'Traditional dhabas simmer Dal Makhani overnight over dying tandoor coals.'
      },
      {
        stepNumber: 5,
        instruction: 'Stir in the remaining 40g cold butter, fresh cream, garam masala, and toasted kasuri methi. Simmer for 5 final minutes until velvety.',
        tip: 'Garnish with a swirl of cream, butter cube, and fine julienned ginger.'
      }
    ],
    equipment: ['Pressure cooker or Instant Pot', 'Heavy-bottomed pot', 'Potato masher'],
    substitutions: [
      'Vegan: Substitute dairy butter with neutral oil/vegan butter and heavy cream with rich cashew cream.'
    ],
    storage: 'Refrigerate for up to 4 days. Dal Makhani actually tastes even better the next day as flavours deepen.',
    allergens: ['Dairy (Butter, Cream)'],
    seo: {
      metaTitle: 'Slow Cooked Dal Makhani Recipe | TasteTrails',
      metaDescription: 'Velvety black lentils and kidney beans slow-simmered with butter, tomato puree, and cream for rich, traditional Punjabi comfort.',
      mainKeyword: 'slow cooked dal makhani',
      relatedKeywords: ['creamy black urad dal', 'restaurant style dal makhani'],
      canonicalUrl: 'https://tastetrails.app/recipe/dal-makhani-slow-cooked',
    }
  },
  {
    id: 'recipe-5',
    slug: 'crisp-delhi-aloo-chaat',
    name: 'Crisp Old Delhi-Style Aloo Chaat',
    category: 'Street Food & Chaat',
    cuisine: 'North Indian',
    dishType: 'Snack',
    isVegetarian: true,
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Easy',
    coverImage: '/src/assets/images/street_food_puri_1792023725550.jpg',
    description: 'Golden shallow-fried crispy potato cubes tossed hot with tangy saunth, spicy mint chutney, roasted cumin, black salt, pomegranate pearls, and crunchy sev.',
    ingredients: [
      { name: 'Potatoes (boiled, peeled, and cubed into 2cm pieces)', quantity: 500, unit: 'g' },
      { name: 'Cornstarch (for extra crisp coating)', quantity: 20, unit: 'g' },
      { name: 'Mustard oil or ghee for shallow frying', quantity: 100, unit: 'ml' },
      { name: 'Chaat masala powder', quantity: 6, unit: 'g' },
      { name: 'Roasted cumin powder (bhuna jeera)', quantity: 4, unit: 'g' },
      { name: 'Kala namak (black salt)', quantity: 3, unit: 'g' },
      { name: 'Spicy green mint-coriander chutney', quantity: 45, unit: 'ml' },
      { name: 'Sweet tamarind-jaggery saunth chutney', quantity: 45, unit: 'ml' },
      { name: 'Fresh pomegranate arils', quantity: 40, unit: 'g' },
      { name: 'Crisp nylon sev', quantity: 30, unit: 'g' },
      { name: 'Fresh lemon juice', quantity: 10, unit: 'ml' }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Toss boiled potato cubes gently with cornstarch and a pinch of salt until lightly coated. Chill in freezer for 10 minutes to dry out surface moisture.',
        tip: 'Chilling ensures the potato exterior crisps up dramatically without absorbing excess oil.'
      },
      {
        stepNumber: 2,
        instruction: 'Heat oil in a wide tawa or skillet over medium-high flame. Add potato cubes in a single layer and shallow fry, turning periodically, for 10–12 minutes until all sides are deep golden and audibly crunchy.',
        tip: 'Shallow frying in mustard oil imparts authentic North Indian rustic aroma.'
      },
      {
        stepNumber: 3,
        instruction: 'Transfer hot potatoes immediately to a large metal mixing bowl while sizzling. Sprinkle chaat masala, bhuna jeera, black salt, and lemon juice. Toss vigorously so spices coat every facet.',
        tip: 'Spices must hit the potatoes while they are piping hot to bloom and adhere properly.'
      },
      {
        stepNumber: 4,
        instruction: 'Drizzle with green mint chutney and sweet tamarind chutney. Top with fresh pomegranate arils, finely chopped coriander, and a generous blizzard of crisp sev. Serve immediately with toothpicks.',
        tip: 'Eat immediately to enjoy the hot, crispy potatoes against the chilled, tangy chutneys.'
      }
    ],
    equipment: ['Heavy skillet or tawa', 'Metal mixing bowl'],
    substitutions: [
      'Health-conscious: Toss boiled cubes in 1 tbsp oil and air-fry at 200°C for 18 minutes.'
    ],
    storage: 'Must be prepared and consumed immediately; potatoes will lose their crisp crunch upon sitting.',
    allergens: ['None (Naturally Gluten-Free & Vegan)'],
    seo: {
      metaTitle: 'Crisp Old Delhi Aloo Chaat Recipe | TasteTrails',
      metaDescription: 'Crispy shallow-fried golden potato cubes tossed hot with roasted cumin, black salt, sweet tamarind, mint chutney, and fresh pomegranate arils.',
      mainKeyword: 'Old Delhi aloo chaat recipe',
      relatedKeywords: ['crispy fried potato chaat', 'tangy street chaat chutneys'],
      canonicalUrl: 'https://tastetrails.app/recipe/crisp-delhi-aloo-chaat',
    }
  },
  {
    id: 'recipe-6',
    slug: 'royal-saffron-phirni',
    name: 'Royal Saffron Phirni (Slow-Cooked Rice Pudding)',
    category: 'Desserts & Sweets',
    cuisine: 'Kashmiri & Awadhi',
    dishType: 'Dessert',
    isVegetarian: true,
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    servings: 6,
    difficulty: 'Easy',
    coverImage: '/src/assets/images/indian_royal_sweets_1792023727734.jpg',
    description: 'A regal royal dessert of coarsely ground basmati rice slow-simmered in whole milk, infused with golden Kashmiri saffron, green cardamom, and garnished with slivered pistachios.',
    ingredients: [
      { name: 'Aged fragrant Basmati rice', quantity: 60, unit: 'g' },
      { name: 'Full-fat whole cow milk', quantity: 1000, unit: 'ml' },
      { name: 'Sugar', quantity: 90, unit: 'g' },
      { name: 'Pure Kashmiri saffron strands', quantity: 1, unit: 'g', notes: 'soaked in 2 tbsp warm milk' },
      { name: 'Green cardamom powder', quantity: 3, unit: 'g' },
      { name: 'Slivered pistachios and almonds', quantity: 25, unit: 'g' },
      { name: 'Rose water or kewra water', quantity: 5, unit: 'ml' }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Rinse basmati rice thoroughly and soak in water for 30 minutes. Drain completely and spread on a clean cloth for 15 minutes to dry. Pulse in a grinder to a coarse, semolina-like (sooji) texture. Do not grind into fine powder.',
        tip: 'The coarse granular texture of the ground rice is the hallmark of genuine phirni.'
      },
      {
        stepNumber: 2,
        instruction: 'In a heavy-bottomed pan, bring the whole milk to a boil. Reduce heat to low and let it simmer for 10 minutes, stirring frequently to prevent scorching at the base.',
        tip: 'Use full-fat milk for natural creaminess without needing condensed milk.'
      },
      {
        stepNumber: 3,
        instruction: 'Mix the coarse rice with 4 tbsp of cold milk into a slurry to prevent lumps. Gradually pour into simmering milk while whisking constantly with the other hand.',
        tip: 'Constant whisking during the first 3 minutes prevents the rice granules from sinking and clumping.'
      },
      {
        stepNumber: 4,
        instruction: 'Cook on low heat, stirring continuously, for 15–18 minutes until rice is fully cooked and pudding thickens to a custard consistency that coats the back of a spoon.',
        tip: 'Always cook on low heat to allow the rice to release its starch gradually.'
      },
      {
        stepNumber: 5,
        instruction: 'Add sugar, saffron milk, and cardamom powder. Cook for another 5 minutes until sugar dissolves completely and the pudding turns pale golden. Remove from heat and stir in rose water.',
        tip: 'Never add sugar before the rice is fully cooked, or the rice grains will remain hard.'
      },
      {
        stepNumber: 6,
        instruction: 'Pour hot phirni into traditional unglazed earthenware bowls (shikoras) or ramekins. Garnish with slivered pistachios, almonds, and extra saffron strands. Chill in the refrigerator for at least 3 hours before serving.',
        tip: 'Earthenware bowls absorb excess moisture from the pudding, giving it a dense, velvety set and subtle earthy aroma.'
      }
    ],
    equipment: ['Heavy-bottomed saucepan', 'Whisk', 'Spice grinder', 'Earthenware bowls (shikoras)'],
    substitutions: [
      'Sugar alternative: Stir in crushed date palm jaggery (nolen gur) or coconut sugar after taking the pot off the flame.'
    ],
    storage: 'Keep refrigerated covered with cling wrap for up to 4 days. Serve cold.',
    allergens: ['Dairy (Milk)', 'Tree Nuts (Pistachios, Almonds)'],
    seo: {
      metaTitle: 'Royal Saffron Phirni Recipe | TasteTrails',
      metaDescription: 'Slow-cooked coarse basmati rice pudding infused with pure Kashmiri saffron, cardamom, and rose water, chilled in traditional earthenware bowls.',
      mainKeyword: 'royal saffron phirni recipe',
      relatedKeywords: ['Kashmiri rice pudding', 'earthenware pot chilled mithai'],
      canonicalUrl: 'https://tastetrails.app/recipe/royal-saffron-phirni',
    }
  }
];
