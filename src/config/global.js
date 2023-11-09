export default {
  global: {
    componenteFormativo: 'Monitoreo de olores ofensivos y ruido',
    descripcionCurso:
      'La contaminación ambiental es una de las grandes preocupaciones de la humanidad debido a los efectos negativos que esta tiene sobre los seres vivos. El monitoreo de las fuentes de contaminación es necesario para desarrollar estrategias que permitan reducir los impactos negativos que la contaminación auditiva y los olores ofensivos tienen sobre los ecosistemas y el bienestar de la población. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Olores ofensivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Causas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Niveles permitidos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fuentes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Efectos para el medio ambiente y la salud humana',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Monitoreo olores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de monitoreo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Equipos de medición',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ruido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y tipos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Causas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Niveles permitidos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Fuentes',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Efectos ambientales y para la salud humana',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Monitoreo de ruido',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Presentación de informes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Informe de monitoreo de olores ofensivos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Informe de monitoreo de ruido',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar pdf',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '3. Ruido',
      referencia:
        'Gobernación de Antioquia. (s. f.). El sonido y sus características. ',
      tipo: 'Página web.',
      link:
        'https://www.antioquiatic.edu.co/noticias-general/item/211-el-sonido-y-sus-caracteristicas#:~:text=El%20sonido%20es%20producido%20por%20un%20movimiento%20vibratorio.&text=El%20movimiento%20se%20propaga%20hasta,%2C%20s%C3%B3lido%2C%20l%C3%ADquido%20o%20gaseoso.',
    },
    {
      tema: '4. Monitoreo de ruido',
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2006). Resolución 0627 de 2006. Por la cual se establece la norma nacional de emisión de ruido y ruido ambiental. ',
      tipo: 'Normativa. Documento PDF.',
      link:
        'https://corponarino.gov.co/expedientes/juridica/2006resolucion627.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Antrópico',
      significado:
        'hace referencia a todo lo que tiene que ver con la intervención humana. ',
    },
    {
      termino: 'Astenia',
      significado:
        'término médico que se utiliza para referirse al cansancio. ',
    },
    {
      termino: 'Difuso',
      significado:
        'algo que carece de claridad o precisión. No se pueden percibir con claridad todas sus características o su origen. ',
    },
    {
      termino: 'Grampositivas',
      significado:
        'forma como se clasifican las bacterias después de un proceso químico denominado tinción de Gram. Las bacterias grampositivas adquieren una coloración azul después del proceso, mientras que las gramnegativas se tiñen de rojo.',
    },
    {
      termino: 'Neumopatía',
      significado:
        'enfermedades en las que se ven involucrados los pulmones. Estas se pueden dar por la acción de microorganismos o por la inhalación de sustancias contaminantes disueltas en el aire. ',
    },
    {
      termino: 'Ordenamiento',
      significado:
        'disposiciones legales, jurídicas o normativas relacionadas con la forma como se utiliza el suelo de las áreas urbanas y rurales. ',
    },
    {
      termino: 'Partes por millón (ppm)',
      significado:
        'unidad de medida ampliamente empleada en la física y la química. Se refiere a la cantidad de unidades de determinada sustancia que hay por cada millón de unidades del conjunto. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Gobernación de Antioquia. (s. f.) Unidos a un clic. El sonido y sus características.',
      link:
        'https://www.antioquiatic.edu.co/noticias-general/item/211-el-sonido-y-sus-caracteristicas#:~:text=El%20sonido%20es%20producido%20por%20un%20movimiento%20vibratorio.&text=El%20movimiento%20se%20propaga%20hasta,%2C%20s%C3%B3lido%2C%20l%C3%ADquido%20o%20gaseoso',
    },
    {
      referencia:
        'Instituto Nacional de la Sordera y otros Trastornos de la Comunicación. (2020). ¿Cuándo el sonido es demasiado alto?',
      link:
        'https://www.noisyplanet.nidcd.nih.gov/espanol/publications/cuando-el-sonido-es-demasiado-alto',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2014). Resolución 2087 de 2014. Por la cual se adopta el protocolo para el monitoreo, control y vigilancia de olores ofensivos.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/Resolucion-2087-de-2014.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2006). Resolución 0627 de 2006. Por la cual se establece la norma nacional de emisión de ruido y ruido ambiental.',
      link:
        'https://corponarino.gov.co/expedientes/juridica/2006resolucion627.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2012). Lineamiento para la vigilancia sanitaria y ambiental del impacto de los olores ofensivos en la salud y calidad de vida de las comunidades expuestas en áreas urbanas.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/impacto-olores-ofensivos-salud.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Sánchez Suárez ',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario la Granja.',
        },
        {
          nombre: 'Gustavo Santis Mancipe ',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
        },
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'José Gabriel Ortiz Abella ',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Jaslyth Juliana Eraso Casanova ',
          cargo: 'Experta Temática',
          centro:
            'Regional Putumayo - Centro Agroforestal y Acuícola Arapaima.',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Briceño Vera',
          cargo: 'Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Produccióon audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
