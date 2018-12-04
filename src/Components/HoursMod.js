import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import HoursContainer from '../Containers/HoursContainer'

const ModalModalExample = (props) => (
  <Modal trigger={<Button className="ui bottom attached button"><i className="add icon"></i>Add Appliance</Button>}>
    <Modal.Header>Select the hours that you are available to use your {props.name}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://us.123rf.com/450wm/blueringmedia/blueringmedia1509/blueringmedia150900615/44952844-stock-vector-rounc-clock-with-red-needles-illustration.jpg?ver=6' />
      <Modal.Description>
        <HoursContainer name={props.name}/>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample
