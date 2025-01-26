Feature: Räknarknapp

Det ska finnas en räknarknapp som börjar på 0. När man klickar på knappen
ska siffran öka med 1. Siffran ska alltså kunna gå från 0 till 1, från 1
till 2, och så vidare.

Scenario: Ett första klick
  Given Jag är på hemsidan och knappen visar 0
  When Jag klickar på knappen
  Then Knappen ska visa 1
