import Card from './card.js';
import Modal from './modal.js';
import React, { useState } from 'react';

function Post(props) {
    const post = props.post;
    const modalContent = {title:`${post.userId} - ${post.title}`, body:post.body, footer:`${post.commentsCount} commentaires`};
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    

    return (
        <>
            <Card content={`${post.userId} - ${post.title}`} onClick={handleShow}/>
            <Modal content={modalContent} show={showModal} handleClose={handleClose}/>
        </>
    )
}

export default Post;