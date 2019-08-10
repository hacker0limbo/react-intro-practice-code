# hooks 笔记

`useEffect`相当于生命周期里的: `componentWillUnmount`, `componentDidMount` 和 `componentDidUpdate`的结合

`useEffect`, 第二个参数为一个数组, 元素为想要监听变化的 state, 如果该 state 变化, 此`useEffect`的回调函数才会在`didupdate`期间调用, 否则只在`didMount`期间调用一次

注意在`useEffect`获取数据的时候, 第二个参数如果不指明别的依赖, 可能出现无限循环情况, 这是由于发送请求得到数据以后, 在`useEffect`里面 set 了 state, state 发生更新, 重新调用 `useEffect`, 导致又发送了数据, 无限循环

## 性能问题 PureComponent
只要使用`setState`, 就会重新调用`render`方法, 即使 state 值还是一样. 同时可能存在父组件重新渲染的同时牵连子组件一起渲染, 这是不必要的

一些解决方法:
- 使用 `PureComponent` 或者 `React.memo()`
- 使用 `shouldComponentUpdate(nexProps, nextState)` 生命周期进行判断
- 一些 hooks, 例如`useReducer`

示例:
```javascript
class MemoDemo extends React.Component {
  state = {
    count: 1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: 1
      })
    }, 1000);
  }

  render() {
    // 这里每隔一秒都会打印 rendering, 因为使用了 setState, 即使 state 值保持不变
    console.log('rendering') 
    return <div>{this.state.count}</div>
  }
}
```

## 额外的 hooks

### useCallback
返回一个回调函数, `useCallback`仅在某个依赖项改变时才会去调用里面的内容, [] 里面即为依赖项, 空数组的时候只会执行一次, 以后由于没有依赖项不会执行

注意如果是作用于 onChange 事件上, 那么第二个依赖项数组可以不用添加(废弃)

示例:
```javascript
export default () => {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [count2, seCount2] = useState(0)

  return (
    <div>
      // 监听 count 变化, 如果变化可以触发 callback
      <p>You clicked {count} times</p>
      <button onClick={useCallback(() => setCount(count+1), [count])}>
        click
      </button>

      // 不监听任何变化, 只会执行一次
      <p>You clicked {count1} times</p>
      <button onClick={useCallback(() => setCount(count1+1), [])}>
        click1
      </button>

      // 监听 count 变化, 初始会执行一次, 执行完毕以后只有在 count 发生变化的时候才会触发 callback 改变 count2 值
      <p>You clicked {count2} times</p>
      <button onClick={useCallback(() => setCount(count2+1), [count])}>
        click1
      </button>
    </div>
  )
}
```

### useReducer
可以跳过 dispatch: 如果 Reducer Hook 的返回值与当前 state 相同，React 将跳过子组件的渲染及副作用的执行

### useContext

```javascript
const MyContext = React.createContext({}) // 里面即为初始的 state
const value = useContext(MyContext)

const { state1 } = value
```

接收一个 `context` 对象（`React.createContext` 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定

当然对于 class 组件也可以使用 `static contextType = MyContext` 来获取 context

`useContext(MyContext)` 相当于 class 组件中的 `<Mycontext.Consumer>` 或 `static contextType = MyContext`

`useContext(MyContext)`只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 `<MyContext.Provider>` 来为下层组件提供 context