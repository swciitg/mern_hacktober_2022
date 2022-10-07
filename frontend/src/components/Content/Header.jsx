export default ({user_fullname}) => {
    return (
        <div className="content_header">
            <div className="content_header_greeting">Hi, {user_fullname}</div>
            <button className="auth">Sign out</button>{/**Change it to Sign in and Sign out as required */}
        </div>
    )
}