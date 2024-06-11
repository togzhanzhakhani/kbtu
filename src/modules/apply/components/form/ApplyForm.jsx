import useApplyForm from '../hooks/useApplyForm';
import ApplyInput from '../input/ApplyInput';
import styles from './apply_form.module.css';

const ApplyForm = () => {

	const {
		formData, change
	} = useApplyForm();

	return (
		<form className={styles.form}>
			<ApplyInput
				label='Наименование заявки (проекта)'
				value={formData.title}
				onChange={e => change('title', e.target.value)}
				isRequired
			/>

			<ApplyInput
				label='Цель и описание заявки (проекта)'
				value={formData.descr}
				onChange={e => change('descr', e.target.value)}
				isMultiLine
				isRequired
			/>

			{/* Select input here */}

			<ApplyInput
				label='Бюджет'
				value={formData.budget}
				onChange={e => change('budget', e.target.value)}
			/>

			{/* Task here */}

			<ApplyInput
				label='ФИО ответственного лица от заказчика'
				value={formData.client}
				onChange={e => change('client', e.target.value)}
				isRequired
			/>

			<ApplyInput
				label='Контакты ответственного лица от заказчика'
				value={formData.phone}
				onChange={e => change('phone', e.target.value)}
				isRequired
			/>

			<ApplyInput
				label='Примечание'
				value={formData.note}
				onChange={e => change('note', e.target.value)}
				isMultiLine
			/>
		</form>
	);
};

export default ApplyForm;