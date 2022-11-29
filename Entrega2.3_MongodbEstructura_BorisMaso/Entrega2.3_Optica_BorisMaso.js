use opticaBorisMaso;
db.dropDatabase();
use opticaBorisMaso;
db.createCollection('OpticaCulDampolla');
db.createCollection('Comandes');
db.OpticaCulDampolla.insertOne(
    {
        "Proveidors": [
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
            },
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
        ],
        "Clients": [
            {
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
                "DataRegistre": {"$date": "2022-10-22"}
            },
            {
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
                "NomClientRecomendador": "Roberto Fuentes Amigo"
            }
        ]

    }
);
db.Comandes.insertMany(
    [
        {
            "Producte": {
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
                "Quantitat": 1
            },
            "PreuTotal": 180,
            "Client": {
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
                "DataRegistre": {"$date": "2022-10-22"}
            },
            "Treballador": "Jordi Stanuz Ribagorsa",
            "DataVenda": {"$date": "2022-10-24"}
        },
        {
            "Producte": {
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
                "Quantitat": 1
            },
            "PreuTotal": 150,
            "Client": {
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
                "NomClientRecomendador": "Roberto Fuentes Amigo"
            },
            "Treballador": "Laia Vilanova Cami",
            "DataVenda": {"$date": "2022-11-18"}
        }
        
    ]
);