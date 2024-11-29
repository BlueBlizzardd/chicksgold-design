import { Index } from 'solid-js';
import './pagination.css';

export default function Pagination() {
    const pages = Array.from({ length: 4 }, (x, i) => i + 1);

    return (
        <div class='paginator flex'>
            <button>
                <img src="/arrow_drop_down.svg" alt="arrow-right" class='arrow-right' />
            </button>
            <Index each={pages}>
                {page => <button>{page()}</button>}
            </Index>
            <button>...</button>
            <button>11</button>
            <button>
                <img src="/arrow_drop_down.svg" alt="arrow-left" class='arrow-left' />
            </button>
        </div>
    )
}