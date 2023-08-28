<template lang="pug">
.footer
  .inner
    .footer__info
      .footer__col
        .footer__logo
          img(src='/Logo.svg' alt='')
        .footer__text Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
      .footer__col
        .footer__title
          | email
        a.footer__value(href='mailto:testblogsupport@gmail.com') testblogsupport@gmail.com
        ul.footer__socials
          li.footer__socials-item
            a(href='/')
              img(src='/telegram.svg' alt='telegram')
          li.footer__socials-item
            a(href='/')
              img(src='/instagram.svg' alt='instagram')
          li.footer__socials-item
            a(href='/')
              img(src='/Vector.svg' alt='vk')
    .subscribe.subscribe--no-margin
      .subscribe__text Подпишись на рассылку
      .subscribe__form
        input.input(type='text' placeholder='Email')
        button.subscribe__btn.btn Подписаться
</template>

<script>
export default {
  name: "TheFooter",
};
</script>
