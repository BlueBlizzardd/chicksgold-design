import { createSignal } from 'solid-js';
import './navbar.css';

export const Navbar = () => {
    const [visible, setVisible] = createSignal(false);

    function handleClose() {
        setVisible(visible => !visible);
    }

    return (
        <nav class="nav flex">
            <div class="nav-brand">
                <img src="https://chicksgold.com/logo/chicks-logo-large.svg" alt="chicks-logo" />
            </div>

            <button class="mobile-toggle" onClick={handleClose}></button>

            <div class={`nav-container flex ${visible() && `visible`}`}>
                <ul class="main-nav grid">
                    <li>
                        <a href="#" class="nav-link">
                            <span>Currency</span>
                            <img src="https://chicksgold.com/icons/arrow-down.svg" alt="arrow" class='arrow' />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span>Items</span>
                            <img src="https://chicksgold.com/icons/arrow-down.svg" alt="arrow" class='arrow' />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span>Accounts</span>
                            <img src="https://chicksgold.com/icons/arrow-down.svg" alt="arrow" class='arrow' />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span>Services</span>
                            <img src="https://chicksgold.com/icons/arrow-down.svg" alt="arrow" class='arrow' />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span>Swap</span>
                            <img src="https://chicksgold.com/icons/arrow-down.svg" alt="arrow" class='arrow' />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span>Sell</span>
                            <img src="https://chicksgold.com/icons/arrow-down.svg" alt="arrow" class='arrow' />
                        </a>
                    </li>
                </ul>
                <div class="button-row flex">
                    <a class="nav-link" href='#'>
                        <span>USD</span>
                        <img src="https://chicksgold.com/icons/arrow-down.svg" alt="arrow" class='arrow' />
                    </a>
                    <div class="nav-link cart">
                        <img src="https://chicksgold.com/icons/cart.svg" alt="cart" />
                        <span>Cart (0)</span>
                    </div>
                    <button class='flex'>
                        <span>Sign In</span>
                        <img src="https://chicksgold.com/sign-in/profile.png" alt="profile" class='profile' />
                    </button>
                </div>
            </div>
        </nav>
    )
}