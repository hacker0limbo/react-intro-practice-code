# Game Cards CRUD

前后端分离搭建的 CRUD 项目

前端使用 react + redux + redux-thunk + react-router + Semantic UI 

后端使用 express + mongodb 

前端服务器在 3000 端口, 后端服务器在 5000 端口

## 问题
如果存在一个两个组件 A 和 B, B 的初始值由 A 提供, A 的值变化后立即同步给 B

使用 Class Component, 对于 B 可以使用`componentWillReceiveProps`

对于 hooks, 只能使用`useRef`模拟, 具体参考: https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state