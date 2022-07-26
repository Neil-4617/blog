import Box from	'@mui/material/Box'
import Button from	'@mui/material/Button'
import Typography from	'@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const MainSectionDesktop = ({dummyContentData}) => {
	return (
		<Box
			sx={{
				paddingTop:'2rem'
			}}>
			<Box textAlign='center'>
				<Button variant='contained'>Create Post</Button>
			</Box>
			<Typography textAlign='center' variant="h6">Blog</Typography>
			<Box
				sx={{
					display:'flex',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					padding: '2rem'
				}}>
				{
					dummyContentData.map((blogPost) =>(
						<Card 
							key={blogPost.id}
							sx={{
								maxWidth: '18rem',
								maxHeight: '16rem',
							}}>
							<CardContent>
								<Typography textAlign='center' variant='h5'>{blogPost.title}</Typography>
								<Typography textAlign='center' color="text.secondary" variant='subtitle1' >{blogPost.author}</Typography>
								<Typography textAlign='center' color="text.secondary" variant='subtitle2'>{blogPost.date}</Typography>
								<Typography noWrap >{blogPost.post}</Typography>
								<Button variant="contained" size='small'>Learn More</Button>
							</CardContent>
						</Card>
					))
				}
			</Box>
		</Box>
	)
}

export default MainSectionDesktop
