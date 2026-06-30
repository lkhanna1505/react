import React from 'react'

export default function Footer() {

  // const footerStyle = {
  //   position: 'relative',
  //   width: '100%',
  //   top: '70vh'
  // };

  return (
    // <footer style={footerStyle}>
    // The best practice would be to give the main container some minimum  height and always have teh footer at the bottom of the container.
    <footer>
      {/* We can either add the style directly to the style tag using the below or we can make separate object for that and then add all the style and directly link the style tag with the object like above. The below is the inline style and the above is the object style. */}
      <p className="text-center bg-dark text-light py-3" style={{marginBottom: '0', height : '5vh'}}>
        &copy; 2023 Todos List. All rights reserved.
      </p>
    </footer>
  )
}
