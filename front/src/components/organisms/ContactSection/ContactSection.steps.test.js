import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import ContactSection from '../ContactSection/ContactSection';

const contactfeature = loadFeature('../front/src/components/organisms/ContactSection/ContactSection.feature');

defineFeature(contactfeature, test => {
    test('send message from contact form', ({given, when, then, and}) => {
        let button;
        let name;
        let getElement;
        let email;
        let message;

        beforeEach(() => {
            const {getTestId} = render(<ContactSection/>);
            getElement = getTestId;
        });
        given(/^I am a user who want to send a message to the site manager$/, () => {
            button = getElement('contact-button');
            expect(button.disabled).toBe(true);
        });
        when(/^I type ("maxime") as username$/, usernameValue => {
            name = getElement('name-field');
            fireEvent.change(name, {target : {value : usernameValue}})
        });
        then(/^Contact form button should still be disabled$/, () => {
            expect(button.disabled).toBe(true);
        });
        when(/I type ("maxime@gmail.com") as email$/, emailValue => {
            email = getElement('email-field');
            fireEvent.change(email, {target : {value : emailValue}})
        });
        then(/^Contact form button should still be disabled$/, () => {
            expect(button.disabled).toBe(true);
        });
        when(/^I type ("Bonjour je suis intéressé par votre service") as message$/, messageValue => {
            message = getElement('message-field');
            fireEvent.change(message, {target : {value : messageValue}})
        });
        then(/^Contact form button should be enabled$/, () => {
            expect(button.disabled).toBe(false);
        });
    })
})
