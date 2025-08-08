const MOONS = [
    {
        month: 0,
        name: "Zarantyr",
        title: "The Storm Moon",
        color: "#F5F5FA", // Pearly white
        dragonmark: "Mark of Storm",
        plane: "Kythri",
        diameterMiles: 1250,
        distanceMiles: 14300,
        inclination: 0.4,
        eccentricity: 0.065,
        albedo: 0.12,
        fullsPerYear: 12,
        phaseJitterRange: 0,
        phaseJitterFrequency: 1,
        phaseJitterMode: "normal",
        anchor_dates: []
    },
    {
        month: 1,
        name: "Olarune",
        title: "The Sentinel Moon",
        color: "#FFC68A", // Pale orange
        dragonmark: "Mark of Sentinel",
        plane: "Lamannia",
        diameterMiles: 950,
        distanceMiles: 22500,
        inclination: 0.6,
        eccentricity: 0.065,
        albedo: 0.10,
        fullsPerYear: 12,
        phaseJitterRange: 0,
        phaseJitterFrequency: 1,
        phaseJitterMode: "normal",
        anchor_dates: [
            {
                event: "The Hunt",
                type: "full",
                month: 7,
                day: 3, // 4 Barrakas
                duration: 24,
                peak_day: 3,
                peak_hour: 21
            }
        ]
    },
    {
        month: 2,
        name: "Therendor",
        title: "The Healer’s Moon",
        color: "#D3D3D3", // Pale gray
        dragonmark: "Mark of Healing",
        plane: "Syrania",
        diameterMiles: 1100,
        distanceMiles: 39000,
        inclination: 0.8,
        eccentricity: 0.065,
        albedo: 0.11,
        fullsPerYear: 12,
        phaseJitterRange: 0,
        phaseJitterFrequency: 1,
        phaseJitterMode: "normal",
        anchor_dates: [
            {
                event: "Long fg;ohg;iodfhgi;odfhjg;kldfhjgdfs;klhjgsd",
                type: "full",
                month: 11,
                day: 25, // 26 Vult
                duration: 72, // 26-28 Vult
                peak_day: 26, // 27 Vult
                peak_hour: 3 // Witching Hour
            }
        ]
    },
    {
        month: 3,
        name: "Eyre",
        title: "The Anvil",
        color: "#C0C0C0", // Silver-gray
        dragonmark: "Mark of Making",
        plane: "Fernia",
        diameterMiles: 1200,
        distanceMiles: 52000,
        inclination: 1.2,
        eccentricity: 0.10,
        albedo: 0.13,
        fullsPerYear: 24,
        phaseJitterRange: 0.5,
        phaseJitterFrequency: 1,
        phaseJitterMode: "positive-only",
        anchor_dates: [
            {
                event: "Long fdgjhfd;kgjhfds;kghjf;klgjfsd;klgjdfs;klgjdsf;klgjdfsk;l",
                type: "full",
                month: 11,
                day: 25, // 26 Vult
                duration: 72, // 26-28 Vult
                peak_day: 26, // 27 Vult
                peak_hour: 3 // Witching Hour
            }
        ]
    },
    {
        month: 4,
        name: "Dravago",
        title: "The Herder’s Moon",
        color: "#E6E6FA", // Pale lavender
        dragonmark: "Mark of Handling",
        plane: "Risia",
        diameterMiles: 2000,
        distanceMiles: 77500,
        inclination: 1.0,
        eccentricity: 0.03,
        albedo: 0.11,
        fullsPerYear: 3,
        phaseJitterRange: 0.5,
        phaseJitterFrequency: 1,
        phaseJitterMode: "negative-only",
        anchor_dates: [
            {
                event: "Long dfgkjhdfkljghdfklgjhdfs;glhdfg;lkjfds;klgjdfs;klgjdfs;klg",
                type: "full",
                month: 11,
                day: 25, // 26 Vult
                duration: 72, // 26-28 Vult
                peak_day: 26, // 27 Vult
                peak_hour: 3 // Witching Hour
            }
        ]
    },
    {
        month: 5,
        name: "Nymm",
        title: "The Crown",
        color: "#FFD96B", // Pale yellow
        dragonmark: "Mark of Hospitality",
        plane: "Daanvi",
        diameterMiles: 900,
        distanceMiles: 95000,
        inclination: 1.0,
        eccentricity: 0.0,
        albedo: 0.11,
        fullsPerYear: 12,
        phaseJitterRange: 0,
        phaseJitterFrequency: 1,
        phaseJitterMode: "normal",
        anchor_dates: [
            {
                event: "Long fgrhg;jkfdsgh;fkdjsghdfs;klgjfsdk;ljgsdf;kljgsdf;klgjsdf;lkgjdfs",
                type: "full",
                month: 11,
                day: 25, // 26 Vult
                duration: 72, // 26-28 Vult
                peak_day: 26, // 27 Vult
                peak_hour: 3 // Witching Hour
            }
        ]
    },
    {
        month: 6,
        name: "Lharvion",
        title: "The Eye",
        color: "#F5F5F5", // Dull white with black slit
        dragonmark: "Mark of Detection",
        plane: "Xoriat",
        diameterMiles: 1350,
        distanceMiles: 125000,
        inclination: 1.5,
        eccentricity: 0.065,
        albedo: 0.11,
        fullsPerYear: 12,
        phaseJitterRange: 3, // 3 days
        phaseJitterFrequency: 2, // twice per cycle
        phaseJitterMode: "normal",
        anchor_dates: [
            {
                event: "Long dfgkljfdgkl;jfdsg;klfjds;gklfsdjg;klfdsjg;klfdjsg;klsdfj",
                type: "full",
                month: 11,
                day: 25, // 26 Vult
                duration: 72, // 26-28 Vult
                peak_day: 26, // 27 Vult
                peak_hour: 3 // Witching Hour
            }
        ]
    },
    {
        month: 7,
        name: "Barrakas",
        title: "The Lantern",
        color: "#DCDCDC", // Pale gray
        dragonmark: "Mark of Finding",
        plane: "Irian",
        diameterMiles: 1500,
        distanceMiles: 144000,
        inclination: 0.0,
        eccentricity: 0.065,
        albedo: 10,
        fullsPerYear: 12,
        phaseJitterRange: 0,
        phaseJitterFrequency: 1,
        phaseJitterMode: "normal",
        anchor_dates: [
            {
                event: "Long gfdl;jkg;lkjfdsg;kljdfsg;lkfdsjg;klsdfjg;lksdfjg;kldfsjg",
                type: "full",
                month: 11,
                day: 25, // 26 Vult
                duration: 72, // 26-28 Vult
                peak_day: 26, // 27 Vult
                peak_hour: 3 // Witching Hour
            }
        ]
    },
    {
        month: 8,
        name: "Rhaan",
        title: "The Book",
        color: "#9AC0FF", // Pale blue
        dragonmark: "Mark of Scribing",
        plane: "Thelanis",
        diameterMiles: 800,
        distanceMiles: 168000,
        inclination: 0.9,
        eccentricity: 0.065,
        albedo: 0.07,
        fullsPerYear: 12,
        phaseJitterRange: 0,
        phaseJitterFrequency: 1,
        phaseJitterMode: "normal",
        anchor_dates: [
            {
                event: "Spring Equinox", // 27 Therendor
                type: "full",
                month: 2,
                day: 27,
                duration: 24,
                peak_day: 27,
                peak_hour: 12
            },
            {
                event: "Summer Solstice", // 27 Nymm
                type: "full",
                month: 5,
                day: 27,
                duration: 24,
                peak_day: 27,
                peak_hour: 12
            },
            {
                event: "Spring Equinox", // 27 Rhaan
                type: "full",
                month: 8,
                day: 27,
                duration: 24,
                peak_day: 27,
                peak_hour: 12
            },
            {
                event: "Winter Solstice", // 27 Vult
                type: "full",
                month: 11,
                day: 27,
                duration: 24,
                peak_day: 27,
                peak_hour: 12
            }
        ]
    },
    {
        month: 9,
        name: "Sypheros",
        title: "The Shadow",
        color: "#696969", // Smoky gray
        dragonmark: "Mark of Shadow",
        plane: "Mabar",
        diameterMiles: 1200,
        distanceMiles: 193000,
        inclination: 1.3,
        eccentricity: 0.065,
        albedo: 0.01,
        fullsPerYear: 12,
        phaseJitterRange: 0,
        phaseJitterFrequency: 1,
        phaseJitterMode: "normal",
        anchor_dates: [
            {
                event: "Long Shadows", // 26-28 Vult
                type: "full",
                month: 11,
                day: 25,
                duration: 72,
                peak_day: 26, // 27 Vult
                peak_hour: 3 // Witching Hour
            }
        ]
    },
    {
        month: 10,
        name: "Aryth",
        title: "The Gateway",
        color: "#FF4500", // Orange-red
        dragonmark: "Mark of Passage",
        plane: "Dolurrh",
        diameterMiles: 1000,
        distanceMiles: 221000,
        inclination: 0.2,
        eccentricity: 0.065,
        albedo: 0.06,
        fullsPerYear: 4,
        phaseJitterRange: 0,
        phaseJitterFrequency: 1,
        phaseJitterMode: "normal",
        anchor_dates: [
            {
                event: "spring",
                type: "full",
                month: 2,
                day: 1,
                duration: 0,
                peak_day: 1,
                peak_hour: 0
            },
            {
                event: "summer",
                type: "full",
                month: 5,
                day: 1,
                duration: 0,
                peak_day: 1,
                peak_hour: 0
            },
            {
                event: "autumn",
                type: "full",
                month: 8,
                day: 1,
                duration: 0,
                peak_day: 1,
                peak_hour: 0
            },
            {
                event: "winter",
                type: "full",
                month: 11,
                day: 1,
                duration: 0,
                peak_day: 1,
                peak_hour: 0
            }
        ]
    },
    {
        month: 11,
        name: "Vult",
        title: "The Warding Moon",
        color: "#A9A9A9", // Gray and pockmarked
        dragonmark: "Mark of Warding",
        plane: "Shavarath",
        diameterMiles: 1800,
        distanceMiles: 252000,
        inclination: 0.5,
        eccentricity: 0.065,
        albedo: 0.08,
        fullsPerYear: 2,
        phaseJitterRange: 0,
        phaseJitterFrequency: 1,
        phaseJitterMode: "normal",
        anchor_dates: [
            {
                event: "Brightblade", // 12 Nymm
                type: "full",
                month: 5,
                day: 11,
                duration: 24,
                peak_day: 11,
                peak_hour: 12
            }
        ]
    }
];