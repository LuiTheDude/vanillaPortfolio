import './style.css'

window.addEventListener('load', () => {
    window.addEventListener('load', () => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/portfolio/style.css'; // Adjust the path as needed
        document.head.appendChild(link);
    });
});