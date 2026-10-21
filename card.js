const sections = ['contact', 'company', 'socials'];
const nav = document.querySelector('nav');
nav.setAttribute('role', 'tablist');
function selectTab(index, focus = false) {
    sections.forEach((id, i) => {
        const selected = i === index;
        const button = document.getElementById(`btn-${id}`);
        const panel = document.getElementById(id);
        button.setAttribute('aria-selected', String(selected));
        button.tabIndex = selected ? 0 : -1;
        button.classList.toggle('text-blue-400', selected);
        button.classList.toggle('border-blue-400', selected);
        button.classList.toggle('text-slate-400', !selected);
        button.classList.toggle('border-transparent', !selected);
        panel.hidden = !selected;
        panel.classList.toggle('active', selected);
        if (selected && focus) button.focus();
    });
}
sections.forEach((id, index) => {
    const button = document.getElementById(`btn-${id}`);
    const panel = document.getElementById(id);
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', button.id);
    panel.tabIndex = 0;
    button.addEventListener('click', () => selectTab(index));
    button.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % sections.length;
        if (event.key === 'ArrowLeft') next = (index + sections.length - 1) % sections.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = sections.length - 1;
        if (next !== undefined) { event.preventDefault(); selectTab(next, true); }
    });
});
selectTab(0);
