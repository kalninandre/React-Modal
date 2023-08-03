type ModalHealder = {
	children: React.ReactNode;
};

const Header = ({ children }: ModalHealder) => {
	return <div className='header'>{children}</div>;
};

export default Header;
