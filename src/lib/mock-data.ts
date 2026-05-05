import santorini from "@/assets/dest-santorini.jpg";
import tokyo from "@/assets/dest-tokyo.jpg";
import alps from "@/assets/dest-alps.jpg";
import dubai from "@/assets/dest-dubai.jpg";

export const destinations = [
  { id: "santorini", name: "Santorini", country: "Greece", price: 489, img: santorini, tag: "Island escape" },
  { id: "tokyo", name: "Tokyo", country: "Japan", price: 712, img: tokyo, tag: "Culture & nightlife" },
  { id: "alps", name: "Swiss Alps", country: "Switzerland", price: 624, img: alps, tag: "Winter wonderland" },
  { id: "dubai", name: "Dubai", country: "UAE", price: 398, img: dubai, tag: "Luxury & skyline" },
];

export const flights = [
  { id: "f1", airline: "SkyJet", from: "NYC", to: "LON", depart: "08:20", arrive: "20:45", duration: "7h 25m", stops: 0, price: 412 },
  { id: "f2", airline: "AeroLink", from: "NYC", to: "LON", depart: "11:00", arrive: "23:30", duration: "7h 30m", stops: 1, price: 348 },
  { id: "f3", airline: "Nova Air", from: "NYC", to: "LON", depart: "18:45", arrive: "07:10", duration: "7h 25m", stops: 0, price: 498 },
  { id: "f4", airline: "Polaris", from: "NYC", to: "LON", depart: "22:10", arrive: "10:35", duration: "7h 25m", stops: 0, price: 521 },
];

export const hotels = [
  { id: "h1", name: "Azure Bay Resort", city: "Santorini", rating: 4.9, reviews: 1240, price: 289, amenities: ["Pool", "Spa", "Sea view"] },
  { id: "h2", name: "Sakura Tower", city: "Tokyo", rating: 4.7, reviews: 982, price: 219, amenities: ["WiFi", "Gym", "Skyline"] },
  { id: "h3", name: "Alpine Lodge", city: "Zermatt", rating: 4.8, reviews: 654, price: 412, amenities: ["Fireplace", "Ski-in", "Spa"] },
];

export const trains = [
  { id: "t1", name: "Coastal Express", from: "Paris", to: "Nice", depart: "07:15", arrive: "13:42", duration: "6h 27m", class: "First", price: 124 },
  { id: "t2", name: "Mountain Line", from: "Zurich", to: "Milan", depart: "09:00", arrive: "12:30", duration: "3h 30m", class: "Second", price: 78 },
  { id: "t3", name: "Night Pearl", from: "Berlin", to: "Vienna", depart: "21:40", arrive: "07:55", duration: "10h 15m", class: "Sleeper", price: 156 },
];
