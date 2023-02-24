import React, { useEffect, useState } from 'react'
import AvatarIcon from "@material-ui/core/Avatar";
import "../Styles/Maincomponent.css"
import Posts from './Posts';
import InputIcons from './InputIcons';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, getDocs, orderBy, query} from "firebase/firestore"; 
import { UserAuth } from './Context/AuthContext';

const Maincomponent = () => {
  const [text, setText] = useState('')
  const [postsData , setPostsData] = useState([])

  const {user} = UserAuth()
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "posts"), {
        name: user.displayName,
        occupation: user.email,
        imageUrl: user.photoURL,
        post: text,
        timeStamp: serverTimestamp(),
      });
      setText("")
    
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  useEffect(() => { 
    const fetchPosts = async() => {
      let post = []
      try {
          const querySnapshot = await getDocs(query(collection(db, "posts"), orderBy("timeStamp", "desc")));
            querySnapshot.forEach((doc) => {
            post.push({
              id: doc.id,
              data: doc.data()
            })
            setPostsData(post)
          });
      } catch (error) {
          console.log(error);
      }
    }
    fetchPosts()
  }, [])
  // console.log("posts: ", postsData)

  // delete post

  
  return (
    <div className='main_component'>
      <div className="main_component_container">
        <div className="input">
          <AvatarIcon className='sidebar_about_icon' src={user && user.photoURL}>{user?.email?.charAt(0).toUpperCase()}</AvatarIcon>
          <form>
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Start a post'/>
            {text && <button type="submit" onClick={handleSubmit}>send</button>}
          </form>
        </div>
        <div className="inputs">
          <InputIcons icon={<ImageIcon />} title="Photo" color="blue"/>
          <InputIcons icon={<SmartDisplayIcon />} title="Video" color="green"/>
          <InputIcons icon={<EventIcon />} title="Event" color="brown"/>
          <InputIcons icon={<ArticleIcon />} title="Write article" color="brown"/>
        </div>
      </div>
      
      {
        postsData?.map(({id, data: {name, occupation, post, timeStamp, imageUrl}}) => {
          
           return <Posts key={id} name={name} occupation={occupation} post={post} imageUrl={imageUrl} timeStamp={timeStamp} />
          
        })
      }
    </div>
  )
}

export default Maincomponent
