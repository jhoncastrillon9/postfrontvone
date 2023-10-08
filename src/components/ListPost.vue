/* eslint-disable */
<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="'/post/' + post.id">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ListPost',
  props: {
    msg: String
  },
  data() {
    return {
      posts: []
    }
  },
  mounted () {
    // Aquí puedes hacer una solicitud HTTP a tu API para obtener la lista de posts
    // Utiliza Axios o la librería que prefieras
    // Ejemplo de solicitud ficticia:
       axios.get('http://localhost:8000/api/posts')
       .then(response => {
         this.posts = response.data;
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
