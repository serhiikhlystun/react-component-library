import { Meta, StoryObj } from '@storybook/react-webpack5';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
	title: 'Components/Toast',
	component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
	args: {
		type: 'success',
		message: 'Operation completed successfully!',
		duration: 3000,
		closeable: true,
	},
};

export const Error: Story = {
	args: {
		type: 'error',
		message: 'An error occurred while processing your request.',
		duration: 3000,
		closeable: false,
	},
};

export const Info: Story = {
	args: {
		type: 'info',
		message: 'This is an informational message.',
		duration: 2000,
		closeable: true,
	},
};

export const Attention: Story = {
	args: {
		type: 'attention',
		message: 'Please pay attention to this message!',
		duration: 6000,
		closeable: false,
	},
};
