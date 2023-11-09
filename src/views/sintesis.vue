<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del componente formativo Monitoreo de olores ofensivos y ruido, lo cual desempeña un papel crucial en la gestión ambiental urbana. El seguimiento constante de olores y niveles de ruido permite evaluar la calidad de vida de los residentes y tomar medidas para mitigar impactos negativos. Mediante sensores y tecnologías avanzadas, se recopilan datos en tiempo real, identificando fuentes de malos olores y ruidos excesivos. Esto facilita la implementación de regulaciones efectivas y la planificación urbana adecuada. Al integrar el monitoreo de olores y ruido en estrategias urbanas, se crea un entorno más saludable y agradable, mejorando el bienestar de la comunidad en general.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
