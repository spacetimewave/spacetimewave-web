import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export default function Error() {
	const error = useRouteError() as Error

	return (
		<>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{isRouteErrorResponse(error) && error.statusText}</i>
			</p>
		</>
	)
}
