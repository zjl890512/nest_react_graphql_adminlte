import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import Hello from './component/Hello/Hello';
import getRouter from 'router/router';

require('jquery');
require('bootstrap');
// require('admin-lte');
// require('font-awesome-webpack');
// require('bootstrap/scss/bootstrap');
// import('admin-lte/plugins/font-awesome/css/font-awesome.min.css');
// import('admin-lte/dist/css/adminlte.min.css');

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}