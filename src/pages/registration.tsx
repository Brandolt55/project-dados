import styled from 'styled-components';

const ResgistrationArea = styled.div`
background: #666;
`;

const ResgistrationImage = styled.div`
background-image: url('/tower.svg');
background-size: cover;
height: 100vh;
width: 50%;
`;

const Resgistration = () => {
return (
<>
<ResgistrationArea>
<ResgistrationImage />
{/* Conteúdo do Resgistration */}
</ResgistrationArea>
</>
);
};

export default Resgistration;