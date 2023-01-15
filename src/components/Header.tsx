import RocketIcon from '@mui/icons-material/Rocket';
import { Outlet } from "react-router-dom"
import { Container, Typography } from '@mui/material';

const Header = () => {
  return (
    <>
      <header>
        <Container sx={{display: 'flex',
          alignItems: 'center'}}>
        <RocketIcon sx={{ color:'white',fontSize: 40 }} />
        <Typography sx={{fontWeight:'bold', fontSize: 30 , pl: 3, color:'white'}}>SPACE API</Typography>
        </Container>
      </header>
      <Outlet/>
    </>
  )
}

export default Header