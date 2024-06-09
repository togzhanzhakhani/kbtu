import Select from '@common/components/select/Select';
import useStatusFilters from '@modules/projects/hooks/useStatusFilters';
import useSearchbar from '@modules/projects/hooks/useSearchbar';
import useToggle from '@common/hooks/useToggle';
import directions from '@modules/projects/utils/directions';
import magnifierIcon from '@assets/icons/magnifier.svg';
import caretDown from "@assets/icons/caret_down.svg";
import styles from './projects_config.module.css';
import Clickaway from '@common/components/clickaway/Clickaway';

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

	const {	
		value: areDirsVisible,
		setValue: setDirsVisible,
	} = useToggle(false);

	const selectStyle = {
		borderBottomLeftRadius: areDirsVisible ? '0' : '',
		borderBottomRightRadius: areDirsVisible ? '0' : '',
	};

	const caretStyle = {
		transform: areDirsVisible && 'rotate(180deg)',
		transition: 'all 0.3s ease'
	};

	const onClickAway = (e) => {
		const targetId = e.target.id;
		const valid = [
			'projects_config_dirs',
			'projects_config_dirs_icon',
			'projects_config_dirs_ph',
		];

		console.log(areDirsVisible, targetId);

		if(areDirsVisible && !valid.includes(targetId)) {
			setDirsVisible(false);
		}
	};

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
				<div 
					id='projects_config_dirs'
					className={styles.dirs_select}
					style={selectStyle}
					onClick={() => setDirsVisible(true)}
				>
					<p 
						id='projects_config_dirs_ph'
						className={styles.dirs_placeholder}
					>
						Выберите
					</p>

					<img 
						id='projects_config_dirs_icon'
						src={caretDown} 
						alt='caret pointing downwards' 
						className={styles.caret_down}
						style={caretStyle}
					/>
				</div>

				{
					areDirsVisible &&
					<Clickaway onClickAway={onClickAway}>
						<div className={styles.dirs_wrappable}>
							{
								directions.map((d, i) => (
									<p
										key={d.id == null ? i : d.id}
										className={styles.dir}
									>	
										{d.name}
									</p>
								))
							}
						</div>
					</Clickaway>
				}
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