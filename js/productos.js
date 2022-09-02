/* Inventario de articulos */
let listadoArticulos = [];
class articulos{
    constructor (id , nombre, precio, stock, img, categoria,und ){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.categoria = categoria;
        this.und = und;
    }
}

listadoArticulos.push(new articulos (1 , "MONOPATIN ELECTRICO MAX-YOU E-BOOSTER" , 394449 , 100 , "./assets/id1.jpg" , "movilidad-urbana" , 1))
listadoArticulos.push(new articulos (2 , "BICICLETA ELÉCTRICA FIAT - MODELO F500X" , 293019 , 100 , "./assets/BICICLETA ELÉCTRICA FIAT - MODELO F500X.jpg" , "movilidad-urbana" ,1))
listadoArticulos.push(new articulos (3 , "HOVERBOARD RUEDA 6.5 pulgadas QY-BW HIELO FUEGO" , 52899 , 10 , "./assets/HOVERBOARD RUEDA 6.5 pulgadas QY-BW HIELO FUEGO.jpg" , "movilidad-urbana" ,1 ))
listadoArticulos.push(new articulos (4 , "MONOPATIN ELECTRICO PLEGABLE KANY CITY C85 NEGRO" , 123969 , 10 , "./assets/MONOPATIN ELECTRICO PLEGABLE KANY CITY C85 NEGRO.jpg" , "movilidad-urbana" ,1))
listadoArticulos.push(new articulos (5 , "APPLE WATCH SERIES 7 (GPS) 41MM BLUE ALUMINUM CASE"  , 112249 , 10 , "./assets/APPLE WATCH SERIES 7 (GPS) 41MM BLUE ALUMINUM CASE.jpg" , "smartwatch",1))
listadoArticulos.push(new articulos (6 , "GARMIN FORERUNNER 245 MUSIC, GPS, WI-FI, WHITE/BLACK" , 99179 , 10 , "./assets/SMART WATCH GARMIN FORERUNNER 245 MUSIC GPS WI-FI EU-PAC WHITE-BLACK.jpg" , "smartwatch",1))
listadoArticulos.push(new articulos (7 , "SAMSUNG GALAXY CLASSIC 42mm SM-R880NZK NEGRO" , 84519 , 10 , "./assets/SMARTWATCH SAMSUNG GALAXY CLASSIC 42mm SM-R880NZK NEGRO.jpg" , "smartwatch",1))
listadoArticulos.push(new articulos (8 , "GARMIN VENU SQ, NFC, MUSIC, NAVY/LIGHT GOLD" , 80019 , 10 , "./assets/SMARTWATCH GARMIN VENU SQ NFC MUSIC NAVY-LIGHT GOLD.jpg" , "smartwatch",1))
listadoArticulos.push(new articulos (9 , "CELULAR XIAOMI MI 11 LITE 5G NE 8GB+128GB BLUE" , 140259 , 10 , "./assets/CELULAR XIAOMI MI 11 LITE 5G NE 8GB+128GB BLUE.jpg" , "smartphones",1))
listadoArticulos.push(new articulos (10 , "CELULAR SAMSUNG SM-G990ELG S21 FE OLIVE" , 169899 , 10 , "./assets/CELULAR SAMSUNG SM-G990ELG S21 FE OLIVE.jpg" , "smartphones",1))
listadoArticulos.push(new articulos (11 , "CELULAR SAMSUNG S20 FE 5G SM-G781BZB NAVY" , 137899 , 10 , "./assets/CELULAR SAMSUNG S20 FE 5G SM-G781BZB NAVY.jpg" , "smartphones",1))
listadoArticulos.push(new articulos (12 , "CELULAR XIAOMI REDMI 10 4GB + 128GB CARBON GREY" , 123999 , 10 , "./assets/CELULAR XIAOMI REDMI 10 4GB + 128GB CARBON GREY.jpg" , "smartphones",1))




