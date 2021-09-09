import React, { useState, useEffect } from 'react'


import './App.css'
import Navbar from './component/Navbar'

const divcss = {
  backgroundImage: `url('https://cdn.pixabay.com/photo/2017/03/13/21/41/scientist-2141259_960_720.jpg')`,
}

const App = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState("")
  const [windowwidth, setWindowwidth] = useState(window.screen.width);


  const handelSubmit = async (e) => {
    e.preventDefault()
    if (!name && !password) {
      setShow(true)
      setMsg("Please Fill The Form")
    }
    else {
      if (!name) {
        setShow(true)
        setMsg("Please Enter UserName")
      }
      else {
        if (!password) {
          setShow(true)
          setMsg("Please Enter Password")
        }
        else{
          setShow(false)
          
          alert(`Name: ${name} , Password: ${password}`)
        }
      }
    }



  }

  useEffect(() => {
    function handleResize() {
      setWindowwidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <>

      <Navbar />
      <div className="home">
        <div className="leftbar">
          <div className="leftbox"
            style={divcss}
          >

            <div className="box">

              <h3 className="title pt-2">Hello Users</h3>

            </div>
          </div>
        </div>
        <div className={windowwidth > 850 ? "rightbar" : "rightone"}>

          <div className="login p-3">
            {
              show && <div class="alert alert-danger alert-dismissible">
                <button type="button" class="close" onClick={()=>setShow(false)}>&times;</button>
                {msg}
              </div>
            }
            <h3 className="text-center text-dark mb-3">Login Now</h3>
            <form onSubmit={handelSubmit}>
              <div class="form-group">
                <label for="usr">UserName:</label>
                <input type="text" class="form-control" name="name" placeholder="Enter username" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
              </div>
              <div className="text-right">
                <p>Forget Password ?</p>
              </div>
              <div className="text-center">
                <button className="btn btn-info ">Login</button>
              </div>
            </form>
          </div>

        </div>

      </div>







    </>
  )
}

export default App
