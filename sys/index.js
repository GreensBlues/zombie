const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const chance = (percent) => Math.random() < percent;

//
// NAMES
//

const firstNames = [
  "Aaron","Adam","Alex","Amber","Andrew","Ashley","Becky","Ben",
  "Brandon","Brian","Carl","Casey","Charlie","Chris","Dana",
  "David","Emily","Emma","Eric","Frank","Gary","Greg","Hannah",
  "Heather","Jack","James","Jamie","Jason","Jennifer","Jessica",
  "John","Jordan","Josh","Karen","Kelly","Kevin","Larry","Laura",
  "Lisa","Madison","Mark","Megan","Melissa","Michael","Nancy",
  "Olivia","Pam","Pat","Rachel","Rebecca","Robert","Ryan",
  "Sam","Sarah","Scott","Shawn","Steve","Tammy","Taylor",
  "Thomas","Tim","Tyler","Victoria","William","Zoe"
];

const nounLastNames = [
  "Resin","Toolbox","Pancake","Gravel","Matchbook","Pickle","Bucket",
  "Lantern","Waffle","Bandage","Firewood","Campfire","Crowbar",
  "Hammer","Flashlight","Mailbox","Raincoat","Chainsaw","Generator",
  "Workbench","Gascan","Bootlace","Roadsign","Wheelbarrow",
  "Fencepost","Haystack","Pinecone","Rocksalt","Jacket",
  "Rucksack","Mudflap","Brick","Cinderblock","Cookbook",
  "Compass","Tacklebox","Sparkplug","Workshop","Fireaxe",
  "Coffeepot","Cornbread","Hotdog","Nugget","Brownie",
  "Bagel","Milkshake","Creek","Holler","Barn","Tractor",
  "Catfish","Possum","Moonshine","Bourbon","Haybale",
  "Riverboat","Blacktop","Cornfield","Fishingpole",
  "Mechanic","Welder","Deputy","Teacher","Plumber",
  "Tuesday","Detour","Roadtrip","Daydream","Checklist",
  "Emergency","Overtime","Inventory","Lottery"
];

const funnyNames = [
  "Epoxy Resin",
  "Dianne Learn",
  "Fig Newton",
  "Bath Towel",
  "Gum Drop",
  "Muffin Top",
  "Brick House",
  "Waffle Iron",
  "Biscuit Gravy",
  "Taco Tuesday",
  "Soda Pop",
  "Bucket List",
  "Chicken Nugget",
  "Penny Loafer",
  "Dust Bunny",
  "Gravy Train",
  "Paper Clip",
  "Pocket Lint",
  "Garden Hose",
  "Spare Tire",
  "Pizza Crust",
  "Cookie Dough",
  "Pork Chop",
  "Corn Muffin"
];

const legendaryNames = [
  "Forklift Steve",
  "Concrete Larry",
  "Gas Station Gary",
  "Trailer Park Tammy",
  "Chainsaw Chad",
  "Bourbon Billy",
  "Catfish Carl",
  "Possum Pete",
  "Dumpster Dan",
  "Lawnmower Linda",
  "BBQ Becky",
  "Banjo Bob",
  "Riverboat Ron",
  "Two-Sheds Terry",
  "Backroads Betty",
  "Moonshine Mary",
  "Hay Bale Helen"
];

const secretNames = [
  "John Zomboid",
  "Patient Zero",
  "The Knox Event",
  "Administrative Error",
  "DO NOT APPROACH",
  "404 Survivor Not Found",
  "The Last Resident",
  "Definitely Not Infected"
];

//
// TOWNS
//

const towns = [
  "Muldraugh",
  "West Point",
  "Rosewood",
  "Riverside",
  "Louisville",
  "Valley Station",
  "March Ridge",
  "Doe Valley",
  "Ekron",
  "Brandenburg",
  "Dixie",
  "Irvington"
];

//
// OCCUPATIONS
//

const occupations = [
  "Mechanic",
  "Postal Worker",
  "Teacher",
  "Police Officer",
  "Prison Guard",
  "Construction Worker",
  "Truck Driver",
  "Firefighter",
  "Nurse",
  "Doctor",
  "Farmer",
  "Fishing Guide",
  "Librarian",
  "Gas Station Clerk",
  "Warehouse Worker",
  "Chef",
  "Janitor",
  "Carpenter",
  "Welder",
  "Cashier",
  "Security Guard",
  "Park Ranger",
  "Mail Carrier",
  "Factory Worker",
  "Radio Technician",
  "Used Car Salesperson",
  "Pest Control Worker"
];

//
// CONDITIONS
//

const conditions = [
  "Recently Turned",
  "Fresh Infection",
  "Muddy",
  "Rain-Soaked",
  "Partially Decomposed",
  "Advanced Decay",
  "Severely Decayed",
  "Sun-Bleached",
  "Blood-Covered",
  "Burned",
  "Waterlogged",
  "Road-Worn",
  "Emaciated",
  "Filthy"
];

//
// CLOTHING
//

const tops = [
  "T-Shirt",
  "Band T-Shirt",
  "Hoodie",
  "Flannel Shirt",
  "Plaid Shirt",
  "Denim Jacket",
  "Leather Jacket",
  "Business Shirt",
  "Prison Uniform Shirt",
  "Police Uniform Shirt",
  "Military Jacket",
  "Fishing Vest",
  "Safety Vest",
  "Mechanic Shirt",
  "Work Shirt",
  "Nurse Scrubs",
  "Chef Jacket",
  "Track Jacket",
  "Raincoat"
];

const pants = [
  "Jeans",
  "Cargo Pants",
  "Work Pants",
  "Khakis",
  "Sweatpants",
  "Prison Pants",
  "Police Pants",
  "Military Pants",
  "Scrub Pants",
  "Overalls"
];

const shoes = [
  "Sneakers",
  "Running Shoes",
  "Work Boots",
  "Combat Boots",
  "Hiking Boots",
  "Sandals",
  "Dress Shoes",
  "Steel-Toe Boots",
  "Loafers"
];

//
// ACCESSORIES
//

const hats = [
  "Baseball Cap",
  "Trucker Cap",
  "Cowboy Hat",
  "Beanie",
  "Straw Hat",
  "Military Beret",
  "Hard Hat",
  "Bandana",
  "Fishing Hat"
];

const glasses = [
  "Prescription Glasses",
  "Reading Glasses",
  "Aviators",
  "Sunglasses",
  "Broken Glasses",
  "Safety Glasses"
];

const necklaces = [
  "Gold Chain",
  "Silver Chain",
  "Crucifix",
  "Dog Tags",
  "Heart Pendant",
  "Locket"
];

const earrings = [
  "Gold Hoops",
  "Silver Hoops",
  "Pearl Studs",
  "Star Earrings"
];

//
// FEATURES
//

const features = [
  "Missing Ear",
  "Broken Nose",
  "Collapsed Jaw",
  "Missing Fingers",
  "Deep Bite Marks",
  "Burn Scars",
  "Missing Eye",
  "Tattoo Sleeve",
  "Sunken Eyes",
  "Broken Wrist",
  "Ripped Uniform",
  "Bandaged Arm"
];

//
// STUCK WEAPONS
//

const embeddedWeapons = [
  "Letter Opener",
  "Scissors",
  "Fork",
  "Butter Knife",
  "Kitchen Knife",
  "Bread Knife",
  "Meat Cleaver",
  "Wooden Spoon",
  "Metal Spatula",
  "Can Opener",
  "Pen",
  "Pencil",
  "Hammer",
  "Screwdriver",
  "Wrench",
  "Pipe Wrench",
  "Garden Trowel",
  "Ice Pick",
  "Crowbar",
  "Metal Pipe",
  "Hatchet",
  "Shovel",
  "Garden Fork",
  "Pitchfork",
  "Sickle",
  "Baseball Bat",
  "Golf Club",
  "Hockey Stick",
  "Fire Axe",
  "Wood Axe",
  "Hunting Knife",
  "Machete",
  "Katana"
];

const woundLocations = [
  "shoulder",
  "chest",
  "back",
  "arm",
  "thigh",
  "neck",
  "torso",
  "side"
];

//
// LOOT (MOSTLY NOTHING)
//

const commonLoot = [
  "Wallet",
  "Photograph",
  "House Key",
  "Lighter",
  "Bandages",
  "Comb",
  "Candy",
  "Notebook",
  "Pen",
  "Cigarettes",
  "Map Scrap",
  "Business Card"
];

const uncommonLoot = [
  "Car Key",
  "Flashlight",
  "Walkie Talkie",
  "Dog Tags",
  "Pocket Knife",
  "Painkillers"
];

const rareLoot = [
  "Annotated Map",
  "Generator Magazine",
  "Safe Key",
  "Police Armory Key",
  "Emergency Radio"
];

//
// GENERATORS
//

function generateName() {
  const roll = Math.random();

  if (roll < 0.005) return pick(secretNames);
  if (roll < 0.05) return pick(legendaryNames);
  if (roll < 0.20) return pick(funnyNames);

  return `${pick(firstNames)} ${pick(nounLastNames)}`;
}

function generateLoot() {
  const roll = Math.random();

  if (roll < 0.65) return [];

  if (roll < 0.85)
    return [pick(commonLoot)];

  if (roll < 0.95)
    return [
      pick(commonLoot),
      pick(commonLoot)
    ];

  if (roll < 0.99)
    return [pick(uncommonLoot)];

  return [pick(rareLoot)];
}

function generateZombie() {
  const accessories = [];

  if (chance(0.20)) accessories.push(`🧢 ${pick(hats)}`);
  if (chance(0.15)) accessories.push(`👓 ${pick(glasses)}`);
  if (chance(0.08)) accessories.push(`📿 ${pick(necklaces)}`);
  if (chance(0.10)) accessories.push(`💎 ${pick(earrings)}`);
  if (chance(0.18)) accessories.push(`⌚ Wristwatch`);

  let weapon = null;

  if (chance(0.07)) {
    weapon =
      `${pick(embeddedWeapons)} stuck in ${pick(woundLocations)}`;
  }

  return {
    name: generateName(),
    gender: chance(0.5) ? "♂" : "♀",
    age: Math.floor(Math.random() * 53) + 18,
    town: pick(towns),
    occupation: pick(occupations),
    type: chance(0.15) ? "Sprinter" : "Shambler",
    condition: pick(conditions),
    top: pick(tops),
    pants: pick(pants),
    shoes: pick(shoes),
    accessory: accessories,
    feature: pick(features),
    weapon,
    loot: generateLoot()
  };
}

function renderZombie(z) {
  let output = `☠️ This is how you died:\n\n`;

  output += `${z.name} ${z.gender}\n`;
  output += `${z.town} • Age ${z.age}\n\n`;

  output += `${z.type}\n`;
  output += `${z.condition}\n\n`;

  output += `${z.occupation}\n\n`;

  output += `👕 ${z.top}\n`;
  output += `👖 ${z.pants}\n`;
  output += `👞 ${z.shoes}\n`;

  if (z.accessory.length > 0) {
    output += `\n${z.accessory.join("\n")}\n`;
  }

  if (z.weapon) {
    output += `\n🔪 ${z.weapon}\n`;
  }

  output += `\n🩹 ${z.feature}\n`;

  output += `\n🎒 Loot`;

  if (z.loot.length === 0) {
    output += `: None`;
  } else {
    output += `:\n`;
    z.loot.forEach(item => {
      output += `• ${item}\n`;
    });
  }

  return output;
}

export default {
  async fetch() {
    const zombie = generateZombie();

    return new Response(
      JSON.stringify({
        text: renderZombie(zombie),
        zombie
      }, null, 2),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
