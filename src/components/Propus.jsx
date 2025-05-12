import popup from "../assets/imagesfashon/popup_img.jpg";
import { Container, Form, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePropusContext } from "../context/PropusContext";

export default function Propus(props) {
  const {handleClose} = usePropusContext();
           return (
       <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
     <Modal 
      {...props}
      size="lg"
     aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={props.onHide}>  
      </Modal.Header>
      <Modal.Body style={{display:"flex" , alignItems:"center" ,justifyContent:"space-between"}}>
       <Image src={popup}/>
        <Container className="mb-3">
        <h2 id="contained-modal-title-vcenter">
          Subscribe and Get 25% Discount!
        </h2>
         <p style={{color:"gray"}}>
          Subscribe to the newsletter to receive updates about new products.
        </p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email address"
                autoFocus
              />
              </Form.Group>
        <Button className='submit' onClick={props.onHide}>Subscribe</Button> 
        </Container>
        
      </Modal.Body>
      <Modal.Footer>
        <Form.Check>
   <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked onClick={handleClose }/>
   <label className="form-check-label"  htmlFor="flexCheckChecked">
    Don't show this popup again!
  </label>
</Form.Check>
      </Modal.Footer>
    </Modal>
    </div>
  );
}