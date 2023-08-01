import React from 'react';

type ModalProps = {
	isOpen: boolean;
	children: React.ReactNode;
};

const Modal = ({ isOpen, children }: ModalProps) => {
	//const [isOpen, setIsOpen] = useState(false);

	return isOpen && <div className='backdrop'>{children}</div>;
};

export default Modal;
