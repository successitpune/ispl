import React, { useState } from 'react';
import Modal from 'react-modal';

const Signup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
   
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Signup Modal"
      >
        <h2>Signup</h2>
        <form>
          <label>
            First Name:
            <input type="text" />
          </label>
          <label>
            Last Name:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="email" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <label>
            Username:
            <input type="text" />
          </label>
          <button type="submit">Signup</button>
        </form>
      </Modal>
    </div>
  );
};

export default Signup;
