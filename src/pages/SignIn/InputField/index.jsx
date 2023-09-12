import './style.scss'

export default function InputField({type}) {
    if (type === 'email') {
        return (
            <div className="input-box">
                <label className="input-label">Email</label>
                <input placeholder="Your email..." className="input" name="login" type="email"/>
                <span className="input-helper">enter a valid email</span>
            </div>
        )
    } else if (type === 'password'){
        return (
            <div className="input-box">
                <label className="input-label">Password</label>
                <input placeholder="Your password..." className="input" name="login" type="password"/>
                <span className="input-helper">enter a valid password</span>
            </div>
        )
    }
}