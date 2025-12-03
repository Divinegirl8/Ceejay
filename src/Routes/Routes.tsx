// import About from "../components/About"
// import Homepage from "../features/Homepage"
// import Layout from "../Layout"

// export const Routes = [
//     {
//         path : "/",
//         element : <Layout/>,
//         children : [ 
//             {
//              path : "/",
//              element : <Homepage/>
//             },
//             {
//                 path : "/about",
//                 element : <About/>
//             }
//         ]
//     }
// ]



import CliqMitCaseStudy from "../features/CliqMit"
import Home from "../features/Home"
import KoboCaseStudy from "../features/Kobo"
import Layout from "../Layout"

export const Routes = [
    { 
    
        element : <Layout/>,
        children : [ 
            {
             path : "case-study/kobo",
             element : <KoboCaseStudy/>
            },
            {
                path : "case-study/cliqmit",
                element : <CliqMitCaseStudy/>
               }
        ]},
        {
            path : "/",
             element : <Home/>
        }
    
]
