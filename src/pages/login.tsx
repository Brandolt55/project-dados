import styled from 'styled-components';

const LoginArea = styled.div`
background: #666;
`;

const LoginImage = styled.div`
background-image: url('/tower.svg');
background-size: cover;
height: 100vh;
width: 50%;
`;

const Login = () => {
return (
<>
<LoginArea>
<LoginImage />
{/* Conteúdo do login */}
</LoginArea>
</>
);
};

export default Login;