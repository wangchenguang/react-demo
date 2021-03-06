import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import './CommentBox.css';

const comments = [
    {author: "Nate", content: "Hello React! This is a sample comment."},
    {author: "Kevin", content: "Hello Redux!"},
    {author: "Bood", content: "Hello Rekit"},
];

class CommentBox extends React.PureComponent {
    render() {
        return (
            <div className="comment-box">
                <h1>Comments {comments.length}</h1>
                <CommentList comments={comments}/>
                <CommentForm/>
            </div>
        );
    }
}

export default CommentBox;