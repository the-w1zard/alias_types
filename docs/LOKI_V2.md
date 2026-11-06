# THE_WIZARD PLATFORM
### General
- do not output any other extra comments or "talking points", only provide the output of the code I am asking for
- KEEP THE RESPONSES DIRECT, CONCISE AND TO THE POINT
- WHEN EVER YOU NEED THE USER TO FIND AND REPLACE CODE, YOU MUST GIVE THE USER A STRING TO SEARCH FOLLOWED BY A STRING TO REPLACE THAT SAME SEARCH STRING. WITHOUT THIS STEP, IT ENDS UP TAKING EXPONTENTLY LONGER TO FIND AND REPLACE ANY CODE SNIPPERS
- YOU ARE NOT ALLOWED TO PROVIDE ADDED VALUE IN THE FORM OF CHANGING OUT THE USERS CODE. IF YOU SEE AN AREA THAT IS CAUSE FOR ISSUE, DO NOT EDIT IT, BUT INSTEAD BRING IT UP TO THE USERS ATTENTION, AND PROVIDE A SEARCH STRING, AND THE REPLACMENT STRING TO FIX THE ERROR. THIS 'FIX' CAN ONLY BE GIVEN TO THE USER THROUGH THE RESPONSE AND NOT THROUGH AND CODE THAT YOU ARE TO BE GIVING BACK TO THEM

### Technology Stack
- **Styling**: Tailwind CSS v3 (semantic classes ONLY: bg-background, text-foreground, border-border, etc.)
- **Component Library**: shadCN UI: BUT THE IMPORT PATH IS '#sauron'
- **Icons**: lucide-react
- **Tailwind.css Path**: '#tailwind'
- **json import Path**: '#tw'
- **Primsa Path**: '#midgardr'
- **Utilities Path**: '#midgardr'
- **Components Path**: '#midgardr'
  - Correct: \`import { Button } from '#midgardr'\`
  - Wrong: \`import { Button } from "~/components/catalyst-ui"\`

### PLATFORM
- **FRAMEWORK**: the_wizard
- **RUNTIME**: 100% SSR running on bun and rspack
- **DEV SERVER**: gpu dev server
- **RENDERER**: custom htmx
- **NOTES ON WHAT IT DOES NOT HAVE**:
  - does not have a:
    - action
    - loader
    - route comps in the traditional sense
- **NOTES ON WHAT IT DOES HAVE**: 
  - 3 custom hooks libs
  - 4 ui comps libs: totaling to over 4000+ ui comps
  - the most advanced message queue system in the industry: 'staff' the data god solution && Hyper-specialized data systems, unified by a common platform transport layer.
    - YJS REPLACEMENT
    - runs entirely on the server, no client code execution what... so... ever
    - no outside deps of any kind
    - employs hybrid logical clock
    - pre configured where no set up is needed to stand up a test instance locally to test to see if it is working, will also come pre configured with several production set ups
    - multiple modes to fit your needs
      - docs, of various data types
      - ui, cursor and such
      - fields, including dropdowns, checkboxes, inputs, etc
      - rte
      - spreadsheets
    - no need really for any plugins... as it already comes with the following
      - bus: has 28+ adapters for all envs and protocols
      - 25+ different streaming primtives
      - multiplexed by default so no overhead cost
      - 2 different types of databases... already ready to go
      - and a lot more...
    - ASYNC THROTTLE
    - BATCH
    - BINARY
    - CHERRIO
    - CIRCUIT BREAKER
    - COMPRESSION
    - CONCURRENT
    - CQRS
    - CRDT - PN_COUNTER
    - CRDT - OR_SET
    - CRDT - LWW_REGISTER
    - DROP LOG - a full fledged... theming system for console.logs... seriously, with fully matching themes that tie directly to the vscode extensions registered themes. Making it so your console log messages match your vscode theme
    - DEBOUNCE
    - DIFFPATCH
    - FULL TEXT SEARCH
    - HTTP CLIENT — a fetch-native Axios replacement with zero dependencies... EXTREMELY OVERPOWERED
    - HYBRID LOGICAL CLOCK
    - LONGPOLL
    - METRICS
    - OPTIMISTIC
    - PERFORMANCE TIMER
    - PLINKO and GATEMASTER
    - TIERED QUEUE CONCURENTLY EXECUTING BATCHES
    - QUEUE
    - RAFT 2.0
      - dont have a name for this one yet obviously but raft that also covers 1 and 2 nodes
      - runs entirely on the server, no client code execution what... so... ever
      - no outside deps of any kinda
    - RATE LIMIT
    - REVERSE HEART BEAT MANAGER 
    - SEMAPHORE
    - SIGNALS
    - SSE
    - SWR
    - THROTTLE
    - WS
- **COMPATIBLE WITH**: every single react library that is server safe, PLATFORM DOES NOT HAVE REACT INSTALLED
- **ROUTER**: in the '#the_cloud'
- **#the_cloud RENDERER PRIMITIVES**: useMatches, useParams, useLocation, useSearchParams, useHref, useResolvedPath, useOutlet, useRouteError, useAsyncValue, useAsyncError, json, redirect, redirectDocument, replace, isWardResponse, isRouteErrorResponse, Portal, renderPortalTarget, pushOutletFrame, popOutletFrame, Outlet, currentOutletHtml, live, escapeAttr, Link, NavLink, onMount, onEffect, onLayoutEffect, emitSwap, registerHTMXHandler, injectHTMX, handleHTMX, GlitchBoundary, registerFragment, scheduleFragmentRender, flushFragmentRender, teardownClient, normalizeFormData, deserialize, handleFormValidate, defer, isDeferredData, Await, kvdbFieldRef, rdbFieldRef, ChronoBoundary, pushSwap, triggerRender
- **#the_wizard PLATFORM PRIMITIVES**:


### Absolute Code Standards
- **Function Declaration**: Use \`export function ComponentName()\` NEVER \`const ComponentName = () => {}\`
- **Default Exports**: No default exports in any file
- **Comments**: Do not leave comments in code
- **Color Values**: Never use hard-coded colors (no #hex, no rgb(), no color names)

### Code Building Proceses To Employ
- When building components using shadCN's exact architectural patterns
- All props must have sensible default values to minimize end-user configuration
- Support variants via props when multiple styles are applicable
- Always accept and merge className prop for style overrides
- Support children prop when content should be customizable
- Props interface should extend appropriate React HTML attributes

### Critical Functional Requirements
All interactive features MUST be fully functional and working:
- Search inputs must actually search/filter data
- Filter controls must actually filter results
- Sort buttons must actually sort data
- Form submissions must handle data
- Buttons must have real onClick handlers with logic
  - unless the button is used within remix's Form or fetcher.Form component
  - if those features are not used, then the following form example must be used along side any other functionality that needs to be triggered when that form is submitted, this format  your more than welcome to create a function before the return statment to define this
- Loading states must represent real async operations
- No placeholder functionality
- No dummy/mock implementations
- No "TODO" or "implement this later" code

If a component has interactive elements, those elements MUST work in the context they are used.

### shadCN Component Usage (READ CAREFULLY)
DO NOT recreate any shadCN components that already exist.
Use existing shadCN components from the library.



