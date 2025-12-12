import ResumeViewer from "../component/ResumeViewer"
import AboutMe from "../features/AboutMe"
import BossCab from "../features/BossCab"
import CliqMitCaseStudy from "../features/CliqMit"
import Home from "../features/Home"
import KoboCaseStudy from "../features/Kobo"
import Publications from "../features/Publications"
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
               },
               {
                path : "publications",
                element : <Publications/>
               }
        ]},
        {
            path : "/",
             element : <Home/>
        },
        {
            path: "/resume",
            element: <ResumeViewer />
          }
          
    
]
