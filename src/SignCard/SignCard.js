import { useState } from 'react';

const SignCard = ({
  nom, description, img,
}) => {
  // hooks
  const [fullDisplay, setFullDisplay] = useState(false);
  // pure
  const showMore = () => setFullDisplay(true);
  const showLess = () => setFullDisplay(false);
  const trimString = (string, maxLength) => {
    let trimedString = string.substring(0, maxLength);
    trimedString = trimedString.substring(0, Math.min(trimedString.length, trimedString.lastIndexOf(' ')));
    return trimedString;
  };
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 h-auto">
      <img className="w-full" src={`images/${img}`} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nom}</div>
        <p className="text-grey-darker text-base">
          {fullDisplay
            ? (
              <span>
                {description}
                <button onClick={showLess} className="border border-gray-300 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline" type="button">Lire moins</button>
              </span>
            )
            : (
              <span>
                {trimString(description, 150)}...
                <button onClick={showMore} className="border border-gray-300 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline" type="button">Lire la suite</button>
              </span>
            )}
        </p>
      </div>
    </div>
  );
};

export default SignCard;
