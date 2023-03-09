const About = () => {
    return (
        <div>
            <div className="uk-section">
                <h1 className="uk-heading-line"><span>About Me</span></h1>
            </div>
            <div className="uk-container uk-container-small uk-text-justify" uk-scrollspy="cls: uk-animation-fade; delay: true">
                <p>I am from Okinawa, Japan. Growing up, I was always into electronics that I would
                    break old electronics just to see how they work. After high school, I attended
                    Pensacola Christian College and majored in electrical engineering. After I graduated,
                    I worked for the college as a system administrator for their IT department.
                    During my time there, I gained experience in monitoring network systems, and taught
                    myself fundamentals in computer science. With my work experience and academic background,
                    I've decided to enter the computer engineering program in Texas A&M to learn software engineering and
                    machine learning.
                </p>
            </div>
        </div>
    )
}

export default About
