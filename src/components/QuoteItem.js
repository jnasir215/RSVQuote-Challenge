import React, { useState } from 'react';
import Card from './Card';

function QuoteItem(props) {
    const [text, setText] = useState(props.text);

    return (
        <li>
            <Card>
                <div className='quote-item_text'>
                    <p>{text}</p>
                </div>
            </Card>
        </li>
    );
}

export default QuoteItem;