import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Organic Carrots',
    category: 'Root Vegetables',
    description: 'Sweet and crunchy organic carrots grown in our pesticide-free farms. Perfect for salads, juicing, or cooking.',
    imageUrl: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg',
    isOrganic: true,
    isInSeason: true,
    nutritionFacts: ['Rich in beta-carotene', 'High in fiber', 'Good source of vitamin K']
  },
  {
    id: 2,
    name: 'Fresh Spinach',
    category: 'Leafy Greens',
    description: 'Nutrient-dense spinach leaves, harvested at peak freshness for maximum flavor and nutritional value.',
    imageUrl: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg',
    isOrganic: true,
    isInSeason: true,
    nutritionFacts: ['High in iron', 'Contains vitamin C', 'Rich in antioxidants']
  },
  {
    id: 3,
    name: 'Bell Peppers',
    category: 'Nightshades',
    description: 'Colorful and crisp bell peppers in red, yellow, and green varieties. Versatile for cooking or enjoying raw.',
    imageUrl: 'https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg',
    isOrganic: true,
    isInSeason: true,
    nutritionFacts: ['High in vitamin C', 'Good source of vitamin A', 'Low calorie']
  },
  {
    id: 4,
    name: 'Heirloom Tomatoes',
    category: 'Nightshades',
    description: 'Juicy, flavorful heirloom tomatoes in a variety of colors and sizes. Perfect for salads, sandwiches, or sauces.',
    imageUrl: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg',
    isOrganic: true,
    isInSeason: true,
    nutritionFacts: ['Rich in lycopene', 'Contains vitamin C', 'Good source of potassium']
  },
  {
    id: 5,
    name: 'Broccoli',
    category: 'Cruciferous',
    description: 'Fresh broccoli with tight, dark green florets. Nutrient-dense and versatile for various cooking methods.',
    imageUrl: 'https://images.pexels.com/photos/399629/pexels-photo-399629.jpeg',
    isOrganic: true,
    isInSeason: true,
    nutritionFacts: ['High in vitamin K', 'Contains vitamin C', 'Good source of folate']
  },
  {
    id: 6,
    name: 'Sweet Potatoes',
    category: 'Root Vegetables',
    description: 'Delicious sweet potatoes with vibrant orange flesh. Perfect for roasting, mashing, or making fries.',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.NpF4-3oEpS3dG828WiWERQHaE8?cb=iwp2&rs=1&pid=ImgDetMain',
    isOrganic: true,
    isInSeason: true,
    nutritionFacts: ['Rich in beta-carotene', 'High in fiber', 'Contains vitamin B6']
  }
];