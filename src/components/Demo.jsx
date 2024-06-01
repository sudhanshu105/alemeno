import React from 'react'
import './Demo.css';

const Demo = () => {
    return (
        <div >
            <div className='content-demo'>
                <h1>Watch our React Tutorial Course Video</h1>

                <iframe className='video'
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/SqcY0GlETPk?autoplay=0`}>
                </iframe>
            </div>
            <p className='demo-content'>
                <ul>
                    <li><h2>Skilled Tutors</h2> </li>
                    <li><h2>Excellent Material</h2>
                        Brought to you after lot of research</li>
                </ul>
            </p>
        </div>
    )
}

export default Demo