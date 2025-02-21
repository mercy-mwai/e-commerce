import { Modal } from 'react-bootstrap';
import React , {useState} from 'react';
import { Button } from 'react-bootstrap';

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("Visa");

//handle tab change
const handleTabChange=(tabId)=>{
    setActiveTab(tabId)
}

const handleShow=()=> setShow(true);
const handleClose=()=> setShow(false);

  return (
    <div className='modalCard'>
        <Button variant='primary py-4' onClick={handleShow}>Proceed to Checkout</Button>
        <Modal
         show={show}
         onHide={handleClose}
         animation={false}
         className="modal-fade"
         centered
        >
            <div className="modal-dialog">
                <h5 className='px-3 mb-3'> Select Your Payment Method</h5>
                <div className="modal-content">
                    <div className="modal-body">
                        <div className='tabs mt-3'>

                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default CheckOutPage