<template>
  <div class="tile" :class="{ empty: tile === 0 }" @click="$emit('click')">
    <span style="font-weight: bold">{{ tile !== 0 ? tile : '' }}</span>
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
