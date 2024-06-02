// import doExist from '@common/utils/doExist';
import styles from './input.module.css';

const Input = ({
	labelName, inputType = 'text', 
	placeholder = '', value, onChange,
}) => {

	// TODO: remove later
	// if(!doExist(labelName, value, onChange)) {
	// 	return;
	// }
	
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
				name={labelName}
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