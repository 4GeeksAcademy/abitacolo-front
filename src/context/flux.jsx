const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      muebles: {
        test: [],
        percheros: [
          {
            id_codigo: "h001",
            nombre: "Vertical Carlos",
            disponible: true,
            color: "Natural",
            espacio: "dormitorio",
            estilo: "industrial",
            categoria: "percheros",
            precio_mes: "200",
            ancho: "40",
            altura: "180",
            fondo: "40",
          },
          {
            id_codigo: "h002",
            nombre: "Pared Maria",
            disponible: true,
            color: "Blanco",
            espacio: "entrada",
            estilo: "moderno",
            categoria: "percheros",
            precio_mes: "220",
            ancho: "50",
            altura: "170",
            fondo: "35",
          },
          {
            id_codigo: "h003",
            nombre: "Jose",
            disponible: true,
            color: "Negro",
            espacio: "salón",
            estilo: "minimalista",
            categoria: "percheros",
            precio_mes: "210",
            ancho: "45",
            altura: "175",
            fondo: "45",
          },
          {
            id_codigo: "h004",
            nombre: "Clásico Lucia",
            disponible: true,
            color: "Marrón",
            espacio: "pasillo",
            estilo: "clásico",
            categoria: "percheros",
            precio_mes: "230",
            ancho: "55",
            altura: "165",
            fondo: "50",
          },
          {
            id_codigo: "h005",
            nombre: "Moderno David",
            disponible: true,
            color: "Gris",
            espacio: "dormitorio",
            estilo: "moderno",
            categoria: "percheros",
            precio_mes: "240",
            ancho: "60",
            altura: "160",
            fondo: "40",
          },
          {
            id_codigo: "h006",
            nombre: "Compacto Laura",
            disponible: true,
            color: "Azul",
            espacio: "oficina",
            estilo: "contemporáneo",
            categoria: "percheros",
            precio_mes: "250",
            ancho: "35",
            altura: "155",
            fondo: "35",
          },
          {
            id_codigo: "h007",
            nombre: "Estante Antonio",
            disponible: true,
            color: "Verde",
            espacio: "baño",
            estilo: "rústico",
            categoria: "percheros",
            precio_mes: "260",
            ancho: "65",
            altura: "150",
            fondo: "45",
          },
          {
            id_codigo: "h008",
            nombre: "Vintage Ana",
            disponible: true,
            color: "Rojo",
            espacio: "salón",
            estilo: "vintage",
            categoria: "percheros",
            precio_mes: "270",
            ancho: "70",
            altura: "185",
            fondo: "50",
          },
          {
            id_codigo: "h009",
            nombre: " Ajustable Pedro",
            disponible: true,
            color: "Beige",
            espacio: "dormitorio",
            estilo: "práctico",
            categoria: "percheros",
            precio_mes: "280",
            ancho: "60",
            altura: "165",
            fondo: "55",
          },
          {
            id_codigo: "h010",
            nombre: " Multiuso Sofia",
            disponible: true,
            color: "Morado",
            espacio: "entrada",
            estilo: "ecléctico",
            categoria: "percheros",
            precio_mes: "290",
            ancho: "75",
            altura: "170",
            fondo: "60",
          },
        ],
        camas_cabeceros: [
          {
            id_codigo: "c001",
            nombre: " Moderna Emma",
            disponible: true,
            color: "Gris",
            espacio: "dormitorio",
            estilo: "contemporáneo",
            categoria: "camas y cabeceros",
            precio_mes: "1200",
            ancho: "160",
            altura: "120",
            fondo: "200",
          },
        ],
        sillas_taburetes: [
          {
            id_codigo: "s001",
            nombre: "Silla de Comedor Lucas",
            disponible: true,
            color: "Negro",
            espacio: "comedor",
            estilo: "moderno",
            categoria: "sillas y taburetes",
            precio_mes: "150",
            ancho: "45",
            altura: "90",
            fondo: "50",
          },
        ],
        armarios_comodas: [
          {
            id_codigo: "ac001",
            nombre: "Armario Clásico Victoria",
            disponible: true,
            color: "Marrón oscuro",
            espacio: "dormitorio",
            estilo: "clásico",
            categoria: "armarios y cómodas",
            precio_mes: "800",
            ancho: "180",
            altura: "220",
            fondo: "60",
          },
        ],
        espejos_marcos: [
          {
            id_codigo: "em001",
            nombre: "Espejo de Pared Redondo Sofía",
            disponible: true,
            color: "Dorado",
            espacio: "salón",
            estilo: "elegante",
            categoria: "espejos y marcos",
            precio_mes: "100",
            ancho: "80",
            altura: "80",
            fondo: "3",
          },
        ],
        lamparas: [
          {
            id_codigo: "l001",
            nombre: "Lámpara de Pie Moderna Alex",
            disponible: true,
            color: "Plateado",
            espacio: "salón",
            estilo: "contemporáneo",
            categoria: "lámparas",
            precio_mes: "120",
            ancho: "30",
            altura: "160",
            fondo: "30",
          },
        ],
        otros: [
          {
            id_codigo: "o001",
            nombre: "Biombo Decorativo Zen",
            disponible: true,
            color: "Blanco y Negro",
            espacio: "salón",
            estilo: "oriental",
            categoria: "otros",
            precio_mes: "180",
            ancho: "170",
            altura: "180",
            fondo: "2",
          },
        ],
        estanterias_baldas: [
          {
            id_codigo: "eb001",
            nombre: "Estantería Flotante Minimalista",
            disponible: false,
            color: "Blanco",
            espacio: "estudio",
            estilo: "minimalista",
            categoria: "estanterías y baldas",
            precio_mes: "90",
            ancho: "120",
            altura: "5",
            fondo: "25",
          },
        ],
        aparadores: [
          {
            id_codigo: "ap001",
            nombre: "Aparador Vintage Olivia",
            disponible: true,
            color: "Verde Oliva",
            espacio: "comedor",
            estilo: "vintage",
            categoria: "aparadores",
            precio_mes: "350",
            ancho: "140",
            altura: "85",
            fondo: "45",
          },
        ],
        mesillas: [
          {
            id_codigo: "a001",
            nombre: "Mesa Roberto",
            disponible: true,
            color: "Natural",
            espacio: "dormitorio",
            estilo: "industrial",
            categoria: "mesillas",
            precio_mes: "900",
            ancho: "120",
            altura: "75",
            fondo: "60",
          },
        ],
        sillones_sofas: [
          {
            id_codigo: "a001",
            nombre: "Mesa Roberto",
            disponible: false,
            color: "Natural",
            espacio: "dormitorio",
            estilo: "industrial",
            categoria: "sillónes y sofás",
            precio_mes: "900",
            ancho: "120",
            altura: "75",
            fondo: "60",
          },
        ],
        mesas_escritorios: [
          {
            id_codigo: "a001",
            nombre: "Mesa Roberto",
            disponible: true,
            color: "Natural",
            espacio: "dormitorio",
            estilo: "industrial",
            categoria: "mesas y escritorios",
            precio_mes: "900",
            ancho: "120",
            altura: "75",
            fondo: "60",
          },
          {
            id_codigo: "a002",
            nombre: "Escritorio Marta",
            disponible: true,
            color: "Blanco",
            espacio: "oficina",
            estilo: "moderno",
            categoria: "mesas y escritorios",
            precio_mes: "950",
            ancho: "140",
            altura: "80",
            fondo: "70",
          },
          {
            id_codigo: "a003",
            nombre: "Mesa de Trabajo Luis",
            disponible: false,
            color: "Negro",
            espacio: "estudio",
            estilo: "minimalista",
            categoria: "mesas y escritorios",
            precio_mes: "980",
            ancho: "130",
            altura: "78",
            fondo: "65",
          },
          {
            id_codigo: "a004",
            nombre: "Mesa Redonda Ana",
            disponible: true,
            color: "Gris",
            espacio: "comedor",
            estilo: "vintage",
            categoria: "mesas y escritorios",
            precio_mes: "920",
            ancho: "110",
            altura: "73",
            fondo: "110",
          },
          {
            id_codigo: "a005",
            nombre: "Escritorio Clásico Pedro",
            disponible: true,
            color: "Marrón",
            espacio: "oficina",
            estilo: "clásico",
            categoria: "mesas y escritorios",
            precio_mes: "890",
            ancho: "150",
            altura: "85",
            fondo: "75",
          },
          {
            id_codigo: "a006",
            nombre: "Mesa de Estudio Laura",
            disponible: true,
            color: "Azul",
            espacio: "dormitorio",
            estilo: "contemporáneo",
            categoria: "mesas y escritorios",
            precio_mes: "870",
            ancho: "125",
            altura: "77",
            fondo: "62",
          },
          {
            id_codigo: "a007",
            nombre: "Mesa Alta Manuel",
            disponible: true,
            color: "Verde",
            espacio: "bar",
            estilo: "rústico",
            categoria: "mesas y escritorios",
            precio_mes: "930",
            ancho: "135",
            altura: "90",
            fondo: "70",
          },
          {
            id_codigo: "a008",
            nombre: "Escritorio de Esquina Sofia",
            disponible: true,
            color: "Rojo",
            espacio: "oficina",
            estilo: "moderno",
            categoria: "mesas y escritorios",
            precio_mes: "960",
            ancho: "160",
            altura: "83",
            fondo: "80",
          },
          {
            id_codigo: "a009",
            nombre: "Mesa Plegable Juan",
            disponible: true,
            color: "Beige",
            espacio: "terraza",
            estilo: "práctico",
            categoria: "mesas y escritorios",
            precio_mes: "850",
            ancho: "100",
            altura: "70",
            fondo: "50",
          },
          {
            id_codigo: "a010",
            nombre: "Mesa Escritorio Elena",
            disponible: true,
            color: "Morado",
            espacio: "dormitorio",
            estilo: "ecléctico",
            categoria: "mesas y escritorios",
            precio_mes: "940",
            ancho: "145",
            altura: "82",
            fondo: "72",
          },
        ],
      },
    },
    actions: {
      loadSomeData: () => {
        console.log("Testing from flux");
      },
      getMuebles: () => {
        const store = getStore();
        const actions = getActions();
        console.log("Fetching muebles...");

        fetch("http://localhost:3000/mueble") // Reemplaza con la URL de tu API
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Data fetched from API:", data);
            setStore({ ...store, muebles: { ...store.muebles, test: data } });
            console.log("Store updated with new data:", store.muebles.test);
          })
          .catch((error) => {
            console.error("Error fetching muebles:", error);
          });
      },
    },
  };
};

export default getState;
