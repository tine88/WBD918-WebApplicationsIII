# Blog
## Layout #0 Costs: 1.5h Prio 1
## Alle Blogeinträge darstellen (mvp) Costs: 85m ~ 90m Prio 2.5
- Alle anzeigen **cost: 20m**
- Page für die Detail-Post view #1 **cost: 15m**
- Back to Blog Page link #2 **cost: 5m**
- Pagination #3 **cost: 45**
## Management UI für die Blogeinträge (mvp) Costs: 140m Prio 2
- Liste mit allen Blogeinträgen #9 **cost: 15m**
    - Edit und Delete buttons für die Einträge - anlegen und verlinken #9.1 **cost: 5m**
    - Pagination für Einträge #9.2 **cost: 5m**
    - Edit Page **cost: 15m**
- User können Beiträge verfassen #4 **cost: 25min**
- Validation von Eingaben #5  **cost: 10min**
- Einträge können gelöscht werden #6 **cost: 5min**
    - Admin darf löschen, author nicht. #6.1 **cost: 5-10m**
- Einträge können bearbeitet werden #7 **cost: 35min**
    - Bearbeitet werden darf nur von Authoren des Artikels #7.1 (future)
- Blogeinträge können via Sichtbarkeit ein und ausgeblendet werden. #8 **cost: 10m**
## Login - Logout (Authentifizierung, Authorisierung) (mvp) **costs: 205m** Prio 3
- Login Formular #10 **cost: 10min**
    - Validierung + Error Handling #10.1 **cost: 15m**
- State Management - Session im Frontend (localstorage) #14 **cost: 30-40**
- Integration Passport in Laravel #11 **costs: 2h**
- Authentifizierung via Token (angefordert oder Wildcard) #12 **costs: 10min**
- Logout Link #13 **costs: 10m**
## Register (mvp) **cost 30min** Prio 4
- Eingabemaske (Formular) #15 **costs: 10min**
    - Validierung der Datenmenge + Error Handling #15.1 **20min**

## Rollensystem (future)
- Moderator
- Admin
- User 

## Mailing Service (future)
- Register success

## Suche (maybe) (future)
