import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// icons
import { FaPlay } from "react-icons/fa";
import {Fade, Zoom } from 'react-awesome-reveal';


const HeaderContent = () => {
    // code editor text 
    const codeString =
        `
import { dark } from '/dist/esm/styles/prism';
   const Component = () => {
   const codeString = '(num) => num + 1';
     return (
              {codeString}
   );
};         
    `;
    return (
        <div>
            <div className={`absolute top-0 left-10 flex  items-center h-[100vh] cursor-pointer `}>
                {/* ========= code editor content ============== */}
                <div >
                    <div>
                        <div className='flex justify-between text-gray-300 bg-black px-4 pt-2'>

                            <div className='lightParent'>
                                <div className='light bg-green-900'></div>
                                <div className='light bg-yellow-800'></div>
                                <div className='light bg-red-900'></div>
                            </div>

                            <div>
                                <Fade  delay={2000} direction='left'>
                                    <button className='flex space-x-1 items-center'> <span><FaPlay></FaPlay></span><span>Run</span></button>
                                </Fade >
                            </div>
                        </div>
                    </div>
                    <Zoom duration={2000} direction='down'><SyntaxHighlighter
                        customStyle={{ backgroundColor: "transparent" }}
                        language="javascript"
                        wrapLongLines={true}
                        showLineNumbers={true}

                        style={atomOneDark}>
                        {codeString}
                    </SyntaxHighlighter> </Zoom>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;