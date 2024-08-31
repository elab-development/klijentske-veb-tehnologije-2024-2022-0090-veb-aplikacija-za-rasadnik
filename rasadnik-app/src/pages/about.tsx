import React from 'react';
import AboutPageInfo from '../models/aboutPageInfo';
import '../styles/about.css'

const About: React.FC = () => {
    return (
        <div className="about-container">
            <section className="about-us">
                <h1>O Nama</h1>
                <p>Plant Bloom je renomirani rasadnik koji se specijalizovao za uzgoj i prodaju kvalitetnih biljaka i cveća. Sa dugogodišnjim iskustvom i posvećenošću, pružamo našim kupcima najbolje proizvode i usluge. Naša misija je da doprinosimo lepoti i zdravlju okoliša kroz našu stručnost u hortikulturi.</p>
            </section>
            <section className="company-info">
                <h2>Informacije o Kompaniji</h2>
                <p>Plant Bloom je osnovan sa ciljem da pružimo visokokvalitetne biljke i cveće za naše klijente. Naša filozofija je zasnovana na održivosti i ekološkom uzgoju, sa naglaskom na prirodne metode i tehnologije koje pomažu očuvanju okoliša. Naša vizija je da postanemo lider u industriji hortikulture, poznati po inovacijama i kvalitetu proizvoda.</p>
            </section>
            <section className="mission-vision">
                <div className="mission">
                    <h2>Misija</h2>
                    <p>Naša misija je da pružimo visokokvalitetne biljke i cveće koje unapređuju životnu sredinu i doprinose estetskoj vrednosti prostora. Posvećeni smo pružanju izvanredne korisničke usluge i stalnom poboljšanju naših proizvoda i usluga.</p>
                </div>
                <div className="vision">
                    <h2>Vizija</h2>
                    <p>Naša vizija je da postanemo prepoznatljiv lider u industriji hortikulture, poznati po inovacijama, kvalitetu i održivosti. Želimo da naši proizvodi i usluge inspirišu ljude da vole i brinu o prirodi.</p>
                </div>
            </section>
            <section className="meet-the-team">
                <h2>Upoznajte Tim</h2>
                <p>Naš tim se sastoji od iskusnih i posvećenih profesionalaca koji su uložili mnogo truda i strasti u ono što rade. Svaki član tima doprinosi svom specijalizacijom znanju kako bi našim kupcima pružio najbolju moguću uslugu.</p>

                <div className="team-members">
                    <div className="team-member">
                        <img src="./images/teammember1.jpg" alt="Član 1" />
                        <p>Danijel Stojanović</p>
                    </div>
                    <div className="team-member">
                        <img src="./images/teammember2.jpg" alt="Član 2" />
                        <p>Adrijana Popović</p>
                    </div>
                    <div className="team-member">
                        <img src="./images/teammember3.jpg" alt="Član 3" />
                        <p>Dora Vlahović</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;