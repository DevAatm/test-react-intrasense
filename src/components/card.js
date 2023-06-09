import BootstrapCard from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Card(props) {
  const content = props.content;
  return (
    <Button onClick={props.onClick} variant="light" key={content}>
      <BootstrapCard key={content}>
        <BootstrapCard.Body>{content}</BootstrapCard.Body>
      </BootstrapCard>
    </Button>

  )
}

export default Card;