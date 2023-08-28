<template>
  <div class="inner">
    <h2 v-show="route.params.id !== home" class="article-block-list__title">
      {{ articles.title }}
    </h2>
    <div class="article-block-list">
      <div
        v-for="article in articles.articles"
        :key="article.image"
        class="article-block-list__item"
      >
        <ArticleBlock :imageBlock="article" />
      </div>
    </div>
  </div>
</template>
<script>
import ArticleBlock from "@/components/ArticleBlock.vue";
export default {
  name: "ArticlesListBlock",
  components: {
    ArticleBlock,
  },
  props: {
    articles: {
      default: () => {},
    },
    title: {
      default: () => "",
    },
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>
