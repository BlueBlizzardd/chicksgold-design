import { Component, Index, Suspense } from "solid-js"
import { CardProps, ItemCard } from "./item-card/item-card"
import { Pagination } from "../main-content/pagination/pagination"
import './item-grid.css'

export const ItemGrid: Component<{ items: CardProps[] }> = (props) => {
    return (
        <div class='item-container'>
            <Suspense fallback={<p>Loading...</p>}>
                <div class='search-results flex'>
                    <span class='result-num'>Showing 20 of 125</span>
                    <div class="filter sort-by-filter flex">
                        <img src="https://chicksgold.com/icons/green-icons/filter.svg" alt="filter" />
                        <input type="text" placeholder="Sort by" />
                        <img src="/arrow_drop_down.svg" alt="arrow down" class='arrow' />
                    </div>
                </div>
                <div class='item-grid grid'>
                    <Index each={props.items}>
                        {item => <ItemCard name={item().name} icon={item().icon} price={item().price} description={item().description} />}
                    </Index>
                </div>
                <Pagination />
            </Suspense>
        </div>
    )
}