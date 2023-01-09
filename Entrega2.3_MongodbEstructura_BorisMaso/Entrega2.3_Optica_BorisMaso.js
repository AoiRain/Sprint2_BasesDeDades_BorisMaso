db.dropDatabase();
db.createCollection('Proveidors');
db.createCollection('Clients');
db.Proveidors.insertOne(
    {
        "Nom": "Ulleres Ripastro",
        "Adreca": {
            "Carrer": "Guinoa",
            "Numero": 23,
            "Pis": 4,
            "Ciutat": "Barcelona",
            "CP": "08045",
            "Pais": "Espana"
        },
        "Telefon": "636453421",
        "Fax": "934563782",
        "NIF": "A12059812",
        "Producte": [
            {
                "_id": "1",
                "Marca": "Garivaldi",
                "Graduacio": {
                    "VidreEsquerre": 0.25,
                    "VidreDret": 0.25
                },
                "Montura": "Flotant",
                "Color": "Verd",
                "ColorVidre": {
                    "VidreEsquerre": "Verd",
                    "VidreDret": "Verd"
                },
                "Preu": 150
            },
            {
                "_id": "2",
                "Marca": "Burvundi",
                "Graduacio": {
                    "VidreEsquerre": -0.25,
                    "VidreDret": -0.25
                },
                "Montura": "Metalica",
                "Color": "Negre",
                "ColorVidre": {
                    "VidreEsquerre": "Gris",
                    "VidreDret": "Gris"
                },
                "Preu": 200
            }
        ]
    }
);
db.Proveidors.insertOne(
    {
        "Nom": "Vidres Nika",
        "Adreca": {
            "Carrer": "Guimpo",
            "Numero": 194,
            "Pis": 1,
            "Porta": 1,
            "Ciutat": "Barcelona",
            "CP": "08034",
            "Pais": "Espana"
        },
        "Telefon": "632124567",
        "NIF": "B12009861",
        "Producte": [
            {
                "_id": "3",
                "Marca": "Velvet",
                "Graduacio": {
                    "VidreEsquerre": 0.50,
                    "VidreDret": 0.50
                },
                "Montura": "Pasta",
                "Color": "Burdeus",
                "ColorVidre": {
                    "VidreEsquerre": "Vermell",
                    "VidreDret": "Vermell"
                },
                "Preu": 180
            },
            {
                "_id": "4",
                "Marca": "Giovanni",
                "Graduacio": {
                    "VidreEsquerre": -0.50,
                    "VidreDret": -0.50
                },
                "Montura": "Metalica",
                "Color": "Platejat",
                "ColorVidre": {
                    "VidreEsquerre": "transparent",
                    "VidreDret": "Transparent"
                },
                "Preu": 130
            }
        ]
    }
);
db.Clients.insertOne(
    {
        "_id": "1",
        "Nom": "Roberto Fuentes Amigo",
        "Adreca": {
            "Carrer": "Vallverde",
            "Numero": 18,
            "Pis": 4,
            "Porta": 1,
            "Ciutat": "Barcelona",
            "CP": "08018",
            "Pais": "Espana"
        },
        "CorreuElectronic": "robofont@hotmail.com",
        "DataRegistre": {"$date": "2022-10-22"},
        "ClientRecomendador_id": "",
        "Comandes": {
            "Producte_id": "1",
            "Quantitat": "1",
            "PreuTotal": "150",
            "Treballador": "Jordi Stanuz Ribagorsa",
            "DataVenda": {"$date": "2022-10-24"}
        }
    }
);
db.Clients.insertOne(
    {
        "_id": "2",
        "Nom": "Paula Miro Albino",
        "Adreca": {
            "Carrer": "Rocagran",
            "Numero": 98,
            "Pis": 1,
            "Porta": 1,
            "Ciutat": "Barcelona",
            "CP": "08014",
            "Pais": "Espana"
        },
        "CorreuElectronic": "plmr@gmail.com",
        "DataRegistre": {"$date": "2022-11-16"},
        "ClientRecomendador_id": "1",
        "Comandes": {
            "Producte_id": "3",
            "Quantitat": "1",
            "PreuTotal": "180",
            "Treballador": "Laia Vilanova Cami",
            "DataVenda": {"$date": "2022-11-18"}
        }
    }
);