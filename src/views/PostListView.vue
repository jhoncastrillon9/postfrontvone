<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logoIUD.png" style="height:100px">
    <ListPost msg="Listado de Post"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListPost from '@/components/ListPost.vue' // @ is an alias to /src

export default defineComponent({
  name: 'PostListView',
  components: {
    ListPost
  }
})
</script>
