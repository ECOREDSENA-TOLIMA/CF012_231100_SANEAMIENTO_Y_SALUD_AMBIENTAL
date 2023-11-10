<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Monitoreo de ruido
    .row.justify-content-center.align-items-center 
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") El  monitoreo del ruido es una función clave de las autoridades de control ambiental para identificar y controlar la contaminación auditiva. Esto implica la identificación de fuentes de ruido, ya sean fijas o móviles, y la medición de sus niveles de ruido, así como la evaluación de su naturaleza y frecuencia. Las Corporaciones Autónomas Regionales y las autoridades ambientales en centros urbanos tienen la responsabilidad de llevar a cabo este seguimiento para evaluar y reducir el ruido en sus áreas. Este monitoreo se enfoca en tres aspectos principales:
        .tarjeta.p-3.mb-3(style="background-color: #DEFFF8") #[b a) Monitoreo de fuentes fijas:] identifica estas fuentes, describe su naturaleza, frecuencia y momentos de mayor intensidad de ruido, y evalúa las medidas tomadas para mitigar los efectos del ruido. Se verifica si cumplen con los niveles máximos permitidos según la normativa aplicable.
        .tarjeta.p-3.mb-3(style="background-color: #DEFFF8") #[b b) Monitoreo de fuentes móviles:] se realizan pruebas estáticas y dinámicas para determinar los niveles de ruido emitidos por vehículos y equipos móviles durante su operación.
        .tarjeta.p-3.mb-3(style="background-color: #DEFFF8") #[b c) Monitoreo de ruido ambiental:] se enfoca en evaluar el comportamiento del ruido en áreas específicas, especialmente en zonas con más de 100,000 habitantes. Se utiliza para crear mapas de ruido que ayudan en la planificación urbana y en el desarrollo de estrategias para mitigar los impactos del ruido en estas áreas.
      .col-lg-4.col-md-6.col-12.mb-3
        figure(data-aos="fade-right") 
          img(src='@/assets/curso/temas/tema4/1.png', alt='Imagen decorativa')
    .row
      p(data-aos="fade-left") La Resolución 0627 del 2006 en Colombia establece normas específicas para la medición y monitoreo de niveles de ruido. En cuanto a los equipos de medición, la norma proporciona recomendaciones precisas:
    .row.justify-content-center.align-items-center 
      .col-lg-4.col-md-6.col-12.mb-3
        figure(data-aos="fade-right") 
          img(src='@/assets/curso/temas/tema4/2.svg', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        .tarjeta.p-3.mb-3(style="background-color: #EEFFDE")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Tipo de instrumentos:] se requieren sonómetros de tipo 1 o, como mínimo, tipo 2. Estos sonómetros deben ser capaces de medir el equivalente de presión sonora con ponderación frecuencial (A)  directa o indirecta (dB(A)). La ponderación (A) filtra las altas y bajas frecuencias, lo que coincide con la sensibilidad del oído humano a las frecuencias sonoras.
        .tarjeta.p-3.mb-3(style="background-color: #EEFFDE")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Dotación de los equipos:] los sonómetros deben estar equipados con un pistófono o calibrador para asegurar la precisión, una pantalla antiviento para evitar distorsiones debido al viento y un trípode para el montaje. Para mediciones de ruido ambiental, se recomienda una extensión de micrófono.
          
        .tarjeta.p-3.mb-3(style="background-color: #EEFFDE")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Calibraciones:] antes de realizar mediciones, los equipos deben calibrarse según las condiciones del entorno. Se sugiere utilizar un pistófono o calibrador para este propósito. Los certificados de calibración electrónica deben estar actualizados y adjuntarse al informe técnico.
        .tarjeta.p-3.mb-3(style="background-color: #EEFFDE")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Condiciones meteorológicas:] las mediciones deben llevarse a cabo en condiciones de tiempo seco, sin lluvia, llovizna, truenos o granizo. En caso de mediciones en carreteras, los pavimentos deben estar secos, y la velocidad del viento no debe superar los tres metros por segundo (3 m/s).
    .row
      .cajon.p-4(style="background-color: #DEFFF8")
        p(data-aos="fade-left") Estas directrices aseguran que las mediciones de ruido se realicen de manera precisa y estandarizada, lo que es esencial para evaluar y controlar los niveles de ruido de acuerdo con los requisitos legales y regulatorios.
    .row.mt-3
      p(data-aos="fade-left") Los equipos de medición de ruido desempeñan un papel fundamental en la sociedad al permitir el cumplimiento de normativas, la protección de la salud pública, el control de la contaminación acústica y la planificación de entornos urbanos adecuados. Además, facilitan investigaciones sobre los impactos del ruido en la salud, la monitorización continua de áreas críticas, el desarrollo de estrategias de mitigación y la sensibilización del público sobre la importancia de reducir la contaminación acústica, contribuyendo a entornos más saludables y sostenibles. A continuación, se exponen algunos de los equipos utilizados en la medición, así como sus características y/o recomendaciones de uso.

    .row.mt-3 
      .tarjeta.tarjeta.p-4.mb-5(style="background-color: #EEFFDE")
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Sonómetros tipo 1
              p Son dispositivos altamente precisos utilizados para medir niveles de ruido con exactitud. Son ideales para aplicaciones técnicas y estudios que requieren mediciones muy precisas, como evaluaciones en entornos industriales y estudios de impacto ambiental. Estos sonómetros cumplen con estándares rigurosos y son esenciales para garantizar el cumplimiento de regulaciones y normativas relacionadas con el control del ruido.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/3.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Sonómetros tipo 2
              p Son instrumentos de medición de niveles de ruido menos precisos que los sonómetros tipo 1, pero aún adecuados para muchas aplicaciones. Son ampliamente utilizados en situaciones generales de medición de ruido, como evaluaciones del ruido ambiental, verificaciones de cumplimiento y aplicaciones de control de ruido en áreas urbanas. Aunque ofrecen una precisión moderada, son suficientes para la mayoría de los propósitos técnicos y reguladores relacionados con el ruido.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/4.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Sonómetro digital tipo 1 con trípode
              p Es un instrumento altamente preciso y versátil utilizado para medir niveles de ruido en diversas aplicaciones, desde estudios técnicos detallados hasta evaluaciones de ruido ambiental. Su alta precisión lo hace adecuado para situaciones donde se requiere un alto grado de exactitud en las mediciones. Además, el trípode proporciona estabilidad al equipo, lo que mejora aún más la precisión de las mediciones. Estos instrumentos son esenciales en el monitoreo y control de la contaminación auditiva y son ampliamente utilizados en campos como la acústica, la ingeniería de sonido y la evaluación ambiental.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/5.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Sonómetro y calibrador acústico
              p Son herramientas críticas en la medición precisa de niveles de ruido. El sonómetro es un dispositivo utilizado para registrar y cuantificar los niveles de presión sonora en el entorno, mientras que el calibrador acústico es una herramienta que se utiliza para ajustar y verificar la precisión del sonómetro. La calibración es esencial para garantizar que el sonómetro ofrezca mediciones precisas y confiables. Estas herramientas se utilizan en una variedad de aplicaciones, como la evaluación de la contaminación auditiva, el monitoreo de ruido ambiental y la conformidad con regulaciones de seguridad ocupacional. La inclusión de información sobre la calibración en los informes técnicos es fundamental para respaldar la calidad de las mediciones y garantizar su validez.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/6.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Kit de sonómetro, calibrador y trípode
              p Un kit que incluye un sonómetro, un calibrador y un trípode es una combinación ideal para realizar mediciones de ruido precisas y confiables. El sonómetro se utiliza para registrar los niveles de ruido, el calibrador asegura que el sonómetro esté calibrado correctamente para mediciones precisas, y el trípode proporciona estabilidad al equipo durante las mediciones, lo que es esencial para obtener resultados precisos y coherentes. Este kit es ampliamente utilizado en estudios técnicos y aplicaciones donde la precisión es fundamental.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/7.jpg', alt='Imagen decorativa')
    
    .row.justify-content-center
      .col-lg-8.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span #[i Partes equipos de medición (Sonómetro)]
        figure.desktop(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/8.svg' alt='En la figura 3 se muestra un sonómetro y cada una de las partes que lo componen.')
    .row.justify-content-center
      .col-lg-6.col-12 
        figure.movil(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/9.svg' alt='En la figura 3 se muestra un sonómetro y cada una de las partes que lo componen.')

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
