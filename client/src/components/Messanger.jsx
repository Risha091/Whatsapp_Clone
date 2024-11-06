
import {AppBar, Box, Toolbar, styled} from '@mui/material'

import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';
const Component = styled(Box)`
 height : 100vh;
 background: #DCDCDC;
 `
const Header = styled(AppBar)`
height : 125px;
background-color: #00bfa5;
box-shadow: none;
`

const Messanger = () => {

    return(
        <Component>
        <Header>
        <Toolbar>

        </Toolbar>
        </Header>
        <LoginDialog/>
        </Component>
    )
}
export default Messanger;