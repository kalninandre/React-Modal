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
		{
			id: 4,
			name: 'Arroz',
			quantity: 1,
			price: 3,
		},
		{
			id: 5,
			name: 'Feijão',
			quantity: 1,
			price: 5,
		},
		{
			id: 6,
			name: 'Chocolate',
			quantity: 2,
			price: 4,
		},
		{
			id: 7,
			name: 'Arroz',
			quantity: 1,
			price: 3,
		},
		{
			id: 8,
			name: 'Feijão',
			quantity: 1,
			price: 5,
		},
		{
			id: 9,
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
						<Modal.Root width={640} height={440}>
							<button className='trigger bg-green text-white p-2'>Open modal</button>
							<Modal.Container>
								<Modal.Header>Título do Modal</Modal.Header>
								<Modal.Content>
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
								</Modal.Content>
								<Modal.Actions>
									<Modal.Action color='blue'>Ação</Modal.Action>
									<Modal.Action color='red'>Cancelar</Modal.Action>
									<Modal.Action onClick={() => console.log('Hello World')} color='yellow'>
										Continuar
									</Modal.Action>
									<Modal.Action className='close-modal'>Fechar</Modal.Action>
								</Modal.Actions>
								<Modal.Footer>Footer</Modal.Footer>
							</Modal.Container>
						</Modal.Root>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
