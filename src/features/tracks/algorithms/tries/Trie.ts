import Node from "./Node";
import type { Track } from "../../interfaces/track.interface";

export class Trie {
  private root: Node;

  constructor() {
    this.root = new Node();
  }

  // Insertar canción en el trie
  insert(track: Track): void {
    this.insertField(track.title, track);
    this.insertField(track.mainGenre, track);
  }

  // Método privado para insertar un campo
  private insertField(text: string, track: Track): void {
    let current = this.root;

    const normalized = text.toLowerCase().trim();

    for (const char of normalized) {
      if (!current.children[char]) {
        current.children[char] = new Node();
      }

      current = current.children[char];
    }

    current.isEndOfWord = true;
    current.tracks.push(track);
  }

  // Buscar canciones por prefijo
  searchByPrefix(prefix: string): Track[] {
    let current = this.root;

    for (const char of prefix.toLowerCase()) {
      if (!current.children[char]) {
        return [];
      }

      current = current.children[char];
    }

    const results: Track[] = [];

    this.collectTracks(current, results);

    // Eliminar duplicados por id
    return Array.from(new Map(results.map((t) => [t.id, t])).values());
  }

  // Recolectar canciones recursivamente
  private collectTracks(node: Node, results: Track[]): void {
    if (node.isEndOfWord) {
      results.push(...node.tracks);
    }

    for (const key in node.children) {
      this.collectTracks(node.children[key], results);
    }
  }
}
