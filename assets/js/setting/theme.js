function changeTheme(themeClass) {
    const elements = document.querySelectorAll('.themeable');
    elements.forEach(element => {
        element.classList.remove('default-theme', 'dark-theme', 'original-theme');
        element.classList.add(themeClass);
    })
}