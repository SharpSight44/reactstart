import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="m-4">
				<div className="jumbotron m-5">
					<h1 className="display-4">Welcome!!!</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style
						component for calling extra attention to featured
						content or information.
					</p>
					<hr className="my-4" />
					<p>
						It uses utility classes for typography and spacing to
						space content out within the larger container.
					</p>
					<p className="lead">
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							Learn more
						</a>
					</p>
				</div>
				<div className="containerCard" style={{ display: "flex" }}>
					<div className="card" style={{ width: "18rem" }}>
						<img
							className="card-img-top"
							src="https://cdn.vox-cdn.com/thumbor/2icMOcGVzg1JqrrluEEHmtanu78=/0x0:1920x1280/1820x1213/filters:focal(766x78:1072x384):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60713487/104_Nate_Diaz_vs_Conor_McGregor.0.0.jpg"
							alt="Card image cap"
						/>
						<div className="card-body ">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" class="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card" style={{ width: "18rem" }}>
						<img
							className="card-img-top"
							src="https://cdn.vox-cdn.com/thumbor/2icMOcGVzg1JqrrluEEHmtanu78=/0x0:1920x1280/1820x1213/filters:focal(766x78:1072x384):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60713487/104_Nate_Diaz_vs_Conor_McGregor.0.0.jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" class="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card" style={{ width: "18rem" }}>
						<img
							className="card-img-top"
							src="https://cdn.vox-cdn.com/thumbor/2icMOcGVzg1JqrrluEEHmtanu78=/0x0:1920x1280/1820x1213/filters:focal(766x78:1072x384):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60713487/104_Nate_Diaz_vs_Conor_McGregor.0.0.jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" class="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>

					<div className="card" style={{ width: "18rem" }}>
						<img
							className="card-img-top"
							src="https://cdn.vox-cdn.com/thumbor/2icMOcGVzg1JqrrluEEHmtanu78=/0x0:1920x1280/1820x1213/filters:focal(766x78:1072x384):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60713487/104_Nate_Diaz_vs_Conor_McGregor.0.0.jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" class="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
