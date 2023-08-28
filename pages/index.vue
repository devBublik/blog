<template>
  <div>
    <Loader v-if="!loadingIsOver" />
    <PageConstructor v-if="parsedComponents" :data="parsedComponents" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import PageConstructor from "@/components/PageConstructor.vue";
import Loader from "@/components/Loader.vue";
import { pageAnalys, addMeta } from "@/hooks/index";
import { API_ROUTE_BASE } from "@/api/constants";
export default {
  components: {
    PageConstructor,
    Loader,
  },

  setup() {
    const content = ref(null);
    const parsedComponents = ref([]);
    const loadingIsOver = ref(false);

    onMounted(async () => {
      axios
        .get(API_ROUTE_BASE)
        .then((response) => (content.value = response.data))
        .then((data) => {
          pageAnalys(data, parsedComponents);
          addMeta(data.meta);
          loadingIsOver.value = true;
        });
    });

    return { content, parsedComponents, addMeta, loadingIsOver };
  },
};
</script>
