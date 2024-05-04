import Error from '../pages/Error'
import Home from '../pages/Home'

export const Routes = [
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />,
	},
]
