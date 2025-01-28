/** This is used to display the programming languages that I know */

const styles = {
  imageContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(5px, 40px))',
    gridGap: '5px',
  },
  image: {
    width: '40px',
  },
};

export default function Languages() {
    return (
        <main>
            <div style={{ padding: '40px 40px', maxWidth: '100%'}}>
                {/* <p>These are the languages I know!! </p> */}
                <div style={styles.imageContainer}>
                    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/C.svg" alt="C" style={styles.image}/>
                    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/CPP.svg" alt="cPlusPlus" style={styles.image}/>
                    <img src="https://www.vectorlogo.zone/logos/java/java-vertical.svg" alt="java" style={styles.image}/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" style={styles.image}/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" style={styles.image}/>
                    <img src="https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg" alt="r" style={styles.image}/>
                </div>
            </div>
        </main>
    );
}