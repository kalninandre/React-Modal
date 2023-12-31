import React from 'react';

type ModalContainerProps = {
	children: React.ReactNode[];
};

const Container = ({ children }: ModalContainerProps) => {
	return <div className='modal-content-container'>{children}</div>;
};

export default Container;
