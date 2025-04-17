
import AnimatedCursor from "react-animated-cursor"
import React from 'react'

const Cursor = () => {
  return (
    <>
   <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={2}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'red',
        mixBlendMode: 'exclusion'
      }}
      outerStyle={{
        border: '1px solid white',
        mixBlendMode: 'exclusion'
        
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
        target: '.custom',
        options: {
        innerSize : 12, 
        outerSize: 12,
        color: '0, 0, 255',
        outerAlpha: 0.3,
        innerScale: 0.7,
        outerScale: 5
        }
      }
    ]}
    
/>
</>
  )
}

export default Cursor

