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

const pragueDates = [
  '30 Dec 2024',
  '30 Dec 2024',
  '30 Dec 2024',
  '30 Dec 2024',
  '30 Dec 2024',
  '31 Dec 2024',
  '31 Dec 2024',
  '31 Dec 2024',
  '31 Dec 2024',
  '1 Jan 2025',
  '1 Jan 2025',
  '1 Jan 2025',
  '2 Jan 2025',
  '3 Jan 2025',
  '3 Jan 2025',
]

// false = the exact spot isn't confidently identified (generic/detail shot) — hide the location stamp, keep the date only
const pragueNamed = [
  true, // Praha hlavní nádraží
  false, // Church tower
  false, // Old town street at dusk
  false, // Illuminated angel, Christmas market
  true, // Astronomical Clock
  true, // St. Nicholas Church and rooftops
  true, // Prague Castle skyline
  true, // The hanging man
  false, // Vintage car at dusk
  false, // Relief sculpture detail
  true, // Lennon Wall
  true, // Dancing House
  false, // Stained glass windows
  false, // Sitting statue
  true, // Charles Bridge and castle at night
]

const praguePhotos = pragueLabels.map((label, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return {
    id: i + 1,
    label,
    date: pragueDates[i],
    namedPlace: pragueNamed[i],
    src: `${base}photos/prague/full/${idx}.jpg`,
    thumb: `${base}photos/prague/thumb/${idx}.jpg`,
  }
})

const parisLabels = [
  'Statue detail',
  'Seine riverside',
  'The Panthéon',
  'Dome ceiling detail',
  'Fresco detail',
  'Disneyland Paris entrance',
  'Sleeping Beauty Castle',
  'Pirate statue',
  'Topiary characters',
  'Stained glass window',
  'Glassblowing demonstration',
  'Statues among the flowers',
  'Buzz Lightyear',
  'Disneyland Hotel at night',
  'Sleeping Beauty Castle at night',
  'Arc de Triomphe',
  'Spiral staircase',
  'The Eiffel Tower',
]

const parisDates = [
  '3 May 2025',
  '3 May 2025',
  '3 May 2025',
  '3 May 2025',
  '3 May 2025',
  '4 May 2025',
  '4 May 2025',
  '4 May 2025',
  '4 May 2025',
  '4 May 2025',
  '4 May 2025',
  '4 May 2025',
  '4 May 2025',
  '4 May 2025',
  '4 May 2025',
  '5 May 2025',
  '5 May 2025',
  '5 May 2025',
]

// false = the exact spot isn't confidently identified (generic/detail shot) — hide the location stamp, keep the date only
const parisNamed = [
  false, // Statue detail
  true, // Seine riverside
  true, // The Panthéon
  false, // Dome ceiling detail
  false, // Fresco detail
  true, // Disneyland Paris entrance
  true, // Sleeping Beauty Castle
  false, // Pirate statue
  false, // Topiary characters
  false, // Stained glass window
  false, // Glassblowing demonstration
  false, // Statues among the flowers
  false, // Buzz Lightyear
  true, // Disneyland Hotel at night
  true, // Sleeping Beauty Castle at night
  true, // Arc de Triomphe
  false, // Spiral staircase
  true, // The Eiffel Tower
]

const parisPhotos = parisLabels.map((label, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return {
    id: i + 1,
    label,
    date: parisDates[i],
    namedPlace: parisNamed[i],
    src: `${base}photos/paris/full/${idx}.jpg`,
    thumb: `${base}photos/paris/thumb/${idx}.jpg`,
  }
})

const denmarkLabels = [
  'Nyhavn harbor',
  'Church dome across the water',
  'Boat on the canal',
  'Rosenborg Castle',
  'Christmas lights, reindeer',
  'Harbor at dusk',
  'Park path at sunset',
  'The Little Mermaid statue',
  'Equestrian statue detail',
  'Old town street',
  'Amalienborg Palace',
  'Tivoli Gardens at night',
  'Miniature city model',
]

const denmarkDates = [
  '28 Dec 2025',
  '28 Dec 2025',
  '28 Dec 2025',
  '28 Dec 2025',
  '28 Dec 2025',
  '29 Dec 2025',
  '29 Dec 2025',
  '29 Dec 2025',
  '29 Dec 2025',
  '29 Dec 2025',
  '29 Dec 2025',
  '29 Dec 2025',
  '31 Dec 2025',
]

// false = the exact spot isn't confidently identified (generic/detail shot) — hide the location stamp, keep the date only
const denmarkNamed = [
  true, // Nyhavn harbor
  false, // Church dome across the water
  false, // Boat on the canal
  true, // Rosenborg Castle
  false, // Christmas lights, reindeer
  false, // Harbor at dusk
  false, // Park path at sunset
  true, // The Little Mermaid statue
  false, // Equestrian statue detail
  false, // Old town street
  true, // Amalienborg Palace
  true, // Tivoli Gardens at night
  false, // Miniature city model
]

const denmarkPhotos = denmarkLabels.map((label, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return {
    id: i + 1,
    label,
    date: denmarkDates[i],
    namedPlace: denmarkNamed[i],
    src: `${base}photos/denmark/full/${idx}.jpg`,
    thumb: `${base}photos/denmark/thumb/${idx}.jpg`,
  }
})

const hungaryLabels = [
  'Clock tower',
  'Little Princess statue',
  'Yellow tram',
  'City street view',
  "St. Stephen's Basilica",
  'Hungarian Parliament staircase',
  'Hungarian Parliament assembly hall',
  'Hungarian Parliament Building',
  'Chain Bridge',
  'View through the bastion arch',
  "Fisherman's Bastion",
  'Matthias Church rooftop',
  'View over the Danube',
  'Parliament across the Danube',
  'Statue from behind',
  'Castle tower',
  "Heroes' Square",
  'Vajdahunyad Castle',
  'Basilica dome ceiling detail',
  'Basilica interior',
  'Buda Castle at night',
  'Darth Vader display',
  'Liberty Bridge',
]

const hungaryDates = [
  '5 Jul 2025',
  '5 Jul 2025',
  '5 Jul 2025',
  '5 Jul 2025',
  '6 Jul 2025',
  '6 Jul 2025',
  '6 Jul 2025',
  '6 Jul 2025',
  '6 Jul 2025',
  '6 Jul 2025',
  '6 Jul 2025',
  '6 Jul 2025',
  '6 Jul 2025',
  '6 Jul 2025',
  '6 Jul 2025',
  '7 Jul 2025',
  '7 Jul 2025',
  '7 Jul 2025',
  '7 Jul 2025',
  '7 Jul 2025',
  '7 Jul 2025',
  '8 Jul 2025',
  '8 Jul 2025',
]

// false = the exact spot isn't confidently identified (generic/detail shot) — hide the location stamp, keep the date only
const hungaryNamed = [
  false, // Clock tower
  true, // Little Princess statue
  false, // Yellow tram
  false, // City street view
  true, // St. Stephen's Basilica
  true, // Hungarian Parliament staircase
  true, // Hungarian Parliament assembly hall
  true, // Hungarian Parliament Building
  true, // Chain Bridge
  false, // View through the bastion arch
  true, // Fisherman's Bastion
  true, // Matthias Church rooftop
  true, // View over the Danube
  true, // Parliament across the Danube
  false, // Statue from behind
  false, // Castle tower
  true, // Heroes' Square
  true, // Vajdahunyad Castle
  false, // Basilica dome ceiling detail
  false, // Basilica interior
  true, // Buda Castle at night
  false, // Darth Vader display
  true, // Liberty Bridge
]

const hungaryPhotos = hungaryLabels.map((label, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return {
    id: i + 1,
    label,
    date: hungaryDates[i],
    namedPlace: hungaryNamed[i],
    src: `${base}photos/hungary/full/${idx}.jpg`,
    thumb: `${base}photos/hungary/thumb/${idx}.jpg`,
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
  {
    slug: 'paris',
    title: 'Paris',
    year: '2025',
    thumbnail: `${base}photos/paris/cover.jpg`,
    photos: parisPhotos,
  },
  {
    slug: 'denmark',
    title: 'Denmark',
    year: '2025',
    thumbnail: `${base}photos/denmark/cover.jpg`,
    photos: denmarkPhotos,
  },
  {
    slug: 'hungary',
    title: 'Hungary',
    year: '2025',
    thumbnail: `${base}photos/hungary/cover.jpg`,
    photos: hungaryPhotos,
  },
  { slug: 'bali', title: 'Bali', year: '2024', photoCount: 4 },
  { slug: 'yogyakarta', title: 'Yogyakarta', year: '2024', photoCount: 3 },
  { slug: 'bromo', title: 'Bromo', year: '2025', photoCount: 5 },
  { slug: 'labuan-bajo', title: 'Labuan Bajo', year: '2025', photoCount: 4 },
]
