export interface PropertyImage {
  id: string;
  url: string;
  alt: string;
}

export interface PropertyContact {
  name: string;
  phone: string;
}

export interface PropertyDetails {
  type: string;
  gender: string;
  roomTypes: string[];
  features: string[];
}

export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: string;
  distance: string;
  imageUrl: string;
  images: PropertyImage[];
  amenities: string[];
  contact: PropertyContact;
  details: PropertyDetails;
}

export const properties: Property[] = [
  {
    id: 'acc-1',
    title: 'KK Residency Boys Hostel',
    description: 'Located near UPES Bidholi campus, KK Residency is known for its exceptional food quality, which is a top priority for the owner. With a focus on hygiene, nutrition, and home-style meals, KK Residency ensures that students feel cared for and well-fed throughout their stay.',
    location: 'Bidholi, Dehradun',
    price: '1,70,000/year',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748007704/4_bepkmi.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748007704/4_bepkmi.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748007704/2_ilqqxq.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748007761/6_nbpie2.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748007760/8_eazewj.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748007750/3_rksks7.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748007704/7_lppio8.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-7',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748007704/1_jrp2ui.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1748007809/vid-kk_buwuug.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: [
      'Free Transport to UPES',
      'Free Laundry Facility',
      'CCTV Coverage',
      '24/7 Security',
      '24/7 Water Supply',
      'Power Backup',
      'WiFi',
      'Lift',
      'Spacious Rooms',
      'Hygienic Mess'
    ],
    contact: {
      name: 'Mr.Ravinder Sharma',
      phone: '7906853634',
    },
    details: {
      type: 'Hostel-Boys',
      gender: 'Boys',
      roomTypes: ['Double'],
      features: [
        'Attached Washroom with all rooms',
        'Study Table in each room',
        'Almirah in each room',
        'Balcony in each room',
        'Excellent and healthy food served in spacious hygienic mess'
      ]
    }
  },
  {
    id: 'acc-2',
    title: 'Stag House Boys Hostel',
    description: 'Located near the UPES Bidholi campus, Stag House Boys Hostel places strong emphasis on student health and nutrition. With a doctor on call, the hostel ensures prompt medical assistance when needed. Additional key facilities include a gym and gaming zone, convenient pick-and-drop service, and laundry access—making it a safe, comfortable, and student-friendly living space.',
    location: 'Bidholi, Dehradun',
    price: '1,65,000/year (starting)',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748008726/3_en2b6h.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748008726/3_en2b6h.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748008726/2_uhjwtb.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748008725/7_minofv.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748008729/5_ihz99u.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748008725/6_jq86n3.jpg',
        alt: 'Hostel room'
      },
      
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748008725/8_clomuj.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-7',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748014492/9_e2msas.jpg',
        alt: 'Hostel room'
      },
    ],
    amenities: [
      'Free Wi-Fi',
      '24×7 Power Backup',
      'CCTV Security',
      'Gym and Gaming Zone',
      'Pick and Drop Service',
      '24 Hours Security',
      'Doctor on Call',
      'Hot and Cold Water',
      'Clean and Hygienic Kitchen',
      'Washing Machine and Laundry',
      'Pool Table',
    ],
    contact: {
      name: 'Mr. Manmohan Singh',
      phone: '7906853634',
    },
    details: {
      type: 'Hostel-Boys',
      gender: 'Boys',
      roomTypes: ['Single','Double','Triple'],
      features: [
        'Well Furnished Rooms',
        'Delicious and Hygienic Food',
        'Attached Washroom with all rooms',
        'Study Table in each room',
        'Almirah in each room',
        'Balcony in each room'
      ]
    }
  },
  {
    id: 'acc-3',
    title: 'Agrasen Mansion Boys Hostel',
    description: 'Agrasen Mansion offers a distinctive living experience just 600 meters from UPES, ideal for students seeking both convenience and a supportive environment. The hostel features well-ventilated double-sharing rooms with personal study areas, ample storage, and options for balconies or air conditioning. What truly sets Agrasen Mansion apart is its vibrant community culture—residents regularly celebrate festivals like Diwali and Janmashtami, fostering a warm, inclusive atmosphere. With modern infrastructure and a focus on student well-being, it’s more than just a place to stay—it’s a home away from home.',
    location: 'Bidholi, Dehradun',
    price: '2,00,000/year (starting)',
    distance: '0.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748700788/Agrasen_Mansion_Boys_Hostel_Pic_2_utinhy.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748700788/Agrasen_Mansion_Boys_Hostel_Pic_2_utinhy.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748700793/Agrasen_Mansion_Boys_Hostel_Pic_6_m4axmb.png',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748700791/Agrasen_Mansion_Boys_Hostel_Pic_21_zfkzzk.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748700792/Agrasen_Mansion_Boys_Hostel_Pic_5_lp1dyo.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748700791/Agrasen_Mansion_Boys_Hostel_Pic_3_cich1r.jpg',
        alt: 'Hostel room'
      },
      
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748700791/Agrasen_Mansion_Boys_Hostel_Pic_19_o0x3sc.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-7',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748700788/Agrasen_Mansion_Boys_Hostel_Pic_12_ihzhr0.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1748701656/Hostel_Promo_Video_avzrpi.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: [
      'High-Speed Unlimited WiFi',
      'Unlimited Laundry',
      'Frequent Transportation',
      'Fully Equipped GYM',
      'Table Tennis',
      '24×7 Power Backup',
      'Additional Geysers on Each Floor',
      'R.O Water Supply on Each Floor',
      '24×7 Security Guard',
      'Additional 3 Washing Machines',
      'Dressing Area on Each Floor',
      'Daily Sitting Area on Each Floor',
      'Bi-Weekly Washerman Visit',
      'High-Speed Elevator',
      '24×7 Doctor on Call',
      'Spacious Dining Room',
      '24×7 Warden for Supervision',
      'Hot Plate on Each Floor',
      'Ample Parking Space',
      'Daily Sanitisation of the Premises',
      'Regular Festival Celebration & Events'
    ],
    contact: {
      name: 'Mr. Agrawal',
      phone: '7906853634',
    },
    details: {
      type: 'Hostel-Boys',
      gender: 'Boys',
      roomTypes: ['Double','Triple'],
      features: [
        'Twin Sharing Rooms',
        'Proper Air-ventilated Spacious Rooms',
        'Bed with Box, Pillow & Comfortable Blanket',
        'Cosy Mattress, Bedsheet & Pillow Cover',
        'Personal Study Table and Chair',
        'Personal Spacious Almirah',
        '24×7 Hot Water',
        'Private Balcony',
        'Attached Toilet & Bath',
        'Four Times Meal (Breakfast, Lunch, Evening Tea with Snacks, Dinner)',
        'Healthy and Hygienic Food'
      ]
    }
  },
  {
    id: 'acc-4',
    title: 'Aashirwad Girls Hostel',
    description: "Aashirwad Girls Hostel stands out for its strong focus on safety, comfort, and holistic well-being. With 24x7 security, female staff, and CCTV surveillance, residents feel secure and at ease.The hostel offers spacious rooms with balconies, along with modern essentials like high-speed Wi-Fi, RO water on every floor, and inverter backup. What makes it truly unique is its blend of comfort and community—featuring a gym, table tennis and badminton rooms, and even a visiting beautician on request.Free transport to nearby academic hubs and special discounts for defense and paramilitary families further reflect the hostel’s thoughtful approach. With a caring atmosphere and a well-maintained environment, Aashirwad Girls Hostel truly feels like a home away from home.",
    location: 'Upper Kandoli, Dehradun',
    price: '1,95,000/year (starting)',
    distance: '1.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748703198/5_oqgd5c.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748703198/5_oqgd5c.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748703197/4_uqgbc1.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748703199/3_hzka3g.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748703199/1_mqu5uf.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748703199/6_yp5dkc.jpg',
        alt: 'Hostel room'
      },
      
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748703199/2_puxskz.jpg',
        alt: 'Hostel room'
      },
    ],
    amenities: [
      '24×7 Security Guards',
      'CCTV Surveillance',
      'Female Staff',
      'RO Water Plant on All Floors',
      'High-Speed WiFi in All Rooms',
      'Free Transport to Kandoli & Bidholi',
      'Free Laundry Service',
      'Beautician Services (on payment)',
      'Fully Equipped Gymnasium',
      'Badminton Court',
      'Table Tennis Room',
      'First Aid Facility',
      '24×7 Nurse on Duty',
      'Spacious Rooms with Balconies',
      'Special Discount for Defense & Paramilitary Forces'
    ],
    contact: {
      name: 'Mr. VS Rawat',
      phone: '7906853634',
    },
    details: {
      type: 'Hostel-Girls',
      gender: 'Girls',
      roomTypes: ['Double','Triple'],
      features: [
        'Spacious Rooms with Balconies',
        '24×7 Security with CCTV Surveillance',
        'Female Staff for Supervision',
        'RO Water Plant on All Floors',
        'High-Speed WiFi in All Rooms',
        'Free Transport to Kandoli & Bidholi',
        'Free Laundry Service',
        'Beautician Services Available',
        'Fully Equipped Gymnasium',
        'Badminton Court',
        'Table Tennis Room',
        'First Aid Facility with 24×7 Nurse',
        'Special Discount for Defense & Paramilitary Forces'
      ]
    }
  },
  {
    id: 'acc-5',  
    title: 'People Tree Boys Hostel',
    description: "People Tree Hostel is a professionally managed boys' hostel offering a secure and structured environment tailored for students. Established by Brigadier V. Nautiyal (Retd), it features modern double occupancy rooms with amenities such as Wi-Fi, power backup, and laundry services. The hostel provides hygienic vegetarian and non-vegetarian meals, with food charges included in the rent. To support a balanced lifestyle, it includes sports facilities like a football ground, basketball court, cricket nets, and badminton courts—promoting both academic focus and recreation.",
    location: 'Upper Kandoli, Dehradun',
    price: '1,50,000/year (starting)',
    distance: '1.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748848592/6_cximth.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748848592/6_cximth.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748848592/7_ndectg.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748848592/4_ubuatk.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748848597/9_zgmgjo.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748848594/1_wjmmtb.jpg',
        alt: 'Hostel room'
      },
      
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748848593/3_i3q5wj.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-7',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1748848592/8_y8ri52.jpg',
        alt: 'Hostel room'
      },
    ],
    amenities: [
      '24×7 Secured Campus with Gated Security',
      'CCTV Coverage & Access Control',
      'Complete Boarding & Lodging',
      'Beds with Storage Boxes & Mattresses',
      'Backup Generator & Servo Stabilizer',
      'Inverters on Each Floor',
      'RO Water Supply & Water Coolers',
      'Solar Hot Water Facility',
      'Laundry & Ironing Services',
      'High-Speed Fiber Optics Internet',
      'Transport Facilities (Buses & Van)',
      'Full-Fledged Modern Kitchen Mess',
      'Recreational Room',
      'Sports Complex (Cricket, Football, Basketball, Badminton)',
      'Indoor Games (Table Tennis, Carrom)',
      'Fully Equipped Gymnasium & CrossFit',
      'Guest Room for Parents',
      'Tie-up with Reputed Hospitals'
    ],
    contact: {
      name: 'Brig.V.Nautiyal',
      phone: '7906853634',
    },
    details: {
      type: 'Hostel-Boys',
      gender: 'Boys',
      roomTypes: ['Double','Triple'],
      features: [
        'Spacious Rooms with Study Tables & Chairs',
        'Full-Size Almirahs in Each Room',
        'Beds with Storage Boxes & Mattresses',
        'Attached Washrooms',
        'Balcony Access',
        'Individual Power Sockets',
        'Modern Kitchen with Healthy & Balanced Diet',
        'Sports Facilities (Cricket, Football, Basketball, Badminton)',
        'Indoor Games (Table Tennis, Carrom)',
        'Medical Tie-ups with Reputed Hospitals'
      ]
    }
  },
  {
    id: 'acc-6',
    title: 'Property 2',
    description: 'Modern, fully furnished apartment perfect for students. Located close to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Pondha, Dehradun',
    price: '35,000',
    distance: '2 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612381/6_scgvdu.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612381/6_scgvdu.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612383/3_ddirq2.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612380/5_wjqnwn.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612381/1_d1l9lj.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612383/4_celey0.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612383/2_vgpaww.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739612383/vid-11_boqdoo.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','TV','AC','WiFi','Cleaning Service','Lift','Gas Stove','Parking','Fridge'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 AC, 1 Large Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom per room(with Geyser)',
        'Common Area - Drawing & Sofa Set',
        'Fully Equipped Kitchen + RO Purifier',
      ]
    }
  },
  {
    id: 'acc-7',
    title: 'Property 3',
    description: 'Modern, fully furnished PG perfect for students. Located in between Bidholi & Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Upper Kandoli, Dehradun',
    price: '15,000',
    distance: '2 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612629/4_l6mq15.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612629/4_l6mq15.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612627/3_di6hsd.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612630/5_zhei3p.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612624/1_ztnnng.jpg',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi', 'Power Backup', 'CCTV Security',  'Parking','Food included'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'PG-Single Sharing',
      gender: 'Male',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair',
        '1 Attached Washroom',
        'Transport Available',
      ]
    }
  },
  {
    id: 'acc-8',
    title: 'Property 5',
    description: 'Modern, fully furnished apartment perfect for students. Located next to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Bidholi, Dehradun',
    price: '45,000',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612595/3_pa01jf.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612595/3_pa01jf.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612596/4_rjxo6v.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612591/5_p0tzh4.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612594/2_u7qtmq.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612593/1_fgp3rw.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739612599/vid-14_lyc50j.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', 'AC','Washing Machine','24/7 Water','TV','Fridge', 'Geyser', 'Cleaning Service', 'Kitchen'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-ed',
      roomTypes: [''],
      features: [
          'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf', 
        '1 Attached Washroom(with Geyser)',
        'Common Area - Drawing & Sofa Set',
        'Fully Equipped Kitchen + RO Purifier', 
             ]
    }
  },
  {
    id: 'acc-9',
    title: 'Property 7',
    description: 'Modern, fully furnished apartment perfect for students. Located close to KandoliCampus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Pondha, Dehradun',
    price: '35,000',
    distance: '3 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677961/3_qvdhok.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677961/3_qvdhok.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677967/2_boye80.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677963/4_lbpedy.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677959/6_dtowe4.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677964/5_swlaof.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677965/1_w1nmuw.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-7',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677960/7_ygbvi7.jpg',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi', 'AC', 'Cleaning Service','Washing Machine','TV'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah',
        '1 Attached Washroom(with Geyser)',
        'Fully Equipped Kitchen + RO Purifier',
        'Drawing & Sofa Set',
      ]
    }
  },
  {
    id: 'acc-10',
      title: 'Property 8',
      description: 'Modern, fully furnished Apartment perfect for students. Located in between Bidholi & Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
      location: 'Kandoli, Dehradun',
    price: '50,000',
    distance: '1.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612699/2_m6p6bj.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612699/2_m6p6bj.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612696/3_nufg3j.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612697/1_jwtuhz.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612693/4_blnvdt.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612694/5_iewd99.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739612693/vid-20_ubratm.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi', 'Cleaning Service', 'TV','Fridge','AC','Geyser'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 3BHK',
      gender: 'Co-ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom(with Geyser) per room',
        'Fully Equipped Kitchen + RO Purifier',
        'Drawing & Sofa Set',
      ]
    }
  },
  {
    id: 'acc-11',
      title: 'Property 9',
    description: 'Modern, fully furnished apartment perfect for students. Located close to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Kandoli, Dehradun',
    price: '14,000',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739712215/1_hkjfay_zm4hvk.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739712215/1_hkjfay_zm4hvk.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677586/3_dhiqhu.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677586/2_skhgz1.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739677587/vid-27_nbgbxf.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi', 'Cleaning Service','Washing Machine','Geyser'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 1BHK',
      gender: 'Co-ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Chair',
        '1 Attached Washroom(with Geyser)',
        'Common Washing Machine',
      ]
    }
  },
  {
    id: 'acc-12',
    title: 'Property 14',
    description: 'Modern, fully furnished apartment perfect for students. Located next to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Bidholi, Dehradun',
    price: '15,000(per room)',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469469/3_q5p6yt.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469469/3_q5p6yt.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469473/2_hy4hsz.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469470/4_yxi6y6.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469471/5_fyfm3z.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469468/7_vyraj2.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469446/6_fnyl2f.jpg',
        alt: 'Hostel room'
      },
    ],
    amenities: ['Furnished','Wifi','24/7 Water', 'Cleaning Service','Laundry Service','Electricity included'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 4BHK/3BHK/Independent Room',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 King Size Bed + 1 Almirah',
        '1 Study Table + 1 Chair',
        '1 Attached Washroom',
      ]
    }
  },
  {
    id: 'acc-13',
    title: 'Property 15',
    description: 'Modern, fully furnished apartment perfect for students. Located next to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Bidholi, Dehradun',
    price: '25,000',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612581/5_w9bghm.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612581/5_w9bghm.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612580/4_u2rgng.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612579/3_xt0vop.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612576/1_y7duz3.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612575/6_vq0pkf.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612577/2_xbycdy.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739612579/vid-13_ozepcp.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi', 'Power Backup', 'Cleaning Service', 'CCTV Security',  'Parking','Electricity'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom per room(with Geyser)',
        'Common Area - Drawing & Sofa Set',
        'Fully Equipped Kitchen + RO Purifier', 
        '2 Common Washing Machines',
        'Terrace -  Garden View/Sitting Area',
           ]
    }
  },
  {
    id: 'acc-17',
    title: 'Property 17',
    description: 'Modern, fully furnished apartment perfect for students. Located next to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Kandoli, Dehradun',
    price: '30,000',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739710032/2_emv4j6.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739710032/2_emv4j6.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739710032/3_jw8cdg.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739710031/1_nbyvxc.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739710033/4_jvwoqj.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739710034/vid_91_kczg7s.mp4',
        alt: 'Hostel exterior'
      },
      {
        id: 'vid-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739710032/vid_92_ztggqe.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi', 'TV', 'Fridge','Cleaning Service','Electricity'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 King Size Bed, 2 Almirahs, 2 Study Tables, 2 Chairs',
        '1 Attached Washroom(With Geyser)',
        'Common Area - Drawing & Sofa Set',
        'Kitchen + RO Purifier',
        'Fridge',
      ]
    }
  },
  {
    id: 'acc-18',
    title: 'Property 18',
    description: 'Modern, fully furnished apartment perfect for students. Located close to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Doonga, Dehradun',
    price: '25,000',
    distance: '1.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469493/5_hjoqls.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469493/5_hjoqls.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469495/4_esgw76.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469496/1_vqh4xl.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469495/2_w9wdvd.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469494/3_ircbxi.jpg',
        alt: 'Hostel common area'
      },
    ],
    amenities: ['Furnished','Wifi','24/7 Water', 'Cleaning Service','Electricity included'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 King Size Bed, 1 Almirah, 1 Study Tables, 1 Chairs, 1 Attached Washroom',
        'Kitchen + RO Purifier',
        'Fridge + Geysers',
        'Balcony per room',
      ]
    }
  }, 
  {
    id: 'acc-19',
    title: 'Property 19',
    description: 'Modern, fully furnished apartment perfect for students. Located close to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Doonga, Dehradun',
    price: '35,000',
    distance: '1.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469495/4_esgw76.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469495/4_esgw76.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469493/5_hjoqls.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469496/1_vqh4xl.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469495/2_w9wdvd.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469494/3_ircbxi.jpg',
        alt: 'Hostel common area'
      },
    ],
    amenities: ['Furnished','Wifi','24/7 Water', 'Cleaning Service','Electricity included'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 3BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 King Size Bed, 1 Almirah, 1 Study Tables, 1 Chairs, 1 Attached Washroom',
        'Kitchen + RO Purifier',
        'Fridge + Geysers',
        'Balcony per room',
      ]
    }
  },
  {
    id: 'acc-20',
    title: 'Property 20',
    description: 'Modern, fully furnished apartment perfect for students. Located close to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Doonga, Dehradun',
    price: '45,000',
    distance: '2.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612645/2_z7oten.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612645/2_z7oten.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612653/8_rq6uuo.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612652/7_tfvpfu.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612646/3_cojzqq.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612647/4_mgxfqn.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612649/5_dep19c.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-7',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612643/1_m9dzk2.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-8',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612650/6_vcpufi.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739612644/vid-16_tm8xy6.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished','WiFi', 'Cleaning Service','TV','Fridge'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 3BHK',
      gender: 'Co-ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom per room',
        'Dining Table Set',
        'Drawing & Sofa Set',
        'Fully Equipped Kitchen + RO Purifier',
      ]
    }
  },
  {
    id: 'acc-22',
    title: 'Property 22',
    description: 'Modern, fully furnished apartment perfect for students. Located next to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Bidholi, Dehradun',
    price: '40,000',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612580/4_u2rgng.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612580/4_u2rgng.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612579/3_xt0vop.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612581/5_w9bghm.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612576/1_y7duz3.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612575/6_vq0pkf.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612577/2_xbycdy.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1742632319/vid-22_pg0tso.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi', 'Power Backup', 'Cleaning Service', 'CCTV Security',  'Parking','Electricity'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 3BHK',
      gender: 'Co-ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom per room(with Geyser)',
        'Common Area - Drawing & Sofa Set',
        'Fully Equipped Kitchen + RO Purifier', 
        '2 Common Washing Machines',
        'Terrace -  Garden View/Sitting Area',
           ]
    }
  },
  {
    id: 'acc-26',
      title: 'Property 26',
      description: 'Modern, fully furnished Apartment perfect for students. Located in between Bidholi & Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
      location: 'Kandoli, Dehradun',
    price: '28,000',
    distance: '1.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739630353/2_s5ljhn.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739630353/2_s5ljhn.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739630355/3_bmti5x.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739630354/1_fs9aft.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739630353/4_mxqjlk.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739613112/vid-21_ngikcp.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi', 'Cleaning Service','Fridge','Geyser'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom(with Geyser) per room',
        'Fully Equipped Kitchen + RO Purifier',
        'Drawing & Sofa Set',
      ]
    }
  },
  {
    id: 'acc-27',
      title: 'Property 27',
    description: 'Modern, fully furnished apartment perfect for students. Located next to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Kandoli, Dehradun',
    price: '22,500',
    distance: '1.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612736/4_rpk80v.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612736/4_rpk80v.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612738/5_wcz8lu.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612734/3_aaonzl.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612739/1_rmojfx.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612741/2_qrwp0g.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612733/6_zhgb0y.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739612732/vid-23_yhru9g.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi', 'Cleaning Service','Laundry Service','Kitchen','Mini Fridge'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Chair',
        '1 Attached Washroom(with Geyser) per room',
        'Fully Equipped Kitchen + RO Purifier',
      ]
    }
  },
  {
    id: 'acc-28',
      title: 'Property 28',
    description: 'Modern, fully furnished apartment perfect for students. Located next to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Kandoli, Dehradun',
    price: '15,000',
    distance: '1.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739626884/1_lujkhn.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739626884/1_lujkhn.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739626886/2_chsbra.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739626888/3_aky94g.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739626883/4_jpyuyh.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739626896/vid-24_kth5ri.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi', 'Cleaning Service','Washing Machine','Kitchen','TV','Fridge','Geyser'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 1BHK(Double Sharing)',
      gender: 'Co-ed',
      roomTypes: [''],
      features: [
        '2 Beds, 1 Almirah, 1 Bookshelf',
        '1 Washroom(with Geyser)',
        'Kitchen + RO Purifier',
      ]
    }
  },
  {
    id: 'acc-29',
    title: 'Property 29',
    description: 'Modern, fully furnished apartment perfect for students. Located next to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Kandoli, Dehradun',
    price: '40,000',
    distance: '1.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677061/1_loeert.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677061/1_loeert.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739677062/3_mufrmi.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469686/3_iz7tf5.png',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739469684/2_bhjk6n.png',
        alt: 'Hostel exterior'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739469693/video-2_tgrhcv.mp4',
        alt: 'Hostel common area'
      },
    ],
    amenities: ['Furnished','Wifi','24/7 Water', 'Cleaning Service','Washing Machine','Electricity included'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 3BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 King Size Bed, 1 Almirah, 1 Study Tables, 1 Chairs, 1 Attached Washroom & 1 Bookshelf',
        'Common Area - Drawing & Sofa Set',
        'Kitchen + RO Purifier',
        'Fridge + Geysers',
        'Invertor(Power Backup)',
      ]
    }
  },
  {
    id: 'acc-30',
    title: 'Property 30',
    description: 'Modern, fully furnished PG perfect for girls. Located next to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Bidholi, Dehradun',
    price: '18,000',
    distance: '0.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612555/3_xg3s8o.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612555/3_xg3s8o.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612554/2_l021nv.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1739612554/1_lzhy1z.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1739612554/vid-12_vsoztc.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi','Cleaning Service', 'Laundry Service', 'Electricity', 'Kitchen'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'PG - Double Sharing',
      gender: 'Female',
      roomTypes: [''],
      features: [
        'Per Room - 2 Beds, 2 Almirahs, 2 Study Tables, 2 Chairs, 2 Bookshelves',
        '1 Attached Washroom',
      ]
    }
  },


  {
    id: 'acc-31',
    title: 'Property 31',
    description: 'Modern, fully furnished flat perfect for students. Located next to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Upper Kandoli, Dehradun',
    price: '36,000',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469023/4_liwim7.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469023/4_liwim7.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469022/1_tf5y9g.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469022/2_xafbld.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469022/5_d53ec6.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469022/3_c9tvnr.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1742632449/vid-31_ctjxp1.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished','Microwave', '24/7 Water','WiFi','Cleaning Service', 'Laundry Service', 'Electricity(6 units free)', 'Gas Cylinder'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Attached Washroom',
        'Common Area - Sofa Set',
        'Kitchen - RO Purifier, Microwave, Refrigerator, Gas Cylinder',
      ]
    }
  },
  {
    id: 'acc-33',
    title: 'Property 33',
    description: 'Modern, fully furnished flat perfect for students. Located close to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Pondha, Dehradun',
    price: '35,000',
    distance: '1.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469080/5_dxevkl.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469080/5_dxevkl.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469079/4_ws1uvy.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469082/2_jq1qlv.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469080/1_ws4u3k.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469079/3_pk8rxq.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1742632530/vid-33_gbeduu.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished','Lift', '24/7 Water','Gas Stove','WiFi','Balcony','Electricity', 'Kitchen'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Attached Washroom',
        'LED Modular Kitchen',
        'Attached Balcony',
      ]
    }
  },
  {
    id: 'acc-35',
    title: 'Property 35',
    description: 'Modern, fully furnished flat perfect for students. Located close to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Kandoli, Dehradun',
    price: '30,000',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469156/1_fo1qia.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469156/1_fo1qia.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469156/5_qgttfe.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469156/2_yh3e7j.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469155/4_kldpyp.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742469155/6_pms3ed.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1742632650/vid_36_dtzbl4.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi','Cleaning Service', 'Washing Machine', 'Electricity', 'Kitchen'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 2 Almirahs, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom',
        'Sofa Set + Kitchen(Fridge + RO Purifier)',
      ]
    }
  },
  {
    id: 'acc-36',
    title: 'Property 36',
    description: 'Modern, fully furnished flat perfect for students. Located close to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Kandoli, Dehradun',
    price: '32,000',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632831/1_k4hyna.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632831/1_k4hyna.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632832/4_fjyp3j.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632833/2_fmgxy6.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632831/3_ny7ue0.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1742632830/vid-37_tt7gvt.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', 'Induction','24/7 Water','WiFi','Cleaning Service', 'Electricity', 'Kitchen'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 2 Almirahs, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom',
        'Sofa Set + Kitchen(Fridge + RO Purifier)',
      ]
    }
  },
  {
    id: 'acc-37',
    title: 'Property 37',
    description: 'Modern, fully furnished flat perfect for students. Located close to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Upper Kandoli, Dehradun',
    price: '13,000',
    distance: '1 km', 
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632846/3_lvdihs.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632846/3_lvdihs.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632850/1_ffteou.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632849/2_qhd1g7.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632847/4_fnb1ah.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1742632845/vid-38_cu6ghj.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi','Cleaning Service', 'Laundry Service', 'Electricity', 'Kitchen'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 1BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom',
      ]
    }
  },
  {
    id: 'acc-38',
    title: 'Property 38',
    description: 'Modern, fully furnished flat perfect for students. Located close to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Bidholi, Dehradun',
    price: '13,000',
    distance: '0.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632861/1_inbt4n.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632861/1_inbt4n.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632859/2_milhgp.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632862/3_gac28j.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1742632858/vid-39_bsmjub.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', 'Gas Stove','24/7 Water','WiFi','Cleaning Service', 'Washing Machine', '', 'Kitchen'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Independent Room',    
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf', 
        '1 Attached Washroom',    
      ]
    }
  },
  {
    id: 'acc-39',
    title: 'Property 39',
    description: 'Modern, fully furnished flat perfect for students. Located close to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Kandoli, Dehradun',
    price: '13,000',
    distance: '0.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632875/1_dvmvnc.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632875/1_dvmvnc.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632873/2_itvcfd.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632872/3_npvw38.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1742632871/vid-40_msdxeo.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi','Cleaning Service', 'Laundry Service', 'Electricity', 'Kitchen'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Independent Room',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom',
      ]
    }
  },
  {
    id: 'acc-40',
    title: 'Property 40',
    description: 'Modern, fully furnished flat perfect for students.  Located close to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Kandoli, Dehradun',
    price: '18,000',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632888/1_ub04l2.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632888/1_ub04l2.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632887/2_m1orlf.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632885/3_td0iii.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1742632888/vid-41_nmtel3.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', 'TV','24/7 Water','WiFi','Cleaning Service', 'Laundry Service', 'Electricity', 'Kitchen'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 1BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom',
      ]
    }
  },
  {
    id: 'acc-41',
    title: 'Property 41',
    description: 'Modern, fully furnished flat perfect for students. Located close to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Bidholi, Dehradun',  
    price: '20,000',
    distance: '0.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632898/1_tlx9ih.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632898/1_tlx9ih.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632900/2_ay7ipl.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632901/4_pzyylr.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1742632903/3_ihmjgl.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1742632897/vid-42_xhzbuq.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi','Cleaning Service', 'Laundry Service', 'Electricity', 'Kitchen'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 1BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom',
      ]
    }
  },
  {
    id: 'acc-45',
    title: 'Property 45',
    description: 'Modern, fully furnished flat perfect for students. Located close to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Bidholi, Dehradun',  
    price: '45,000',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1743846208/3_slnouw.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1743846208/3_slnouw.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1743846218/4_djajgr.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1743846209/6_l8bqld.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1743846209/2_ka1btk.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1743846220/1_icfseb.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1743846220/5_jpsrdp.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1743846210/vid_ndpzdu.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi','Cleaning Service', 'Washing Machine', 'Electricity', 'Induction'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 3BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom',
      ]
    }
  },
  {
    id: 'acc-46',
    title: 'Property 46',
    description: 'Modern, fully furnished flat perfect for students. Located close to Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Upper Kandoli, Dehradun',  
    price: '15,000',
    distance: '1.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746803429/3_jrbbck.jpg',
    images: [
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746803429/3_jrbbck.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746803461/2_kimldu.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746803434/1_fc6xil.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746803432/5_ozdmj8.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746803430/4_xgmse2.jpg',
        alt: 'Hostel common area'
      },

      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746803446/6_xwjt5b.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1746805663/vid_46_ghuqpn.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi','Cleaning Service', 'Laundry Service', 'Electricity', 'Fridge'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 3BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Attached Balcony',
        '1 Attached Washroom',
      ]
    }
  },
  {
    id: 'acc-47',
    title: 'Property 47',
    description: 'Modern, fully furnished flat perfect for students. Located close to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Bidholi, Dehradun',  
    price: '40,000',
    distance: '0.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805683/2_vlmtad.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805683/2_vlmtad.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805681/1_awkxp5.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805684/3_te7x3g.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805684/4_mtph7q.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805683/5_kz2b8i.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805685/7_urtvq9.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1746805693/vid_47_an0cw6.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi','Cleaning Service', 'Washing Machine', 'Electricity', 'Induction'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Sofa Set + TV + Kitchen',
        '1 King Size Bed + Attached Washroom per room',
      ]
    }
  },
  {
    id: 'acc-48',
    title: 'Property 48',
    description: 'Modern, fully furnished flat perfect for students. Located 1km from Bidholi and Kandoli Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Upper Kandoli, Dehradun',  
    price: '50,000',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805700/1_y43kxf.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805700/1_y43kxf.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805703/6_uncvel.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805701/2_kgw7cd.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805701/3_ogpwtp.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805701/5_xgoloq.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-6',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805701/4_twvae8.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'vid-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/video/upload/v1746805708/vid_48_gfgij9.mp4',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi', 'Washing Machine', 'Electricity', 'Inverter','Gas Cylinder'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 3BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Sofa Set + TV + Modular Kitchen',
        '3 Washrooms + Bedrooms',
      ]
    }
  },
  {
    id: 'acc-50',
    title: 'Property 50',
    description: 'Modern, fully furnished flat perfect for students. Located close to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Bidholi, Dehradun',  
    price: '50,000',
    distance: '1 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805744/2_zpmai8.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805744/2_zpmai8.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805746/4_lx4yh7.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805744/1_y3ac2l.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805745/3_odhw8v.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-5',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805747/5_rafpi2.jpg',
        alt: 'Hostel common area'
      },
    ],
    amenities: [
      'Furnished',
      '55" Smart TV',
      'AC in each room',
      'Fully automatic washing machine',
      'WiFi',
      'PS4',
      'Pool Table',
      'Maid Service',
      '24/7 Water',
      'Gas stove and Cylinder',
      'RGB lights',
      'Modular Kitchen',
      'Sofa sets',
      'Balcony',
      'Table Tennis'
    ],
        contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Flat - 2BHK',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 AC, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom per room',
        'Common Area - Drawing & Sofa Set',
        'Fully Equipped Modular Kitchen + RO Purifier',
        'Entertainment - 55" Smart TV, PS4, Pool Table, Table Tennis',
        'Modern Amenities - RGB Lights, Fully Automatic Washing Machine',
        'Balcony with City View'
      ]
    }
  },
  {
    id: 'acc-51',
    title: 'Property 51',
    description: 'Modern, fully furnished flat perfect for students. Located close to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Bidholi, Dehradun',  
    price: '24,000',
    distance: '0.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805764/1_t8nblo.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805764/1_t8nblo.jpg',
        alt: 'Hostel exterior'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi','Cleaning Service', 'Washing Machine', 'Electricity', 'AC', 'TV', 'Fridge', 'Gas Cylinder', 'Oven', 'Sofa Set'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Studio Apartment',
      gender: 'Co-Ed',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 AC, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf, 1 Attached Washroom',
        'Common Area - Drawing & Sofa Set',
        'Fully Equipped Kitchen with Oven, Gas Cylinder & Fridge',
        'Entertainment - Smart TV'
      ]
    }
  },
  {
    id: 'acc-52',
    title: 'Property 52',
    description: 'Modern, fully furnished flat perfect for students. Located close to Bidholi Campus with a variety of Restaurants & Gym facilities nearby.',
    location: 'Bidholi, Dehradun',  
    price: '16,000',
    distance: '0.5 km',
    imageUrl: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805790/1_b67h33.jpg',
    images: [
      {
        id: 'img-1',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805790/1_b67h33.jpg',
        alt: 'Hostel exterior'
      },
      {
        id: 'img-2',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805791/3_ogway2.jpg',
        alt: 'Hostel common area'
      },
      {
        id: 'img-3',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805790/2_d2rkgr.jpg',
        alt: 'Hostel room'
      },
      {
        id: 'img-4',
        url: 'https://res.cloudinary.com/dqu8ex7bn/image/upload/v1746805792/4_ovtenx.jpg',
        alt: 'Hostel common area'
      },
    ],
    amenities: ['Furnished', '24/7 Water','WiFi','Cleaning Service', 'Washing Machine', 'Electricity', 'Induction'],
    contact: {
      name: 'Mr. Gulshan Gaur',
      phone: '9369995438',
    },
    details: {
      type: 'Studio Apartment',
      gender: 'Girls',
      roomTypes: [''],
      features: [
        'Per Room - 1 Bed, 1 Almirah, 1 Study Table, 1 Chair, 1 Bookshelf',
        '1 Attached Washroom',
      ]
    }
  },
]; 