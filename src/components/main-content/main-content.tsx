import { createResource } from 'solid-js';
import { CardProps } from '../item-grid/item-card/item-card';
import './main-content.css';
import { ItemGrid } from '../item-grid/item-grid';

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
                    <input type='text' placeholder='Select a game' />
                    <input type='text' placeholder='Search' />
                    <input type='number' placeholder='Price' />
                    <input type='text' placeholder='Item Type' />
                </div>
                <ItemGrid items={data()!} />
            </div>
        </main>
    )
}