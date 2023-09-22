import React, { useContext, useState } from 'react';

import useScreen from '@components/hooks/useScreen';

import './modal.scss';

type ModalRootProps = {
	children: React.ReactNode[];
	width: string;
	height: string;
};

type ModalContextValue = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContext = React.createContext<ModalContextValue>({} as ModalContextValue);

const Root = ({ width, height, children }: ModalRootProps) => {
	const [isOpen, setIsOpen] = useState(false);

	if (isOpen) {
		document.querySelector('body')?.classList.add('modal-is-open');
	} else {
		document.querySelector('body')?.classList.remove('modal-is-open');
	}

	let trigger, content;

	children.forEach((item: any) => {
		if (item.props?.className?.includes('trigger')) trigger = item;
		else content = item;
	});

	const { isMobile, isTablet, isNotebook } = useScreen();
	if (isMobile) {
		width = '90%';
		height = '85%';
	} else if (isTablet) {
		width = '80%';
		height = '85%';
	} else if (isNotebook) {
		if (parseInt(width as string) * 2 < 60) width = '60%';
		height = '85%';
	}

	const ModalContextValue = {
		isOpen,
		setIsOpen,
	};

	return (
		<ModalContext.Provider value={ModalContextValue}>
			<div onClick={() => setIsOpen(true)}>{trigger}</div>
			{isOpen && (
				<div className='backdrop' onClick={() => setIsOpen(false)}>
					<div className='backdrop-centralizer'>
						<div
							className='modal-container'
							style={{ '--modal-width': width, '--modal-height': height } as React.CSSProperties}
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
		</ModalContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
	return useContext(ModalContext);
};

export default Root;
