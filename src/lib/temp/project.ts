import { writable } from "svelte/store";

const projectTemp = writable([
  {
    id: 1,
    name: "business",
    images: "/images/services/gbr1.jpg",
  },
  {
    id: 2,
    name: "consulting",
    images: "/images/services/gbr2.jpg",
  },
  {
    id: 3,
    name: "business",
    images: "/images/services/gbr3.jpg",
  },
]);

export default projectTemp