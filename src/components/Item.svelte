<script>
	import '$lib/css/item.css';
	import book from '$lib/images/book_mc.png';

	let displayDetail = 'd-none';
	let content;

	const showDetail = (isDisplayed) => {
		displayDetail = isDisplayed ? 'd-block' : 'd-none';
	};

	const addInfo = (item) => {
		content = `<div class='window'>
        <div class='window-left'>
        <div class='general-info'>
            <h5>${item.name} (${item.num})</h5>
        <p class="item-type">${item.type}</p>
        </div>
        <p class="item-desc">${item.desc}</p>
        </div>
        <div class='window-right'>
        <img src="${book}" alt="book"/>
        <div class="stars">${setRarity(item.rarity)}</div>
        </div></div>`;
	};

	const setRarity = (rarity) => {
		let blankStar = 5 - rarity;
		let stars = '';
		for (let index = 0; index < rarity; index++) {
			stars += '<i class="bi bi-star-fill"></i>';
		}
		for (let index = 0; index < blankStar; index++) {
			stars += '<i class="bi bi-star"></i>';
		}
		return stars;
	};

	export let items = [
		{
			name: 'Daus Note',
			type: 'Book',
			desc: 'Daus investment notes 2022/2023',
			img: book,
			num: 1,
			rarity: 3
		},
		{
			name: 'Juan Note',
			type: 'Book',
			desc: 'Juan investment notes 2022/2023',
			img: book,
			num: 2,
			rarity: 4
		}
		//     name: 'Joseph Note',
		//     img: book
		// }
	];
</script>

{#each items as item}
	<div
		class="item-frame"
		data-tooltip={item.name}
		on:click={() => {
			showDetail(true);
			addInfo(item);
		}}
	>
		<img class="item-icon" src={book} alt="" />
		<div class="item-num">{item.num}</div>
	</div>
{/each}
<div class="item-window {displayDetail}">
	{@html content}
	<i class="bi bi-x-lg" on:click={() => showDetail(false)} />
	<div class="item-action">
		<button title="Remove" class="button btn-remove"><i class="bi bi-trash3" /></button>
		<button title="Gift" class="button btn-gift"><i class="bi bi-gift" /></button>
	</div>
</div>
<div class="dark-shade {displayDetail}" on:click={() => showDetail(false)} />
