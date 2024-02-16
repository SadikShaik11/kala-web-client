
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import dotenv from 'dotenv';
import routes from './app.routes'
dotenv.config();

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<RouterProvider router={routes} />);