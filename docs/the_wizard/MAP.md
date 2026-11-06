```tsx
// HADORON COLLIDER IS CALLED ONCE IN ITS OWN FILE IN ORDER TO CREATE A SINGLE USABLE INSTANCE, WHERE EACH OF THE UNDERLYING PARTS ARE ONLY EVER CREATED WITHIN THE HADRON COLLIDER ITSELF AND THEN EACH PART ITS GIVEN ITS REQUIREMENTS THROUGH DRILL PROPING. THIS MAKES IT SO THAT THERE ISNT ANY PART THAT BECOMES A SHARED PART BETWEEN 2 CONTEXT INSTANCES OR DB INSTANCES AND SO ON. VALUES / DATA COMES IN THROUGH THE REACTIVE HOOK SYSTEM WHERE THEY GET PLACED INTO A QUEUE. FROM THERE THEY GO INTO BINARY, WHERE THERE JS ARRAY OBJS FIRST GET CONVERTED IN ORDER TO ACTUALLY GET SAVED IN THE HADRON COLLIDER AND THEN BINARY ENCODED BEFORE GETTING PUSHED THE ENGINE WHO SAVES IT. THIS PUTS AN ESSENTIAL BAERRIER BETWEEN THE JS HOOKS, AND THEN ENGINE SO AS TO NOT KICK OFF A BUNCH OF TYPE SCRIPT ERRORS DUE TO THE ENGINE REQUIRE Uint8Array Float32Array
// CURRENTLY WE HAVE SOME NOOPS TO FILL, NOT USED TO EVALUATE TO SEE IF WE EVEN NEED THEM, AND FIX THE QUEUE CLASS BEFORE WE CAN START ADDING ANY MORE PARTS, BECAUSE OF RIGHT NOW WE HAVE THE MEANS TO PLACE THINGS INTO THE COLLIDER, ALBEIT BROKEN... BUT WE CURRENTLY DO NOT SEND ANYTHING OUT, NOTIFY SUBS AND SO ON... SINCE YOU HAVE BEEN HAVING SUCH A HARD TIME... HERE IS A COMPELTE LAYOUT OF WHAT CONSIST IN EACH CLASS EVERYWHERE
├── hadron_collider/
│   ├── engine: HADRON_COLLIDER_SOA_ENGINE
│   ├── binary: HADRON_COLLIDER_BINARY_QUEUE_BOUNDARY
│   ├── governor: GranularHadronGovernor
│   ├── notifications: HadronNotificationHub
│   ├── queue: HADRON_QUEUE
│   ├── start
│   ├── stop
│   ├── admit
│   ├── edit
│   ├── delete
│   ├── /* EVERYTHING BEYOND, IS DEFINED OUTSIDE ITS CLASS IN THE FILE */
│   ├── THE_HADRON_COLLIDER_STATE
│   ├── pullGet
│   ├── pullGetAsync
│   ├── pullGetMany
│   ├── placeSubscription
│   ├── placeWaitFor
│   ├── pushSetMany
│   ├── pushEdit
│   ├── pushDelete
│   ├── pushDeleteMany
│   ├── pullHas
│   └── pushSet
├── reactive_system/
│   ├── _root
│   ├── _components
│   ├── _currentHookState
│   ├── _subscribers
│   ├── _pendingNotifications not used
│   ├── _flushScheduled not used
│   ├── _currentComponent
│   ├── _devRecord
│   ├── devRecord
│   ├── enqueueNotification
│   ├── notifyHook
│   ├── flushNotificationQueue
│   ├── getCurrentComponent
│   ├── subscribeToHook
│   ├── _notifyCache
│   ├── scheduleNotify not used
│   ├── tripleTieredScope
│   ├── HadronHookSlot
│   │   ├── get value
│   │   ├── set value
│   │   ├── setMany/NOOP
│   │   ├── getByPrefix/NOOP
│   │   ├── getMany/NOOP
│   │   ├── getAll/NOOP
│   │   ├── delete
│   │   ├── sub
│   │   ├── deleteMany/NOOP
│   │   ├── subAll/NOOP
│   │   ├── waitFor
│   │   ├── clear/NOOP
│   │   └── has/NOOP
│   ├── beginHookDependencyCapture
│   ├── endHookDependencyCapture
│   └── createHook
├── engine/
│   ├── editDirect
│   ├── admitDirect
│   ├── deleteDirect
│   ├── public
│   ├── pass
│   ├── reclaimPid
│   └── getLoadFactor
├── governer/
│   ├── start
│   ├── stop
│   ├── tick/P
│   ├── tunePerformance/P
│   └── scheduleNextTick/P
├── notifications/
│   ├── hashComponent
│   ├── getScopeHash
│   ├── parseScopeKey
│   ├── allocateScopePid
│   ├── subscribe
│   ├── markDirty
│   └── flushNotifications
├── queue/
│   ├──
│   └── 
├── binary_encoder/
│   ├── flushMutations
│   ├── flush
│   ├── private advanceTail
│   ├── enqueueGet
│   ├── enqueueGetAsync
│   ├── enqueueWaitFor
│   ├── enqueueHas
│   ├── enqueueAdmit
│   ├── enqueueSetMany
│   ├── enqueueEdit
│   ├── enqueueDelete
│   ├── enqueueDeleteMany
│   ├── get
│   ├── clear
│   ├── private readUint
│   ├── private encodeUint64
│   ├── private encode
│   ├── private encodeValue
│   ├── private encodeUint
│   ├── private decode
│   ├── private decodeValue
│   ├── encode_msg
│   └── decode_msg
├── control_plane_bootstrapper/
│   ├── announceDepot
│   ├── listenForControlEvents
│   └── promoteRouteToDataPlane
├── depot/
│   ├── initBufferView
│   ├── write
│   └── read
├── dispatch/
│   ├── send
│   ├── writeToLayer2Buffer
│   ├── evictDeadLayer2Buffer
│   ├── tap
│   └── registerDepot
├── post_office/
│   ├── 
│   └── 
├── ring_buffer/
│   ├── acquireLock
│   ├── releaseLock
│   ├── getAvailableWriteSpace
│   ├── getAvailableReadBytes
│   ├── write
│   ├── read
│   └── waitForData
├── tap/
│   ├── tap
│   ├── untap
│   └── inject
└── transformer/
    ├── registerTier
    ├── _enqueue
    ├── drain
    └── pending
```


```tsx
┌─────────────────────────────────────────────────────────────┐
│                    THE WIZARD (platform)                     │
│                                                              │
│   ┌─────────────────┐        ┌────────────────────────────┐ │
│   │  PLATFORM       │  used  │        THE_CLOUD           │ │
│   │  PRIMITIVES     │◄───────│  hooks, forms, context,    │ │
│   │  signals/chains │  by    │  portals, the UX surface   │ │
│   └────────┬────────┘        └──────────────┬─────────────┘ │
│            │                                │               │
│            └────────────┬───────────────────┘               │
│                         ▼                                   │
│              ┌──────────────────────┐                       │
│              │        STAFF         │                       │
│              │  the bus + the DBs   │                       │
│              │  everything moves    │                       │
│              │  through here        │                       │
│              └──────────────────────┘                       │
└─────────────────────────────────────────────────────────────┘
```




```tsx
/THE_WIZARD
├── STAFF: THE DATA GOOD SOLUTION/
│   ├── STAFF/
│   │   ├── ADAPTERS/
│   │   ├── BDB/
│   │   ├── COLAB/
│   │   ├── DB/
│   │   ├── GDB/
│   │   ├── HC/
│   │   ├── KVDB/
│   │   ├── PROTOCOLS/
│   │   ├── RDB/
│   │   ├── PRxCDB/
│   │   ├── SIGNALS/
│   │   ├── SOLUTIONS/
│   │   ├── SSE/
│   │   ├── STREAMS/
│   │   ├── TDB/
│   │   ├── UTILS/
│   │   ├── VDB/
│   │   ├── init.ts
│   │   ├── staff.ts
│   │   └── types.ts
│   ├── binary.ts
│   ├── distributed.ts
│   ├── drs.ts
│   ├── duplex.ts
│   ├── einstein.ts
│   ├── emitter.ts
│   ├── exe.ts
│   ├── logic_gates.ts
│   ├── sends.ts
│   ├── shared_memory.ts
│   ├── signals.ts
│   └── streams.ts
├── THE_CLOUD: THE 'APP'/
│   ├── DEV-SERVER/
│   ├── ERR_IGNORE/
│   ├── FORM/
│   ├── HOOKS/
│   ├── HOOKS-THE_FINAL_FORM/
│   ├── NON-SAURON-HOOKS/
│   ├── THE_ESSENTIALS/
│   ├── THE-CLOUD/
│   ├── UTILS/
│   └── WARD/
└── PLATFORM PRIMITIVES/
    ├── ARCANE_INSTRUMENTS/
    │    └── type_errors.md
    ├── ARCHETYPES/
    │    ├── archetypes.ts
    │    ├── archetypes_lvl2.ts
    │    └── archetypes_lvl3.md
    ├── ARTIFACTS/
    │    ├── TW/
    │    │   ├── class-group-utils.ts
    │    │   ├── config-utils.ts
    │    │   ├── create-tailwind-merge.ts
    │    │   ├── default-config.ts
    │    │   ├── extend-tailwind-merge.ts
    │    │   ├── from-theme.ts
    │    │   ├── lru-cache.ts
    │    │   ├── merge-classics.ts
    │    │   ├── merge-configs.ts
    │    │   ├── parse-class-name.ts
    │    │   ├── sort-modifires.ts
    │    │   ├── tw-join.ts
    │    │   ├── tw-merge.ts
    │    │   ├── types.ts
    │    │   ├── utils.ts
    │    │   └── validators.md
    │    ├── clsx.ts
    │    ├── cn.ts
    │    ├── code.ts
    │    ├── cva.ts
    │    ├── draggable-list.tsx
    │    ├── init_auto.ts
    │    ├── me-renderer.ts
    │    ├── tw.ts
    │    └── utils.md
    ├── ASTRAL/
    │    ├── helpers.ts
    │    ├── realm_config.ts
    │    ├── realm_grimoire.ts
    │    ├── rune_template.ts
    │    ├── temporal_velocity.tsx
    │    └── type_template.md
    ├── ASTRAL_ARTIFACTS/
    ├── CHRONOMANCY/
    ├── CONDUITS/
    ├── CONJURATION/
    ├── DEV-ENGINE/
    ├── DEV-SUITE/
    ├── DIVINATION/
    ├── ENCHANTMENT/
    ├── GRAND_MASTERS/
    ├── INCANTATIONS/
    ├── MACHINES/
    ├── NECROMANCY/
    ├── RUNES/
    ├── SCROLLS/
    ├── SIMULACRA/
    ├── THE-CLOUD/
    ├── TRANSMUTATION/
    ├── VAULTS/
    ├── VENOM/
    ├── WARDS/
    ├── WIZARD_KEEP/
    ├── WIZARD_VAULT/
    └── WORK/
```


```tsx
/THE_WARLOCK
├── STAFF: THE DATA GOOD SOLUTION/
│   ├── 00-architecture-map.md
│   ├── 01-platform-inventory.md
│   ├── 02-sauron.md
│   ├── 03-chains-and-gates.md
│   ├── 04-the-bus.md
│   ├── 05-DB-division.md
│   ├── 06-warlock-mode.md
│   ├── 07-ppk.md
│   ├── 08-kernel-nexus-houdini-ninja.md
│   └── 09-glossary.md
├── THE_CLOUD: THE 'APP'/
│   ├── 00-primitive-shape-lvl1-to-4.md
│   ├── 01-signals.md
│   ├── 02-streams.md
│   ├── 03-persistence.md
│   ├── 04-distributed.md
│   ├── 05-storage-adapters.md
│   ├── 06-chains-api.md
│   ├── 07-fused-operators.md
│   ├── 08-plugins.md
│   └── 09-migration-notes.md
└── PLATFORM PRIMITIVES/
    ├── ARCANE_INSTRUMENTS
    ├── 01-ux-dx-additive.md
    ├── 02-time-to-mastery.md
    ├── 03-user-pays-the-tax.md
    ├── 04-docs-as-editor.md
    ├── 05-golden-standard.md
    ├── 06-crm-case-study.md
    ├── 07-first-in-class.md
    ├── 08-coding-due-to-pain.md
    └── 09-once-built-what-now.md
```
