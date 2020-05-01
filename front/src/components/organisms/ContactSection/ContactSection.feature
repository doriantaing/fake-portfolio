Feature: ContactSection

  Scenario: send message from contact form

    Given I am a user who want to send a message to the site manager
    When I type "maxime" as username
    Then Contact form button should still be disabled
    When I type "maxime@gmail.com" as email
    Then Contact form button should still be disabled
    When I type "Bonjour je suis intéressé par votre service" as message
    Then Contact form button should be enabled