# Simulation

Aplikacja do symulacji finansowej salonu masażu. Pozwala wprowadzać parametry biznesu (godziny otwarcia, liczba stanowisk, personel, stawki, koszty) i na bieżąco oblicza wykorzystanie salonu, przychód, dochód oraz próg rentowności w ujęciu dziennym lub miesięcznym.

Projekt zawiera również widok kalendarza i raportów, zbudowany w architekturze MVP (Model–View–Presenter).

## Technologie

- HTML, CSS, JavaScript (moduły ES)
- Tailwind CSS (standalone)
- daisyUI
- FullCalendar Scheduler
- ApexCharts
- Font Awesome

## Instalacja

Sklonuj repozytorium:

```bash
git clone https://github.com/TWOJE_KONTO/simulation.git
cd simulation
```

## Tryby pracy

Projekt obsługuje dwa tryby. Wybór polega na (od)komentowaniu odpowiednich bloków w `index.html`.

### Tryb binarki (lokalny, domyślny)

Tailwind i daisyUI działają lokalnie — pracuje offline, generuje zoptymalizowany `output.css`.

W `index.html` aktywny pozostaje blok `TRYB BINARKI`, blok `TRYB CDN` zakomentowany.

1. Pobierz binarki:
```
scripts\install-tailwind-daisy.bat
```
2. W osobnym terminalu uruchom watcher generujący `output.css`:
```
scripts\watch.bat
```
3. Otwórz projekt w VS Code i kliknij **Go Live** (plugin Live Server).

### Tryb CDN

Tailwind i daisyUI ładowane z internetu — nie wymaga instalacji ani watcher'a.

1. W `index.html` zakomentuj blok `TRYB BINARKI` i odkomentuj blok `TRYB CDN`.
2. Otwórz projekt w VS Code i kliknij **Go Live**.