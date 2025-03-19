/** This is used to display my tech stack */
import { Tech_Tool } from "@/interfaces/link";

interface MyStackProps {
  components: Tech_Tool[];
}
  
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
  
const MyStack: React.FC<MyStackProps> = ({components}) => {
      return (
          <main>
              <div style={{ padding: '40px 40px', maxWidth: '100%'}}>
                    {components.map((component) => (
                        <div style={styles.logoAndText} key={component.name}>
                            <img src={component.logo} alt={component.name} style={styles.image}/>
                            <p> <strong style={{fontSize: '20px'}}>{component.name}:</strong> {component.explanation} </p>
                        </div>
                    ))}
                  
              </div>
          </main>
      );
  }

  export default MyStack;
  