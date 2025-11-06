"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeSwitcher() {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		// Get initial theme from localStorage or system preference
		const stored = localStorage.getItem("theme") as Theme | null;
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const initial = stored || (prefersDark ? "dark" : "light");

		setTheme(initial);
		document.documentElement.setAttribute("data-color-mode", initial);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.setAttribute("data-color-mode", newTheme);
		localStorage.setItem("theme", newTheme);
	};

	return (
		<button type="button" onClick={toggleTheme} aria-label="Toggle theme">
			{theme === "light" ? "🌙" : "☀️"}
		</button>
	);
}
