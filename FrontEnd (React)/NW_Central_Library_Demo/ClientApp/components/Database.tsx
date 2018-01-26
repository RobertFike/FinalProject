import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Database extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Database</h1>
            <p>Like most other applications we require the ability to save data.  We originally had created a physical database for storing our data. However, for the purposes of develoopment we converted to a virtual database to store our data so that we didn't have to worry about connection issues when we were working independently on our respective tasks.</p>
            <ul>
                <li>SQLectron - SQL Server Manamgement Studio (SSMS) </li>
                <li>Created datase using DDL (Data Defition Langage) <a href="scripts/createJuvenileMember.txt">scripts</a></li>
            </ul>
        </div>;
    }
}

