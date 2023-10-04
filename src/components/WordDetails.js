import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/react';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const WordDetails = () => {
  const { word } = useParams();
  const wordData = useSelector((state) => state.dictionary.wordData);
  const loading = useSelector((state) => state.dictionary.loading);

  return (
    <div>
      {loading ? (
        <div className="spinner-container">
          <ClipLoader css={override} size={50} color={'#36D7B7'} loading={loading} />
        </div>
      ) : (
        <div className='word'>
          <h2>Word Details: {word}</h2>
          {wordData && wordData.length > 0 ? (
            <div>
              <h3>Phonetics:</h3>
              {wordData[0].phonetics.map((phonetic, index) => (
                <div key={index}>
                  <p>{phonetic.text}</p>
                  {phonetic.audio && <audio controls src={phonetic.audio}></audio>}
                </div>
              ))}
              <h3>Meanings:</h3>
              {wordData[0].meanings.map((meaning, index) => (
                <div key={index}>
                  <p>Part of Speech: {meaning.partOfSpeech}</p>
                  {meaning.definitions.map((definition, idx) => (
                    <div key={idx}>
                      <p>Definition: {definition.definition}</p>
                      {definition.example && <p>Example: {definition.example}</p>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p>No details found for this word.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default WordDetails;