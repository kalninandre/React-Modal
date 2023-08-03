type ModalFooterProps = {
	children: React.ReactNode;
};

const Footer = ({ children }: ModalFooterProps) => {
	return <div className='footer'>{children}</div>;
};

export default Footer;
