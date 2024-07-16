import React from 'react'
import { topics, videos } from '../Data/html'
import Navbar from './Navbar'


const Html = () => {
  return (
    <div>
         
      <div><Navbar/></div>
        <div className="roadmap">
      
       
      
            <div className="sidebar">
            <div    className='langname'   style={{color:'aqua'}} ><h1>Html</h1></div>
                <div className="Topics"> <h3 style={{color:'grey'}} >TOPICS</h3></div>
                {videos.map((video) => (
                    <div key={video.id} className="sidebardiv">
                        <a className="anchorTag" href={`#${video.id}`}>{video.topic}</a>
                    </div>
                ))}
                {topics.map((item) => (
                    <div key={item.id} className="sidebardiv">
                        <a className="anchorTag" href={`#${item.id}`}>{item.topic}</a>
                    </div>
                ))}

            </div> 
            <div className="content">
                {
                    videos.map(video=>(
                        <div key={video.id} id={video.id} className='contentdiv'>
                        <h2 className='heading'>{video.topic}</h2>
                        <p>{video.description}</p>
                        
                        <h3 className='links'>Link:</h3>
                        <ul>
                            {video.videos.map((site, index) => (
                                <li key={index}>
                                    <a href={site} className='sitelink'           target="_blank" rel="noopener noreferrer">{site}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    ))
                }

                {topics.map(item => (
                    <div key={item.id} id={item.id} className='contentdiv'>
                        <h2 className='heading'>{item.topic}</h2>
                        <p className='description'>{item.description}</p>
                        
                        <h3 className='links'>Websites:</h3>
                        <ul>
                            {item.websites.map((site, index) => (
                                <li key={index}>
                                    <a href={site} className='sitelink'           target="_blank" rel="noopener noreferrer">{site}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

      
    </div>
  )
}

export default Html
