sequenceDiagram
    Note over browser, server: The process starts when a user clicks the save button on the form.
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note over browser, server: When the save button is clicked, the browser will send the user
    Note over browser, server: input to the server address new_note with an HTTP POST request.
    activate server
    server-->>browser: The server responds with an HTTP status code 302.
    deactivate server
    Note over browser, server: HTTP status code 302 is a URL redirect, with which the server asks the browser to perform
    Note over browser, server: a new HTTP GET request to the address defined in the header's Location - the address notes.
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    Note over browser, server: So, the browser reloads the Notes page. The reload causes three more HTTP requests:

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server  

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes