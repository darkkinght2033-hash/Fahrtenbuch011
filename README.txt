Fahrtenbuch GitHub Pages – Version 25

WICHTIGER FIX:
- Alter Splash Screen vollständig entfernt.
- Neuer Splash hat eigene ID und komplett neue CSS-Klassen.
- Splash-Bild umbenannt zu splash_w204_v25.png, damit Browser/GitHub kein altes Bild aus dem Cache nimmt.
- Service Worker komplett erneuert.
- Alte Cache-Versionen werden beim Aktivieren gelöscht.
- HTML wird Network-First / no-store geladen.
- Neue Cache-Control-Meta-Tags verhindern hartnäckige alte HTML-Versionen.

Neuer Ladebildschirm:
- realistischer W204
- Vollbild
- großer FAHRTENBUCH-Schriftzug
- dynamische Geschwindigkeit bis ca. 230 km/h
- HUD-Tacho
- Licht-Sweep
- 4,2 Sekunden Ladeanimation

GitHub:
ALLE Dateien aus dieser ZIP hochladen/ersetzen.
Besonders wichtig:
index.html
sw.js
splash_w204_v25.png
