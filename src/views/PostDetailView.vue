<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logoIUD.png" style="height:100px">
    <PostDetail msg="Detalle de post"/>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import PostDetail from '@/components/PostDetail.vue' // @ is an alias to /src

export default defineComponent({
  name: 'PostDetailView',
  components: {
    PostDetail
  }
})
</script>
