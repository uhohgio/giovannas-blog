import Languages from "../_components/languages";
import MyTools from "../_components/my_tools";

export default function Page() {
    return (
        <main>
            <div style={{ padding: '40px 40px', maxWidth: '10'}}>
                <h1 style={{ fontWeight: 'bold', fontSize: '100px'}}> Tech Stack ! </h1>
                    
                <h2 style={{ fontWeight: 'bold', fontSize: '40px'}}> <u>Languages</u> </h2>
                     <Languages />
                <h2 style={{ fontWeight: 'bold', fontSize: '40px'}}> <u>Tools</u> </h2>
                     <MyTools />
            </div>
        </main>
    );
}