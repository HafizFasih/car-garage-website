interface CarDataType {
  name: string;
  price: string;
  brand: string;
  features: string;
  pictures: string[];
  route: string;
}
interface DescriptionType {
  feature: string;
  description: string;
}
interface CarRatingType {
  features: string;
  rating: string;
}
interface ReportArrayType {
  text: string;
  percentage: number
}
interface ReportDataType {
  category: string;
  data:  ReportArrayType[]
}
export interface CarFeatersType {
  img: string;
  name: string
}
export const bmwCarData: CarDataType[] = [
  {
    name: "BMW X6",
    brand: "bmw",
    price: "$65,050",
    features: "G",
    route: "bmw-x6",
    pictures: [
      "bg-[url('/bmw/x6/4.webp')]",
      "bg-[url('/bmw/x6/1.webp')]",
      "bg-[url('/bmw/x6/2.webp')]",
      "bg-[url('/bmw/x6/3.webp')]",
      "bg-[url('/bmw/x6/5.webp')]",
    ],
  },
  {
    name: "BMW M3",
    brand: "bmw",
    price: "$70,895",
    features: "E",
    route: "bmw-m3",
    pictures: [
      "bg-[url('/bmw/m3/3.webp')]",
      "bg-[url('/bmw/m3/2.webp')]",
      "bg-[url('/bmw/m3/1.webp')]",
      "bg-[url('/bmw/m3/4.webp')]",
      "bg-[url('/bmw/m3/5.webp')]",
      "bg-[url('/bmw/m3/6.webp')]",
    ],
  },
  {
    name: "BMW X5",
    brand: "bmw",
    price: "$60,600",
    features: "A",
    route: "bmw-x5",
    pictures: [
      "bg-[url('/bmw/x5/5.webp')]",
      "bg-[url('/bmw/x5/1.webp')]",
      "bg-[url('/bmw/x5/2.webp')]",
      "bg-[url('/bmw/x5/3.webp')]",
      "bg-[url('/bmw/x5/4.webp')]",
    ],
  },
  {
    name: "BMW 7 Series",
    brand: "bmw",
    price: "$86,800",
    features: "C",
    route: "bmw-7-series",
    pictures: [
      "bg-[url('/bmw/7/5.webp')]",
      "bg-[url('/bmw/7/1.webp')]",
      "bg-[url('/bmw/7/2.webp')]",
      "bg-[url('/bmw/7/3.webp')]",
      "bg-[url('/bmw/7/4.webp')]",
    ],
  },
  {
    name: "BMW i8",
    brand: "bmw",
    price: "$147,500",
    features: "F",
    route: "bmw-i8",
    pictures: [
      "bg-[url('/bmw/i8/3.webp')]",
      "bg-[url('/bmw/i8/1.webp')]",
      "bg-[url('/bmw/i8/2.webp')]",
      "bg-[url('/bmw/i8/4.webp')]",
      "bg-[url('/bmw/i8/5.webp')]",
    ],
  },
  {
    name: "BMW Z4",
    brand: "bmw",
    price: "$49,700",
    features: "H",
    route: "bmw-z4",
    pictures: [
      "bg-[url('/bmw/z4/3.webp')]",
      "bg-[url('/bmw/z4/1.webp')]",
      "bg-[url('/bmw/z4/2.webp')]",
      "bg-[url('/bmw/z4/4.webp')]",
      "bg-[url('/bmw/z4/5.webp')]",
    ],
  },
  {
    name: "BMW M5",
    brand: "bmw",
    price: "$104,495",
    features: "B",
    route: "bmw-m5",
    pictures: [
      "bg-[url('/bmw/m5/5.webp')]",
      "bg-[url('/bmw/m5/1.webp')]",
      "bg-[url('/bmw/m5/2.webp')]",
      "bg-[url('/bmw/m5/3.webp')]",
      "bg-[url('/bmw/m5/4.webp')]",
      "bg-[url('/bmw/m5/6.webp')]",
    ],
  },
  {
    name: "BMW 3 Series",
    brand: "bmw",
    price: "$41,250",
    features: "I",
    route: "bmw-3-series",
    pictures: [
      "bg-[url('/bmw/3/4.webp')]",
      "bg-[url('/bmw/3/1.webp')]",
      "bg-[url('/bmw/3/2.webp')]",
      "bg-[url('/bmw/3/3.webp')]",
      "bg-[url('/bmw/3/5.webp')]",
    ],
  },
  {
    name: "BMW X7",
    brand: "bmw",
    price: "$74,900",
    features: "J",
    route: "bmw-x7",
    pictures: [
      "bg-[url('/bmw/x7/4.webp')]",
      "bg-[url('/bmw/x7/1.webp')]",
      "bg-[url('/bmw/x7/2.webp')]",
      "bg-[url('/bmw/x7/3.webp')]",
      "bg-[url('/bmw/x7/5.webp')]",
    ],
  },
  {
    name: "BMW M2",
    brand: "bmw",
    price: "$58,900",
    features: "D",
    route: "bmw-m2",
    pictures: [
      "bg-[url('/bmw/m2/3.webp')]",
      "bg-[url('/bmw/m2/1.webp')]",
      "bg-[url('/bmw/m2/2.webp')]",
      "bg-[url('/bmw/m2/4.webp')]",
      "bg-[url('/bmw/m2/5.webp')]",
    ],
  },
];
export const bentleyCarData: CarDataType[] = [
  {
    name: "Bentley Continental GT",
    brand: "bentley",
    price: "$202,500",
    features: "D",
    route: "bentley-continental-gt",
    pictures: [
      "bg-[url('/bentley/continental-gt/2.webp')]",
      "bg-[url('/bentley/continental-gt/3.webp')]",
      "bg-[url('/bentley/continental-gt/1.webp')]",
    ],
  },
  {
    name: "Bentley Bentayga",
    brand: "bentley",
    price: "$183,425",
    features: "H",
    route: "bentley-bentayga",
    pictures: [
      "bg-[url('/bentley/bentayga/3.webp')]",
      "bg-[url('/bentley/bentayga/1.webp')]",
      "bg-[url('/bentley/bentayga/2.webp')]",
      "bg-[url('/bentley/bentayga/4.webp')]",
      "bg-[url('/bentley/bentayga/5.webp')]",
    ],
  },
  {
    name: "Bentley Flying Spur",
    brand: "bentley",
    price: "$219,425",
    features: "A",
    route: "bentley-flying-spur",
    pictures: [
      "bg-[url('/bentley/flyingspur/3.webp')]",
      "bg-[url('/bentley/flyingspur/1.webp')]",
      "bg-[url('/bentley/flyingspur/2.webp')]",
      "bg-[url('/bentley/flyingspur/4.webp')]",
      "bg-[url('/bentley/flyingspur/5.webp')]",
    ],
  },
  {
    name: "Bentley Mulsanne",
    brand: "bentley",
    price: "$310,800",
    features: "G",
    route: "bentley-mulsanne",
    pictures: [
      "bg-[url('/bentley/mulsanne/3.webp')]",
      "bg-[url('/bentley/mulsanne/1.webp')]",
      "bg-[url('/bentley/mulsanne/2.webp')]",
      "bg-[url('/bentley/mulsanne/4.webp')]",
      "bg-[url('/bentley/mulsanne/5.webp')]",
    ],
  },
  {
    name: "Bentley Arnage",
    brand: "bentley",
    price: "$224,500",
    features: "F",
    route: "bentley-arnage",
    pictures: [
      "bg-[url('/bentley/arnage/3.webp')]",
      "bg-[url('/bentley/arnage/1.webp')]",
      "bg-[url('/bentley/arnage/2.webp')]",
      "bg-[url('/bentley/arnage/4.webp')]",
    ],
  },
  {
    name: "Bentley Azure",
    brand: "bentley",
    price: "$370,000",
    features: "B",
    route: "bentley-azure",
    pictures: [
      "bg-[url('/bentley/azure/2.webp')]",
      "bg-[url('/bentley/azure/1.webp')]",
      "bg-[url('/bentley/azure/4.webp')]",
      "bg-[url('/bentley/azure/3.webp')]",
    ],
  },
  {
    name: "Bentley Brooklands",
    brand: "bentley",
    price: "$348,000",
    features: "J",
    route: "bentley-brooklands",
    pictures: [
      "bg-[url('/bentley/brooklands/3.webp')]",
      "bg-[url('/bentley/brooklands/1.webp')]",
      "bg-[url('/bentley/brooklands/2.webp')]",
      "bg-[url('/bentley/brooklands/4.webp')]",
      "bg-[url('/bentley/brooklands/5.webp')]",
    ],
  },
  {
    name: "Bentley EXP 100 GT",
    brand: "bentley",
    price: "$2,500,000",
    features: "E",
    route: "bentley-exp-100-gt",
    pictures: [
      "bg-[url('/bentley/exp100gt/3.webp')]",
      "bg-[url('/bentley/exp100gt/5.webp')]",
      "bg-[url('/bentley/exp100gt/1.webp')]",
      "bg-[url('/bentley/exp100gt/2.webp')]",
      "bg-[url('/bentley/exp100gt/4.webp')]",
    ],
  },
  {
    name: "Bentley R Type",
    brand: "bentley",
    price: "$260,000",
    features: "C",
    route: "bentley-r-type",
    pictures: [
      "bg-[url('/bentley/rtype/3.webp')]",
      "bg-[url('/bentley/rtype/1.webp')]",
      "bg-[url('/bentley/rtype/2.webp')]",
      "bg-[url('/bentley/rtype/4.webp')]",
      "bg-[url('/bentley/rtype/5.webp')]",
    ],
  },
  {
    name: "Bentley Turbo R",
    brand: "bentley",
    price: "$156,000",
    features: "I",
    route: "bentley-turbo-r",
    pictures: [
      "bg-[url('/bentley/turbor/3.webp')]",
      "bg-[url('/bentley/turbor/1.webp')]",
      "bg-[url('/bentley/turbor/2.webp')]",
      "bg-[url('/bentley/turbor/4.webp')]",
      "bg-[url('/bentley/turbor/5.webp')]",
    ],
  },
];
export const fordCarData: CarDataType[] = [
  {
    name: "Ford Mustang",
    price: "$55,300",
    features: "H",
    brand: "ford",
    route: "ford-mustang",
    pictures: [
      "bg-[url('/ford/mustang/3.webp')]",
      "bg-[url('/ford/mustang/4.webp')]",
      "bg-[url('/ford/mustang/5.webp')]",
      "bg-[url('/ford/mustang/6.webp')]",
      "bg-[url('/ford/mustang/1.webp')]",
      "bg-[url('/ford/mustang/2.webp')]",
    ],
  },
  {
    name: "Ford F-150",
    price: "$40,410",
    features: "D",
    brand: "ford",
    route: "ford-f-150",
    pictures: [
      "bg-[url('/ford/f-150/3.webp')]",
      "bg-[url('/ford/f-150/5.webp')]",
      "bg-[url('/ford/f-150/4.webp')]",
      "bg-[url('/ford/f-150/1.webp')]",
      "bg-[url('/ford/f-150/2.webp')]",
    ],
  },
  {
    name: "Ford Bronco",
    price: "$34,695",
    features: "F",
    brand: "ford",
    route: "ford-bronco",
    pictures: [
      "bg-[url('/ford/bronco/3.webp')]",
      "bg-[url('/ford/bronco/4.webp')]",
      "bg-[url('/ford/bronco/1.webp')]",
      "bg-[url('/ford/bronco/2.webp')]",
    ],
  },
  {
    name: "Ford Explorer",
    price: "$48,650",
    features: "A",
    brand: "ford",
    route: "ford-explorer",
    pictures: [
      "bg-[url('/ford/explorer/3.webp')]",
      "bg-[url('/ford/explorer/2.webp')]",
      "bg-[url('/ford/explorer/1.webp')]",
      "bg-[url('/ford/explorer/4.webp')]",
    ],
  },
  {
    name: "Ford Edge",
    price: "$38,100",
    features: "G",
    brand: "ford",
    route: "ford-edge",
    pictures: [
      "bg-[url('/ford/edge/4.webp')]",
      "bg-[url('/ford/edge/5.webp')]",
      "bg-[url('/ford/edge/3.webp')]",
      "bg-[url('/ford/edge/6.webp')]",
      "bg-[url('/ford/edge/1.webp')]",
      "bg-[url('/ford/edge/2.webp')]",
    ],
  },
  {
    name: "Ford Ranger",
    price: "$32,990",
    features: "J",
    brand: "ford",
    route: "ford-ranger",
    pictures: [
      "bg-[url('/ford/ranger/4.webp')]",
      "bg-[url('/ford/ranger/3.webp')]",
      "bg-[url('/ford/ranger/5.webp')]",
      "bg-[url('/ford/ranger/1.webp')]",
      "bg-[url('/ford/ranger/2.webp')]",
    ],
  },
  {
    name: "Ford GT",
    price: "$500,000",
    features: "C",
    brand: "ford",
    route: "ford-gt",
    pictures: [
      "bg-[url('/ford/gt/3.webp')]",
      "bg-[url('/ford/gt/4.webp')]",
      "bg-[url('/ford/gt/2.webp')]",
      "bg-[url('/ford/gt/1.webp')]",
    ],
  },
  {
    name: "Ford Escape",
    price: "$27,755",
    features: "I",
    brand: "ford",
    route: "ford-escape",
    pictures: [
      "bg-[url('/ford/escape/3.webp')]",
      "bg-[url('/ford/escape/4.webp')]",
      "bg-[url('/ford/escape/5.webp')]",
      "bg-[url('/ford/escape/1.webp')]",
      "bg-[url('/ford/escape/2.webp')]",
    ],
  },
  {
    name: "Ford Expedition",
    price: "$66,500",
    features: "E",
    brand: "ford",
    route: "ford-expedition",
    pictures: [
      "bg-[url('/ford/expedition/4.webp')]",
      "bg-[url('/ford/expedition/1.webp')]",
      "bg-[url('/ford/expedition/2.webp')]",
      "bg-[url('/ford/expedition/3.webp')]",
      "bg-[url('/ford/expedition/5.webp')]",
    ],
  },
  {
    name: "Ford Fusion",
    price: "$23,170",
    features: "B",
    brand: "ford",
    route: "ford-fusion",
    pictures: [
      "bg-[url('/ford/fusion/3.webp')]",
      "bg-[url('/ford/fusion/4.webp')]",
      "bg-[url('/ford/fusion/5.webp')]",
      "bg-[url('/ford/fusion/1.webp')]",
      "bg-[url('/ford/fusion/2.webp')]",
    ],
  },
];
export const mercedesCarData: CarDataType[] = [
  {
    name: "Mercedes-Benz S-Class",
    price: "$111,100",
    features: "B",
    brand: "mercedes",
    route: "mercedes-benz-s-class",
    pictures: [
      "bg-[url('/mercedes/benz-s-class/4.webp')]",
      "bg-[url('/mercedes/benz-s-class/3.webp')]",
      "bg-[url('/mercedes/benz-s-class/1.webp')]",
      "bg-[url('/mercedes/benz-s-class/2.webp')]",
    ],
  },
  {
    name: "Mercedes-Benz G-Class",
    price: "$139,900",
    features: "D",
    brand: "mercedes",
    route: "mercedes-benz-g-class",
    pictures: [
      "bg-[url('/mercedes/benz-g-class/6.webp')]",
      "bg-[url('/mercedes/benz-g-class/3.webp')]",
      "bg-[url('/mercedes/benz-g-class/4.webp')]",
      "bg-[url('/mercedes/benz-g-class/5.webp')]",
      "bg-[url('/mercedes/benz-g-class/1.webp')]",
      "bg-[url('/mercedes/benz-g-class/2.webp')]",
    ],
  },
  {
    name: "Mercedes-Benz C-Class",
    price: "$44,600",
    features: "G",
    brand: "mercedes",
    route: "mercedes-benz-c-class",
    pictures: [
      "bg-[url('/mercedes/benz-c-class/4.webp')]",
      "bg-[url('/mercedes/benz-c-class/5.webp')]",
      "bg-[url('/mercedes/benz-c-class/3.webp')]",
      "bg-[url('/mercedes/benz-c-class/1.webp')]",
      "bg-[url('/mercedes/benz-c-class/2.webp')]",
    ],
  },
  {
    name: "Mercedes-Benz E-Class",
    price: "$63,050",
    features: "A",
    brand: "mercedes",
    route: "mercedes-benz-e-class",
    pictures: [
      "bg-[url('/mercedes/benz-e-class/6.webp')]",
      "bg-[url('/mercedes/benz-e-class/4.webp')]",
      "bg-[url('/mercedes/benz-e-class/5.webp')]",
      "bg-[url('/mercedes/benz-e-class/1.webp')]",
      "bg-[url('/mercedes/benz-e-class/2.webp')]",
      "bg-[url('/mercedes/benz-e-class/3.webp')]",
    ],
  },
  {
    name: "Mercedes-Benz GLE",
    price: "$57,700",
    features: "C",
    brand: "mercedes",
    route: "mercedes-benz-gle",
    pictures: [
      "bg-[url('/mercedes/benz-gle/5.webp')]",
      "bg-[url('/mercedes/benz-gle/4.webp')]",
      "bg-[url('/mercedes/benz-gle/2.webp')]",
      "bg-[url('/mercedes/benz-gle/1.webp')]",
    ],
  },
  {
    name: "Mercedes-Benz GLS",
    price: "$80,900",
    features: "I",
    brand: "mercedes",
    route: "mercedes-benz-gls",
    pictures: [
      "bg-[url('/mercedes/benz-gls/3.webp')]",
      "bg-[url('/mercedes/benz-gls/4.webp')]",
      "bg-[url('/mercedes/benz-gls/1.webp')]",
      "bg-[url('/mercedes/benz-gls/2.webp')]",
    ],
  },
  {
    name: "Mercedes-AMG GT",
    price: "$118,600",
    features: "E",
    brand: "mercedes",
    route: "mercedes-amg-gt",
    pictures: [
      "bg-[url('/mercedes/amg-gt/3.webp')]",
      "bg-[url('/mercedes/amg-gt/2.webp')]",
      "bg-[url('/mercedes/amg-gt/4.webp')]",
      "bg-[url('/mercedes/amg-gt/5.webp')]",
      "bg-[url('/mercedes/amg-gt/1.webp')]",
    ],
  },
  {
    name: "Mercedes-Benz A-Class",
    price: "$33,950",
    features: "J",
    brand: "mercedes",
    route: "mercedes-benz-a-class",
    pictures: [
      "bg-[url('/mercedes/benz-a-class/2.webp')]",
      "bg-[url('/mercedes/benz-a-class/3.webp')]",
      "bg-[url('/mercedes/benz-a-class/4.webp')]",
      "bg-[url('/mercedes/benz-a-class/1.webp')]",
    ],
  },
  {
    name: "Mercedes-Benz CLA",
    price: "$39,250",
    features: "H",
    brand: "mercedes",
    route: "mercedes-benz-cla",
    pictures: [
      "bg-[url('/mercedes/benz-cla/2.webp')]",
      "bg-[url('/mercedes/benz-cla/3.webp')]",
      "bg-[url('/mercedes/benz-cla/4.webp')]",
      "bg-[url('/mercedes/benz-cla/1.webp')]",
    ],
  },
  {
    name: "Mercedes-Maybach S-Class",
    price: "$185,950",
    features: "F",
    brand: "mercedes",
    route: "mercedes-maybach-s-class",
    pictures: [
      "bg-[url('/mercedes/maybach-s-class/4.webp')]",
      "bg-[url('/mercedes/maybach-s-class/3.webp')]",
      "bg-[url('/mercedes/maybach-s-class/1.webp')]",
      "bg-[url('/mercedes/maybach-s-class/2.webp')]",
    ],
  },
];
export const carDescriptions = [
  {
    feature: "A",
    description:
      "The [Car Name] delivers an unparalleled blend of performance and luxury. Engineered for those who demand excellence, this model boasts a sleek exterior and a finely-tuned engine that provides exceptional acceleration and handling. Inside, the cabin is meticulously designed, offering premium seating materials and advanced technology at your fingertips. With features like adaptive cruise control and a cutting-edge infotainment system, the [Car Name] is perfect for those who want both comfort and control on every drive.",
  },
  {
    feature: "B",
    description:
      "Turn heads wherever you go with the stunning [Car Name]. This car is the perfect combination of style and substance, featuring a dynamic design that's sure to make an impression. Under the hood, its powerful engine ensures every drive is a thrilling experience, while the advanced safety features keep you protected on the road. The interior is a haven of luxury, with plush seating and a high-tech dashboard that puts all essential controls within easy reach. The [Car Name] is designed for those who refuse to compromise.",
  },
  {
    feature: "C",
    description:
      "Discover the next level of driving with the [Car Name]. This vehicle is crafted to elevate your experience, whether you're commuting in the city or exploring winding country roads. With its refined design and cutting-edge technology, the [Car Name] offers a smooth ride and seamless connectivity. The interior exudes luxury, featuring spacious seating and customizable lighting for a perfect ambiance. Combined with its advanced driver-assistance systems, the [Car Name] ensures every journey is safe, efficient, and enjoyable.",
  },
  {
    feature: "D",
    description:
      "The [Car Name] is where innovation meets performance. Powered by a robust engine and enhanced by superior handling, this car is built to deliver an exhilarating driving experience. Its aerodynamic design not only enhances speed but also improves fuel efficiency. Step inside the plush cabin and you'll be surrounded by top-of-the-line materials and intuitive controls, making every drive comfortable and convenient. With smart technology at your fingertips, the [Car Name] is your perfect companion for both daily commutes and long adventures.",
  },
  {
    feature: "E",
    description:
      "Experience the ultimate in automotive engineering with the [Car Name]. From the sleek, sporty exterior to the luxurious, tech-filled interior, this car is designed to impress. The powerful engine offers thrilling acceleration, while the advanced suspension ensures a smooth and controlled ride. Inside, the [Car Name] is all about comfort and innovation, with a spacious cabin, ergonomic seating, and a state-of-the-art entertainment system. Whether you're on the highway or navigating through traffic, the [Car Name] turns every drive into a first-class experience.",
  },
  {
    feature: "F",
    description:
      "Step into sophistication with the [Car Name]. Built with meticulous attention to detail, this model combines a stylish exterior with exceptional performance. Its turbocharged engine delivers both power and efficiency, while the advanced safety features offer peace of mind at every turn. Inside, you'll find a refined interior, complete with leather seats, a premium sound system, and a panoramic sunroof. Whether you're heading to a business meeting or on a weekend getaway, the [Car Name] ensures you arrive in style.",
  },
  {
    feature: "G",
    description:
      "The [Car Name] is engineered for those who crave excitement and refinement in equal measure. Its precision handling and powerful engine deliver a dynamic driving experience, whether you're cruising along the coast or navigating city streets. Inside, the cabin is both spacious and luxurious, with features like customizable seating and ambient lighting that create a personalized driving environment. The [Car Name] also includes the latest in safety and entertainment technology, making it the perfect choice for the modern driver.",
  },
  {
    feature: "H",
    description:
      "The [Car Name] sets a new standard for luxury vehicles. This model is equipped with the latest in automotive technology, from its powerful engine to its intuitive infotainment system. The exterior design is sleek and modern, while the interior offers premium comfort with heated seats, a climate-controlled cabin, and a high-definition touchscreen interface. With safety features like lane departure warning and automatic emergency braking, the [Car Name] gives you confidence on every drive. Experience the future of driving with the [Car Name].",
  },
  {
    feature: "I",
    description:
      "Drive with confidence in the [Car Name]. Designed for optimal performance and comfort, this car features a high-output engine that delivers impressive speed and agility. The bold, aerodynamic design enhances both style and efficiency, while the interior is packed with luxury amenities like leather upholstery, an advanced sound system, and a smart navigation display. With an array of driver-assistance features, the [Car Name] ensures that you can handle any road with ease and precision.",
  },
  {
    feature: "J",
    description:
      "The [Car Name] is more than just a car; it's a statement. This vehicle offers unparalleled performance thanks to its finely-tuned engine and cutting-edge engineering. The striking exterior design catches the eye, while the high-end interior provides comfort and sophistication for every passenger. With features like a touchscreen entertainment system, wireless charging, and surround-view cameras, the [Car Name] delivers an elevated driving experience. Whether you're on a quick errand or a long road trip, the [Car Name] makes every moment behind the wheel unforgettable.",
  },
];
export const descriptionFunc = (
  category: string,
  descriptionArr: DescriptionType[],
  carName: string,
) => {
  const displayVal:DescriptionType[] = descriptionArr.filter((val) => {
    if(val.feature === category)
      return val;
    });
  return displayVal[0].description.replaceAll("[Car Name]", carName);  
};
export const carRatings: CarRatingType[] = [
  { features: "A", rating: "[Car Name] has been meticulously maintained and exhibits exceptional performance in every aspect. Each component has been thoroughly inspected, ensuring a driving experience that is both safe and enjoyable. Highly recommend for anyone seeking reliability and luxury." },
  { features: "B", rating: "[Car Name] demonstrates outstanding quality and attention to detail. From the exterior to the engine, everything is in perfect working order. This inspection confirms that this vehicle is not only a great choice for daily driving but also offers a touch of elegance." },
  { features: "C", rating: "[Car Name] has been cared for with great diligence. With top-notch ratings in all categories, it offers an unmatched driving experience. A fantastic option for anyone looking for a blend of comfort and performance." },
  { features: "D", rating: "[Car Name] stands out with its impeccable condition and high-quality features. The inspection reveals no issues, making it a trustworthy choice for both everyday use and special occasions. Highly recommend this car to potential buyers." },
  { features: "E", rating: "[Car Name] is an exceptional vehicle that has surpassed expectations in all areas. The inspection highlights its superior build quality and remarkable performance. Perfect for those who appreciate luxury and reliability in their driving experience." },
  { features: "F", rating: "[Car Name] exemplifies excellence in every detail. With a flawless inspection report, it is a testament to quality engineering and craftsmanship. Ideal for anyone looking to invest in a high-performance vehicle." },
  { features: "G", rating: "[Car Name] is a standout in its class, offering an incredible combination of power, comfort, and safety. The thorough inspection confirms its top-notch condition, making it a perfect choice for discerning buyers." },
  { features: "H", rating: "[Car Name] shines in terms of both aesthetic and mechanical condition. The inspection report is stellar, confirming that it has been well taken care of. A fantastic choice for anyone seeking a reliable and stylish ride." },
  { features: "I", rating: "[Car Name] has an impressive inspection score and is ready to deliver an outstanding driving experience. Its features are in top shape, providing both luxury and performance. Highly recommended for those who value quality." },
  { features: "J", rating: "[Car Name] has been rigorously inspected and comes with a perfect score in all categories. Its features are not only modern but also reliable, making it an excellent investment for those seeking durability and style." },
];
export const ratingFunc = (
  category: string, ratingArr: CarRatingType[], carName: string
) => {
  const displayVal = ratingArr.filter((val) => {
    if(category === val.features)
      return val;
  });
  return displayVal[0].rating.replaceAll("[Car Name]", carName);
}
export const carFeautersData: CarFeatersType [] = [
  {
    img: "bg-[url('/car-features/cruise-control.svg')]",
    name: "Cruise Control",
  },
  { img: "bg-[url('/car-features/alloy-rim.svg')]", name: "Alloy Rims" },
  {
    img: "bg-[url('/car-features/navigation.svg')]",
    name: "Navigation System",
  },
  { img: "bg-[url('/car-features/rear-speaker.svg')]", name: "Rear Speakers" },
  { img: "bg-[url('/car-features/rear-camera.svg')]", name: "Rear Camera" },
  { img: "bg-[url('/car-features/keyless.svg')]", name: "Keyless Entry" },
  { img: "bg-[url('/car-features/power-lock.svg')]", name: "Power Locks" },
  { img: "bg-[url('/car-features/steering.svg')]", name: "Steering Switches" },
  { img: "bg-[url('/car-features/power-mirror.svg')]", name: "Power Mirrors" },
  { img: "bg-[url('/car-features/airbag.svg')]", name: "Air Bags" },
  { img: "bg-[url('/car-features/radio.svg')]", name: "AM/FM Radio" },
  { img: "bg-[url('/car-features/key.svg')]", name: "Immobilizer Key" },
  {
    img: "bg-[url('/car-features/front-speaker.svg')]",
    name: "Front Speakers",
  },
  { img: "bg-[url('/car-features/cd-player.svg')]", name: "CD Player" },
  { img: "bg-[url('/car-features/abs.svg')]", name: "ABS" },
  {
    img: "bg-[url('/car-features/led-headlights.svg')]",
    name: "LED Headlights",
  },
  { img: "bg-[url('/car-features/leather-seats.svg')]", name: "Leather Seats" },
  {
    img: "bg-[url('/car-features/air-conditioner.svg')]",
    name: " Air Conditioning",
  },
  { img: "bg-[url('/car-features/ice-box.svg')]", name: " CoolBox" },
  { img: "bg-[url('/car-features/sun-roof.svg')]", name: "Sun Roof" },
];
export const shufflingFeatures = (features: CarFeatersType[]) => {
  const savedData: CarFeatersType[] = [...features];
  let returningArray: CarFeatersType[] = [];
  for(let i = 0; i < 13; i++){
    let randomIndex: number = Math.floor(Math.random() * savedData.length);
    returningArray.push(savedData.splice(randomIndex, 1)[0])
  }
  return returningArray;
}
export const reportRates: ReportDataType[] = [
  {
    category: "A",
    data: [
      { text: "Exterior & Body", percentage: 96 },
      { text: "Engine/Transmission/Clutch", percentage: 100 },
      { text: "Suspension/Steering", percentage: 94 },
      { text: "Interior", percentage: 99 },
      { text: "AC/Heater", percentage: 100 },
    ]
  },
  {
    category: "B",
    data: [
      { text: "Exterior & Body", percentage: 93 },
      { text: "Engine/Transmission/Clutch", percentage: 99 },
      { text: "Suspension/Steering", percentage: 98 },
      { text: "Interior", percentage: 100 },
      { text: "AC/Heater", percentage: 97 },
    ]
  },
  {
    category: "C",
    data: [
      { text: "Exterior & Body", percentage: 92 },
      { text: "Engine/Transmission/Clutch", percentage: 95 },
      { text: "Suspension/Steering", percentage: 100 },
      { text: "Interior", percentage: 99 },
      { text: "AC/Heater", percentage: 98 },
    ]
  },
  {
    category: "D",
    data: [
      { text: "Exterior & Body", percentage: 91 },
      { text: "Engine/Transmission/Clutch", percentage: 97 },
      { text: "Suspension/Steering", percentage: 100 },
      { text: "Interior", percentage: 96 },
      { text: "AC/Heater", percentage: 95 },
    ]
  },
  {
    category: "E",
    data: [
      { text: "Exterior & Body", percentage: 94 },
      { text: "Engine/Transmission/Clutch", percentage: 98 },
      { text: "Suspension/Steering", percentage: 100 },
      { text: "Interior", percentage: 100 },
      { text: "AC/Heater", percentage: 100 },
    ]
  },
  {
    category: "F",
    data: [
      { text: "Exterior & Body", percentage: 95 },
      { text: "Engine/Transmission/Clutch", percentage: 100 },
      { text: "Suspension/Steering", percentage: 97 },
      { text: "Interior", percentage: 100 },
      { text: "AC/Heater", percentage: 99 },
    ]
  },
  {
    category: "G",
    data: [
      { text: "Exterior & Body", percentage: 98 },
      { text: "Engine/Transmission/Clutch", percentage: 100 },
      { text: "Suspension/Steering", percentage: 100 },
      { text: "Interior", percentage: 95 },
      { text: "AC/Heater", percentage: 100 },
    ]
  },
  {
    category: "H",
    data: [
      { text: "Exterior & Body", percentage: 96 },
      { text: "Engine/Transmission/Clutch", percentage: 97 },
      { text: "Suspension/Steering", percentage: 98 },
      { text: "Interior", percentage: 99 },
      { text: "AC/Heater", percentage: 100 },
    ]
  },
  {
    category: "I",
    data: [
      { text: "Exterior & Body", percentage: 92 },
      { text: "Engine/Transmission/Clutch", percentage: 96 },
      { text: "Suspension/Steering", percentage: 99 },
      { text: "Interior", percentage: 100 },
      { text: "AC/Heater", percentage: 100 },
    ]
  },
  {
    category: "J",
    data: [
      { text: "Exterior & Body", percentage: 93 },
      { text: "Engine/Transmission/Clutch", percentage: 100 },
      { text: "Suspension/Steering", percentage: 97 },
      { text: "Interior", percentage: 98 },
      { text: "AC/Heater", percentage: 100 },
    ]
  },
];
export const setReport = (category: string) => {
  const carReport = reportRates.filter((val) => {
    if(category === val.category){
      return val.data
    }
  })[0]
  return carReport;
}