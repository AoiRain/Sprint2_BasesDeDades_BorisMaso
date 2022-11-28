use pizzeriaBorisMaso;
db.createCollection('Locals');
db.createCollection('Clients');
db.createCollection('Comandes');
db.Locals.insertMany(
    [
        {
            "Nom": "Pizzeria Valken1",
            "Adreca": {
                "Carrer": "Avinguda de Madrid",
                "Numero": 78,
                "Pis": 0,
                "Localitat": "Barcelona",
                "Provincia": "Barcelona",
                "CP": "08019",
                "Pais": "Espana"
            },
            "Telefon": "934907643",
            "NIF": "A12459892",
            "Categories producte": [
                {
                    "Nom": "Carn",
                    "CategoriaID": "1768"
                },
                {
                    "Nom": "Sense carn",
                    "CategoriaProducteID": "1769"
                },
                {
                    "Nom": "Veganes",
                    "CategoriaProducteID": "1770"
                }
            ],
            "Producte": [
                
                {
                    "Nom": "Pizza barbacoa",
                    "Descripció": "Tomaquet, orenga, formatge, carn picada i salsa barbacoa",
                    "Imatge": "www.imatgepizza1.com",
                    "Preu": 10,
                    "CategoriaID": "1768",
                    "ProducteID": "2132"
                },
                {
                    "Nom": "Pizza quatre formatges",
                    "Descripció": "Tomaquet, orenga, formatge blau, de cabra, de mozzarella i gorgonzola",
                    "Imatge": "www.imatgepizza2.com",
                    "Preu": 10,
                    "CategoriaID": "1769",
                    "ProducteID": "2133"
                },
                {
                    "Nom": "Pizza vegana",
                    "Descripció": "Tomaquet, orenga, xampinyons, alberginies i salsa vegana",
                    "Imatge":"www.imatgepizza3.com",
                    "Preu": 10,
                    "CategoriaID": "1770",
                    "ProducteID": "2134"
                },
                {
                    "Nom": "Haburguesa americana",
                    "Descripció": "Carn, formatge, tomaquet, ou ferrat, enciam i maionesa",
                    "Imatge": "www.imatgehamburguesa1.com",
                    "Preu": 8,
                    "CategoriaID": "1768",
                    "ProducteID": "3145"
                },
                {
                    "Nom": "Hamburguesa vegetariana",
                    "Descripció": "Carn beyond, formatge, tomaquet, enciam i salsa de iogurt",
                    "Imatge": "www.imatgehamburguesa2.com",
                    "Preu": 8,
                    "CategoriaID": "1769",
                    "ProducteID": "3146"
                },
                {
                    "Nom": "Hamburguesa Vegana",
                    "Descripció": "Carn beyond, tomaquet, enciam, alberginia i salsa vegana",
                    "Imatge": "www.imatgehamburguesa3.com",
                    "Preu": 8,
                    "CategoriaID": "1770",
                    "ProducteID": "3147"
                },
                {
                    "Nom": "Coca-cola",
                    "Descripció": "Beguda de cola amb gas",
                    "Imatge": "www.imatgebeguda1",
                    "Preu": 2,
                    "ProducteID": "6547"
                },
                {
                    "Nom": "Aigua",
                    "Descripció": "Aigua de manantial",
                    "Imatge": "www.imatgebeguda2",
                    "Preu": 2,
                    "ProducteID": "6548"
                }
            ],
            "Treballadors": [
                {
                    "Nom": "Jordi",
                    "Cognoms": "Cami Valldaura",
                    "NIF": "46578905F",
                    "Telefon": "456328967",
                    "Posicio": "cuiner",
                    "EmpleatID": "7865"
                },
                {
                    "Nom": "Maura",
                    "Cognoms": "Amadi Vilanova",
                    "NIF": "45634577S",
                    "Telefon": "456789765",
                    "Posició": "Repartidor",
                    "EmpleatID": "7866"
                }
            ],
            "LocalID": "7346"
        },
        {
            "Nom": "Pizzeria Valken2",
            "Adreca": {
                "Carrer": "Viladomat",
                "Numero": 12,
                "Pis": 0,
                "Localitat": "Girona",
                "Provincia": "Girona",
                "CP": "17003",
                "Pais": "Espana"
            },
            "Telefon": "934976545",
            "NIF": "B12089872",
            "Categories producte": [
                {
                    "Nom": "Carn",
                    "CategoriaID": "1768"
                },
                {
                    "Nom": "Sense carn",
                    "CategoriaProducteID": "1769"
                },
                {
                    "Nom": "Veganes",
                    "CategoriaProducteID": "1770"
                }
            ],
            "Producte": [
                
                {
                    "Nom": "Pizza barbacoa",
                    "Descripció": "Tomaquet, orenga, formatge, carn picada i salsa barbacoa",
                    "Imatge": "www.imatgepizza1.com",
                    "Preu": 10,
                    "CategoriaID": "1768",
                    "ProducteID": "2132"
                },
                {
                    "Nom": "Pizza quatre formatges",
                    "Descripció": "Tomaquet, orenga, formatge blau, de cabra, de mozzarella i gorgonzola",
                    "Imatge": "www.imatgepizza2.com",
                    "Preu": 10,
                    "CategoriaID": "1769",
                    "ProducteID": "2133"
                },
                {
                    "Nom": "Pizza vegana",
                    "Descripció": "Tomaquet, orenga, xampinyons, alberginies i salsa vegana",
                    "Imatge":"www.imatgepizza3.com",
                    "Preu": 10,
                    "CategoriaID": "1770",
                    "ProducteID": "2134"
                },
                {
                    "Nom": "Haburguesa americana",
                    "Descripció": "Carn, formatge, tomaquet, ou ferrat, enciam i maionesa",
                    "Imatge": "www.imatgehamburguesa1.com",
                    "Preu": 8,
                    "CategoriaID": "1768",
                    "ProducteID": "3145"
                },
                {
                    "Nom": "Hamburguesa vegetariana",
                    "Descripció": "Carn beyond, formatge, tomaquet, enciam i salsa de iogurt",
                    "Imatge": "www.imatgehamburguesa2.com",
                    "Preu": 8,
                    "CategoriaID": "1769",
                    "ProducteID": "3146"
                },
                {
                    "Nom": "Hamburguesa Vegana",
                    "Descripció": "Carn beyond, tomaquet, enciam, alberginia i salsa vegana",
                    "Imatge": "www.imatgehamburguesa3.com",
                    "Preu": 8,
                    "CategoriaID": "1770",
                    "ProducteID": "3147"
                },
                {
                    "Nom": "Coca-cola",
                    "Descripció": "Beguda de cola amb gas",
                    "Imatge": "www.imatgebeguda1",
                    "Preu": 2,
                    "ProducteID": "6547"
                },
                {
                    "Nom": "Aigua",
                    "Descripció": "Aigua de manantial",
                    "Imatge": "www.imatgebeguda2",
                    "Preu": 2,
                    "ProducteID": "6548"
                }
            ],
            "Treballadors": [
                {
                    "Nom": "Laura",
                    "Cognoms": "Vida Masco",
                    "NIF": "45034233F",
                    "Telefon": "659786543",
                    "Posicio": "cuiner",
                    "EmpleatID": "7867"
                },
                {
                    "Nom": "Maura",
                    "Cognoms": "Amadi Vilanova",
                    "NIF": "45678922S",
                    "Telefon": "654342319",
                    "Posició": "Repartidor",
                    "EmpleatID": "7868"
                }
            ],
            "LocalID": "7347"
        }
    ]
);
db.Clients.insertMany(
    [
        {
            "Nom": "Laura",
            "Cognoms": "Garriga Vilafont",
            "Adreca": {
                "Carrer": "Avinguda del Cubi",
                "Numero": 23,
                "Pis": 5,
                "Localitat": "Barcelona",
                "Provincia": "Barcelona",
                "CP": "08017",
                "Pais": "Espana"
            },
            "Telefon": "934907643",
            "CLientID": "8956"
        },
        {
            "Nom": "Sergi",
            "Cognoms": "Viladomat Herrera",
            "Adreca": {
                "Carrer": "Avinguda de Madrid",
                "Numero": 78,
                "Pis": 0,
                "Localitat": "Girona",
                "Provincia": "Girona",
                "CP": "17005",
                "Pais": "Espana"
            },
            "Telefon": "639286547",
            "CLientID": "8957"
        }
        
    ]
);
db.Comandes.insertMany(
    [
        {
           "DataComanda": {"$date": "2022-10-18"},
           "ProducteQuantitat": [
            {
                "ProducteID": "3145",
                "Quantitat": 2
            },
            {
                "ProducteID": "6547",
                "Quantitat": 1
            },
            {
                "ProducteID": "6547",
                "Quantitat": 1
            }
           ],
           "PreuTotal": 20,
           "CategoriaComanda": "Domicili",
           "TreballadorID": "7866",
           "LocalID": "7346",
           "CLientID": "8956",
           "ComandaID": "1345"
        },
        {
            "DataComanda": {"$date": "2022-11-26"},
            "ProducteQuantitat": [
             {
                 "ProducteID": "2134",
                 "Quantitat": 2
             },
             {
                 "ProducteID": "6548",
                 "Quantitat": 1
             }
            ],
            "PreuTotal": 12,
            "CategoriaComanda": "Tenda",
            "LocalID": "7347",
            "CLientID": "8957",
            "ComandaID": "1345"
         }
    ]
);