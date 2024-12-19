import { showLoader, hideLoader } from './modules/loader.js';

const app = document.getElementById('app');

async function loadPage(page) {
    showLoader();
    app.innerHTML = '';
    if (page === 'list') {
        const { renderListPage } = await import('./modules/listPage.js');
        renderListPage(app, switchPage);
    } else if (page === 'add') {
        const { renderAddPage } = await import('./modules/addPage.js');
        renderAddPage(app, switchPage);
    }
    hideLoader();
}

function switchPage(page) {
    loadPage(page);
}

// Начальная страница
loadPage('list');