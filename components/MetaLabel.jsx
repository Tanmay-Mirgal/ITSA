import DecryptedText from './reactbits/DecryptedText.jsx';

/** Small caps section label that decrypts into place the first time it scrolls into view. */
export default function MetaLabel({ children }) {
  return (
    <DecryptedText
      text={children}
      animateOn="view"
      sequential
      speed={38}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>_-"
      encryptedClassName="decrypt-scramble"
    />
  );
}
