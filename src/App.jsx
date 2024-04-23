
import './App.css'
import conf from './conf/conf.js'

function App() {
  
 console.log(import.meta.env.VITE_APPWRITE_URL)
 console.log(conf.appwriteBucketId)

  return (
    <>
      <h1>A blog app with appwrite by Prashant.</h1>
    </>
  )
}

export default App
