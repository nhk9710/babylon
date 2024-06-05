<template>
  <div class="puzzle">
    <PuzzleTile
        v-for="(tile, index) in tiles"
        :key="index"
        :tile="tile"
        @click="() => moveTile(index)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { usePuzzleStore } from '../stores/puzzleStores';
import PuzzleTile from './PuzzleTile.vue';

export default defineComponent({
  components: { PuzzleTile },
  setup() {
    const puzzleStore = usePuzzleStore();
    const tiles = computed(() => puzzleStore.tiles);
    const moveTile = puzzleStore.moveTile;
    const initPuzzle = puzzleStore.initPuzzle;
    onMounted(() => {
      initPuzzle();
    })
    return { tiles, moveTile };
  }
});
</script>

<style src="./slidingstyle.css"></style>
