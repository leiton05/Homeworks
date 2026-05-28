import type { Track } from "../../tracks/interfaces/track.interface";

export class MaxHeap {
  private heap: Track[];

  constructor(data: Track[] = []) {
    this.heap = [];

    data.forEach((track) => {
      this.insert(track);
    });
  }

  //* Obtener índice padre
  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  //* Obtener hijos
  private getLeftChildIndex(index: number) {
    return index * 2 + 1;
  }

  private getRightChildIndex(index: number) {
    return index * 2 + 2;
  }

  //* Intercambiar nodos
  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  //* Insertar canción
  insert(track: Track) {
    this.heap.push(track);

    this.heapifyUp();
  }

  //* Ordenar hacia arriba
  private heapifyUp() {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[this.getParentIndex(index)].popularity <
        this.heap[index].popularity
    ) {
      const parentIndex = this.getParentIndex(index);

      this.swap(parentIndex, index);

      index = parentIndex;
    }
  }

  //* Extraer máximo
  extractMax(): Track | null {
    if (this.heap.length === 0) return null;

    if (this.heap.length === 1) {
      return this.heap.pop()!;
    }

    const max = this.heap[0];

    this.heap[0] = this.heap.pop()!;

    this.heapifyDown();

    return max;
  }

  //* Ordenar hacia abajo
  private heapifyDown() {
    let index = 0;

    while (this.getLeftChildIndex(index) < this.heap.length) {
      let largerChildIndex = this.getLeftChildIndex(index);

      const rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].popularity >
          this.heap[largerChildIndex].popularity
      ) {
        largerChildIndex = rightChildIndex;
      }

      if (
        this.heap[index].popularity >= this.heap[largerChildIndex].popularity
      ) {
        break;
      }

      this.swap(index, largerChildIndex);

      index = largerChildIndex;
    }
  }

  //* Obtener top N canciones
  getTopTracks(limit: number): Track[] {
    const clonedHeap = new MaxHeap([...this.heap]);

    const result: Track[] = [];

    for (let i = 0; i < limit; i++) {
      const track = clonedHeap.extractMax();

      if (!track) break;

      result.push(track);
    }

    return result;
  }
}
