import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'components/App/App';

if (MOCK) {
    require('mock/mock');
}

require('jquery');
require('bootstrap');
// require('admin-lte');
// require('font-awesome-webpack');
// require('bootstrap/scss/bootstrap');
// import('admin-lte/plugins/font-awesome/css/font-awesome.min.css');
// import('admin-lte/dist/css/adminlte.min.css');

/*初始化*/
renderWithHotReload(App);

/*热更新*/
if (module.hot) {
    module.hot.accept('components/App/App', () => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement/>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}