document.addEventListener("DOMContentLoaded", () => {
	const buttons = document.querySelectorAll(".toggle-missions");

	buttons.forEach((button) => {
		const container = button.closest("div.grid");
		const missionsList = container.querySelector(".missions-list");
		const textSpan = button.querySelector("span");
		const gradientBg = button.querySelector(".gradient-bg");

		if (!missionsList || !textSpan || !gradientBg) return;

		missionsList.style.maxHeight = "0px";

		button.addEventListener("click", () => {
			const isCollapsed = missionsList.style.maxHeight === "0px";

			if (isCollapsed) {
				missionsList.style.maxHeight = missionsList.scrollHeight + "px";
				textSpan.textContent = "Masquer";
				gradientBg.classList.add("-left-150");
				button.classList.add("active");
			} else {
				missionsList.style.maxHeight = "0px";
				textSpan.textContent = "Voir le détail";
				gradientBg.classList.remove("-left-150");
				button.classList.remove("active");
			}
		});
	});
});
