import { Component, Index, Suspense } from "solid-js"
import { CardProps, ItemCard } from "./item-card/item-card"
import './item-grid.css'

export const ItemGrid: Component<{ items: CardProps[] }> = (props) => {
    return (
        <div class='item-container'>
            <Suspense fallback={<p>Loading...</p>}>
                <div class='search-results flex'>
                    <span class='result-num'>Showing 20 of 125</span>
                    <input type="text" placeholder="Sort by" />
                </div>
                <div class='item-grid grid'>
                    <Index each={props.items}>
                        {item => <ItemCard name={item().name} icon={item().icon} price={item().price} description={item().description} />}
                    </Index>
                </div>
                {/* <Pagination /> */}
            </Suspense>
        </div>
    )
}