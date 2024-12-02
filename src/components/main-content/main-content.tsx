import { createMemo, createResource, createSignal } from 'solid-js';
import { ItemGrid } from '../item-grid/item-grid';
import { CardProps } from '../item-grid/item-card/item-card';
import './main-content.css';

export const MainContent = () => {
    const [data] = createResource<CardProps[]>(async () => {
        const resources = await fetch('/data.json');
        const result = await resources.json();
        return result;
    })

    const doubledData = createMemo(() => data()?.concat(data()!).concat(data()!.toSpliced(2)));

    return (
        <main class='background'>
            <div class='container'>
                <div class='heading'>Game Items</div>
                <div class='searchbar-row flex'>
                    <div class="filter game-filter flex">
                        <img src="https://chicksgold.com/icons/game-default.svg" alt="game icon" />
                        <input type='text' id='game' name='game' placeholder='Select a game' class='game-filter' />
                        <img src="/arrow_drop_down.svg" alt="arrow down" class='arrow' />
                    </div>
                    <div class="filter search-filter flex">
                        <img src="/search.svg" alt="search" />
                        <input type='text' id='search' name='search' placeholder='Search' class='search-filter' />
                    </div>
                    <div class="other-filters flex">
                        <div class="filter price-filter flex">
                            <img src="https://chicksgold.com/icons/green-icons/item-bag.svg" alt="item bag" />
                            <input type='text' id='price' name='price' placeholder='Price' class='price-filter' />
                            <img src="/arrow_drop_down.svg" alt="arrow down" class='arrow' />
                        </div>
                        <div class="filter type-filter flex">
                            <img src="https://chicksgold.com/icons/green-icons/feather.svg" alt="feather" />
                            <input type='text' id='type' name='type' placeholder='Item Type' class='type-filter' />
                            <img src="/arrow_drop_down.svg" alt="arrow down" class='arrow' />
                        </div>
                    </div>
                </div>
                <ItemGrid items={doubledData()!} />
            </div>
        </main>
    )
}