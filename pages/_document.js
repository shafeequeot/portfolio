import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en-us" className="h-full">
            <Head />
            <body className="bg-dark-900 w-full m-0 text-teal-100 font-extralight">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}