import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './PostDetails.css';

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data));
    }, [id]);

    useEffect(() => {
        const url2 = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url2)
        .then(response => response.json())
        .then(data => setComments(data));
    }, [])

    const {title, body} = post;
    // console.log(comments);

    return (
        <div>
            <div className="post">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            <div className="comments">               
                <p>{comments.length} comments</p>
                {
                    comments.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
                }
            </div>
        </div>
    );
};

export default PostDetails;