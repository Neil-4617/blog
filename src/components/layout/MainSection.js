import Box from '@mui/material/Box'
import {useTheme} from '@mui/material/styles'
import {useMediaQuery} from '@mui/material'

// component
import MainSectionDesktop from '../desktop/MainSectionDesktop'
import MainSectionMobile from '../mobile/MainSectionMobile'

const MainSection = () => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	const dummyContentData = [
		{
			id: 1213123,
			author: 'Wateppei Ong',
			title: "My Name",
			post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			date:'June 12 2011'
		},
		{
			id: 1213124,
			author: 'Wateppei Ong',
			title: 'My Journey',
			post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			date:'June 12 2011'
		},
		{
			id: 1213125,
			author: 'Wateppei Ong',
			title: 'Folder Structure In Web Development',
			post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			date:'June 12 2011'
		}
		
	]

	console.log(dummyContentData)
	return (
		<Box
			sx={{
				minHeight:'80vh'
			}}>
			{
				matches
				?<MainSectionMobile dummyContentData={dummyContentData}/>
				:<MainSectionDesktop dummyContentData={dummyContentData}/>
			}
		</Box>
	)
}
export default MainSection