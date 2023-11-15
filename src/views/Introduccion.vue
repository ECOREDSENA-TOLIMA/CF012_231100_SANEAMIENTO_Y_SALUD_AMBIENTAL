<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-left") Los olores y ruidos ofensivos son invasiones sensoriales que perturban la calidad de vida. Los aromas desagradables, como los residuos de basura o productos químicos, pueden causar malestar y náuseas. Por otro lado, los ruidos estridentes, como el tráfico constante o la música a todo volumen, afectan la tranquilidad y la salud mental de las personas. Estas molestias cotidianas pueden generar tensiones en la comunidad y deteriorar las relaciones vecinales. Es crucial promover la conciencia y el respeto hacia los demás, adoptando medidas para minimizar estos problemas, como el adecuado manejo de desechos y el uso responsable del sonido, con el fin de vivir en un entorno más armonioso y agradable para todos.

    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/L2gpCDe5rGw?si=2bePbJJtuOl2lrH3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
