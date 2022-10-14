import Header from "./Header"
import Footer from "./Footer"

export default ({
    user_fullname,
}) => {
    return (
        <div className="content">
            <Header user_fullname={user_fullname} />
            <div>Content</div>
            <Footer />
        </div>
    )
}