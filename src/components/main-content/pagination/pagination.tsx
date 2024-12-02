import { Index } from 'solid-js';
import './pagination.css';

export const Pagination = () => {
    const pages = Array.from({ length: 4 }, (_, i) => i + 1);

    return (
        <div class='paginator flex'>
            <button class='arrow'>❮</button>
            <Index each={pages}>
                {page => <button>{page()}</button>}
            </Index>
            <button>...</button>
            <button>11</button>
            <button class='arrow'>❯</button>
        </div>
    )
}