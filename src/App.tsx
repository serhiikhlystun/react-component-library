import React from 'react';
import InputComponent from './components/Input/Input';
import Toast from './components/Toast/Toast';

const App: React.FC = () => {
	return (
		<div>
			<main className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center gap-5 text-white text-[calc(10px+2vmin)]">
				<InputComponent clearable={true} type="text" />
				<Toast
					type="success"
					message="Operation completed successfully!"
					duration={3000}
					closeable={true}
				/>
			</main>
		</div>
	);
};

export default App;
