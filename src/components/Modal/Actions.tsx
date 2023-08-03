type ModalActionsProps = {
	children: React.ReactNode;
};

const Actions = ({ children }: ModalActionsProps) => {
	return <div className='actions'>{children}</div>;
};

export default Actions;
