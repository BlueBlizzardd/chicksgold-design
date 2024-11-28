import { Component, Index, Suspense } from "solid-js"
import { CardProps, ItemCard } from "./item-card/item-card"

export const ItemGrid: Component<{ items: CardProps[] }> = (props) => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div class='item-container'>
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
            </div>
        </Suspense>
    )
}