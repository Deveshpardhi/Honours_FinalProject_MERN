import { Outlet, useRoutes } from 'react-router-dom';
import Home from './Home';
import Users from './users/Users';
import Products from './products/Products';
import AddUser from './users/AddUser';
import AddProduct from './products/AddProduct';
import RequireAuth from './auth/RequireAuth';
import Login from './Login';
import Orders from './Orders/Orders';
import AdminAuth from './auth/AdminAuth';
import MyOrders from './shopping/MyOrders';
import EditUser from './users/EditUser';

export default function Routes() {
    return useRoutes([
        { path: '/login', element: <Login /> },
        {
            element: <RequireAuth />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/myorders', element: <MyOrders /> },
                {
                    path: '/users',
                    element: <AdminAuth><Users /><Outlet /></AdminAuth>,
                    children: [
                        { path: 'add', element: <AddUser /> },
                        { path: ':userId/edit', element: <EditUser /> }
                    ]
                },
                {
                    path: '/products',
                    element: <AdminAuth><Products /><Outlet /></AdminAuth>,
                    children: [
                        { path: 'add', element: <AddProduct /> }
                    ]
                },
                {
                    path: '/orders',
                    element: <AdminAuth><Orders /><Outlet /></AdminAuth>
                    // Possible nested routes for orders can be defined here
                }
            ]
        }
    ]);
}
