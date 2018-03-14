import React from 'react';

import Guest from "./Guest";
import PendingGuest from "./PendingGuest";

const GuestList = props => 
    <ul>
        <PendingGuest name={props.pendingGuest} />
        {props.guests
        .filter(guest => !props.isFiltered || guest.isConfirmed )
        .map((guest, index) => 
            <Guest 
                key={index} 
                name={guest.name} 
                isConfirmed={guest.isConfirmed}
                isEditing={guest.isEditing}
                handleConfirmation={() => props.toggleConfirmation(guest.id)}
                handleToggleEditing={() => props.toggleEditing(guest.id)}
                setName={text => props.setName(text, guest.id)}
                handleRemove={() => props.removeGuest(guest.id)}
            />
        )}
        
    </ul>;



export default GuestList;