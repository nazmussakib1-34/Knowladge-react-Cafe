import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Navber from './Components/Navber/Navber'

function App() {
  const [bookmarks, setBoOkmarks] = useState([]);
  const [readingtime, setReadingtime] = useState(0);

  const handleToBookmark = blog =>{
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBoOkmarks(newBookmarks);
  }

  const handleMarkAsRead = time =>{ 
    console.log('Marking as Read',time);
    setReadingtime(readingtime + time);
    
  }
 

  return (
    <>
    <div className='bg-gray-400'>
    <Navber></Navber>
   <div className='md:flex'>
   <Blogs handleToBookmark={handleToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
   <BookMarks bookmarks={bookmarks} readingtime={readingtime}></BookMarks>
   </div>
    </div>
    </>
  )
}

export default App
