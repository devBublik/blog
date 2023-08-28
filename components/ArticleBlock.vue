<template lang="pug">
a.article(:href="imageBlock.link")
    .article__wrapper
        .article__img
            img.article__image(:src="imageBlock.image")
        h3.article__title {{ imageBlock.title }}
    button.article__btn Читать 
</template>
<script>
export default {
  name: "ArticleBlock",
  props: {
    imageBlock: {
      default: () => {},
    },
  },
};
</script>
