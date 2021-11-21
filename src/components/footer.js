import * as React from "react"

const Footer = () => (

  <footer className="text-center text-lg-start" style={{background: `rebeccapurple`,}}>
   
   
    <div className="text-center text-white p-3" style={{background: `rgba(0, 0, 0, 0.2)`,}}>
     © {new Date().getFullYear()}, Built with
	{` `}
	<a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  
  </footer>
)


export default Footer



