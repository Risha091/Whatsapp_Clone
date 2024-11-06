import { Box, Dialog, List, ListItem, Typography, styled} from "@mui/material";
import { qrCodeImage } from "../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode';


const Component = styled(Box)`
   display: flex;
`
const Container = styled(Box)`
padding : 56px 0 56px 56px
`

const QRCode = styled('img')(
    {
        height: 264,
        width: 264,
        margin: '50px 0 0 50px'
    }
)

const Title = styled(Typography)`
font-size : 20px;
color: #525252;
font-weight: 300;
font-family: inherit;
margin-bottom: 25px;
`
const dialogStyle = {
    height : '90%',
    marginTop : '12%',
    width : '60%',
    maxWidth : '100%',
    maxHeight : '100%',
    boxShadow : 'none',
    overflow : 'none'
}

const StyledList = styled(List)`
    & > li{
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
    }
`
const LoginDialog = () => {

    const onLoginSuccess =(res) =>{
          //const { default: jwt_decode } = require("jwt-decode");
          const decoded = jwt_decode(res.credential);
          console.log(decoded);
    }

    const onLoginError = (res) => {
          console.log('Login Failed', res);
    }
    return(
        <Dialog 
        open={true}
        PaperProps={{sx : dialogStyle}}
        hideBackdrop={true}>
            <Component>
                <Container>
                <Title>To use Whatsapp on your Computer</Title>
                <StyledList>
                    <ListItem>1. Open Whatsapp on Your Computer</ListItem>
                    <ListItem>2. Tap Menu Settings and Select Whatsapp Web</ListItem>
                    <ListItem>3. Point Your Phone To this screen to capture the code</ListItem>
                </StyledList>
                </Container>
                <Box>
                    <QRCode src={qrCodeImage} alt="qr code"/>
                </Box>

                <Box style ={{position: 'absolute', top: '50%', transform: 'translatex(25%)'}}>
                    <GoogleLogin
                    onSuccess={onLoginSuccess}
                    onError={onLoginError}
                    />
                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialog;