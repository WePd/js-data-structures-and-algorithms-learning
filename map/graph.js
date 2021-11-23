import Dictionary from "../Dictionary/dictionary.js";

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    // 保存所有的顶点值
    this.vertices = []
    //用字典实现邻接表
    this.adjList = new Dictionary()
  }
  //定义顶点
  addVertex(v) {
    //如果保存定点值得数组中没有这个值
    if (!this.vertices.includes(v)) {
      //天骄到数组中
      this.vertices.push(v);
      //同时将这个顶点压入字典中，将这个值作为键，值为一个空数组
      this.adjList.set(v, []); // initialize adjacency list with array as well;
    }
  }
  //设置两个相连的顶点
  addEdge(a, b) {
    //若是字典中没有就将他作为顶点
    if (!this.adjList.get(a)) {
      this.addVertex(a);
    }
    if (!this.adjList.get(b)) {
      this.addVertex(b);
    }
    //取得字典中a的值，这个值是一个数组，将后一个参数放入组数就表明这两个顶点之间是相连的
    // console.log(this.adjList.get(a));
    this.adjList.get(a).push(b);
    if (this.isDirected !== true) {
      this.adjList.get(b).push(a);
    }
  }
  getVertices() {
    return this.vertices;
  }
  getAdjList() {
    return this.adjList;
  }
  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += '\n';
    }
    return s;
  }
}

const graph = new Graph();
// graph.addVertex('A'); // {14}
// graph.addEdge('A', 'C');
// console.log(graph);

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // {12}
for (let i = 0; i < myVertices.length; i++) { // {13}
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString())