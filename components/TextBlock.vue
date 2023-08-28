<template lang="pug">
.inner.inner--s
    article(v-html='data')
</template>

<script>
export default {
  name: "TextBlock",
  props: {
    data: {
      default: () => "",
    },
  },
};
</script>
