import { useState } from 'react';
import { Modal } from '../components/Index';

function App() {
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
						<Modal.Root>
							<button className='trigger bg-green text-white p-2'>Open modal</button>
							<Modal.Header>Título do Modal</Modal.Header>
						</Modal.Root>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
