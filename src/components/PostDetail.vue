<template>
  <div class="post-detail">
    <div v-if="post" class="post-content">
      <h2 class="post-title">{{ post.title }}</h2>
      <img :src="post.url" alt="Imagen del Post" class="post-image" />
      <div class="icon-container">
        <div class="icon">
          <i class="fas fa-thumbs-up"> </i>
          <span>   {{ post.likes }} </span>        
        </div>
        <div class="icon">
          <i class="fas fa-map-marker-alt"></i> 
          <span> {{ post.location }} </span>          
        </div>
        <div class="icon">
          <i class="fas fa-user"></i> 
          <span>{{ post.user }}</span>          
        </div>
      </div>
      <p class="post-text">{{ post.content }}</p>
    </div>
    <div>
      <router-link to="/post" class="back-link">Regresar</router-link>
    </div>
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
/* Estilos para el componente DetailPost */
.post-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-title {
  font-size: 24px;
  margin-top: 0;
}

.post-content {
  padding: 20px;
}

.post-image {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}

.icon-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
}

.icon {
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 0 10px;
}

.post-text {
  font-size: 16px;
  line-height: 1.5;
}

.back-link {
  display: block;
  margin-top: 20px;
  font-size: 16px;
  text-decoration: none;
  color: #007BFF;
}

.back-link:hover {
  text-decoration: underline;
}
.back-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
}

.back-link:hover {
  background-color: #0069d9;
}
</style>