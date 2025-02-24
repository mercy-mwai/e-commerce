import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../components/Modal.css"

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("Visa");

  //handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="modalCard">
      <Button variant="primary py-4" onClick={handleShow}>
        Proceed to Checkout
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal-fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3"> Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                      href="#visa"
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                    >
                      <img
                        src=" https://i.imgur.com/sB4jftM.png"
                        alt=" "
                        width="80"
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      id="paypal-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "Paypal"}
                      onClick={() => handleTabChange("Paypal")}
                      href="Paypal"
                      
                    >
                      <img
                        src="https://i.imgur.com/yK7EDD1.png"
                        alt=" "
                        width="80"
                      />
                    </a>
                  </li>
                </ul>

                {/* content */}
                <div className="tab-content" id="myTabContent">
                  {/* visa content */}
                  <div className={`tab-pane fade ${ activeTab === "visa" ? "show active" : ""}`}
                  id="visa"
                  role="tabpanel"
                  aria-labelledby="visa-tab"
                  >
                    {/* visa tab content*/}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input type="text" id="name" name="name" className="form-control" required />
                          <span>CardHolder Name</span>
                        </div>
                        <div className="inputbox">
                          <input type="text" id="number" name="number" min="1" max="999" className="form-control" required />
                          <span>Card Number </span> <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row">
                        <div className="inputbox">
                          <input type="text" id="number" name="number" min="1" max="999" className="form-control" required />
                          <span>Expiration Date  </span> 
                        </div>
                        <div className="inputbox">
                          <input type="text" id="number" name="number" min="1" max="999" className="form-control" required />
                          <span>CVV</span> 
                        </div>
                        </div>
                        <div className="px-5 pay">
                          <button className="btn btn-success btn-block">Order</button>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  {/*paypall content */}
                </div>


              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
