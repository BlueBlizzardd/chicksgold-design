import './socials.css';

export const Socials = () => {
    return (
        <div class='social-media flex'>
            <div class='icon fb flex'>
                <img src="/socials/facebook_white.svg" alt="facebook" />
            </div>
            <div class='icon ig flex'>
                <img src="/socials/instagram_white.svg" alt="instagram" />
            </div>
            <div class='icon twt flex'>
                <img src="/socials/twitter_white.svg" alt="twitter" />
            </div>
            <div class='icon disc flex'>
                <img src="/socials/discord_white.svg" alt="discord" />
            </div>
        </div>
    )
}