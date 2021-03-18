function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            realise_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP",
            },
            gold: true
        },
        002: {
            artist: "Adele Laurie",
            title: "Someone Like You",
            realise_year: 2011,
            formats: {
                1: "DC",
                2: "T8",
                3: "PL",
            },
            gold: false

            // Add a record here
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;