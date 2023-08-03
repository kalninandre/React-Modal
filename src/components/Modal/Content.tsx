type ModalContentProps = {
	children: React.ReactNode;
};

const Content = ({ children }: ModalContentProps) => {
	return (
		<div className='modal-content'>
			<div className='modal-content-centralizer'>{children}</div>
		</div>
	);
};

export default Content;
