import '../css/icon.css';
import React from 'react';

type Props = {
    icon: string;
};

export default function ({ icon }: Props) {
    return (<span aria-label={icon} className={`icon-${icon}`} />);
}