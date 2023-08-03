type ModalHeaderProps = {
	children: React.ReactNode;
};

const Header = ({ children }: ModalHeaderProps) => {
	return <div className='header'>{children}</div>;
};

export default Header;
