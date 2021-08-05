import React from 'react'
import Link from 'next/link'

const Index = () => {
	return(
		<div className="main_index" >
			<div className="d-flex flex-column flex-md-row algin-items-center justify-content-around">
				<div className="col-12 col-md-6" >
					<img className="main_img" src="img1.png" alt="image" />
				</div>
				<div className="col-12 col-md-6" >
					<div className="box_two">
						<h3>
							Para melhor atendê-los criamos um sistema de cadastro.
							<br/>
							<br/>
							Onde você vai ficar por dentro das novidades. <br/>
						</h3>
						<br/>
						<br/>
						<Link href="/cadastro" >
							<a className="btn_yellow" >fazer meu cadastro</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Index