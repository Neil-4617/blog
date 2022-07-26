import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Footer = () => {
	return (
		<Box
			sx={{
				minHeight: '10vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'primary.main'
			}}>
			<Typography>Copyright &copy; 2022</Typography>
		</Box>
	)
}

export default Footer