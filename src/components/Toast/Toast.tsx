import React, { useEffect, useState } from 'react';

interface ToastProps {
	type: string;
	message: string;
	duration: number;
	closeable?: boolean;
}

const Toast: React.FC<ToastProps> = ({
	type,
	message,
	duration,
	closeable,
}) => {
	const [showToast, setShowToast] = useState(true);

	const handleClose = () => {
		setShowToast(false);
	};

	let toastBackground = '';

	switch (type) {
		case 'success':
			toastBackground = 'bg-green-500';
			break;
		case 'error':
			toastBackground = 'bg-red-500';
			break;
		case 'info':
			toastBackground = 'bg-blue-500';
			break;
		case 'attention':
			toastBackground = 'bg-yellow-500';
			break;
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			showToast && setShowToast(false);
		}, duration || 3000);

		return () => clearTimeout(timer);
	}, [showToast, duration]);

	return (
		showToast && (
			<div
				className={`w-6vw ${toastBackground} fixed bottom-2 right-2 text-black p-2 rounded shadow-md text-sm animate-slide-in`}
			>
				<p>
					This is a {type} toast: {message}
				</p>
				{closeable && (
					<button
						onClick={handleClose}
						className="absolute text-black font-bold bottom-7 right-0"
					>
						X
					</button>
				)}
			</div>
		)
	);
};

export default Toast;
