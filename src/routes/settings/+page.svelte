<script>
	import SideDashNav from '../../components/SideDashNav.svelte';
	import '$lib/css/settings.css';
	import Tabs from '../../components/Tabs.svelte';
	import ProfileField from '../../components/ProfileField.svelte';
	import ButtonBack from '../../components/ButtonBack.svelte';
	import { onMount } from 'svelte';

	export let data;

	let items = ['Profile', 'Personal Data', 'Account', 'Academy', 'Newsletter'];
	let activeItem = 'Profile';
	let localState;

	const saveLocalState = () => {
		localStorage.setItem(data.user.id, JSON.stringify(localState));
	};

	onMount(() => {
		if (
			localStorage.getItem(data.user.id) === null ||
			localStorage.getItem(data.user.id) === undefined ||
			localStorage.getItem(data.user.id) === ''
		) {
			localStorage.setItem(
				data.user.id,
				JSON.stringify({
					tabPos: 'Profile'
				})
			);
		}

		console.log(localStorage.getItem(data.user.id));

		localState = JSON.parse(localStorage.getItem(data.user.id));

		console.log(localState);

		activeItem = localState.tabPos;
	});

	let user = data.user;

	const tabChange = (e) => {
		activeItem = e.detail;
		localState.tabPos = e.detail;
		saveLocalState();
	};
</script>

<header>
	<ButtonBack />
	<Tabs {items} {activeItem} width="entire" gap="justify" on:tabChange={tabChange} />
</header>

<main>
	<!-- Profile -->
	{#if activeItem == items[0]}
		<section>
			<form method="POST">
				<div>
					<h4>User Profile</h4>
					<hr />
				</div>
				<ProfileField
					title="Profile Picture"
					type="image"
					desc="We recommend pictures with 1:1 ratio and size less than 2MB"
				/>
				<ProfileField
					title="Full Name"
					content={user.fullName}
					type="text"
					required
					placeholder="ex: John Doe"
				/>
				<ProfileField title="Username" content={user.name} required />
				<ProfileField
					title="Email"
					content={user.email}
					disabled="true"
					type="text"
					desc="You can change your email at the account menu"
				/>
				<ProfileField
					title="Headline"
					content={user.headline}
					desc="Your title or main role"
					placeholder="ex: Software Engineer"
				/>
				<ProfileField
					title="About me"
					type="textarea"
					placeholder="ex: Very outgoing person"
					content={user.bio}
					desc="Write a short story about yourself"
				/>
				<button type="submit">Save Changes</button>
			</form>
		</section>
	{/if}
	<!-- Personal Data -->
	{#if activeItem == items[1]}
		<section>
			<form method="POST" action="?/submitPersonal">
				<div>
					<h4>Personal Data</h4>
					<hr />
				</div>
				<ProfileField
					title="Phone Number"
					type="tel"
					content={user.phoneNum * 1}
					placeholder="ex: +62xxxxxxxxxxx"
					checkBox="true"
					checkBoxDesc="I am interested in receiving information from this number."
				/>
				<ProfileField
					title="City"
					toggleBtn="true"
					type="text"
					toggleBtnDesc="I live outside the Country"
					content={user.city}
					placeholder="ex: Jakarta"
					desc="The City/Region where you live"
					required
				/>
				<ProfileField
					title="Birth Place"
					toggleBtn="true"
					type="text"
					toggleBtnDesc="I was born outside the Country"
					content={user.birthPlace}
					placeholder="ex: Jakarta"
					desc="The City/Region where you were born"
				/>
				<ProfileField title="Date of Birth" type="date" content={user.dateOfBirth} />
				<ProfileField
					title="Gender"
					type="option"
					choices={['Have not chosen', 'Male', 'Female', 'Rather not say']}
					content={user.gender}
				/>
				<ProfileField
					title="Last Education"
					type="option"
					choices={[
						'Have not Chosen',
						'Uneducated',
						'Elementary School Undergraduate',
						'Elementary School Graduate',
						'Junior High School',
						'High School',
						'SMK',
						'D 1-3',
						'D4 / S1',
						'S2',
						'S3'
					]}
					content={user.education}
				/>
				<ProfileField
					title="Current Profession"
					content={user.profession}
					placeholder="ex: Student"
					type="text"
					desc="Choose Student if still in school or uni"
				/>
				<ProfileField
					title="Current Institution"
					content={user.institution}
					placeholder="ex: Google"
					type="text"
					desc="You may list your current company or campus"
				/>
				<button type="submit">Save Changes</button>
			</form>
		</section>
	{/if}
	<!-- Account -->
	{#if activeItem == items[2]}
		<section>
			<form action="">
				<div>
					<h4>Change Email</h4>
					<hr />
				</div>
				<ProfileField
					required
					title="New Email"
					type="email"
					content=""
					placeholder="email@domain.com"
					desc="Email will be successfully changed when you have clicked the verification link that will be sent to your new email."
				/>
				<button type="submit">Change Email</button>
			</form>
		</section>

		<section>
			<form action="">
				<div>
					<h4>Change Password</h4>
					<hr />
				</div>
				<ProfileField
					title="New Password"
					type="password"
					content=""
					required
					placeholder="Fill in your new password"
					desc="Use a minimum of 8 character with combinations of letters and numbers."
				/>
				<ProfileField
					title="Confirm New Password"
					type="password"
					content=""
					required
					placeholder="Confirm password"
				/>
				<button type="submit">Save Password</button>
			</form>
		</section>
	{/if}
	<!-- Academy -->
	{#if activeItem == items[3]}
		{#if user.fullName}
			<section>
				<form action="">
					<div>
						<h4>Certification Name Verification</h4>
						<hr />
					</div>

					<ProfileField
						title="Full Name"
						type="text"
						content={user.fullName}
						warning="Your name has been verified and can no longer be changed. 
					Contact us with you real identity document if there are any issues with the current name"
					/>
				</form>
			</section>
		{/if}

		<section>
			<form action="">
				<div>
					<h4>Interests</h4>
					<hr />
					<p>Choosing certain interests is our way to reccommend the right material for you</p>
				</div>
				<ProfileField
					type="checkbox"
					content={user.interests}
					choices={['insurance', 'stocks', 'crypto', 'money management']}
					desc="You can choose more than 1 topic of interest"
				/>
				<ProfileField
					title="Where have you heard of escape zone?"
					content={user.source}
					type="option"
					choices={[
						'Have not chosen',
						'Event',
						'Community',
						'Instagram',
						'TikTok',
						'Facebook',
						'Twitter',
						'Youtube',
						'Google Search',
						'Blog',
						'Friend / Family / Lecturer / Referral',
						'Other Sites',
						'Others'
					]}
				/>
				<ProfileField
					title="Materials expected from escape zone"
					type="text"
					content={user.wishlist}
					desc="Fill in any Material you would like to learn and currently not in escape zone. Seperate with commas."
				/>
				<ProfileField
					title="Mastered Skills"
					type="text"
					content={user.skills}
					desc="Fill in your skills. Seperate with commas."
				/>
				<button type="submit">Save</button>
			</form>
		</section>
	{/if}
	<!-- Newsletter -->
	{#if activeItem == items[4]}
		<section>
			<form action="">
				<h4>Newsletter</h4>
				<h6>
					Escape Zone will regularly giving announcements. Please choose the types of emails you
					would like to receive:
				</h6>
				<ProfileField
					choices={['Program', 'Promotion', 'Job Vacancy']}
					type="checkbox"
					content={user.newsletter}
					desc={["You will receive information regarding scholarships, new classes, events, etc.", "You will receive information regarding discounts and special offers.", "You will receive information regarding Job Vacancies (Escape Zone Jobs)."]}
				/>
				<button>Save</button>
			</form>
		</section>
	{/if}
</main>
