// Café Vista Hoboken: small progressive enhancements. The page works without this file.

// Opening hours in America/New_York, minutes after midnight. Sunday is 0.
const HOURS = {
	0: [450, 1020],
	1: [450, 960],
	2: [450, 960],
	3: [450, 960],
	4: [450, 960],
	5: [450, 1020],
	6: [450, 1020],
};

// Current day and minute in Hoboken. Preview other times with ?at=<day 0-6>-<HH:MM>, e.g. ?at=1-15:30.
function hobokenNow() {
	const at = new URLSearchParams(location.search).get("at");
	const match = at && at.match(/^([0-6])-(\d{1,2}):(\d{2})$/);
	if (match) return { day: Number(match[1]), minute: Number(match[2]) * 60 + Number(match[3]) };
	const parts = Object.fromEntries(
		new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23" })
			.formatToParts(new Date())
			.map((p) => [p.type, p.value]),
	);
	const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.weekday);
	return { day, minute: Number(parts.hour) * 60 + Number(parts.minute) };
}

function formatTime(minute) {
	const h = Math.floor(minute / 60);
	const m = minute % 60;
	const suffix = h >= 12 ? "pm" : "am";
	const h12 = h % 12 || 12;
	return m ? `${h12}:${String(m).padStart(2, "0")} ${suffix}` : `${h12} ${suffix}`;
}

function renderStatus() {
	const { day, minute } = hobokenNow();
	const [opens, closes] = HOURS[day];
	const status = document.querySelector("[data-status]");
	const text = document.querySelector("[data-status-text]");
	let message;
	let open = false;
	if (minute >= opens && minute < closes) {
		open = true;
		message = closes - minute <= 45 ? `Open now · closing soon, at ${formatTime(closes)}` : `Open now · until ${formatTime(closes)} today`;
	} else if (minute < opens) {
		message = `Closed · opens today at ${formatTime(opens)}`;
	} else {
		message = `Closed · opens tomorrow at ${formatTime(HOURS[(day + 1) % 7][0])}`;
	}
	status.classList.toggle("is-open", open);
	status.classList.toggle("is-closed", !open);
	text.textContent = message;

	document.querySelectorAll("[data-hours] tr").forEach((row) => {
		row.classList.toggle("is-today", Number(row.dataset.day) === day);
	});
}

function setupTabs() {
	const tabs = [...document.querySelectorAll('[role="tab"]')];
	const select = (tab) => {
		tabs.forEach((t) => {
			const selected = t === tab;
			t.setAttribute("aria-selected", String(selected));
			t.tabIndex = selected ? 0 : -1;
			document.getElementById(t.getAttribute("aria-controls")).hidden = !selected;
		});
	};
	tabs.forEach((tab, i) => {
		tab.addEventListener("click", () => select(tab));
		tab.addEventListener("keydown", (event) => {
			const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
			if (!step) return;
			const next = tabs[(i + step + tabs.length) % tabs.length];
			select(next);
			next.focus();
		});
	});
}

// The event inquiry opens a pre-filled email to the café, so it needs no server.
function setupInquiry() {
	const form = document.querySelector("[data-inquiry]");
	const message = document.querySelector("[data-inquiry-msg]");

	document.querySelectorAll("[data-pick]").forEach((button) => {
		button.addEventListener("click", () => {
			form.elements.package.value = button.dataset.pick;
			form.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
			form.elements.date.focus({ preventScroll: true });
		});
	});

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const { name, contact } = form.elements;
		const missing = [name, contact].filter((field) => !field.value.trim());
		[name, contact].forEach((field) => field.setAttribute("aria-invalid", String(missing.includes(field))));
		if (missing.length) {
			message.textContent = "Please add your name and a phone number or email so the café can reply.";
			missing[0].focus();
			return;
		}
		const f = form.elements;
		const body = [
			`Package: ${f.package.value}`,
			`Date: ${f.date.value || "flexible"}`,
			`Guests: ${f.guests.value || "not sure yet"}`,
			`Name: ${name.value.trim()}`,
			`Contact: ${contact.value.trim()}`,
			"",
			f.notes.value.trim(),
		].join("\n");
		const subject = `Event inquiry: ${f.package.value}${f.date.value ? ` on ${f.date.value}` : ""}`;
		location.href = `mailto:info@cafevista.management?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		message.textContent = "Your email app should open with everything filled in. Just press send.";
	});
}

function setupMasthead() {
	const masthead = document.querySelector("[data-masthead]");
	const update = () => masthead.classList.toggle("is-scrolled", scrollY > 8);
	update();
	addEventListener("scroll", update, { passive: true });
}

renderStatus();
setInterval(renderStatus, 60_000);
setupTabs();
setupInquiry();
setupMasthead();
