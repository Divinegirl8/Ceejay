import AboutMe from "../features/AboutMe"
import BossCab from "../features/BossCab"
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
            },
            {
                path : "case-study/bosscab",
                element : <BossCab/>
               },
               {
                path : "about/me",
                element : <AboutMe/>
               }
        ]},
        {
            path : "/",
             element : <Home/>
        }
    
]
