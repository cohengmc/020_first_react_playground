let rootEl = document.getElementById("root");

function Nav() {
    return (
        <nav className="head">
            <img className="logo" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWp5YXM4cTFjbnViYWVuN2g5YmpqNjRxbjFieWdoejlhdzVrdGt2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qx4CR9i0nzsIm2ZKi0/giphy.gif" />
            <ul className="items">
                <li>About</li>
                <li>Contact</li>
                <li>Price</li>
            </ul>
        </nav>
    )
}

function Content() {
    return (
        <div>
            <h1>Home Page</h1>
            <h3>Subheading</h3>
            <p>Ipsum lorem</p>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>This was made by Geoff :)</small>
        </footer>
    )
}

function Page(){
    return(
        <div>
            <Nav />
            <Content />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(rootEl)
root.render(<Page />);