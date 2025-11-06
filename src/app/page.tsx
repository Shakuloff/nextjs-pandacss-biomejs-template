import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";
import { css } from "../../styled-system/css";
import { VStack } from "../../styled-system/jsx";

export default function Home() {
	return (
		<VStack
			className={css({
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "svh",
				backgroundColor: "bg",
			})}
		>
			<h1 className={css({ fontSize: "4xl", fontWeight: "bold", color: "fg" })}>
				Next.js | PandaCSS | Biome.js template
			</h1>
			<ThemeSwitcher />
		</VStack>
	);
}
