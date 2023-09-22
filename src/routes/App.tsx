import { Modal } from '../components/Index';
import json from '../assets/data.json';

function App() {
	const data = json;

	return (
		<>
			<header className='flex items-center w-full h-[48px] bg-green text-white p-2'>
				<div>React Modal Example</div>
			</header>
			<div className='min-w-[100%] min-h-[100%] mt-4'>
				<div className='flex flex-col justify-center items-center'>
					<table>
						<thead>
							<tr className='border-b'>
								<td>#</td>
								<td>Task</td>
								<td>User Id</td>
								<td>Completed</td>
							</tr>
						</thead>

						<tbody>
							{data.map((i, index) => {
								return (
									<tr className='border-b' key={index}>
										<td>{i.id}</td>
										<td>{i.todo}</td>
										<td>{i.userId}</td>
										<td>
											<input
												className='w-[14px] h-[14px]'
												type='checkbox'
												defaultChecked={i.completed}
											/>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>

					<div className='flex mt-4'>
						<Modal.Root width={'1024px'} height={'768px'}>
							<button className='trigger bg-green text-white p-2'>Open modal</button>
							<Modal.Container>
								<Modal.Header>Modal Header</Modal.Header>
								<Modal.Content>
									<div className='flex justify-center'>
										<table>
											<thead>
												<tr className='border-b'>
													<td>#</td>
													<td>Task</td>
													<td>User Id</td>
													<td>Completed</td>
												</tr>
											</thead>

											<tbody>
												{data.map((i, index) => {
													return (
														<tr className='border-b' key={index}>
															<td>{i.id}</td>
															<td>{i.todo}</td>
															<td>{i.userId}</td>
															<td>
																<input
																	className='w-[14px] h-[14px]'
																	type='checkbox'
																	defaultChecked={i.completed}
																/>
															</td>
														</tr>
													);
												})}
											</tbody>
										</table>
									</div>
								</Modal.Content>
								<Modal.Actions>
									<Modal.Action className='close-modal'>Close</Modal.Action>
									<Modal.Action color='red'>Cancel</Modal.Action>
									<Modal.Action color='green'>Action</Modal.Action>
									<Modal.Action onClick={() => console.log('Hello World')} color='yellow'>
										Continuar
									</Modal.Action>
								</Modal.Actions>
								<Modal.Footer>Modal Footer</Modal.Footer>
							</Modal.Container>
						</Modal.Root>
					</div>
				</div>
			</div>
			<footer className='flex items-center w-full h-[48px] bg-green text-white p-2 mt-4'>
				<div>React Modal Footer</div>
			</footer>
		</>
	);
}

export default App;
