import type { Track } from "../../tracks/interfaces/track.interface";

export class UndirectedGraph {
  private nodes: Map<string, Track> = new Map();
  private adjacency: Map<string, Set<string>> = new Map();

  addNode(track: Track): void {
    if (!this.nodes.has(track.id)) {
      this.nodes.set(track.id, track);
      this.adjacency.set(track.id, new Set());
    }
  }

  addEdge(idA: string, idB: string): void {
    if (idA === idB) return;
    this.adjacency.get(idA)?.add(idB);
    this.adjacency.get(idB)?.add(idA);
  }

  getNeighbors(id: string): Track[] {
    const neighborIds = this.adjacency.get(id);
    if (!neighborIds) return [];

    return Array.from(neighborIds)
      .map((nId) => this.nodes.get(nId))
      .filter((t): t is Track => t !== undefined);
  }

  hasNode(id: string): boolean {
    return this.nodes.has(id);
  }

  static buildFromTracks(tracks: Track[]): UndirectedGraph {
    const graph = new UndirectedGraph();

    tracks.forEach((track) => graph.addNode(track));

    const byGenre = new Map<string, Track[]>();
    tracks.forEach((track) => {
      const genre = track.mainGenre;
      if (!byGenre.has(genre)) byGenre.set(genre, []);
      byGenre.get(genre)!.push(track);
    });

    byGenre.forEach((group) => {
      for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
          graph.addEdge(group[i].id, group[j].id);
        }
      }
    });

    return graph;
  }
}
