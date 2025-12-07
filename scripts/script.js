// ===== THEME TOGGLE =====
const THEME_KEY = 'berson-theme';

// Get saved theme or default to dark
function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || 'dark';
}

// Apply theme to document
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateToggleButton(theme);
}

// Update toggle button icon
function updateToggleButton(theme) {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        const icon = toggleBtn.querySelector('i');
        const text = toggleBtn.querySelector('span');
        if (theme === 'light') {
            icon.className = 'fas fa-moon';
            if (text) text.textContent = 'Escuro';
        } else {
            icon.className = 'fas fa-sun';
            if (text) text.textContent = 'Claro';
        }
    }
}

// Toggle between themes
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Initialize theme on page load
function initTheme() {
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);
}

// Run on DOM load
document.addEventListener('DOMContentLoaded', initTheme);

// Also run immediately in case DOM is already loaded
if (document.readyState !== 'loading') {
    initTheme();
}