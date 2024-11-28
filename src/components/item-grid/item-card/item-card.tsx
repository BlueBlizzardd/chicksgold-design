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
                <input type='number' />
            </div>
            <div class='icon'>
                <img src={props.icon} alt='icon' />
            </div>
            <div class='title'>{props.name}</div>
            <div class='price-row flex'>
                <div class='price'>${props.price / 2}</div>
                <div class='discount'>${props.price}</div>
            </div>
            <div class='description'>{props.description}</div>
            <div class='options-row flex'>
                {/* <Button background='#3f4254' color='hsla(0,0%,100%,.75)'>Details</Button>
                <Button background='#5762d5' color='#fff'>Add</Button> */}
            </div>

        </div>
    )
}