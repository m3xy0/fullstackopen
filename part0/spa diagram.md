sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note over browser, server: The browser sends the new note user created <br/> as JSON data inside HTTP POST request.
    activate server
    server-->>browser: The server responds with status code 201 created
    deactivate server

    Note over browser, server: The SPA version of the app does not traditionally send the form data, <br/> but instead uses the JavaScript code it fetched from the server.<br/> The code creates a new note, adds it to the notes list with the <br/> command notes.push(note), rerenders the note list on the page and <br/> sends the new note to the server.

    