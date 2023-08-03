import { useState } from 'react';

import './modal.scss';

type ModalProps = {
	children: React.ReactNode[];
};

const Root = ({ children }: ModalProps) => {
	const [isOpen, setIsOpen] = useState(false);

	let trigger, content;

	children.forEach((item: any) => {
		if (item.props?.className?.includes('trigger')) trigger = item;
		else content = item;
	});

	return (
		<>
			<div onClick={() => setIsOpen(true)}>{trigger}</div>
			{isOpen && (
				<div className='backdrop' onClick={() => setIsOpen(false)}>
					<div className='content-container'>
						<div className='content' onClick={event => event.stopPropagation()}>
							<div className='close-content'>
								<i className='bi bi-x text-2xl p-2 cursor-pointer' onClick={() => setIsOpen(false)}></i>
							</div>
							{content}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Root;
