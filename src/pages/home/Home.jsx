import "./Home.css";

function Home() {
    return (
        <div className="main-home-container">
            <div className="home-container">
                <h1>Welcome!</h1>

                <p className="home-hello">I am Grenaderius!<br />
                    Independent Android-apps developer from Ukraine!</p>
                <p>Here you can find my works and privacy policies to them.</p>

                <div className="home-my-apps-section">
                    <div>
                        <h2>My apps:</h2>

                        <div className="home-list-section-div">
                        
                            <ul>
                                <li><a href="/app/UniqueNamesCreator">Unique Names Creator</a></li>
                                <li>Coming soon...</li>
                                <li>Coming soon...</li>
                                <li>Coming soon...</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="home-find-me-section">

                    <div>
                        <h2>Find me here:</h2>

                        <div className="home-list-section-div">

                            <ul>
                                <li><a href="https://www.linkedin.com/in/grenaderius/" target="_blank">LinkedIn</a></li>
                                <li><a href="https://mail.google.com/mail/?view=cm&to=uniquenamescreatorsupport@gmail.com&su=Hello&body=Type%20your%20message%20here..." target="_blank">Gmail</a></li>
                                <li><a href="https://www.youtube.com/channel/UCASXGNo48N2PyAqnO_mufjw" target="_blank">YouTube</a></li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;