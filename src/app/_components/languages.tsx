/** This is used to display the programming languages that I know */
import { languages } from "../tech_stack/tech-stack-data";

const styles = {
  logoAndText: {
    display: 'flex',
    alignItems: 'center',
    gridGap: '20px',
    marginBottom: '10px',
    fontSize: '15px',
  },
  image: {
    width: '40px',
  },
};

export default function Languages() {
    return (
        <main>
            <div style={{ padding: '40px 40px', maxWidth: '100%'}}>
                {languages.map((language) => (
                  <div style={styles.logoAndText} key={language.name}>
                    <img src={language.logo} alt={language.name} style={styles.image}/>
                    <p> <strong style={{fontSize: '20px'}}>{language.name}:</strong> {language.explanation} </p>
                  </div>
                ))}
            </div>
        </main>
    );
}