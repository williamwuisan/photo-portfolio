const base = import.meta.env.BASE_URL

const xinjiangLabels = [
  'Painted canyon overlook',
  'River bend from the ridge',
  'Wild sheep on the ridge',
  'Prayer flags at the summit',
  'Prayer wheels',
  'Layered mountain valley',
  'Kanas Lake panorama',
  'Kanas Lake shoreline',
  'Mountain stream',
  'Yardang desert',
  'Riders at the Ghost City',
  'Rider silhouette',
  'Desert gateway',
  'Sayram Lake shoreline',
  'Horses on the grassland',
  'Sayram Lake overlook',
  'Warrior statues',
  'Horses grazing',
  'Yurt camp',
  'Sunset silhouette',
  'Illuminated gateway',
  'Night pavilion',
  'Modern landmark',
  'Temple gate',
  'Golden statue',
]

const xinjiangPhotos = xinjiangLabels.map((label, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return {
    id: i + 1,
    label,
    src: `${base}photos/xinjiang/full/${idx}.jpg`,
    thumb: `${base}photos/xinjiang/thumb/${idx}.jpg`,
  }
})

const netherlandsLabels = [
  'Cherry blossom park path',
  'Firethorn berries',
  'Cat at the door',
  'Underpass, black and white',
  'Tulip field',
  'Meuse river panorama',
  'Bell tower, Roermond',
  'Rotterdam train platform',
  'Historic boats on the canal',
  'Euromast',
  'Christmas market, The Hague',
  'Chinatown gate, The Hague',
  'Street organ',
  'Dog window art',
  'Autumn canal, Utrecht',
  'Shopfront and scooter',
  'Inntel Hotel, Zaandam',
  'Green houses by the water',
  'Flag house, Zaanse Schans',
  'Twin windmills, Zaanse Schans',
  'Windmill against the skyline',
  'Windmill in the green field',
  'Hanging flower pots',
  'Train tracks',
  'Red camellia',
  'Traditional house by the canal',
  'Cherry blossom park, Maastricht',
  'Cyclists, black and white',
  'Still life',
  'Electric cart',
  'On the wall',
  'Erasmus Bridge skyline',
  'Cube houses, Rotterdam',
  'Cheese shop display',
  'Friends in Rotterdam',
]

const netherlandsPhotos = netherlandsLabels.map((label, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return {
    id: i + 1,
    label,
    src: `${base}photos/netherlands/full/${idx}.jpg`,
    thumb: `${base}photos/netherlands/thumb/${idx}.jpg`,
  }
})

const pragueLabels = [
  'Praha hlavní nádraží',
  'Church tower',
  'Old town street at dusk',
  'Illuminated angel, Christmas market',
  'Astronomical Clock',
  'St. Nicholas Church and rooftops',
  'Prague Castle skyline',
  'The hanging man',
  'Vintage car at dusk',
  'Relief sculpture detail',
  'Lennon Wall',
  'Dancing House',
  'Stained glass windows',
  'Sitting statue',
  'Charles Bridge and castle at night',
]

const praguePhotos = pragueLabels.map((label, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return {
    id: i + 1,
    label,
    src: `${base}photos/prague/full/${idx}.jpg`,
    thumb: `${base}photos/prague/thumb/${idx}.jpg`,
  }
})

export const locations = [
  {
    slug: 'xinjiang',
    title: 'Xinjiang',
    year: '2025',
    thumbnail: `${base}photos/xinjiang/cover.jpg`,
    photos: xinjiangPhotos,
  },
  {
    slug: 'netherlands',
    title: 'Netherlands',
    year: '2025',
    thumbnail: `${base}photos/netherlands/cover.jpg`,
    photos: netherlandsPhotos,
  },
  {
    slug: 'prague',
    title: 'Prague',
    year: '2024',
    thumbnail: `${base}photos/prague/cover.jpg`,
    photos: praguePhotos,
  },
  { slug: 'bali', title: 'Bali', year: '2024', photoCount: 4 },
  { slug: 'yogyakarta', title: 'Yogyakarta', year: '2024', photoCount: 3 },
  { slug: 'bromo', title: 'Bromo', year: '2025', photoCount: 5 },
  { slug: 'labuan-bajo', title: 'Labuan Bajo', year: '2025', photoCount: 4 },
]
