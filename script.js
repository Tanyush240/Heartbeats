const HEART_RATE = 72;
let dob;

function startGame() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("input-screen").classList.remove("hidden");
}

function calculate() {
  const d = document.getElementById("day").value;
  const m = document.getElementById("month").value - 1;
  const y = document.getElementById("year").value;

  dob = new Date(y, m, d);

  if (dob >= new Date() || isNaN(dob)) {
    alert("Please enter a valid date");
    return;
  }

  document.getElementById("input-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  requestAnimationFrame(update);
}

function update() {
  const now = new Date();
  const secondsLived = (now - dob) / 1000;

  const beats = secondsLived * (HEART_RATE / 60);
  document.getElementById("heartbeat-count").innerText =
    Math.floor(beats).toLocaleString();

  const years = Math.floor(secondsLived / (60 * 60 * 24 * 365.25));
  const days = Math.floor(
    (secondsLived % (60 * 60 * 24 * 365.25)) / (60 * 60 * 24)
  );

  document.getElementById("age-display").innerText =
    `Age: ${years} years, ${days} days`;

  requestAnimationFrame(update);
}
