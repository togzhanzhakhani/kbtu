import ButtonBlueRound from '@common/components/buttons/button_blue_round/ButtonBlueRound';
import useApplyForm from '../hooks/useApplyForm';
import ApplyInput from '../input/ApplyInput';
import ApplyInputFile from '../input_file/ApplyInputFile';
import styles from './apply_form.module.css';

const ApplyForm = () => {

	const {
		formData, change, onSubmit,
	} = useApplyForm();

	return (
		<form className={styles.form}>
			<ApplyInput
				label='Наименование заявки (проекта)'
				name='title'
				value={formData.title}
				onChange={e => change('title', e.target.value)}
				isRequired
			/>

			<ApplyInput
				label='Цель и описание заявки (проекта)'
				name='descr'
				value={formData.descr}
				onChange={e => change('descr', e.target.value)}
				isMultiLine
				isRequired
			/>

			{/* Select input here */}

			<ApplyInput
				label='Бюджет'
				name='budget'
				value={formData.budget}
				onChange={e => change('budget', e.target.value)}
			/>

			<ApplyInputFile
				label='Техническое задание'
				name='task'
				
			/>

			<ApplyInput
				label='ФИО ответственного лица от заказчика'
				name='client'
				value={formData.client}
				onChange={e => change('client', e.target.value)}
				isRequired
			/>

			<ApplyInput
				label='Контакты ответственного лица от заказчика'
				name='phone'
				value={formData.phone}
				onChange={e => change('phone', e.target.value)}
				isRequired
			/>

			<ApplyInput
				label='Примечание'
				name='note'
				value={formData.note}
				onChange={e => change('note', e.target.value)}
				isMultiLine
			/>

			<ButtonBlueRound
				text='Сохранить заявку'
				className={styles.button}
				onClick={onSubmit}
			/>
		</form>
	);
};

export default ApplyForm;