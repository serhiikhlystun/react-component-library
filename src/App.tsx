import React from 'react';
import InputComponent from './components/Input/Input';
import Toast from '@components/Toast/Toast';

const App: React.FC = () => {
	return (
		<div>
			<main className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
				<InputComponent />
			</main>
		</div>
	);
};

export default App;
