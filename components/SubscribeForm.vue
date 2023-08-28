<template lang="pug">
.inner  
    .subscribe
      .subscribe__text Подпишись на рассылку
      .subscribe__form
        input.input(type='text' placeholder='Email')
        button.subscribe__btn.btn Подписаться
</template>
<script>
export default {
  name: "SubscribeForm",
};
</script>
