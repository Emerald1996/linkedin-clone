import React from 'react'
import logo from "../Assets/loadlinkedin.png"
import "../Styles/SignUp.css"
import { useState } from 'react'
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import  {UserAuth}  from './Context/AuthContext';
// import { storage } from '../firebase';
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

function SignUp() {
  const navigate = useNavigate()

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [error , setError] = useState("")
  const [imageUrl , setImageUrl] = useState("")

  // const [file, setFile] = useState(null)
  // console.log("file",file);

  const {register} = UserAuth()

  const handleSignUp = async(e) => {
    e.preventDefault()
    if(!name) {
      alert("Please fill the form")
    }
// No firebase auth for occupation
    try {
      await register(email, password).then(async(res) =>{
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
          photoURL: imageUrl
        })
      })
      navigate("/account")
      
    } catch (error) {
      setError(error.message)
    }
    
  }

  const SignIn = (e) => {
    navigate("/login")
  }

  // const changeHandler = (event) => {
	// 	setFile(event.target.files[0]);
	// };

  // useEffect(() => {
  //   const upload = () => {
  //     const name = new Date().getTime() + file.name
  //      console.log(name);
  //     const storageRef = ref(storage, 'images/' + file.name);

  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //       uploadTask.on('state_changed', 
  //         (snapshot) => {
  //           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           console.log('Upload is ' + progress + '% done');
  //           switch (snapshot.state) {
  //             case 'paused':
  //               console.log('Upload is paused');
  //               break;
  //             case 'running':
  //               console.log('Upload is running');
  //               break;
  //             default:
  //               break;
  //           }
  //         }, 
  //         (error) => {
  //           console.log(error);
  //         }, 
  //         () => {          
  //           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //             setFile({file: downloadURL})
  //              console.log('File available at', downloadURL);
  //           });
  //         }
  //       );
      
  //   }
  //   file && upload()
  // },[file])
  
  return (
    <div className="register">
      <img src={logo} alt="" className='img_logo'/>
      <form action="">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name (required)'/>
        {/* <input type="file"  name="file" onChange={changeHandler} /> */}
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='imageUrl (Optional)'/>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        <button type='submit' onClick={handleSignUp}>Register</button>
      </form>
      {error && <p style={{color: 'red', fontSize: "10px"}}>{error}</p>}
      <div className="signin">
        <p>Already a member?</p>
        <p onClick={SignIn}>sign in</p>
      </div>
    </div>
  )
}

export default SignUp