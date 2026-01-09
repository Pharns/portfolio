/**
 * Accessibility Enhancements
 * Adds ARIA labels and roles for WCAG 2.1 AA compliance
 */

document.addEventListener('DOMContentLoaded', function() {
  // Add aria-label to search dialog
  const searchDialog = document.querySelector('.md-search__form');
  if (searchDialog) {
    searchDialog.setAttribute('role', 'search');
    searchDialog.setAttribute('aria-label', 'Search this portfolio');
  }

  // Add aria-label to search input
  const searchInput = document.querySelector('.md-search__input');
  if (searchInput) {
    searchInput.setAttribute('aria-label', 'Search portfolio content');
    if (!searchInput.id) {
      searchInput.id = 'portfolio-search';
    }
  }

  // Add aria-label to search dialog container
  const searchOuter = document.querySelector('.md-search');
  if (searchOuter) {
    searchOuter.setAttribute('role', 'search');
  }

  // Add accessible names to icon-only buttons
  const themeToggle = document.querySelector('[data-md-component="palette"] button');
  if (themeToggle && !themeToggle.getAttribute('aria-label')) {
    themeToggle.setAttribute('aria-label', 'Toggle color theme');
  }

  // Add accessible name to search toggle button
  const searchToggle = document.querySelector('[data-md-toggle="search"]');
  if (searchToggle && !searchToggle.getAttribute('aria-label')) {
    searchToggle.setAttribute('aria-label', 'Open search');
  }

  // Add accessible names to navigation toggle (mobile)
  const navToggle = document.querySelector('[data-md-toggle="drawer"]');
  if (navToggle && !navToggle.getAttribute('aria-label')) {
    navToggle.setAttribute('aria-label', 'Open navigation menu');
  }

  // Add accessible names to header repository link
  const repoLink = document.querySelector('.md-header__source');
  if (repoLink && !repoLink.getAttribute('aria-label')) {
    repoLink.setAttribute('aria-label', 'View source repository on GitHub');
  }

  // Enhance tab navigation visibility
  const tabs = document.querySelectorAll('.md-tabs__link');
  tabs.forEach(function(tab) {
    if (!tab.getAttribute('role')) {
      tab.setAttribute('role', 'tab');
    }
  });

  // Add landmark roles to major sections
  const main = document.querySelector('.md-main');
  if (main && !main.getAttribute('role')) {
    main.setAttribute('role', 'main');
  }

  const footer = document.querySelector('.md-footer');
  if (footer && !footer.getAttribute('role')) {
    footer.setAttribute('role', 'contentinfo');
  }

  // Add aria-current to active nav items
  const activeNavLinks = document.querySelectorAll('.md-nav__link--active');
  activeNavLinks.forEach(function(link) {
    link.setAttribute('aria-current', 'page');
  });
});
