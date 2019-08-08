# hooks 笔记

`useEffect`相当于生命周期里的: `componentWillUnmount`, `componentDidMount` 和 `componentDidUpdate`的结合

`useEffect`, 第二个参数为一个数组, 元素为想要监听变化的 state, 如果该 state 变化, 此`useEffect`的回调函数才会在`didupdate`期间调用, 否则只在`didMount`期间调用一次

注意在`useEffect`获取数据的时候, 第二个参数如果不指明别的依赖, 可能出现无限循环情况, 这是由于发送请求得到数据以后, 在`useEffect`里面 set 了 state, state 发生更新, 重新调用 `useEffect`, 导致又发送了数据, 无限循环