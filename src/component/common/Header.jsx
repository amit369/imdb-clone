
import {AppBar, Toolbar , styled, Box, Typography, InputBase} from '@mui/material';
import { logoURL} from '../../constants/constant.js';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import {useState} from 'react';
const StyledToolbar = styled(Toolbar)`
background : #121212;
min-height : 55px !important;
padding : 0 115px !important;
justify-content : space-between;
& > * { 
    padding : 0 16;
}
& > div {
    display : flex;
    align-items : center;
    cursor : pointer;
    & > p {
        font-size : 14px;
        font-weight : 600;
    }
}
& > p {
   font-size: 14px;
   font-weight : 600;
}
`;

const Logo = styled('img')({
    width : 64
});
const InputSearchField = styled(InputBase)`
    background : #FFFFFF;
    height : 30px;
    width : 55%;
    border-radius : 5px;
`;

const Header = () => {

    const [open, setOpen] = useState(null);
    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    const handleClose = () => {
        setOpen(null);
    }
     return(<AppBar>
                 <StyledToolbar>
                        <Logo src={logoURL} alt="logo" />
                        <Box onClick={handleClick}>
                            <Menu />
                            <Typography>Menu </Typography>
                            </Box>
                            <HeaderMenu open={open} handleClose={handleClose} />
                            <InputSearchField/>
                            <Typography>IMDb <Box component="span">Pro </Box></Typography>
                            <Box>
                                      <BookmarkAdd/>
                                      <Typography>Watchlist </Typography>
                                </Box>
                                <Box>
                                <Typography>
                                    EN </Typography>
                                    <ExpandMore/>
                             </Box>
                    </StyledToolbar>
        </AppBar>
        )
}

export default Header;