import React, { Component } from 'react';

import GuestInputForm from './GuestInputForm';

const Header = props => 
    <header>
        <h1>RSVP</h1>
        <p>Répondez s'il vous plaît</p>

        <GuestInputForm 
            newGuestSubmitHandler={props.newGuestSubmitHandler}
            pendingGuest={props.pendingGuest}
            handleNameInput={props.handleNameInput}
        />

    </header>;


export default Header;

