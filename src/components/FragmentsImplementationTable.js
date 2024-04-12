import React from 'react';
import FragmentsImplementationColumns from "./FragmentsImplementationColumns";

function FragmentsImplementationTable(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <FragmentsImplementationColumns />
                </tr>
            </tbody>
        </table>
    );
}

export default FragmentsImplementationTable;