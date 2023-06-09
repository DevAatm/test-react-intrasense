import Container from 'react-bootstrap/Container';
import PostCollection from '../components/postCollection';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';

const Home = () => {

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchComments = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await data.json();
    return comments;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      //posts read
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await data.json();
      //comments read
      const comments = await fetchComments();
      //comments count by post id
      posts.forEach(post => post.commentsCount = 
        comments.filter(comment => comment.postId === post.id).length);
      setPosts(posts);
      setFilteredPosts(posts);
    }

    fetchPosts();
  }, []);


  return (
    <Container>
      <InputGroup className="mb-3 mt-3">
        <Form.Control placeholder="Rechercher..." onChange={(event) => 
            setFilteredPosts(posts.filter(post => post.body.replace(/(\r\n|\n|\r)/gm, " ").includes(event.target.value)))} />
      </InputGroup>
      <h6>
        <Badge bg="secondary">{filteredPosts.length} </Badge> posts sur <Badge bg="secondary">{posts.length} </Badge>
      </h6>
      <PostCollection elements={filteredPosts} />
    </Container>
  );
}

export default Home;