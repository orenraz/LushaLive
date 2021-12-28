const mockCharacters = [
    {
        "url": "https://www.anapioficeandfire.com/api/characters/2",
        "name": "Walder",
        "gender": "Male",
        "culture": "a",
        "born": "a",
        "died": false,
        "titles": [
            "a"
        ],
        "aliases": [
            "Hodor"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/12",
        "name": "Balon Greyjoy",
        "gender": "Male",
        "culture": "",
        "born": "",
        "died": true,
        "titles": [
            "Iron King",
            "King of the Isles and the North",
            "King of Salt and Rock",
            "Son of the Sea Wind",
            "Lord Reaper of Pyke",
            "The Greyjoy",
            "Captain of the Great Kraken"
        ],
        "aliases": [
            "Balon the Brave",
            "Balon the Blessed",
            "Balon the Twice Crowned",
            "Balon the Widowmaker",
            "The Kraken King"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/13",
        "name": "Chayle",
        "gender": "Male",
        "culture": "",
        "born": "",
        "died": true,
        "titles": [
            "Septon"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/14",
        "name": "Gillam",
        "gender": "Male",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Brother"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/15",
        "name": "High Septon",
        "gender": "Male",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "High Septon",
            "His High Holiness",
            "Father of the Faithful",
            "Voice of the Seven on Earth"
        ],
        "aliases": [
            "The High Sparrow"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/16",
        "name": "Margaery Tyrell",
        "gender": "Female",
        "culture": "Westeros",
        "born": "In 283 AC, at Highgarden",
        "died": false,
        "titles": [
            "Queen of the Seven Kingdoms"
        ],
        "aliases": [
            "The Little Queen",
            "The Little Rose",
            "Maid Margaery"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/17",
        "name": "Melicent",
        "gender": "Female",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Septa"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/18",
        "name": "Meribald",
        "gender": "Male",
        "culture": "",
        "born": "In 247 AC or 248 AC, at the riverlands",
        "died": false,
        "titles": [
            "Septon"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/19",
        "name": "Moelle",
        "gender": "Female",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Septa"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/20",
        "name": "Mordane",
        "gender": "Female",
        "culture": "",
        "born": "",
        "died": true,
        "titles": [
            "Septa"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/21",
        "name": "Nysterica",
        "gender": "Female",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Septa"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/22",
        "name": "Ollidor",
        "gender": "Male",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Septon"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/23",
        "name": "Osmynd",
        "gender": "Male",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Septon"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/24",
        "name": "Raynard",
        "gender": "Male",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Septon"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/25",
        "name": "Scolera",
        "gender": "Female",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Septa"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/26",
        "name": "Torbert",
        "gender": "Male",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Septon"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/27",
        "name": "Tywin Lannister",
        "gender": "Male",
        "culture": "",
        "born": "In 242 AC",
        "died": true,
        "titles": [
            "Lord of Casterly Rock",
            "Shield of Lannisport",
            "Warden of the West",
            "Hand of the King",
            "Savior of the City (of King's Landing)"
        ],
        "aliases": [
            "The Lion of Lannister",
            "The Old Lion",
            "The Great Lion of the Rock"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/28",
        "name": "Unella",
        "gender": "Female",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Septa"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/29",
        "name": "Abelar Hightower",
        "gender": "Male",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Ser"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/30",
        "name": "Addam Frey",
        "gender": "Male",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Ser"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/31",
        "name": "Addam Marbrand",
        "gender": "Male",
        "culture": "",
        "born": "",
        "died": false,
        "titles": [
            "Ser",
            "Commander of the City Watch"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/32",
        "name": "Addam Osgrey",
        "gender": "Male",
        "culture": "",
        "born": "In 183 AC or 184 AC",
        "died": true,
        "titles": [
            ""
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/33",
        "name": "Addam Velaryon",
        "gender": "Male",
        "culture": "Valyrian",
        "born": "In 114 AC, at Hull",
        "died": true,
        "titles": [
            "Ser"
        ],
        "aliases": [
            "Addam of Hull"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/34",
        "name": "Addison Hill",
        "gender": "Male",
        "culture": "",
        "born": "At Cornfield",
        "died": false,
        "titles": [
            "Ser",
            "Lord Commander of the Kingsguard"
        ],
        "aliases": [
            "The Bastard of Cornfield"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/35",
        "name": "Aegon Blackfyre",
        "gender": "Male",
        "culture": "Valyrian",
        "born": "In 184 AC",
        "died": true,
        "titles": [
            ""
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/36",
        "name": "Aegon Frey",
        "gender": "Male",
        "culture": "",
        "born": "In 249 AC (roughly)",
        "died": true,
        "titles": [
            ""
        ],
        "aliases": [
            "Jinglebell"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/37",
        "name": "Aegon Frey",
        "gender": "Male",
        "culture": "",
        "born": "In or between 253 AC and 272 AC",
        "died": false,
        "titles": [
            ""
        ],
        "aliases": [
            "Aegon Bloodborn"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/38",
        "name": "Aegon I",
        "gender": "Male",
        "culture": "",
        "born": "27 BC, at Dragonstone",
        "died": true,
        "titles": [
            "King of All Westeros",
            "Shield of His People",
            "King of the Andals, the Rhoynar and the First Men",
            "Lord of the Seven Kingdoms",
            "Protector of the Realm",
            "Lord of Dragonstone"
        ],
        "aliases": [
            "Aegon the Conqueror",
            "Aegon the Dragon",
            "Aegon the Dragonlord"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/39",
        "name": "Aegon II",
        "gender": "Male",
        "culture": "",
        "born": "107 AC, at King's Landing",
        "died": true,
        "titles": [
            "King of the Andals, the Rhoynar and the First Men",
            "Lord of the Seven Kingdoms",
            "Protector of the Realm"
        ],
        "aliases": [
            "Aegon the Elder",
            "Aegon the Usurper"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/40",
        "name": "Aegon III",
        "gender": "Male",
        "culture": "Valyrian",
        "born": "120 AC, at Dragonstone",
        "died": true,
        "titles": [
            "King of the Andals, the Rhoynar and the First Men",
            "Lord of the Seven Kingdoms",
            "Protector of the Realm"
        ],
        "aliases": [
            "Aegon the Younger",
            "Aegon the Dragonbane",
            "Aegon the Unlucky",
            "The Broken King"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/41",
        "name": "Aegon IV",
        "gender": "Male",
        "culture": "",
        "born": "135 AC, at King's Landing",
        "died": true,
        "titles": [
            "King of the Andals, the Rhoynar and the First Men",
            "Lord of the Seven Kingdoms",
            "Protector of the Realm"
        ],
        "aliases": [
            "Aegon the Unworthy"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/42",
        "name": "Aegon Targaryen",
        "gender": "Male",
        "culture": "Valyrian",
        "born": "In 281 AC or 282 AC, at Dragonstone",
        "died": true,
        "titles": [
            ""
        ],
        "aliases": [
            "Young Griff"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/43",
        "name": "Aegon Targaryen",
        "gender": "Male",
        "culture": "Valyrian",
        "born": "In 26 AC",
        "died": true,
        "titles": [
            "Prince"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/44",
        "name": "Aegon Targaryen",
        "gender": "Male",
        "culture": "Valyrian",
        "born": "",
        "died": false,
        "titles": [
            "Prince"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/45",
        "name": "Aegon Targaryen",
        "gender": "Male",
        "culture": "Valyrian",
        "born": "In or between 50 AC and 59 AC",
        "died": false,
        "titles": [
            "Prince"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/46",
        "name": "Aegon V",
        "gender": "Male",
        "culture": "",
        "born": "200 AC, at King's Landing",
        "died": true,
        "titles": [
            "King of the Andals, the Rhoynar and the First Men",
            "Lord of the Seven Kingdoms",
            "Protector of the Realm"
        ],
        "aliases": [
            "Aegon the Unlikely",
            "Aegon the Fortunate",
            "The Prince Who Was An Eggg"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/47",
        "name": "Aegor Rivers",
        "gender": "Male",
        "culture": "",
        "born": "In 172 AC",
        "died": true,
        "titles": [
            "Ser"
        ],
        "aliases": [
            "Bittersteel"
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/48",
        "name": "Aelinor Penrose",
        "gender": "Female",
        "culture": "Valyrian",
        "born": "",
        "died": false,
        "titles": [
            "Queen"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/49",
        "name": "Aemma Arryn",
        "gender": "Female",
        "culture": "",
        "born": "In 82 AC",
        "died": true,
        "titles": [
            "Queen"
        ],
        "aliases": [
            ""
        ]
    },
    {
        "url": "https://www.anapioficeandfire.com/api/characters/50",
        "name": "Aemon Blackfyre",
        "gender": "Male",
        "culture": "Valyrian",
        "born": "In 184 AC",
        "died": true,
        "titles": [
            ""
        ],
        "aliases": [
            ""
        ]
    }
];

module.exports = mockCharacters;
