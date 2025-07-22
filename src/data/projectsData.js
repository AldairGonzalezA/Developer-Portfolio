import MenuSuperKinal from '../images/PaginaPrincipalKinal.png'
import ClientesMenu from '../images/ClientesMenu.png'
import ProductosMenu from '../images/VistaProductosKinal.png'
import FacturasMenu from '../images/FacturasMenu.png'
import CodeFacturasSuper from '../images/CodeFacturasSuperKinal.png'
import CodeDAO from '../images/CodeDao.png'
import CodeModelTicket from '../images/TicketModel.png'
import CodeCLiente from '../images/CodeClientes.png'
import Charizard from '../images/PokemonCharizard.png'
import Umbreon from '../images/Umbreon.png'
import CodeApiPokemon from '../images/ApiPokemon.png'
import HookPokemon from '../images/HookPokemon.png'
import CompoBuscarPokemon from '../images/CompenentBuscar.png'
import CompoContePokemon from '../images/CompoContenedor.png'
import LoginSpotify from '../images/LoginSpotify.png'
import VistaSpotify from '../images/VistaSporify.png'
import CodeApiSpotify from '../images/CodeApiSpotify.png'
import CodeTokenSpotify from '../images/CodeTokenSpotifyy.png'
import SongsComponent from '../images/SongsComponent.png'
import SpotifyComponent from '../images/SpotifyComponent.png'
import HookSpotify from '../images/HookSporify.png'
import MenuLibros from '../images/MenuLibros.png'
import ClientesLibros from '../images/ClientesLibros.png'
import Libros from '../images/Libros.png'
import PrestamosLibros from '../images/PrestamosLibros.png'
import ComponenteLibro from '../images/ComponenteLibro.png'
import EntidadLibro from '../images/EntidadLibro.png'
import ViewLibro from '../images/ViewClientesLibros.png'
import MainLibro from '../images/MainLibros.png'
import ApiNexus from '../images/ApiNexus.png'
import ComponentNexus from '../images/ComponentNexus.png'
import FacturasNexus from '../images/FacturasNexus.png'
import HookNexus from '../images/HookNexus.png'
import PeticionesNexus from '../images/PeticionesNexus.png'
import MiCuenta from '../images/MiCuentaNexus.png'
import TransferenciaNexus from '../images/TransferenciaNexus.png'
import TransferCode from '../images/TransferCode.png'
import CreateRequest from '../images/CreateRequest.png'
import CodeMiddlewares from '../images/CodeMiddlewares.png'

export const projects = [
  {
    id: 1,
    title: "SuperKinal",
    description: "Plataforma completa para administracion de un supermercado utilizando aplicaciones como",
    skills: ["Java", "SceneBuilder"],
    githubUrl: "https://github.com/AldairGonzalezA/Proyecto-SuperKinal2024",
    year: "2024",
    status: "Finalizado",
    images: [
      MenuSuperKinal,
      ClientesMenu,
      ProductosMenu,
      FacturasMenu
    ],
    codeImages: [
      CodeFacturasSuper,
      CodeDAO,
      CodeModelTicket,
      CodeCLiente
    ],
    featured: true
  },
  {
    id: 2,
    title: "  Buscador Pokemon",
    description: "Aplicación de buscador pokemon consumiendo una API",
    skills: ["Node.js", "React", "JavaScript", "Vite", "Node.js"],
    githubUrl: "https://github.com/AldairGonzalezA/Pokemon-Search-React",
    year: "2024",
    status: "Finalizado",
    images: [
      Charizard,
      Umbreon
    ],
    codeImages: [
      CodeApiPokemon,
      HookPokemon,
      CompoBuscarPokemon,
      CompoContePokemon
    ],
    featured: false
  },
  {
    id: 3,
    title: "Spotify Api",
    description: "Un programa para buscar canciones y reproducir una prueba gratis con la Api de Spotify",
    skills: ["JavaScript", "HTML", "React", "Vite","Node.js"],
    githubUrl: "https://github.com/AldairGonzalezA/SpotifyApp",
    year: "2023",
    status: "Finalizado",
    images: [
      LoginSpotify,
      VistaSpotify
    ],
    codeImages: [
      CodeApiSpotify,
      CodeTokenSpotify,
      HookSpotify,
      SongsComponent,
      SpotifyComponent
    ],
    featured: true
  },
  {
    id: 4,
    title: "Biblioteca",
    description: "Programa para la administracion de una biblioteca",
    skills: ["SceneBuilder", "Java", "SpringBoot"],
    githubUrl: "https://github.com/AldairGonzalezA/Biblioteca",
    year: "2024",
    status: "Finalizado",
    images: [
      MenuLibros,
      PrestamosLibros,
      ClientesLibros,
      Libros
    ],
    codeImages: [
      MainLibro,
      ViewLibro,
      EntidadLibro,
      ComponenteLibro
    ],
    featured: false
  },
  {
    id: 5,
    title: "Programa para la gestion de un Banco ",
    description: "Portafolio interactivo con elementos 3D y animaciones avanzadas usando Three.js.",
    skills: ["Node.js", "React", "Chakra UI", "Vite", "Email.js"],
    githubUrl: "https://github.com/KinalTrabajos/Banco-Fronted",
    githubUrlBackend: "https://github.com/KinalTrabajos/Banco-Backend",
    year: "2025",
    status: "Finalizado",
    images: [
      MiCuenta,
      FacturasNexus,
      PeticionesNexus,
      TransferenciaNexus,

    ],
    codeImages: [
      ApiNexus,
      ComponentNexus,
      HookNexus,
      TransferCode,
      CreateRequest,
      CodeMiddlewares
    ],
    featured: true
  },
  {
    id: 6,
    title: "API REST Documentation",
    description: "Sistema de documentación automática para APIs REST con ejemplos interactivos.",
    skills: ["Express.js", "Swagger", "MongoDB", "Docker"],
    githubUrl: "https://github.com/usuario/api-docs",
    year: "2022",
    status: "Finalizado",
    images: [],
    codeImages: [
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    featured: false
  }
];