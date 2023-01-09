db.dropDatabase();
db.createCollection('Tendes');
db.createCollection('Productes');
db.createCollection('Clients');
db.Tendes.insertOne(
    {
        "_id": "1",
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
        "Treballadors": [
            {
                "_id": "1",
                "Nom": "Jordi",
                "Cognoms": "Cami Valldaura",
                "NIF": "46578905F",
                "Telefon": "456328967",
                "Posicio": "cuiner"
            },
            {
                "_id": "2",
                "Nom": "Maura",
                "Cognoms": "Amadi Vilanova",
                "NIF": "45634577S",
                "Telefon": "456789765",
                "Posició": "Repartidor"
            }
        ]
    }
);
db.Tendes.insertOne(
    {
        "_id": "2",
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
        "Treballadors": [
            {
                "_id": "1",
                "Nom": "Ismael",
                "Cognoms": "Gutierrez Guimo",
                "NIF": "45321566Y",
                "Telefon": "659348721",
                "Posicio": "cuiner"
            },
            {
                "_id": "2",
                "Nom": "Leila",
                "Cognoms": "Yock Lima",
                "NIF": "45732400A",
                "Telefon": "654321976",
                "Posició": "Repartidor"
            }
        ]
    }
);
db.Productes.insertOne(
    {
        "_id": "1",
        "Nom": "Pizza barbacoa",
        "Descripció": "Tomaquet, orenga, formatge, carn picada i salsa barbacoa",
        "Imatge": "www.imatgepizza1.com",
        "Preu": 10,
        "Categoria": "Carn"
    }
);
db.Productes.insertOne(
    {
        "_id": "2",
        "Nom": "Pizza quatre formatges",
        "Descripció": "Tomaquet, orenga, formatge blau, de cabra, de mozzarella i gorgonzola",
        "Imatge": "www.imatgepizza2.com",
        "Preu": 10,
        "Categoria": "SenseCarn"
    }
);
db.Productes.insertOne(
    {
        "_id": "3",
        "Nom": "Pizza vegana",
        "Descripció": "Tomaquet, orenga, xampinyons, alberginies i salsa vegana",
        "Imatge":"www.imatgepizza3.com",
        "Preu": 10,
        "Categoria": "Vegana"
    }
);
db.Productes.insertOne(
    {
        "_id": "4",
        "Nom": "Haburguesa americana",
        "Descripció": "Carn, formatge, tomaquet, ou ferrat, enciam i maionesa",
        "Imatge": "www.imatgehamburguesa1.com",
        "Preu": 8,
        "Categoria": "Carn"
    }
);
db.Productes.insertOne(
    {
        "_id": "5",
        "Nom": "Hamburguesa vegetariana",
        "Descripció": "Carn beyond, formatge, tomaquet, enciam i salsa de iogurt",
        "Imatge": "www.imatgehamburguesa2.com",
        "Preu": 8,
        "Categoria": "SenseCarn"
    }
);
db.Productes.insertOne(
    {
        "_id": "6",
        "Nom": "Hamburguesa Vegana",
        "Descripció": "Carn beyond, tomaquet, enciam, alberginia i salsa vegana",
        "Imatge": "www.imatgehamburguesa3.com",
        "Preu": 8,
        "Categoria": "Vegana"
    }
);
db.Productes.insertOne(
    {
        "_id": "7",
        "Nom": "Coca-cola",
        "Descripció": "Beguda de cola amb gas",
        "Imatge": "www.imatgebeguda1",
        "Preu": 2
    }
);
db.Productes.insertOne(
    {
        "_id": "8",
        "Nom": "Aigua",
        "Descripció": "Aigua de manantial",
        "Imatge": "www.imatgebeguda2",
        "Preu": 2
    }
);
db.Clients.insertOne(
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
        "Comandes": {
            "DataComanda": {"$date": "2022-10-18"},
            "Productes_id": ["1","8"],
            "PreuTotal": 12,
            "CategoriaComanda": "Domicili",
            "Repartidor_id": "2",
            "Local_id": "1"
        }
    }
);
db.Clients.insertOne(
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
        "Comandes": {
            "DataComanda": {"$date": "2022-11-26"},
            "Productes_id": ["4","7"],
            "PreuTotal": 10,
            "CategoriaComanda": "Domicili",
            "Repartidor_id": "2",
            "Local_id": "2"
        }
    }
);