use opticaBorisMaso;
db.createCollection('Proveidors');
db.createCollection('Clients');
db.createCollection('Vendes');
db.Proveidors.insertMany(
    [
        {
            "Nom": "Opticas Ripastro",
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
            "Producto": [
                {
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
                    "Preu": 150,
                    "ProducteId": "1184"
                },
                {
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
                    "Preu": 200,
                    "ProducteId": "1185"
                }
            ],
            "ProveidorId": "2325"
        },
        {
            "Nom": "Opticas Nika",
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
            "Producto": [
                {
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
                    "Preu": 180,
                    "ProducteId": "2347"
                },
                {
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
                    "Preu": 130,
                    "ProducteId": "2348"
                }
            ],
            "ProveidorId": "2326"
        }
    ]
);
db.Clients.insertMany(
    [
        {
            "Nom": "Roberto Fuentes",
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
            "ClientId": "5432"
        },
        {
            "Nom": "Paula Miro",
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
            "RecomendadorId": "5432",
            "ClientId": "5433"
        }
    ]
);
db.Vendes.insertMany(
    [
        {
            "Comanda": [
                {
                    "ProducteId": "2347",
                    "Cantitat": 1
                }
            ],
            "PreuTotal": 180,
            "ClientId": "5432",
            "Empleat": "Jordi Stanuz",
            "DataVenda": {"$date": "2022-10-24"}
        },
        {
            "Comanda": [
                {
                    "ProducteId": "2348",
                    "Cantitat": 1
                }
            ],
            "PreuTotal": 130,
            "ClientId": "5433",
            "Empleat": "Laia Vilanova",
            "DataVenda": {"$date": "2022-11-18"}
        }
        ]
);