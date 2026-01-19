import './globals.css'

export const metadata = {
    title: 'Zustnext - Transform Your Business with Cutting-Edge Technology',
    description: 'Zustnext delivers scalable, secure, and innovative IT services that drive growth and efficiency.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* Navbar will go here */}
                {children}
                {/* Footer will go here */}
            </body>
        </html>
    )
}
