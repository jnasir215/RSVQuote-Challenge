import React, { useState } from 'react';
import Card from './Card';
import QuotesList from './QuotesLIst';

function Quotes(props) {

    const [text, setText] = useState(props.text);

    return (
        <div>
            <Card className="quotes">
                <QuotesList items={text} />
            </Card>
        </div>
    );
}

export default Quotes;