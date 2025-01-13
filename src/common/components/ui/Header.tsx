
import { AppBar, Box, Toolbar } from '@mui/material';
import Image from 'next/image';
import logoAmazon from '../../../assets/amazon-logo.png';
import SearchBar from './search/SearchBar';
import { useProductsContext } from '@/modules/products/context/ProductsProvider';
const Header = () => {
    const { updateSearchValue } = useProductsContext();
    return (
        <Box sx={{ flexGrow: 1, position: 'sticky', top: 0, zIndex: 2 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box
                        display={'flex'}
                        width={'100%'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Image
                            src={logoAmazon}
                            alt={'logo amazon'}
                            width={100}
                            style={{ marginTop: '16px' }}
                        />
                        <SearchBar
                            onSearch={(value) => {
                                updateSearchValue(value)
                            }}
                        />
                        <Box>Cart</Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Header
