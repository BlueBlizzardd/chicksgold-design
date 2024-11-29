import { createResource } from 'solid-js';
import { ItemGrid } from '../item-grid/item-grid';
import { CardProps } from '../item-grid/item-card/item-card';
import './main-content.css';

export const MainContent = () => {
    const [data] = createResource<CardProps[]>(async () => {
        const resources = await fetch('/data.json');
        const result = await resources.json();
        return result;
    })

    return (
        <main class='background'>
            <div class='container'>
                <div class='heading'>Game Items</div>
                <div class='searchbar-row flex'>
                    <input type='text' placeholder='Select a game' class='game-filter' />
                    <input type='text' placeholder='Search' class='search-filter' />
                    <input type='number' placeholder='Price' class='price-filter' />
                    <input type='text' placeholder='Item Type' class='type-filter' />
                </div>
                <ItemGrid items={data()!} />
            </div>
        </main>
    )
}