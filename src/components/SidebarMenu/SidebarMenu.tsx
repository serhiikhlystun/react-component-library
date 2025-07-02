import React, { useState } from 'react';
import { MenuItem } from './types';
import SidebarItem from './SidebarItem';

interface SidebarMenuProps {
	open: boolean;
	menu: MenuItem[];
}
const SidebarMenu: React.FC<SidebarMenuProps> = ({ menu, open }) => {
	const [showMenu, setShowMenu] = useState(open);

	return (
		<>
			{showMenu && (
				<>
					<div
						className="fixed inset-0 bg-black bg-opacity-30 z-30"
						onClick={() => setShowMenu(false)}
					/>

					<div
						className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-40  animate-slide-in transform transition-transform duration-300 ${
							open ? 'translate-x-0' : 'translate-x-full'
						}`}
					>
						<div className="p-4 text-black">
							<h2 className="text-lg font-bold mb-4">Menu</h2>
							{menu.map((item, idx) => (
								<SidebarItem key={idx} item={item} />
							))}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default SidebarMenu;
