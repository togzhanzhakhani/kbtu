import Input from '@common/components/inputs/input/Input';
import ButtonBlueRound from '@common/components/buttons/button_blue_round/ButtonBlueRound';
import useContactForm from '@modules/contacts/hooks/useContactForm';
import styles from './contacts_form.module.css';

// TODO: form validation & verification
const ContactsForm = () => {

	const [
		formData, onFormChange, onSubmit
	] = useContactForm();

	return (
		<form className={styles.form}>
			<div className={styles.row}>
				<Input
					name='name'
					labelName='Имя'
					value={formData['name']}
					onChange={onFormChange}
				/>

				<Input
					name='surname'
					labelName='Фамилия'
					value={formData['surname']}
					onChange={onFormChange}
				/>
			</div>

			<div className={styles.row}>
				<Input
					name='email'
					labelName='Email'
					inputType='email'
					value={formData['email']}
					onChange={onFormChange}
				/>

				<Input
					name='phone'
					labelName='Номер телефона'
					value={formData['phone']}
					onChange={onFormChange}
				/>
			</div>

			<div className={styles.row}>
				<Input
					name='topic'
					labelName='Тема'
					placeholder='Напишите тему...'
					value={formData['topic']}
					onChange={onFormChange}
				/>
			</div>

			<div className={styles.row}>
				<Input
					name='message'
					labelName='Сообщение'
					placeholder='Напишите сообщение...'
					value={formData['message']}
					onChange={onFormChange}
				/>
			</div>

			<ButtonBlueRound
				text='Отправить'
				className={styles.button}
				onClick={onSubmit}
			/>
		</form>
	);
};

export default ContactsForm;