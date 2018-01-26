import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class MvcApp extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>MVC Application</h1>
            <ul>
                <li>Reverse Engineering "Code First" in EF(Entity Framework)</li>
                <li>Identity MVC</li>
                <li>Migrated from phyical database to a virtual database </li>
                <ul>
                    <li>Two databases, seperating security and project data</li>
                    <li>Seeded all our data in an "Initializer" file</li>
                    <ul>
                        <li>Check for database existance on startup, create using migrations if not present</li>
                        <li>Verification of data in database, if not there, seed library data</li>
                    </ul>
                </ul>
                <li>In the words of Leah, we made the database pretty (user friendly). </li>
            </ul>
        </div>;
    }
}

