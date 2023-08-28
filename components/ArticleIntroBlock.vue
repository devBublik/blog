<template lang="pug">
.inner
    .article-intro-block
      .article-intro-block__article
        .article-intro-block__img
          img.article-intro-block__image(:src='block.image' :alt='block.title')
      .article-intro-block__article
        h1.article-intro-block__title {{block.title}}
        .article-intro-block__text.time-block
          img.article-intro-block__icon(src='~/assets/sprite/svg/eye.svg' alt='')
          .time-block__val  {{ block.reading_time }} мин время чтения
        .article-intro-block__text.views-block
          img.article-intro-block__icon(src='~/assets/sprite/svg/time.svg' alt='')
          .view-block__text {{ block.views_count }} прочитали статью
        .article-intro-block__info
          | {{block.short_description}}
</template>
<script>
export default {
  props: {
    block: {
      default: () => {},
    },
  },
};
</script>
