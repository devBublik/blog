<template>
  <div>
    <Loader v-if="!loadingIsOver" />
    <PageConstructor v-if="parsedComponents" :data="parsedComponents" />
  </div>
</template>

<script>
import { onMounted } from "vue";
import axios from "axios";
import PageConstructor from "@/components/PageConstructor.vue";
import { pageAnalys, addMeta } from "@/hooks/index";
import { API_ROUTE_BASE } from "@/api/constants";
import Loader from "@/components/Loader.vue";
export default {
  components: {
    PageConstructor,
    Loader,
  },

  setup() {
    const content = ref(null);
    const parsedComponents = ref([]);
    const route = useRoute();
    const loadingIsOver = ref(false);

    onMounted(async () => {
      axios
        .get(`${API_ROUTE_BASE}article-${route.params.id}`)
        .then((response) => (content.value = response.data))
        .then((data) => {
          pageAnalys(data, parsedComponents);
          addMeta(data.meta);
          loadingIsOver.value = true;
        });
    });

    return { content, parsedComponents, loadingIsOver };
  },
};
</script>
