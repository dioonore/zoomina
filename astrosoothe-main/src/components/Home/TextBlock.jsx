import logopurple from '../../assets/logo-purple.png';
import '../../styles/App.css';

function TextBlock() {
    return (
        <>
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">What is AstroSoothe?</h1>
                <p id="textblock-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <footer id='textblock-footer'>
                <img src={logopurple} alt="logo" height="70"/>
                Developed by
                Cuaresma, Flores, Foronda, and Llasus for ITELEC2C<br/>
                © 2024 - 3ITD
            </footer>
        </div>
        </>
    );
    
}

export default TextBlock;