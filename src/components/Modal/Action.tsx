import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

import { useModal } from '@components/Modal/Root';

type ModalActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	color?: 'default' | 'blue' | 'green' | 'yellow' | 'red' | undefined;
};

const button = tv({
	base: 'button border rounded whitespace-nowrap px-3 py-1',
	variants: {
		color: {
			default: 'text-black border-black hover:bg-black hover:text-white',
			blue: 'text-blue border-blue hover:bg-blue hover:text-white',
			green: 'text-green border-green hover:bg-green hover:text-white',
			yellow: 'text-yellow border-yellow hover:bg-yellow hover:text-white',
			red: 'text-red border-red hover:bg-red hover:text-white',
		},
	},
	defaultVariants: {
		color: 'default',
	},
});

const Action = ({ children, color, className, ...props }: ModalActionProps) => {
	const { setIsOpen } = useModal();

	if (className && className.includes('close-modal')) {
		setTimeout(() => {
			jQuery('button.close-modal').on('click', function () {
				jQuery(this).off('click');
				setIsOpen(false);
			});
		});
	}

	return (
		<button className={twMerge(button({ color }), className)} {...props}>
			{children}
		</button>
	);
};

export default Action;
