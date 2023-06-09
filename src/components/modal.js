import BootstrapModal from 'react-bootstrap/Modal';

function Modal(props) {
  const content = props.content;
  return (
    <BootstrapModal show={props.show} onHide={props.handleClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{content.title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{content.body}</BootstrapModal.Body>
      <BootstrapModal.Footer>
        {content.footer}
      </BootstrapModal.Footer>
    </BootstrapModal>
  )
}

export default Modal;