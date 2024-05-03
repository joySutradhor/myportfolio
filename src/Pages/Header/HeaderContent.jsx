import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// icons
import { FaPlay } from "react-icons/fa";
import { Fade, Zoom } from 'react-awesome-reveal';
import { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";



const HeaderContent = () => {

    const [ModalOpen, setModalOpen] = useState(false)

    // show modal funcitons 
    const showModal = () => {
        setModalOpen(true)
    }

    const handleClose = () => {
        setModalOpen(false)
    }
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
                                <Fade delay={2000} direction='left'>
                                    <button className='flex space-x-1 items-center' > <span ><FaPlay onClick={showModal}></FaPlay></span><span>Run</span></button>
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
            {
                ModalOpen && <div className='modalParent xl:pt-[50px] '>
                    <div className='flex justify-between items-center  '>
                        <div className=''>
                            <h1 className='mainHeading'>Joy Sutradhor</h1>
                            <p className='secondaryHeading '>Front End Developer</p>
                        </div>
                        <p className='text-red-500  ' onClick={handleClose}><RiDeleteBin6Line className='text-white cursor-pointer hover:text-red-600'></RiDeleteBin6Line></p>
                    </div>
                    <div className='gameParent'>
                        <div>
                            <div className='border h-[60vh] bg-black border-gray-900'>

                            </div>
                        </div>
                        <div>
                            <div className='grid grid-cols-3 gap-[20px] text-white text-[18px]'>
                                <button className='border-[1px] border-transparent hover:border-[1px] hover:border-gray-400'>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                                <button>Play video </button>
                            </div>
                                <div className='w-full bg-red-400 flex justify-center items-center mt-[30px]'>
                                    <button className='w-full text-center'>Reset video </button> 
                                </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default HeaderContent;