/**
 * @description: 测试图
 * @author: cnn
 * @createTime: 2022/2/17 10:05
 **/
const Graph = require('./Graph');
const { breadthFirstSearch, BFS, getPath, depthFirstSearch, DFS, topSort } = require('./search');
const { dijkstra, floydWarshall } = require('./shortestPath');
const { prim, kruskal } = require('./mst');

const graph = new Graph;
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
// console.log(graph.toString());

// 广度优先遍历测试
const printVertex = (value) => console.log('Visited vertex：', value);
// breadthFirstSearch(graph, myVertices[0], printVertex);
// 使用 BFS 寻找最短路径
const shortestPathA = BFS(graph, myVertices[0]);
// console.log(shortestPathA);
// 输出路径
// getPath(myVertices[0], myVertices, shortestPathA.predecessors);

// 深度优先遍历测试
// depthFirstSearch(graph, printVertex);
// 构建森林以及根节点数组，并输出两个数组：发现时间和完成探索时间
// console.log(DFS(graph));

// 有向无环图，拓扑排序，使用深度优先搜索
const testGraph = new Graph(true);
const testVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < testVertices.length; i++) {
	testGraph.addVertex(testVertices[i]);
}
testGraph.addEdge('A', 'C');
testGraph.addEdge('A', 'D');
testGraph.addEdge('B', 'D');
testGraph.addEdge('B', 'E');
testGraph.addEdge('C', 'F');
testGraph.addEdge('F', 'E');
const result = DFS(testGraph);
// console.log('result', result);
// topSort(testVertices, result.finished);

// 测试最短路径算法
const shortGraph = [
	[0, 2, 4, 0, 0, 0],
	[0, 0, 2, 4, 2, 0],
	[0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 2],
	[0, 0, 0, 3, 0, 2],
	[0, 0, 0, 0, 0, 0]
];
// console.log('dijkstra', dijkstra(shortGraph, 0));
// console.log('floydWarshall', floydWarshall(shortGraph));

// 测试最小生成树
const shortGraph1 = [
	[0, 2, 4, 0, 0, 0],
	[2, 0, 2, 4, 2, 0],
	[4, 2, 0, 0, 3, 0],
	[0, 4, 0, 0, 3, 2],
	[0, 2, 3, 3, 0, 2],
	[0, 0, 0, 2, 2, 0]
];
const { parent, key } = prim(shortGraph1);
// for (let i = 1; i < parent.length; i++) {
// 	console.log(`${parent[i]} - ${i}：${key[i]}`);
// }
// console.log('prim', prim(shortGraph1));
const kruskalResult = kruskal(shortGraph1);
// console.log('kruskalResult', kruskalResult);
