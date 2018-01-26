import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Hello !!</h1>
            <h3>Welcome to the demonstration of our final project</h3>
            <h2> NW Central Library</h2>
            <h4>Application created and presented by:</h4>
            <ul>
                <h3>Leah Allen</h3>
                <h3>Robert Fike</h3>
            </ul>
            <p>When Leah was in high school she volunteered at the local library in her home town. Combined with Rob's love for reading, we decided to create a library applicaiton.  Thus the NW Central Library was born.  This application is designed as a tool facilitate the librarian's repetitive tasks.  Consequently, the application is not available to the general public.</p>
            <p>During the creation of our project we utilized the following technologies:</p>
            <ul>
                <li>SQL Server / SQL Server Management Studio (SSMS)</li>
                <li>ASP.Net Core</li>
                <li>React</li>
                <li>MVC</li>
            </ul>
            <p>Please hold all your questions until the end of our demonstration at which time we will be happpy to answer them.</p>
        </div>;
    }
}
