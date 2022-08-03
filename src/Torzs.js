import './Torzs.css';
import KinizsiKep from './pictures/kinizsi.jpg';

const Torzs = () => {
    return ( 
        <main id='torzs'>
            <section id="Weblapszerkesztés">
                <h3>Weblapszerkesztés</h3>
                <article>
                    <img className='tkep' src="https://www.gyoremihaly.hu/wp-content/uploads/2021/08/icons8-visual-studio-code-2019-480.png" alt="" />
                    <p className='programszoveg'>Még 2018-ban, amikor nyolcadik évfolyamba jártam, akkor eljött számomra is az idő, iskolát kellett választani a továbbtanuláshoz. Én már akkor tudtam, hogy az informatika irányába szeretnék menni. Itt helyben, a <a className='linkhatternelkul' target="_blank" href='https://www.facebook.com/adybaygyszc'>Gyulai SZC Ady Endre - Bay Zoltán Technikum és Szakképző iskola</a> informatikai rendszerüzemeltető képzésére lehetett jelentkezni a régebbi szakgimnáziumi rendszerben (4+1 év). <br/>
                    Részben jól döntöttem, mert a programozás órák keretein belül a weblapszerkesztést kedveltem meg.</p>
                </article>
            </section>
            <section id="Labdarúgás" className='mashatter'>
                <h3>Labdarúgás</h3>
                <article className='vissza'>
                    <img className='tkep' src={KinizsiKep} alt="" />
                    <p className='programszoveg'>Ennek a története kicsit visszább nyúlik az időben. 2013-ban kezdtem el focizni a Sarkadi USC-nél. Pár év eltöltése után egyéb okok miatt pár évre szüneteltettem. Ennek időtartama alatt a Kálvin téren játszottam hobbiból. Voltam egy évet Méhkeréken, majd 2018-ban visszatértem a Sarkadi KLE-hez. Posztjaimat tekintve univerzális vagyok, kapuban is úgy állom helyem, mint mezőnyben. <a className='link' href='https://ada1bank.mlsz.hu/player?itemId=573573'>Ide kattintva áttekintheted a pályafutásomat.</a></p>
                </article>
            </section>
            <section id="Forma-1">
                <h3>Forma 1</h3>
                <article>
                    <img className='tkep' src="https://formula.hu/mainpage_thumb/6drvb5el91i163uibdza_kiemelt_fooldali.jpg" alt="" />
                    <p className='programszoveg'>A legelső emlékem a 2009-es Magyar Nagydíjról származik, amikor is a tv-ben adták, hogy Felipe Massa fejét eltalálta a Rubens Barichello autójáról lerepült rugó. 2010-ben kezdtem el komolyabban nézni, amikor már a Ferrariban ülő Fernando Alonsonak szurkoltam. Később tudtam csak meg róla a történetet a debütálásáról és a világbajnoki címeriről.</p>
                </article>
            </section>
            <section id="LosPolo" className='mashatter'>
                <h3>LosPolo</h3>
                <article className='vissza'>
                    <img className='tkep' src="https://lospolo.hu/image/cache/catalog/polo-kepek/12990-800x755.png" alt="" />
                    <p className='programszoveg'>Abban az esetben, ha érdekelnek az egyedi kinézetű pólók, pulcsik, bögrék és minden egyéb, akkor a LosPolos-t tudom ajánlani. <a className='link' href='https://lospolo.hu/rbrt'>Ide kattintva megnézheted az általam készített mintákat.</a></p>
                </article>
            </section>
        </main>
     );
}
 
export default Torzs;