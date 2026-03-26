/* ── STATE ── */
const S = {
  user: null,
  booking: { date: null, time: null, service: null },
  calY: new Date().getFullYear(),
  calM: new Date().getMonth(),
};

const SERVICES = [
  { name: "Standard Cleaning", cat: "Cleaning", price: "From $89" },
  { name: "Deep Cleaning", cat: "Cleaning", price: "From $149" },
  { name: "Carpet Cleaning", cat: "Cleaning", price: "From $99" },
  { name: "Window Cleaning", cat: "Cleaning", price: "From $65" },
  { name: "Minor Repairs", cat: "Renovation", price: "From $75" },
  { name: "Plumbing Repair", cat: "Renovation", price: "From $95" },
  { name: "Electrical Repair", cat: "Renovation", price: "From $110" },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DOWS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

/* ── NAV ── */
export function nav(v) {
  document
    .querySelectorAll(".view")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById("view-" + v).classList.add("active");
  window.scrollTo(0, 0);
  updateNav();
}
export function scrollTo2(id) {
  nav("home");
  setTimeout(
    () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
    120,
  );
}
export function requireLogin() {
  if (S.user) {
    nav("scheduler");
  } else {
    nav("auth");
  }
}
export function updateNav() {
  const el = document.getElementById("nav-actions");
  if (!el) return;

  if (S.user) {
    el.innerHTML = `
      <div class="nav-avatar">${S.user.initials}</div>
      <button class="btn btn-ghost btn-sm" onClick="nav('scheduler')">Book</button>
      <button class="btn btn-outline btn-sm" onClick="logout()">Log Out</button>`;
  } else {
    el.innerHTML = `
      <button class="btn btn-outline btn-sm" onClick="nav('auth')">Log In</button>
      <button class="btn btn-primary btn-sm" onClick="nav('auth');switchTab('signup')">Sign Up</button>`;
  }
}

/* ── AUTH ── */
export function switchTab(tab) {
  const login = tab === "login";
  document.getElementById("form-login").style.display = login ? "" : "none";
  document.getElementById("form-signup").style.display = login ? "none" : "";
  document.getElementById("tab-login").classList.toggle("active", login);
  document.getElementById("tab-signup").classList.toggle("active", !login);
}
export function doLogin() {
  const email = document.getElementById("li-email").value.trim();
  const pass = document.getElementById("li-pass").value;
  const err = document.getElementById("li-err");
  if (!email || !pass) {
    err.style.display = "flex";
    return;
  }
  err.style.display = "none";
  const name = email
    .split("@")[0]
    .replace(/[^a-zA-Z]/g, " ")
    .trim();
  S.user = {
    name: name || "User",
    initials: name.slice(0, 2).toUpperCase() || "U",
  };
  afterLogin();
}
export function doSignup() {
  const name = document.getElementById("su-name").value.trim();
  const last = document.getElementById("su-last").value.trim();
  const email = document.getElementById("su-email").value.trim();
  const pass = document.getElementById("su-pass").value;
  const err = document.getElementById("su-err");
  const msg = document.getElementById("su-err-msg");
  if (!name || !last || !email || !pass) {
    msg.textContent = "Please fill in all required fields.";
    err.style.display = "flex";
    return;
  }
  if (pass.length < 8) {
    msg.textContent = "Password must be at least 8 characters.";
    err.style.display = "flex";
    return;
  }
  err.style.display = "none";
  S.user = {
    name: name + " " + last,
    initials: (name[0] + last[0]).toUpperCase(),
  };
  afterLogin();
}
export function demoLogin() {
  S.user = { name: "Demo User", initials: "DU" };
  afterLogin();
}
export function afterLogin() {
  updateNav();
  buildScheduler();
  nav("scheduler");
}
export function logout() {
  S.user = null;
  S.booking = { date: null, time: null, service: null };
  updateNav();
  nav("home");
}

/* ── HERO CARDS ── */
export function heroSelect(el) {
  document
    .querySelectorAll(".svc-item")
    .forEach((i) => i.classList.remove("sel"));
  el.classList.add("sel");
}

/* ── CALENDAR ── */
export function buildCalendar() {
  const lbl = document.getElementById("cal-month-label");
  const grid = document.getElementById("cal-grid");
  if (!lbl || !grid) return;
  const y = S.calY,
    m = S.calM;
  lbl.textContent = `${MONTHS[m]} ${y}`;
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  const firstDay = new Date(y, m, 1).getDay();
  const totalD = new Date(y, m + 1, 0).getDate();
  let html = DOWS.map((d) => `<div class="cal-dow">${d}</div>`).join("");
  for (let i = 0; i < firstDay; i++)
    html += '<div class="cal-day empty"></div>';
  for (let d = 1; d <= totalD; d++) {
    const date = new Date(y, m, d);
    const past =
      date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isToday =
      d === today.getDate() &&
      m === today.getMonth() &&
      y === today.getFullYear();
    const sel =
      S.booking.date &&
      S.booking.date.getFullYear() === y &&
      S.booking.date.getMonth() === m &&
      S.booking.date.getDate() === d;
    let cls = "cal-day";
    if (past) cls += " past";
    if (isToday) cls += " today";
    if (sel) cls += " selected";
    html += `<div class="${cls}" onClick="selectDay(${y},${m},${d})">${d}</div>`;
  }
  grid.innerHTML = html;
}
export function calPrev() {
  S.calM--;
  if (S.calM < 0) {
    S.calM = 11;
    S.calY--;
  }
  buildCalendar();
}

function getDateKey(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export function calNext() {
  S.calM++;
  if (S.calM > 11) {
    S.calM = 0;
    S.calY++;
  }
  buildCalendar();
}
export function selectDay(y, m, d) {
  S.booking.date = new Date(y, m, d);
  S.booking.time = null;
  buildCalendar();
  buildTimeGrid();
  updateSummary();
  markStep(3);
}

/* ── TIMES ── */
export function genTimes() {
  const t = [];
  for (let h = 9; h <= 18; h++) {
    const p = h >= 12 ? "PM" : "AM",
      dh = h > 12 ? h - 12 : h;
    t.push(`${dh}:00 ${p}`);
    if (h < 18) t.push(`${dh}:30 ${p}`);
  }
  return t;
}

async function fetchBookedTimes(dateKey) {
  const res = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
			query($date : String!) {
			bookedTimes(date:$date)
			}
			`,
      variables: { date: dateKey },
    }),
  });
  const data = await res.json();
  return data.data.bookedTimes;
}

export async function buildTimeGrid() {
  const g = document.getElementById("time-grid");
  if (!g || !S.booking.date) return;

  const dateKey = getDateKey(S.booking.date);
  const bookedTimes = await fetchBookedTimes(dateKey);

  g.innerHTML = genTimes()
    .map((t) => {
      const booked = bookedTimes.includes(t);
      const sel = S.booking.time === t;

      let cls = "time-slot";
      if (booked) cls += " booked";
      if (sel) cls += " selected";

      return `
	  <div class="${cls}"
	   ${booked ? "" : `onClick="selectTime('${t}')`}">
	   ${t}
	   ${booked ? "<br><small>Taken</small>" : ""}
	   </div>`;
    })
    .join("");
}
export function selectTime(t) {
  S.booking.time = t;
  buildTimeGrid();
  updateSummary();
  markStep(4);
}

/* ── PILLS ── */
export function buildPills() {
  const c = document.getElementById("pill-list");
  if (!c) return;
  c.innerHTML = SERVICES.map((s) => {
    const sel = S.booking.service === s.name;
    return `<div class="pill${sel ? " selected" : ""}" onClick="selectService('${s.name}')">
      <div><div class="pill-name">${s.name}</div><div class="pill-sub">${s.cat} · ${s.price}</div></div>
      <div class="pill-check">${sel ? `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>` : ""}</div>
    </div>`;
  }).join("");
}
export function selectService(name) {
  S.booking.service = name;
  buildPills();
  updateSummary();
  markStep(5);
}

/* ── SUMMARY ── */
export function updateSummary() {
  const { date, time, service } = S.booking;
  document.getElementById("sum-date").textContent = date
    ? date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Not selected";
  document.getElementById("sum-time").textContent = time || "Not selected";
  document.getElementById("sum-service").textContent =
    service || "Not selected";
  const ready = date && time && service;
  document.getElementById("sum-placeholder").style.display = ready
    ? "none"
    : "";
  document.getElementById("sum-ready").style.display = ready ? "" : "none";
}

/* ── STEPS ── */
export function markStep(upto) {
  for (let i = 2; i <= 5; i++) {
    const el = document.getElementById("step" + i);
    if (!el) continue;
    el.classList.remove("done", "active");
    if (i < upto) el.classList.add("done");
    else if (i === upto) el.classList.add("active");
  }
}

/* ── SCHEDULER BUILD ── */
export function buildScheduler() {
  S.booking = { date: null, time: null, service: null };
  S.calY = new Date().getFullYear();
  S.calM = new Date().getMonth();
  buildCalendar();
  buildTimeGrid();
  buildPills();
  updateSummary();
}

/* ── CONFIRM ── */
export function confirmBooking() {
  const { date, time, service } = S.booking;
  const err = document.getElementById("sched-err");
  if (!date || !time || !service) {
    err.style.display = "flex";
    return;
  }

  const dateKey = getDateKey(date);

  //Initialize if not exists
  if (!BOOKED[dateKey]) {
    BOOKED[dateKey] = [];
  }

  //Prevents double booking
  if (BOOKED[dateKey].includes(time)) {
    err.style.display = "flex";
    err.textContent = "This time is already booked.";
    return;
  }

  // Save Booking;
  async function saveBooking() {
    const { date, time, service } = S.booking;

    const res = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        query: `
			mutation($userId: ID!, $date: String!, $time: String!, $service: String!) {
			createAppointment(userId: $userId, date: $date, time: $time, service: $service) {
			id
			}}`,
        variables: {
          userID: S.user.id,
          date: getDateKey(date),
          time,
          service,
        },
      }),
    });
	return await res.json();
  }

  err.style.display = "none";

  const code = "SM-" + Math.random().toString(36).slice(2, 8).toUpperCase();

  document.getElementById("conf-name").textContent = S.user?.name || "Guest";
  document.getElementById("conf-service").textContent = service;
  document.getElementById("conf-date").textContent = date.toLocaleDateString(
    "en-US",
    { weekday: "long", month: "long", day: "numeric", year: "numeric" },
  );
  document.getElementById("conf-time").textContent = time;
  document.getElementById("conf-code").textContent = code;
  nav("confirm");
  showNotif(
    "Appointment Confirmed!",
    `${service} · ${time} · ${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`,
  );
}
export function newBooking() {
  buildScheduler();
  nav("scheduler");
}

/* ── NOTIF ── */
export function showNotif(title, body) {
  const el = document.getElementById("notif");
  document.getElementById("notif-title").textContent = title;
  document.getElementById("notif-body").textContent = body;
  el.classList.remove("hidden");
  setTimeout(() => el.classList.add("hidden"), 5500);
}

window.nav = nav;
window.switchTab = switchTab;
window.logout = logout;
window.selectDay = selectDay;
window.selectTime = selectTime;
window.selectService = selectService;
