import Graph from './graph.js'
import Queue from '../Queue/queue.js'


//用于表述顶点是否被访问过
const Colors = {
  WHITE: 0,// 顶点没有被访问
  GREY: 1,// 顶点被访问过但是没有被探索
  BLACK: 2  //顶点被访问过且被探索过
}

//初始化顶点的颜色
export const initColor = vertices => {
  const color = {}
  for (let i = 0; i < vertices.length; i++) {
    //将所有顶点都标记为白色
    color[vertices[i]] = Colors.WHITE
  }
  return color
}

export const breadthFirstSearch = (graph, statrVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList()
  //标记所有顶点为未被访问
  const color = initColor(vertices)
  //借助队列存储正在访问节点的下一层节点
  const queue = new Queue()
  //将起始顶点添加到辅助队列
  queue.enQuene(statrVertex)
  //因为一直要访问元素，用while
  while (!queue.isEmpty()) {
    //拿出这个顶点
    const v = queue.deQueue();
    const v_neighbors = adjList.get(v) //获得v所有相连的邻接表
    //将访问过得顶点标记为GREY
    color[v] = Colors.GREY
    //对起始顶点相连的开始访问  
    for (let i = 0; i < v_neighbors.length; i++) {
      const w = v_neighbors[i]
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY
        queue.enQuene(w)
      }
    }
    //经过上面的操作，顶点v已经被探索过了
    color[v] = Colors.BLACK
    if (callback) callback(v)
  }
}

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
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

const printVertex = value => console.log('V' + value)
breadthFirstSearch(graph, 'A', printVertex)