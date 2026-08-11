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
  'Amersfoort station',
  'Illuminated globe, Amersfoort station',
  'Tulip field',
  'Hyacinth rows',
  'Tulip close-up',
  'Eindhoven architecture',
  'Church spire',
  'Café facade',
  'Enschede sunset',
  'Blue hour, Enschede',
  'Black swan',
  'Keukenhof tulips',
  'Tulip rows',
  'Windmill and daffodils',
  'Pink tulip detail',
  'Meuse river panorama',
  'Cherry blossom tree',
  'Church tower, Maastricht',
  'Roermond town square at dusk',
  'Ferris wheel and Christmas tree',
  'Cube houses, Rotterdam',
  'Witte Huis',
  'Erasmus Bridge skyline',
  'The Depot',
  'Euromast',
  'De Passage arcade',
  'De Passage at night',
  'Canal and bridge, Utrecht',
  'Dom Tower',
  'Autumn canal',
  'Inntel Hotel, Zaandam',
  'Windmills across the water',
  'Twin windmills, Zaanse Schans',
  'Windmill against the sky',
  'Hot air balloon sculptures',
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
  { slug: 'bali', title: 'Bali', year: '2024', photoCount: 4 },
  { slug: 'yogyakarta', title: 'Yogyakarta', year: '2024', photoCount: 3 },
  { slug: 'bromo', title: 'Bromo', year: '2025', photoCount: 5 },
  { slug: 'labuan-bajo', title: 'Labuan Bajo', year: '2025', photoCount: 4 },
]
