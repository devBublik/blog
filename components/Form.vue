<template lang="pug">
.inner.inner--dark
    .form
        .form__col
            img.form__img(src='/form-image.png', alt='')
        .form__col
            .form__title Стань участником проекта
            form
                input.input(type='text' placeholder='Имя')
                input.input(type='text', placeholder='Телефон')
                input.input(type='text' placeholder='Email')
                button.btn Присоединиться
</template>
<script>
export default {
  name: "Form",
};
</script>
