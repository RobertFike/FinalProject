import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class WebApi extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Web API</h1>
            <p>Because we had finished the main part of our project early, Steve had challenged us to create a web api that would expose library data for a potential reservation portal.</p>
            <ul>
                <li>CORS (Cross Origin Resource Sharing) </li>
                <li>Postman to verify functionality of http-post(create) and http-put(update) methods</li>
            </ul>
        </div>;
    }
}

























































