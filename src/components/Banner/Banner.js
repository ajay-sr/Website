import React, {Component} from 'react';
import './Banner.css';
import arrow from 'images/arrow.png';

class Banner extends Component {
    render () {
    return (
        <div className="banner">
            <div className="profile">
                <div className="pfp">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQF5KPp1X_azQA/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=aAnaUDepTAvO0TethxWPDSxIQEbHPqbYUbMna_MLXrk" alt="Profile"/>
                </div>
                <div className="profileInfo">
                    <span className="myName">Ajay Rai</span>
                    <span className="professionalTitle">Software Engineer</span>
                    <p className="smarts">
                        <span>University of Toronto</span>
                        <span>Bachelors of Science - Computer Science</span>
                        <span>Sep. 2016 - Apr. 2020 | 3.31 cGPA</span>
                    </p>
                    <p className="quickSumm">
                        <span>Software engineer with experience in frontend, backend, artificial intelligence, and data modeling.</span>
                        <span>Excellent programmer, enthusiastic learner, and great friend.</span>
                    </p>
                </div>
            </div>
            <div className="arrowWrapper bounce">
                <a className="startButton bounce" href="#header"><img src={arrow} alt="continue"/></a>
            </div>
        </div>)
    };
}
export default Banner;