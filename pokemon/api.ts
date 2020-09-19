import {Pokemon} from "./types";

export default {
  fetch: (): Promise<Pokemon[]> =>
    Promise.resolve([
      {
        id: 1,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/1.png`,
        name: "bulbasaur",
      },
      {
        id: 2,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/2.png`,
        name: "ivysaur",
      },
      {
        id: 3,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/3.png`,
        name: "venusaur",
      },
      {
        id: 4,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/4.png`,
        name: "charmander",
      },
      {
        id: 5,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/5.png`,
        name: "charmeleon",
      },
      {
        id: 6,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/6.png`,
        name: "charizard",
      },
      {
        id: 7,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/7.png`,
        name: "squirtle",
      },
      {
        id: 8,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/8.png`,
        name: "wartortle",
      },
      {
        id: 9,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/9.png`,
        name: "blastoise",
      },
      {
        id: 10,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/10.png`,
        name: "caterpie",
      },
      {
        id: 11,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/11.png`,
        name: "metapod",
      },
      {
        id: 12,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/12.png`,
        name: "butterfree",
      },
      {
        id: 13,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/13.png`,
        name: "weedle",
      },
      {
        id: 14,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/14.png`,
        name: "kakuna",
      },
      {
        id: 15,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/15.png`,
        name: "beedrill",
      },
      {
        id: 16,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/16.png`,
        name: "pidgey",
      },
      {
        id: 17,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/17.png`,
        name: "pidgeotto",
      },
      {
        id: 18,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/18.png`,
        name: "pidgeot",
      },
      {
        id: 19,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/19.png`,
        name: "rattata",
      },
      {
        id: 20,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/20.png`,
        name: "raticate",
      },
      {
        id: 21,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/21.png`,
        name: "spearow",
      },
      {
        id: 22,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/22.png`,
        name: "fearow",
      },
      {
        id: 23,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/23.png`,
        name: "ekans",
      },
      {
        id: 24,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/24.png`,
        name: "arbok",
      },
      {
        id: 25,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/25.png`,
        name: "pikachu",
      },
      {
        id: 26,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/26.png`,
        name: "raichu",
      },
      {
        id: 27,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/27.png`,
        name: "sandshrew",
      },
      {
        id: 28,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/28.png`,
        name: "sandslash",
      },
      {
        id: 29,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/29.png`,
        name: "nidoran♀",
      },
      {
        id: 29,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/29.png`,
        name: "nidoran-f",
      },
      {
        id: 30,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/30.png`,
        name: "nidorina",
      },
      {
        id: 31,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/31.png`,
        name: "nidoqueen",
      },
      {
        id: 32,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/32.png`,
        name: "nidoran♂",
      },
      {
        id: 32,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/32.png`,
        name: "nidoran-m",
      },
      {
        id: 33,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/33.png`,
        name: "nidorino",
      },
      {
        id: 34,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/34.png`,
        name: "nidoking",
      },
      {
        id: 35,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/35.png`,
        name: "clefairy",
      },
      {
        id: 36,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/36.png`,
        name: "clefable",
      },
      {
        id: 37,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/37.png`,
        name: "vulpix",
      },
      {
        id: 38,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/38.png`,
        name: "ninetales",
      },
      {
        id: 39,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/39.png`,
        name: "jigglypuff",
      },
      {
        id: 40,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/40.png`,
        name: "wigglytuff",
      },
      {
        id: 41,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/41.png`,
        name: "zubat",
      },
      {
        id: 42,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/42.png`,
        name: "golbat",
      },
      {
        id: 43,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/43.png`,
        name: "oddish",
      },
      {
        id: 44,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/44.png`,
        name: "gloom",
      },
      {
        id: 45,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/45.png`,
        name: "vileplume",
      },
      {
        id: 46,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/46.png`,
        name: "paras",
      },
      {
        id: 47,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/47.png`,
        name: "parasect",
      },
      {
        id: 48,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/48.png`,
        name: "venonat",
      },
      {
        id: 49,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/49.png`,
        name: "venomoth",
      },
      {
        id: 50,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/50.png`,
        name: "diglett",
      },
      {
        id: 51,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/51.png`,
        name: "dugtrio",
      },
      {
        id: 52,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/52.png`,
        name: "meowth",
      },
      {
        id: 53,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/53.png`,
        name: "persian",
      },
      {
        id: 54,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/54.png`,
        name: "psyduck",
      },
      {
        id: 55,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/55.png`,
        name: "golduck",
      },
      {
        id: 56,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/56.png`,
        name: "mankey",
      },
      {
        id: 57,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/57.png`,
        name: "primeape",
      },
      {
        id: 58,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/58.png`,
        name: "growlithe",
      },
      {
        id: 59,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/59.png`,
        name: "arcanine",
      },
      {
        id: 60,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/60.png`,
        name: "poliwag",
      },
      {
        id: 61,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/61.png`,
        name: "poliwhirl",
      },
      {
        id: 62,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/62.png`,
        name: "poliwrath",
      },
      {
        id: 63,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/63.png`,
        name: "abra",
      },
      {
        id: 64,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/64.png`,
        name: "kadabra",
      },
      {
        id: 65,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/65.png`,
        name: "alakazam",
      },
      {
        id: 66,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/66.png`,
        name: "machop",
      },
      {
        id: 67,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/67.png`,
        name: "machoke",
      },
      {
        id: 68,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/68.png`,
        name: "machamp",
      },
      {
        id: 69,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/69.png`,
        name: "bellsprout",
      },
      {
        id: 70,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/70.png`,
        name: "weepinbell",
      },
      {
        id: 71,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/71.png`,
        name: "victreebel",
      },
      {
        id: 72,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/72.png`,
        name: "tentacool",
      },
      {
        id: 73,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/73.png`,
        name: "tentacruel",
      },
      {
        id: 74,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/74.png`,
        name: "geodude",
      },
      {
        id: 75,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/75.png`,
        name: "graveler",
      },
      {
        id: 76,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/76.png`,
        name: "golem",
      },
      {
        id: 77,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/77.png`,
        name: "ponyta",
      },
      {
        id: 78,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/78.png`,
        name: "rapidash",
      },
      {
        id: 79,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/79.png`,
        name: "slowpoke",
      },
      {
        id: 80,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/80.png`,
        name: "slowbro",
      },
      {
        id: 81,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/81.png`,
        name: "magnemite",
      },
      {
        id: 82,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/82.png`,
        name: "magneton",
      },
      {
        id: 83,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/83.png`,
        name: "farfetch'd",
      },
      {
        id: 83,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/83.png`,
        name: "farfetchd",
      },
      {
        id: 84,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/84.png`,
        name: "doduo",
      },
      {
        id: 85,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/85.png`,
        name: "dodrio",
      },
      {
        id: 86,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/86.png`,
        name: "seel",
      },
      {
        id: 87,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/87.png`,
        name: "dewgong",
      },
      {
        id: 88,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/88.png`,
        name: "grimer",
      },
      {
        id: 89,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/89.png`,
        name: "muk",
      },
      {
        id: 90,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/90.png`,
        name: "shellder",
      },
      {
        id: 91,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/91.png`,
        name: "cloyster",
      },
      {
        id: 92,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/92.png`,
        name: "gastly",
      },
      {
        id: 93,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/93.png`,
        name: "haunter",
      },
      {
        id: 94,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/94.png`,
        name: "gengar",
      },
      {
        id: 95,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/95.png`,
        name: "onix",
      },
      {
        id: 96,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/96.png`,
        name: "drowzee",
      },
      {
        id: 97,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/97.png`,
        name: "hypno",
      },
      {
        id: 98,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/98.png`,
        name: "krabby",
      },
      {
        id: 99,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/99.png`,
        name: "kingler",
      },
      {
        id: 100,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/100.png`,
        name: "voltorb",
      },
      {
        id: 101,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/101.png`,
        name: "electrode",
      },
      {
        id: 102,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/102.png`,
        name: "exeggcute",
      },
      {
        id: 103,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/103.png`,
        name: "exeggutor",
      },
      {
        id: 104,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/104.png`,
        name: "cubone",
      },
      {
        id: 105,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/105.png`,
        name: "marowak",
      },
      {
        id: 106,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/106.png`,
        name: "hitmonlee",
      },
      {
        id: 107,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/107.png`,
        name: "hitmonchan",
      },
      {
        id: 108,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/108.png`,
        name: "lickitung",
      },
      {
        id: 109,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/109.png`,
        name: "koffing",
      },
      {
        id: 110,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/110.png`,
        name: "weezing",
      },
      {
        id: 111,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/111.png`,
        name: "rhyhorn",
      },
      {
        id: 112,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/112.png`,
        name: "rhydon",
      },
      {
        id: 113,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/113.png`,
        name: "chansey",
      },
      {
        id: 114,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/114.png`,
        name: "tangela",
      },
      {
        id: 115,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/115.png`,
        name: "kangaskhan",
      },
      {
        id: 116,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/116.png`,
        name: "horsea",
      },
      {
        id: 117,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/117.png`,
        name: "seadra",
      },
      {
        id: 118,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/118.png`,
        name: "goldeen",
      },
      {
        id: 119,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/119.png`,
        name: "seaking",
      },
      {
        id: 120,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/120.png`,
        name: "staryu",
      },
      {
        id: 121,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/121.png`,
        name: "starmie",
      },
      {
        id: 122,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/122.png`,
        name: "mr. mime",
      },
      {
        id: 122,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/122.png`,
        name: "mr-mime",
      },
      {
        id: 122,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/122.png`,
        name: "mr mime",
      },
      {
        id: 122,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/122.png`,
        name: "mrmime",
      },
      {
        id: 123,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/123.png`,
        name: "scyther",
      },
      {
        id: 124,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/124.png`,
        name: "jynx",
      },
      {
        id: 125,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/125.png`,
        name: "electabuzz",
      },
      {
        id: 126,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/126.png`,
        name: "magmar",
      },
      {
        id: 127,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/127.png`,
        name: "pinsir",
      },
      {
        id: 128,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/128.png`,
        name: "tauros",
      },
      {
        id: 129,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/129.png`,
        name: "magikarp",
      },
      {
        id: 130,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/130.png`,
        name: "gyarados",
      },
      {
        id: 131,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/131.png`,
        name: "lapras",
      },
      {
        id: 132,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/132.png`,
        name: "ditto",
      },
      {
        id: 133,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/133.png`,
        name: "eevee",
      },
      {
        id: 134,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/134.png`,
        name: "vaporeon",
      },
      {
        id: 135,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/135.png`,
        name: "jolteon",
      },
      {
        id: 136,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/136.png`,
        name: "flareon",
      },
      {
        id: 137,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/137.png`,
        name: "porygon",
      },
      {
        id: 138,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/138.png`,
        name: "omanyte",
      },
      {
        id: 139,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/139.png`,
        name: "omastar",
      },
      {
        id: 140,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/140.png`,
        name: "kabuto",
      },
      {
        id: 141,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/141.png`,
        name: "kabutops",
      },
      {
        id: 142,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/142.png`,
        name: "aerodactyl",
      },
      {
        id: 143,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/143.png`,
        name: "snorlax",
      },
      {
        id: 144,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/144.png`,
        name: "articuno",
      },
      {
        id: 145,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/145.png`,
        name: "zapdos",
      },
      {
        id: 146,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/146.png`,
        name: "moltres",
      },
      {
        id: 147,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/147.png`,
        name: "dratini",
      },
      {
        id: 148,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/148.png`,
        name: "dragonair",
      },
      {
        id: 149,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/149.png`,
        name: "dragonite",
      },
      {
        id: 150,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/150.png`,
        name: "mewtwo",
      },
      {
        id: 151,
        image: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/151.png`,
        name: "mew",
      },
    ]),
};
