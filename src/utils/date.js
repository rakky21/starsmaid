export function getDateKey(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export function genTimes() {
  const t = [];
  for (let h = 9; h <= 18; h++) {
    const p = h >= 12 ? "PM" : "AM";
    const dh = h > 12 ? h - 12 : h;

    t.push(`${dh}:00 ${p}`);
    if (h < 18) t.push(`${dh}:30 ${p}`);
  }
  return t;
}