<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Olores ofensivos
    .row.justify-content-center.align-items-center 
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") Para el Ministerio de Salud de Colombia, la salud ambiental abarca diversas dimensiones las cuales se definen a partir de los ámbitos en los que se desarrolla la vida de las personas, como son su trabajo, su educación o su forma de vida. En este orden de ideas, es posible identificar algunos factores generales que inciden sobre la salud y el bienestar de las personas.
        p(data-aos="fade-left") Según el Ministerio de Salud, los factores generales que inciden sobre la salud y el bienestar de las personas son las siguientes:
        .tarjeta.p-4.mb-3(style="background-color: #EEFAFF")
          .row.justify-content-center 
            .col-lg-5.col-12
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Agua y saneamiento básico.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Inspección, vigilancia y control.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Sustancias y productos químicos.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Entornos saludables.
            .col-lg-5.col-12
                ul.lista-ul
                  li 
                    i.fas.fa-check(style="color: #63C500")
                    | Aire y salud.
                  li 
                    i.fas.fa-check(style="color: #63C500")
                    | Minería y salud.
                  li 
                    i.fas.fa-check(style="color: #63C500")
                    | Vecindad y fronteras.
                  li 
                    i.fas.fa-check(style="color: #63C500")
                    | Zoonosis.
                  li 
                    i.fas.fa-check(style="color: #63C500")
                    | Cambio climático.
            
      .col-lg-4.col-md-8.col-10.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/1.png', alt='Imagen decorativa')
    
    .row
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/2.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La norma UNE-EN 13725:2004 para la "Determinación de la concentración de olor por olfatometría dinámica" define el olor como "la propiedad organoléptica perceptible por el órgano olfativo cuando inspira sustancias volátiles". De acuerdo con esta definición, un problema de olores ofensivos se clasifica como una de las muchas formas de contaminación del aire.
            br
            br
            | Según la Agencia de Protección Ambiental de los Estados Unidos (EPA, por sus siglas en inglés), los olores ofensivos se han catalogado como contaminantes "sin criterio" debido a que sus causas y orígenes son múltiples y no pueden relacionarse con un único factor.

    .row.mt-5 
      p(data-aos="fade-left") El sentido del olfato humano es fundamental para el desarrollo de las actividades cotidianas y se estimula constantemente por diversas sustancias, teniendo efectos diversos en el comportamiento de las personas o generando diversas respuestas. Por lo tanto, técnicamente, cualquier olor puede resultar ofensivo. No obstante, esta característica depende principalmente de los siguientes elementos:

    .row.mt-5 
      .tarjeta.tarjeta.p-4.mb-5(style="background-color: #EEFFDE")
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Frecuencia
              p En el contexto de olores ofensivos, se refiere a cuántas veces se experimenta un olor desagradable en un período específico, como un día, una semana, un mes o un año. Por ejemplo, un daño en una tubería sanitaria puede generar olores desagradables durante el tiempo de la reparación, lo que constituye una alta frecuencia de exposición temporal. Por otro lado, una comunidad que reside cerca de un relleno sanitario está expuesta a olores ofensivos casi permanentemente, lo que indica una frecuencia elevada y constante. La frecuencia es un factor crucial para evaluar la percepción y el impacto de los olores ofensivos en la calidad de vida de las personas y para determinar la necesidad de tomar medidas para abordar este problema.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/3.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Intensidad
              p En el contexto de los olores ofensivos, está vinculada a la fuerza de la sensación percibida, es decir, a la capacidad de un olor de provocar una respuesta en quien lo huele. Por lo general, los olores con baja intensidad tienden a ser menos ofensivos que aquellos con una intensidad mayor. No obstante, la percepción de ofensividad está influenciada por la naturaleza de las sustancias que componen el olor y su concentración. En otras palabras, la intensidad del olor puede desempeñar un papel clave en la forma en que es percibido, pero también es importante considerar qué compuestos específicos están presentes y en qué cantidad para evaluar su impacto en la calidad del aire y en la salud de las personas.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/4.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Duración
              p En el contexto de olores ofensivos, guarda relación con la cantidad de tiempo que una persona está expuesta de manera continua a un determinado olor. Si bien la duración está parcialmente relacionada con la frecuencia, se enfoca en cuánto tiempo una persona experimenta un olor sin interrupción. Es importante destacar que la duración de la exposición a un olor ofensivo puede tener un impacto significativo en la percepción de molestia y en los posibles efectos negativos en la salud. A menudo, una exposición prolongada a un olor desagradable puede causar mayores efectos adversos en comparación con exposiciones intermitentes a lo largo del tiempo. La influencia de la duración en los efectos negativos depende de la naturaleza de la sustancia contaminante y su concentración, así como de la sensibilidad individual a dicho olor.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/5.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Ofensividad
              p Se refiere a su carácter en términos de cuán aceptable o desagradable es para el individuo que lo percibe. Esta característica está relacionada con el grado de gusto o disgusto que puede experimentar la persona expuesta al olor. Algunos olores tienen un margen de tolerancia amplio y son aceptables para la mayoría de las personas en la mayoría de las circunstancias, mientras que otros son considerados inaceptables o intolerables en cualquier situación. La percepción de la ofensividad de un olor es subjetiva y puede variar de una persona a otra. Factores como la experiencia personal, la cultura y la sensibilidad individual pueden influir en la manera en que se percibe un olor en términos de su aceptabilidad.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/6.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Localización
              p El sitio de una fuente generadora de olores ofensivos desempeña un papel crucial en la intensidad de los olores percibidos. La dirección del viento es un factor determinante, ya que una fuente ubicada en una zona desde la que sopla el viento hacia un centro poblado tendrá un impacto más significativo en la población al transportar los olores hacia áreas habitadas. Además, las fuentes ubicadas en zonas de transición cercanas a centros poblados también pueden generar problemas, ya que su proximidad a áreas residenciales y comerciales aumenta la exposición de la población a olores desagradables. La localización estratégica de las fuentes generadoras de olores es esencial para mitigar los impactos negativos en la calidad del aire y en la calidad de vida de las comunidades.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/7.jpg', alt='Imagen decorativa')
    .row 
      .tarjeta.p-4.mb-3(style="background-color: #EEFAFF")
        p(data-aos="fade-left") De acuerdo con la definición del Ministerio de Salud de 2012, un olor ofensivo es aquel generado por sustancias o actividades industriales, comerciales o de servicio que causan fastidio o molestia, sin necesariamente provocar daño a la salud humana. Estos olores desagradables son el resultado de sustancias que, debido a sus propiedades organolépticas, composición y tiempo de exposición, pueden generar una respuesta negativa.
    .row 
      p(data-aos="fade-left") Los olores ofensivos se pueden clasificar de dos maneras:

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span #[i Clasificación general de los olores ofensivos]

    .row.justify-content-center
      .col-lg-6.col-12 
        figure.desktop(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/8.svg' alt='En la figura 1 se muestra la clasificación general de los olores ofensivos dependiendo de la fuente o el proceso de materias primas.')
    .row.justify-content-center
      .col-lg-6.col-12 
        figure.movil(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/9.svg' alt='En la figura 1 se muestra la clasificación general de los olores ofensivos dependiendo de la fuente o el proceso de materias primas.')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1	Causas
    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-8.col-10.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/10.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        .cajon.p-4(style="background-color: #EEFFDE")
          p(data-aos="fade-left") La identificación de las causas que influyen en la generación de olores ofensivos, es el primer paso fundamental para abordar los problemas relacionados con la contaminación del aire. Si bien algunas actividades humanas naturalmente involucran la producción de este tipo de olores, a menudo se presentan situaciones especiales que contribuyen directamente a su generación. De acuerdo con el tipo de actividad, las principales causas se pueden agrupar en las siguientes categorías:
          br
          br
    .row.justify-content-center.mt-5 
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span #[i Principales causas de la generación de olores ofensivos]
        .tabla-a.mb-5 
          table
            thead(style="background-color: #FFAE7E") 
              tr
                th Fuente
                th Causas
            tbody
              tr
                td.text-center Plantas de tratamiento de agua residual
                td Fallas en diseño, operación incorrecta, pH inadecuado en el agua tratada, presencia de sustancias tóxicas, deficiencias en el manejo de olores y presencia de aguas con alto contenido de compuestos oxidados de azufre.
              tr
                td.text-center Rellenos sanitarios
                td Mal funcionamiento de biofiltros, reutilización de áreas previamente utilizadas, descarga incontrolada de residuos, alto contenido de materia orgánica de los residuos, condiciones climáticas y dirección del viento.
              tr
                td.text-center Cría y sacrificio de animales
                td Descomposición de materia orgánica, factores climáticos, la dirección del viento, la presencia de endotoxinas derivadas de heces secas y restos de alimentos, la volatilización del amoníaco y un alto contenido de urea en las heces y la orina. Estos elementos contribuyen al desarrollo de olores desagradables que pueden perturbar la calidad de vida y la convivencia en una comunidad.
              tr
                td.text-center Procesamiento de cueros
                td Altas concentraciones de materia orgánica, la presencia de compuestos como el ácido sulfhídrico y el metano, la falta de control en las operaciones, el uso de sustancias químicas generadoras de olor, como el sulfuro de sodio, el manejo inadecuado de residuos de descarnado, la fácil descomposición de cebos, carnaza y restos de piel, así como malas prácticas en la limpieza, el aseo y la desinfección.
              tr
                td.text-center Industria de subproductos de origen animal y vegetal
                td Uso de componentes orgánicos provenientes del sacrificio de animales, un manejo y almacenamiento deficiente de materias primas, el vertimiento de aguas con alto contenido orgánico y químico, la utilización de productos de fácil descomposición, como los subproductos del pescado y las grasas, factores climáticos, y la operación de calderas para refinar aceites de origen animal.
              tr
                td.text-center Industria petroquímica
                td Presencia de azufre combinado con moléculas de hidrógeno en forma de ácido sulfhídrico, junto con derrames de petróleo, son factores que pueden contribuir a la generación de olores ofensivos en el entorno. Estas sustancias químicas, cuando se liberan al ambiente, pueden causar olores desagradables y molestias para las personas que los perciben.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2	Niveles permitidos
    .row.justify-content-center.align-items-center
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") La regulación de los niveles permitidos para sustancias generadoras de olores ofensivos es fundamental para proteger la salud humana y garantizar la calidad del aire en áreas urbanas. Estos niveles se refieren a las concentraciones de sustancias olorosas a las cuales son perceptibles por el olfato humano, y juegan un papel crucial en la evaluación del impacto en la salud pública y la prevención de intoxicaciones. Se establece un umbral de olor que actúa como referencia para determinar cuándo los olores son inaceptables y pueden generar molestias.
        .cajon.p-4(style="background-color: #E7FFD1")
          p(data-aos="fade-left") Es importante destacar que uno de los roles del sentido del olfato es la identificación de sustancias potencialmente nocivas para la salud, lo que lo convierte en un factor determinante para la prevención de intoxicaciones u otras situaciones perjudiciales. El margen de seguridad entre el umbral de olor y las concentraciones que podrían ser dañinas es esencial para garantizar la protección de la salud pública.
      .col-lg-4.col-md-8.col-10.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/11.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4.col-md-8.col-10.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/12.svg', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        .cajon.p-4(style="background-color: #EEFAFF")
          p(data-aos="fade-left") En relación con los niveles permitidos para las principales sustancias químicas generadoras de olores ofensivos, estos suelen variar según la normativa y regulaciones específicas de cada país o jurisdicción. Estos límites se establecen de manera que las concentraciones de sustancias olorosas en el aire no superen niveles que causen molestias significativas o efectos adversos en la salud de la población. La determinación de estos niveles permitidos implica la consideración de factores como la naturaleza de los compuestos químicos, su concentración, la ubicación de las fuentes emisoras y las características de la comunidad afectada, como se evidencia en la siguiente tabla:

    .row.justify-content-center 
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span #[i Umbrales olfativos y de seguridad de las principales sustancias causantes de olores ofensivos]
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/13.svg', alt='En la tabla 2 se muestran los umbrales olfativos de las sustancias que causan olores ofensivos. La tabla se divide en grupo, nombre de sustancia y niveles permisibles (umbral de percepción, niveles máximos para aire).')
          figcaption Nota. Tomada del Ministerio de Salud (2012).
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3	Fuentes
    .row.justify-content-center.align-items-center.mt-5 
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") En el contexto ambiental, la contaminación se refiere a la introducción de sustancias, ya sea directa o indirectamente, al entorno debido a actividades humanas, lo que puede resultar en efectos perjudiciales para la salud de las personas y el medio ambiente. Existen dos categorías principales de contaminantes:
        .cajon.p-4(style="background-color: #E7FFD1")
          .row.justify-content-center 
            .col-10
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Contaminante primario:] este tipo de contaminante se emite directamente de una fuente a la atmósfera, al agua o al entorno sin experimentar una transformación química previa. Por ejemplo, los gases emitidos por vehículos en la combustión de combustibles fósiles son contaminantes primarios.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Contaminante secundario:] en contraste, un contaminante secundario no se emite directamente desde una fuente, sino que se forma a través de reacciones químicas entre contaminantes primarios en la atmósfera. Por ejemplo, el ozono troposférico es un contaminante secundario que se forma a partir de la reacción de contaminantes primarios en presencia de la luz solar.
      .col-lg-4.col-md-8.col-10.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/14.png', alt='Imagen decorativa')
    
    .row.mt-5
      p(data-aos="fade-left") En el caso de los olores ofensivos, las fuentes pueden ser diversas y están influenciadas por las actividades humanas que ocurren en el entorno. Las fuentes de generación de olores ofensivos se pueden clasificar en:

    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-8.col-10.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/15.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        .tarjeta.p-3.mb-3(style="background-color: #DEFFF8")
          ul.lista-ul.text-small
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Fuentes industriales:] estas incluyen actividades industriales que producen olores desagradables debido a la liberación de compuestos químicos olorosos. Ejemplos comunes son las plantas de procesamiento de alimentos, las fábricas químicas y las instalaciones de tratamiento de residuos.
        .tarjeta.p-3.mb-3(style="background-color: #DEFFF8")
          ul.lista-ul.text-small
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Fuentes comerciales:] las actividades comerciales, como restaurantes, mercados y panaderías, pueden ser fuentes de olores ofensivos debido a la preparación de alimentos y la gestión de residuos.
        .tarjeta.p-3.mb-3(style="background-color: #DEFFF8")
            ul.lista-ul.text-small
              li 
                i.fas.fa-check(style="color: #63C500")
                | #[b Fuentes agrícolas:] las actividades agrícolas, como el estiércol animal, la aplicación de fertilizantes y pesticidas, y la fermentación de productos agrícolas, pueden generar olores desagradables.
        .tarjeta.p-3.mb-3(style="background-color: #DEFFF8")
          ul.lista-ul.text-small
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Fuentes de tratamiento de aguas residuales:] las plantas de tratamiento de aguas residuales pueden producir olores ofensivos debido a la descomposición de la materia orgánica durante el proceso de tratamiento.
        .tarjeta.p-3.mb-3(style="background-color: #DEFFF8")
          ul.lista-ul.text-small
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Fuentes de transporte:] los vehículos a motor emiten gases y partículas que pueden tener olores desagradables, como los provenientes de los escapes de automóviles y camiones.
        .tarjeta.p-3.mb-3(style="background-color: #DEFFF8")
          ul.lista-ul.text-small
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Fuentes de gestión de residuos:] los vertederos y rellenos sanitarios pueden ser fuentes significativas de olores ofensivos debido a la descomposición de residuos orgánicos y la liberación de gases.

    .row 
      p(data-aos="fade-left") Además de las categorías mencionadas previamente, las fuentes de generación de olores ofensivos también se pueden clasificar en cuatro tipos adicionales, según su forma de emisión y movimiento:

    .row
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        .row.justify-content-center.align-items-center(titulo="Puntuales")
          .col-md-6.mb-4.mb-md-0
            p Estas son fuentes específicas y localizadas que emiten olores de manera constante o intermitente desde una ubicación fija. Ejemplos de fuentes puntuales son las chimeneas de una fábrica, las salidas de ventilación de una planta de tratamiento de aguas residuales o los conductos de escape de una panadería.
        
          .col-md-5.col-lg-2.col-8
            figure
              img(src='@/assets/curso/temas/tema1/16.svg', alt='Imagen decorativa')
        .row.justify-content-center.align-items-center(titulo="Difusas")
          .col-md-6.mb-4.mb-md-0
            p Las fuentes difusas generan olores de manera dispersa y no se originan en un solo punto. En lugar de eso, emanan de áreas extensas o de múltiples puntos dispersos. Un ejemplo de fuente difusa es un vertedero a cielo abierto, donde los olores pueden surgir de varias áreas del sitio.
        
          .col-md-5.col-lg-2.col-8
            figure
              img(src='@/assets/curso/temas/tema1/17.svg', alt='Imagen decorativa')
        .row.justify-content-center.align-items-center(titulo="Fugitivas")
          .col-md-6.mb-4.mb-md-0
            p Estas fuentes liberan olores de manera ocasional o imprevista debido a actividades específicas o eventos temporales. Las fugas de gas en una instalación industrial, un derrame químico en una planta de procesamiento o un incidente en un vertedero pueden ser ejemplos de fuentes fugitivas.
        
          .col-md-5.col-lg-2.col-8
            figure
              img(src='@/assets/curso/temas/tema1/18.svg', alt='Imagen decorativa')
        .row.justify-content-center.align-items-center(titulo="Móviles")
          .col-md-6.mb-4.mb-md-0
            p A diferencia de las fuentes estacionarias, las fuentes móviles son vehículos o equipos que generan olores ofensivos a medida que se desplazan. Los automóviles, camiones de recolección de residuos y maquinaria de construcción en movimiento pueden ser fuentes móviles de olores desagradables.
        
          .col-md-5.col-lg-2.col-8
            figure
              img(src='@/assets/curso/temas/tema1/19.svg', alt='Imagen decorativa')
      separador 
      .titulo-segundo.color-acento-contenido
        h2#t_1_4 1.4	Efectos para el medio ambiente y la salud humana
      .row.justify-content-center.align-items-center 
        .col-lg-8.col-12
          .cajon.p-4(style="background-color: #E7FFD1")
            p(data-aos="fade-left") La presencia de olores ofensivos puede tener un amplio espectro de efectos en la salud humana y el medio ambiente. Desde el punto de vista de la salud, estos olores pueden causar desde simples molestias, irritabilidad y malestar psicológico hasta náuseas, desorientación y, en casos extremos, efectos graves como problemas respiratorios, migrañas y pérdida de conciencia. La gravedad de estos efectos está directamente relacionada con la naturaleza de las sustancias que generan el olor, su concentración en el aire y la duración de la exposición. Además, la exposición a olores ofensivos que contienen sustancias tóxicas puede tener consecuencias ambientales, como daños a los ecosistemas acuáticos. Por lo tanto, la gestión adecuada de fuentes generadoras de olores ofensivos y la regulación de emisiones son cruciales para proteger la salud de las personas y el bienestar del entorno natural.
        .col-lg-4.col-md-8.col-10
          figure
            img(src='@/assets/curso/temas/tema1/20.svg', alt='Imagen decorativa')
      .row
        p(data-aos="fade-left") A continuación, se describen algunos de los efectos que ciertos tipos de sustancias presentes en los olores desagradables pueden tener en la salud humana:

      .row.justify-content-center.mt-5 
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 3.
            span #[i Efectos de sustancias en la salud de las personas]
          .tabla-a.mb-5 
            table
              thead(style="background-color: #FFAE7E") 
                tr
                  th Sustancia
                  th Efecto
              tbody
                tr
                  td.text-center Ácido sulfhídrico
                  td En concentraciones de 15 a 20 ppm (partes por millón) irritación ocular y rinofaríngea, de 100 a 150 ppm parálisis olfativa y de 500 a 1.000 ppm pérdida de la conciencia o muerte en cuestión de minutos.
              tbody
                tr
                  td.text-center Sulfuro de dimetilo
                  td Irritación en ojos y piel, náuseas, tos y dolor de garganta.
              tbody
                tr
                  td.text-center Dicloruro de azufre
                  td Tos, dolor de garganta, sensación de quemazón en vías respiratorias y edema pulmonar.
              tbody
                tr
                  td.text-center Mercaptanos
                  td Irritación ocular y de vías respiratorias. En altas concentraciones puede causar edema pulmonar, pérdida de conciencia, coma y anemia hemolítica.
              tbody
                tr
                  td.text-center Metil mercaptano
                  td Irritación de las vías respiratorias superiores, ojos y piel. En situaciones más graves, la inhalación puede llevar al desarrollo de edema pulmonar.
              tbody
                tr
                  td.text-center Propil mercaptano
                  td Irritación de los ojos, la piel y el tracto respiratorio. Además, la inhalación puede ocasionar una disminución del estado de alerta, lo que afecta la capacidad de una persona para mantenerse alerta y consciente.
              tbody
                tr
                  td.text-center Butil mercaptano
                  td En altas concentraciones puede causar disminución de la conciencia, confusión mental, vértigo, somnolencia, dolor de cabeza, náuseas y vómito.
              tbody
                tr
                  td.text-center Propil mercaptano
                  td Irritación de los ojos, la piel y el tracto respiratorio. Además, la inhalación puede ocasionar una disminución del estado de alerta, lo que afecta la capacidad de una persona para mantenerse alerta y consciente.
              tbody
                tr
                  td.text-center Amoniaco
                  td Irritación de la garganta, inflamación pulmonar, daño en las vías respiratorias y también afectar gravemente los ojos. En concentraciones superiores a 5.000 partes por millón (ppm), la inhalación de amoníaco puede resultar en la muerte.
              tbody
                tr
                  td.text-center Monometilamina
                  td En altas concentraciones puede ocasionar calambres abdominales, tos, diarrea, dificultad respiratoria, jadeo, dolor de garganta y vómito.
              tbody
                tr
                  td.text-center Acetaldehído
                  td Somnolencia, jadeo y en casos de exposición a concentraciones elevadas, la pérdida del conocimiento.
              tbody
                tr
                  td.text-center Ácido butírico
                  td En altas concentraciones es una sustancia que puede ser corrosiva para la piel, los ojos o el tracto respiratorio.
              tbody
                tr
                  td.text-center Etilacrilato
                  td Irritación en los ojos, la piel y el tracto respiratorio. Dada su peligrosidad, es crucial tomar medidas rigurosas para controlar y reducir la emisión de olores ofensivos que contienen etilacrilato, especialmente en entornos donde se encuentren mujeres embarazadas, con el fin de proteger su salud y la de las personas en general.
              tbody
                tr
                  td.text-center Clorofenol
                  td Tos, irritación de los ojos y de las vías respiratorias. En exposiciones prolongadas o crónicas a esta sustancia, las personas corren el riesgo de padecer daños en los pulmones, el hígado y los riñones.
              tbody
                tr
                  td.text-center Estireno
                  td Irritación de la piel, los ojos y el tracto respiratorio. Además, en casos de exposición a concentraciones elevadas, esta sustancia puede causar daños en el sistema nervioso central y llevar a la pérdida del conocimiento.
              tbody
                tr
                  td.text-center Nitrobenceno
                  td Dolor de cabeza, confusión, vértigo y náuseas.
              tbody
                tr
                  td.text-center Endotoxinas por bacterias
                  td Infecciones bacterianas, incluido el síndrome respiratorio agudo grave, así como enfermedades hepatobiliares. Los síntomas asociados a esta exposición incluyen tos, disnea, asma y fiebre. En exposiciones frecuentes o prolongadas a este tipo de sustancias, es común la presencia de enfermedades crónicas del sistema respiratorio, como asma, bronquitis crónica y neumopatía.
      .row  
        p(data-aos="fade-left") Es fundamental destacar que existen actividades que pueden ser fuentes de emisión de diversas sustancias químicas, cuya naturaleza y concentración determinan la presencia de olores ofensivos en el entorno. A continuación, se detallan algunas de las actividades generadoras de estos olores desagradables y las sustancias químicas asociadas:

      .row.justify-content-center 
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 4.
            span #[i Actividades generadoras olores ofensivos y sustancias químicas asociadas a estos]
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/21.svg', alt='En la tabla 4 se muestran las actividades generadoras de olores ofensivos y las sustancias químicas que se asocian a ellos. La tabla se divide en actividad y diferentes sustancias.')
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-8.col-12.mb-3
          .cajon.p-3(style="background-color: #E7FFD1")
            p(data-aos="fade-left") Los hallazgos relacionados por el Ministerio de Salud de Colombia revelan una clara conexión entre la exposición a olores ofensivos y la incidencia de diversos problemas de salud. Estos problemas abarcan desde enfermedades cutáneas hasta afecciones de las vías respiratorias bajas, gripa y malestar general. Además, en el caso de los trabajadores de plantas de tratamiento de aguas residuales, se han registrado síntomas como astenia, dolores articulares y diarrea, que generalmente se atribuyen a la exposición a endotoxinas.
        .col-lg-4.col-md-6.col-10.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/22.png', alt='Imagen decorativa')

      .row.justify-content-center.align-items-center.mb-5.mt-5
        .col-lg-10
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/img.svg' alt='AvatarTop')
            .tarjeta(style="background-color:#FFEBDF")
              .p-4
              p.p-2 Estos resultados enfatizan la importancia de abordar los olores ofensivos como un problema de salud pública, ya que su impacto no se limita a la percepción desagradable, sino que se traduce en efectos adversos en la salud de las personas expuestas. La regulación, el control de emisiones y la implementación de medidas de prevención son esenciales para proteger la salud de las comunidades expuestas a olores ofensivos, así como para garantizar la seguridad de los trabajadores que enfrentan exposiciones constantes en su entorno laboral.
              
              
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
