
import { AppBar, Box, Toolbar } from '@mui/material';
import Image from 'next/image';
import logoAmazon from '../../../assets/amazon-logo.png';
const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Image
                        src={logoAmazon}
                        alt={'logo amazon'}
                        width={100}
                        style={{ marginTop: '16px' }}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header
