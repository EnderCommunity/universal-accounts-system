/**
 * 
 * Manage the content of the sign in page
 * 
 **/

import { Title } from './../../assets/components/Title.jsx';

export default function Login(props){
    props.report();
    return <>
        <Title>Sign In</Title>
        "/user/login"!
    </>;
}