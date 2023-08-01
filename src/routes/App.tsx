import { useState } from 'react';
import { Modal } from '../components/Index';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const [data] = useState([
		{
			id: 1,
			name: 'Arroz',
			quantity: 1,
			price: 3,
		},
		{
			id: 2,
			name: 'Feijão',
			quantity: 1,
			price: 5,
		},
		{
			id: 3,
			name: 'Chocolate',
			quantity: 2,
			price: 4,
		},
	]);

	const openModal = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<>
			<div className='w-screen h-screen'>
				<div className='flex flex-col justify-center items-center h-full'>
					<table>
						<thead>
							<tr className='border-b'>
								<td>#</td>
								<td>Nome</td>
								<td>Quantidade</td>
								<td>Preço</td>
							</tr>
						</thead>

						<tbody>
							{data.map((i, index) => {
								return (
									<tr className='border-b' key={index}>
										<td>{i.id}</td>
										<td>{i.name}</td>
										<td>{i.quantity}</td>
										<td>{i.price}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					<div className='flex mt-4'>
						<button className='bg-green text-white p-2' onClick={openModal}>
							Open modal
						</button>
					</div>
				</div>
			</div>
			<Modal isOpen={isOpen}>Hello World</Modal>
		</>
	);
}

export default App;
