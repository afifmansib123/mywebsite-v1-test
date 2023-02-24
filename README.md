paragraph1 :

initially created the app with
*npx create-next-app

installed:
* npm i mongoose bcrypt jsonwebtoken

created these basic index and product inside pages with normal exports. created _app.js inside pages as well like this :

*_app.js:
import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({Component, pageProps}){
    return(
    <Layout>
        <Component {...pageProps}/>
        <p>paykhana</p>
    </Layout>
    )
}
export default MyApp

Outside created a components folder with Navbar.js with normal export and a Layout.js explaining the layout of the App. 

*Layout.js:

import React from 'react'
import NavBar from './NavBar'

function Layout({children}){
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout

heres a brief explanation :

Layout.js is a React functional component that defines the layout structure of your application. In this particular case, it includes a navigation bar (NavBar) that is meant to appear at the top of every page, and it also wraps around the children of the component, which represent the content that will be displayed on each page.

The Layout.js component accepts a children prop, which is a special prop that React uses to pass in the child components that are nested within the Layout component. This allows you to define a common layout structure for your application and reuse it across different pages.

_app.js is a special file in Next.js that is used to initialize the application and apply global styles or components. In this file, you define a custom App component that is responsible for wrapping every page component with the Layout component that you defined in Layout.js. This ensures that the navigation bar and layout structure are consistent across all pages.

In the MyApp function defined in _app.js, you are accepting two props: Component and pageProps. Component refers to the current page component that is being rendered, and pageProps are the initial props that are passed to that component. You are returning a JSX element that wraps the Component with the Layout component, passing in the pageProps as well.

Overall, the combination of Layout.js and _app.js allows you to define a consistent layout structure for your Next.js application, which can help improve the user experience and make it easier to maintain your code.
