
import { AppBar, Box, Toolbar } from '@mui/material';
import Image from 'next/image';
import logoAmazon from '../../../assets/amazon-logo.png';
import SearchBar from './search/SearchBar';
import { useProductsContext } from '@/modules/products/context/ProductsProvider';
import { useRouter } from 'next/router'

const Header = () => {
    const { updateSearchValue } = useProductsContext();
    const router = useRouter();

    return (
        <Box sx={{ flexGrow: 1, position: 'sticky', top: 0, zIndex: 2 }}>
            <AppBar position="static" sx={{ bgcolor: '#131921' }}>
                <Toolbar>
                    <Box
                        display={'flex'}
                        width={'100%'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Box
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                                transition: 'transform 0.3s ease-in-out',
                            }}
                            onClick={() => {
                                if (router.pathname !== '/productos') {
                                    router.push('/productos');
                                }
                            }}
                        >
                            <Image
                                src={logoAmazon}
                                alt={'logo amazon'}
                                width={100}
                                style={{ marginTop: '16px' }}
                            />
                        </Box>
                        <SearchBar
                            onSearch={(value) => {
                                if (router.pathname !== '/productos') {
                                    router.push('/productos')
                                }
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
