/**
 * HENOK ART STUDIO — Central Artwork Catalog
 * Expanded catalog containing 12 items (3 paintings, 3 murals, 3 drawings, 3 wall-art).
 */

export const ARTWORK_CATEGORIES = [
  { id: "all", name: "All Works" },
  { id: "paintings", name: "Paintings" },
  { id: "murals", name: "Murals" },
  { id: "drawings", name: "Drawings" },
  { id: "wall-art", name: "Wall Art" },
];

export const ARTWORKS = [
  // --- PAINTINGS (3) ---
  {
    id: "art-01",
    title: "Expressive Teal & Ochre Portrait",
    category: "paintings",
    medium: "Oil and acrylic on linen canvas",
    year: "Demo Work",
    dimensions: "180 x 140 cm",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    aspect: "aspect-3/4",
    description:
      "Vivid portrait composition combining deep blues, teal, and warm earthy ochre glazes.",
  },
  {
    id: "art-02",
    title: "Vibrant Dynamic Abstract",
    category: "paintings",
    medium: "Mixed media on stretched canvas",
    year: "Demo Work",
    dimensions: "150 x 120 cm",
    image: "/images/painting 2.jpg",
    featured: true,
    aspect: "aspect-3/4",
    description:
      "High-contrast abstract impasto exploring structural brushstrokes and vivid primary accents.",
  },
  {
    id: "art-05",
    title: "Textured Chromatic Study",
    category: "paintings",
    medium: "Acrylic on canvas",
    year: "Demo Work",
    dimensions: "120 x 100 cm",
    image: "/images/painting 3.jpg",
    featured: false,
    aspect: "aspect-3/4",
    description:
      "Layered organic textures and subtle color transitions balancing calm tones and vibrant highlights.",
  },

  // --- MURALS (3) ---
  {
    id: "art-04",
    title: "Urban Botanical Wall Mural",
    category: "murals",
    medium: "Indoor acrylic & aerosol mural installation",
    year: "Demo Work",
    dimensions: "6.5m x 3.2m",
    image: "/images/murals 1.jpg",
    featured: true,
    aspect: "aspect-3/4",
    description:
      "Immersive large-scale wall artwork integrated into a modern architectural interior.",
  },
  {
    id: "art-06",
    title: "Geometric Facade Mural",
    category: "murals",
    medium: "Exterior weather-resistant paint",
    year: "Demo Work",
    dimensions: "10m x 4.5m",
    image: "/images/murals 2.jpg",
    featured: false,
    aspect: "aspect-3/4",
    description:
      "Bold outdoor mural installation featuring energetic geometry and vibrant gradient transitions.",
  },
  {
    id: "art-07",
    title: "Vibrant Street Wall Composition",
    category: "murals",
    medium: "Mixed aerosol & outdoor masonry paint",
    year: "Demo Work",
    dimensions: "8m x 3.5m",
    image: "/images/murals 3.jpg",
    featured: false,
    aspect: "aspect-3/4",
    description:
      "Dynamic urban wall mural featuring expressive calligraphic lines and high-contrast color blocks.",
  },

  // --- DRAWINGS (3) ---
  {
    id: "art-03",
    title: "Monochrome Figure Study",
    category: "drawings",
    medium: "Charcoal and graphite on heavy toned paper",
    year: "Demo Work",
    dimensions: "75 x 55 cm",
    image: "/images/drawing 1.jpg",
    featured: true,
    aspect: "aspect-3/4",
    description:
      "Expressive graphite and charcoal rendering exploring contrast, silhouette, and subtle light.",
  },
  {
    id: "art-08",
    title: "Linear Botanical Sketch",
    category: "drawings",
    medium: "Fine ink and graphite on hand-pressed paper",
    year: "Demo Work",
    dimensions: "60 x 40 cm",
    image: "/images/drawing 2.jpg",
    featured: false,
    aspect: "aspect-3/4",
    description:
      "Detailed hand-drawn line work highlighting intricate organic patterns and natural form.",
  },
  {
    id: "art-09",
    title: "Architectural Contour Study",
    category: "drawings",
    medium: "Ink and charcoal on archival cotton paper",
    year: "Demo Work",
    dimensions: "70 x 50 cm",
    image:
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    aspect: "aspect-3/4",
    description:
      "Structural ink study balancing sharp perspective lines with fluid atmospheric shading.",
  },

  // --- WALL ART (3) ---
  {
    id: "art-10",
    title: "Textured Wood & Resin Panel",
    category: "wall-art",
    medium: "Carved wood, mineral pigments, and matte resin",
    year: "Demo Work",
    dimensions: "140 x 90 cm",
    image: "/images/wall-art 1.jpg",
    featured: false,
    aspect: "aspect-3/4",
    description:
      "Tactile relief wall sculpture combining natural timber grain with subtle metallic accents.",
  },
  {
    id: "art-11",
    title: "Minimalist Metallic Wall Sculpture",
    category: "wall-art",
    medium: "Brushed steel & brass relief panel",
    year: "Demo Work",
    dimensions: "160 x 100 cm",
    image: "/images/wall-art 2.jpg",
    featured: false,
    aspect: "aspect-3/4",
    description:
      "Contemporary architectural wall sculpture designed to play with ambient light and shadows.",
  },
  {
    id: "art-12",
    title: "Woven Fiber Wall Hanging",
    category: "wall-art",
    medium: "Natural jute, wool, and hand-dyed cotton",
    year: "Demo Work",
    dimensions: "130 x 110 cm",
    image: "/images/wall-art 3.jpg",
    featured: false,
    aspect: "aspect-3/4",
    description:
      "Tactile woven textile art piece bringing warmth, softness, and acoustic depth to modern interiors.",
  },
];
