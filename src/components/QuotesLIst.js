import React from 'react';
import QuoteItem from './QuoteItem';

function QuotesList(props) {
    return (
        <ul className='quotes-list'>
            {props.items.map((quote) => (
                <QuoteItem
                    key={quote.id}
                    text={quote.text}
                />
            ))}
        </ul>
    );
}

export default QuotesList;