db.dropDatabase();
db.createCollection('Locals');
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
            "Producte": [
                
                {
                    "Nom": "Pizza barbacoa",
                    "Descripció": "Tomaquet, orenga, formatge, carn picada i salsa barbacoa",
                    "Imatge": "www.imatgepizza1.com",
                    "Preu": 10,
                    "Categoria": "Carn"
                },
                {
                    "Nom": "Pizza quatre formatges",
                    "Descripció": "Tomaquet, orenga, formatge blau, de cabra, de mozzarella i gorgonzola",
                    "Imatge": "www.imatgepizza2.com",
                    "Preu": 10,
                    "Categoria": "SenseCarn"
                },
                {
                    "Nom": "Pizza vegana",
                    "Descripció": "Tomaquet, orenga, xampinyons, alberginies i salsa vegana",
                    "Imatge":"www.imatgepizza3.com",
                    "Preu": 10,
                    "Categoria": "Vegana"
                },
                {
                    "Nom": "Haburguesa americana",
                    "Descripció": "Carn, formatge, tomaquet, ou ferrat, enciam i maionesa",
                    "Imatge": "www.imatgehamburguesa1.com",
                    "Preu": 8,
                    "Categoria": "Carn"
                },
                {
                    "Nom": "Hamburguesa vegetariana",
                    "Descripció": "Carn beyond, formatge, tomaquet, enciam i salsa de iogurt",
                    "Imatge": "www.imatgehamburguesa2.com",
                    "Preu": 8,
                    "Categoria": "SenseCarn"
                },
                {
                    "Nom": "Hamburguesa Vegana",
                    "Descripció": "Carn beyond, tomaquet, enciam, alberginia i salsa vegana",
                    "Imatge": "www.imatgehamburguesa3.com",
                    "Preu": 8,
                    "Categoria": "Vegana"
                },
                {
                    "Nom": "Coca-cola",
                    "Descripció": "Beguda de cola amb gas",
                    "Imatge": "www.imatgebeguda1",
                    "Preu": 2
                },
                {
                    "Nom": "Aigua",
                    "Descripció": "Aigua de manantial",
                    "Imatge": "www.imatgebeguda2",
                    "Preu": 2
                }
            ],
            "Treballadors": [
                {
                    "Nom": "Jordi",
                    "Cognoms": "Cami Valldaura",
                    "NIF": "46578905F",
                    "Telefon": "456328967",
                    "Posicio": "cuiner"
                },
                {
                    "Nom": "Maura",
                    "Cognoms": "Amadi Vilanova",
                    "NIF": "45634577S",
                    "Telefon": "456789765",
                    "Posició": "Repartidor"
                }
            ],
            "Clients": [
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
                    "Telefon": "934907643"
                }
            ]
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
            "Producte": [
                
                {
                    "Nom": "Pizza barbacoa",
                    "Descripció": "Tomaquet, orenga, formatge, carn picada i salsa barbacoa",
                    "Imatge": "www.imatgepizza1.com",
                    "Preu": 10,
                    "Categoria": "Carn"
                },
                {
                    "Nom": "Pizza quatre formatges",
                    "Descripció": "Tomaquet, orenga, formatge blau, de cabra, de mozzarella i gorgonzola",
                    "Imatge": "www.imatgepizza2.com",
                    "Preu": 10,
                    "Categoria": "SenseCarn"
                },
                {
                    "Nom": "Pizza vegana",
                    "Descripció": "Tomaquet, orenga, xampinyons, alberginies i salsa vegana",
                    "Imatge":"www.imatgepizza3.com",
                    "Preu": 10,
                    "Categoria": "Vegana"
                },
                {
                    "Nom": "Haburguesa americana",
                    "Descripció": "Carn, formatge, tomaquet, ou ferrat, enciam i maionesa",
                    "Imatge": "www.imatgehamburguesa1.com",
                    "Preu": 8,
                    "Categoria": "Carn"
                },
                {
                    "Nom": "Hamburguesa vegetariana",
                    "Descripció": "Carn beyond, formatge, tomaquet, enciam i salsa de iogurt",
                    "Imatge": "www.imatgehamburguesa2.com",
                    "Preu": 8,
                    "Categoria": "SenseCarn"
                },
                {
                    "Nom": "Hamburguesa Vegana",
                    "Descripció": "Carn beyond, tomaquet, enciam, alberginia i salsa vegana",
                    "Imatge": "www.imatgehamburguesa3.com",
                    "Preu": 8,
                    "Categoria": "Vegana"
                },
                {
                    "Nom": "Coca-cola",
                    "Descripció": "Beguda de cola amb gas",
                    "Imatge": "www.imatgebeguda1",
                    "Preu": 2
                },
                {
                    "Nom": "Aigua",
                    "Descripció": "Aigua de manantial",
                    "Imatge": "www.imatgebeguda2",
                    "Preu": 2
                }
            ],
            "Treballadors": [
                {
                    "Nom": "Ismael",
                    "Cognoms": "Gutierrez Guimo",
                    "NIF": "45321566Y",
                    "Telefon": "659348721",
                    "Posicio": "cuiner"
                },
                {
                    "Nom": "Leila",
                    "Cognoms": "Yock Lima",
                    "NIF": "45732400A",
                    "Telefon": "654321976",
                    "Posició": "Repartidor"
                }
            ],
            "Clients": [
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
                    "Telefon": "639286547"
                }
            ]
        }
    ]
);
db.Comandes.insertMany(
    [
        {
            "DataComanda": {"$date": "2022-10-18"},
            "Producte": [
                {
                    "Nom": "Hamburguesa vegetariana",
                    "Descripció": "Carn beyond, formatge, tomaquet, enciam i salsa de iogurt",
                    "Imatge": "www.imatgehamburguesa2.com",
                    "Preu": 8,
                    "Categoria": "SenseCarn",
                    "Quantitat": 2
                },
                {
                    "Nom": "Coca-cola",
                    "Descripció": "Beguda de cola amb gas",
                    "Imatge": "www.imatgebeguda1",
                    "Preu": 2,
                    "Quantitat": 1
                },
                {
                    "Nom": "Aigua",
                    "Descripció": "Aigua de manantial",
                    "Imatge": "www.imatgebeguda2",
                    "Preu": 2,
                    "Quantitat": 1
                } 
            ],
            "PreuTotal": 20,
            "CategoriaComanda": "Domicili",
            "Repartidor":{
                "Nom": "Maura",
                "Cognoms": "Amadi Vilanova",
                "NIF": "45634577S",
                "Telefon": "456789765",
                "Posició": "Repartidor"
            },
            "Local": {
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
                "NIF": "A12459892"
            },
            "Client": {
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
                "Telefon": "934907643"
            },
           "ComandaId": "1345"
        },
        {
            "DataComanda": {"$date": "2022-11-26"},
            "Producte": [
             {
                "Nom": "Pizza vegana",
                "Descripció": "Tomaquet, orenga, xampinyons, alberginies i salsa vegana",
                "Imatge":"www.imatgepizza3.com",
                "Preu": 10,
                "Categoria": "Vegana",
                "Quantitat": 1
             },
             {
                "Nom": "Aigua",
                "Descripció": "Aigua de manantial",
                "Imatge": "www.imatgebeguda2",
                "Preu": 2,
                "Quantitat": 1
            }
            ],
            "PreuTotal": 12,
            "CategoriaComanda": "Tenda",
            "Local": {
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
                "NIF": "B12089872"
            },
            "Client": {
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
                "Telefon": "639286547"
            },
            "ComandaId": "1346"
         }
    ]
);