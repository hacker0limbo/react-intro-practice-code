# Todo hooks

一些 hooks 的小程序, 帮助理解 hooks

## 结构
```
index.js
  TodoView
    TodoForm
    RestButton
    Todos
```
`action` 为三个:
- `ADD_TODO`(TodoForm)
- `TOOGLE_COMPLETE`(Todos)
- `RESET`(RestButton)

需要从 index.js 传递 `dispatch` 到对应三个子组件, 由于不是直接父子关系, 可以考虑使用 context 传递