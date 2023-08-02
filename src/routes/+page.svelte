<script>
	import Nav from '../components/Nav.svelte';
</script>

<Nav />

<svelte:head>
    <title>Escape Zone</title>
	<script defer src="/src/js/click-scroll.js"></script>
	<script defer src="/src/js/custom.js"></script>
</svelte:head>

<main>
	<section class="hero-section d-flex justify-content-center align-items-center" id="section_1">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-12 mb-5 pb-5 pb-lg-0 mb-lg-0">
					<h6>Welcome to Escape Zone</h6>

					<h1 class="text-white mb-4">Your Gateway to Enlightening Learning!</h1>

					<a href="#section_2" class="btn custom-btn smoothscroll me-3">Discover More</a>

					<a href="#section_3" class="link link--kale smoothscroll">Meet the Founder</a>
				</div>

				<div class="hero-image-wrap col-lg-6 col-12 mt-3 mt-lg-0">
					<img
						src="../src/images/education-online-books.png"
						class="hero-image img-fluid"
						alt="education online books"
					/>
				</div>
			</div>
		</div>
	</section>

	<section class="featured-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-12">
					<div class="avatar-group d-flex flex-wrap align-items-center">
						<img
							src="../src/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
							class="img-fluid avatar-image"
							alt=""
						/>

						<img
							src="../src/images/avatar/portrait-young-redhead-bearded-male.jpg"
							class="img-fluid avatar-image avatar-image-left"
							alt=""
						/>

						<img
							src="../src/images/avatar/pretty-blonde-woman.jpg"
							class="img-fluid avatar-image avatar-image-left"
							alt=""
						/>

						<img
							src="../src/images/avatar/studio-portrait-emotional-happy-funny-smiling-boyfriend.jpg"
							class="img-fluid avatar-image avatar-image-left"
							alt=""
						/>

						<div class="reviews-group mt-3 mt-lg-0">
							<strong>4.0</strong>

							<i class="bi-star-fill" />
							<i class="bi-star-fill" />
							<i class="bi-star-fill" />
							<i class="bi-star-fill" />
							<i class="bi-star" />

							<small class="ms-3">2,564 reviews</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-lg-5" />

	<section class="book-section section-padding" id="section_2">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-12">
					<img src="../src/images/tablet-screen-contents.jpg" class="img-fluid" alt="" />
				</div>

				<div class="col-lg-6 col-12">
					<div class="book-section-info">
						<h6>Why</h6>

						<h2 class="mb-4">Escape Zone?</h2>

						<p>
							Learning should be an enjoyable adventure, not a tiresome obligation. We've created
							Escape Zone as a sanctuary where curiosity knows no bounds and imagination knows no
							limits.
						</p>

						<p>
							Whether you're a student seeking academic excellence, a professional aiming to enhance
							your skills, or simply an inquisitive mind hungry for new insights, Escape Zone has
							something remarkable in store for you.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-12 text-center">
					<h6>What's in Escape Zone?</h6>

					<h2 class="mb-5">Preview at glance</h2>
				</div>

				<div class="col-lg-4 col-12">
					<nav id="navbar-example3" class="h-100 flex-column align-items-stretch">
						<nav class="nav nav-pills flex-column">
							<a class="nav-link smoothscroll" href="#item-1">Introduction</a>

							<a class="nav-link smoothscroll" href="#item-2"
								>Chapter 1: <strong>Unleash Your Curiosity</strong></a
							>

							<a class="nav-link smoothscroll" href="#item-3"
								>Chapter 2: <strong>Empowering Learning at Your Fingertips</strong></a
							>

							<a class="nav-link smoothscroll" href="#item-4"
								>Chapter 3: <strong>Education Without Boundaries</strong></a
							>

							<a class="nav-link smoothscroll" href="#item-5">Chapter 4: <strong>Embark on Your Escape Zone Journey</strong></a>
						</nav>
					</nav>
				</div>

				<div class="col-lg-8 col-12">
					<div
						data-bs-spy="scroll"
						data-bs-target="#navbar-example3"
						data-bs-smooth-scroll="true"
						class="scrollspy-example-2"
						tabindex="0"
					>
						<div class="scrollspy-example-item" id="item-1">
							<h5>Introducing Escape Zone</h5>

							<p>
								Welcome to Escape Zone, the virtual haven where curiosity knows no boundaries and
								learning becomes an exhilarating adventure. Step into a world of endless
								possibilities, where knowledge becomes a powerful tool to unlock your true
								potential. Whether you're a student, a professional, or a lifelong learner, we
								invite you to join us on this transformative journey.
							</p>

							<p>
								<strong>What is Online Education</strong> If you are wondering what Online Education
								is all about, this is the place to start.
							</p>

							<blockquote class="blockquote">
                                Online education, also known as e-learning, is a method of delivering educational content and instruction through digital technologies and the internet, enabling learners to access courses and resources from anywhere with an internet connection.							
                            </blockquote>
						</div>

						<div class="scrollspy-example-item" id="item-2">
							<h5>Unleash Your Curiosity</h5>

							<p>
								At Escape Zone, we believe that curiosity is the driving force behind great discoveries. 
							</p>

							<p>
								It is the spark that ignites the flames of imagination and fuels the quest for knowledge. 
							</p>

							<p>
								Our platform is carefully crafted to nurture your curiosity, providing you with an ever-growing repository of captivating videos and enriching e-books across a vast spectrum of subjects.
							</p>

							<div class="row">
								<div class="col-lg-6 col-12 mb-3">
									<img
										src="../src/images/portrait-mature-smiling-authoress-sitting-desk.jpg"
										class="scrollspy-example-item-image img-fluid"
										alt=""
									/>
								</div>

								<div class="col-lg-6 col-12 mb-3">
									<img
										src="../src/images/businessman-sitting-by-table-cafe.jpg"
										class="scrollspy-example-item-image img-fluid"
										alt=""
									/>
								</div>
							</div>
						</div>

						<div class="scrollspy-example-item" id="item-3">
							<h5>Empowering Learning at Your Fingertips</h5>

							<p>
								Gone are the days of traditional classrooms and rigid schedules.
							</p>
							<p>
								With Escape Zone, you have the power to learn at your own pace and on your own terms.
							</p>

							<p>
								Seamlessly access our content from the comfort of your home, while traveling, or during moments of inspiration – all you need is an internet connection and an open mind.
							</p>

							<div class="row align-items-center">
								<div class="col-lg-6 col-12">
									<img src="../src/images/tablet-screen-contents.jpg" class="img-fluid" alt="" />
								</div>

								<div class="col-lg-6 col-12">
									<p>Knowledge, Redefined</p>

									<p>
										<strong
											>Escape Zone redefines education by going beyond the conventional norms.</strong
										>
									</p>

                                    <p>
                                        Our expertly curated collection of content, crafted by educators and subject matter specialists, ensures that you receive the most accurate and up-to-date information.
                                    </p>

                                    <p>
                                        Embracing a multidisciplinary approach, we cater to a diverse range of interests and age groups, making learning an inclusive and enjoyable experience for everyone.
                                    </p>
								</div>
							</div>
						</div>

						<div class="scrollspy-example-item" id="item-4">
							<h5>Education Without Boundaries</h5>

							<p>
								We believe that education should be accessible to all, regardless of geographical location or financial constraints.
							</p>

							<p>
								Escape Zone's user-friendly interface and cross-device compatibility ensure that knowledge is always within reach.
							</p>

							<p>
								Empowering learners from all walks of life to embark on their educational journey.
							</p>

							<img
								src="../src/images/portrait-mature-smiling-authoress-sitting-desk.jpg"
								class="scrollspy-example-item-image img-fluid mb-3"
								alt=""
							/>
						</div>

						<div class="scrollspy-example-item" id="item-5">
							<h5>Embark on Your Escape Zone Journey</h5>

							<p>
								Are you ready to break free from the ordinary and dive headfirst into the extraordinary world of learning?
							</p>

							<p>
								Join us at Escape Zone, where the pursuit of knowledge knows no limits. Unleash your potential, challenge your intellect, and experience the joy of enlightenment.
							</p>

							<p>
								<strong>Let's embark on this transformative adventure together</strong> one that transcends boundaries, inspires innovation, and paves the way for a brighter, more empowered future.
							</p>

							<blockquote class="blockquote">
								Escape Zone: Ignite Your Curiosity, Unleash Your Potential.
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="author-section section-padding" id="section_3">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-12">
					<img
						src="../src/images/portrait-mature-smiling-authoress-sitting-desk.jpg"
						class="author-image img-fluid"
						alt=""
					/>
				</div>

				<div class="col-lg-6 col-12 mt-5 mt-lg-0">
					<h6>Meet Founder</h6>

					<h2 class="mb-4">Prof. Daus</h2>

					<p>
						Daus is a President University Student
					</p>

					<p>
						Daus accomplished a lot of things.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="reviews-section section-padding" id="section_4">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-12 text-center mb-5">
					<h6>Reviews</h6>

					<h2>What people saying...</h2>
				</div>

				<div class="col-lg-4 col-12">
					<div class="custom-block d-flex flex-wrap">
						<div class="custom-block-image-wrap d-flex flex-column">
							<img
								src="../src/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
								class="img-fluid avatar-image"
								alt=""
							/>

							<div class="text-center mt-3">
								<span class="text-white">Sandy</span>

								<strong class="d-block text-white">Artist</strong>
							</div>
						</div>

						<div class="custom-block-info">
							<div class="reviews-group mb-3">
								<strong>4.5</strong>

								<i class="bi-star-fill" />
								<i class="bi-star-fill" />
								<i class="bi-star-fill" />
								<i class="bi-star-fill" />
								<i class="bi-star" />
							</div>

							<p class="mb-0">
								Escape Zone is an exceptional platform for learning! The vast library of videos and e-books covers an array of subjects, making it perfect for both students and professionals.
							</p>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-12 my-5 my-lg-0">
					<div class="custom-block d-flex flex-wrap">
						<div class="custom-block-image-wrap d-flex flex-column">
							<img
								src="../src/images/avatar/portrait-young-redhead-bearded-male.jpg"
								class="img-fluid avatar-image avatar-image-left"
								alt=""
							/>

							<div class="text-center mt-3">
								<span class="text-white">John</span>

								<strong class="d-block text-white">Producer</strong>
							</div>
						</div>

						<div class="custom-block-info">
							<div class="reviews-group mb-3">
								<strong>4.0</strong>

								<i class="bi-star-fill" />
								<i class="bi-star-fill" />
								<i class="bi-star-fill" />
								<i class="bi-star-fill" />
								<i class="bi-star" />
							</div>

							<p class="mb-0">
								Escape Zone is a game-changer in the world of online education. As a busy professional, I needed a flexible and accessible learning solution, and this platform delivered beyond my expectations. 
							</p>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-12">
					<div class="custom-block d-flex flex-wrap">
						<div class="custom-block-image-wrap d-flex flex-column">
							<img
								src="../src/images/avatar/pretty-blonde-woman.jpg"
								class="img-fluid avatar-image"
								alt=""
							/>

							<div class="text-center mt-3">
								<span class="text-white">Candy</span>

								<strong class="d-block text-white">VP, Design</strong>
							</div>
						</div>

						<div class="custom-block-info">
							<div class="reviews-group mb-3">
								<strong>5</strong>

								<i class="bi-star-fill" />
								<i class="bi-star-fill" />
								<i class="bi-star-fill" />
								<i class="bi-star-fill" />
								<i class="bi-star-fill" />
							</div>

							<p class="mb-0">
								Escape Zone has revolutionized the way I learn! As a lifelong learner, I've always been passionate about acquiring new knowledge, and this platform has made it incredibly convenient and enjoyable. 
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="contact-section section-padding" id="section_5">
		<div class="container">
			<div class="row">
				<div class="col-lg-5 col-12 mx-auto">
					<form
						class="custom-form ebook-download-form bg-white shadow"
						action="#"
						method="post"
						role="form"
					>
						<div class="text-center mb-5">
							<h2 class="mb-1">Contact us Now!</h2>
						</div>

						<div class="ebook-download-form-body">
							<div class="input-group mb-4">
								<input
									type="text"
									name="ebook-form-name"
									id="ebook-form-name"
									class="form-control"
									aria-label="ebook-form-name"
									aria-describedby="basic-addon1"
									placeholder="Your Name"
									required
								/>

								<span class="input-group-text" id="basic-addon1">
									<i class="custom-form-icon bi-person" />
								</span>
							</div>

							<div class="input-group mb-4">
								<input
									type="email"
									name="ebook-email"
									id="ebook-email"
									pattern="[^ @]*@[^ @]*"
									class="form-control"
									placeholder="your@company.com"
									aria-label="ebook-form-email"
									aria-describedby="basic-addon2"
									required=""
								/>

								<span class="input-group-text" id="basic-addon2">
									<i class="custom-form-icon bi-envelope" />
								</span>
							</div>

							<div class="col-lg-8 col-md-10 col-8 mx-auto">
								<button type="submit" class="form-control">Send</button>
							</div>
						</div>
					</form>
				</div>

				<div class="col-lg-6 col-12">
					<h6 class="mt-5">Say hi and talk to us</h6>

					<h2 class="mb-4">Contact</h2>

					<p class="mb-3">
						<i class="bi-geo-alt me-2" />
						Bekasi, Indonesia
					</p>

					<p class="mb-2">
						<a href="tel: 010-020-0340" class="contact-link"> 010-020-0340 </a>
					</p>

					<p>
						<a href="mailto:info@company.com" class="contact-link"> info@company.com </a>
					</p>

					<h6 class="site-footer-title mt-5 mb-3">Social</h6>

					<ul class="social-icon mb-4">
						<li class="social-icon-item">
							<a href="#" class="social-icon-link bi-instagram" />
						</li>

						<li class="social-icon-item">
							<a href="#" class="social-icon-link bi-twitter" />
						</li>

						<li class="social-icon-item">
							<a href="#" class="social-icon-link bi-facebook" />
						</li>

						<li class="social-icon-item">
							<a href="#" class="social-icon-link bi-whatsapp" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</main>
