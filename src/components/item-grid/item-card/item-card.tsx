import { Component } from "solid-js"
import './item-card.css'

export type CardProps = {
    name: string,
    icon: string,
    price: number,
    description: string
}

export const ItemCard: Component<CardProps> = (props) => {
    return (
        <div class='card-container'>
            <div class='stock flex'>
                <div class='stock-info'>
                    <span class='sale'>On Sale</span>
                    <span class='availability'>In Stock</span>
                </div>
                <input type='number' value='1' min='1' max='50' />
            </div>
            <div class='icon'>
                <img src={props.icon} alt='icon' />
            </div>
            <div class="info-row flex">
                <div class='title'>{props.name}</div>
                <img src="/item-logo.png" alt="item-logo" class="logo" />
            </div>
            <div class='price-row flex'>
                <div class='price'>${props.price / 2}</div>
                <div class='discount'>${props.price}</div>
            </div>
            <div class='description'>{props.description}</div>
            <div class='options-row flex'>
                <button class="details">
                    <span>Details</span>
                </button>
                <button class='add'>
                    <span>Add</span>
                    <div class="icon">
                        <img src="https://chicksgold.com/icons/cart.svg" alt="cart" />
                    </div>
                </button>
            </div>

        </div>
    )
}