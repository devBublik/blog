<template>
    <div class="wrapper">
        <div class="content">
            <TheHeader/>
            <slot />
        </div>
        <TheFooter/>
    </div>   
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue';
export default ({
    components: {
        TheFooter,
        TheHeader
    }
})
</script>