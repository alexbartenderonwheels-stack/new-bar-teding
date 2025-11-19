
// Basic client-side form handling.
// This site is ready for GitHub Pages. To enable the booking form to send to your email,
// sign up for a free form endpoint on Formspree (https://formspree.io) or Netlify Forms.
// After you create an endpoint, paste it into the variable `FORM_ENDPOINT` below.

const FORM_ENDPOINT = ""; // <-- PASTE your Formspree or other endpoint URL here

function submitForm(e){
  e.preventDefault();
  const form = document.getElementById('bookingForm');
  const statusEl = document.getElementById('formStatus');
  statusEl.textContent = "Sending...";
  const data = new FormData(form);

  if (FORM_ENDPOINT) {
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(r => {
      if (r.ok) {
        statusEl.textContent = "Request sent! We'll reply within 24 hours.";
        form.reset();
      } else {
        r.json().then(d => {
          statusEl.textContent = d?.error || "There was an error sending your request.";
        }).catch(()=> statusEl.textContent = "There was an error sending your request.");
      }
    }).catch(()=> statusEl.textContent = "Network error — try calling or emailing directly.");
  } else {
    // Fallback: open user's email client with booking details (mailto).
    const entries = Array.from(data.entries());
    const body = entries.map(([k,v]) => `${k}: ${v}`).join('\n');
    const mailto = `mailto:Alexbartenderonwheels@gmail.com?subject=Booking%20Request&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    statusEl.textContent = "Opening email client. Or call 586‑577‑4368.";
  }
}
