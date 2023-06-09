import Post from './post.js';
import Stack from './stack.js';

function PostCollection(props) {
  const elements = props.elements;
  if (elements.length > 0) {
    return (
      <Stack gap={2}>
        {
          elements.map(element =>
            <Post post={element} key={element.id} />
          )
        }
      </Stack>
    )
  }

  return <h3>Aucun post ne correspond à cette recherche...</h3>
}

export default PostCollection;