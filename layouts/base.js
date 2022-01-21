import Link from "next/link"

export default ({children}) => (
    <div className="main">
        <div className="logo">
            <h2><Link href="/"><a>DevCitoMovies</a></Link></h2>
        </div>
    {children}
    {/* Component Styles */}
    <style jsx>{`
        .main {
            padding: 10px 50px;
            font-family: sans-seriff;
        }
        .logo a {
                color: inherit;
        }
        a {
            text-decoration: none;
        }
        `}
        
    </style>
    </div>
)