import { Box, Skeleton } from '@mui/material'

interface SkeletonProductProps {
    index: number,
}

const SkeletonProduct = ({ index }: SkeletonProductProps) => {
    return (
        <Box key={index}
            sx={{
                width: 240,
                marginBottom: 2
            }}>
            <Skeleton
                variant="rectangular"
                width={240}
                height={300}
            />
            <Box sx={{ pt: 1 }}>
                <Skeleton width="80%" />
                <Skeleton width="60%" />
            </Box>
        </Box>
    )
}
export default SkeletonProduct
