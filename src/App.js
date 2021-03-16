import { useRef, useState } from 'react';
import SignCard from './SignCard/SignCard';
import signes from './data/signes';
import getSignIndex from './helpers';
import Modal from './Modal';

function App() {
  const [signIndex, setSignIndex] = useState(0);
  const [modalVisible, setModaVisible] = useState(false);
  const ipt = useRef();
  const allSignCards = signes.map((signe) => (
    <SignCard
      nom={signe.nom}
      description={signe.description}
      img={signe.img}
      key={signe.id}
    />
  ));
  const obtainSign = () => {
    const year = Number(ipt.current.value);
    const index = getSignIndex(year);
    setSignIndex(index); // the new current value of signIndex
    setModaVisible(true);
  };
  return (
    <div>
      <p className="uppercase text-center m-4 font-bold mb-2 text-4xl leading-tight sm:leading-normal">Horoscope Chinois</p>
      <img className="mt-8 w-5/6 md:w-1/2 lg:w-1/4 block m-auto" src="images/chinesezodiac.png" alt="" />
      <div className="text-center m-4 font-semibold mb-2 text-xl leading-tight sm:leading-normal">
        Quel est votre année de naissance?
        <input className="bg-gray-200 block text-center m-auto" ref={ipt} />
      </div>
      <button type="button" className="block text-center m-auto border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline" onClick={obtainSign}>Réponse</button>
      <div className="flex flex-wrap justify-around item-start">
        {allSignCards}
      </div>
      <Modal
        title="Votre signe astro chinois est:"
        visible={modalVisible}
        hideModal={() => setModaVisible(false)}
      >
        <img className="w-1/4 block m-auto" src={`images/${signes[signIndex].img}`} alt="" />
        <h2 className="text-center m-4 font-semibold mb-2 text-xl leading-tight sm:leading-normal">{signes[signIndex].nom}</h2>
        <p>{signes[signIndex].description}</p>
      </Modal>

    </div>
  );
}
export default App;
