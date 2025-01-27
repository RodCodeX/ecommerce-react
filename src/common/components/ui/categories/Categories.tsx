import { Box, Button, Card, CardActions, CardContent, CardMedia, Skeleton, Stack, Typography } from '@mui/material';

interface CategoryType {
    slug: string;
    name: string;
}

interface CategoryProps {
    category: CategoryType[];
    onClickItem: (slug: string) => void;
    loading: boolean;
}

const CategoryCard = ({ name, slug, onClickItem }: CategoryType & { onClickItem: (slug: string) => void }) => {
    return (
        <Card
            variant="outlined"
            sx={{
                width: 240,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'start',
            }}
        >
            <Box>
                <CardContent>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            '&:hover': {
                                cursor: 'pointer',
                                color: 'primary.main',
                            },
                        }}
                    >
                        {name}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                alt={name}
                sx={{
                    backgroundColor: '#f7f7f7',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                    width: '100%',
                    height: 'auto',
                }}
                onClick={() => onClickItem(slug)}
                image={`/categories/${slug}.jpeg`}
            />
            <CardActions>
                <Button size="small" sx={{ textTransform: 'capitalize' }} onClick={() => onClickItem(slug)}>
                    Ver más
                </Button>
            </CardActions>
        </Card>
    );
};

const Categories = ({ category, onClickItem, loading }: CategoryProps) => {
    return (
        <Stack
            direction="row"
            gap={2}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            marginTop={2}
            marginBottom={2}
        >
            {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        variant="rectangular"
                        width={240}
                        height={320}
                        animation="wave"
                        sx={{
                            borderRadius: 1,
                        }}
                    />
                ))
                : category.map((cat) => (
                    <CategoryCard
                        key={cat.slug}
                        name={cat.name}
                        slug={cat.slug}
                        onClickItem={onClickItem}
                    />
                ))}
        </Stack>
    );
};

export default Categories;
