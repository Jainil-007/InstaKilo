import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar'


function Post({imageUrl,caption,username}) {
    return (
        <div className="post">
            <div className="post_header" >
                <Avatar
            className="post_avatar"
            alt="jainil"
            src="/static/images/avatar/1.jpg"
            />
            <h3>{username}</h3>
            </div>
            
            <img 
            className="post_image"
            src={imageUrl}
             alt="" />

             <h4 className="post_text"><strong>{username}:</strong>  {caption}</h4>
        </div>
    )
}

export default Post
