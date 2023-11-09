<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ruido
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 También conocido como contaminación auditiva o contaminación acústica, es una forma de contaminación que ha ganado relevancia debido a su influencia en la pérdida de la capacidad auditiva, especialmente en entornos ruidosos donde las personas viven o trabajan. Aunque la percepción del ruido puede ser subjetiva, se considera ruidoso cuando interfiere con la comunicación y las actividades cotidianas. La Organización Mundial de la Salud (OMS) ha destacado la importancia de este problema al establecer el 3 de marzo como el Día Internacional de la Audición desde 2007, con el propósito de concienciar a la población sobre la necesidad de proteger sus oídos y su capacidad auditiva.
          br
          br
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1 Concepto y tipos
    .row
      p(data-aos="fade-left") El sonido es una percepción del cerebro causada por las vibraciones mecánicas que emanan de los cuerpos y llegan al oído a través de un medio, generalmente el aire, debido a los cambios de presión generados por el movimiento vibratorio de un cuerpo sonoro. El ruido se define como un sonido molesto que interfiere en la comunicación o en el comportamiento natural de los seres vivos. Puede ser un sonido inarticulado, desagradable y no deseado. Para clasificar los tipos de ruido, se consideran sus características:
    .row.justify-content-center.align-items-center 
      .col-lg-8.col-12.mb-3
        .tarjeta.p-3.mb-3(style="background-color: #EEFFDE")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Frecuencia:] esta indica la velocidad de las variaciones de presión por segundo y se mide en hercios (Hz). El oído humano puede percibir sonidos que estén entre los 20 Hz (20 variaciones por segundo) y los 20.000 Hz (20.000 variaciones por segundo). Los sonidos que se encuentran por debajo de los 20 Hz se denominan de baja frecuencia mientras que aquellos que están por encima de los 20.000 Hz son de alta frecuencia, ambos inaudibles para los seres humanos.
        .tarjeta.p-3.mb-3(style="background-color: #EEFFDE")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Velocidad de propagación:] esta corresponde a la velocidad a la cual viaja el sonido, la cual se estima en 340 metros por segundo en el aire, pues en el agua esta velocidad es mucho menor. Igualmente, factores como la temperatura, afectan considerablemente la velocidad de propagación. En ambientes cercanos a los 0 °C la velocidad puede ser de alrededor de 331 m/s. Por el contrario, con una temperatura de 20 °C la velocidad puede alcanzar los 343 m/s.
        .tarjeta.p-3.mb-3(style="background-color: #EEFFDE")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Amplitud:] es una descripción de la potencia de la onda de  sonido. De esta forma, el volumen de un sonido aumenta en función de la amplitud de su onda sonora. Otra definición indica que la amplitud indica la magnitud de las variaciones de presión, por lo que cuanto más grande sea este valor mayor será la sensación acústica percibida por el oído.
      .col-lg-4.col-md-6.col-10.mb-3
        figure(data-aos="fade-right") 
          img(src='@/assets/curso/temas/tema3/2.png', alt='Imagen decorativa')
      .row 
        p(data-aos="fade-left") Con base en lo anterior, es posible definir cuatro tipos de ruido:

      .row.justify-content-center.align-items-center 
      .col-lg-4.col-md-6.col-10.mb-3
        figure(data-aos="fade-right") 
          img(src='@/assets/curso/temas/tema3/3.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        .tarjeta.p-3(style="background-color: #DEFFF8")
          .row.justify-content-center 
            .col-lg-10.col-12
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Continuo:] este se presenta cuando el nivel de presión sonora es constante durante todo el periodo de observación, es decir, que no sufre variaciones. Generalmente, este tipo de ruidos son generados por maquinarias o equipos que permanecen funcionando ininterrumpidamente como elementos de refrigeración, equipos de ventilación o sistemas de calefacción.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Intermitente:] este se da cuando los niveles de ruido aumentan o disminuyen rápidamente. Algunos ejemplos de este tipo de ruidos los constituyen los aviones o equipos o máquinas que funcionan por ciclos, entre los que se encuentran equipos de bombeo, válvulas de alivio de presión y compresores, entre otros. 
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Impulsivo:] son ruidos que se presentan de forma esporádica y que tienen una alta intensidad, la cual aumenta de manera brusca durante un impulso. Este tipo de ruidos se asocian generalmente con explosiones o demoliciones.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b De baja frecuencia:] son aquellos ruidos que se camuflan en el paisaje por su baja frecuencia, pero que generalmente se dan de forma continua. Si bien por su baja frecuencia no son muy notorios, sí se dan en frecuencias que el oído humano alcanza a percibir, por lo que pueden llegar a causar cierto tipo de molestias. Estos se relacionan, a menudo, con sonidos de motores de generadores de electricidad o zumbidos de transformadores o centrales eléctricas. 
      .row
        p(data-aos="fade-left") Cada tipo de ruido puede tener un impacto distinto en las personas y el medio ambiente, y su clasificación es útil para comprender y abordar los problemas asociados a la contaminación acústica.
      
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Causas
    .row.mb-5
      p(data-aos="fade-left") La contaminación acústica, o ruido, se ha convertido en una creciente preocupación en entornos urbanos y en la vida cotidiana. Este fenómeno, originado por diversas fuentes, puede tener un impacto significativo en la salud y el bienestar de las personas. Al igual que otras formas de contaminación, el ruido proviene de una variedad de fuentes, cada una con sus propias características y efectos en el ambiente sonoro. Siguiendo las pautas de la Secretaría de Ambiente de Bogotá, a continuación, se explorarán las principales causas de la contaminación auditiva:
    
    .row.mt-5 
      .tarjeta.tarjeta.p-4.mb-5(style="background-color: #EEFFDE")
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Tráfico vehicular
              p Está presente en todos los entornos urbanos y se da por el uso de:
              .row.justify-content-center 
                .col-lg-10.col-12
                  ul.lista-ul
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Bocinas.
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Alarmas.
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Sistemas de sonido.
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Fallas en los silenciadores de los vehículos.
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Mecanismos del vehículo o la operación de los motores.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/4.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Operación aérea
              p La cercanía de los aeropuertos a las ciudades capitales ha generado conflictos entre la operación aérea y la población por los niveles de ruido que se manejan en algunas zonas.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/5.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Industria
              p Los niveles de ruido generados por la industria se concentran en áreas como parques industriales y están relacionados con el uso de:
              .row.justify-content-center 
                .col-lg-10.col-12
                  ul.lista-ul
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Maquinaria pesada.
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Vehículos de carga.
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Equipos para labores específicas.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/6.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Servicios
              p Se refiere a los ruidos generados por la prestación de algún tipo de servicio, público o privado, especialmente en los entornos urbanos.
              p Por lo general se asocian con el uso de equipos y herramientas para el desarrollo de labores de mantenimiento.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/7.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Comercio
              p Se da por el mal uso de equipos de perifoneo y aglomeraciones de personas en zonas con alta actividad comercial.
              p Es propio de los centros urbanos, especialmente en zonas con alta afluencia de público.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/8.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Actividades lúdicas
              p Corresponde al ruido generado por actividades culturales, lúdicas o recreativas entre las cuales se encuentran:
              .row.justify-content-center 
                .col-lg-10.col-12
                  ul.lista-ul
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Eventos deportivos.
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Conciertos.
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Recitales.
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Bailes.
                    li 
                      i.fas.fa-check(style="color: #63C500")
                      | Demás actividades o espectáculos que aglomeran personas.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/9.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Construcción
              p Los procesos constructivos, sin importar su naturaleza, son generadores de ruido, especialmente por el uso de equipos y herramientas que funcionan con plantas motrices a gasolina, en su mayoría.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/10.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Perifoneo
              p El perifoneo es una de las formas de publicidad más empleadas en los entornos urbanos debido a su bajo costo.
              p Mucha de esta publicidad no está regulada, por lo que generalmente termina afectando a la población por los altos volúmenes de sonido que se manejan.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/11.jpg', alt='Imagen decorativa')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3 Niveles permitidos
    p(data-aos="fade-left") La intensidad del sonido se mide en decibelios (dB) y estos, a su vez, corresponden a la décima parte de un belio (B), unidad que fue nombrada de esta manera en honor al inventor del teléfono Alexander Graham Bell. La escala logarítmica con la que se construye el decibelio es adecuada para representar el espectro auditivo de los seres humanos.

    .row.justify-content-center.align-items-center 
      .col-lg-4.col-md-6.col-10.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/12.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        .cajon.p-4(style="background-color: #DEFFF8")
          p La exposición a ruidos de alta intensidad se puede dar de manera esporádica, como cuando se camina dentro del tráfico, se escucha música a alto volumen o cuando se opera un equipo que genera ruido, por lo que es importante, dependiendo de la situación, usar protección auditiva.
        p.mt-3(data-aos="fade-left") La Resolución 1792 de 1990 de los Ministerios de Trabajo y Seguridad Social establece directrices específicas en el ámbito laboral con respecto a la exposición al ruido. Estas directrices se basan en la intensidad del ruido y el tiempo de exposición. A medida que la intensidad del ruido aumenta, el tiempo de exposición permitido disminuye. De acuerdo con la norma, es posible exponerse a ruidos de alta intensidad, pero el tiempo de exposición debe ser menor conforme aumenta la intensidad del ruido, tal como se presenta a continuación:
    .row.justify-content-center.align-items-center 
      .col-lg-8.col-12.mb-3
        .cajon.p-4(style="background-color: #E7FFD1")
          .row.justify-content-center 
            .col-lg-10.col-12
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Exposición durante ocho (8) horas: 85 dBA.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Exposición durante cuatro (4) horas: 90 dBA.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Exposición durante dos (2) horas: 95 dBA.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Exposición durante una (1) hora: 100 dBA.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Exposición durante media (1/2) hora: 105 dBA.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Exposición durante un cuarto (1/4) de hora: 110 dBA.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Exposición durante un octavo (1/8) de hora: 115 dBA.

      .col-lg-4.col-md-6.col-10.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/13.svg', alt='Imagen decorativa')

    .row
      p(data-aos="fade-left") De acuerdo con la Organización Panamericana de la Salud (OPS), el máximo de decibeles (dB) permitidos en un ambiente al aire libre debe ser de aproximadamente 55 dB. Para tener una idea de la intensidad de los sonidos en dB, en la siguiente tabla se presentan algunos tipos de ruidos junto con el valor aproximado en dB.

    .row.justify-content-center 
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span #[i Niveles de ruido.]
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/14.svg', alt='En la tabla 6 se muestran los niveles de ruido teniendo en cuenta: el tipo de ruido, los dB que generan, el tipo de ambiente que generan y la escala de color que cada uno representa.')
    .row.mt-5
      p(data-aos="fade-left") De acuerdo con el Ministerio de Ambiente, los niveles de ruido permitidos pueden variar según el uso del suelo de áreas particulares, especialmente en centros urbanos, debido a que no todas las actividades humanas generan el mismo tipo ni la misma intensidad de ruido. A continuación, se presenta un cuadro con los niveles máximos de ruido permitidos según sectores y subsectores específicos.

    .row.justify-content-center 
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span #[i Estándares máximos permisibles de niveles de ruido ambiental expresados en decibeles dB-A.]
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/15.svg', alt='En la tabla 7 se muestran los estándares máximos que se permiten medida en decibeles. La tabla se divide en sector, subsector y los estándares máximos (día, noche).')
          figcaption Nota. Tomada del Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2006).

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_4 3.4 Fuentes
    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-6.col-10.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/16.svg', alt='Imagen decorativa')

      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") Una fuente, según la Resolución 0627 del 2006, se define como un elemento que origina energía mecánica vibratoria, comúnmente conocida como ruido o sonido. Puede ser considerada estadísticamente como una familia de generadores de ruido con diversas características físicas, distribuidos en el tiempo y el espacio. Las fuentes emisoras de ruido se dividen en dos categorías:
        .tarjeta.p-4.mb-3(style="background-color: #EEFFDE")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Fuentes Fijas de Ruido (FFR):] están ubicadas dentro de los límites físicos y legales de un predio, lo que significa que su ubicación está predefinida.
        .tarjeta.p-4.mb-3(style="background-color: #EEFFDE")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Fuentes Móviles de Ruido (FMR):] están constituidas principalmente por vehículos, maquinaria, o equipos que se desplazan de un lugar a otro, lo que implica que no están confinadas dentro de límites legales o físicos.
    .row 
      p(data-aos="fade-left") Además, existen fuentes naturales de ruido, que incluyen fenómenos como cascadas, sonidos producidos por animales o cualquier otra manifestación natural que genere sonidos de alta intensidad.

    .row.justify-content-center
      .col-lg-6.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span #[i Principales fuentes de ruido y algunos ejemplos]
        figure.desktop(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/17.svg' alt='En la figura 2 se muestran las principales fuentes de ruido con sus respectivos ejemplos. Se puede evidenciar: fuentes fijas, fuentes móviles y fuentes naturales.')
    .row.justify-content-center
      .col-lg-6.col-12 
        figure.movil(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/18.svg' alt='En la figura 2 se muestran las principales fuentes de ruido con sus respectivos ejemplos. Se puede evidenciar: fuentes fijas, fuentes móviles y fuentes naturales.')
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_5 3.5 Efectos ambientales y para la salud humana
    p(data-aos="fade-left") La contaminación acústica, o ruido, es una forma de contaminación que impacta tanto en la salud de las personas como en el entorno ambiental. Tiene efectos comprobados en la biología y el comportamiento de muchas especies, lo que subraya la necesidad de implementar estrategias para reducir los niveles de ruido, particularmente en áreas urbanas. A continuación, se describe con más detalle los principales efectos que tiene el ruido:

    .row.mb-5.mt-5
      .col-lg-3.col-md-6.col-10
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img1.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#C1E29A")
            .p-2
            h3.text-center(style="color: #264100") #[b Efectos sobre animales]

    .row.justify-content-center.align-items-center 
      .col-lg-8.col-102.mb-3
        .tarjeta.p-3(style="background-color: #DEFFF8")
          .row.justify-content-center 
            .col-lg-10.col-12
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Interfiere en los mecanismos de comunicación, reproducción y supervivencia de los animales.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Afecta a especies clave en procesos de polinización de plantas, como murciélagos, colibríes y abejas.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Provoca cambios en la conducta y los hábitos de los animales.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Causa estrés en peces y otros animales acuáticos debido al ruido generado por embarcaciones y plataformas petroleras.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Puede llevar a la desorientación y pérdida de habilidades de caza en animales subacuáticos.
      .col-lg-4.col-md-6.col-10.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/19.png', alt='Imagen decorativa')


    .row.mb-5.mt-5
      .col-lg-4.col-md-6.col-10
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img1.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#C1E29A")
            .p-2
            h3.text-center(style="color: #264100") #[b Efectos sobre la salud humana]

    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-6.col-10.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/20.png', alt='Imagen decorativa')

      .col-lg-8.col-12
        .tarjeta.p-3(style="background-color: #EEFFDE")
          .row.justify-content-center 
            .col-lg-10.col-12.mb-3
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Produce pérdida de la capacidad auditiva la exposición permanente a altos niveles de ruido, lo que genera daños a largo plazo en las estructuras del oído. Por lo tanto, es necesario desarrollar buenos hábitos en lo relacionado con el uso de protección auditiva, evitar el abuso en el uso de auriculares, reducir el volumen de la música y emplear aislamientos en la vivienda para evitar el ruido exterior.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Es un agente generador de estrés para las personas que se encuentran permanentemente expuestas. Igualmente puede afectar la capacidad de concentración y contribuir a la pérdida de memoria.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Crea problemas cardiovasculares y cerebrovasculares, en algunos estudios se ha encontrado correlación entre la exposición a los altos niveles de ruido y los ingresos a centros hospitalarios por accidentes cerebrovasculares, especialmente en personas mayores.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | Genera trastornos del sistema nervioso, lo puede llegar a generar problemas para conciliar el sueño y el desempeño laboral. Igualmente, en niños, puede afectar la comunicación, por lo que no son descartables efectos como aislamiento y poca interacción social. Por otro lado, la contaminación acústica genera bajos niveles de atención escolar lo cual afecta los procesos de aprendizaje.
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img           
            img(src='@/assets/curso/temas/img.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#FFEBDF")
            .p-4
            p.p-2 La contaminación acústica o ruido es una forma de contaminación que requiere atención especial por parte de las autoridades debido a sus efectos perjudiciales en la salud y el bienestar de la población, además de los conflictos sociales que puede generar por la intolerancia y la violación de las normas de convivencia. La protección de la salud auditiva comienza en el hogar con la adopción de hábitos saludables, como controlar el volumen de la música, reparar o reemplazar equipos ruidosos y mostrar respeto por el bienestar de los demás.

</template>

<script>
export default {
  name: 'Tema3',
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
