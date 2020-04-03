const recipe = [
    {
        dishName: "jajecznica",
        items: [
            {name: 'jajko', unit: 'szt', count: 2},
            {name: 'masło', unit: 'g', count: 50}
        ],
        desc: [
            'Wziąć patelnię, położyć na niej odpowiednią ilość masła',
            'Nastawić palnik na sredni płomień i rozpuścić masło',
            'Wbić jajka na rozgrzaną patelnię i mieszać do momentu ścięcia białka. Nie zapomnij posolić!'
        ],
        id: 1,
        funny: "- Znana i lubiana! A jaka pożywna... -",
    },
    {
        dishName: "wodzionka",
        items: [
            {name: 'czosnek', unit: 'ząbki', count: 2},
            {name: 'woda', unit: 'ml', count: 250},
            {name: 'chleb', unit: 'kromki', count: 2}
        ],
        desc: [
            'Zagotować wodę w czajniku. Czosnek przecisnąć przez wyciskarkę, kromki chleba pokroić w kosteczkę',
            'Umieścić rozdrobniony czosnek i chlebowe grzanki w misce. Zalać odpowiednią ilością gorącej wody',
            'Dodać przyprawy - szczególnie pieprz i sól'
        ],
        id: 2,
        funny: "- Mmm wodzionka, suchy chlyb i wody szklonka! -",
    },
    {
        dishName: "chleb z masłem",
        items: [
            {name: 'masło', unit: 'g', count: 50},
            {name: 'chleb', unit: 'kromki', count: 2}
        ],
        desc: [
            'Ukroić tyle kromek chleba na ile masz ochotę (domyślnie 2)',
            'Posmarować wybraną stronę warstwą masła',
            'Celebrować krótką chwilę zapomnienia, delektując się tym wybornym posiłkiem'
        ],
        id: 3,
        funny: "- Klasyka gatunku -",
    }
];

export default recipe;