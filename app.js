
try {

const INK = '#16324F';

/* =====================================================================
   CONCEPT DIAGRAMS
===================================================================== */
const DIAGRAMS = {
  clientServer: `<svg viewBox="0 0 260 140" fill="none">
    <rect x="10" y="30" width="70" height="50" rx="6" stroke="${INK}" stroke-width="2.5"/>
    <text x="20" y="60" font-size="11" fill="${INK}">Client</text>
    <text x="15" y="105" font-size="9" fill="${INK}">(browser)</text>
    <rect x="180" y="30" width="70" height="50" rx="6" stroke="${INK}" stroke-width="2.5"/>
    <text x="192" y="60" font-size="11" fill="${INK}">Server</text>
    <line x1="80" y1="45" x2="180" y2="45" stroke="${INK}" stroke-width="2"/>
    <path d="M180 45 l-10 -5 0 10Z" fill="${INK}"/>
    <text x="95" y="38" font-size="9" fill="${INK}">Request</text>
    <line x1="180" y1="65" x2="80" y2="65" stroke="${INK}" stroke-width="2"/>
    <path d="M80 65 l10 -5 0 10Z" fill="${INK}"/>
    <text x="95" y="82" font-size="9" fill="${INK}">Response</text>
  </svg>`,
  httpAnatomy: `<svg viewBox="0 0 260 170" fill="none">
    <rect x="10" y="10" width="240" height="150" rx="6" stroke="${INK}" stroke-width="2" fill="none"/>
    <text x="20" y="30" font-family="monospace" font-size="10" fill="${INK}">GET /users/42 HTTP/1.1</text>
    <line x1="10" y1="42" x2="250" y2="42" stroke="${INK}" stroke-width="1" opacity=".4"/>
    <text x="20" y="58" font-family="monospace" font-size="9" fill="${INK}">Host: api.example.com</text>
    <text x="20" y="74" font-family="monospace" font-size="9" fill="${INK}">Authorization: Bearer abc123</text>
    <text x="20" y="90" font-family="monospace" font-size="9" fill="${INK}">Accept: application/json</text>
    <line x1="10" y1="102" x2="250" y2="102" stroke="${INK}" stroke-width="1" opacity=".4"/>
    <text x="20" y="122" font-family="monospace" font-size="9" fill="${INK}">(empty body for GET)</text>
    <text x="15" y="20" font-size="8" fill="${INK}" opacity=".7">Request line</text>
    <text x="15" y="52" font-size="8" fill="${INK}" opacity=".7">Headers</text>
    <text x="15" y="112" font-size="8" fill="${INK}" opacity=".7">Body</text>
  </svg>`,
  dns: `<svg viewBox="0 0 260 160" fill="none">
    <rect x="10" y="65" width="55" height="30" rx="4" stroke="${INK}" stroke-width="2"/><text x="18" y="84" font-size="9" fill="${INK}">Browser</text>
    <rect x="100" y="10" width="60" height="30" rx="4" stroke="${INK}" stroke-width="2"/><text x="103" y="29" font-size="8" fill="${INK}">Recursive</text>
    <rect x="100" y="65" width="60" height="30" rx="4" stroke="${INK}" stroke-width="2"/><text x="105" y="84" font-size="8" fill="${INK}">Root/TLD</text>
    <rect x="100" y="120" width="60" height="30" rx="4" stroke="${INK}" stroke-width="2"/><text x="108" y="139" font-size="8" fill="${INK}">Authoritative</text>
    <rect x="195" y="65" width="55" height="30" rx="4" stroke="${INK}" stroke-width="2"/><text x="200" y="84" font-size="9" fill="${INK}">IP found</text>
    <line x1="65" y1="80" x2="100" y2="80" stroke="${INK}" stroke-width="1.5"/>
    <line x1="130" y1="65" x2="130" y2="40" stroke="${INK}" stroke-width="1.5"/>
    <line x1="130" y1="95" x2="130" y2="120" stroke="${INK}" stroke-width="1.5"/>
    <line x1="160" y1="80" x2="195" y2="80" stroke="${INK}" stroke-width="1.5"/>
  </svg>`,
  renderPipeline: `<svg viewBox="0 0 260 180" fill="none">
    ${['HTML \u2192 DOM','CSS \u2192 CSSOM','Combine \u2192 Render Tree','Layout (geometry)','Paint (pixels)'].map((label,i)=>`
      <rect x="30" y="${5+i*34}" width="200" height="24" rx="5" stroke="${INK}" stroke-width="2" fill="none"/>
      <text x="130" y="${5+i*34+16}" font-size="10" text-anchor="middle" fill="${INK}">${label}</text>
      ${i<4?`<line x1="130" y1="${5+i*34+24}" x2="130" y2="${5+(i+1)*34}" stroke="${INK}" stroke-width="2"/><path d="M130 ${5+(i+1)*34} l-5 -7 l10 0 Z" fill="${INK}"/>`:''}
    `).join('')}
  </svg>`,
  boxModel: `<svg viewBox="0 0 260 180" fill="none">
    <rect x="10" y="10" width="240" height="160" fill="none" stroke="${INK}" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="14" y="24" font-size="8" fill="${INK}">margin</text>
    <rect x="35" y="30" width="190" height="120" fill="none" stroke="${INK}" stroke-width="2"/>
    <text x="40" y="44" font-size="8" fill="${INK}">border</text>
    <rect x="55" y="50" width="150" height="80" fill="none" stroke="${INK}" stroke-width="1.5" stroke-dasharray="3 2"/>
    <text x="60" y="64" font-size="8" fill="${INK}">padding</text>
    <rect x="75" y="70" width="110" height="40" fill="${INK}" opacity=".15"/>
    <text x="95" y="94" font-size="10" fill="${INK}">content</text>
  </svg>`,
  eventLoop: `<svg viewBox="0 0 260 170" fill="none">
    <rect x="15" y="15" width="90" height="40" rx="5" stroke="${INK}" stroke-width="2"/><text x="24" y="39" font-size="10" fill="${INK}">Call Stack</text>
    <rect x="15" y="115" width="90" height="40" rx="5" stroke="${INK}" stroke-width="2"/><text x="20" y="139" font-size="9" fill="${INK}">Callback Queue</text>
    <rect x="150" y="115" width="95" height="40" rx="5" stroke="${INK}" stroke-width="2"/><text x="158" y="132" font-size="9" fill="${INK}">Web APIs</text><text x="158" y="145" font-size="8" fill="${INK}">(timers, fetch, DOM events)</text>
    <path d="M105 35 h140 v70 h-140" stroke="${INK}" stroke-width="1.5" fill="none" stroke-dasharray="3 2"/>
    <path d="M105 135 h30" stroke="${INK}" stroke-width="2"/>
    <path d="M105 135 l-8 -5 0 10Z" fill="none" stroke="${INK}"/>
    <text x="30" y="80" font-size="9" fill="${INK}" text-anchor="middle">Event Loop moves</text>
    <text x="30" y="92" font-size="9" fill="${INK}" text-anchor="middle">completed callbacks to</text>
    <text x="30" y="104" font-size="9" fill="${INK}" text-anchor="middle">the stack once it\u2019s empty</text>
  </svg>`,
  restFlow: `<svg viewBox="0 0 260 140" fill="none">
    <rect x="10" y="50" width="70" height="40" rx="5" stroke="${INK}" stroke-width="2"/><text x="18" y="74" font-size="10" fill="${INK}">Client app</text>
    <rect x="180" y="50" width="70" height="40" rx="5" stroke="${INK}" stroke-width="2"/><text x="190" y="74" font-size="10" fill="${INK}">API server</text>
    <line x1="80" y1="60" x2="180" y2="60" stroke="${INK}" stroke-width="2"/>
    <path d="M180 60 l-10 -5 0 10Z" fill="${INK}"/>
    <text x="90" y="55" font-family="monospace" font-size="8" fill="${INK}">GET /api/users/42</text>
    <line x1="180" y1="80" x2="80" y2="80" stroke="${INK}" stroke-width="2"/>
    <path d="M80 80 l10 -5 0 10Z" fill="${INK}"/>
    <text x="88" y="98" font-family="monospace" font-size="8" fill="${INK}">200 OK { "id": 42, ... }</text>
  </svg>`,
  jwtFlow: `<svg viewBox="0 0 260 180" fill="none">
    <rect x="10" y="10" width="70" height="34" rx="5" stroke="${INK}" stroke-width="2"/><text x="20" y="31" font-size="9" fill="${INK}">Client</text>
    <rect x="180" y="10" width="70" height="34" rx="5" stroke="${INK}" stroke-width="2"/><text x="190" y="31" font-size="9" fill="${INK}">Server</text>
    <line x1="80" y1="27" x2="180" y2="27" stroke="${INK}" stroke-width="1.5"/>
    <path d="M180 27 l-8 -4 0 8Z" fill="${INK}"/>
    <text x="90" y="20" font-size="7" fill="${INK}">1. login (user+pass)</text>
    <line x1="180" y1="45" x2="80" y2="45" stroke="${INK}" stroke-width="1.5"/>
    <path d="M80 45 l8 -4 0 8Z" fill="${INK}"/>
    <text x="88" y="60" font-size="7" fill="${INK}">2. server returns signed JWT</text>
    <rect x="70" y="75" width="120" height="20" rx="3" stroke="${INK}" stroke-width="1.5" fill="none"/>
    <text x="78" y="89" font-family="monospace" font-size="7" fill="${INK}">token stored client-side</text>
    <line x1="80" y1="115" x2="180" y2="115" stroke="${INK}" stroke-width="1.5"/>
    <path d="M180 115 l-8 -4 0 8Z" fill="${INK}"/>
    <text x="85" y="108" font-size="7" fill="${INK}">3. later requests: Authorization: Bearer &lt;token&gt;</text>
    <text x="20" y="140" font-size="8" fill="${INK}">Server verifies the token\u2019s signature on each request</text>
    <text x="20" y="153" font-size="8" fill="${INK}">instead of looking up a session in a database.</text>
  </svg>`,
  gitBranching: `<svg viewBox="0 0 260 120" fill="none">
    <line x1="20" y1="60" x2="240" y2="60" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="40" cy="60" r="5" fill="${INK}"/><circle cx="100" cy="60" r="5" fill="${INK}"/><circle cx="220" cy="60" r="5" fill="${INK}"/>
    <path d="M100 60 q40 -10 80 -30" stroke="${INK}" stroke-width="2" fill="none"/>
    <circle cx="150" cy="35" r="5" fill="${INK}"/><circle cx="180" cy="30" r="5" fill="${INK}"/>
    <path d="M180 30 q30 5 40 30" stroke="${INK}" stroke-width="2" fill="none"/>
    <text x="20" y="80" font-size="9" fill="${INK}">main</text>
    <text x="140" y="20" font-size="9" fill="${INK}">feature branch</text>
    <text x="200" y="52" font-size="8" fill="${INK}">merge</text>
  </svg>`,
};

function diagramCard(svg, caption){
  return `<div class="diagram-card">${svg}<p class="diagram-caption">${caption}</p></div>`;
}

/* =====================================================================
   TECHNOLOGIES
===================================================================== */
const TECHNOLOGIES = [
  {
    id:'html', title:'HTML', color:'var(--red)', abbr:'HTML',
    summary:'The structural markup language of the web \u2014 defines content and meaning, not appearance.',
    content: () => `
      <p class="detail-summary">HTML (HyperText Markup Language) defines the structure and semantic meaning of content on a web page \u2014 headings, paragraphs, links, forms, images \u2014 using nested elements. It doesn\u2019t handle appearance (that\u2019s CSS) or behaviour (that\u2019s JavaScript); its job is structure and meaning.</p>

      <h3 class="detail-h3">Key concepts</h3>
      <table class="spec-table">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><strong>Semantic elements</strong></td><td><code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code> etc. describe the MEANING of content, not just its box \u2014 improves accessibility and SEO over generic <code>&lt;div&gt;</code>s everywhere.</td></tr>
        <tr><td><strong>The DOM</strong></td><td>The browser parses HTML into the Document Object Model \u2014 a tree structure JavaScript can read and manipulate (see the "DOM Explained" guide).</td></tr>
        <tr><td><strong>Attributes</strong></td><td>Extra information on an element, like <code>href</code> on a link, <code>src</code> on an image, or <code>class</code>/<code>id</code> for styling/scripting hooks.</td></tr>
        <tr><td><strong>Forms</strong></td><td><code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code> etc. collect user input and can submit it to a server without any JavaScript at all (though most modern apps intercept submission with JS).</td></tr>
        <tr><td><strong>Accessibility (a11y)</strong></td><td>Using correct semantic elements, <code>alt</code> text on images, and ARIA attributes where needed so the page works properly with screen readers and assistive technology.</td></tr>
      </table>

      <h3 class="detail-h3">Where it fits</h3>
      <div class="info-box">HTML is always the first thing the browser receives and parses \u2014 it builds the initial DOM before CSS and JavaScript are applied on top. A page with broken/invalid HTML can still often render (browsers are very forgiving), but semantic correctness matters for accessibility, SEO, and predictable behaviour.</div>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box">The difference between semantic and non-semantic elements and why it matters; the difference between <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> (block vs inline); what the <code>&lt;!DOCTYPE html&gt;</code> declaration does; the difference between <code>id</code> and <code>class</code>; how forms submit data (GET puts data in the URL, POST puts it in the request body).</div>`
  },
  {
    id:'css', title:'CSS', color:'var(--blue)', abbr:'CSS',
    summary:'Controls presentation and layout \u2014 how HTML content actually looks and is positioned on screen.',
    content: () => `
      <p class="detail-summary">CSS (Cascading Style Sheets) controls the visual presentation of HTML \u2014 colours, fonts, spacing, layout, and responsive behaviour across different screen sizes. The "cascading" part refers to how rules combine and override each other based on specificity and source order.</p>

      ${diagramCard(DIAGRAMS.boxModel, 'The box model: every element is content, wrapped by padding, then a border, then margin \u2014 this governs sizing and spacing for everything in CSS.')}

      <h3 class="detail-h3">Key concepts</h3>
      <table class="spec-table">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><strong>The box model</strong></td><td>Every element is a rectangular box made of content, padding, border, and margin \u2014 understanding this is foundational to all CSS layout.</td></tr>
        <tr><td><strong>Specificity</strong></td><td>Determines which CSS rule wins when multiple rules target the same element \u2014 roughly: inline styles &gt; IDs &gt; classes/attributes &gt; element selectors, with later rules winning ties.</td></tr>
        <tr><td><strong>Flexbox</strong></td><td>A one-dimensional layout system (row OR column) \u2014 ideal for distributing space among items in a single direction, like a navbar or a card\u2019s internal layout.</td></tr>
        <tr><td><strong>Grid</strong></td><td>A two-dimensional layout system (rows AND columns simultaneously) \u2014 ideal for overall page layout and more complex arrangements.</td></tr>
        <tr><td><strong>Responsive design</strong></td><td>Using relative units, flexible layouts, and media queries so a page adapts sensibly across phone, tablet, and desktop screen sizes.</td></tr>
      </table>

      <h3 class="detail-h3">Where it fits</h3>
      <div class="info-box">The browser builds a CSSOM (CSS Object Model) from stylesheets, similar in concept to the DOM, then combines it with the DOM to work out exactly how to lay out and paint the page (see the "Browser Rendering Process" guide for the full pipeline).</div>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box">How CSS specificity is calculated; the difference between Flexbox and Grid, and when to use each; the difference between <code>relative</code>, <code>absolute</code>, <code>fixed</code>, and <code>sticky</code> positioning; what a media query is and how it enables responsive design; the difference between <code>em</code>, <code>rem</code>, <code>%</code>, and <code>px</code> units.</div>`
  },
  {
    id:'javascript', title:'JavaScript', color:'var(--amber)', abbr:'JS',
    summary:'The programming language of the browser \u2014 adds interactivity, and increasingly powers backends too (Node.js).',
    content: () => `
      <p class="detail-summary">JavaScript is the programming language that runs in the browser, enabling interactivity: responding to clicks, updating content dynamically, validating forms, fetching data without reloading the page, and far more. Via Node.js, it also runs on servers, making full-stack JavaScript development possible with one language across the whole stack.</p>

      <h3 class="detail-h3">Key concepts</h3>
      <table class="spec-table">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><strong>The DOM API</strong></td><td>JavaScript reads and modifies the page through the DOM \u2014 selecting elements, changing content, adding event listeners, creating new elements.</td></tr>
        <tr><td><strong>Asynchronous code</strong></td><td>JavaScript is single-threaded but handles operations that take time (network requests, timers) without blocking, using callbacks, Promises, and <code>async/await</code>.</td></tr>
        <tr><td><strong>The event loop</strong></td><td>The mechanism that lets JavaScript handle async operations on a single thread \u2014 see the dedicated guide for the full picture.</td></tr>
        <tr><td><strong>Closures</strong></td><td>A function retains access to variables from its outer scope even after that outer function has finished running \u2014 a core JS concept, commonly tested in interviews.</td></tr>
        <tr><td><strong>ES6+ features</strong></td><td>Modern syntax: <code>let</code>/<code>const</code>, arrow functions, template literals, destructuring, spread/rest, modules (<code>import</code>/<code>export</code>) \u2014 standard in virtually all modern JS code.</td></tr>
      </table>

      <div class="code-block">// Fetching data with async/await
async function getUser(id) {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) throw new Error('Request failed');
  return res.json();
}</div>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box"><code>var</code> vs <code>let</code> vs <code>const</code> (scoping and reassignment); what a closure is, with a concrete example; the difference between <code>==</code> and <code>===</code>; how Promises work and what <code>async/await</code> is syntactic sugar for; what "hoisting" means; the difference between synchronous and asynchronous code; what <code>this</code> refers to in different contexts (a genuinely common tricky interview topic).</div>`
  },
  {
    id:'php', title:'PHP', color:'var(--purple)', abbr:'PHP',
    summary:'A server-side scripting language, especially common for traditional web backends (WordPress, Laravel, and much of the web runs on it).',
    content: () => `
      <p class="detail-summary">PHP is a server-side scripting language designed specifically for web development \u2014 it runs on the server, generating HTML (or JSON, or anything else) that gets sent to the client. It powers a huge share of the web, from raw PHP scripts to frameworks like Laravel and platforms like WordPress.</p>

      <h3 class="detail-h3">Key concepts</h3>
      <table class="spec-table">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><strong>Embedded in HTML</strong></td><td>PHP code is typically embedded directly within HTML files using <code>&lt;?php ... ?&gt;</code> tags, executed on the server before the page is sent to the browser \u2014 the client never sees the PHP code itself, only its output.</td></tr>
        <tr><td><strong>Superglobals</strong></td><td>Built-in arrays like <code>$_GET</code>, <code>$_POST</code>, and <code>$_SESSION</code> give access to request data and session state.</td></tr>
        <tr><td><strong>Database connectivity</strong></td><td>PHP commonly connects to MySQL/MariaDB (via PDO or mysqli) to read/write data \u2014 this combination (LAMP: Linux, Apache, MySQL, PHP) has powered a huge portion of the web for decades.</td></tr>
        <tr><td><strong>Frameworks</strong></td><td>Laravel and Symfony are the two dominant modern PHP frameworks, providing structure (routing, ORM, templating) that raw PHP doesn\u2019t give you out of the box.</td></tr>
      </table>

      <div class="code-block">&lt;?php
$name = $_POST['name'] ?? 'Guest';
echo "Hello, " . htmlspecialchars($name);
?&gt;</div>
      <div class="warn-box">Always escape user input before outputting it (like <code>htmlspecialchars()</code> above) and use parameterised queries (never raw string concatenation) when building SQL \u2014 skipping either is a direct path to XSS and SQL injection vulnerabilities (see the Security guides).</div>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box">The request lifecycle in PHP (script runs fresh on each request, unlike a persistent Node.js process); the difference between <code>$_GET</code> and <code>$_POST</code>; what PDO is and why parameterised queries matter; the basic idea behind an ORM (mapping database rows to objects) if discussing Laravel/Eloquent.</div>`
  },
  {
    id:'http', title:'HTTP &amp; Networking', color:'var(--teal)', abbr:'HTTP',
    summary:'The protocol underlying almost all web communication \u2014 a request/response cycle with defined methods, headers, and status codes.',
    content: () => `
      <p class="detail-summary">HTTP (HyperText Transfer Protocol) is the protocol browsers and servers use to communicate. It\u2019s a request/response model: the client sends a request, the server sends back a response \u2014 every single page load, API call, and asset fetch works this way.</p>

      ${diagramCard(DIAGRAMS.httpAnatomy, 'A request has a request line (method + path + protocol version), headers (metadata), and an optional body \u2014 responses follow the same basic shape with a status line instead.')}

      <h3 class="detail-h3">Common methods</h3>
      <table class="spec-table">
        <tr><th>Method</th><th>Typical use</th></tr>
        <tr><td class="mono">GET</td><td>Retrieve data \u2014 should have no side effects (safe/idempotent).</td></tr>
        <tr><td class="mono">POST</td><td>Create a new resource, or submit data that changes server state.</td></tr>
        <tr><td class="mono">PUT</td><td>Replace an existing resource entirely.</td></tr>
        <tr><td class="mono">PATCH</td><td>Partially update an existing resource.</td></tr>
        <tr><td class="mono">DELETE</td><td>Remove a resource.</td></tr>
      </table>

      <h3 class="detail-h3">Status code ranges</h3>
      <table class="spec-table">
        <tr><th>Range</th><th>Meaning</th></tr>
        <tr><td class="mono">2xx</td><td>Success (200 OK, 201 Created, 204 No Content)</td></tr>
        <tr><td class="mono">3xx</td><td>Redirection (301 Moved Permanently, 304 Not Modified)</td></tr>
        <tr><td class="mono">4xx</td><td>Client error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)</td></tr>
        <tr><td class="mono">5xx</td><td>Server error (500 Internal Server Error, 503 Service Unavailable)</td></tr>
      </table>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box">The difference between HTTP and HTTPS (encryption via TLS); the difference between 401 (not authenticated) and 403 (authenticated but not authorised); what "idempotent" means and which methods are idempotent (GET, PUT, DELETE \u2014 not POST); the difference between a header and the body of a request; what a cookie is and how it differs from a header set manually.</div>`
  },
  {
    id:'databases', title:'Databases &amp; SQL', color:'var(--slate)', abbr:'SQL',
    summary:'Persistent storage for application data \u2014 relational (SQL) databases organise data into related tables.',
    content: () => `
      <p class="detail-summary">A database stores application data persistently (surviving server restarts, unlike in-memory data). Relational databases (MySQL, PostgreSQL, SQLite) organise data into tables with defined relationships between them, queried using SQL (Structured Query Language).</p>

      <h3 class="detail-h3">Key concepts</h3>
      <table class="spec-table">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><strong>Tables, rows, columns</strong></td><td>Data organised like a spreadsheet \u2014 a table for "users" might have columns like id, name, email, and each row is one user record.</td></tr>
        <tr><td><strong>Primary key</strong></td><td>A unique identifier for each row (often an auto-incrementing <code>id</code>), used to reference that specific record from elsewhere.</td></tr>
        <tr><td><strong>Foreign key</strong></td><td>A column referencing another table\u2019s primary key, establishing a relationship (e.g. an <code>orders</code> table with a <code>user_id</code> foreign key linking each order to its user).</td></tr>
        <tr><td><strong>Joins</strong></td><td>Combine data from multiple related tables in a single query, based on the relationship between them.</td></tr>
        <tr><td><strong>Indexes</strong></td><td>A structure that dramatically speeds up lookups on specific columns, at the cost of some extra storage and slightly slower writes.</td></tr>
      </table>

      <div class="code-block">SELECT users.name, orders.total
FROM users
JOIN orders ON orders.user_id = users.id
WHERE orders.total &gt; 100;</div>

      <h3 class="detail-h3">Transactions</h3>
      <div class="info-box">A transaction groups multiple database operations so they either ALL succeed together, or, if any single one fails, NONE of them take effect (they roll back) \u2014 crucial anywhere multiple related changes must stay consistent. Classic example: transferring money between two accounts is two operations (debit one, credit the other) \u2014 wrapped in a transaction, a failure partway through can\u2019t leave money vanished from one account without appearing in the other.</div>

      <h3 class="detail-h3">Migrations</h3>
      <div class="tip-box">A migration is a version-controlled, incremental change to a database\u2019s structure (adding a table, adding a column, changing a data type) \u2014 written as code, checked into source control alongside the application, and run in a defined order. This means every environment (your machine, a colleague\u2019s, staging, production) can reach an identical database structure by running the same migrations, rather than manually keeping schemas in sync by hand.</div>

      <h3 class="detail-h3">ORMs</h3>
      <table class="type-table">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><strong>ORM (Object-Relational Mapper)</strong></td><td>A library that lets you interact with database records as regular objects/classes in your programming language, rather than writing raw SQL strings directly \u2014 Prisma and Drizzle are common modern choices in the Node/TypeScript ecosystem.</td></tr>
        <tr><td><strong>Trade-offs</strong></td><td>An ORM speeds up development and generally protects against SQL injection by default (since it builds parameterised queries internally), but can obscure exactly what SQL is actually being run, and complex queries sometimes need dropping down to raw SQL anyway for performance or expressiveness.</td></tr>
      </table>

      <h3 class="detail-h3">NoSQL &amp; when to reach for it</h3>
      <div class="info-box">NoSQL databases (MongoDB is the best-known example) store data differently \u2014 often as flexible, self-contained documents (similar in shape to JSON) rather than rigid rows across related tables. This suits data whose shape varies between records or nests naturally, and can scale horizontally more easily for certain access patterns. Relational (SQL) databases remain the better default for data with clear relationships and where consistency/integrity between related records genuinely matters \u2014 the honest interview answer is "it depends on the access pattern and consistency needs," not a blanket preference either way.</div>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box">The difference between SQL (relational, e.g. MySQL/Postgres) and NoSQL (non-relational, e.g. MongoDB) databases, and when you\u2019d choose each; what normalisation means at a basic level (reducing data duplication by splitting data into related tables); the difference between <code>INNER JOIN</code> and <code>LEFT JOIN</code>; what an index does and its trade-off; what a transaction guarantees and a concrete example of why it matters; what a migration is and why teams use them instead of manually editing a shared database; always mention parameterised queries when discussing user input and SQL, to show security awareness.</div>`
  },
  {
    id:'api', title:'APIs &amp; REST', color:'var(--red)', abbr:'API',
    summary:'How separate applications/services communicate \u2014 REST is the dominant convention for structuring web APIs.',
    content: () => `
      <p class="detail-summary">An API (Application Programming Interface) defines how one piece of software can request functionality or data from another. On the web, this almost always means an HTTP-based API \u2014 REST is the dominant architectural convention for structuring these.</p>

      ${diagramCard(DIAGRAMS.restFlow, 'A typical REST API exchange: the client makes an HTTP request to a resource URL, and the server responds with a status code and (usually) a JSON body.')}

      <h3 class="detail-h3">REST principles</h3>
      <table class="spec-table">
        <tr><th>Principle</th><th>What it means</th></tr>
        <tr><td><strong>Resources as URLs</strong></td><td>URLs represent things (nouns), not actions \u2014 <code>/users/42</code> not <code>/getUser?id=42</code>; the HTTP method (GET/POST/etc.) conveys the action.</td></tr>
        <tr><td><strong>Statelessness</strong></td><td>Each request contains everything the server needs to process it \u2014 the server doesn\u2019t rely on remembering previous requests from that client.</td></tr>
        <tr><td><strong>Standard methods</strong></td><td>Uses HTTP methods consistently with their conventional meaning (GET to read, POST to create, etc.) rather than inventing custom verbs.</td></tr>
        <tr><td><strong>JSON as the common format</strong></td><td>Most modern REST APIs exchange data as JSON \u2014 lightweight, human-readable, and natively parseable in JavaScript.</td></tr>
      </table>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box">What makes an API "RESTful" (resource-based URLs, statelessness, standard HTTP methods); the difference between REST and GraphQL at a high level (REST has multiple fixed endpoints, GraphQL has one endpoint with flexible queries); why statelessness matters for scalability (any server can handle any request, since none rely on stored session state locally).</div>`
  },
  {
    id:'websockets', title:'WebSockets', color:'var(--purple)', abbr:'WS',
    summary:'A persistent, two-way connection \u2014 unlike HTTP\u2019s request/response model, either side can send data at any time.',
    content: () => `
      <p class="detail-summary">A WebSocket is a persistent, full-duplex (two-way) connection between client and server, established via a single HTTP "upgrade" handshake and then kept open. Unlike regular HTTP requests (one request, one response, connection closes), either side can send messages at any time over an open WebSocket \u2014 essential for real-time features.</p>

      <h3 class="detail-h3">Key concepts</h3>
      <table class="spec-table">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><strong>Handshake</strong></td><td>A WebSocket connection begins as a normal HTTP request with an <code>Upgrade: websocket</code> header; if the server agrees, the connection switches protocols and stays open.</td></tr>
        <tr><td><strong>Full-duplex</strong></td><td>Both client and server can send messages independently at any time, not just in response to each other \u2014 unlike HTTP\u2019s strict request-then-response pattern.</td></tr>
        <tr><td><strong>Use cases</strong></td><td>Chat applications, live notifications, collaborative editing, live dashboards, multiplayer games \u2014 anywhere the server needs to push data to the client without the client repeatedly asking (polling).</td></tr>
        <tr><td><strong>Polling vs. WebSockets</strong></td><td>Before WebSockets, "real-time" features often used polling (the client repeatedly asks "anything new?") \u2014 wasteful and higher-latency compared to a genuinely open, push-capable connection.</td></tr>
      </table>

      <div class="code-block">const socket = new WebSocket('wss://example.com/chat');
socket.onmessage = (event) => console.log('Received:', event.data);
socket.send('Hello server!');</div>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box">Why WebSockets exist when HTTP already works (the need for low-latency, server-initiated, two-way communication); the difference between polling and WebSockets; that a WebSocket connection starts as an HTTP request (the "upgrade" handshake) before switching protocols; being able to name at least one real-world use case (chat, live scores, notifications).</div>`
  },
  {
    id:'typescript', title:'TypeScript', color:'var(--blue)', abbr:'TS',
    summary:'JavaScript with static types added \u2014 catches a whole class of bugs before code ever runs, and is the professional-standard choice for serious codebases.',
    content: () => `
      <p class="detail-summary">TypeScript is a superset of JavaScript that adds static typing \u2014 you describe the shape of your data and functions, and the compiler checks your code against those descriptions before it ever runs, catching a large class of bugs (wrong argument types, typos on property names, null/undefined mistakes) at compile time instead of in production.</p>

      <h3 class="detail-h3">Key concepts</h3>
      <table class="spec-table">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><strong>Types</strong></td><td>Explicit or inferred descriptions of what a value can be \u2014 <code>string</code>, <code>number</code>, <code>boolean</code>, arrays, objects, or custom-defined shapes.</td></tr>
        <tr><td><strong>Interfaces</strong></td><td>Define the expected shape of an object \u2014 what properties it must have and their types \u2014 without dictating implementation.</td></tr>
        <tr><td><strong>Unions</strong></td><td>A value that can be one of several types (<code>string | number</code>), letting you model real-world data that genuinely varies in shape.</td></tr>
        <tr><td><strong>Generics</strong></td><td>Write reusable functions/types that work across multiple types while still preserving type safety, rather than resorting to <code>any</code>.</td></tr>
        <tr><td><strong>Type narrowing</strong></td><td>TypeScript progressively refines a union type within conditional branches (e.g. after an <code>if (typeof x === 'string')</code> check, TypeScript knows <code>x</code> is a string inside that block).</td></tr>
        <tr><td><strong>Utility types</strong></td><td>Built-in helpers like <code>Partial&lt;T&gt;</code>, <code>Pick&lt;T&gt;</code>, <code>Omit&lt;T&gt;</code> that transform existing types into new ones without redefining them from scratch.</td></tr>
      </table>

      <div class="code-block">interface User {
  id: number;
  name: string;
  email: string;
}

function greet(user: User): string {
  return \`Hello, \${user.name}\`;
}

// A typed API response
async function getUser(id: number): Promise&lt;User&gt; {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
}</div>

      <h3 class="detail-h3">Where it fits</h3>
      <div class="info-box">TypeScript compiles down to plain JavaScript \u2014 browsers and Node.js never run TypeScript directly. The type-checking happens entirely at build/compile time; once compiled, the type information is gone and the output runs exactly like any other JavaScript. This means TypeScript adds zero runtime overhead \u2014 it\u2019s purely a development-time safety net.</div>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box">Why teams choose TypeScript over plain JavaScript (catching errors at compile time, better editor autocomplete/tooling, self-documenting function signatures, safer large-scale refactoring); the difference between an <code>interface</code> and a <code>type</code> alias (largely overlapping, but interfaces can be extended/merged, type aliases can represent unions more naturally); what <code>any</code> does and why overusing it defeats the purpose of TypeScript; a basic explanation of generics with a concrete example.</div>`
  },
  {
    id:'vue', title:'Vue 3', color:'var(--teal)', abbr:'Vue',
    summary:'A progressive, approachable frontend framework for building component-based, reactive user interfaces.',
    content: () => `
      <p class="detail-summary">Vue is a frontend framework for building user interfaces out of reusable, self-contained components \u2014 each combining its own template (HTML), logic (JavaScript), and styling. Vue 3\u2019s Composition API is the modern standard way of organising component logic, alongside the older Options API still found in many existing codebases.</p>

      <h3 class="detail-h3">Key concepts</h3>
      <table class="spec-table">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><strong>Components</strong></td><td>Self-contained, reusable pieces of UI \u2014 a typical app is a tree of components nested inside each other.</td></tr>
        <tr><td><strong>Props</strong></td><td>Data passed DOWN from a parent component to a child \u2014 the child treats props as read-only input.</td></tr>
        <tr><td><strong>Emits</strong></td><td>Events a child component sends UP to its parent \u2014 the mechanism for a child to communicate back without directly modifying parent state.</td></tr>
        <tr><td><strong>Slots</strong></td><td>Let a parent component inject custom content/markup into a specific place inside a child component\u2019s template.</td></tr>
        <tr><td><strong><code>ref</code> &amp; <code>reactive</code></strong></td><td>Wrap plain values (<code>ref</code>) or objects (<code>reactive</code>) so Vue can track changes to them and automatically update anything depending on that data.</td></tr>
        <tr><td><strong><code>computed</code></strong></td><td>A value derived from other reactive state, automatically recalculated only when its dependencies actually change (and cached otherwise).</td></tr>
        <tr><td><strong><code>watch</code></strong></td><td>Runs a function in response to a specific reactive value changing \u2014 used for side effects (like an API call) rather than deriving a new value.</td></tr>
        <tr><td><strong>Lifecycle hooks</strong></td><td>Functions like <code>onMounted</code> that run at specific points in a component\u2019s life (e.g. once it\u2019s actually rendered to the DOM) \u2014 commonly used to fetch initial data.</td></tr>
      </table>

      <div class="code-block">&lt;script setup&gt;
import { ref, computed } from 'vue';

const count = ref(0);
const doubled = computed(() =&gt; count.value * 2);

function increment() {
  count.value++;
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="increment"&gt;Count: {{ count }} (doubled: {{ doubled }})&lt;/button&gt;
&lt;/template&gt;</div>

      <h3 class="detail-h3">The wider ecosystem</h3>
      <table class="type-table">
        <tr><th>Tool</th><th>Role</th></tr>
        <tr><td><strong>Vue Router</strong></td><td>Handles client-side navigation between different "pages" within a single-page app, without full page reloads.</td></tr>
        <tr><td><strong>Pinia</strong></td><td>The standard state-management library for Vue \u2014 shares state across components that aren\u2019t directly parent/child.</td></tr>
        <tr><td><strong>Vite</strong></td><td>The standard build tool for modern Vue projects \u2014 extremely fast development server, bundles the app for production.</td></tr>
      </table>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box">How data flows in Vue (props down, events up \u2014 a "one-way data flow" pattern shared conceptually with React and most modern frameworks); the difference between <code>ref</code> and <code>reactive</code>; what the Composition API is and why it was introduced (better logic reuse and organisation than the older Options API, especially in larger components); being able to explain the same core concepts (components, one-way data flow, reactive state) transfer directly to React, even though the syntax differs.</div>`
  },
  {
    id:'nodejs', title:'Node.js', color:'var(--red)', abbr:'Node',
    summary:'A JavaScript runtime for running JS outside the browser \u2014 the foundation of most modern JavaScript/TypeScript backends.',
    content: () => `
      <p class="detail-summary">Node.js is a runtime that executes JavaScript outside a browser \u2014 most commonly on a server. It uses the same non-blocking, event-driven model as browser JavaScript (see the Event Loop guide), which makes it well-suited to I/O-heavy workloads like web servers handling many concurrent requests.</p>

      <h3 class="detail-h3">Key concepts</h3>
      <table class="spec-table">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><strong>npm</strong></td><td>Node\u2019s package manager \u2014 installs and manages third-party libraries, tracked in <code>package.json</code> and locked to exact versions via a lockfile.</td></tr>
        <tr><td><strong>Web frameworks</strong></td><td>Express (minimal, unopinionated), Fastify (performance-focused), and NestJS (opinionated, structured, Angular-inspired) are the dominant choices for building HTTP servers/APIs on Node.</td></tr>
        <tr><td><strong>Middleware</strong></td><td>Functions that run in sequence for each incoming request, each able to inspect/modify the request, run logic (like checking authentication), or short-circuit the response \u2014 before finally handing off to the route handler.</td></tr>
        <tr><td><strong>Controllers/Services pattern</strong></td><td>A common way to organise backend code \u2014 controllers handle the HTTP layer (parsing requests, formatting responses), services contain the actual business logic, keeping concerns separated.</td></tr>
        <tr><td><strong>Environment variables</strong></td><td>Configuration (database URLs, API keys, secrets) injected at runtime rather than hardcoded \u2014 keeps sensitive values out of source code and lets the same code run differently across dev/staging/production.</td></tr>
      </table>

      <div class="code-block">import express from 'express';
const app = express();
app.use(express.json());

app.get('/api/users/:id', async (req, res) =&gt; {
  const user = await findUserById(req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

app.listen(3000);</div>

      <h3 class="detail-h3">The full request path</h3>
      <div class="info-box">A genuinely useful thing to understand end-to-end: Browser \u2192 DNS lookup \u2192 HTTPS/TLS connection \u2192 (often) a reverse proxy like Nginx \u2192 your Node.js backend \u2192 database query \u2192 response travels back the same path. Knowing how to write an Express route is far less valuable on its own than understanding where it actually sits in that whole chain \u2014 it\u2019s what lets you reason about where a real production problem is actually happening.</div>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box">Why Node.js is well-suited to I/O-heavy applications (its non-blocking event loop, not multiple threads, is how it handles concurrency); what middleware is and why ordering matters (each middleware can choose to pass control to the next, or stop the chain early); the difference between a controller and a service in a well-organised backend; why environment variables matter for secrets/configuration rather than hardcoding values directly in code.</div>`
  },
  {
    id:'react', title:'React', color:'var(--blue)', abbr:'React',
    summary:'The most widely-used frontend library \u2014 builds UIs from components using a declarative, JavaScript-centred approach.',
    content: () => `
      <p class="detail-summary">React is a library (not a full framework, though the ecosystem around it fills that role) for building user interfaces out of composable components. It shares the same core philosophy as Vue \u2014 declarative, component-based UI \u2014 but expresses it through plain JavaScript (via JSX) rather than a separate template syntax.</p>

      <h3 class="detail-h3">Key concepts</h3>
      <table class="spec-table">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><strong>JSX</strong></td><td>A syntax extension letting you write HTML-like markup directly inside JavaScript \u2014 compiled to regular JavaScript function calls under the hood, not a separate templating language.</td></tr>
        <tr><td><strong>Components as functions</strong></td><td>Modern React components are JavaScript functions that return JSX describing what should render \u2014 re-run automatically whenever their state or props change.</td></tr>
        <tr><td><strong><code>useState</code></strong></td><td>A "hook" that gives a function component local, reactive state \u2014 calling its setter function triggers a re-render with the new value.</td></tr>
        <tr><td><strong><code>useEffect</code></strong></td><td>A hook for running side effects (data fetching, subscriptions, manually interacting with the DOM) in response to a component rendering or specific values changing.</td></tr>
        <tr><td><strong>The virtual DOM</strong></td><td>React keeps an in-memory representation of the UI, compares it to the previous version when state changes, and only applies the minimal necessary changes to the real DOM \u2014 avoiding costly full re-renders.</td></tr>
        <tr><td><strong>Props &amp; one-way data flow</strong></td><td>Identical concept to Vue\u2019s props/emits pattern \u2014 data flows down via props, and children communicate up by calling functions passed to them by the parent.</td></tr>
      </table>

      <div class="code-block">function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() =&gt; {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Count: {count}&lt;/button&gt;;
}</div>

      <h3 class="detail-h3">React vs. Vue</h3>
      <div class="info-box">The underlying concepts \u2014 components, one-way data flow, reactive state, a virtual DOM (or similar diffing strategy) \u2014 are essentially the same between React and Vue. The real differences are more about philosophy and syntax: React leans on plain JavaScript/JSX for everything (including styling and templating logic), while Vue provides more built-in structure (a dedicated template syntax, built-in directives like <code>v-if</code>/<code>v-for</code>). Being solid in one makes picking up the other\u2019s syntax a matter of days, not a fundamentally new skill.</div>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box">What the virtual DOM is and why it exists (batching and minimising expensive real DOM updates); the difference between state and props; why the dependency array in <code>useEffect</code> matters (controls exactly when the effect re-runs, and getting it wrong is a very common source of bugs); the rules of hooks (only call them at the top level of a component, never conditionally) and why they exist.</div>`
  },
  {
    id:'redis', title:'Redis / Caching', color:'var(--red)', abbr:'Redis',
    summary:'An in-memory data store, most commonly used as a cache to dramatically speed up repeated, expensive operations.',
    content: () => `
      <p class="detail-summary">Redis is an in-memory key-value data store \u2014 because it keeps data in RAM rather than on disk, reads and writes are extremely fast, making it the standard choice for caching, session storage, and other scenarios where speed matters more than the durability guarantees of a full relational database.</p>

      <h3 class="detail-h3">Key concepts</h3>
      <table class="spec-table">
        <tr><th>Concept</th><th>What it means</th></tr>
        <tr><td><strong>Key-value storage</strong></td><td>Data is stored and retrieved by a unique key, similar in spirit to a giant in-memory object/dictionary \u2014 much simpler than a relational database\u2019s tables and joins, and that simplicity is exactly what makes it fast.</td></tr>
        <tr><td><strong>TTL (Time To Live)</strong></td><td>Keys can be set to automatically expire after a specified time \u2014 ideal for caching, where you want stale data to disappear automatically rather than being manually cleaned up.</td></tr>
        <tr><td><strong>Common use: caching</strong></td><td>Store the result of an expensive database query or API call in Redis with a TTL; subsequent identical requests within that window are served instantly from Redis instead of repeating the expensive operation.</td></tr>
        <tr><td><strong>Common use: session storage</strong></td><td>For session-based authentication (see the Sessions vs. Tokens guide), Redis is a very common place to store session data \u2014 fast, and naturally supports expiring old sessions via TTL.</td></tr>
        <tr><td><strong>Data structures</strong></td><td>Beyond simple key-value pairs, Redis natively supports lists, sets, sorted sets, and hashes \u2014 useful for things like leaderboards (sorted sets), rate limiting counters, or simple pub/sub messaging between services.</td></tr>
      </table>

      <div class="code-block">// Simple caching pattern
const cached = await redis.get(\`user:\${id}\`);
if (cached) return JSON.parse(cached);

const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
await redis.set(\`user:\${id}\`, JSON.stringify(user), 'EX', 300); // cache 5 minutes
return user;</div>

      <h3 class="detail-h3">Know this cold for interviews</h3>
      <div class="interview-box">Why Redis is fast (in-memory, rather than reading from disk on every request); the difference between a cache and a primary data store (Redis is generally NOT meant to be the sole source of truth for important data, since its durability guarantees are weaker than a proper database); cache invalidation as a genuinely hard problem (knowing when cached data has gone stale and needs refreshing or removing); a concrete example of when you\u2019d reach for Redis versus just querying the database directly each time.</div>`
  },
];

/* =====================================================================
   GUIDE CATEGORIES
===================================================================== */
const GUIDE_CATEGORIES = [
  {
    key:'how-it-works', title:'How the Web Works', color:'var(--teal)',
    icon:`<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>`,
    blurb:'The foundational model everything else builds on.',
    topics:[
      { id:'client-server-model', title:'The client-server model', summary:'Clients request, servers respond \u2014 the fundamental architecture of the web.',
        full:{
          diagram:'clientServer', diagramCaption:'The browser (client) sends a request; the server processes it and sends back a response \u2014 this pattern underlies essentially all web communication.',
          steps:[
            'A "client" is the requester \u2014 usually a web browser, but could be a mobile app, another server, or a command-line tool making HTTP requests.',
            'A "server" is a program listening for requests, processing them, and sending back a response \u2014 it could be serving static files, running application logic, querying a database, or all three.',
            'This is a request-response model: the client always initiates, and the server always responds \u2014 a server can\u2019t spontaneously push data to a client over plain HTTP (that\u2019s what WebSockets are for).',
            'Frontend development focuses on what runs in the client (HTML/CSS/JS in the browser); backend development focuses on what runs on the server (business logic, databases, APIs); full-stack means working across both.',
            'Modern architectures often involve MULTIPLE servers \u2014 a web server, a database server, caching layers, and third-party API services \u2014ll coordinating to fulfil a single client request.'
          ]
        }
      },
      { id:'request-response-cycle', title:'The HTTP request/response cycle', summary:'Every page load and API call follows the same basic sequence, from DNS lookup to rendered pixels.',
        full:{ steps:[
          'You type or click a URL \u2014 the browser first needs to resolve the domain name to an IP address via DNS (see the dedicated DNS guide).',
          'The browser opens a TCP connection to that IP address (and performs a TLS handshake first if it\u2019s HTTPS, to establish encryption).',
          'The browser sends an HTTP request: a method (GET, POST, etc.), a path, headers (metadata like cookies, accepted content types, authentication tokens), and sometimes a body.',
          'The server receives the request, processes it (which might mean serving a static file, running application code, querying a database, or calling other services), and constructs a response.',
          'The response includes a status code (200, 404, 500, etc.), headers, and usually a body (HTML, JSON, an image, etc.).',
          'The browser receives the response and, for an HTML page, begins parsing and rendering it \u2014 which itself triggers further requests for any linked CSS, JS, images, or fonts referenced in that HTML.'
        ] }
      },
      { id:'dns-explained', title:'DNS &amp; how a URL resolves', summary:'Domain names are human-friendly labels for IP addresses \u2014 DNS is the lookup system that translates between them.',
        full:{
          diagram:'dns', diagramCaption:'A DNS lookup typically hops through several servers \u2014 recursive resolver, root/TLD servers, and finally the authoritative server for that specific domain \u2014 to find the IP address.',
          steps:[
            'Computers communicate using IP addresses, not domain names \u2014 DNS (Domain Name System) is the distributed lookup system that translates human-friendly names like <code>example.com</code> into the actual IP address to connect to.',
            'The browser first checks its own cache, then the operating system\u2019s cache, before making an actual DNS query if the answer isn\u2019t already known.',
            'A recursive resolver (often run by your ISP or a public service like 1.1.1.1 or 8.8.8.8) handles the lookup on your behalf, querying further servers as needed.',
            'It queries a root server, which points to the TLD (Top-Level Domain) server for that domain\u2019s ending (.com, .org, etc.), which in turn points to the authoritative name server for that specific domain, which finally returns the actual IP address.',
            'Results are cached at multiple levels (browser, OS, resolver) for a period defined by the DNS record\u2019s TTL (Time To Live), which is why DNS changes can take time to fully propagate.'
          ]
        }
      },
      { id:'browser-rendering', title:'The browser rendering process', summary:'HTML and CSS aren\u2019t displayed directly \u2014 the browser builds internal tree structures first, then calculates layout, then paints pixels.',
        full:{
          diagram:'renderPipeline', diagramCaption:'HTML and CSS are parsed into their own tree structures, combined into a render tree, then the browser calculates exact positions (layout) before finally painting actual pixels.',
          steps:[
            'The browser parses HTML into the DOM (Document Object Model) \u2014 a tree structure representing the page\u2019s content and structure.',
            'In parallel, it parses CSS into the CSSOM (CSS Object Model) \u2014 a similar tree structure representing all the styling rules.',
            'The DOM and CSSOM combine into a render tree, which only includes elements that will actually be visible (e.g. <code>display:none</code> elements are excluded).',
            'Layout (sometimes called "reflow") calculates the exact size and position of every element on the page, based on the render tree and the viewport size.',
            'Paint converts the layout into actual pixels on screen, handling colours, borders, shadows, text, and images.',
            'JavaScript that modifies the DOM or CSS can trigger this pipeline to re-run (partially or fully) \u2014 which is why excessive, poorly-optimised DOM manipulation can cause visible jank/slowness.'
          ]
        }
      },
    ],
  },
  {
    key:'frontend', title:'Frontend Development', color:'var(--blue)',
    icon:`<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/>`,
    blurb:'The DOM, layout systems, and asynchronous JavaScript.',
    topics:[
      { id:'dom-explained', title:'The DOM explained', summary:'A live, in-memory tree representation of the page that JavaScript can read and modify.',
        full:{ steps:[
          'The DOM (Document Object Model) is the browser\u2019s in-memory, tree-structured representation of the HTML document \u2014 every element, attribute, and piece of text is a "node" in this tree.',
          'It\u2019s "live" \u2014 changes made to it (via JavaScript) are immediately reflected in what the user sees, without needing to reload the page.',
          'JavaScript interacts with the DOM through the DOM API: <code>document.querySelector()</code> to find elements, <code>.textContent</code>/<code>.innerHTML</code> to change content, <code>.addEventListener()</code> to respond to user interaction, <code>.appendChild()</code> to add new elements.',
          'Direct, frequent DOM manipulation can be slow if overused, since each change can potentially trigger layout recalculation \u2014 this is part of why frameworks like React use a "virtual DOM" to batch and minimise real DOM updates.',
          'Events bubble up through the DOM tree by default (a click on a button also technically "happens" on its parent elements too) \u2014 understanding event bubbling (and how to stop it with <code>stopPropagation()</code>) is a common practical and interview topic.'
        ] }
      },
      { id:'css-layout-systems', title:'CSS layout systems (Flexbox &amp; Grid)', summary:'Flexbox for one-dimensional layouts, Grid for two-dimensional \u2014 knowing when to reach for each is a practical skill, not just theory.',
        full:{ steps:[
          'Flexbox arranges items along a single axis (row or column), automatically handling spacing and alignment \u2014 ideal for navbars, button groups, or any single-direction distribution of space.',
          'Grid defines both rows and columns simultaneously, letting you place items precisely within a two-dimensional structure \u2014 ideal for overall page layouts, card grids, or anything genuinely two-dimensional.',
          'Common Flexbox properties: <code>display:flex</code>, <code>justify-content</code> (main axis alignment), <code>align-items</code> (cross axis alignment), <code>flex-wrap</code>.',
          'Common Grid properties: <code>display:grid</code>, <code>grid-template-columns</code>/<code>rows</code>, <code>gap</code>, and named grid areas for readable, maintainable layouts.',
          'They\u2019re not mutually exclusive \u2014 a real page commonly uses Grid for overall page structure and Flexbox for smaller components within each grid area.'
        ] }
      },
      { id:'responsive-design', title:'Responsive design', summary:'Building layouts that adapt sensibly from phone to desktop, using relative units and media queries.',
        full:{ steps:[
          'Use relative units (<code>%</code>, <code>rem</code>, <code>vw</code>/<code>vh</code>) rather than fixed pixel values where layout should adapt to different screen sizes.',
          'Media queries apply different CSS rules based on conditions like viewport width: <code>@media (max-width: 768px) { ... }</code> targets smaller screens.',
          'Mobile-first design writes base styles for small screens, then uses <code>min-width</code> media queries to progressively add complexity for larger screens \u2014 generally considered better practice than the reverse.',
          'Flexbox and Grid are naturally more responsive-friendly than older float-based layouts, since they handle wrapping and space distribution automatically.',
          'Always test across actual device sizes (or browser dev tools\u2019 device emulation) rather than assuming a design "should" work at a given size \u2014 real content (varying text lengths, image aspect ratios) often breaks assumptions that looked fine with placeholder content.'
        ] }
      },
      { id:'cross-browser-compatibility', title:'Cross-browser compatibility', summary:'Different browsers implement web standards slightly differently \u2014 knowing how to check and handle the gaps rather than assuming universal support.',
        full:{ steps:[
          'Not every browser supports every CSS/JavaScript feature at the same time, or implements it identically \u2014 a newer CSS feature might work perfectly in Chrome but not yet in the specific Safari version a user has, even if both are broadly "modern" browsers.',
          '"Can I use" (a well-known reference site) is the standard way to check real-world browser support for a specific feature before relying on it \u2014 checking this during development, not after a bug report, is the practical habit worth building.',
          'Progressive enhancement means building a solid, functional baseline experience first, then layering on enhanced functionality for browsers that support it \u2014 rather than an all-or-nothing feature that breaks entirely on an unsupported browser.',
          'Autoprefixer and similar build tools automatically add vendor prefixes (like <code>-webkit-</code>) to CSS where still needed for broader compatibility, without you needing to write and maintain them manually.',
          'For JavaScript, a "polyfill" provides a fallback implementation of a newer feature for browsers that don\u2019t natively support it \u2014 letting you use modern syntax/APIs while still functioning on slightly older browsers, at the cost of some extra loaded code for those users specifically.',
          'Actually testing in more than one browser engine (not just Chrome, which dominates usage but isn\u2019t the only engine in real use \u2014 Safari uses WebKit, Firefox uses Gecko) catches real compatibility issues that testing in a single browser simply can\u2019t reveal.'
        ] }
      },
      { id:'event-loop', title:'The JavaScript event loop &amp; async', summary:'JavaScript is single-threaded, but the event loop lets it handle async operations (network requests, timers) without blocking.',
        full:{
          diagram:'eventLoop', diagramCaption:'The call stack runs your code; time-consuming operations (timers, network requests) are handed off to Web APIs, and their callbacks only re-enter the stack once it\u2019s empty.',
          steps:[
            'JavaScript executes on a single thread \u2014 it can only do one thing at a time on the call stack.',
            'When you call something like <code>fetch()</code> or <code>setTimeout()</code>, the actual waiting happens outside the JS engine, in Web APIs provided by the browser \u2014 JavaScript itself isn\u2019t blocked while waiting.',
            'Once that operation completes, its callback (or resolved Promise) is placed in a queue, NOT executed immediately \u2014 it waits until the call stack is completely empty.',
            'The event loop continuously checks: is the call stack empty? If so, take the next item from the queue and push it onto the stack to run.',
            '<code>async/await</code> is syntactic sugar over Promises \u2014 it makes asynchronous code read like synchronous code, but the underlying non-blocking behaviour is identical.',
            'This is why a <code>setTimeout(fn, 0)</code> doesn\u2019t run immediately even with a 0ms delay \u2014 it still has to wait for the current call stack to finish and its turn in the queue.'
          ]
        }
      },
      { id:'state-management', title:'State management', summary:'As an app grows, deciding where data "lives" and how far it needs to travel between components becomes a real design problem, not an afterthought.',
        full:{ steps:[
          '"State" is any data that can change over time and affects what\u2019s rendered \u2014 a form\u2019s current input value, whether a modal is open, the currently logged-in user, a fetched list of results.',
          'Local state (owned by a single component) is the simplest and should be your default \u2014 not everything needs to be globally accessible, and over-centralising simple, component-specific state adds complexity for no benefit.',
          '"Lifting state up" means moving state to the nearest common parent of the components that need to share it, passing it down via props \u2014 the standard first solution before reaching for a dedicated state management library.',
          'Global state management (Pinia for Vue, Redux/Zustand/Context for React) becomes genuinely useful once state needs to be shared across many unrelated components (like the logged-in user, or a shopping cart), where passing props down through many layers ("prop drilling") becomes unwieldy.',
          'A common practical mistake is reaching for a global state library immediately, for everything, out of habit \u2014 it adds real complexity, and most component-local state genuinely should just stay local.'
        ] }
      },
      { id:'forms-validation', title:'Forms &amp; validation', summary:'Validate on both the client (fast feedback) and the server (the only validation that actually matters for security).',
        full:{ steps:[
          'Client-side validation (checking input as the user types, or on submit, before sending anything to the server) gives immediate feedback and a better user experience \u2014 catching an empty required field or an invalid email format instantly, rather than after a round-trip to the server.',
          'Server-side validation is not optional, even if client-side validation exists \u2014 a request can always be sent directly, bypassing your frontend entirely, so any validation that actually matters for data integrity or security MUST be enforced again on the server.',
          'HTML provides some built-in validation for free: <code>required</code>, <code>type="email"</code>, <code>pattern</code>, <code>minlength</code>/<code>maxlength</code> attributes on form inputs, handled by the browser without any JavaScript.',
          'Controlled inputs (in React/Vue) tie an input\u2019s displayed value directly to component state, updated on every keystroke \u2014 this is what allows real-time validation feedback and formatting as the user types.',
          'Good validation error messages are specific and actionable ("Password must be at least 8 characters" rather than just "Invalid input") \u2014 a genuinely underrated UX detail that\u2019s cheap to get right.'
        ] }
      },
      { id:'accessibility', title:'Accessibility (WCAG/ARIA)', summary:'Building interfaces that work properly with screen readers, keyboard navigation, and assistive technology \u2014 not an optional extra.',
        full:{ steps:[
          'WCAG (Web Content Accessibility Guidelines) is the standard reference for web accessibility, organised around four principles: content should be Perceivable, Operable, Understandable, and Robust.',
          'Using correct semantic HTML elements (see the HTML technology page) is the single highest-leverage accessibility practice \u2014 a <code>&lt;button&gt;</code> is keyboard-operable and screen-reader-announced as a button automatically; a <code>&lt;div&gt;</code> styled to look like a button gets none of that for free.',
          'ARIA (Accessible Rich Internet Applications) attributes add accessibility information HTML alone can\u2019t express \u2014 like <code>aria-label</code> for an icon-only button with no visible text, or <code>aria-expanded</code> on a collapsible menu toggle. The first rule of ARIA is to use semantic HTML instead wherever possible; ARIA is for filling genuine gaps, not a default.',
          'Keyboard navigation matters as much as screen-reader support \u2014 every interactive element should be reachable and operable using only Tab, Enter, and arrow keys, without requiring a mouse.',
          'Colour contrast (sufficient difference between text and background colour) and not relying on colour ALONE to convey meaning (like a red/green-only error state, inaccessible to colour-blind users) are simple, checkable requirements.',
          'This is a genuine, common interview and code-review topic, not a niche specialism \u2014 being able to name concrete practices (semantic HTML first, ARIA to fill gaps, full keyboard operability, sufficient contrast) demonstrates real awareness beyond just having heard the term.'
        ] }
      },
      { id:'pwa', title:'Progressive Web Apps (PWA)', summary:'Web apps that can be installed to a home screen, work offline, and feel closer to a native app \u2014 built from standard web technology.',
        full:{ steps:[
          'A PWA is a website built with additional capabilities \u2014 installability, offline support, and native-app-like behaviour \u2014 layered on top of standard HTML/CSS/JS, rather than a separate technology.',
          'A web app manifest (a JSON file) declares metadata like the app\u2019s name, icons, and colour theme, enabling "Add to Home Screen" functionality on mobile and desktop.',
          'A service worker is a script that runs separately from the main page, able to intercept network requests \u2014 this is what enables offline functionality, by serving cached content when the network is unavailable.',
          'Caching strategies determine exactly how a service worker decides what to serve: cache-first (fast, but can show stale content), network-first (always fresh when online, falls back to cache when offline), or a mix depending on the type of content.',
          'PWAs sit between a plain website and a native app in terms of capability \u2014 they can\u2019t access every native device API a true native app can, but for many apps (especially content and productivity apps) they get remarkably close, with a single codebase deployable everywhere a browser runs.'
        ] }
      },
    ],
  },
  {
    key:'backend', title:'Backend Development', color:'var(--slate)',
    icon:`<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14a8 3 0 0 0 16 0V5"/><path d="M4 12a8 3 0 0 0 16 0"/>`,
    blurb:'Servers, databases, and authentication.',
    topics:[
      { id:'server-architecture', title:'Server architecture basics', summary:'A web server receives requests, runs application logic, often talks to a database, and returns a response.',
        full:{ steps:[
          'At its simplest, a backend server listens on a port, receives HTTP requests, and returns responses \u2014 everything else (databases, business logic, authentication) builds on top of this.',
          'Most real applications separate concerns into layers: routing (matching a URL/method to the right code), controllers/handlers (the actual logic for that request), and a data layer (talking to the database).',
          'Statelessness matters for scalability \u2014 if a server doesn\u2019t rely on storing anything specific to a particular client between requests, any server instance behind a load balancer can handle any request, letting you scale horizontally (adding more servers) rather than being stuck with one.',
          'Environment separation (development, staging, production) with different configurations (database credentials, API keys, debug settings) is standard practice, keeping sensitive production credentials out of code that might be shared/committed.',
          'Logging and monitoring let you understand what\u2019s actually happening in a running production system \u2014 essential once an application is more complex than something you can fully reason about by reading the code alone.'
        ] }
      },
      { id:'building-rest-api', title:'Building a REST API', summary:'Designing clear, consistent resource-based endpoints and using HTTP methods/status codes correctly.',
        full:{ steps:[
          'Design URLs around resources (nouns), not actions: <code>/articles</code>, <code>/articles/42</code>, <code>/articles/42/comments</code> \u2014 not <code>/getArticle</code> or <code>/createComment</code>.',
          'Use HTTP methods to convey the action: GET to read, POST to create, PUT/PATCH to update, DELETE to remove \u2014 consistently, across the whole API.',
          'Return appropriate status codes: 200/201 for success, 400 for a malformed request, 401/403 for auth issues, 404 for a missing resource, 500 for a server-side failure \u2014 don\u2019t just return 200 for everything with an error message buried in the body.',
          'Validate and sanitise all incoming data before using it \u2014 never trust data from the client, even from your own frontend, since requests can be crafted directly (see the Security guides).',
          'Version your API (e.g. <code>/api/v1/...</code>) if you expect it to evolve, so you can make breaking changes without immediately breaking every existing client.',
          'Document endpoints clearly (tools like Swagger/OpenAPI are common) \u2014 an API that only the original author understands is a maintenance liability.'
        ] }
      },
      { id:'auth-vs-authz', title:'Authentication vs. authorization', summary:'Authentication confirms WHO you are; authorization determines WHAT you\u2019re allowed to do \u2014 easy to conflate, genuinely different concerns.',
        full:{ steps:[
          'Authentication answers "who is this user?" \u2014 typically via a username/password login, an OAuth flow (Sign in with Google, etc.), or an API key/token.',
          'Authorization answers "what is this authenticated user allowed to do?" \u2014 a logged-in user might still be forbidden from accessing another user\u2019s data, or from admin-only actions.',
          'These are separate steps that both need to happen: a request can be correctly authenticated (we know who you are) but still fail authorization (you\u2019re not allowed to do that specific thing) \u2014 this is the practical difference between a 401 and a 403 status code.',
          'Role-based access control (RBAC) is a common authorization pattern \u2014 users are assigned roles (admin, editor, viewer), and permissions are checked against those roles rather than against each individual user.',
          'Always enforce authorization on the SERVER, never rely on hiding a button in the frontend as the actual security measure \u2014 a user can call your API directly, bypassing your UI entirely.'
        ] }
      },
      { id:'sessions-vs-tokens', title:'Sessions vs. tokens (JWT)', summary:'Two different approaches to remembering a logged-in user across multiple requests, with different trade-offs.',
        full:{
          diagram:'jwtFlow', diagramCaption:'With token-based auth, the server verifies the token\u2019s cryptographic signature on each request, rather than looking up stored session state.',
          steps:[
            'HTTP itself is stateless \u2014 without some mechanism to remember a logged-in user, every single request would need to re-authenticate from scratch.',
            'Session-based auth: after login, the server creates a session record (often stored in memory or a database) and gives the client a session ID (usually via a cookie) \u2014 each subsequent request includes that ID, and the server looks up the corresponding session.',
            'Token-based auth (commonly JWT \u2014 JSON Web Token): after login, the server issues a signed token containing the user\u2019s identity/claims \u2014 the client sends this token with each request, and the server verifies its signature without needing to look anything up in storage.',
            'Sessions are easy to invalidate immediately (just delete the server-side record) but require server-side storage and don\u2019t scale across multiple servers quite as simply without shared session storage.',
            'Tokens (JWTs) scale well since verification needs no database lookup, but are harder to invalidate before their expiry (since the server isn\u2019t tracking them) \u2014 commonly mitigated with short expiry times plus a refresh token mechanism.'
          ]
        }
      },
      { id:'file-uploads-email', title:'File uploads &amp; email integration', summary:'Two common backend needs with the same underlying lesson: never fully trust what a user (or an email address) sends you.',
        full:{ steps:[
          'File uploads arrive as multipart form data \u2014 backend frameworks provide middleware (like <code>multer</code> in Express) to parse this and give you access to the uploaded file\u2019s data and metadata.',
          'Never trust the uploaded file\u2019s claimed type or the client-reported filename alone \u2014 validate the actual file content/type server-side, restrict allowed file types and maximum size, and generate a new safe filename rather than using the user-supplied one directly (which could contain path traversal attempts or unexpected characters).',
          'Uploaded files are commonly stored in cloud object storage (like AWS S3) rather than directly on the application server\u2019s own disk \u2014 keeps the server stateless (important for horizontal scaling) and offloads serving that content efficiently.',
          'For sending emails (password resets, notifications, receipts), applications typically use a transactional email service (like SendGrid, Postmark, or AWS SES) rather than sending directly from the application server \u2014 improves deliverability and avoids your server\u2019s IP getting flagged as a spam source.',
          'Email addresses should be validated for basic format server-side, but the only truly reliable confirmation that an email address is real and accessible is actually sending something to it (like a verification link) and confirming the user can act on it.'
        ] }
      },
      { id:'error-handling-logging', title:'Error handling &amp; logging', summary:'How a backend fails gracefully, and how you find out what actually went wrong after the fact, in a system you\u2019re not staring at live.',
        full:{ steps:[
          'Centralised error handling (a single place that catches unhandled errors across the application) ensures failures return a consistent, safe response rather than crashing the whole server or leaking internal details to the client.',
          'Never expose raw error messages, stack traces, or internal details directly to the client in a production response \u2014 log the full detail server-side for debugging, but return a generic, safe message to the user.',
          'Distinguish expected errors (a user submitted invalid data, a resource wasn\u2019t found \u2014 handle these gracefully with an appropriate status code) from unexpected errors (a genuine bug, a database connection failure \u2014 these need logging and alerting, since they indicate something needs fixing).',
          'Structured logging (consistent format, including severity level, timestamp, and relevant context like a request ID) makes logs actually searchable and useful later, rather than being a wall of unstructured text nobody can query effectively.',
          'In production, logs are typically shipped to a centralised logging/monitoring service rather than just sitting in a file on one server \u2014 essential once you have more than one server instance, since you can\u2019t practically SSH into every instance individually to check local log files.'
        ] }
      },
      { id:'input-validation-api-integration', title:'Input validation &amp; consuming external APIs', summary:'Validating what comes IN to your backend, and handling the reality that external APIs you depend on WILL sometimes fail or change.',
        full:{ steps:[
          'Validate every piece of incoming data against an explicit schema (expected types, required fields, allowed ranges/formats) before using it \u2014 libraries like Zod or Joi (in the Node ecosystem) let you define this once and get both validation and, with TypeScript, matching types for free.',
          'Validate at the boundary \u2014 as early as possible when data enters your system \u2014 rather than trusting it\u2019s already valid deeper in your business logic, where a validation gap is much harder to trace back to its source.',
          'When consuming a third-party API, always handle failure cases explicitly: the API can be slow, return an error, return unexpected data, or simply be down \u2014 code that assumes external calls always succeed will eventually break in production.',
          'Set explicit timeouts on outgoing requests to external APIs \u2014 without one, a slow or hanging third-party service can tie up your own server\u2019s resources indefinitely, turning their problem into your outage too.',
          'For external APIs you depend on heavily, consider what happens if that specific call fails: is there a sensible fallback, a cached previous value to serve instead, or does the whole request genuinely need to fail? Not every dependency failure should be equally catastrophic to the user.'
        ] }
      },
    ],
  },
  {
    key:'security', title:'Security', color:'var(--red)',
    icon:`<path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6Z"/>`,
    blurb:'The vulnerabilities every developer needs to understand and prevent.',
    topics:[
      { id:'xss-explained', title:'XSS (Cross-Site Scripting) explained', summary:'An attacker injects malicious script into a page that other users then unknowingly execute in their browser.',
        full:{ steps:[
          'XSS happens when an application includes untrusted (attacker-supplied) data in a page without properly escaping it, letting that data be interpreted as executable script by other users\u2019 browsers.',
          'Stored XSS: malicious script is saved (e.g. in a comment field) and served to every user who later views that content.',
          'Reflected XSS: malicious script is included in a request (often a crafted URL) and immediately reflected back in the response, tricking a victim into clicking a malicious link.',
          'Prevention: always escape/encode output based on context (HTML-encode for HTML content, JS-encode for script contexts) before inserting untrusted data into a page \u2014 most modern frameworks (React, Vue) do this automatically by default, which is a genuine security benefit, not just convenience.',
          'A Content Security Policy (CSP) header adds a further layer of defence, restricting which scripts are allowed to execute on your page at all, even if an injection somehow gets through.'
        ] }
      },
      { id:'csrf-explained', title:'CSRF (Cross-Site Request Forgery) explained', summary:'Tricks a logged-in user\u2019s browser into making an unwanted request to a site they\u2019re authenticated on.',
        full:{ steps:[
          'CSRF exploits the fact that browsers automatically attach cookies (including session cookies) to requests to a domain, regardless of which page/site actually triggered that request.',
          'An attacker crafts a malicious page (or email link) that, when visited by a logged-in victim, causes their browser to send a request to the target site \u2014 like a form auto-submitting to "transfer funds" or "change email" \u2014 using the victim\u2019s own valid session cookie.',
          'The victim doesn\u2019t need to click anything obviously suspicious \u2014 just visiting the malicious page while logged into the target site elsewhere can be enough, since the browser sends cookies automatically.',
          'Prevention: CSRF tokens \u2014 a unique, unpredictable value included in legitimate forms/requests from your own site, which the server checks and rejects if missing or wrong (an attacker\u2019s external page has no way to know this token).',
          'The <code>SameSite</code> cookie attribute is a modern, complementary defence \u2014 it restricts a cookie from being sent along with cross-site requests at all in many scenarios.'
        ] }
      },
      { id:'sql-injection', title:'SQL injection explained', summary:'Malicious input manipulates a database query when user input is inserted directly into SQL as raw text.',
        full:{ steps:[
          'SQL injection happens when user-supplied input is concatenated directly into a SQL query string, letting an attacker inject their own SQL logic instead of the intended data.',
          'A classic example: a login query built as <code>"SELECT * FROM users WHERE username = &#39;" + input + "&#39;"</code> \u2014 an attacker entering <code>&#39; OR 1=1 --</code> can manipulate the query\u2019s actual logic entirely.',
          'The impact can range from bypassing authentication, to reading data the attacker shouldn\u2019t access, to modifying or deleting data outright, depending on the database permissions involved.',
          'Prevention: always use parameterised queries (prepared statements) rather than string concatenation \u2014 the database driver handles escaping the input safely, treating it strictly as data, never as executable SQL.',
          'ORMs (Object-Relational Mappers) generally protect against this automatically when used correctly, since they build parameterised queries under the hood \u2014 but raw/custom queries within an ORM can still reintroduce the vulnerability if not written carefully.'
        ] }
      },
      { id:'https-tls', title:'HTTPS &amp; TLS explained', summary:'Encrypts data in transit between client and server, and verifies the server\u2019s identity via a certificate.',
        full:{ steps:[
          'HTTPS is HTTP layered over TLS (Transport Layer Security) \u2014 it encrypts data in transit and verifies you\u2019re actually talking to the server you think you are, not an impersonator.',
          'Without HTTPS, anyone able to observe network traffic (on public WiFi, a compromised router, etc.) can read everything sent \u2014 including passwords and session cookies \u2014 in plain text.',
          'A TLS handshake happens before any HTTP data is exchanged: the client and server agree on encryption parameters, and the server proves its identity using a certificate signed by a trusted Certificate Authority.',
          'Certificates are issued for specific domains and expire, requiring renewal \u2014 an expired or mismatched certificate is why browsers show security warnings.',
          'Modern browsers increasingly treat plain HTTP as actively insecure (warning users, disabling certain features like geolocation) \u2014 HTTPS is now the default expectation for essentially any production site, not an optional extra.'
        ] }
      },
      { id:'cors-explained', title:'CORS explained', summary:'A browser security mechanism controlling which other domains a web page is allowed to make requests to.',
        full:{ steps:[
          'CORS (Cross-Origin Resource Sharing) is a browser-enforced security mechanism \u2014 by default, a page loaded from one origin (domain + protocol + port) is restricted from making certain requests to a different origin.',
          'This is a BROWSER protection, not a server one \u2014 it protects users from malicious pages making unauthorized requests to other sites using their credentials, not the server from attack directly.',
          'For a legitimate cross-origin request to succeed, the SERVER being requested must explicitly opt in, via response headers like <code>Access-Control-Allow-Origin</code>, specifying which origins are permitted.',
          'For some request types (like those with custom headers, or non-simple methods), the browser first sends an automatic "preflight" OPTIONS request to check permissions before sending the actual request.',
          'A common beginner confusion: CORS errors happen in the BROWSER console, and are about the browser blocking the response from reaching your JavaScript \u2014 the request often still reaches the server and executes, but the browser withholds the response from your script if CORS isn\u2019t configured correctly.'
        ] }
      },
      { id:'password-storage', title:'Password storage best practices', summary:'Never store passwords in plain text \u2014 use a proper, slow, salted hashing algorithm designed specifically for passwords.',
        full:{ steps:[
          'Never store passwords in plain text \u2014 if your database is ever breached, every user\u2019s password (and likely their reused passwords on other sites) is immediately compromised.',
          'Never use fast general-purpose hashing algorithms (like plain MD5 or SHA-256) for passwords \u2014 their speed is exactly the problem, since it makes brute-force guessing attacks fast for an attacker too.',
          'Use a purpose-built password hashing algorithm designed to be deliberately slow and resource-intensive: bcrypt, scrypt, or Argon2 are the current standard recommendations.',
          'These algorithms automatically handle "salting" (adding random data to each password before hashing) \u2014 this ensures two users with the same password get completely different stored hashes, and defeats precomputed "rainbow table" attacks.',
          'When a user logs in, you don\u2019t "decrypt" the stored hash \u2014 you hash their entered password the same way and compare the two hashes; a correctly-implemented password hash is not reversible.'
        ] }
      },
      { id:'secure-cookies-headers', title:'Secure cookies &amp; security headers', summary:'A handful of cookie flags and HTTP headers that meaningfully reduce a site\u2019s attack surface, at almost zero implementation cost.',
        full:{ steps:[
          'The <code>HttpOnly</code> cookie flag prevents JavaScript from reading that cookie at all \u2014 a critical defence for session/auth cookies specifically, since it means even a successful XSS injection can\u2019t simply read and steal the cookie via <code>document.cookie</code>.',
          'The <code>Secure</code> flag ensures a cookie is only ever sent over HTTPS, never in plain HTTP \u2014 preventing it from being exposed if a connection is ever downgraded or intercepted.',
          'The <code>SameSite</code> flag restricts whether a cookie is sent along with cross-site requests \u2014 <code>Strict</code> or <code>Lax</code> settings are a genuinely effective, modern layer of CSRF defence (see the CSRF guide) on top of CSRF tokens.',
          '<code>Content-Security-Policy</code> (CSP) restricts which sources of scripts, styles, and other resources a browser is allowed to load/execute for your page \u2014 a strong defence-in-depth measure even if an XSS injection somehow gets through.',
          'Other useful security headers: <code>X-Content-Type-Options: nosniff</code> (stops the browser guessing/overriding a declared content type), <code>Strict-Transport-Security</code> (tells browsers to always use HTTPS for your domain going forward, even if a user types plain HTTP), and <code>X-Frame-Options</code> (prevents your site being embedded in a malicious iframe on another site, a technique called clickjacking).'
        ] }
      },
      { id:'api-security-rate-limiting', title:'API security &amp; rate limiting', summary:'Protecting an API from abuse, brute-forcing, and simply being overwhelmed \u2014 on top of the authentication/authorization already covered.',
        full:{ steps:[
          'Rate limiting caps how many requests a client (identified by IP, API key, or user account) can make within a given time window \u2014 protects against brute-force login attempts, scraping, and a single client accidentally or deliberately overwhelming your service.',
          'A well-designed rate-limited API returns a clear <code>429 Too Many Requests</code> status when the limit is hit, often with a <code>Retry-After</code> header telling the client when they can try again.',
          'API keys identify and authenticate which application/client is calling your API (distinct from user authentication) \u2014 letting you track usage per integration, revoke access to a specific misbehaving client, and apply different rate limits to different consumers.',
          'Always validate and sanitise input on every API endpoint, exactly as you would for a regular web form \u2014 an API has no browser sitting in front of it enforcing anything, so it\u2019s just as exposed to malicious input as any other entry point, arguably more so since it\u2019s a more direct, common attack target.',
          'For sensitive operations, consider requiring re-authentication or an additional confirmation step even for an already-authenticated session (e.g. re-entering a password before changing account email/payment details) \u2014 a stolen session shouldn\u2019t automatically grant access to the most sensitive actions.'
        ] }
      },
      { id:'secrets-dependency-security', title:'Secrets management &amp; dependency security', summary:'Two of the most common real-world sources of breaches: leaked credentials, and vulnerabilities in third-party code you didn\u2019t write.',
        full:{ steps:[
          'Never commit secrets (API keys, database passwords, signing keys) directly into source code or version control \u2014 even in a private repository, this is a very common and serious real-world source of breaches, and history in version control is hard to fully scrub once committed.',
          'Use environment variables (loaded from a <code>.env</code> file in development, and from your hosting platform\u2019s secure configuration in production) to inject secrets at runtime instead \u2014 keep the <code>.env</code> file itself out of version control via <code>.gitignore</code>.',
          'For production systems, a dedicated secrets manager (like AWS Secrets Manager, HashiCorp Vault, or a cloud provider\u2019s equivalent) provides stronger guarantees than plain environment variables alone \u2014 access control, rotation, and audit logging of who accessed which secret and when.',
          'Modern applications depend on many third-party packages (via npm, and their own dependencies in turn) \u2014 any one of them having a known vulnerability can expose your entire application, even though you didn\u2019t write that code yourself.',
          'Tools like <code>npm audit</code> (built into npm) or GitHub\u2019s Dependabot automatically scan your dependencies against known vulnerability databases and can flag or even automatically raise a fix \u2014 running these regularly (and actually acting on what they find) is a genuinely important, often-neglected part of maintaining a production application.'
        ] }
      },
    ],
  },
  {
    key:'career', title:'Career &amp; Employment', color:'var(--amber)',
    icon:`<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`,
    blurb:'Git, interview prep, and understanding the roles.',
    topics:[
      { id:'git-basics', title:'Git &amp; version control basics', summary:'Tracks changes to code over time, and enables collaboration through branching and merging \u2014 an absolute baseline expectation for employment.',
        full:{
          diagram:'gitBranching', diagramCaption:'Work happens on a separate branch, then merges back into the main line once complete \u2014 letting multiple people/features progress without stepping on each other.',
          steps:[
            'Git tracks changes to files over time, letting you see history, revert mistakes, and work on features in isolation from the main codebase via branches.',
            '<code>git commit</code> saves a snapshot of your current changes with a descriptive message; <code>git push</code> sends your local commits to a remote repository (like GitHub); <code>git pull</code> fetches and merges changes others have pushed.',
            'A branch is an independent line of development \u2014 typically you create a new branch for each feature/fix, work there without affecting the main branch, then merge it back in once complete (often via a "pull request" for review first).',
            'Merge conflicts happen when the same lines of a file were changed differently on two branches being merged \u2014 Git flags these for manual resolution rather than guessing which change should win.',
            'A clear commit history (small, focused commits with descriptive messages) and comfort with the basic workflow (branch, commit, push, pull request) is a genuinely universal expectation in any development job \u2014 worth being solid on this before an interview, not learning it on the job.'
          ]
        }
      },
      { id:'interview-topics', title:'Common technical interview topics', summary:'What actually gets asked, across frontend, backend, and general computer science fundamentals.',
        full:{ steps:[
          'Expect language fundamentals questions (closures, hoisting, <code>this</code> in JavaScript; specificity in CSS; the request lifecycle in your backend language of choice) \u2014 not usually obscure trivia, but the concepts covered in this app\u2019s Technologies section.',
          'Expect at least some basic data structures/algorithms questions, even for web roles \u2014 arrays, objects/hashmaps, and basic time complexity (Big O) awareness are common baseline expectations, even if deep algorithmic interviews are more associated with larger tech companies.',
          'Be ready to explain a project you\u2019ve built in detail \u2014 not just what it does, but WHY you made specific technical decisions, what trade-offs you considered, and what you\u2019d do differently now.',
          'System design questions (even simplified, for junior roles) test whether you understand how pieces fit together \u2014 practice explaining, at a whiteboard level, how you\u2019d structure a simple app\u2019s frontend/backend/database interaction.',
          'Security awareness is increasingly explicitly tested \u2014 be ready to discuss XSS, SQL injection, and basic authentication/authorization concepts, even for frontend-leaning roles.',
          'Soft factors matter too: clearly explaining your thought process out loud during a problem (even an unfinished one) is often valued as much as reaching a correct final answer.'
        ] }
      },
      { id:'frontend-backend-fullstack', title:'Frontend vs. backend vs. full-stack', summary:'Understanding what each role actually focuses on day-to-day helps you target learning and job applications more effectively.',
        full:{ steps:[
          'Frontend developers focus on what runs in the browser: HTML/CSS/JS, UI/UX implementation, frameworks like React/Vue/Angular, accessibility, performance, and responsive design.',
          'Backend developers focus on server-side logic: APIs, databases, authentication, business logic, server architecture, and often infrastructure/deployment concerns.',
          'Full-stack developers work across both \u2014 in practice, most full-stack developers still have a stronger side (frontend-leaning or backend-leaning), since genuinely deep expertise in absolutely everything is rare.',
          'Smaller companies/startups often expect more full-stack flexibility out of necessity (fewer specialised roles to distribute work across); larger companies more often have distinctly specialised frontend/backend teams.',
          'When job-hunting, read the actual job description carefully rather than just the title \u2014 "full-stack" roles vary hugely in practice between companies in how evenly split the actual day-to-day work really is.'
        ] }
      },
      { id:'building-portfolio', title:'Building a developer portfolio', summary:'A small number of genuinely complete, well-explained projects beats many unfinished/shallow ones.',
        full:{ steps:[
          'Quality over quantity: 2-3 genuinely complete, polished projects demonstrate more than ten abandoned or barely-functional ones.',
          'Include a mix that shows range if possible \u2014 at least one project with a real backend/database (not just a static frontend page), and ideally one deployed and actually usable online, not just source code sitting in a repository.',
          'Write a clear README for each project: what it does, why you built it, what you learned, and any notable technical decisions \u2014 this is often the first thing a reviewer actually reads, before diving into code.',
          'Clean, readable code with sensible commit history matters more than reviewers often say out loud \u2014 it\u2019s frequently a real (if unstated) factor in technical screening.',
          'A project solving a genuine problem you personally encountered (even a small one) tends to stand out more, and is easier to talk about with real enthusiasm in an interview, than a generic tutorial clone with nothing added or changed.'
        ] }
      },
    ],
  },
  {
    key:'testing', title:'Testing &amp; Quality', color:'var(--purple)',
    icon:`<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>`,
    blurb:'What to test, at which layer, and why it matters more than the specific tool.',
    topics:[
      { id:'unit-testing', title:'Unit testing', summary:'Tests a single, isolated piece of logic (usually one function) in complete isolation from everything else.',
        full:{ steps:[
          'A unit test verifies one small piece of logic in isolation \u2014 typically a single function \u2014 with all external dependencies (database calls, API requests, other modules) replaced by mocks or stubs.',
          'Because everything external is faked, unit tests run extremely fast and don\u2019t depend on a database, network, or any other running service \u2014 this is exactly what makes them practical to run constantly during development.',
          'Good unit tests follow an Arrange-Act-Assert pattern: set up the input/state, call the function being tested, then assert the output matches what\u2019s expected.',
          'Aim to test behaviour and edge cases (empty input, invalid input, boundary values) rather than just the "happy path" \u2014 the happy path is usually the least likely place a real bug hides.',
          'Popular tools: Vitest and Jest are the dominant choices in the JavaScript/TypeScript ecosystem, both providing test runners, assertion syntax, and built-in mocking.'
        ] }
      },
      { id:'integration-testing', title:'Integration testing', summary:'Tests that multiple pieces actually work correctly together \u2014 e.g. your API route talking to a real (test) database.',
        full:{ steps:[
          'Integration tests verify that multiple parts of a system work correctly together \u2014 for example, that an API route correctly reads from and writes to an actual (test) database, rather than mocking the database away entirely.',
          'These tests are slower and more complex to set up than unit tests (often needing a real or test-specific database, and sometimes other services), but they catch a category of bugs unit tests structurally can\u2019t \u2014 like an incorrect SQL query that a mocked database would never expose.',
          'A common practical setup: a separate test database that\u2019s reset to a known state before each test run, so tests are reliable and don\u2019t interfere with each other or with real data.',
          'Integration tests sit between unit tests (fast, narrow, isolated) and end-to-end tests (slow, broad, closest to real user behaviour) \u2014 a reasonable testing strategy uses all three at different proportions, not just one.'
        ] }
      },
      { id:'e2e-testing', title:'End-to-end (E2E) testing', summary:'Tests the whole application the way a real user actually would \u2014 clicking through an actual browser against a running app.',
        full:{ steps:[
          'End-to-end tests drive a real (often headless) browser through your actual application \u2014 clicking buttons, filling forms, navigating between pages \u2014 verifying the whole system works together from the user\u2019s perspective.',
          'These are the slowest and most brittle tests (a small UI change can break a test that isn\u2019t really about that UI element), so they\u2019re typically used more sparingly, covering critical user flows (login, checkout, core actions) rather than exhaustively testing every possible interaction.',
          'Playwright and Cypress are the dominant modern tools for E2E testing in web development, both able to drive real browsers programmatically and make assertions about what\u2019s actually rendered on screen.',
          'A healthy testing strategy is often described as a "pyramid": many fast unit tests at the base, a moderate number of integration tests in the middle, and a small number of E2E tests at the top covering only the most critical paths.'
        ] }
      },
      { id:'mocking-fixtures', title:'Mocking &amp; test fixtures', summary:'Replacing real dependencies with controlled fake versions, and using consistent starting data, to make tests reliable and fast.',
        full:{ steps:[
          'A mock is a fake version of a real dependency (an API call, a database, a third-party service) that returns predictable, controlled data instead of the real thing \u2014 this is what makes unit tests fast and independent of external systems being available/working.',
          'A "spy" is similar to a mock but also records how it was called (how many times, with what arguments) \u2014 useful for asserting that a function was actually invoked correctly, not just checking its return value.',
          'Test fixtures are consistent, predefined sets of test data (a sample user object, a sample API response) used across multiple tests \u2014 keeping tests focused on behaviour rather than repeatedly redefining the same setup data.',
          'Over-mocking is a real pitfall: if you mock so much that a test no longer resembles how the code actually behaves in production, the test can pass while the real system is broken \u2014 mock genuinely external dependencies, not the logic you\u2019re actually trying to verify.',
          'API testing tools like Postman (or its command-line equivalents) let you manually or automatically verify an API\u2019s actual behaviour \u2014 useful both during development and as a form of integration testing against a real running server.'
        ] }
      },
    ],
  },
  {
    key:'architecture', title:'Software Architecture', color:'var(--navy)',
    icon:`<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>`,
    blurb:'How well-structured applications are organised and how they scale.',
    topics:[
      { id:'client-server-mvc', title:'Client/server architecture &amp; MVC', summary:'MVC separates an application into Model (data), View (presentation), and Controller (logic connecting the two) \u2014 a foundational separation-of-concerns pattern.',
        full:{ steps:[
          'MVC (Model-View-Controller) is a pattern for organising an application into three distinct responsibilities: the Model manages data and business rules, the View handles presentation/display, and the Controller sits between them, handling input and coordinating what happens.',
          'The core idea behind MVC \u2014 and behind "separation of concerns" more broadly \u2014 is that each part of the system should have one clear job, making the codebase easier to understand, test, and change without unrelated parts breaking.',
          'In a typical web backend, a "controller" receives an HTTP request, calls into business logic (sometimes a separate "service" layer) to do the actual work, and returns an appropriate response \u2014 keeping HTTP-specific concerns out of your core business logic.',
          'Dependency injection is a related concept: instead of a piece of code creating its own dependencies directly (like instantiating a database connection itself), those dependencies are "injected" in from outside \u2014 making the code easier to test (you can inject a fake/mock dependency) and more flexible to reconfigure.',
          'The repository pattern is a common practical application of this \u2014 a "repository" object handles all database access for a particular type of data, so the rest of the application doesn\u2019t need to know or care about the specific database/query details underneath.'
        ] }
      },
      { id:'monolith-vs-microservices', title:'Monoliths vs. microservices', summary:'A monolith is one deployable application; microservices split functionality into multiple independently deployable services \u2014 each with real trade-offs.',
        full:{ steps:[
          'A monolith is a single application containing all of an app\u2019s functionality, deployed and run as one unit \u2014 simpler to develop, test, and deploy initially, since everything lives and runs together.',
          'Microservices split an application into multiple smaller, independently deployable services, each typically owning a specific piece of functionality (e.g. a separate "users" service, "payments" service, "notifications" service), communicating over the network (often via REST APIs or message queues).',
          'Microservices add real complexity: network communication between services can fail in ways in-process function calls never do, debugging a request across multiple services is harder, and you need infrastructure (service discovery, monitoring, orchestration) that a monolith simply doesn\u2019t need.',
          'The genuine benefits of microservices are largely organisational at scale: different teams can develop, deploy, and scale their own services independently \u2014 valuable in a large company with many teams, much less valuable for a small team or early-stage product.',
          'A well-structured monolith (with clean internal separation of concerns) often teaches more transferable fundamentals than jumping straight to microservices, and remains a completely legitimate, common architecture choice \u2014 "start with a monolith, split out services later if you genuinely need to" is a very common, sensible piece of real-world advice.'
        ] }
      },
      { id:'caching-queues-cdns', title:'Caching, queues, and CDNs', summary:'Three different techniques for making an application faster and more resilient under real-world load.',
        full:{ steps:[
          'Caching stores the result of an expensive operation (a slow database query, a complex calculation) so a later, identical request can be served instantly from the cache instead of redoing the work \u2014 Redis is a very common in-memory cache used for this.',
          'Cache invalidation (knowing when cached data is stale and needs refreshing) is a genuinely hard, common source of bugs \u2014 famously one of the "two hard things in computer science," alongside naming things.',
          'A queue lets you defer work to be processed later, outside the immediate request/response cycle \u2014 useful for anything that doesn\u2019t need to finish before responding to the user, like sending a confirmation email or processing an uploaded video.',
          'Background job processing (using a queue) keeps your main application responsive \u2014 a user doesn\u2019t wait for a slow email-sending process to finish before their request completes; the work happens separately.',
          'A CDN (Content Delivery Network) caches and serves static assets (images, CSS, JS files) from servers physically distributed around the world, so users download them from a location close to them rather than always hitting your single origin server \u2014 dramatically improving load times for geographically distributed users.'
        ] }
      },
      { id:'scaling-load-balancing', title:'Horizontal vs. vertical scaling &amp; load balancers', summary:'Two different ways to handle more traffic than a single server can manage, and the component that distributes load across multiple servers.',
        full:{ steps:[
          'Vertical scaling means making a single server more powerful (more CPU, more RAM) \u2014 simple, but has a hard ceiling (there\u2019s always a biggest server you can buy) and creates a single point of failure.',
          'Horizontal scaling means running multiple instances of your application across multiple servers, splitting traffic between them \u2014 in principle has no hard ceiling, and if one server fails, others keep serving traffic.',
          'A load balancer sits in front of multiple server instances, distributing incoming requests across them (using strategies like round-robin, or routing based on current server load) \u2014 the component that actually makes horizontal scaling work in practice.',
          'Horizontal scaling requires your application to be stateless (not relying on data stored only in one specific server\u2019s memory) \u2014 this is exactly why statelessness matters so much in modern backend design (see the Sessions vs. Tokens guide for a concrete example of this trade-off).',
          'Database replication (running copies of your database, often with one "primary" handling writes and multiple "replicas" handling reads) is a related scaling technique specifically for the data layer, letting read-heavy applications distribute query load across several database instances.'
        ] }
      },
    ],
  },
  {
    key:'devtools', title:'Development Tools &amp; Workflow', color:'var(--amber)',
    icon:`<path d="m14.7 6.3 3 3L8 19H5v-3Z"/><path d="M17.5 3.5a2.1 2.1 0 0 1 3 3L18 9l-3-3Z"/>`,
    blurb:'The daily-driver tools around the code itself.',
    topics:[
      { id:'browser-devtools', title:'Browser DevTools &amp; debugging', summary:'Built into every modern browser \u2014 the primary tool for inspecting, debugging, and understanding a running web page.',
        full:{ steps:[
          'The Elements panel shows the live DOM and applied CSS \u2014 lets you inspect and temporarily edit HTML/CSS directly in the browser to test a fix before touching actual code, and see exactly which CSS rule (and from which stylesheet) is winning for any given element.',
          'The Console panel shows logged output (<code>console.log()</code> and similar), warnings, and errors \u2014 including a full stack trace for JavaScript errors, showing exactly which line and call chain caused it.',
          'The Network panel shows every request the page makes \u2014 status codes, timing, headers, and response bodies \u2014 essential for diagnosing a failed API call, a slow-loading asset, or confirming a request is actually being sent with the data/headers you expect.',
          'The Sources panel lets you set breakpoints in JavaScript code, pausing execution at a specific line to step through what\u2019s happening and inspect variable values at that exact moment \u2014 far more precise and informative than scattering <code>console.log()</code> statements everywhere.',
          'The Application panel shows stored data: cookies, localStorage/sessionStorage, and (relevant to PWAs) registered service workers and their cache contents.',
          'Learning to read a stack trace properly \u2014 starting from the top (where the error actually occurred) and reading down through the call chain that led there \u2014 is a genuinely foundational debugging skill that pays off constantly.'
        ] }
      },
      { id:'ide-productivity', title:'VS Code &amp; IDE productivity', summary:'The editor is where you spend most of your working time \u2014 a handful of features and habits meaningfully speed up daily development.',
        full:{ steps:[
          'VS Code is the dominant editor for web development \u2014 free, extensible, with strong built-in support for JavaScript/TypeScript and a vast extension ecosystem for virtually every other language/framework.',
          'Integrated terminal, built-in Git support (view diffs, stage changes, commit) and an integrated debugger mean you rarely need to leave the editor for core daily tasks.',
          'Multi-cursor editing (select multiple locations and type/edit them simultaneously) and "Go to Definition" / "Find All References" (jump directly to where something is defined, or see everywhere it\u2019s used) are two of the highest-value features for navigating and editing a real codebase efficiently.',
          'A consistent code formatter (like Prettier) and linter (like ESLint), configured to run automatically on save, remove an entire category of tedious manual formatting/style debate and catch a class of bugs before you even run the code.',
          'Learning your editor\u2019s keyboard shortcuts for common actions (quick file open, search across the whole project, rename symbol) genuinely compounds over a career \u2014 small, frequent time savings add up dramatically more than a one-off large optimisation would.'
        ] }
      },
      { id:'package-management', title:'Package &amp; dependency management', summary:'How third-party code gets included in your project, tracked, and kept consistent across every machine that runs it.',
        full:{ steps:[
          '<code>package.json</code> lists your project\u2019s dependencies (and their allowed version ranges), along with metadata and defined scripts (like <code>npm run build</code>) for common project tasks.',
          'A lockfile (<code>package-lock.json</code> for npm, or equivalent for other package managers) records the EXACT version of every dependency (and every dependency of those dependencies) actually installed \u2014 ensuring everyone on a team, and your production deployment, get identical dependency versions, not just "compatible" ones.',
          'Semantic versioning (semver) gives version numbers a consistent meaning: MAJOR.MINOR.PATCH \u2014 a major version bump signals breaking changes, minor adds functionality without breaking existing usage, patch is a bug fix with no functional change.',
          'The <code>node_modules</code> folder (where actual dependency code lives) is never committed to version control \u2014 it\u2019s regenerated from <code>package.json</code>/the lockfile via <code>npm install</code>, kept out via <code>.gitignore</code>.',
          'Regularly updating dependencies (rather than leaving a project untouched for years) matters for both security (see the Secrets &amp; Dependency Security guide) and avoiding a painful, large, all-at-once upgrade later when an old dependency is finally forced to change.'
        ] }
      },
      { id:'vite-build-tools', title:'Vite &amp; modern build tools', summary:'Transforms your source code (JSX, TypeScript, modern JS, SCSS) into an optimised bundle browsers can actually run efficiently.',
        full:{ steps:[
          'Browsers don\u2019t natively understand everything modern development uses \u2014 JSX, TypeScript, and some newer JavaScript syntax need to be compiled/transformed into plain JavaScript a browser can execute; a build tool handles this automatically.',
          'Vite (now the standard choice for new Vue and increasingly React projects) provides an extremely fast development server using native ES modules, and bundles/optimises your code for production with a separate build step.',
          'During development, Vite serves your code with near-instant startup and hot module replacement (HMR) \u2014 changes appear in the browser almost immediately without a full page reload, preserving application state as you edit.',
          'For production, the build step bundles your code into optimised, minified files \u2014 combining many small files into fewer larger ones, removing unused code (tree-shaking), and generating cache-friendly filenames.',
          'Environment variables in a Vite project are typically defined in <code>.env</code> files and exposed to your code with a specific prefix (like <code>VITE_</code>) \u2014 a deliberate safety measure, ensuring only variables you explicitly intend to expose to client-side code actually end up in the browser bundle.'
        ] }
      },
    ],
  },
];

/* Academy dashboard: local progress, recent lesson, and learning pathways. */
function rememberAcademyLesson(type, id, category){
  try{localStorage.setItem('webpro-academy-recent',JSON.stringify({type,id,category:category||null}));}catch{}
}
function academyResume(){
  let recent=null;try{recent=JSON.parse(localStorage.getItem('webpro-academy-recent')||'null')}catch{}
  if(recent?.type==='tech' && TECHNOLOGIES.some(t=>t.id===recent.id))return openTech(recent.id);
  if(recent?.type==='guide' && GUIDE_CATEGORIES.some(c=>c.key===recent.category && c.topics.some(t=>t.id===recent.id)))return openTopic(recent.category,recent.id);
  return openCategory('how-it-works');
}
function renderAcademyDashboard(){
  const lessons=[...TECHNOLOGIES.map(t=>'tech-'+t.id),...GUIDE_CATEGORIES.flatMap(c=>c.topics.map(t=>'guide-'+t.id))];
  const unique=[...new Set(lessons)];
  let completed=0;for(const key of unique){try{if(localStorage.getItem('webpro-lesson-'+key)==='1')completed++}catch{}}
  const pct=unique.length?Math.round(completed/unique.length*100):0;
  const set=(id,val)=>{const el=document.getElementById(id);if(el)el.textContent=val};
  set('academyPercent',pct+'%');set('academyCompleted',completed+' lessons reviewed');set('academyTotal',unique.length+' lessons available');
  const ring=document.getElementById('academyRing');if(ring){ring.style.setProperty('--academy-pct',pct+'%');ring.setAttribute('aria-label',pct+' percent complete')}
  const fill=document.getElementById('academyProgressFill');if(fill)fill.style.width=pct+'%';
  const track=document.getElementById('academyProgressTrack');if(track)track.setAttribute('aria-valuenow',String(pct));
  let recent=null;try{recent=JSON.parse(localStorage.getItem('webpro-academy-recent')||'null')}catch{}
  let lesson=null;if(recent?.type==='tech')lesson=TECHNOLOGIES.find(t=>t.id===recent.id);
  if(recent?.type==='guide')lesson=GUIDE_CATEGORIES.find(c=>c.key===recent.category)?.topics.find(t=>t.id===recent.id);
  if(lesson){set('academyContinueTitle',lesson.title);set('academyContinueDesc',lesson.summary||'Continue your learning journey.');set('academyContinueBtn','Continue lesson →')}
}
/* =====================================================================
   VIEW SWITCHING
===================================================================== */
function showView(name, param, direction, exitDirection){
  direction = direction || 'push';
  exitDirection = exitDirection || direction;
  const next = document.getElementById('view-' + name);
  const current = document.querySelector('.view.active');

  if (name === 'home') renderHome();
  if (name === 'technologies') renderTechList();
  if (name === 'guides') renderCategoriesList();
  if (name === 'search') setTimeout(() => document.getElementById('globalSearch').focus(), 30);

  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  const tabMap = { home:'tabHome', technologies:'tabTechnologies', 'tech-detail':'tabTechnologies', guides:'tabGuides', category:'tabGuides', topic:'tabGuides', search:'tabSearch' };
  const tabId = tabMap[name];
  if (tabId) document.getElementById(tabId).classList.add('active');

  const enterClass = 'enter-' + direction;
  const exitClass = 'exit-' + exitDirection;

  if (current && current !== next) {
    current.classList.remove('active', 'enter-push', 'enter-pop');
    current.classList.add(exitClass);
    setTimeout(() => { current.classList.remove(exitClass); }, 320);
  }

  next.classList.remove('exit-push', 'exit-pop');
  next.classList.add('active', enterClass);
  window.scrollTo(0, 0);
  setTimeout(() => { next.classList.remove(enterClass); }, 320);
}

/* =====================================================================
   RENDER: HOME + TECHNOLOGIES
===================================================================== */
function techRow(t){
  return `
    <button class="list-row" style="--row-color:${t.color};" onclick="openTech('${t.id}')">
      <span class="row-symbol">${t.abbr}</span>
      <span class="row-text">
        <h3>${t.title}</h3>
        <p>${t.summary}</p>
      </span>
      <svg class="row-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  `;
}

function renderHome(){
  document.getElementById('homeTechList').innerHTML = TECHNOLOGIES.slice(0,6).map(techRow).join('');
  document.getElementById('homeCategoryList').innerHTML = GUIDE_CATEGORIES.slice(0,6).map(categoryRow).join('');
  renderAcademyDashboard();
}
function renderTechList(){
  document.getElementById('techListWrap').innerHTML = TECHNOLOGIES.map(techRow).join('');
}

function openTech(id){
  const t = TECHNOLOGIES.find(x => x.id === id);
  if (!t) return;
  document.getElementById('techDetailTitle').innerHTML = t.title;
  document.getElementById('techDetailContent').innerHTML = t.content() + practicalExample(TECH_EXAMPLES[id]) + deepDivePanel(id, true) + masterclassPanel(id, true);
  restoreLessonProgress();
  restoreMasterclassNotes();
  rememberAcademyLesson('tech', id);
  showView('tech-detail', null, 'push');
}

/* =====================================================================
   RENDER: GUIDES
===================================================================== */
function categoryRow(c){
  return `
    <button class="list-row" style="--row-color:${c.color};" onclick="openCategory('${c.key}')">
      <span class="row-symbol" style="color:${c.color};"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${c.icon}</svg></span>
      <span class="row-text">
        <h3>${c.title}</h3>
        <p>${c.blurb}</p>
        <p class="row-count">${c.topics.length} topics</p>
      </span>
      <svg class="row-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  `;
}

function renderCategoriesList(){
  document.getElementById('categoriesListWrap').innerHTML = GUIDE_CATEGORIES.map(categoryRow).join('');
}

function openCategory(key){
  const c = GUIDE_CATEGORIES.find(x => x.key === key);
  if (!c) return;
  document.getElementById('categoryTitle').innerHTML = c.title;

  const topicsHtml = c.topics.map(t => `
    <button class="topic-row" onclick="openTopic('${c.key}','${t.id}')">
      <span class="topic-text">
        <h4>${t.title}</h4>
        <p>${t.summary}</p>
      </span>
      <svg class="row-chevron-sm" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  `).join('');

  document.getElementById('categoryContent').innerHTML = topicsHtml;
  showView('category', null, 'push');
}


// Practical reference examples, added without replacing the original explanations.
const GUIDE_EXAMPLES = {"client-server-model": ["HTTP request from a browser", "fetch(\"/api/products\").then(r => r.json()).then(console.log);", "The browser requests a resource; the server returns a response. Check the Network tab to inspect the status and payload."], "request-response-cycle": ["Inspect a response", "const response = await fetch(\"/api/products\");\nconsole.log(response.status, response.headers.get(\"content-type\"));\nconst data = await response.json();", "Check status and content type before interpreting the response body."], "dns-explained": ["Look up DNS records", "dig example.com A\ndig example.com MX\ndig example.com NS", "A records map names to IPv4 addresses; MX records describe mail routing."], "browser-rendering": ["Avoid forced layout", "const width = panel.getBoundingClientRect().width;\npanel.style.transform = `translateX(${width / 2}px)`;", "Batch DOM reads before writes where practical to avoid unnecessary layout recalculation."], "dom-explained": ["Create and insert an element", "const item = document.createElement(\"li\");\nitem.textContent = \"New task\";\ndocument.querySelector(\"#tasks\").append(item);", "textContent inserts text safely; avoid innerHTML for untrusted input."], "css-layout-systems": ["Responsive CSS Grid", ".cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); gap: 1rem; }", "Grid creates responsive columns without hard-coding a device width."], "responsive-design": ["Mobile-first breakpoint", ".layout { display: grid; grid-template-columns: 1fr; }\n@media (min-width: 52rem) { .layout { grid-template-columns: 16rem 1fr; } }", "Start with a single column, then introduce a sidebar only when there is room."], "cross-browser-compatibility": ["Feature detection", "if (\"IntersectionObserver\" in window) {\n  // Initialise lazy loading\n} else {\n  // Show content without observation\n}", "Detect browser capabilities rather than assuming a particular browser."], "event-loop": ["Microtasks before timers", "console.log(\"A\");\nsetTimeout(() => console.log(\"C\"), 0);\nPromise.resolve().then(() => console.log(\"B\"));\n// A, B, C", "Promise callbacks enter the microtask queue, which runs before the next timer task."], "state-management": ["Small reactive state pattern", "let state = { count: 0 };\nfunction update(patch) {\n  state = { ...state, ...patch };\n  render(state);\n}\nupdate({ count: state.count + 1 });", "Keep state updates explicit and derive the UI from a single source of truth."], "forms-validation": ["Native and server-side validation", "<label>Email <input name=\"email\" type=\"email\" required></label>\n// On the server, validate again before saving.", "Browser validation improves feedback; it does not replace server-side checks."], "accessibility": ["Accessible disclosure control", "<button aria-expanded=\"false\" aria-controls=\"details\">Details</button>\n<section id=\"details\" hidden>Extra information</section>", "Update aria-expanded and hidden together when toggling the disclosure."], "pwa": ["Cache a static shell", "self.addEventListener(\"install\", event => {\n  event.waitUntil(caches.open(\"app-v1\").then(cache => cache.addAll([\"/\", \"/styles.css\"])));\n});", "Only cache assets that actually exist at the deployed base path."], "server-architecture": ["Minimal Node HTTP server", "import http from \"node:http\";\nhttp.createServer((req, res) => {\n  res.writeHead(200, { \"Content-Type\": \"text/plain\" });\n  res.end(\"Hello from the server\");\n}).listen(3000);", "A server listens for requests and produces responses."], "building-rest-api": ["REST resource endpoints", "GET    /api/tasks\nGET    /api/tasks/42\nPOST   /api/tasks\nPATCH  /api/tasks/42\nDELETE /api/tasks/42", "Use HTTP methods and meaningful status codes consistently."], "auth-vs-authz": ["Check identity and permission", "if (!req.user) return res.sendStatus(401);\nif (req.user.id !== task.ownerId) return res.sendStatus(403);\nres.json(task);", "Authentication identifies the user; authorisation decides whether they can access the task."], "sessions-vs-tokens": ["Secure session cookie", "Set-Cookie: sid=<opaque-id>; HttpOnly; Secure; SameSite=Lax; Path=/", "Use HTTPS, regenerate session IDs after login, and expire sessions on logout."], "file-uploads-email": ["Check file constraints", "if (!allowedMimeTypes.includes(file.mimetype)) throw new Error(\"Unsupported type\");\nif (file.size > MAX_BYTES) throw new Error(\"Too large\");", "Also inspect actual file content, randomise stored names and keep uploads outside executable paths."], "error-handling-logging": ["Structured error response", "try { await saveRecord(input); }\ncatch (error) {\n  logger.error({ error, requestId }, \"Save failed\");\n  res.status(500).json({ error: \"Internal server error\", requestId });\n}", "Log details privately; return a safe public message with a correlation ID."], "input-validation-api-integration": ["Handle failed API calls", "const res = await fetch(url, { signal: AbortSignal.timeout(5000) });\nif (!res.ok) throw new Error(`Upstream status ${res.status}`);\nconst data = await res.json();", "Apply timeouts and validate third-party responses before using them."], "xss-explained": ["Prefer safe text insertion", "message.textContent = userSuppliedText;\n// Avoid: message.innerHTML = userSuppliedText;", "Treat untrusted content as text unless it has been safely sanitised for the intended context."], "csrf-explained": ["CSRF mitigation checklist", "Set-Cookie: sid=<id>; Secure; HttpOnly; SameSite=Lax\n// Validate Origin and use a CSRF token for sensitive state-changing forms.", "SameSite helps but should not be your only CSRF defence."], "sql-injection": ["Parameterised SQL query", "const result = await db.query(\n  \"SELECT id, email FROM users WHERE email = $1\",\n  [email]\n);", "Placeholders keep data separate from SQL instructions."], "https-tls": ["Inspect HTTPS response headers", "curl -I https://example.com", "TLS protects data in transit; verify certificates and redirect HTTP traffic to HTTPS."], "cors-explained": ["Restrict allowed origins", "Access-Control-Allow-Origin: https://app.example.com\nVary: Origin", "CORS is enforced by browsers; it does not replace authentication or authorisation."], "password-storage": ["Hash a password with Argon2id", "const hash = await argon2.hash(password, { type: argon2.argon2id });\nconst valid = await argon2.verify(hash, password);", "Use a maintained password-hashing library; never encrypt or hash passwords with plain SHA-256."], "secure-cookies-headers": ["Security headers", "Content-Security-Policy: default-src 'self'\nX-Content-Type-Options: nosniff\nReferrer-Policy: strict-origin-when-cross-origin", "Tailor CSP to your app and test it before enforcing."], "api-security-rate-limiting": ["Rate-limit login attempts", "// Pseudocode\nif (attemptsForAccountAndIP > threshold) {\n  return respond(429, \"Try again later\");\n}", "Use rate limits alongside monitoring and account-safe responses."], "secrets-dependency-security": ["Keep credentials outside source control", "DATABASE_URL=... # store in deployment secret manager\nnpm audit\nnpm outdated", "Never commit production credentials; rotate any that are exposed."], "git-basics": ["Feature branch workflow", "git switch -c feature/search\ngit add .\ngit commit -m \"Add search view\"\ngit push -u origin feature/search", "Review changes before merging and keep commits focused."], "interview-topics": ["Explain complexity with a concrete example", "// Linear search: O(n) time\nconst found = items.find(item => item.id === targetId);", "Discuss trade-offs and edge cases, not just the final code."], "frontend-backend-fullstack": ["One feature across the stack", "Frontend: submit a form with fetch()\nBackend: validate and authorise POST /api/messages\nDatabase: store the message in a transaction", "A full-stack feature spans user interaction, server logic and persistence."], "building-portfolio": ["Explain a project clearly", "Problem → Constraints → Your role → Implementation → Testing → Outcome", "Include a live demo, source code and honest discussion of trade-offs."], "unit-testing": ["Test a pure function", "import { test, expect } from \"vitest\";\nconst add = (a, b) => a + b;\ntest(\"adds two numbers\", () => expect(add(2, 3)).toBe(5));", "Test normal cases, boundaries and invalid inputs."], "integration-testing": ["API integration test", "const response = await request(app).get(\"/api/tasks\");\nexpect(response.status).toBe(200);\nexpect(Array.isArray(response.body)).toBe(true);", "Run against an isolated test database and reset state between tests."], "e2e-testing": ["Browser journey with Playwright", "await page.goto(\"/\");\nawait page.getByRole(\"link\", { name: \"Contact\" }).click();\nawait expect(page.getByRole(\"heading\", { name: \"Contact\" })).toBeVisible();", "Test what a real user can see and do, not internal implementation details."], "mocking-fixtures": ["Controlled fake API response", "vi.spyOn(globalThis, \"fetch\").mockResolvedValue({\n  ok: true, json: async () => ({ id: 1, name: \"Test\" })\n});", "Restore mocks after tests to avoid leaking state."], "client-server-mvc": ["MVC responsibility split", "Model: read and update a task\nController: validate request and call model\nView: render task details", "Keep HTTP handling, business rules and presentation separate."], "monolith-vs-microservices": ["Deployment trade-off", "Monolith: one deployment, simpler local development\nMicroservices: separate deployments, network and observability costs", "Start with clear module boundaries; split services only for a concrete need."], "caching-queues-cdns": ["HTTP caching", "Cache-Control: public, max-age=300, stale-while-revalidate=60", "Cache public assets appropriately; never cache private user data in shared caches."], "scaling-load-balancing": ["Stateless application instances", "Client → Load balancer → App A / App B / App C\nShared state → database or managed session store", "Multiple instances require shared persistent state and health checks."], "browser-devtools": ["Find a failed request", "DevTools → Network → Reload → Select request → Headers / Response", "Check URL, method, status, request payload and response before changing code."], "ide-productivity": ["Useful command-line checks", "git diff --check\nnpm run lint\nnpm test", "Automate repeatable checks and inspect diffs before committing."], "package-management": ["Reproducible installs", "npm ci\nnpm audit\nnpm outdated", "Commit your lockfile and use clean installs in CI."], "vite-build-tools": ["Build for deployment", "npm run dev\nnpm run build\nnpm run preview", "Use the correct base path when deploying to a project subdirectory."]};
const TECH_EXAMPLES = {"html": ["Semantic form", "<form action=\"/contact\" method=\"post\">\n  <label for=\"email\">Email</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required>\n  <button type=\"submit\">Send</button>\n</form>", "Labels and native input types improve accessibility and validation."], "css": ["Responsive card layout", ".cards { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr)); }", "Use flexible sizing rather than assuming fixed devices."], "javascript": ["Fetch with error handling", "async function loadItems() {\n  const res = await fetch(\"/api/items\");\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return res.json();\n}", "Always handle non-2xx responses."], "php": ["Escape output safely", "<?php\n$name = $_POST[\"name\"] ?? \"Guest\";\necho htmlspecialchars($name, ENT_QUOTES, \"UTF-8\");", "Validate input and escape output for its destination context."], "http": ["Request and response", "GET /api/tasks HTTP/1.1\nHost: example.com\nAccept: application/json\n\nHTTP/1.1 200 OK\nContent-Type: application/json", "Methods describe intent; status codes describe outcomes."], "databases": ["Parameterized query", "SELECT id, name FROM users WHERE email = $1;\n-- Bind the email as a separate parameter.", "Never concatenate untrusted input into SQL."], "api": ["Fetch an API resource", "const res = await fetch(\"/api/tasks/42\");\nif (!res.ok) throw new Error(`HTTP ${res.status}`);\nconst task = await res.json();", "Define consistent resource URLs and error responses."], "websockets": ["Receive realtime messages", "const ws = new WebSocket(\"wss://example.com/events\");\nws.addEventListener(\"message\", event => console.log(event.data));\nws.addEventListener(\"close\", () => console.log(\"Disconnected\"));", "Plan for disconnects, reconnection and authentication."], "typescript": ["Typed API result", "type User = { id: number; name: string };\nfunction greeting(user: User): string {\n  return `Hello, ${user.name}`;\n}", "TypeScript checks types during development, not runtime API responses."]};
function escapeExample(value){ return String(value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function practicalExample(data){ if(!data)return ""; const [title,code,note]=data; return `<section class="example-section"><div class="example-title"><h3>Practical code example</h3><span>REFERENCE</span></div><p class="example-intro">${escapeExample(title)}</p><div class="example-code-wrap"><button class="copy-example" type="button" aria-label="Copy code example">Copy code</button><pre class="example-code"><code>${escapeExample(code)}</code></pre></div><p class="example-note"><strong>Why it matters:</strong> ${escapeExample(note)}</p></section>`; }
document.addEventListener("click", async event => { const button=event.target.closest(".copy-example"); if(!button)return; const code=button.parentElement.querySelector("code")?.textContent||""; try { await navigator.clipboard.writeText(code); button.textContent="Copied"; setTimeout(()=>button.textContent="Copy code",1500); } catch { button.textContent="Select code to copy"; } });

const DEEP_DIVE_GUIDES = {"client-server-model": ["Open DevTools Network, reload a page and identify the document request, a CSS asset and an API call.", "Explain which machine initiates each request and where the response originates."], "request-response-cycle": ["Request a public endpoint and inspect method, status, headers, response body and timing.", "Compare a successful response with a deliberately invalid path returning 404."], "dns-explained": ["Run dig for A, AAAA, MX and NS records of a domain you control.", "Explain why a DNS lookup does not itself fetch an HTML page."], "browser-rendering": ["Change a DOM element’s width, then change its transform and compare the rendering performance in DevTools.", "Identify layout, paint and compositing work in the Performance panel."], "dom-explained": ["Build a list by creating DOM nodes and assigning textContent.", "Explain why inserting untrusted text with innerHTML is unsafe."], "css-layout-systems": ["Build a card gallery with Grid and a card header with Flexbox.", "Resize the viewport and explain why each layout mechanism was chosen."], "responsive-design": ["Create a mobile-first layout with a single column and add a wider-screen breakpoint.", "Test at 320, 390, 768 and 1024 pixels without horizontal scrolling."], "cross-browser-compatibility": ["Check one browser API with feature detection and implement a readable fallback.", "Test with the feature disabled and with reduced-motion preferences enabled."], "event-loop": ["Predict console output for synchronous logs, a Promise callback and a zero-delay timer.", "Explain the difference between the call stack, microtasks and tasks."], "state-management": ["Build a counter with one state object and a render function.", "Show how the UI remains consistent when state changes in several places."], "forms-validation": ["Build a required email form and validate it again on a mock server handler.", "Test empty, malformed, oversized and valid input."], "accessibility": ["Build an expandable panel using a real button and synchronised aria-expanded/hidden state.", "Use only a keyboard and a screen reader to check the interaction."], "pwa": ["Create a small offline shell with a manifest and service worker in a test project.", "Check installation, update behaviour and offline loading in DevTools."], "server-architecture": ["Build a minimal HTTP server with a health route and a JSON route.", "Test 200, 404 and 500 responses and verify that errors are logged safely."], "building-rest-api": ["Design CRUD endpoints for a tasks resource, including status codes and validation errors.", "Explain the difference between POST, PUT and PATCH and what makes an operation idempotent."], "auth-vs-authz": ["Sketch an endpoint that checks both logged-in identity and resource ownership.", "Demonstrate separate 401 and 403 cases without leaking protected data."], "sessions-vs-tokens": ["Compare a server-side session cookie flow with a signed token flow.", "Describe logout, expiry, rotation and token theft risks for each approach."], "file-uploads-email": ["Design an upload endpoint with size limits, content inspection and safe storage names.", "Describe how to avoid executable uploads and mail-header injection."], "error-handling-logging": ["Add a request ID to a failed API response and log the internal error separately.", "Check that passwords, tokens and stack traces never reach the client."], "input-validation-api-integration": ["Call a third-party endpoint with a timeout and validate its returned fields.", "Handle timeout, invalid JSON, 429 and 500 responses distinctly."], "xss-explained": ["Render untrusted user text using textContent and compare with a dangerous innerHTML example in a disposable sandbox.", "Identify stored, reflected and DOM-based XSS entry points."], "csrf-explained": ["Diagram a cookie-authenticated form submission and add an origin check and CSRF token.", "Explain why SameSite alone is not a complete defence."], "sql-injection": ["Write a parameterised user lookup and test with a quote-containing search string.", "Explain why placeholders prevent user data from becoming SQL syntax."], "https-tls": ["Inspect the certificate and security headers of a site you own.", "Explain certificate trust, encryption in transit and why mixed content is dangerous."], "cors-explained": ["Compare a simple cross-origin GET with a request that triggers a preflight.", "Explain why CORS does not authenticate an API caller."], "password-storage": ["Write a password-hashing flow using a maintained Argon2id library.", "Describe unique salts, verification, migration and rate limiting."], "secure-cookies-headers": ["Review a session cookie and add Secure, HttpOnly and appropriate SameSite settings.", "Draft a CSP and test it in report-only mode first."], "api-security-rate-limiting": ["Design per-account and per-IP login throttling with safe error messages.", "Explain how to avoid locking out legitimate users permanently."], "secrets-dependency-security": ["Move a sample secret into environment configuration and inspect the Git history.", "Explain what to do if a real credential has already been committed."], "git-basics": ["Create a feature branch, make two focused commits and inspect the diff.", "Rebase or merge a test branch and resolve a simple conflict."], "interview-topics": ["Explain the time complexity of array search versus Map lookup.", "Discuss trade-offs, edge cases and why Big-O is not a complete performance measurement."], "frontend-backend-fullstack": ["Trace a contact form from browser validation to API, persistence and response.", "Identify which layer must enforce security and data integrity."], "building-portfolio": ["Write a project case study covering problem, role, constraints, implementation, tests and results.", "Show a working demo, repository and an honest discussion of limitations."], "unit-testing": ["Test a pure price calculator with ordinary, boundary and invalid inputs.", "Explain why deterministic, isolated tests are useful."], "integration-testing": ["Test an API endpoint against a disposable test database.", "Reset state between tests and verify the full request-to-database path."], "e2e-testing": ["Automate a login-to-dashboard user journey using role-based selectors.", "Explain why end-to-end tests are slower and should cover critical flows."], "mocking-fixtures": ["Mock a failed network response and a successful response in separate tests.", "Restore mocks between tests and avoid mocking the behaviour being tested."], "client-server-mvc": ["Split a tasks feature into controller, service/model and view responsibilities.", "Explain where validation, business rules and presentation belong."], "monolith-vs-microservices": ["Design the same small app as a modular monolith and as separate services.", "Compare deployment, network failures, data consistency and observability."], "caching-queues-cdns": ["Set cache headers for a fingerprinted asset and a private account response.", "Explain invalidation, stale data and why private data must not enter shared caches."], "scaling-load-balancing": ["Draw a load balancer with three stateless app instances and shared persistence.", "Explain health checks, sticky sessions and horizontal versus vertical scaling."], "browser-devtools": ["Debug a broken image by inspecting its requested URL, response status and computed layout.", "Identify whether the issue is a path, CORS, CSS or missing resource."], "ide-productivity": ["Configure formatting, linting and a repeatable test command for a small repository.", "Run the same checks locally and in CI."], "package-management": ["Compare npm install and npm ci in a project with a committed lockfile.", "Explain semantic version ranges and dependency audit limitations."], "vite-build-tools": ["Build a Vite app for deployment under a subdirectory rather than the domain root.", "Inspect emitted asset URLs and verify the preview and deployed paths."]};
const DEEP_DIVE_TECH = {"html": ["Create a semantic article page with a heading hierarchy, navigation and labelled form.", "Check keyboard navigation and the accessibility tree."], "css": ["Implement a responsive two-column layout that becomes one column on narrow screens.", "Compare Grid and Flexbox, then inspect computed box-model dimensions."], "javascript": ["Fetch data with explicit loading, success and error states.", "Handle a non-2xx response and an aborted request."], "php": ["Handle a POST form with validation and context-aware output escaping.", "Use prepared statements for database writes."], "http": ["Inspect a browser request and response, then reproduce it with curl.", "Identify the method, status, headers and body."], "databases": ["Model users and tasks with primary and foreign keys and a parameterised JOIN.", "Explain transactions, indexing and query plans."], "api": ["Design a versioned tasks API and document sample requests and errors.", "Consider pagination, authentication and rate limits."], "websockets": ["Create a WebSocket connection and display connection state in the UI.", "Handle reconnection, duplicate messages and unauthorised clients."], "typescript": ["Type a function and an API response, then validate the API payload at runtime.", "Explain why compile-time types do not validate network data."]};

function deepDivePanel(key, isTech=false){
  const data=(isTech?DEEP_DIVE_TECH:DEEP_DIVE_GUIDES)[key];
  if(!data)return '';
  const [task,check]=data;
  const example=(isTech?TECH_EXAMPLES:GUIDE_EXAMPLES)[key];
  const name=example?.[0]||'the example';
  const note=example?.[2]||'Check the result carefully.';
  return `<section class="deep-dive" aria-label="Deep dive workshop">
    <div class="deep-kicker">WORKSHOP · PRACTISE & VERIFY</div>
    <h3>Build your understanding</h3>
    <p class="deep-lead">Use the reference above, then complete a focused exercise. Try it before opening the suggested checks.</p>
    <div class="deep-activity"><span class="deep-number">01</span><div><h4>Hands-on challenge</h4><p>${escapeExample(task)}</p></div></div>
    <div class="deep-activity"><span class="deep-number">02</span><div><h4>Check your work</h4><p>${escapeExample(check)}</p></div></div>
    <div class="deep-activity"><span class="deep-number">03</span><div><h4>Explain it to someone else</h4><p>Using <strong>${escapeExample(name)}</strong>, explain what each important line does, what happens when it fails, and what you would change before using it in production.</p></div></div>
    <details class="deep-reveal"><summary>Show review notes and common pitfalls</summary><div><p><strong>Core takeaway:</strong> ${escapeExample(note)}</p><p><strong>Review checklist:</strong> test a normal case, an invalid input, a failure path and a narrow-screen or keyboard-only interaction where relevant. Consider security, accessibility and maintainability.</p><p><strong>Production note:</strong> examples are teaching snippets. Dependencies, authentication, error handling and deployment settings may need additional setup.</p></div></details>
    <div class="deep-progress"><label><input type="checkbox" class="lesson-done" data-lesson="${isTech?'tech-':'guide-'}${key}"> Mark this lesson as reviewed</label></div>
  </section>`;
}
function restoreLessonProgress(){
 document.querySelectorAll('.lesson-done').forEach(box=>{
  try{box.checked=localStorage.getItem('webpro-lesson-'+box.dataset.lesson)==='1'}catch{}
 });
}
document.addEventListener('change',e=>{
 if(!e.target.matches('.lesson-done'))return;
 try{localStorage.setItem('webpro-lesson-'+e.target.dataset.lesson,e.target.checked?'1':'0')}catch{}
});


/* v4: full lesson pathway with downloadable runnable labs and checks */
const MASTERCLASS_LABS = {"forms-validation": "form-validation", "html": "form-validation", "php": "form-validation", "css-layout-systems": "responsive-grid", "responsive-design": "responsive-grid", "css": "responsive-grid", "cross-browser-compatibility": "responsive-grid", "state-management": "counter-state", "javascript": "counter-state", "typescript": "counter-state", "react": "counter-state", "vue": "counter-state", "request-response-cycle": "fetch-errors", "building-rest-api": "fetch-errors", "input-validation-api-integration": "fetch-errors", "api": "fetch-errors", "http": "fetch-errors", "client-server-model": "fetch-errors", "websockets": "fetch-errors", "error-handling-logging": "fetch-errors", "dom-explained": "dom-tasks", "browser-rendering": "dom-tasks", "browser-devtools": "dom-tasks", "pwa": "storage-notes", "caching-queues-cdns": "storage-notes", "xss-explained": "security-output", "csrf-explained": "security-output", "sql-injection": "security-output", "api-security-rate-limiting": "security-output", "password-storage": "security-output", "secure-cookies-headers": "security-output", "secrets-dependency-security": "security-output", "auth-vs-authz": "security-output", "sessions-vs-tokens": "security-output", "https-tls": "security-output", "cors-explained": "security-output", "event-loop": "event-loop", "accessibility": "accessibility-disclosure", "unit-testing": "calculator", "integration-testing": "calculator", "e2e-testing": "calculator", "mocking-fixtures": "calculator", "databases": "calculator", "git-basics": "calculator", "interview-topics": "calculator", "building-portfolio": "calculator", "frontend-backend-fullstack": "calculator", "server-architecture": "calculator", "file-uploads-email": "calculator", "client-server-mvc": "calculator", "monolith-vs-microservices": "calculator", "scaling-load-balancing": "calculator", "ide-productivity": "calculator", "package-management": "calculator", "vite-build-tools": "calculator"};
const LAB_TITLES = {"form-validation": "Accessible form validation", "responsive-grid": "Responsive product gallery", "counter-state": "State-driven counter", "fetch-errors": "Fetch and error handling", "dom-tasks": "Safe DOM task list", "storage-notes": "Local notes with persistence", "security-output": "Safe output and escaping", "event-loop": "Event loop ordering lab", "accessibility-disclosure": "Keyboard-accessible disclosure", "calculator": "Testable price calculator"};
function masterclassPanel(key,isTech=false){
 const info=(isTech?DEEP_DIVE_TECH:DEEP_DIVE_GUIDES)[key];
 const example=(isTech?TECH_EXAMPLES:GUIDE_EXAMPLES)[key];
 if(!info||!example)return '';
 const [challenge,verify]=info;
 const [exampleName,code,note]=example;
 const lab=MASTERCLASS_LABS[key];
 const labCard=lab?`<div class="mc-lab"><div><span class="mc-label">RUNNABLE PRACTICE PROJECT</span><h4>${escapeExample(LAB_TITLES[lab])}</h4><p>Open a complete, standalone HTML/CSS/JavaScript project. Read its source, change it and test it locally. This is a related practice lab, not a complete implementation of this topic.</p></div><a href="projects/${lab}.html" target="_blank" rel="noopener" class="mc-open">Open project ↗</a></div>`:'';
 return `<section class="mc-course" aria-label="Extended topic course">
 <p class="mc-label">MASTERCLASS · APPLY, DEBUG & EXPLAIN</p><h3>Go beyond the reference</h3>
 <p class="mc-intro">Work through the example and test its assumptions. Code fragments above may require a project, server or dependencies; the linked browser labs run independently.</p>
 <div class="mc-grid">
 <article><span class="mc-index">01 / UNDERSTAND</span><h4>Trace the example</h4><p>For <strong>${escapeExample(exampleName)}</strong>, identify the inputs, main operation, expected output and the boundary between browser and server (where relevant).</p><details><summary>Suggested explanation</summary><p>${escapeExample(note)}</p></details></article>
 <article><span class="mc-index">02 / IMPLEMENT</span><h4>Extend the behaviour</h4><p>${escapeExample(challenge)} Add at least one edge-case check and a clear user-facing failure state.</p><details><summary>Acceptance criteria</summary><p>${escapeExample(verify)}</p></details></article>
 <article><span class="mc-index">03 / DEBUG</span><h4>Make it fail safely</h4><p>Test empty input, malformed data, an unavailable dependency or network failure (if applicable), and repeated use. Record what fails and why.</p><details><summary>Debugging route</summary><p>Reproduce the issue, inspect the console or response, isolate the smallest failing input, apply one change, then rerun both the failing and successful cases.</p></details></article>
 <article><span class="mc-index">04 / REVIEW</span><h4>Prove your understanding</h4><p>Explain the trade-off, name one realistic production risk, and describe a test that would catch a regression.</p><details><summary>Review answer</summary><p>${escapeExample(note)} Verify with: ${escapeExample(verify)}</p></details></article>
 </div>${labCard}
 <div class="mc-reflection"><label for="mc-notes-${key}">Your notes (saved on this device)</label><textarea id="mc-notes-${key}" class="mc-notes" data-note="${isTech?'tech-':'guide-'}${key}" rows="4" placeholder="What did you build? What broke? What would you improve?"></textarea><p class="mc-save-status" aria-live="polite">Notes save as you type.</p></div>
 </section>`;
}
function restoreMasterclassNotes(){document.querySelectorAll('.mc-notes').forEach(el=>{try{el.value=localStorage.getItem('webpro-note-'+el.dataset.note)||''}catch{}})}
document.addEventListener('input',event=>{const el=event.target;if(!el.matches('.mc-notes'))return;try{localStorage.setItem('webpro-note-'+el.dataset.note,el.value)}catch{}});

const WEBPRO_VERIFIED_VISUALS = {"dns-explained": "dns-explained", "event-loop": "event-loop", "css-layout-systems": "css-layout-systems", "responsive-design": "responsive-design", "dom-explained": "dom-explained", "forms-validation": "forms-validation", "auth-vs-authz": "auth-vs-authz", "sessions-vs-tokens": "sessions-vs-tokens", "building-rest-api": "building-rest-api", "csrf-explained": "csrf-explained", "sql-injection": "sql-injection", "client-server-mvc": "client-server-mvc", "git-basics": "git-basics", "unit-testing": "unit-testing", "integration-testing": "integration-testing", "e2e-testing": "e2e-testing", "pwa": "pwa", "cors-explained": "cors-explained", "https-tls": "https-tls", "caching-queues-cdns": "caching-queues-cdns", "scaling-load-balancing": "scaling-load-balancing", "frontend-backend-fullstack": "frontend-backend-fullstack", "browser-devtools": "browser-devtools", "vite-build-tools": "vite-build-tools", "password-storage": "password-storage", "xss-explained": "xss-explained", "api-security-rate-limiting": "api-security-rate-limiting", "file-uploads-email": "file-uploads-email", "error-handling-logging": "error-handling-logging", "input-validation-api-integration": "input-validation-api-integration", "package-management": "package-management", "websockets": "websockets"};
function openTopic(categoryKey, topicId){
  const c = GUIDE_CATEGORIES.find(x => x.key === categoryKey);
  if (!c) return;
  const t = c.topics.find(x => x.id === topicId);
  if (!t) return;

  document.getElementById('topicEyebrow').innerHTML = c.title.toUpperCase();
  document.getElementById('topicTitle').textContent = t.title;

  let html = `<p class="detail-summary">${t.summary}</p>`;
  if (!WEBPRO_VERIFIED_VISUALS[topicId] && t.full.diagram && DIAGRAMS[t.full.diagram]) html += diagramCard(DIAGRAMS[t.full.diagram], t.full.diagramCaption || '');
  if (WEBPRO_VERIFIED_VISUALS[topicId]) html += `<figure class="diagram-card verified-diagram"><img loading="lazy" src="assets/diagrams/${WEBPRO_VERIFIED_VISUALS[topicId]}.svg" alt="${escapeExample(t.title)} — technical concept diagram"><figcaption class="diagram-caption">Conceptual flow for ${escapeExample(t.title)}. Simplified for learning; refer to the written explanation for details.</figcaption></figure>`;
  html += `<div class="guide-heading"><h3 class="detail-h3">Key points, step by step</h3><span>${t.full.steps.length} points</span></div>`;
  html += `<ol class="step-list">`;
  html += t.full.steps.map((s, i) => `<li><span class="step-num">${i + 1}</span><span class="step-body">${s}</span></li>`).join('');
  html += `</ol>`;

  html += practicalExample(GUIDE_EXAMPLES[topicId]);
  html += deepDivePanel(topicId);
  html += masterclassPanel(topicId);
  document.getElementById('topicContent').innerHTML = html;
  restoreLessonProgress();
  restoreMasterclassNotes();
  rememberAcademyLesson('guide', topicId, categoryKey);

  const backBtn = document.getElementById('topicBackBtn');
  backBtn.onclick = () => showView('category', null, 'pop');
  openCategory(categoryKey);
  showView('topic', null, 'push');
}

function renderSearch(query){
  const q=query.trim().toLowerCase();
  const el=document.getElementById('searchResults');
  const count=document.getElementById('searchCount');
  if(!q){el.innerHTML='';count.textContent='Search by technology, concept or guide title.';return;}
  const results=[];
  TECHNOLOGIES.forEach(t=>{if((t.title+' '+t.summary).toLowerCase().includes(q))results.push({kind:'TECHNOLOGY',title:t.title,desc:t.summary,action:`openTech('${t.id}')`});});
  GUIDE_CATEGORIES.forEach(c=>{if((c.title+' '+c.blurb).toLowerCase().includes(q))results.push({kind:'GUIDE CATEGORY',title:c.title,desc:c.blurb,action:`openCategory('${c.key}')`});c.topics.forEach(t=>{if((t.title+' '+t.summary).toLowerCase().includes(q))results.push({kind:c.title.replace(/&amp;/g,'&'),title:t.title,desc:t.summary,action:`openTopic('${c.key}','${t.id}')`});});});
  count.textContent=results.length+' matching result'+(results.length===1?'':'s');
  el.innerHTML=results.length?results.slice(0,60).map(r=>`<button class="topic-row" onclick="${r.action}"><span class="topic-text"><span class="search-result-type">${r.kind}</span><h4>${r.title}</h4><p>${r.desc}</p></span></button>`).join(''):'<div class="empty-state">No matches. Try a shorter search term.</div>';
}
/* =====================================================================
   INITIAL RENDER
===================================================================== */
renderHome();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

} catch (err) {
  console.error('WebPro failed to start:', err);
  const banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#B4472E;color:#fff;padding:16px;font-family:monospace;font-size:12px;white-space:pre-wrap;max-height:70vh;overflow:auto;';
  banner.textContent = 'APP FAILED TO START\n\n' + (err && err.message ? err.message : String(err)) + '\n\n' + (err && err.stack ? err.stack : '');
  document.body.prepend(banner);
}
