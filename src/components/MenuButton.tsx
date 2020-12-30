import React from 'react';
import MenuIcon from './MenuIcon';

export default function () {
    return (<button onClick={ () => { console.log('Show menu')} }><MenuIcon /></button>);
}

// TODO: items: All stations, Closest, Recent (order by most recent), Starred