<template>
  <div class="tile" :class="{ empty: tile === 0 }" @click="$emit('click')">
    {{ tile !== 0 ? tile : '' }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props: {
    tile: {
      type: Number as PropType<number>,
      required: true
    }
  }
});
</script>
