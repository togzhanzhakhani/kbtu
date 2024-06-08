import ButtonBlueRound from '@common/components/buttons/button_blue_round/ButtonBlueRound';
import useContactForm from '@modules/contacts/hooks/useContactForm';
import ContactsInput from '../input/ContactsInput';
import styles from './contacts_form.module.css';


// TODO: form validation & verification
// NOTE: does message input transform into a textbox?
const ContactsForm = () => {

	const {
		formData, errors, onFormChange, onSubmit
	} = useContactForm();

	return (
		<form className={styles.form}>
			<div className={styles.row}>
				<ContactsInput
					name='name'
					labelName='Имя'
					value={formData.name}
					onChange={onFormChange}
					errorMessage={errors.name}
				/>

				<ContactsInput
					name='surname'
					labelName='Фамилия'
					value={formData.surname}
					onChange={onFormChange}
					errorMessage={errors.surname}
				/>
			</div>

			<div className={styles.row}>
				<ContactsInput
					name='email'
					labelName='Email'
					inputType='email'
					value={formData.email}
					onChange={onFormChange}
					errorMessage={errors.email}
				/>

				<ContactsInput
					name='phone'
					labelName='Номер телефона'
					value={formData.phone}
					onChange={onFormChange}
					errorMessage={errors.phone}
				/>
			</div>

			<div className={styles.row}>
				<ContactsInput
					name='topic'
					labelName='Тема'
					placeholder='Напишите тему...'
					value={formData.topic}
					onChange={onFormChange}
					errorMessage={errors.topic}
				/>
			</div>

			<div className={styles.row}>
				<ContactsInput
					name='message'
					labelName='Сообщение'
					placeholder='Напишите сообщение...'
					value={formData.message}
					onChange={onFormChange}
					errorMessage={errors.message}
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