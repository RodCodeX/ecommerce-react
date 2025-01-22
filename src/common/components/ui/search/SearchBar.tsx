import SearchIcon from '@mui/icons-material/Search';
import { Button, InputBase, Paper } from '@mui/material';
import { useState } from 'react';

interface SearchBarProps {
    onSearch: (value: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchValue, setSearchValue] = useState<string>('');

    return (
        <Paper
            component={'form'}
            sx={{
                width: '80%',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 4,
            }}
        >
            <Button
                variant='contained'
                sx={{
                    height: '100%',
                    borderRadius: 0,
                    borderTopLeftRadius: 4,
                    borderBottomLeftRadius: 4,
                    boxShadow: 'none',
                    bgcolor: 'grey.500'
                }}
            >
                All
            </Button>
            <InputBase
                sx={{ p: 1 }}
                fullWidth
                placeholder='Search Amazon'
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
                type='submit'
                variant='contained'
                onClick={(e) => {
                    e.preventDefault()
                    onSearch(searchValue)
                }}
                sx={{
                    height: '100%',
                    borderRadius: 0,
                    borderTopRightRadius: 4,
                    borderBottomRightRadius: 4,
                    boxShadow: 'none',
                    bgcolor: 'primary.light'
                }}
            >
                <SearchIcon />
            </Button>
        </Paper >
    )
}

export default SearchBar
