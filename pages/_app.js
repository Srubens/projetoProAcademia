import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Layout } from './Components/Layout'
import '/css/style.css'

const MyApp = ({Component, pageViews}) => {
	return(
		<Layout>
			<Component {...pageViews} />
		</Layout>
	)
}

export default MyApp