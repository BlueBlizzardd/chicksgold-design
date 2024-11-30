import './paymethods.css'

export const PayMethods = () => {
    return (
        <div class='payment-row'>
            <div class='container flex'>
                <div class='method'>
                    <img src="/paymethods/Visa.svg" alt="Visa" />
                </div>
                <div class='method'>
                    <img src="/paymethods/Mastercard.svg" alt="Master_Card" />
                </div>
                <div class='method'>
                    <img src="/paymethods/Skrill.svg" alt="Skrill" />
                </div>
                <span>and 50+ more</span>
            </div>
        </div>
    )
}