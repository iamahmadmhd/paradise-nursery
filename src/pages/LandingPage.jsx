import { Link } from "react-router";

function LandingPage() {
    return (
        <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: 'url(https://unsplash.com/photos/0Nos8QpdQOI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8Z3JlZW5ob3VzZXxkZXwwfDB8fHwxNzUwNTM4NzkwfDI&force=true&w=1920)' }}>
            <h1 className="text-5xl font-bold mb-4">Paradise Nursery</h1>
            <p className="text-xl mb-8 max-w-xl text-center">Your green paradise begins here. Discover beautiful houseplants perfect for your home or office.</p>
            <Link to="/products" className="bg-green-600 px-6 py-2 rounded text-white">Get Started</Link>
        </div>
    );
}

export default LandingPage;