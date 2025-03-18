/** This is used to display the programming tools that I know */
import { tools } from "../tech_stack/tech-stack-data";
  
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
  
  export default function MyTools() {
      return (
          <main>
              <div style={{ padding: '40px 40px', maxWidth: '100%'}}>
                  {/* <p>These are the languages I know!! </p> */}
                    {tools.map((tool) => (
                        <div style={styles.logoAndText} key={tool.name}>
                            <img src={tool.logo} alt={tool.name} style={styles.image}/>
                            <p> <strong style={{fontSize: '20px'}}>{tool.name}:</strong> {tool.explanation} </p>
                        </div>
                    ))}
                  
              </div>
          </main>
      );
  }
  