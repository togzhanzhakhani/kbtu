const projects = [
	{
		id: '1',
		title: 'Разработка новой угольной шахты',
		status: 'В обработке',
		descr: `
			Проект включает разработку новой шахты 
			в Карагандинской области с применением 
			новейших технологий безопасности.
		`,
		client: 'ЗАО "ФИНКА Банк"',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Промышленная безопасность',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '2',
		title: 'Реконструкция завода по переработке нефти',
		status: 'В обработке',
		descr: `
			Модернизация оборудования и внедрение новых 
			технологий на заводе в Актау.
		`,
		client: 'Иванов Иван Иванович',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Промышленная безопасность',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '3',
		title: 'Строительство завода по производству аккумуляторов',
		status: 'В обработке',
		descr: `
			Строительство завода по производству 
			литий-ионных аккумуляторов в Талгарской области 
			с использованием передовых технологий.
		`,
		client: 'Сидоров Сергей Сергеевич',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Технологии и моделирование',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '4',
		title: 'Разработка нового месторождения нефти',
		status: 'В обработке',
		descr: `
			Проект по разведке и разработке нового 
			месторождения нефти в Атырауской области.
		`,
		client: 'ТОО “Энерго”',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Повышение нефтеотдачи',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '5',
		title: 'Модернизация металлургического комбината',
		status: 'В обработке',
		descr: `
			Комплексная модернизация оборудования 
			и внедрение новых технологий на 
			металлургическом комбинате в Караганды.
		`,
		client: 'ТОО “Энерго”',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Геология и сейсмология',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '6',
		title: 'Разработка новой угольной шахты',
		status: 'В обработке',
		descr: `
			Проект включает разработку новой шахты 
			в Карагандинской области с применением 
			новейших технологий безопасности.
		`,
		client: 'ЗАО "ФИНКА Банк"',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Промышленная безопасность',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '7',
		title: 'Реконструкция завода по переработке нефти',
		status: 'В обработке',
		descr: `
			Модернизация оборудования и внедрение новых 
			технологий на заводе в Актау.
		`,
		client: 'Иванов Иван Иванович',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Промышленная безопасность',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '8',
		title: 'Строительство завода по производству аккумуляторов',
		status: 'В обработке',
		descr: `
			Строительство завода по производству 
			литий-ионных аккумуляторов в Талгарской области 
			с использованием передовых технологий.
		`,
		client: 'Сидоров Сергей Сергеевич',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Технологии и моделирование',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '9',
		title: 'Разработка нового месторождения нефти',
		status: 'В обработке',
		descr: `
			Проект по разведке и разработке нового 
			месторождения нефти в Атырауской области.
		`,
		client: 'ТОО “Энерго”',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Повышение нефтеотдачи',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '10',
		title: 'Модернизация металлургического комбината',
		status: 'В обработке',
		descr: `
			Комплексная модернизация оборудования 
			и внедрение новых технологий на 
			металлургическом комбинате в Караганды.
		`,
		client: 'ТОО “Энерго”',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Геология и сейсмология',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '11',
		title: 'Разработка новой угольной шахты',
		status: 'В обработке',
		descr: `
			Проект включает разработку новой шахты 
			в Карагандинской области с применением 
			новейших технологий безопасности.
		`,
		client: 'ЗАО "ФИНКА Банк"',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Промышленная безопасность',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '12',
		title: 'Реконструкция завода по переработке нефти',
		status: 'В обработке',
		descr: `
			Модернизация оборудования и внедрение новых 
			технологий на заводе в Актау.
		`,
		client: 'Иванов Иван Иванович',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Промышленная безопасность',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '13',
		title: 'Строительство завода по производству аккумуляторов',
		status: 'В обработке',
		descr: `
			Строительство завода по производству 
			литий-ионных аккумуляторов в Талгарской области 
			с использованием передовых технологий.
		`,
		client: 'Сидоров Сергей Сергеевич',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Технологии и моделирование',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '14',
		title: 'Разработка нового месторождения нефти',
		status: 'В обработке',
		descr: `
			Проект по разведке и разработке нового 
			месторождения нефти в Атырауской области.
		`,
		client: 'ТОО “Энерго”',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Повышение нефтеотдачи',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '15',
		title: 'Модернизация металлургического комбината',
		status: 'В обработке',
		descr: `
			Комплексная модернизация оборудования 
			и внедрение новых технологий на 
			металлургическом комбинате в Караганды.
		`,
		client: 'ТОО “Энерго”',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Геология и сейсмология',
		note: 'В проекте задействованы международные эксперты.'
	},
	{
		id: '16',
		title: 'Разработка новой угольной шахты',
		status: 'В обработке',
		descr: `
			Проект включает разработку новой шахты 
			в Карагандинской области с применением 
			новейших технологий безопасности.
		`,
		client: 'ЗАО "ФИНКА Банк"',
		clientName: 'Имя Фамилия Отчество',
		phone: '+7 (777) 777-77-77',
		direction: 'Промышленная безопасность',
	},
];

export default projects;