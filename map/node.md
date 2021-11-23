### 图的表示
- 领接矩阵
![](/img/邻接矩阵.jpg)

若不是强连通图用邻接矩阵表示， 矩阵中会有很多的0，浪费了计算机的存储空间来表示是本不存在的边。另一方面，图中顶点的数量可能会变化，但是二维数组又不是很灵活。

- 邻接表

![](/img/邻接表.jpg)

由图中的每个顶点的相邻顶点列表构成。可以用数组，链表，升值是散列表或者字典来表示相邻顶点列表
