

import React from 'react';
import {Scene,Router,Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
const RouterComponent=()=>
{
return (
<Router sceneStyle={{paddingTop:65}}>

<Scene key="auth">
    <Scene key="login" component={LoginForm} title="Please Login"/>
</Scene>    

<Scene key="main">
    <Scene
    onRight={()=>Actions.employeeCreate()}
    rightTitle="Add"
    key="employeelist"
    component={EmployeeList}
    title="Manage Employees"
    initial
       />
    
    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee"/>
    <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee"/>

</Scene>
</Router>
);
};

export default RouterComponent;

