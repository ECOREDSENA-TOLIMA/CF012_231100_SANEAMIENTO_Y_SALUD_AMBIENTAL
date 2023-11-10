<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Presentación de informes
    .row.justify-content-center.align-items-center 
      .col-lg-8.col-12.mb-3
        .cajon.p-3(style="background-color: #E7FFD1")
          p(data-aos="fade-left") La presentación de informes técnicos es un paso crucial en los procesos de evaluación de parámetros ambientales como el monitoreo de olores ofensivos y ruido. Estos informes son fundamentales para la toma de decisiones, la formulación de proyectos y la planificación urbana y rural. Un informe técnico es un documento que comunica información recopilada y analizada de manera rigurosa, basándose en criterios específicos. La calidad de los datos recopilados y la precisión en el análisis son esenciales para garantizar la fiabilidad de estos informes.
      .col-lg-4.col-md-8.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/1.png', alt='Imagen decorativa')
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1 Informe de monitoreo de olores ofensivos
    .row.justify-content-center.align-items-center 
      .col-lg-4.col-md-8.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/2.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") En la elaboración de un informe sobre olores ofensivos, conforme a las directrices de la Resolución 2087 de 2014, es esencial incorporar una serie de elementos fundamentales. Estos comprenden los siguientes aspectos:
        p(data-aos="fade-left") #[b a) Datos generales:]  esta sección proporciona una visión general de la zona de estudio e incluye detalles relevantes para analizar las interacciones que pueden influir en el problema identificado. Entre estos datos generales, se deben considerar:
        .cajon.p-4(style="background-color: #EEFAFF")
          .row.justify-content-center 
            .col-lg-10.col-12
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Localización:] se debe especificar la ubicación precisa de la problemática, su distancia con respecto a centros poblados, vías de acceso, características geográficas, áreas de interés ecológico, población circundante y factores ambientales y climáticos predominantes.
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Identificación de la problemática:] aquí se describe en términos generales la naturaleza de la problemática y cómo se ve influenciada por factores tanto naturales como antropogénicos.
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Descripción de la actividad:] se detalla la actividad productiva relacionada con la problemática, incluyendo su duración, frecuencia y condiciones bajo las cuales se realiza. También se debe mencionar si estas actividades están de acuerdo con las regulaciones del ordenamiento territorial.
    
    .row.justify-content-center.align-items-center 
      .col-lg-8.col-12.mb-3
        .tarjeta.p-4.mb-2(style="background-color: #EEFFDE") #[b b) Métodos de muestreo y análisis utilizados:] en esta sección se especifica la metodología empleada para recopilar información, cómo se determinó el tamaño de la muestra, la selección de los sitios de muestreo, la cantidad de muestras recogidas y los equipos utilizados. La claridad y detalle en esta área contribuyen a una comprensión precisa del estudio.
        .tarjeta.p-4.mb-2(style="background-color: #EEFFDE") #[b c) Localización del sitio de monitoreo:] esta parte del informe describe de manera minuciosa el lugar específico donde se llevaron a cabo las mediciones. Debe incluir detalles sobre la altitud, velocidad del viento, temperatura y hora en la que se recolectaron las muestras, entre otros aspectos relevantes.
        .tarjeta.p-4.mb-2(style="background-color: #EEFFDE") #[b d) Modelos de dispersión de contaminantes:] si se utilizaron modelos de dispersión o se generaron mapas, se deben incluir todos los detalles que faciliten su interpretación. Esto abarca la información esencial para el modelo, como condiciones meteorológicas y topográficas, los criterios de modelación empleados y los resultados de las concentraciones máximas en intervalos horarios y diarios de las sustancias contaminantes durante el período evaluado.
      .col-lg-4.col-md-8.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/3.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center 
      .col-lg-4.col-md-8.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/4.svg', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        .tarjeta.p-4.mb-2(style="background-color: #EEFFDE") #[b e) Análisis de resultados y causas:] es crucial realizar un análisis de los resultados obtenidos y de las causas subyacentes de la problemática. Este análisis debe ser riguroso y basarse en observaciones y pruebas técnicas.
        .tarjeta.p-4.mb-2(style="background-color: #EEFFDE") #[b f) Información secundaria:] esta sección refuerza los aspectos analizados en el informe, proporcionando datos adicionales que contribuyan a la comprensión de los fenómenos observados.
        .tarjeta.p-4.mb-2(style="background-color: #EEFFDE") #[b g) Conclusiones:] deben estar respaldadas por la información recopilada y resumir de manera concisa los aspectos más relevantes descubiertos durante el proceso de observación.
        .tarjeta.p-4.mb-2(style="background-color: #EEFFDE") #[b h) Recomendaciones:] se incluyen recomendaciones dirigidas a las autoridades locales para identificar soluciones alternativas y medidas de mitigación con el objetivo de abordar la problemática de los olores ofensivos de manera efectiva. Estas recomendaciones deben ser prácticas y basadas en la evidencia recopilada.
    .row 
      p(data-aos="fade-left") Esta estructura garantiza que el informe sea completo, informativo y útil para la toma de decisiones y la resolución de problemas relacionados con los olores ofensivos.
      
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2 Informe de monitoreo de ruido
    p(data-aos="fade-left") Un informe de monitoreo de ruido, como establece la Resolución 0627 de 2006, debe incluir una serie de elementos clave para reflejar de manera precisa los resultados del trabajo de campo. Los aspectos que se deben considerar en la presentación de dicho informe incluyen:
    .row.justify-content-center.align-items-center 
      .col-lg-8.col-12.mb-3
        .tarjeta.p-1(style="background-color: #EEFAFF")
          .row.justify-content-center
            .col-lg-10.col-12
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Fecha y hora de la medición:] debe indicarse cuándo se realizó el monitoreo y la duración del mismo.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Responsable del informe:] se debe proporcionar información básica sobre la persona o entidad que generó el informe.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Ubicación de la medición:] se especifica el lugar donde se realizaron las mediciones de ruido.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Propósito de la medición:] se describe el motivo por el cual se llevó a cabo el monitoreo de ruido.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Norma utilizada:] si se aplicó una norma específica para la medición, se debe indicar la norma y las razones para su elección.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Tipo de instrumentación utilizado:] debe especificarse qué tipo de instrumentos se emplearon para la medición.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Equipo de medición utilizado:] incluye información sobre los números de serie de los instrumentos utilizados.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Datos de calibración:] se indican los datos de calibración, el ajuste del instrumento y la fecha de vencimiento del certificado de calibración del pistófono.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Procedimiento de medición:] se describe cómo se realizaron las mediciones de ruido.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Ruido residual:] si no se pudo medir el ruido residual, se deben proporcionar las razones detrás de esta limitación.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Condiciones predominantes generales:] se detallan las condiciones predominantes en la zona de estudio, como características geográficas y ambientales.
      .col-lg-4.col-md-8.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/5.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center 
      .col-lg-4.col-md-8.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/6.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        .tarjeta.p-1(style="background-color: #EEFAFF")
          .row.justify-content-center
            .col-lg-10.col-12
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b] Condiciones atmosféricas: incluye información sobre factores climáticos como la dirección y velocidad del viento, lluvia, temperatura, presión atmosférica y humedad.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b] Procedimiento para la medición de la velocidad del viento: describe cómo se midió la velocidad del viento.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b] Naturaleza/estado del terreno: ofrece información sobre el terreno entre la fuente y el receptor, incluyendo detalles sobre superficies, geometría, barreras y otros factores que influyen en los resultados.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b] Resultados numéricos y comparación con la normatividad aplicada: presenta los resultados de las mediciones y los compara con las normas aplicadas.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b] Descripción de los tiempos de medición: detalla los tiempos de medición, intervalos y procedimientos de referencia.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b] Variabilidad de las fuentes: describe la variabilidad de las fuentes de ruido.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b] Descripción de las fuentes de sonido: proporciona información cualitativa sobre las fuentes de ruido.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b] Reporte de memoria de cálculo: incluye detalles sobre la incertidumbre, ajustes y otros cálculos realizados.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b] Conclusiones y recomendaciones: resume las conclusiones del informe y ofrece recomendaciones basadas en los resultados.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b] Croquis detallado: muestra gráficamente la posición de las fuentes de sonido, objetos relevantes y puntos de observación y medición.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b] Copia de los certificados de calibración electrónica de los equipos: se adjuntan copias de los certificados de calibración de los instrumentos utilizados.
    .row
      p(data-aos="fade-left") Esta estructura proporciona una base sólida para la presentación de informes de monitoreo de ruido que sean completos y precisos.
      

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
