import { useState } from 'react';

const IntroductionModal = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal-container">
          <div className="modal">
            <button className="close-button" onClick={handleCloseModal}>
              X
            </button>
            <img src="/girl.svg" alt="Girl" className="modal-img" />
            <h3 className="modal-heading">Welcome to our Naloxone web app!</h3>
            <p className="modal-text">This app is designed to help individuals learn about and access naloxone, a medication used to reverse opioid overdoses. We hope you find it helpful!</p>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal-container {
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal {
          background-color: var(--savoy-blue);
          color: #000000;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          max-width: 375px; /* Set maximum width to iPhone XR width */
          width: 80%; /* Set width to 80% of max width */
          text-align: center;
          font-family: Figtree, sans-serif;   
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 0;
          right: 0;
          padding: 10px;
          font-size: 18px;
          font-weight: bold;
          border: none;
          background-color: transparent;
          color: #ffffff;
          cursor: pointer;
        }

        .modal-heading {
          color: #ffffff;
        }

        .modal-text {
          color: #ffffff;
        }

        .modal-img {
          width: 100px; /* Set image width to match iPhone XR */
          position: absolute;
          top: -70px; /* Adjust top position */
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style> 
    </>
  );
};

export default IntroductionModal;
