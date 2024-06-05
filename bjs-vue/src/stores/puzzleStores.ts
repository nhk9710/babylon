import { defineStore } from 'pinia';
import { ref } from 'vue';
import { shuffle, canMove, isSolved } from '../SlidingPuzzleGame/utils';

export const usePuzzleStore = defineStore('puzzle', () => {
    const size = 4;
    const tiles = ref<number[]>([]);

    function initPuzzle() {
        tiles.value = Array.from({ length: size * size }, (_, i) => i);
        shuffle(tiles.value);
    }

    function moveTile(index: number) {
        const emptyIndex = tiles.value.indexOf(0);
        console.log(`Tile clicked: ${index}, Empty index: ${emptyIndex}`);
        if (canMove(index, emptyIndex, size)) {
            [tiles.value[index], tiles.value[emptyIndex]] = [tiles.value[emptyIndex], tiles.value[index]];
            tiles.value = [...tiles.value];
            if (isSolved(tiles.value)) {
                alert('Congratulations, you solved the puzzle!');
            }
        }
    }

    return { tiles, initPuzzle, moveTile };
});
