export interface ClothingImage {
  id: string;
  url: string;
  alt: string;
}

export interface ClothingSizes {
  XS?: boolean;
  S?: boolean;
  M?: boolean;
  L?: boolean;
  XL?: boolean;
  XXL?: boolean;
}

export interface ClothingItem {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string; // e.g. 'T-Shirts', 'Hoodies', 'Sweatshirts', etc.
  brand: string;
  imageUrl: string; // Main display image
  images: ClothingImage[]; // All product images including main image
  sizes: ClothingSizes;
  inStock: boolean;
  material?: string[];
  careInstructions?: string[];
  features?: string[];
}

// Sample data structure
export const clothingItems: ClothingItem[] = [
  {
    id: 'cloth-1',
    title: 'SATAN.',
    description: 'The Dark Descent "Satan" T-Shirt.\n\nThis provocative design features a corrupted Michelangelo statue, symbolizing the dark forces that can taint even the purest souls. ��😈🖤',
    price: '999',
    category: 'T-Shirts',
    brand: 'Celestia',
    imageUrl: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/satan_b.webp',
    images: [
      {
        id: 'img-1',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/satan_b.webp',
        alt: 'Classic t-shirt front view'
      },
      {
        id: 'img-2',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/satan_f.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-3',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/black1.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-4',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/black2.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-5',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/tshirt_size.png',
        alt: 'Classic t-shirt back view'
      }
    ],
    sizes: {
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true
    },
    inStock: true,
    features: [
        'Boxy Fit: Oversized,Relaxed and Unrestrictive fit',
        'Ideal for Layering or Solo wear',
        'Durable and long-lasting print'
    ],
    material: [ 
        '100% Premium Cotton',
        'Enhanced with a bio-wash treatment',
        'High Quality Print'
    ],
    careInstructions: [
         'Machine wash cold',
         'Wash inside out',
         'Do not bleach',
         'Do not iron on print'
    ]
  },
  {
    id: 'cloth-2',
    title: 'Youth In Flux.',
    description: 'Feeling overwhelmed by the endless possibilities and pressures of modern life? The "Youth in Flux" T-Shirt perfectly captures the essence of our generation, offering a visual representation of the dynamic changes and challenges faced by young adults today. 🌐✨🔄',
    price: '999',
    category: 'T-Shirts',
    brand: 'Celestia',
    imageUrl: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/Youth_b.webp',
    images: [
      {
        id: 'img-1',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/Youth_b.webp',
        alt: 'Classic t-shirt front view'
      },
      {
        id: 'img-2',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/Youth_f.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-3',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/white1.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-4',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/white2.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-5',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/tshirt_size.png',
        alt: 'Classic t-shirt back view'
      }
    ],
    sizes: {
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true
    },
    inStock: true,
    features: [
        'Boxy Fit: Oversized,Relaxed and Unrestrictive fit',
        'Ideal for Layering or Solo wear',
        'Durable and long-lasting print'
    ],
    material: [ 
        '100% Premium Cotton',
        'Enhanced with a bio-wash treatment',
        'High Quality Print'
    ],
    careInstructions: [
         'Machine wash cold',
         'Wash inside out',
         'Do not bleach',
         'Do not iron on print'
    ]
  },
  {
    id: 'cloth-3',
    title: 'Re-Incarnated.',
    description: '',
    price: '999',
    category: 'T-Shirts',
    brand: 'Celestia',
    imageUrl: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/purp_b.webp',
    images: [
      {
        id: 'img-1',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/purp_b.webp',
        alt: 'Classic t-shirt front view'
      },
      {
        id: 'img-2',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/purp_f.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-3',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/lavender.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-4',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/lavender2.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-5',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/tshirt_size.png',
        alt: 'Classic t-shirt back view'
      }
    ],
    sizes: {
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true
    },
    inStock: true,
    features: [
        'Boxy Fit: Oversized,Relaxed and Unrestrictive fit',
        'Ideal for Layering or Solo wear',
        'Durable and long-lasting print'
    ],
    material: [ 
        '100% Premium Cotton',
        'Enhanced with a bio-wash treatment',
        'High Quality Print'
    ],
    careInstructions: [
         'Machine wash cold',
         'Wash inside out',
         'Do not bleach',
         'Do not iron on print'
    ]
  },
  {
    id: 'cloth-4',
    title: 'Ah! Still Alive :)',
    description: 'This T-shirt is for anyone who’s ever looked back at a tough time and said, "I made it." 🏆 It is for those who cherish life’s every moment, no matter how challenging. Wear the "Ah! Still Alive!" T-shirt, and let it remind you of the strength you carry within, a tribute to every battle you’ve faced and every challenge you have overcome. 💪',
    price: '999',
    category: 'T-Shirts',
    brand: 'Celestia',
    imageUrl: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/stillalive_b.webp',
    images: [
      {
        id: 'img-1',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/stillalive_b.webp',
        alt: 'Classic t-shirt front view'
      },
      {
        id: 'img-2',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/stillalive_f.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-3',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/pink.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-4',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/pink2.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-5',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/tshirt_size.png',
        alt: 'Classic t-shirt back view'
      }
    ],
    sizes: {
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true
    },
    inStock: true,
    features: [
        'Boxy Fit: Oversized,Relaxed and Unrestrictive fit',
        'Ideal for Layering or Solo wear',
        'Durable and long-lasting print'
    ],
    material: [ 
        '100% Premium Cotton',
        'Enhanced with a bio-wash treatment',
        'High Quality Print'
    ],
    careInstructions: [
         'Machine wash cold',
         'Wash inside out',
         'Do not bleach',
         'Do not iron on print'
    ]
  },
  {
    id: 'cloth-5',
    title: 'Cosmic Confessions.💘',
    description: 'This T-shirt is for anyone who has loved deeply, felt the ache of distance, and found solace in the stars above. 🌠 Whether you are gazing up at the night sky or sharing a moment with someone special, let this shirt remind you that love and connection transcend all boundaries. 💞🌏',
    price: '999',
    category: 'T-Shirts',
    brand: 'Celestia',
    imageUrl: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/blustars_b.webp',
    images: [
      {
        id: 'img-1',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/blustars_b.webp',
        alt: 'Classic t-shirt front view'
      },
      {
        id: 'img-2',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/blustars_f.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-3',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/blue1.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-4',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/blue2.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-5',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/tshirt_size.png',
        alt: 'Classic t-shirt back view'
      }
    ],
    sizes: {
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true
    },
    inStock: true,
    features: [
        'Boxy Fit: Oversized,Relaxed and Unrestrictive fit',
        'Ideal for Layering or Solo wear',
        'Durable and long-lasting print'
    ],
    material: [ 
        '100% Premium Cotton',
        'Enhanced with a bio-wash treatment',
        'High Quality Print'
    ],
    careInstructions: [
         'Machine wash cold',
         'Wash inside out',
         'Do not bleach',
         'Do not iron on print'
    ]
  },
  {
    id: 'cloth-6',
    title: 'One Consciousness.',
    description: 'This T-shirt is for anyone who believes in the power of unity, who strives to see beyond the superficial separations to the profound connections that tie us all together. 🤝 Wear the "One Consciousness" T-shirt as a reminder that in every interaction, there lies the potential for an understanding that transcends boundaries—a testament to our collective journey towards oneness. 🌍✨',
    price: '999',
    category: 'T-Shirts',
    brand: 'Celestia',
    imageUrl: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/oneconsc_b.webp',
    images: [
      {
        id: 'img-1',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/oneconsc_b.webp',
        alt: 'Classic t-shirt front view'
      },
      {
        id: 'img-2',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/oneconsc_f.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-3',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/oneconsc1.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-4',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/oneconsc2.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-5',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/tshirt_size.png',
        alt: 'Classic t-shirt back view'
      }
    ],
    sizes: {
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true
    },
    inStock: true,
    features: [
        'Boxy Fit: Oversized,Relaxed and Unrestrictive fit',
        'Ideal for Layering or Solo wear',
        'Durable and long-lasting print'
    ],
    material: [ 
        '100% Premium Cotton',
        'Enhanced with a bio-wash treatment',
        'High Quality Print'
    ],
    careInstructions: [
         'Machine wash cold',
         'Wash inside out',
         'Do not bleach',
         'Do not iron on print'
    ]
  },
  {
    id: 'cloth-7',
    title: 'Transformative Existence.',
    description: 'Embrace the journey of self-discovery with our "Transformative Existence" Tee. This design symbolizes the continuous evolution of our being, reminding us that life is an ever-changing dance of transformation. 🌟✨ Wear your growth proudly and let your style reflect the beauty of change. 🌿',
    price: '999',
    category: 'T-Shirts',
    brand: 'Celestia',
    imageUrl: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/Fuchurhed_b.webp',
    images: [
      {
        id: 'img-1',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/Fuchurhed_b.webp',
        alt: 'Classic t-shirt front view'
      },
      {
        id: 'img-2',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/Fuchurhed_f.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-3',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/beige1.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-4',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/sleeves/beige2.webp',
        alt: 'Classic t-shirt back view'
      },
      {
        id: 'img-5',
        url: 'https://ik.imagekit.io/pbp8vdpnj/Celestia/tshirt_size.png',
        alt: 'Classic t-shirt back view'
      }
    ],
    sizes: {
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true
    },
    inStock: true,
    features: [
        'Boxy Fit: Oversized,Relaxed and Unrestrictive fit',
        'Ideal for Layering or Solo wear',
        'Durable and long-lasting print'
    ],
    material: [ 
        '100% Premium Cotton',
        'Enhanced with a bio-wash treatment',
        'High Quality Print'
    ],
    careInstructions: [
         'Machine wash cold',
         'Wash inside out',
         'Do not bleach',
         'Do not iron on print'
    ]
  },
]; 