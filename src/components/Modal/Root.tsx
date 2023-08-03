import { useState } from 'react';

import './modal.scss';

type ModalRootProps = {
	children: React.ReactNode[];
	width: number;
	height: number;
};

const Root = ({ width, height, children }: ModalRootProps) => {
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
					<div className='backdrop-centralizer'>
						<div
							className='modal-container'
							style={{ width, height }}
							onClick={event => event.stopPropagation()}
						>
							<div className='modal-closer'>
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
