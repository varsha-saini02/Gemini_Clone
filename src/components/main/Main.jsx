import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/Context'

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} />
            </div>
            <div className='main-container'>

                {!showResult ?
                    <>
                        <div className='greet'>
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} />
                            </div>
                            <div className='card'>
                                <p>Briefly summarize this concept: urban planning </p>
                                <img src={assets.bulb_icon} />
                                <img />
                            </div>
                            <div className='card'>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} />
                                <img />
                            </div>
                            <div className='card'>
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} />
                            </div>
                        </div>
                    </>:
                    <div className='result result-p'>
                        <div className='result-title'>
                            <img src={assets.user_icon} />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={assets.gemini_icon} />
                             {loading
                             ?<div className='loader'>
                                <hr/>
                                <hr/>
                                <hr/>
                             </div>:<p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                        </div>
                    </div>
                }

                <div className={!showResult ? 'main-bottom' : 'm-b'}>
                    <div className='search-box'>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt' />
                        <div>
                            <img src={assets.gallery_icon} />
                            <img src={assets.mic_icon} />
                            {input?<img onClick={() => onSent()} src={assets.send_icon} />:null}
                            
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display innacurate information, so please double check
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
