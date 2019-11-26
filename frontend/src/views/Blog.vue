<template>
  <div>
    <!-- 
        1. make a component for easy reuse
        2. post detail page for display of full post
        3. styling.. 
       -->
    <section v-for="(post, index) in posts" :key="index">
      <h2>{{ post.headline }} vom {{ post.created_at }}</h2>
      <h3>{{ post.teaser }}</h3>
      <p>{{ post.content }}</p>
      <p>by @{{ post.author_id }}</p>
      <hr />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: null
    };
  },
  mounted() {
    axios.get("/posts").then(res => {
      console.log(res);
      this.posts = res.data;
    });
  }
};
</script>
