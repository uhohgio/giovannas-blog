/** This is used to display the programming tools that I know */

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
  
  export default function MyTools() {
      return (
          <main>
              <div style={{ padding: '40px 40px', maxWidth: '100%'}}>
                  {/* <p>These are the languages I know!! </p> */}
                  <div style={styles.imageContainer}>
                      <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Unity-Light.svg" alt="Unity" style={styles.image}/>
                      <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" style={styles.image}/>
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" style={styles.image}/>
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" style={styles.image}/>
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" style={styles.image}/>
                      <img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" alt="visual-studio-code" style={styles.image}/>
                  </div>
              </div>
          </main>
      );
  }