import nightCreamImg from "../assets/glowaura-b3-night-cream.jpg";
import creamOpenImg from "../assets/glowaura-cream-open.jpg";
import serumImg from "../assets/glowaura-serum.jpg";
import faceWashImg from "../assets/glowaura-facewash.jpg";
import lotionImg from "../assets/glowaura-lotion.jpg";
import eyeGelImg from "../assets/p-eye-gel.jpg";
import scrubImg from "../assets/p-scrub.jpg";
import hairSerumImg from "../assets/p-hair-serum.jpg";
import lipBalmImg from "../assets/p-lip-balm.jpg";
import soapImg from "../assets/p-soap.jpg";
import glutafineSoapAsset from "../assets/glutafine-soap.png.asset.json";
import glofineCreamAsset from "../assets/glofine-cream.png.asset.json";
import glowfineBAsset from "../assets/glowfine-b.png.asset.json";
import glofineAdvanceAsset from "../assets/glofine-advance-face-cream.png.asset.json";
import glofineKitAsset from "../assets/glofine-forte-kit.png.asset.json";
import glofineTabletAsset from "../assets/glofine-forte-tablet.png.asset.json";

export type Spec = { label: string; value: string };

export type Product = {
  name: string;
  image: string;
  alt: string;
  tag: string;
  price: string;
  size: string;
  description: string;
  details: string[];
  benefits: string[];
  specs: Spec[];
  usage: string;
};

const madeIn: Spec = { label: "Origin", value: "Made in India" };
const forAll: Spec = { label: "For", value: "Men & Women · All skin types" };

const nightCream: Product = {
  name: "Skin Whitening & Serum Night Cream",
  image: nightCreamImg,
  alt: "Glowaura-B3 Skin Whitening & Serum Night Cream crystal jar beside its maroon and gold box",
  tag: "Night · New Arrival",
  price: "₹899",
  size: "30 g",
  description:
    "An overnight treatment cream that works while you sleep — an advanced formula for acne and dark spot care, with visible results in 7 days.",
  details: ["Net Weight: 30 g", "₹899 (Incl. of all taxes)", "7 Days Result"],
  benefits: [
    "Advanced night formula for acne and dark spot care",
    "Brightens and evens out skin tone overnight",
    "Visible results in as little as 7 days",
    "Non-greasy, fast-absorbing serum-cream texture",
  ],
  specs: [
    { label: "Net Weight", value: "30 g" },
    { label: "M.R.P.", value: "₹899 (incl. of all taxes)" },
    { label: "Unit Price", value: "₹29.96 per gram" },
    forAll,
    madeIn,
  ],
  usage:
    "Cleanse and pat dry at night. Massage a small amount over face and neck in upward circular motions. Leave on overnight and rinse in the morning.",
};

const glutafineSoap: Product = {
  name: "Glutafine Rich Creamy Soap",
  image: glutafineSoapAsset.url,
  alt: "Glutafine Rich Creamy Soap 75 g in a deep maroon carton",
  tag: "Bath · Lightening",
  price: "₹349",
  size: "75 g",
  description:
    "A rich, creamy cleansing bar with Glutathione, Kojic Acid and Vitamin C that lightens and brightens skin with every wash.",
  details: ["Net Weight: 75 g", "Glutathione + Kojic Acid + Vitamin C", "₹349"],
  benefits: [
    "Lightening and brightening with daily use",
    "Creamy lather that never dries out the skin",
    "Kojic acid helps fade tanning and dark patches",
    "Vitamin C adds everyday radiance",
  ],
  specs: [
    { label: "Net Weight", value: "75 g" },
    { label: "M.R.P.", value: "₹349 (incl. of all taxes)" },
    { label: "Key Actives", value: "Glutathione, Kojic Acid, Vitamin C" },
    forAll,
    madeIn,
  ],
  usage: "Lather over damp face or body, leave for 30 seconds and rinse. Use twice daily.",
};

const bodyCream: Product = {
  name: "Skin Whitening & Serum Body Cream",
  image: creamOpenImg,
  alt: "Glowaura-B3 Skin Whitening & Serum Body Cream jar opened showing the pearly cream",
  tag: "Body · Bestseller",
  price: "₹1,049",
  size: "250 g",
  description:
    "The signature 2-in-1 cream and serum that lightens, brightens and deeply hydrates the whole body with Niacinamide (Vitamin B3).",
  details: ["Net Weight: 250 g", "₹1,049 (Incl. of all taxes)", "7 Days Result"],
  benefits: [
    "Visibly lightens and brightens overall skin tone",
    "Deep hydration with a silky serum-cream texture",
    "Fades the look of dark spots and uneven patches",
    "Lightweight, non-greasy, daily-use formula",
  ],
  specs: [
    { label: "Net Weight", value: "250 g" },
    { label: "M.R.P.", value: "₹1,049 (incl. of all taxes)" },
    { label: "Key Actives", value: "Niacinamide, Hyaluronic Acid, Vitamin E" },
    forAll,
    madeIn,
  ],
  usage:
    "Apply generously over clean, dry skin twice daily and massage until fully absorbed. Best used morning and night.",
};

const glofineTablet: Product = {
  name: "Glofine Forte L-Glutathione Tablet",
  image: glofineTabletAsset.url,
  alt: "Glofine Forte L-Glutathione tablet carton with a silver blister strip",
  tag: "Nutraceutical · Inside-out",
  price: "₹1,299",
  size: "3 × 10 tablets",
  description:
    "An inside-out skin brightening nutraceutical with L-Glutathione, Vitamin C, NAC, Alpha Lipoic Acid, Saberry Astaxanthin and Vitamin E.",
  details: ["3 × 10 Tablets", "L-Glutathione + Vitamin C + ALA", "₹1,299"],
  benefits: [
    "L-Glutathione regulates melanin synthesis and reduces pigmentation",
    "Saberry helps protect against wrinkling and loss of elasticity",
    "Supports faster collagen production",
    "Antioxidant blend for overall skin health",
  ],
  specs: [
    { label: "Pack", value: "3 × 10 tablets" },
    { label: "M.R.P.", value: "₹1,299 (incl. of all taxes)" },
    { label: "Type", value: "Nutraceutical · Vegetarian" },
    forAll,
    madeIn,
  ],
  usage: "Take one tablet daily after a meal, or as directed by your physician.",
};

const faceSerum: Product = {
  name: "Brightening Face Serum",
  image: serumImg,
  alt: "Glowaura-B3 Brightening Face Serum in a black glass dropper bottle with gold accents",
  tag: "Face · Concentrate",
  price: "₹749",
  size: "30 ml",
  description:
    "A featherlight concentrate that targets dullness and uneven tone. Two to three drops leave skin luminous and refined.",
  details: ["Niacinamide + Vitamin C", "30 ml · Dropper bottle", "₹749"],
  benefits: [
    "Targets dullness, pigmentation and uneven tone",
    "10% Niacinamide with stabilised Vitamin C",
    "Absorbs instantly with zero stickiness",
    "Layers beautifully under cream or sunscreen",
  ],
  specs: [
    { label: "Volume", value: "30 ml" },
    { label: "M.R.P.", value: "₹749 (incl. of all taxes)" },
    { label: "Key Actives", value: "Niacinamide 10%, Vitamin C" },
    forAll,
    madeIn,
  ],
  usage: "Apply 2–3 drops on cleansed skin morning and night, then follow with moisturiser.",
};

const glofineAdvance: Product = {
  name: "Glofine Advance Glutathione Face Cream",
  image: glofineAdvanceAsset.url,
  alt: "Glofine Advance Glutathione Face Cream pink airless pump bottle beside its carton",
  tag: "Face · Advance",
  price: "₹1,199",
  size: "30 g",
  description:
    "A rejuvenating face cream with Glutathione 2%, Clair Blanche-ii 2% and Hymagic 4D 2% — free from paraben, sulfates, phthalate and silicones.",
  details: ["Net Qty. 30 g (1.01 OZ)", "Glutathione 2% + Hymagic 4D", "₹1,199"],
  benefits: [
    "Rejuvenating and skin brightening action",
    "Hymagic 4D delivers multi-layer hydration",
    "Free from paraben, sulfates, phthalate and silicones",
    "Suitable for all skin types",
  ],
  specs: [
    { label: "Net Quantity", value: "30 g (1.01 OZ)" },
    { label: "M.R.P.", value: "₹1,199 (incl. of all taxes)" },
    { label: "Key Actives", value: "Glutathione 2%, Clair Blanche-ii 2%, Hymagic 4D 2%" },
    forAll,
    madeIn,
  ],
  usage: "Pump a pea-sized amount onto cleansed skin and massage gently, morning and night.",
};

const faceWash: Product = {
  name: "Gentle Foaming Face Wash",
  image: faceWashImg,
  alt: "Glowaura-B3 Gentle Foaming Face Wash in a matte black pump bottle with gold accents",
  tag: "Cleanse · Daily",
  price: "₹499",
  size: "150 ml",
  description:
    "A soft, cloud-like foam that lifts away impurities without stripping. Skin feels clean, calm and comfortable — never tight.",
  details: ["pH-balanced formula", "150 ml · Pump bottle", "₹499"],
  benefits: [
    "Removes oil, dirt and pollution in one wash",
    "pH-balanced, sulphate-free lather",
    "Keeps the moisture barrier intact",
    "Suitable for twice-daily use",
  ],
  specs: [
    { label: "Volume", value: "150 ml" },
    { label: "M.R.P.", value: "₹499 (incl. of all taxes)" },
    { label: "Formula", value: "Sulphate-free · pH 5.5" },
    forAll,
    madeIn,
  ],
  usage: "Pump onto damp skin, massage into a lather for 30 seconds, rinse with lukewarm water.",
};

const glowfineB: Product = {
  name: "Glowfine-B Skin Lightening Cream",
  image: glowfineBAsset.url,
  alt: "Glowfine-B Skin Lightening Cream tube with its white and green botanical carton",
  tag: "Face · Advanced Formula",
  price: "₹649",
  size: "30 g",
  description:
    "An advanced skin lightening and brightening cream with Glutathione, Vitamin C, Alpha Arbutin, Licorice and Kojic Acid Dipalmitate.",
  details: ["Net Weight: 30 g", "Alpha Arbutin + Licorice", "₹649"],
  benefits: [
    "Targets stubborn pigmentation and dark spots",
    "Alpha Arbutin and Licorice for gradual, even lightening",
    "Kojic Acid Dipalmitate is gentle and stable on skin",
    "Non-greasy daily-wear texture",
  ],
  specs: [
    { label: "Net Weight", value: "30 g" },
    { label: "M.R.P.", value: "₹649 (incl. of all taxes)" },
    {
      label: "Key Actives",
      value: "Glutathione, Vitamin C, Alpha Arbutin, Licorice, Kojic Acid Dipalmitate",
    },
    forAll,
    madeIn,
  ],
  usage: "Apply a thin layer on cleansed skin twice daily. Use sunscreen during the day.",
};

const bodyLotion: Product = {
  name: "Radiance Body Lotion",
  image: lotionImg,
  alt: "Glowaura-B3 Radiance Body Lotion in a tall matte black bottle with gold cap",
  tag: "Body · Hydration",
  price: "₹599",
  size: "200 ml",
  description:
    "A silky daily lotion that wraps skin in lasting moisture and a subtle, healthy sheen — the perfect companion to the Body Cream.",
  details: ["48-hour hydration", "200 ml · Disc cap", "₹599"],
  benefits: [
    "48-hour continuous hydration",
    "Adds a soft, natural luminosity",
    "Absorbs in seconds, no sticky film",
    "Softens rough elbows, knees and ankles",
  ],
  specs: [
    { label: "Volume", value: "200 ml" },
    { label: "M.R.P.", value: "₹599 (incl. of all taxes)" },
    { label: "Key Actives", value: "Shea Butter, Niacinamide" },
    forAll,
    madeIn,
  ],
  usage: "Smooth over the whole body after a shower while skin is still slightly damp.",
};

const eyeGel: Product = {
  name: "Under Eye Gel Cream",
  image: eyeGelImg,
  alt: "Glowaura-B3 Under Eye Gel Cream in a small black jar with a gold band",
  tag: "Eyes · Targeted",
  price: "₹649",
  size: "15 g",
  description:
    "A cooling caffeine and peptide gel that de-puffs tired eyes and gradually softens the look of dark circles.",
  details: ["Net Weight: 15 g", "Caffeine + Peptides", "₹649"],
  benefits: [
    "Reduces puffiness from the first use",
    "Softens dark circles over 4–6 weeks",
    "Hydrates fine lines around the eye",
    "Fragrance-free, ophthalmologically safe",
  ],
  specs: [
    { label: "Net Weight", value: "15 g" },
    { label: "M.R.P.", value: "₹649 (incl. of all taxes)" },
    { label: "Key Actives", value: "Caffeine, Peptides, Vitamin K" },
    forAll,
    madeIn,
  ],
  usage: "Tap a rice-grain amount around each eye with the ring finger, morning and night.",
};

const glofineCream: Product = {
  name: "Glofine Rejuvenating Cream",
  image: glofineCreamAsset.url,
  alt: "Glofine Cream 50 g carton in teal and black with a halftone pattern",
  tag: "Face · Rejuvenating",
  price: "₹799",
  size: "50 g",
  description:
    "A rejuvenating and skin brightening cream powered by Glutathione, Kojic Acid and Vitamin C for a clearer, more even complexion.",
  details: ["Net Weight: 50 g", "Glutathione + Kojic Acid + Vitamin C", "₹799"],
  benefits: [
    "Rejuvenates dull, tired-looking skin",
    "Helps even out pigmentation and blemishes",
    "Vitamin C boosts natural radiance",
    "Comfortable everyday cream texture",
  ],
  specs: [
    { label: "Net Weight", value: "50 g" },
    { label: "M.R.P.", value: "₹799 (incl. of all taxes)" },
    { label: "Key Actives", value: "Glutathione, Kojic Acid, Vitamin C" },
    forAll,
    madeIn,
  ],
  usage: "Massage a small quantity over cleansed face and neck twice daily.",
};

const scrub: Product = {
  name: "Gold Radiance Face Scrub",
  image: scrubImg,
  alt: "Glowaura-B3 Gold Radiance Face Scrub in a black jar with gold lid and a scrub swatch",
  tag: "Exfoliate · Weekly",
  price: "₹549",
  size: "100 g",
  description:
    "A gold-flecked polishing scrub with walnut micro-beads and fruit AHAs that reveals fresh, glowing skin in one use.",
  details: ["Net Weight: 100 g", "AHA + Walnut beads", "₹549"],
  benefits: [
    "Sweeps away dead cells and blackheads",
    "Instant post-scrub glow",
    "Helps creams absorb far better",
    "Gentle enough for weekly use",
  ],
  specs: [
    { label: "Net Weight", value: "100 g" },
    { label: "M.R.P.", value: "₹549 (incl. of all taxes)" },
    { label: "Key Actives", value: "Fruit AHA, 24K gold flakes" },
    forAll,
    madeIn,
  ],
  usage: "Massage over damp skin in circles for one minute, twice a week. Rinse well.",
};

const glofineKit: Product = {
  name: "Glofine Forte Skin Whitening Kit",
  image: glofineKitAsset.url,
  alt: "Glofine Forte skin whitening kit with tablets, soap and cream in teal packaging",
  tag: "Kit · Complete Regimen",
  price: "₹2,199",
  size: "Tablets + Soap 75 g + Cream 50 g",
  description:
    "The complete Glofine Forte skin whitening treatment — tablets, soap and cream working together from inside and out.",
  details: ["2 × 10 Tablets", "Soap 75 g + Cream 50 g", "₹2,199"],
  benefits: [
    "A full inside-out whitening regimen in one box",
    "Glutathione, Kojic Acid and Vitamin C across all three steps",
    "Better, faster results than any single product",
    "Value pack — cheaper than buying separately",
  ],
  specs: [
    { label: "Kit Contents", value: "Tablets, Soap 75 g, Cream 50 g" },
    { label: "M.R.P.", value: "₹2,199 (incl. of all taxes)" },
    { label: "Key Actives", value: "Glutathione, Kojic Acid, Vitamin C" },
    forAll,
    madeIn,
  ],
  usage:
    "One tablet daily after a meal, soap twice daily in the bath, and cream on cleansed skin morning and night.",
};

const hairSerum: Product = {
  name: "Silk Repair Hair Serum",
  image: hairSerumImg,
  alt: "Glowaura-B3 Silk Repair Hair Serum in a black bottle with gold pump",
  tag: "Hair · Shine",
  price: "₹599",
  size: "100 ml",
  description:
    "A non-sticky argan and keratin serum that seals split ends, tames frizz and leaves hair mirror-glossy.",
  details: ["Argan + Keratin", "100 ml · Pump bottle", "₹599"],
  benefits: [
    "Controls frizz for up to 24 hours",
    "Adds salon-level shine instantly",
    "Heat protection up to 200°C",
    "Lightweight — never weighs hair down",
  ],
  specs: [
    { label: "Volume", value: "100 ml" },
    { label: "M.R.P.", value: "₹599 (incl. of all taxes)" },
    { label: "Key Actives", value: "Argan oil, Hydrolysed Keratin" },
    { label: "For", value: "All hair types" },
    madeIn,
  ],
  usage: "Rub 2–3 pumps between palms and glide through damp or dry mid-lengths and ends.",
};

const lipBalm: Product = {
  name: "Tinted Lip Care Balm",
  image: lipBalmImg,
  alt: "Glowaura-B3 tinted lip balm in a black and gold twist-up case",
  tag: "Lips · Care",
  price: "₹299",
  size: "4.5 g",
  description:
    "A buttery tinted balm with shea and Vitamin E that lightens pigmented lips while adding a natural rose flush.",
  details: ["Net Weight: 4.5 g", "Shea + Vitamin E", "₹299"],
  benefits: [
    "Heals dry, chapped lips overnight",
    "Gradually lightens smoker's pigmentation",
    "Sheer rose tint suits every complexion",
    "SPF 15 daylight protection",
  ],
  specs: [
    { label: "Net Weight", value: "4.5 g" },
    { label: "M.R.P.", value: "₹299 (incl. of all taxes)" },
    { label: "Protection", value: "SPF 15" },
    forAll,
    madeIn,
  ],
  usage: "Glide over lips whenever needed, and generously before bed.",
};

const charcoalSoap: Product = {
  name: "Charcoal Detox Soap Bar",
  image: soapImg,
  alt: "Glowaura-B3 charcoal detox soap bar with gold flecks on a dark stone slab",
  tag: "Bath · Detox",
  price: "₹199",
  size: "100 g",
  description:
    "A cold-processed activated charcoal bar with tea tree that draws out oil and grime — ideal for acne-prone body skin.",
  details: ["Net Weight: 100 g", "Charcoal + Tea tree", "₹199"],
  benefits: [
    "Deep-cleans clogged pores",
    "Controls body acne and back breakouts",
    "Balances excess oil without dryness",
    "Handmade, cold-processed bar",
  ],
  specs: [
    { label: "Net Weight", value: "100 g" },
    { label: "M.R.P.", value: "₹199 (incl. of all taxes)" },
    { label: "Key Actives", value: "Activated charcoal, Tea tree oil" },
    forAll,
    madeIn,
  ],
  usage: "Lather and massage over face or body, leave for 30 seconds, then rinse thoroughly.",
};

/** New arrivals are interleaved with the original range — never grouped together. */
export const collection: Product[] = [
  nightCream,
  glutafineSoap,
  bodyCream,
  glofineTablet,
  faceSerum,
  glofineAdvance,
  faceWash,
  glowfineB,
  bodyLotion,
  eyeGel,
  glofineCream,
  scrub,
  glofineKit,
  hairSerum,
  lipBalm,
  charcoalSoap,
];
