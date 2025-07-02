import { Meta, StoryObj } from '@storybook/react-webpack5';
import SidebarMenu from './SidebarMenu';
import { MenuItem } from './types';
import React, { useState } from 'react';

const meta: Meta<typeof SidebarMenu> = {
	title: 'Components/Sidebar',
	component: SidebarMenu,
};

export default meta;

const sampleMenu1: MenuItem[] = [
	{ label: 'Dashboard' },
	{ label: 'Settings' },
	{ label: 'Profile' },
];

const sampleMenu2: MenuItem[] = [
	{
		label: 'Projects',
		children: [
			{ label: 'Project A' },
			{
				label: 'Project B',
				children: [
					{ label: 'Subproject B1' },
					{ label: 'Subproject B2' },
				],
			},
		],
	},
	{ label: 'Team' },
	{ label: 'Logout' },
];

const Template = (args: any) => {
	const [open, setOpen] = useState(true);
	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="mb-2 px-4 py-1 border rounded"
			>
				Open Sidebar
			</button>
			<SidebarMenu {...args} open={open} onClose={() => setOpen(false)} />
		</>
	);
};

export const OneLevelMenu: StoryObj = {
	render: () => <Template menu={sampleMenu1} />,
};

export const TwoLevelMenu: StoryObj = {
	render: () => <Template menu={sampleMenu2} />,
};
