import {Navigate,useNavigate,Routes,Route} from 'react-router-dom'

function Post() {
  const status =  200
  const navigate = useNavigate()
  if(status === 404){
    return <navigator to ='/notfound' />
  }
  const onClick = () =>{
    navigate('/about')
  }
  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>HEllo</h1>} />
      </Routes>
    </div>
  )
}
 
export default Post