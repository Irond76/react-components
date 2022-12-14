import React from 'react'



const CommentDetail = ({author, timeAgo, commentText, img}) => {
  return (
    
    <div className="comment">
        <a href="/" className="avatar">
          <img src={img} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">
              {timeAgo}
            </span>
          </div>
            <div className="text">
             {commentText}
            </div>
        </div>
    </div>  
    
  )
}

export default CommentDetail