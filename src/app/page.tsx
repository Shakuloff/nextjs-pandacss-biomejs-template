import { css } from "../../styled-system/css";

export default function Home() {
	return (
		<div className={css({ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" })}>
			<h1 className={css({ fontSize: "4xl", fontWeight: "bold", color: "yellow.400" })}>
				Next.js | PandaCSS | Biome.js template
			</h1>
		</div>
	);
}
