const auctionData = [
  // Ongoing Auctions
  {
    id: 1,
    title: "Vintage car",
    basePrice: 150,
    endDate: "2025-02-20",
    status: "ongoing",
    image: "https://my-auction-images-2025.s3.us-east-1.amazonaws.com/1st.jpeg",
    bid: 170000,
  },
  {
    id: 2,
    title: "Gold Necklace",
    basePrice: 800,
    endDate: "2025-02-27",
    status: "ongoing",
    image: "https://my-auction-images-2025.s3.us-east-1.amazonaws.com/2nd.jpeg",
    bid: 900,
  },
  {
    id: 3,
    title: "Samsung SSD",
    basePrice: 2000,
    endDate: "2025-02-25",
    status: "ongoing",
    image: "https://my-auction-images-2025.s3.us-east-1.amazonaws.com/3rd.jpeg",
    bid: 2100,
  },

  // Upcoming Auctions
  {
    id: 4,
    title: "Rare Painting",
    basePrice: 500,
    endDate: "2025-02-22",
    status: "upcoming",
    image: "",
    bid: null,
  },
  {
    id: 5,
    title: "Antique Vase",
    basePrice: 300,
    endDate: "2025-02-28",
    status: "upcoming",
    image: "",
    bid: null,
  },
  {
    id: 6,
    title: "Luxury Handbag",
    basePrice: 1200,
    endDate: "2025-03-01",
    status: "upcoming",
    image: "",
    bid: null,
  },
  {
    id: 7,
    title: "TEMP",
    basePrice: 1200,
    endDate: "2025-03-01",
    status: "upcoming",
    image: "",
    bid: null,
  },
  
  // Recent Auctions (Example for testing)
  {
    id: 8,
    title: "Classic Car",
    basePrice: 10000,
    endDate: "2025-02-18",
    status: "recent",
    image: "",
    bid: 10500,
  },

  // Top Bid Today (Example for testing)
  {
    id: 9,
    title: "Diamond Ring",
    basePrice: 2000,
    endDate: "2025-02-17",
    status: "topBidToday",
    image: "",
    bid: 2500,
  },
  
  // Winner's List for the Month (Example for testing)
  {
    id: 10,
    title: "Vintage Guitar",
    basePrice: 3000,
    endDate: "2025-02-05",
    status: "winner",
    image: "",
    bid: 3500,
    winner: "John Doe",
  },
  {
    id: 11,
    title: "Vintage Watch",
    basePrice: 150,
    endDate: "2025-02-20",
    status: "ongoing",
    image: "",
    bid: 170,
  },
  {
    id: 12,
    title: "Gold Necklace",
    basePrice: 800,
    endDate: "2025-02-27",
    status: "ongoing",
    image: "",
    bid: 900,
  },
  {
    id: 13,
    title: "Samsung SSD",
    basePrice: 2000,
    endDate: "2025-02-25",
    status: "ongoing",
    image: "",
    bid: 2100,
  },

  // Winner's List for the Month (Example for testing)
  {
    id: 14,
    title: "Vintage Guitar",
    basePrice: 3000,
    endDate: "2025-02-05",
    status: "winner",
    image: "",
    bid: 3500,
    winner: "John Doe",
  },
  {
    id: 15,
    title: "Diamond Ring",
    basePrice: 2000,
    endDate: "2025-02-17",
    status: "topBidToday",
    image: "",
    bid: 2500,
  },
  {
    id: 16,
    title: "Luxury Watch",
    basePrice: 5000,
    endDate: "2025-03-01",
    status: "upcoming",
    image: "",
    bid: null,
  },
  {
    id: 17,
    title: "Modern Artwork",
    basePrice: 1500,
    endDate: "2025-03-05",
    status: "upcoming",
    image: "",
    bid: null,
  },
  
  // Additional items for pagination testing
  {
    id: 18,
    title: "Antique Clock",
    basePrice: 2200,
    endDate: "2025-04-02",
    status: "upcoming",
    image: "",
    bid: null,
  },
  {
    id: 19,
    title: "Luxury Sofa",
    basePrice: 5000,
    endDate: "2025-05-01",
    status: "upcoming",
    image: "",
    bid: null,
  },
  {
    id: 20,
    title: "Rare Coins",
    basePrice: 1000,
    endDate: "2025-05-15",
    status: "upcoming",
    image: "",
    bid: null,
  },
  {
    id: 21,
    title: "Vintage car",
    basePrice: 150,
    endDate: "2025-02-20",
    status: "ongoing",
    image: "",
    bid: 170000,
  },
  
  {
    id: 22,
    title: "Vintage car",
    basePrice: 150,
    endDate: "2025-02-20",
    status: "ongoing",
    image: "",
    bid: 170000,
  },
  
  {
    id: 23,
    title: "Vintage car",
    basePrice: 150,
    endDate: "2025-02-20",
    status: "ongoing",
    image: "",
    bid: 170000,
  },
  
  {
    id: 23,
    title: "Vintage car",
    basePrice: 150,
    endDate: "2025-02-20",
    status: "ongoing",
    image: "",
    bid: 170000,
  },
  
  {
    id: 23,
    title: "Vintage car",
    basePrice: 150,
    endDate: "2025-02-20",
    status: "ongoing",
    image: "",
    bid: 170000,
  },
  
  {
    id: 24,
    title: "Vintage car",
    basePrice: 150,
    endDate: "2025-02-20",
    status: "ongoing",
    image: "",
    bid: 170000,
  },
  
  {
    id: 25,
    title: "Vintage car",
    basePrice: 150,
    endDate: "2025-02-20",
    status: "ongoing",
    image: "",
    bid: 170000,
  },
  
  {
    id: 26,
    title: "Vintage car",
    basePrice: 150,
    endDate: "2025-02-20",
    status: "ongoing",
    image: "'https://dummyjson.com/icon/abc123/150",
    bid: 170000,
  },
  {
    id: 26,
    title: "Vintage car",
    basePrice: 150,
    endDate: "2025-02-20",
    status: "ongoing",
    image: "'https://dummyjson.com/icon/abc123/150",
    bid: 170000,
  },
];

export default auctionData;
