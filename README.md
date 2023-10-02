
<h1>Node.js and Angular WebSocket Project</h1>

<h2>Overview</h2>
<p>This project demonstrates how to create a real-time WebSocket application using Node.js on the server-side and Angular on the client-side. WebSocket allows for full-duplex communication between the server and the client, making it ideal for applications requiring real-time updates.</p>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js: Make sure you have Node.js installed. You can download it from <a href="https://nodejs.org/" target="_blank">https://nodejs.org/</a>.</li>
    <li>Angular CLI: Install the Angular CLI globally by running: <code>npm install -g @angular/cli</code>.</li>
</ul>

<h3>Installation</h3>
<ol>
    <li>Clone the repository: <code>git clone https://github.com/pro-shubham-jain/node-angular-socket.git</code></li>
    <li>Change directory to the project folder: <code>cd your-websocket-project</code></li>
    <li>Install Node.js dependencies for the server: <code>npm install</code></li>
    <li>Change directory to the client folder: <code>cd client</code></li>
    <li>Install Angular dependencies for the client: <code>npm install</code></li>
</ol>

<h2>Usage</h2>
<p>Start the Node.js server and Angular client separately.</p>

<h3>Start the Node.js Server</h3>
<p>In the project  directory: node-server/</p>
<pre>
    <code>npm start</code>
</pre>

<h3>Start the Angular Client</h3>
<p>In the 'client' directory: angular-client/ </p>
<pre>
    <code>ng serve</code>
</pre>

<p>Access the client application at <code>http://localhost:4200</code> in your web browser.</p>

<h2>Features</h2>
<ul>
    <li>Real-time WebSocket communication.</li>
</ul>

<h3>Important: Open Google Chrome with special flags</h3>
<p>To run the client application in your local development environment, open Google Chrome using the following command to disable web security and specify a custom user data directory:</p>

<pre>
<code>"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\tmpChromeSession"</code>
</pre>

<p>Make sure to use this command if you encounter CORS (Cross-Origin Resource Sharing) issues during development.</p>
