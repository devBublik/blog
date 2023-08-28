<template>
  <div>
    <div
      v-for="component in data"
      :key="component.type"
      :class="`${component.class}`"
    >
      <component
        :is="component.component"
        :[component.props]="component.value"
      ></component>
    </div>
  </div>
</template>

<script>
import TextBlock from "@/components/TextBlock";
export default {
  name: "PageConstructor",
  components: {
    TextBlock,
  },
  props: {
    data: {
      default: () => [],
    },
  },
};
</script>
