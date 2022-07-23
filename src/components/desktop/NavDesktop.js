import Box from '@mui/material/Box'
import Button from '@mui/material/Button'


const NavDesktop = ({pages}) => {
	return (
      <Box sx={{ 
      		flexGrow: 1, 
      		display: { xs: 'none', md: 'flex' }, 
      		gap:1, 
      		justifyContent:'flex-end' }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={(e) => console.log(e.target)}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
	)
}

export default NavDesktop