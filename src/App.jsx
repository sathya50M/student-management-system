import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import DisplayStudents from './Components/DisplayStudents'
import EditStudent from './Components/EditStudent'
import AddStudent from './Components/AddStudent'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <nav>
                <h1>SMS</h1>
                <ul>
                    <Link to='/'>Students</Link>
                    <Link to='/AddStudent'>add</Link>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<DisplayStudents/>}></Route>
                <Route path='/AddStudent' element={<AddStudent/>}></Route>
                <Route path='/EditStudent/:id' element={<EditStudent/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App