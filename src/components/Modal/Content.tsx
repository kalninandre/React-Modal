type ModalContentProps = {
	children: React.ReactNode;
};

const Content = ({ children }: ModalContentProps) => {
	return <div className='modal-content'>{children}</div>;
};

export default Content;
