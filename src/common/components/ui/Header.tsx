import { useCartContext } from '@/modules/cart/context/CartProvider';
import { useProductsContext } from '@/modules/products/context/ProductsProvider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logoAmazon from '../../../assets/amazon-logo.png';
import CardIcon from './icons/Carticon';
import SearchBar from './search/SearchBar';

const Header = () => {
    const { updateSearchValue } = useProductsContext();
    const { totalItems } = useCartContext();

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
                                border: '1px solid transparent',
                                borderRadius: '2px',
                                padding: '0px 4px',
                                '&:hover': {
                                    border: '1px solid white',
                                    cursor: 'pointer'
                                },
                            }}
                            onClick={() => {
                                if (router.pathname !== '/') {
                                    router.push('/');
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

                        <Box>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                position={'relative'}
                                paddingLeft={'13px'}
                            >
                                <LocationOnIcon />
                                <Box
                                    display={'flex'}
                                    flexDirection={'column'}
                                >
                                    <Typography
                                        variant='body2'
                                    >
                                        Deliver to
                                    </Typography>
                                    <Typography
                                        variant='subtitle2'
                                        fontWeight={'bold2'}
                                    >
                                        Bolivia
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                        <SearchBar
                            onSearch={(value) => {
                                if (router.pathname !== '/productos') {
                                    router.push('/productos')
                                }
                                updateSearchValue(value)
                            }}
                        />
                        <Box
                            onClick={() => {
                                if (router.pathname !== '/') {
                                    router.push('/cart');
                                }
                            }}
                        >
                            <CardIcon quantity={totalItems} />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Header
