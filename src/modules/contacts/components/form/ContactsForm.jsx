import Input from '@common/components/inputs/input/Input';
import styles from './contacts_form.module.css';
import ButtonBlueRound from '@common/components/buttons/button_blue_round/ButtonBlueRound';

const ContactsForm = () => {

	return (
		<form className={styles.form}>
			<div className={styles.row}>
				<Input
					labelName='Имя'
					value='John'
				/>

				<Input
					labelName='Фамилия'
					value='Doe'
				/>
			</div>

			<div className={styles.row}>
				<Input
					labelName='Email'
					inputType='email'
					value='johndoe@gmail.com'
				/>

				<Input
					labelName='Номер телефона'
					value='+7 800 535 3535'
				/>
			</div>

			<div className={styles.row}>
				<Input
					labelName='Тема'
					placeholder='Напишите тему...'
					value=''
				/>
			</div>

			<div className={styles.row}>
				<Input
					labelName='Сообщение'
					placeholder='Напишите сообщение...'
					value=''
				/>
			</div>

			<ButtonBlueRound
				text='Отправить'
				className={styles.button}
			/>
		</form>
	);
};

export default ContactsForm;