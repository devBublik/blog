<template lang="pug">
.inner
    figure.image-block
      .image-block__img
        img.image-block__image(:src='imageBlock.src')
        figcaption.image-block__figcaption
          div {{imageBlock.caption}}
    
</template>
<script>
export default({
    name: 'ImageBlock',
    props: {
        imageBlock: {
            default: () => {}
        }
    }
})
</script>
