import type { Track } from "../../interfaces/track.interface";

class Node {
  children: Record<string, Node>;
  isEndOfWord: boolean;
  tracks: Track[];

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.tracks = [];
  }
}

export default Node;
