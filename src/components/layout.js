  /**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import { Link } from "gatsby"
 
 import Header from "./header"
 import Footer from "./footer"
 import "./layout.css"
 
 import "./assests/style5.css"
 
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   ///console.log(window.location.pathname, "path")

   const curr_path = (window.location.pathname);

   const myArray_cpath = curr_path.split("/");
   //console.log(myArray_cpath[0]);
   //console.log(myArray_cpath[1]);
  /// console.log(myArray_cpath[2]);
 
   return (
     <>
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       <div
         style={{
           margin: `0 auto`,
           maxWidth: 1140,
           padding: `0 1.0875rem 1.45rem`,
         }}
       >
         <main>
           
         <div className="container-md shadow min-vh-100 py-2">
         <div className="row">
         <div className="col-4 col-sm-3 col-lg-2" id="sidebar">
           
 <div className="nav flex-column py-3">
 {
 window.location.pathname == '/' ?  
 <React.Fragment>
 <Link to="#menu1" className="nav-link text-truncate" data-bs-toggle="collapse" role="button">Introduction to Linux ▾</Link>
 <div className="collapse ps-2 show" id="menu1" data-bs-parent="#sidebar">
         <Link to="/linux/red-hat" className="nav-link" data-bs-parent="#menu1">Red Hat</Link>
             <Link to="/linux/lodachi" className="nav-link" data-bs-parent="#menu1sub1">Lodachi</Link>
             <Link to="/linux/openmedia-vault" className="nav-link" data-bs-parent="#menu1sub1">OpenMedia Vault</Link>
             <Link to="/linux/ubuntu" className="nav-link" data-bs-parent="#menu1sub1">Ubuntu</Link>
             <Link to="/linux/xserver" className="nav-link" data-bs-parent="#menu1sub1">XServer</Link>
             <Link to="/linux/console" className="nav-link" data-bs-parent="#menu1sub1">Console</Link>
 </div>
 </React.Fragment>
 :
 myArray_cpath[1] == 'linux' ?
 <React.Fragment>
 <Link to="#menu1" className="nav-link text-truncate" data-bs-toggle="collapse" role="button" aria-expanded="true">Introduction to Linux ▾</Link>
 <div className="collapse ps-2 show" id="menu1" data-bs-parent="#sidebar">
         <Link to="/linux/red-hat" className="nav-link" data-bs-parent="#menu1">Red Hat</Link>
         <Link to="/linux/lodachi" className="nav-link" data-bs-parent="#menu1">Lodachi</Link>
             <Link to="/linux/openmedia-vault" className="nav-link" data-bs-parent="#menu1">OpenMedia Vault</Link>
             <Link to="/linux/ubuntu" className="nav-link" data-bs-parent="#menu1">Ubuntu</Link>
             <Link to="/linux/xserver" className="nav-link" data-bs-parent="#menu1">XServer</Link>
           <Link to="/linux/console" className="nav-link" data-bs-parent="#menu1">Console</Link>
 </div>
 </React.Fragment>
  :
  myArray_cpath[1] == 'macos' ?
 <React.Fragment>
 <Link to="#menu1" className="nav-link text-truncate" data-bs-toggle="collapse" role="button">Introduction to macOS ▾</Link>
 <div className="collapse ps-2 show" id="menu1" data-bs-parent="#sidebar">
         <Link to="/macos/shells" className="nav-link">Shells ▾</Link>
         <div className="collap se ps-2" id="menu1sub1" data-bs-parent="#menu1">
             <Link to="/macos/shells/bsdh" className="nav-link" data-bs-parent="#menu1sub1">Bash</Link>
             <Link to="/macos/shells/ksh" className="nav-link" data-bs-parent="#menu1sub1">Ksh</Link>           
             <Link to="/macos/shells/tcsh" className="nav-link" data-bs-parent="#menu1sub1">Tcsh</Link>           
             <Link to="/macos/shells/zsh" className="nav-link" data-bs-parent="#menu1sub1">Zsh</Link>           
         </div>
         <Link to="/macos/development-tools" className="nav-link" >Development Tools ▾</Link>
         <div className="collap se ps-2" id="menu1sub2" data-bs-parent="#menu1">
             <Link to="/macos/development-tools/xcode" className="nav-link" data-bs-parent="#menu1sub2">XCode</Link>       
         </div>
     </div>
     </React.Fragment>
 :
 <React.Fragment>
 <Link to="#menu1" className="nav-link text-truncate" data-bs-toggle="collapse" role="button">Introduction to Windows11 ▾</Link>
 <div className="collapse ps-2 show" id="menu1" data-bs-parent="#sidebar">
         <Link to="/windows/recent-versions" className="nav-link">Recent Versions ▾</Link>
         <div classNamecollap="se ps-2" id="menu1sub1" data-bs-parent="#menu1">
             <Link to="/windows/recent-versions/windows11" className="nav-link" data-bs-parent="#menu1sub1">Windows 11</Link>
             <Link to="/windows/recent-versions/windows-server-2022" className="nav-link" data-bs-parent="#menu1sub1">Windows Server 2022</Link>           
         </div>         
     </div>
  </React.Fragment>
 
 }
 </div>
 </div>
 
           <div className="col-8">
 
           {children}
 
           </div>
 
 
           </div>
           </div>
           
           
         </main>
        
       </div>
      <Footer/>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 