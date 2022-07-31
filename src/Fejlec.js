import './Fejlec.css';
// import { Link } from 'react-router-dom';

const Fejlec = () => {
    return ( 
        <header>
            <img id='cimlapkep' src="https://scontent.xx.fbcdn.net/v/t1.15752-9/295366237_579368973864778_7834710498492571618_n.png?stp=dst-png_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=zgAjFpe-eO0AX-mAm5g&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKe-LgSwqu_ChSNqVFiID7-6dNcauE4lLYCaDbh1w1MOw&oe=6305E8BA" alt="A címlapon: Róbert Facebook borítóképe" title="A címlapon: Róbert Facebook borítóképe" />
            <nav id="nav">
                <h1 id="cim">Robi Oldala</h1>
                <div id='navelemek'>
                    <a href="/azenoldalam/" className='menuelem'>Kezdőlapom</a>
                    <a href="/azenoldalam/k" className='menuelem'>Érdeklődési körök</a>
                    <a href="/azenoldalam/e" className='menuelem'>Elérhetőségek</a>
                </div>
            </nav>
        </header>
     );
}
 
export default Fejlec;