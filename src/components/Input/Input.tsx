import React, { useState } from 'react';
import { VscChromeClose, VscEye, VscEyeClosed } from 'react-icons/vsc';

interface InputProps {
	type: string;
	clearable: boolean;
}

const InputComponent: React.FC<InputProps> = ({ type = 'text', clearable }) => {
	const [value, setValue] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const handleClear = () => {
		setValue('');
	};

	const isPassword = type === 'password';

	return (
		<div className="flex items-center gap-2">
			<label className="text-xs text-white flex flex-col gap-2">
				<b>{isPassword ? 'Password' : `Input ${type}`}</b>
				<input
					type={isPassword && showPassword ? 'text' : type}
					placeholder="Type here..."
					value={value}
					onChange={handleChange}
					className="p-2 text-black text-xs focus:outline-blue-500 rounded"
				/>
			</label>
			{isPassword && (
				<button
					type="button"
					onClick={() => setShowPassword(!showPassword)}
				>
					{showPassword ? <VscEyeClosed /> : <VscEye />}
				</button>
			)}
			{value.length > 0 && clearable && (
				<button type="button" onClick={handleClear} className="align-center">
					<VscChromeClose />
				</button>
			)}
		</div>
	);
};
export default InputComponent;
