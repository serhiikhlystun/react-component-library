import React from 'react';
import InputComponent from './components/Input/Input';
import Toast from './components/Toast/Toast';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';

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
				<SidebarMenu
					open={true}
					menu={[
						{ label: 'Item 1', children: [] },
						{ label: 'Item 2', children: [{ label: 'Subitem 1', children: [] }] },
					]}
				/>
			</main>
		</div>
	);
};

export default App;
