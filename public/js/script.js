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


// ---------------------------------------------------------------------------
// Animations de lecture
// ---------------------------------------------------------------------------
const prefersReducedMotion = window.matchMedia(
	"(prefers-reduced-motion: reduce)",
).matches;

// Apparition au scroll : les enfants d'un [data-reveal-group] arrivent l'un après l'autre,
// les éléments [data-reveal] arrivent seuls. Le CSS les cache (global.css), .is-visible les montre.
document.querySelectorAll("[data-reveal-group]").forEach((group) => {
	[...group.children].forEach((child, index) => {
		child.dataset.reveal = "";
		child.style.setProperty("--reveal-delay", `${index * 80}ms`);
	});
});

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
	const revealObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					revealObserver.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
	);
	revealItems.forEach((item) => revealObserver.observe(item));
} else {
	revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Machine à écrire sur le titre du hero : chaque lettre est déjà en place (pas de saut de mise
// en page), on les révèle une à une. aria-label garde le titre lisible pour les lecteurs d'écran.
const typewriter = document.querySelector("[data-typewriter]");

if (typewriter && !prefersReducedMotion) {
	// innerText plutôt que textContent : le <br> y devient un saut de ligne, donc une espace ici
	typewriter.setAttribute(
		"aria-label",
		typewriter.innerText.replace(/\s+/g, " ").trim(),
	);

	const textNodes = [];
	const walker = document.createTreeWalker(typewriter, NodeFilter.SHOW_TEXT);
	while (walker.nextNode()) textNodes.push(walker.currentNode);

	const letters = [];
	textNodes.forEach((node) => {
		if (!node.textContent.trim()) return;
		const fragment = document.createDocumentFragment();
		for (const char of node.textContent.replace(/\s+/g, " ")) {
			// Les espaces restent du texte simple : pas de temps mort ni de curseur posé après un espace
			if (char === " ") {
				fragment.append(" ");
				continue;
			}
			const letter = document.createElement("span");
			letter.className = "typer-char";
			letter.setAttribute("aria-hidden", "true");
			letter.textContent = char;
			fragment.append(letter);
			letters.push(letter);
		}
		node.replaceWith(fragment);
	});

	const caret = document.createElement("span");
	caret.className = "typer-caret";
	caret.setAttribute("aria-hidden", "true");

	// La frappe attend que le titre ait fini d'apparaître au scroll (animation reveal-up), sinon
	// elle se jouerait pendant le fondu, ou hors de l'écran. Elle attend aussi la police : un
	// changement de police en cours de frappe ferait bouger toutes les lettres.
	const revealed = typewriter.hasAttribute("data-reveal")
		? new Promise((resolve) => {
				typewriter.addEventListener("animationend", function onEnd(event) {
					if (event.animationName !== "reveal-up") return;
					typewriter.removeEventListener("animationend", onEnd);
					resolve();
				});
			})
		: Promise.resolve();

	Promise.all([revealed, document.fonts.ready]).then(() => {
		let typed = 0;
		const timer = setInterval(() => {
			letters[typed].classList.add("is-typed");
			letters[typed].after(caret);
			typed += 1;
			if (typed === letters.length) {
				clearInterval(timer);
				setTimeout(() => caret.remove(), 1500);
			}
		}, 35);
	});
}

// Barre de progression de lecture + lien actif de la navbar : les deux suivent le défilement.
const progressBar = document.getElementById("scrollProgress");

// Sur l'accueil, la navbar pointe vers d'autres pages (/stack, /projects) : le lien
// correspondant à la section visible est mis en avant. Contact n'a pas d'onglet : aucun actif.
// Ces classes sont celles de tabState dans navbar.astro.
const TAB_ACTIVE = "border-white/12 bg-white/8 text-white".split(" ");
const TAB_INACTIVE =
	"border-transparent text-white/72 hover:bg-white/6 hover:text-white".split(" ");

const spySections =
	window.location.pathname === "/"
		? [
				{ element: document.getElementById("top"), tab: "home" },
				{ element: document.getElementById("projets"), tab: "projects" },
				{ element: document.getElementById("stack"), tab: "stack" },
				{ element: document.getElementById("contact"), tab: null },
			].filter((section) => section.element)
		: [];

let currentTab;

function updateActiveTab() {
	// La section courante est la dernière dont le haut a passé 40 % de la hauteur de l'écran
	let tab = "home";
	for (const section of spySections) {
		if (section.element.getBoundingClientRect().top <= window.innerHeight * 0.4) {
			tab = section.tab;
		}
	}
	if (tab === currentTab) return;
	currentTab = tab;

	document.querySelectorAll("[data-tab]").forEach((link) => {
		const isActive = link.dataset.tab === tab;
		link.classList.remove(...(isActive ? TAB_INACTIVE : TAB_ACTIVE));
		link.classList.add(...(isActive ? TAB_ACTIVE : TAB_INACTIVE));
		if (isActive) link.setAttribute("aria-current", "page");
		else link.removeAttribute("aria-current");
	});
}

let scrollTicking = false;

function onScroll() {
	if (scrollTicking) return;
	scrollTicking = true;
	requestAnimationFrame(() => {
		const scrollable =
			document.documentElement.scrollHeight - window.innerHeight;
		const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
		if (progressBar) {
			progressBar.style.transform = `scaleX(${Math.min(1, progress)})`;
		}
		if (spySections.length) updateActiveTab();
		scrollTicking = false;
	});
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
onScroll();

// Tilt 3D des cartes projet : inclinaison légère vers la souris, uniquement avec une souris
// (pas au doigt) et si les animations ne sont pas réduites.
if (
	!prefersReducedMotion &&
	window.matchMedia("(hover: hover)").matches
) {
	document.querySelectorAll("[data-tilt]").forEach((card) => {
		card.addEventListener("pointermove", (event) => {
			const rect = card.getBoundingClientRect();
			const x = (event.clientX - rect.left) / rect.width - 0.5;
			const y = (event.clientY - rect.top) / rect.height - 0.5;
			card.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
		});
		card.addEventListener("pointerleave", () => {
			card.style.transform = "";
		});
	});
}
