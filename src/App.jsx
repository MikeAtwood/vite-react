import './App.css'
import Greeting from './assets/components/Greeting'
import Test from './assets/components/Test'
import Animals from './assets/components/Animals'
import PackingList from './assets/components/Item'

function App() {

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <Greeting />
        <Test />
        <Animals />
        <PackingList />
      </div>
    </>
  )
}

export default App
