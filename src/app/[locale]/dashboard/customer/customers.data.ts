export type Customer = {
  id: number
  name: string
  customerId: string
  location: string
  orders: number
  totalSpent: number
  phoneNumber: string
}

export const customers: Customer[] = [
  {
    id: 1,
    name: 'Marvin McKinney',
    customerId: '#256542',
    location: '6391 Elgin St. Celina, Delaware 10299',
    orders: 5,
    totalSpent: 50.75,
    phoneNumber: '(308) 555-0121',
  },
  {
    id: 2,
    name: 'Jenny Wilson',
    customerId: '#256542',
    location: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    orders: 1,
    totalSpent: 50.75,
    phoneNumber: '(201) 555-0124',
  },
  {
    id: 3,
    name: 'Devon Lane',
    customerId: '#256542',
    location: '4140 Parker Rd. Allentown, New Mexico 31134',
    orders: 5,
    totalSpent: 50.75,
    phoneNumber: '(702) 555-0122',
  },
  {
    id: 4,
    name: 'Theresa Webb',
    customerId: '#256542',
    location: '3517 W. Gray St. Utica, Pennsylvania 57867',
    orders: 2,
    totalSpent: 50.75,
    phoneNumber: '(704) 555-0127',
  },
  {
    id: 5,
    name: 'Jane Cooper',
    customerId: '#256542',
    location: '8502 Preston Rd. Inglewood, Maine 98380',
    orders: 3,
    totalSpent: 50.75,
    phoneNumber: '(319) 555-0115',
  },
  {
    id: 6,
    name: 'Ronald Richards',
    customerId: '#256542',
    location: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    orders: 2,
    totalSpent: 50.75,
    phoneNumber: '(239) 555-0108',
  },
  {
    id: 7,
    name: 'Bessie Cooper',
    customerId: '#256542',
    location: '4517 Washington Ave. Manchester, Kentucky 39495',
    orders: 1,
    totalSpent: 50.75,
    phoneNumber: '(808) 555-0111',
  },
  {
    id: 8,
    name: 'Jerome Bell',
    customerId: '#256542',
    location: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    orders: 1,
    totalSpent: 50.75,
    phoneNumber: '(209) 555-0104',
  },
  {
    id: 9,
    name: 'Courtney Henry',
    customerId: '#256542',
    location: '2715 Ash Dr. San Jose, South Dakota 83475',
    orders: 1,
    totalSpent: 50.75,
    phoneNumber: '(208) 555-0112',
  },
  {
    id: 10,
    name: 'Cody Fisher',
    customerId: '#256542',
    location: '2464 Royal Ln. Mesa, New Jersey 45463',
    orders: 3,
    totalSpent: 50.75,
    phoneNumber: '(229) 555-0109',
  },
]
