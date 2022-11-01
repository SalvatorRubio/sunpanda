import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalAddProduct = ({show}) => {
    return (
        <Modal
            size="sm"
            show={show}
            contentClassName=" text-white text-center border-0"
            backdrop={false}
        >
            <Modal.Body style={{background: '#ff9800'}} className="rounded-2 border-0">
                Товар добавлен в корзину!
            </Modal.Body>
        </Modal>
    );
};

export default ModalAddProduct;