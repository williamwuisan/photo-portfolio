const base = import.meta.env.BASE_URL

const chinaLabels = [
  'Painted canyon overlook',
  'River bend canyon',
  'Wild sheep on the ridge',
  'Prayer flags at the summit',
  'Layered mountain valley',
  'Mountain viewpoint dome',
  'Mountain river',
  'Street food skewers',
  'Lakeside portrait',
  'Kanas Lake panorama',
  'Kanas River rapids',
  'Yardang desert',
  'Ghost City camel caravan',
  'Yurt at the grassland',
  'Silk Road horseback performers',
  'Desert gateway monument',
  'Sayram Lake shoreline',
  'Sayram Lake overlook',
  'Warrior statues',
  'Ancient wall ruins',
  'Yurt camp',
  'Modern landmark building',
  'Night pavilion',
  'Temple gate',
  'Golden statue temple',
  'Golden statue with incense burner',
  'Golden statue and temple stairs',
]

const chinaDates = [
  '24 Aug 2025',
  '24 Aug 2025',
  '24 Aug 2025',
  '25 Aug 2025',
  '25 Aug 2025',
  '25 Aug 2025',
  '25 Aug 2025',
  '25 Aug 2025',
  '26 Aug 2025',
  '26 Aug 2025',
  '26 Aug 2025',
  '27 Aug 2025',
  '27 Aug 2025',
  '27 Aug 2025',
  '27 Aug 2025',
  '27 Aug 2025',
  '28 Aug 2025',
  '28 Aug 2025',
  '29 Aug 2025',
  '29 Aug 2025',
  '29 Aug 2025',
  '29 Aug 2025',
  '30 Aug 2025',
  '1 Sep 2025',
  '1 Sep 2025',
  '1 Sep 2025',
  '1 Sep 2025',
]

// false = the exact spot isn't confidently identified (generic/detail shot) — hide the location stamp, keep the date only
const chinaNamed = [
  false, // Painted canyon overlook
  false, // River bend canyon
  false, // Wild sheep on the ridge
  false, // Prayer flags at the summit
  false, // Layered mountain valley
  false, // Mountain viewpoint dome
  false, // Mountain river
  false, // Street food skewers
  false, // Lakeside portrait
  true, // Kanas Lake panorama
  true, // Kanas River rapids
  true, // Yardang desert
  true, // Ghost City camel caravan
  false, // Yurt at the grassland
  false, // Silk Road horseback performers
  false, // Desert gateway monument
  true, // Sayram Lake shoreline
  true, // Sayram Lake overlook
  false, // Warrior statues
  false, // Ancient wall ruins
  false, // Yurt camp
  false, // Modern landmark building
  false, // Night pavilion
  false, // Temple gate
  false, // Golden statue temple
  false, // Golden statue with incense burner
  false, // Golden statue and temple stairs
]

const chinaPhotos = chinaLabels.map((label, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return {
    id: i + 1,
    label,
    date: chinaDates[i],
    namedPlace: chinaNamed[i],
    src: `${base}photos/china/full/${idx}.jpg`,
    thumb: `${base}photos/china/thumb/${idx}.jpg`,
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

const netherlandsDates = [
  '9 Apr 2026',
  '23 Mar 2026',
  '23 Mar 2026',
  '19 Mar 2026',
  '11 Apr 2026',
  '22 Mar 2025',
  '22 Dec 2024',
  '5 Jan 2024',
  '5 Jan 2024',
  '15 Mar 2025',
  '21 Dec 2024',
  '9 Nov 2024',
  '9 Nov 2024',
  '16 Nov 2024',
  '16 Nov 2024',
  '16 Nov 2024',
  '5 Apr 2025',
  '5 Apr 2025',
  '5 Apr 2025',
  '5 Apr 2025',
  '5 Apr 2025',
  '5 Apr 2025',
  '30 Mar 2026',
  '30 Mar 2026',
  '31 Mar 2026',
  '30 Mar 2026',
  '22 Mar 2025',
  '19 Mar 2026',
  '22 Dec 2024',
  '5 Jan 2024',
  '5 Jan 2024',
  '5 Jan 2024',
  '5 Jan 2024',
  '5 Jan 2024',
  '16 May 2026',
]

// false = the exact spot isn't confidently identified (generic/detail shot) — hide the location stamp, keep the date only
const netherlandsNamed = [
  false, // Cherry blossom park path
  false, // Firethorn berries
  false, // Cat at the door
  false, // Underpass, black and white
  false, // Tulip field
  false, // Meuse river panorama
  true, // Bell tower, Roermond
  false, // Rotterdam train platform
  false, // Historic boats on the canal
  true, // Euromast
  true, // Christmas market, The Hague
  true, // Chinatown gate, The Hague
  false, // Street organ
  false, // Dog window art
  false, // Autumn canal, Utrecht
  false, // Shopfront and scooter
  true, // Inntel Hotel, Zaandam
  false, // Green houses by the water
  true, // Flag house, Zaanse Schans
  true, // Twin windmills, Zaanse Schans
  false, // Windmill against the skyline
  false, // Windmill in the green field
  false, // Hanging flower pots
  false, // Train tracks
  false, // Red camellia
  false, // Traditional house by the canal
  false, // Cherry blossom park, Maastricht
  false, // Cyclists, black and white
  false, // Still life
  false, // Electric cart
  false, // On the wall
  true, // Erasmus Bridge skyline
  true, // Cube houses, Rotterdam
  false, // Cheese shop display
  false, // Friends in Rotterdam
]

const netherlandsPhotos = netherlandsLabels.map((label, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return {
    id: i + 1,
    label,
    date: netherlandsDates[i],
    namedPlace: netherlandsNamed[i],
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

const germanyLabels = [
  'Old town gate passage',
  'Brick apartment street',
  'Street scene with a dog',
  'Parked scooters',
  'Red-roofed building',
  'Building steps',
  'Turret building',
  'Spiral staircase',
  'The Santa Barbara Anna, Rostock harbour',
  'Marina',
  'Dog resting on a boat',
  'Harbor mural',
  'Visit Rostock sign',
  'Dockyard cranes',
  'Fishing at the harbor',
  'Window reflection',
  'Viking ship sculpture',
  'Vintage harbor photograph',
  'Rostock tram and historic building',
  'Warnemünde Lighthouse',
  'Old cannon on the fortress wall',
  'Warnemünde Lighthouse pier',
  'Street musician',
  'Lighthouse among the trees',
  "Warnemünde fishermen's houses",
  'Am Strom street sign',
  'Alter Strom canal, Warnemünde',
  'Fishing boat detail',
  'Pension sign',
  "Fisherman's cottage",
  'Path to the beach',
  'Strandkorb beach chairs',
  'Alley with lighthouse view',
  'Warnemünde Lighthouse and promenade',
  'Dinner on the floor',
  'Love locks, Hohenzollern Bridge',
  'Cologne Cathedral and Christmas market',
  'Christmas market stall',
  'Nutcracker figurines',
  'Cologne Cathedral and Hohenzollern Bridge',
  'Cologne Cathedral at night',
  'Severin Bridge at sunset',
]

const germanyDates = [
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '20 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Apr 2026',
  '21 Nov 2024',
  '21 Nov 2024',
  '21 Nov 2024',
  '21 Nov 2024',
  '21 Nov 2024',
  '21 Nov 2024',
  '22 Nov 2024',
]

// false = the exact spot isn't confidently identified (generic/detail shot) — hide the location stamp, keep the date only
const germanyNamed = [
  false, // Old town gate passage
  false, // Brick apartment street
  false, // Street scene with a dog
  false, // Parked scooters
  false, // Red-roofed building
  false, // Building steps
  false, // Turret building
  false, // Spiral staircase
  true, // The Santa Barbara Anna, Rostock harbour
  false, // Marina
  false, // Dog resting on a boat
  false, // Harbor mural
  true, // Visit Rostock sign
  false, // Dockyard cranes
  false, // Fishing at the harbor
  false, // Window reflection
  false, // Viking ship sculpture
  false, // Vintage harbor photograph
  false, // Rostock tram and historic building
  true, // Warnemünde Lighthouse
  false, // Old cannon on the fortress wall
  true, // Warnemünde Lighthouse pier
  false, // Street musician
  false, // Lighthouse among the trees
  true, // Warnemünde fishermen's houses
  true, // Am Strom street sign
  true, // Alter Strom canal, Warnemünde
  false, // Fishing boat detail
  false, // Pension sign
  false, // Fisherman's cottage
  false, // Path to the beach
  false, // Strandkorb beach chairs
  false, // Alley with lighthouse view
  true, // Warnemünde Lighthouse and promenade
  false, // Dinner on the floor
  true, // Love locks, Hohenzollern Bridge
  true, // Cologne Cathedral and Christmas market
  false, // Christmas market stall
  false, // Nutcracker figurines
  true, // Cologne Cathedral and Hohenzollern Bridge
  true, // Cologne Cathedral at night
  true, // Severin Bridge at sunset
]

const germanyPhotos = germanyLabels.map((label, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return {
    id: i + 1,
    label,
    date: germanyDates[i],
    namedPlace: germanyNamed[i],
    src: `${base}photos/germany/full/${idx}.jpg`,
    thumb: `${base}photos/germany/thumb/${idx}.jpg`,
  }
})

const indonesiaLabels = [
  'Ulun Danu Beratan Temple',
  'Sunset over the beach',
  'Fishing boats at sunset',
  'Kawah Ijen crater',
  'Friends at the crater rim',
  'Kawah Ijen at sunrise',
  'Sulfur vents detail',
  'Kawah Ijen panorama',
  'Corgi at home',
  'Corgi portrait',
]

const indonesiaDates = [
  '5 Sep 2025',
  '6 Sep 2025',
  '6 Sep 2025',
  '1 Jun 2026',
  '1 Jun 2026',
  '1 Jun 2026',
  '1 Jun 2026',
  '1 Jun 2026',
  '18 May 2026',
  '18 May 2026',
]

// false = the exact spot isn't confidently identified (generic/detail shot) — hide the location stamp, keep the date only
const indonesiaNamed = [
  true, // Ulun Danu Beratan Temple
  false, // Sunset over the beach
  false, // Fishing boats at sunset
  true, // Kawah Ijen crater
  false, // Friends at the crater rim
  true, // Kawah Ijen at sunrise
  false, // Sulfur vents detail
  true, // Kawah Ijen panorama
  false, // Corgi at home
  false, // Corgi portrait
]

const indonesiaPhotos = indonesiaLabels.map((label, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return {
    id: i + 1,
    label,
    date: indonesiaDates[i],
    namedPlace: indonesiaNamed[i],
    src: `${base}photos/indonesia/full/${idx}.jpg`,
    thumb: `${base}photos/indonesia/thumb/${idx}.jpg`,
  }
})

export const locations = [
  {
    slug: 'china',
    title: 'China',
    year: '2025',
    thumbnail: `${base}photos/china/cover.jpg`,
    photos: chinaPhotos,
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
  {
    slug: 'germany',
    title: 'Germany',
    year: '2024–2026',
    thumbnail: `${base}photos/germany/cover.jpg`,
    photos: germanyPhotos,
  },
  {
    slug: 'indonesia',
    title: 'Indonesia',
    year: '2025–2026',
    thumbnail: `${base}photos/indonesia/cover.jpg`,
    photos: indonesiaPhotos,
  },
  { slug: 'bali', title: 'Bali', year: '2024', photoCount: 4 },
  { slug: 'yogyakarta', title: 'Yogyakarta', year: '2024', photoCount: 3 },
]
