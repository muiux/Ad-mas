import React from "react";

import "./index.scss";

const Langs = ["EN", "FR"];

const LangSelector = () => {
  const handleLangSelect = (event) => {
    // console.log('selected lang: ', event.target.value);
  };

  return (
    <div className="LangSelector">
      <select name="lang" onChange={handleLangSelect}>
        {Langs.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LangSelector;
