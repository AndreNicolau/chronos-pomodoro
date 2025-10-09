import {
	HistoryIcon,
	HouseIcon,
	MoonIcon,
	Settings2Icon,
	SunIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
	const [theme, setTheme] = useState<AvailableThemes>(() => {
		const storageTheme =
			(localStorage.getItem('theme') as AvailableThemes) || 'dark';
		return storageTheme;
	});

	const nextThemeIcon = {
		dark: <SunIcon />,
		light: <MoonIcon />,
	};

	function handleThemeChange(
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) {
		event.preventDefault();

		setTheme((prevTheme) => {
			const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
			return nextTheme;
		});
	}

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<nav className={styles.menu}>
			<a
				className={styles.menuLink}
				href="#"
				aria-label="Ir para a Home"
				title="Ir para a Home"
			>
				<HouseIcon size={64} />
			</a>
			<a
				className={styles.menuLink}
				href="#"
				aria-label="Ver histórico"
				title="Ver histórico"
			>
				<HistoryIcon size={64} />
			</a>
			<a
				className={styles.menuLink}
				href="#"
				aria-label="Configurações"
				title="Configurações"
			>
				<Settings2Icon size={64} />
			</a>
			<a
				className={styles.menuLink}
				href="#"
				aria-label="Mudar tema"
				title="Mudar tema"
				onClick={handleThemeChange}
			>
				{nextThemeIcon[theme]}
			</a>
		</nav>
	);
}
