import MyStack from "../_components/my-stack";
import { languages,tools } from "../tech_stack/tech-stack-data";

export default function Page() {
    return (
        <main>
            <div className = "font-orbitron" style={{ padding: '40px 40px', maxWidth: '10'}}>
                <h1 style={{ fontWeight: 'bold', fontSize: '100px'}}> Tech Stack ! </h1>
                    
                <h2 style={{ fontWeight: 'bold', fontSize: '40px'}}> <u>Languages</u> </h2>
                     <MyStack components={languages} />
                <h2 style={{ fontWeight: 'bold', fontSize: '40px'}}> <u>Tools</u> </h2>
                     <MyStack components={tools} />
            </div>
        </main>
    );
}