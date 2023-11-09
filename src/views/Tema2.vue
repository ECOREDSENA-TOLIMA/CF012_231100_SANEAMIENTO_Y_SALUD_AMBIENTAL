<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Monitoreo olores
    .row.justify-content-center.align-items-center 
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") El monitoreo de olores ofensivos es una función esencial de las autoridades ambientales y de salud, destinada a evaluar y controlar las posibles afectaciones ambientales que pueden perjudicar el bienestar y la salud de la población. Para lograr mediciones precisas y que tengan validez legal, es imperativo emplear metodologías, equipos y herramientas científicas que permitan calcular de manera precisa los niveles de concentración de las sustancias generadoras de olores en áreas específicas.
        .cajon.p-4(style="background-color: #E7FFD1")
          p(data-aos="fade-left") El monitoreo constante de las variables relacionadas con los olores ofensivos proporciona información crucial para la toma de decisiones informadas. Esto incluye la identificación de las fuentes de emisión de olores, la evaluación de los niveles de concentración en el aire, la determinación de la calidad del aire en comunidades y áreas industriales, y la documentación de posibles incumplimientos de regulaciones ambientales.
      .col-lg-4.md-6.col-12.mb-3
        figure(data-aos="fade-right") 
          img(src='@/assets/curso/temas/tema2/1.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/2.svg' alt='Imagen decorativa')
          .tarjeta(style="background-color:#DEFFF8")
            .p-4
            p.p-2 El monitoreo no solo es esencial para medir el impacto de los olores ofensivos en la calidad del aire, sino también para desarrollar estrategias efectivas de mitigación y control. Al contar con datos precisos, las autoridades pueden tomar decisiones informadas y diseñar políticas y regulaciones que contribuyan a la solución de los problemas identificados, protegiendo así la salud y el bienestar de la población. La implementación de un monitoreo riguroso es un paso fundamental para abordar de manera efectiva los desafíos relacionados con los olores ofensivos en el entorno.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Tipos de monitoreo
    p(data-aos="fade-left") El monitoreo de olores implica un estudio detallado de las características clave de los olores, ya que estas características determinan si un olor se considera ofensivo o no. Estas características incluyen:

    .row.justify-content-center.align-items-center 
      .col-lg-4.col-md-6.col-8.mb-3
        figure(data-aos="fade-right") 
          img(src='@/assets/curso/temas/tema2/3.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        .cajon.p-3(style="background-color: #E7FFD1")
          .row.justify-content-center 
            .col-lg-10.col-12
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Intensidad:] se refiere a la fuerza o potencia con la que se percibe un olor. La intensidad puede variar desde olores muy débiles hasta olores extremadamente fuertes, y esta característica es importante para evaluar cuán notorio es un olor en un entorno determinado.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Calidad:] permite diferenciar y caracterizar un olor en particular. Esto significa que, por ejemplo, se puede distinguir entre el olor de las flores, el olor a comida cocinada o el olor a productos químicos. La calidad del olor es esencial para identificar la fuente y la naturaleza del olor.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Aceptabilidad:] esta característica se relaciona con el gusto o disgusto de un olor por parte de las personas expuestas. Algunos olores son considerados agradables, mientras que otros son desagradables. La aceptabilidad del olor es subjetiva y puede variar de una persona a otra.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Umbral de olor:] se refiere a la concentración mínima de un compuesto odorífico que es capaz de provocar una respuesta perceptible en el sentido del olfato. Este umbral puede variar según el compuesto y la sensibilidad individual de las personas.
    
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8.col-12.mb-3
        .cajon.p-3(style="background-color: #DEFFF8")
          p(data-aos="fade-left") Los métodos de medición de olores se dividen en dos categorías principales: sensoriales y analíticos. Los métodos sensoriales se basan en la percepción del olfato humano y permiten evaluar la intensidad, calidad, aceptabilidad y umbral de olor, lo que proporciona información subjetiva sobre cómo las personas experimentan los olores. Los métodos analíticos, por otro lado, implican análisis químicos cuantitativos para medir las concentraciones de compuestos específicos en los olores. Estos métodos proporcionan datos objetivos y precisos sobre la composición química de los olores. La elección entre estos enfoques depende de los objetivos de la medición y los recursos disponibles, y a menudo se utilizan en conjunto para una evaluación completa de los problemas de olores ofensivos.
      .col-lg-4.col-md-6.col-8.mb-3
        figure(data-aos="fade-right") 
          img(src='@/assets/curso/temas/tema2/4.jpg', alt='Imagen decorativa')
    .row 
      p(data-aos="fade-left") A continuación, se describen con mayor detalle estos métodos:
    
    .row.mb-5.mt-5
      .col-lg-3.col-md-6.col-10
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img1.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#C1E29A")
            .p-2
            h3.text-center(style="color: #264100") #[b Métodos sensoriales]
    .row 
      p(data-aos="fade-left") Los métodos sensoriales utilizan a personas para evaluar la intensidad, calidad y el nivel de agrado o desagrado de un olor, así como para determinar las concentraciones perceptibles por una persona promedio. Estos métodos, aunque útiles para evaluar la percepción humana de los olores, no permiten identificar las sustancias químicas responsables de los mismos. Existen tres tipos de medición en métodos sensoriales:
    .row.justify-content-center.align-items-center 
      .col-lg-4.col-md-6.col-8.mb-3
        figure(data-aos="fade-right") 
          img(src='@/assets/curso/temas/tema2/5.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        .tarjeta.p-3.mb-3(style="background-color: #EEFFDE")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Olfatometría dinámica:] implica la exposición controlada de un grupo de personas a un olor específico para que evalúen su nivel de molestia o desagrado. A través de metodologías estadísticas se obtienen muestras representativas y datos que sirven para tomar decisiones basadas en la interpretación de los valores de concentración de inmisión, comúnmente denominados mapas de olores.
        .tarjeta.p-3.mb-3(style="background-color: #EEFFDE")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Uso de nomogramas:] se basa en modelos matemáticos que relacionan dos variables, como la distancia entre la población y una fuente de olor y el grado de molestia registrado por las personas que viven cerca de estas fuentes. Los nomogramas ayudan a visualizar esta relación.
        .tarjeta.p-3.mb-3(style="background-color: #EEFFDE")
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | #[b Mediciones en campo:] implica la detección de olores en el entorno a través de observadores ubicados en diferentes lugares de la zona de estudio. Estos observadores registran datos de intensidad y el índice de molestia. Utilizan tablas FIDO (Frecuencia, Intensidad y Duración del Olor) para caracterizar los olores según su frecuencia, duración e intensidad.
    .row
      p(data-aos="fade-left") Estos métodos sensoriales son esenciales para comprender cómo las personas perciben y reaccionan a los olores en su entorno. Sin embargo, es importante destacar que estos métodos no brindan información detallada sobre la composición química de los olores, lo que puede limitar la capacidad de identificar las sustancias específicas responsables de las molestias odoríficas. A continuación, se proporciona un ejemplo de cómo se caracterizan los olores utilizando métodos sensoriales:

    .row.justify-content-center 
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span #[i Umbrales olfativos y de seguridad de las principales sustancias causantes de olores ofensivos]
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/6.svg', alt='En la tabla 5 se muestra un ejemplo de tabla FIDO para la caracterización de olores. Se contemplan variables como la duración, frecuencia y la intensidad del olor.')
    
    .row.mb-5.mt-5
      .col-lg-3.col-md-6.col-10
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img1.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#C1E29A")
            .p-2
            h3.text-center(style="color: #264100") #[b Métodos analíticos]
    
    .row.justify-content-center.align-items-center 
      .col-lg-8.col-10
        p(data-aos="fade-left") Los métodos analíticos desempeñan un papel importante en la detección de olores al permitir la identificación de sustancias volátiles y sus concentraciones en el aire. Aunque los métodos analíticos son valiosos para medir la presencia y la concentración de compuestos odoríficos, no superan la sensibilidad y la percepción del olfato humano en lo que respecta a la detección de olores molestos. La presencia o ausencia de sustancias químicas específicas en una mezcla de gases puede afectar la percepción de un olor, lo que subraya la importancia de los métodos analíticos para establecer los niveles máximos permitidos de ciertas sustancias en el aire, de acuerdo con las regulaciones vigentes. Los principales métodos analíticos incluyen:
        .cajon.p-4(style="background-color: #DEFFF8")
          .row.justify-content-center
            .col-lg-10.col-12
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Narices electrónicas:] estas se basan en sensores que reaccionan de manera única a diferentes componentes químicos en una mezcla de gases. La respuesta química de estos sensores se evalúa en conjunto, y los valores obtenidos se relacionan con la intensidad o concentración del olor.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Espectrómetros infrarrojos:] estos instrumentos se utilizan para medir la absorción de luz en la región infrarroja del espectro electromagnético por moléculas. Esta absorción está relacionada con las vibraciones moleculares y permite la identificación de grupos funcionales presentes en una muestra.
                li 
                  i.fas.fa-check(style="color: #63C500")
                  | #[b Modelización:] se basa en modelos matemáticos para predecir cómo se dispersan los contaminantes que generan olores en el entorno. Utiliza datos meteorológicos y de la instalación, junto con información sobre los procesos de producción y los generadores de olores, para prever cómo se comportarán los olores en un área determinada.
      .col-lg-4.col-md-8.col-12
        figure(data-aos="fade-right") 
          img(src='@/assets/curso/temas/tema2/7.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#FFEBDF")
            .p-4
            p.p-2 Estos métodos analíticos son esenciales para la medición precisa de la composición química de los olores y para el cumplimiento de los estándares reguladores relacionados con la calidad del aire. Sin embargo, se reconoce que el olfato humano sigue siendo insustituible en la percepción de olores molestos.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Equipos de medición
    
    p(data-aos="fade-left") La medición de olores a través de métodos analíticos es esencial para detectar sustancias nocivas en el ambiente, especialmente cuando el olfato humano no es capaz de percibirlas en concentraciones bajas. Estos equipos son fundamentales para la medición precisa y la identificación de compuestos odoríficos, lo que permite evaluar y controlar los olores ofensivos de manera efectiva. Cada uno tiene sus aplicaciones específicas, dependiendo de los objetivos de la medición y las sustancias químicas de interés.
    p.mb-5(data-aos="fade-left") A continuación, se presentan algunos de los principales equipos que se emplean en la identificación y caracterización de olores.

    .row.mt-5 
      .tarjeta.tarjeta.p-4.mb-5(style="background-color: #EEFFDE")
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Olfatómetro
              p Es un dispositivo que se utiliza para evaluar el grado de molestia de un olor específico. Este instrumento se basa en la evaluación de las reacciones de un panel de personas (panelistas) frente a diferentes concentraciones de sustancias químicas odoríferas. Los panelistas huelen el olor en cuestión y califican su intensidad y nivel de molestia en una escala predefinida. Esta información se utiliza para determinar el nivel de percepción y molestia de un olor en función de su concentración.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/8.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Cromatógrafo de gases
              p Este equipo separa y detecta los compuestos químicos en una muestra de gas. Es ampliamente utilizado para analizar la composición química de los olores ofensivos y determinar la presencia y concentración de compuestos específicos.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/9.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Espectrómetro de masas
              p Comúnmente se combina con el cromatógrafo de gases para proporcionar información detallada sobre los compuestos químicos presentes en una muestra de gas. Permite la identificación precisa de sustancias químicas basada en sus masas moleculares.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/10.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Narices electrónicas
              p Estos dispositivos utilizan sensores para detectar y cuantificar la presencia de compuestos químicos en el aire. Aunque no pueden identificar sustancias específicas, son útiles para medir la concentración de compuestos en el aire.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/11.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Analizadores de olores portátiles
              p Estos dispositivos compactos se utilizan en campo para medir la concentración de olores y compuestos volátiles en el aire. Son prácticos para realizar evaluaciones rápidas y móviles.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/12.jpg', alt='Imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Espectrómetro infrarrojo
              p Estos equipos utilizan la absorción de luz infrarroja para identificar y cuantificar compuestos químicos en una muestra. Son útiles para la identificación de grupos funcionales en sustancias químicas.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/13.jpg', alt='Imagen decorativa')
    .row
      .tarjeta.p-4(style="background-color: #DEFFF8")
        p(data-aos="fade-left") Estos equipos son fundamentales para la medición precisa y la identificación de compuestos odoríficos, lo que permite evaluar y controlar los olores ofensivos de manera efectiva. Cada uno tiene sus aplicaciones específicas, dependiendo de los objetivos de la medición y las sustancias químicas de interés.
          

</template>

<script>
export default {
  name: 'Tema2',
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
