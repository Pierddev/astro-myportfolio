document.addEventListener("DOMContentLoaded", () => {
	const buttons = document.querySelectorAll("[data-stack-toggle]");

	buttons.forEach((button) => {
		const chevron = button.querySelector("[data-chevron]");
		const id = button.getAttribute("data-stack-toggle");
		const items = document.querySelectorAll(`.stack-item-${id}`);
		const label = button.querySelector("span");

		let expanded = false;

		button.addEventListener("click", () => {
			expanded = !expanded;
			button.setAttribute("data-expanded", expanded.toString());

			items.forEach((el, i) => {
				if (i >= 5) {
					if (expanded) {
						el.classList.remove("hidden");
						setTimeout(() => {
							el.classList.remove("opacity-0", "scale-90");
						}, 10);
					} else {
						el.classList.add("opacity-0", "scale-90");
						setTimeout(() => {
							el.classList.add("hidden");
						}, 200);
					}
				}
			});

			if (label) {
				label.textContent = expanded ? "Voir moins" : "Voir plus";
			}

			if (chevron) {
				chevron.classList.toggle("rotate-180", expanded);
				chevron.classList.toggle("rotate-0", !expanded);
			}
		});
	});
});
