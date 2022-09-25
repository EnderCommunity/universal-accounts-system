/**
 * 
 * Manage the content of the 404 error page
 * 
 **/

import { Title } from './../../assets/components/Title.jsx';

export default function Login(props){
    props.report();
    return <>
        <Title>Not Found</Title>
        Page Not Found!
    </>;
}