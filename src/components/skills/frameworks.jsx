import React from 'react';

const Frameworks = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frameworks / Libraries</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Numpy</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Pandas</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Sci-kit Learn</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">TensorFlow</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Flask</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">NLTK</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frameworks;
