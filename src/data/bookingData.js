export const bookingSteps = ['Trail', 'Schedule', 'Package', 'Guide', 'Review']

export const trails = [
  {
    id: 'pulag',
    name: 'Alto Peak',
    location: 'Kabayan, Benguet',
    duration: '2 days · 1 night',
    difficulty: 'Moderate',
    price: 2850,
    description: 'Wake above the clouds on a guided sunrise summit trek.',
  },
  {
    id: 'ulap',
    name: 'Sulfatara',
    location: 'Itogon, Benguet',
    duration: 'Day hike · 6–7 hours',
    difficulty: 'Beginner friendly',
    price: 1450,
    description: 'A scenic ridge walk with open views and gentle rolling terrain.',
  },
  {
    id: 'pinatubo',
    name: 'Mount Janagdan',
    location: 'Botolan, Zambales',
    duration: 'Day hike · 7–8 hours',
    difficulty: 'Moderate',
    price: 2100,
    description: 'Travel through dramatic lahar landscapes to a remarkable crater lake.',
  },
]

export const schedules = [
  { id: 'aug-10', date: 'August 10, 2026', day: 'Saturday', availability: 8 },
  { id: 'aug-17', date: 'August 17, 2026', day: 'Saturday', availability: 5 },
  { id: 'aug-24', date: 'August 24, 2026', day: 'Saturday', availability: 12 },
]

export const packages = [
  {
    id: 'essential',
    name: 'Essential trek',
    price: 0,
    description: 'Permits, guide, registration, and basic first-aid support.',
  },
  {
    id: 'comfort',
    name: 'Comfort trek',
    price: 750,
    description: 'Everything in Essential, plus round-trip transport and meals.',
  },
  {
    id: 'premium',
    name: 'Premium trek',
    price: 1450,
    description: 'Everything in Comfort, plus private transport and photo coverage.',
  },
]

export const guides = [
  {
    id: 'elena',
    name: 'Elena Garcia',
    experience: '8 years guiding',
    specialty: 'Highland trails',
    rating: '4.9',
    availability: 'Available',
  },
  {
    id: 'marco',
    name: 'Marco Villanueva',
    experience: '6 years guiding',
    specialty: 'First-aid certified',
    rating: '4.8',
    availability: 'Available',
  },
  {
    id: 'lia',
    name: 'Lia Mendoza',
    experience: '5 years guiding',
    specialty: 'Nature interpretation',
    rating: '4.9',
    availability: 'Available',
  },
]
