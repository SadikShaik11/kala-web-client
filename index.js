
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import dotenv from 'dotenv';
import routes from './app.routes'
import { Provider } from 'react-redux';
import appStore from './appStore';
dotenv.config();

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <div>
        {/* <Provider store={appStore}> */}

        <RouterProvider router={routes} />
        {/* </Provider> */}
    </div>)