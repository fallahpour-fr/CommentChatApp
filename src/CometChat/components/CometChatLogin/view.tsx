import cometChatLogo from '../../assets/cometchat_logo.svg';
import cometChatLogoDark from '../../assets/cometchat_logo_dark.svg';
import { IModel } from "./model";

export const View = (props: IModel) => {
    return (
        <div className="cometchat-login__container">
            <div className="cometchat-login__logo">
                {props.isDarkMode ? <img src={cometChatLogoDark} alt="" /> : <img src={cometChatLogo} alt="" />}
            </div>
            <div className="cometchat-login__content">
                <div className="cometchat-login__custom-login">
                    <form onSubmit={props.handleSubmit} className="cometchat-login__form">
                        <div className="cometchat-login__input-group">
                            <label className="input-label cometchat-login__input-label" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="cometchat-login__input"
                                type="email"
                                id="email"
                                value={props.email}
                                onChange={(e) => props.setEmail(e.target.value)}
                                required
                                placeholder="Enter your Email:"
                            />


                            <label className="input-label cometchat-login__input-label" htmlFor="email">
                                Password:
                            </label>
                            <input
                                className="cometchat-login__input"
                                id="password"
                                type="password"
                                value={props.password}
                                onChange={(e) => props.setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                            />

                        </div>

                        <button className="cometchat-login__submit-button">Login</button>
                    </form>
                </div>
            </div >
        </div >
    )
}