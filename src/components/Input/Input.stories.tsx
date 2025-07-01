import { Meta, StoryObj } from '@storybook/react-webpack5';
import InputComponent from './Input';

const meta: Meta<typeof InputComponent> = {
	title: 'Components/Input',
	component: InputComponent,
};

export default meta;

type Story = StoryObj<typeof InputComponent>;

export const Text: Story = {
	args: {
		type: 'text',
	},
};

export const Password: Story = {
	args: {
		type: 'password',
	},
};

export const ClearableText: Story = {
	args: {
		type: 'text',
		clearable: true,
	},
};

export const Number: Story = {
	args: {
		type: 'number',
	},
};
