<script>
	import SideDashNav from '../../components/SideDashNav.svelte';
	import '$lib/css/settings.css';
	import Tabs from '../../components/Tabs.svelte';
	import ProfileField from '../../components/ProfileField.svelte';

	let items = ['Profile', 'Personal Data', 'Account', 'Academy', 'Newsletter'];
	let activeItem = 'Profile';

	const tabChange = (e) => {
		activeItem = e.detail;
	};
</script>

<header>
	<button
		class="btn-back"
		on:click={() => {
			history.back();
		}}
	>
		<i class="bi bi-arrow-left" />
	</button>
	<Tabs {items} {activeItem} width="entire" on:tabChange={tabChange} />
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
				<ProfileField title="Full Name" content="Euntae Lee" type="text" required />
				<ProfileField title="Username" content="Vasco" required />
				<ProfileField
					title="Email"
					content="Vasco@gmail.com"
					disabled="true"
					type="text"
					desc="You can change your email at the account menu"
				/>
				<ProfileField title="Headline" content="Student At J High" desc="Your title or main role" />
				<ProfileField
					title="About me"
					type="textarea"
					content="It's okay to be weaker than friends, but it's not okay to be weaker than the bad guys."
					desc="Write a short story about yourself"
				/>
				<button type="submit">Save Changes</button>
			</form>
		</section>
	{/if}
	{#if activeItem == items[1]}
		<section>
			<form method="POST">
				<div>
					<h4>Personal Data</h4>
					<hr />
				</div>
				<ProfileField
					title="Phone Number"
					type="number"
					content="088809801292"
					checkBox="true"
					checkBoxDesc="I am interested in receiving information from this number."
				/>
				<ProfileField
					title="City"
					toggleBtn="true"
					type="text"
					toggleBtnDesc="I live outside the Country"
					content="Seoul"
					desc="The City/Region where you live"
					required
				/>
				<ProfileField
					title="Birth Place"
					toggleBtn="true"
					type="text"
					toggleBtnDesc="I was born outside the Country"
					content="Korea"
					desc="The City/Region where you were born"
				/>
				<ProfileField title="Date of Birth" type="date" />
				<ProfileField title="Gender" type="radio" choices={['Male', 'Female', 'IDK']} />
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
				/>
				<ProfileField
					title="Current Profession"
					content="Burn Knuckles"
					type="text"
					desc="Choose Student if still in school or uni"
				/>
				<ProfileField
					title="Current Institution"
					content="J High"
					type="text"
					desc="You may list your current company or campus"
				/>
				<button type="submit">Save Changes</button>
			</form>
		</section>
	{/if}
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
	{#if activeItem == items[3]}
		<section>
			<form action="">
				<div>
					<h4>Certification Name Verification</h4>
					<hr>
				</div>
				<ProfileField
					title="Full Name"
					type="text"
					disabled="true"
					warning="Your name has been verified and can no longer be changed. 
					Contact us with you real identity document if there are any issues with the current name"
				/>
			</form>
		</section>

		<section>
			<form action="">
				<div>
					<h4>Interests</h4>
					<hr />
					<p>Choosing certain interests is our way to reccommend the right material for you</p>
				</div>
				<ProfileField
					type="checkbox"
					choices={['insurance', 'stocks', 'crypto', 'money management']}
					desc="You can choose more than 1 topic of interest"
				/>
				<ProfileField
					title="Where have you heard of escape zone?"
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
					content=""
					desc="Fill in any Material you would like to learn and currently not in escape zone. Seperate with commas."
				/>
				<ProfileField
					title="Mastered Skills"
					type="text"
					content=""
					desc="Fill in your skills. Seperate with commas."
				/>
				<button type="submit">Save</button>
			</form>
		</section>
	{/if}
	{#if activeItem == items[4]}
		<section>
			<form action="">
				<h4>Newsletter</h4>
				<h6>
					Escape Zone will regularly giving announcements. Please choose the types of emails you
					would like to receive:
				</h6>
				<ProfileField
					choices={['Program']}
					type="checkbox"
					desc="You will receive information regarding scholarships, new classes, events, etc."
				/>
				<ProfileField
					choices={['Promotion']}
					type="checkbox"
					desc="You will receive information regarding discounts and special offers."
				/><ProfileField
					choices={['Job Vacancy']}
					type="checkbox"
					desc="You will receive information regarding Job Vacancies (Escape Zone Jobs)."
				/>
				<button>Save</button>
			</form>
		</section>
	{/if}
</main>
