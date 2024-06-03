import doExist from '@common/utils/doExist';
import styles from './input.module.css';

const Input = ({
	labelName, inputType = 'text', name = '',
	placeholder = '', value, onChange,
}) => {

	if(!doExist(labelName, value, onChange, name)) {
		return;
	}
	
	const inputDynamicStyles = {
		color: value.length ? "var(--color-black)" : "var(--color-gray-dark)"
	};

	return (
		<div className={styles.box}>
			<label 
				htmlFor={labelName}
				className={styles.label}
				style={inputDynamicStyles}
			>
				{labelName}
			</label>

			<input
				name={name}
				value={value}
				type={inputType}
				placeholder={placeholder}
				className={styles.input}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;