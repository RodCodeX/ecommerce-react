import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

interface CartIconProps {
    quantity: number
}

export default function CardIcon({ quantity }: CartIconProps) {
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={quantity} color="secondary">
                <ShoppingCartIcon sx={{ color: 'white' }} />
            </StyledBadge>
        </IconButton>
    );
}