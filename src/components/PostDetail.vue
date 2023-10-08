<template>
  <div>    
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
      <img :src="post.url" alt="Imagen del Post" />
      <p>{{ post.user }}</p>
      <p>{{ post.likes }}</p>
      <p>{{ post.location }}</p>
    </div>
    <router-link to="/post">Volver al listado de post</router-link>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DetailPost',
  props: {
    msg: String
  },
  data() {
    return {
      post: null, // Aquí almacenaremos el post obtenido de la API
    };
  },
  mounted() {
    const postId = this.$route.params.id; // Obtenemos el ID del post de la URL
    //Realiza una solicitud HTTP a tu API para obtener el detalle del post según el ID
    //Ejemplo de solicitud ficticia:
    axios.get(`http://localhost:8000/api/posts/${postId}`)
      .then(response => {
        this.post = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
})
</script>

<style>
/* Estiliza tu componente aquí */
</style>
