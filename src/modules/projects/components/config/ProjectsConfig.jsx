import Select from '@common/components/select/Select';
import useStatusFilters from '@modules/projects/hooks/useStatusFilters';
import useSearchbar from '@modules/projects/hooks/useSearchbar';
import magnifierIcon from '@assets/icons/magnifier.svg';
import caretDown from "@assets/icons/caret_down.svg";
import styles from './projects_config.module.css';

// 'dirs' = 'directions'
// 'app' = 'application'
const ProjectsConfig = () => {

	const {
		processing, toggleProcessing,
		accepted, toggleAccepted,
		denied, toggleDenied
	} = useStatusFilters();

	const {
		search, onSearchChange
	} = useSearchbar();

	return (
		<div className={styles.container}>
			<div className={styles.searchbar}>
				<img 
					src={magnifierIcon} 
					alt='magnifier' 
					className={styles.magnifier_icon}
				/>

				<input 
					type='text'
					value={search}
					placeholder='Поиск по названию' 
					className={styles.searchbar_input}
					onChange={e => onSearchChange(e.target.value)}
				/>
			</div>

			<p className={styles.label}>
				Направление заявки:
			</p>

			<div className={styles.dirs}>
				<div className={styles.dirs_select}>
					<p className={styles.dirs_placeholder}>
						Выберите
					</p>

					<img 
						src={caretDown} 
						alt='caret pointing downwards' 
						className={styles.caret_down}
					/>
				</div>

				{/* Directions here */}
			</div>

			<p className={styles.label}>
				Статус заявки:
			</p>

			<div className={styles.radios}>
				<div 
					className={styles.radio_box}
					onClick={toggleProcessing}
				>
					<Select 
						isSelected={processing}
					/>

					<p className={styles.radio_label}>
						В обработке
					</p>
				</div>

				<div 
					className={styles.radio_box}
					onClick={toggleAccepted}
				>
					<Select 
						isSelected={accepted}
					/>

					<p className={styles.radio_label}>
						Принято
					</p>
				</div>

				<div 
					className={styles.radio_box}
					onClick={toggleDenied}
				>
					<Select 
						isSelected={denied}
					/>

					<p className={styles.radio_label}>
						Отказано
					</p>
				</div>
			</div>

			<button className={styles.button}>
				Применить фильтр
			</button>
		</div>
	);
};

export default ProjectsConfig;