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

// const languages = [ {
//         name: 'C++',
//         logo: 'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/CPP.svg',
//         explanation: 'My most comfortable programming language because I used it for most of my undergrad career.',
//     },
//     {
//         name: 'Python',
//         logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
//         explanation: 'My second strongest programming language for its simplicity. I had to spend a bit of time learning all of the shortcuts, but once I did this language made it much easier for me to solidify my understanding of algorithms, AI models, and scripting as a programming paradigm.',
//     },
//     {
//         name: 'C',
//         logo: 'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/C.svg',
//         explanation: 'Because of my background in C++, C came naturally to me and I have used it in many small, lost projects.',
//     },
//     {
//         name: 'JavaScript',
//         logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
//         explanation: 'In my postgrad career I have spent a lot of time using JavaScript for web development, and I have become quite comfortable with it.',
//     },
//     {
//         name: 'Java',
//         logo: 'https://www.vectorlogo.zone/logos/java/java-vertical.svg',
//         explanation: 'My first programming language, where I learned how to properly structure code. It isn\'t super fresh but I could 100% pick it up again if necessary.',
//     },
//     {
//         name: 'R',
//         logo: 'https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg',
//         explanation: 'I have used this language for some data analysis projects and have never struggled too much with implementation.',
//     }]

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