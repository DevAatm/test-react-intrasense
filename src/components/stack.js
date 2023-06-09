import BootstrapStack from 'react-bootstrap/Stack';

function Stack(props) {
  return (
    <BootstrapStack gap={props.gap}>
      {props.children}
    </BootstrapStack>
  )
}

export default Stack;