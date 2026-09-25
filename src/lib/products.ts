import panelImg from "@/assets/hero-panel-filter.jpg";
import pocketImg from "@/assets/product-pocket.jpg";
import hepaImg from "@/assets/product-hepa.jpg";
import carbonImg from "@/assets/product-carbon.jpg";
import fineImg from "@/assets/product-fine.jpg";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  image: string;
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "panel-filters",
    name: "Panel Filter",
    shortName: "Panel\nFilters",
    tagline: "Primary stage filtration for general ventilation systems.",
    image: panelImg,
    specs: [
      { label: "Filtration Efficiency", value: "ISO Coarse 60%" },
      { label: "Frame Material", value: "Galvanised Steel" },
      { label: "Media", value: "Synthetic" },
      { label: "Max Operating Temp", value: "80°C" },
      { label: "Applications", value: "Commercial, Industrial" },
    ],
  },
  {
    slug: "pocket-filters",
    name: "Pocket Filter",
    shortName: "Pocket\nFilters",
    tagline: "High dust holding capacity for secondary filtration stages.",
    image: pocketImg,
    specs: [
      { label: "Filtration Efficiency", value: "ePM1 70%" },
      { label: "Frame Material", value: "Galvanised Steel" },
      { label: "Media", value: "Glass Fibre" },
      { label: "Max Operating Temp", value: "70°C" },
      { label: "Applications", value: "Offices, Hospitality" },
    ],
  },
  {
    slug: "hepa-filters",
    name: "HEPA Filter",
    shortName: "HEPA\nFilters",
    tagline: "High efficiency filtration for critical environments.",
    image: hepaImg,
    specs: [
      { label: "Filtration Efficiency", value: "99.97%" },
      { label: "Frame Material", value: "Aluminium" },
      { label: "Media", value: "Glass Fibre" },
      { label: "Max Operating Temp", value: "70°C" },
      { label: "Applications", value: "Healthcare, Laboratories" },
    ],
  },
  {
    slug: "carbon-filters",
    name: "Carbon Filter",
    shortName: "Carbon\nFilters",
    tagline: "Activated carbon media for odour and gas phase control.",
    image: carbonImg,
    specs: [
      { label: "Filtration Efficiency", value: "Gas Phase" },
      { label: "Frame Material", value: "Powder Coated Steel" },
      { label: "Media", value: "Activated Carbon" },
      { label: "Max Operating Temp", value: "60°C" },
      { label: "Applications", value: "Kitchens, Laboratories" },
    ],
  },
  {
    slug: "fine-filters",
    name: "Fine Filter",
    shortName: "Fine\nFilters",
    tagline: "Fine particulate control for precision air handling.",
    image: fineImg,
    specs: [
      { label: "Filtration Efficiency", value: "ePM2.5 65%" },
      { label: "Frame Material", value: "Aluminium" },
      { label: "Media", value: "Synthetic Pleated" },
      { label: "Max Operating Temp", value: "80°C" },
      { label: "Applications", value: "Data Centres, Retail" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
