// Menu burger (mobile) : le bouton #burger ouvre et ferme le menu #mobileMenu
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

function setMenuOpen(open) {
	mobileMenu.hidden = !open;
	burger.setAttribute("aria-expanded", String(open));
}

burger.addEventListener("click", () => {
	setMenuOpen(mobileMenu.hidden);
});

// Un clic sur un lien ou sur le fond ferme le menu. Sans ça, un lien vers une
// ancre de la page actuelle (/#contact depuis l'accueil) laisserait le menu ouvert.
mobileMenu.addEventListener("click", (event) => {
	if (event.target === mobileMenu || event.target.closest("a")) {
		setMenuOpen(false);
	}
});

// Au clavier : Échap ferme le menu et rend le focus au bouton
document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && !mobileMenu.hidden) {
		setMenuOpen(false);
		burger.focus();
	}
});

// Quitter le menu avec Tab le ferme, pour ne pas naviguer dans la page cachée dessous
mobileMenu.addEventListener("focusout", (event) => {
	if (
		!mobileMenu.contains(event.relatedTarget) &&
		event.relatedTarget !== burger
	) {
		setMenuOpen(false);
	}
});
