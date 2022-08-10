<template>
  <div class="principal">
    <div class="row row_principal">
      <div class="col-md-12">
        <div class="row div_present">
          <div class="col-md-4 div_image">
            <img :src="image" alt="perfil" class="img_perfil"/>
          </div>
          <div class="col-md-8 div_title">
            <div class="contenedor">
              <p class="bienvenida">
                Hola.! Bienvenido a mi portafolio.
                <span>&#160;</span>
              </p>
            </div>
          </div>
          <div class="col-md-12">
            <p class="title_nombre">Javier Hernandez</p>
          </div>
          <div class="col-md-12">
            <div class="row">
              <div class="">
                <TabMenu :model="items" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../../assets/images/img1.png'
export default {
  name: 'HomePrincipal',
  data() {
    return {
      image: image,
      items: [
        {
          label:'Skills',
          icon:'pi pi-fw pi-file'
        },
        {
          label:'Proyectos',
          icon:'pi pi-fw pi-file'
        },
        {
          label:'Contactos',
          icon:'pi pi-fw pi-file'
        },
        {
          label:'CV',
          icon:'pi pi-fw pi-file'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Home.css">
</style>
