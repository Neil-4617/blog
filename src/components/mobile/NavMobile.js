import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'

import { useState } from 'react'







const NavMobile = ({pages}) => {

	const [anchorEl, setAnchorEl] = useState(null)
	const [open, setOpen] = useState(false)

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget)
		setOpen(true)
	}

	const handleClose = () => {
		setAnchorEl(null)
		setOpen(false)
	}


	return (
		<Box 
			sx={{ 
				flexGrow: 1, 
				display: { xs: 'flex', md: 'none' } }}>
			<IconButton 
				color="inherit"
				onClick={handleClick}
				sx={{marginLeft: 'auto'}}
				>
				<MenuIcon/>
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				>
			{pages.map((page) => (
				<MenuItem key={page}>
					<Typography  textAlign="center">{page}</Typography>
				</MenuItem>
          	))}
			</Menu>
		</Box>
	)
}

export default NavMobile