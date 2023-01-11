import './Fejlec.css';
import { Link } from 'react-router-dom';
import cimlap from './pictures/cimlap.png'

const Fejlec = () => {
    return ( 
        <header>
            <img id='cimlapkep' src={cimlap} alt="A címlapon: Róbert Facebook borítóképe" title="A címlapon: Róbert Facebook borítóképe" />
            <nav id="nav">
                <h1 id="cim">Robi Oldala</h1>
                <div id='navelemek'>
                    <Link to="/" className='menuelem'>Kezdőlapom</Link>
                    <Link to="/k" className='menuelem'>Érdeklődési körök</Link>
                    <Link to="/e" className='menuelem'>Elérhetőségek</Link>
                </div>
            </nav>
        </header>
     );
}
 
export default Fejlec;