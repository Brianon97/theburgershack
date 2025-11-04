// assets/js/form.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('successMessage');
    const listDiv = document.getElementById('submissionsList');

    // Load & show existing submissions
    loadSubmissions();

    form.addEventListener('submit', async e => {
        e.preventDefault();

        // ---- validation ----
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

        const data = {
            firstName: document.getElementById('firstName').value.trim(),
            lastName : document.getElementById('lastName').value.trim(),
            action   : document.getElementById('action').value,
            message  : document.getElementById('message').value.trim(),
            date     : document.getElementById('date').value
        };

        let ok = true;
        if (!data.firstName) { mark('firstName','Required'); ok = false; }
        if (!data.lastName)  { mark('lastName','Required');  ok = false; }
        if (!data.action)    { mark('action','Required');    ok = false; }
        if (!data.message)   { mark('message','Required');   ok = false; }
        if (!data.date)      { mark('date','Required');      ok = false; }

        if (!ok) return;

        // ---- send to server ----
        try {
            const resp = await fetch('/submit', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            const json = await resp.json();

            if (json.success) {
                success.style.display = 'block';
                form.reset();
                setTimeout(() => success.style.display = 'none', 5000);
                loadSubmissions();          // refresh list
            } else {
                alert('Server error: ' + (json.error || 'unknown'));
            }
        } catch (err) {
            console.error(err);
            alert('Network error – check console');
        }
    });

    // ---- helper functions ----
    function mark(id, msg) {
        const el = document.getElementById(id);
        el.classList.add('is-invalid');
        let fb = el.parentElement.querySelector('.invalid-feedback');
        if (!fb) {
            fb = document.createElement('div');
            fb.className = 'invalid-feedback';
            el.parentElement.appendChild(fb);
        }
        fb.textContent = msg;
    }

    async function loadSubmissions() {
        try {
            const resp = await fetch('/submissions');
            const arr = await resp.json();
            if (arr.length === 0) {
                listDiv.innerHTML = '<p class="text-muted">No messages yet.</p>';
                return;
            }

            const recent = arr.slice(-5).reverse();   // last 5
            listDiv.innerHTML = `
                <h5 class="mt-4 mb-3">Recent Messages</h5>
                <div class="list-group">
                    ${recent.map(s => `
                        <div class="list-group-item">
                            <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-1"><strong>${s.firstName} ${s.lastName}</strong> – ${s.action}</h6>
                                <small>${s.timestamp}</small>
                            </div>
                            <p class="mb-1">${s.message}</p>
                            <small class="text-muted">Date: ${s.date}</small>
                        </div>
                    `).join('')}
                </div>
                ${arr.length > 5 ? `<p class="text-center mt-2"><small>And ${arr.length-5} more…</small></p>` : ''}
            `;
        } catch (e) { listDiv.innerHTML = '<p class="text-danger">Failed to load.</p>'; }
    }
});
