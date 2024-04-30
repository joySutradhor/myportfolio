import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// icons
import { FaPlay } from "react-icons/fa";
import { useState } from 'react';

const HeaderContent = () => {

    const [itemLeft , setItemLeft] = useState(0);

    // move editor functionality 
    const handleMouseEnter = ()=> {
        setItemLeft(1)
    }

    // code editor text 
    const codeString =
        `
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
   const Component = () => {
   const codeString = '(num) => num + 1';
     return (
      <SyntaxHighlighter language="javascript" style={dark}>
              {codeString}
      </SyntaxHighlighter>
   );
};       
    
    `;
    return (
        <div>
            <div className={`absolute top-0 right-10 flex  items-center h-[100vh] cursor-pointer  ${itemLeft === 1 ? "left-10" : ""}`}>
                {/* ========= code editor content ============== */}
                <div onMouseEnter={handleMouseEnter}>
                    <div>
                        <div className='flex justify-between text-gray-300 bg-[#282C34] px-4 pt-2'>
                            <div className='lightParent'>
                                <div className='light bg-green-900'></div>
                                <div className='light bg-yellow-800'></div>
                                <div className='light bg-red-900'></div>
                            </div>
                            <div>
                                <button className='flex space-x-1 items-center'> <span><FaPlay></FaPlay></span><span>Run</span></button>
                            </div>
                        </div>
                    </div>
                    <SyntaxHighlighter
                        language="javascript"
                        wrapLongLines={true}
                        showLineNumbers={true}

                        style={atomOneDark}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;