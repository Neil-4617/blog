import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {useTheme} from '@mui/material/styles'
import {useMediaQuery} from '@mui/material'

// component
import NavMobile from './mobile/NavMobile'
import NavDesktop from './desktop/NavDesktop'


const Navbar = () => {
	const pages = [ 'Home', 'About', 'Contact' ]

	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Box>
			<AppBar component='nav' >
				<Container maxWidth ='xl'>
					<Toolbar disableGutters>
						<Box>
						<Typography>Logo</Typography>
						</Box>
						{
							matches 
							?<NavMobile pages={pages}/>	
							:<NavDesktop pages={pages}/>	
						}
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	)
}

export default Navbar