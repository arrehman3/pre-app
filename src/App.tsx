
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'




function App() {
  

  return (
    <>
      <h1 className='mb-4'>Hello World</h1>
      <p>Abdur Rehman</p>
     <WelcomeMessage isLoggedIn={true} user={{name:"Abdur Rehman",type:'moderator'
     }}/>
      
    </>
  )
}

export default App
