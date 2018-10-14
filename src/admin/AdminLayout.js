import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './admin/users';

const dataProvider = {};
const AdminLayout = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name='users' list={UserList}/>
    </Admin>
);

export default AdminLayout;