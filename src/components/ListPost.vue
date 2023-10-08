<template>
  <div class="post-list-container">
    <div class="post-list">
      <ul>
        <li v-for="post in posts" :key="post.id" class="post-item">
          <div class="post-image">
            <img :src="post.url" alt="Post Image">
          </div>
          <div class="post-content">
            <h2 class="post-title">{{ post.title }}</h2>          
            <router-link :to="'/post/' + post.id" class="post-link">Read More</router-link>
          </div>
        </li>
      </ul>
    </div>
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

<style scoped>
.post-list-container {
  display: flex;
  justify-content: center;
}

.post-list {
  margin: 0;
  padding: 0;
  list-style: none;
  max-width: 800px; /* Optional: limit the width of the content */
}

.post-item {
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.post-image {
  width: 30%;
  padding: 10px;
  box-sizing: border-box;
}

.post-image img {
  display: block;
  width: 100px;
  height: auto;
}

.post-content {
  width: 70%;
  padding: 10px;
  box-sizing: border-box;
}

.post-title {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 24px;
}

.post-excerpt {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.5;
}

.post-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
}

.post-link:hover {
  background-color: #0069d9;
}
</style>