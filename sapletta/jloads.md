
Wstęp, przywitanie

O autorze

O firmie

O bibliotece




Temat

Interface

Streamowanie

Funkcje

Sposob uzycia

Korzysci



Cel powstania

Jakie jest miejsce tego rozwiązania przy aktualnym stanie technologii

Jakie są podobne rozwiązania

Obecna sytuacji, przykłady użycia

Obszar zastosowan

ograniczenia

Mozliwosci



Historia powstania

Problemy

Możliwości

Przyszłe rozwiązania, planowane implementacje



# Sens Prezentacji


## Punkt widzenia
+ skillset
+ mindset

przedstawienie punktu widzenia osoby, która nie jest rasowym programistą.

Każdy z nas ma w różnych tematach różne punkty widzenia:
+ Entuzjasta
+ Nauczyciel
+ Innowator


## Moje podejście do jLoads 

## Entuzjasta (30%)
Cieszy sie wszystkim co nowe w danym obszarze tematycznym
dzieli się danymi technicznymi i sposobem użycia
Skupienie na innowacyjności

## Nauczyciel (10%)
Skupienie na definicji, logice, znaczeniu
Czasem to dalszy etap entuzjazmu
stara się wytłumaczyć jak można tego używać


## Innowator, Twórca, Developer (60%)
Skupienie na miejscu w przestrzeni, jej wykorzystaniu, brakach, możliwościach
Mając informacje o tym stara się to zmienić lub zainicjowac zmianę



# Temat Przentacji

## jLoads Czyli co?

Forma
+ biblioteka

W zależności od użycia:
+ routowanie mediów
+ proxy

Dystrybucja
+ paczka npm
+ plik github
+ ...


# Cel Projektu

Eksperyment jako inspiracja do odrywania czegoś poza
horyzentom obecnych trendó.
Uchwycenie teczhnicznej natury www



Pierwszy zamysł był taki
aby możliwe było uruchomienie na tym samym kodzie
aplikcji w różnym środowisku, różnej domenie

+ refaktorywzacja -> reużycie
+ przejmowanie po kimś projektów, chęć dokoknania drobnych kosmetycznych zmian
+ a czasem przemeblowanie cłaościowe, ale z użyciem już napisanego kodu
  wykorzystując modularyzacje

# 5x Dlaczego

## Dlaczego Streamowanie?
Z punktu widzenia architektury, ostatnio dużo się w tym temacie zmienia


## Dlaczego JS?
JS jako monopolista, ucieszka w abstrakcje nie załatwia problemu, 
Specyfika JS jest niedoceniona
to jezyk do prototypowania !

chciałem pozostać natywny w celu zapewnienia
Dlaczego chciałem to stworzyć?


## Dlaczego używać, do czego


# sens obserwacji
+ natura świata
+ ludzkie modele abstrakcyjne
    + postrzeganie
    + zastosowanie
    + problemy




# Sens działania, tworzenia
uzycie, doświadczenie, zrozumienie, ulepszenie

Po dekadzie developmentu, postanowiłem zebrać razem wszystkie przemyślenia
Od kilku lat notorycznie publiuję kod.

Zmiana następuje beze mnie, ale
mogę zrozumieć/uchwycić trend wynikający z wielu nieznanych mi czynników

Dlatego ten experyment



# Sens Streamowania





# Sens Poszukiwań

Wiele protokołów jest ksupionych na dostarczaniu treści do urządzenia a nie jej tworzeniem i dostosowaniem pod klienta.

Punktem wspólnym dla twórcy, nadawcy i jest serwer, gdzie dane są definiowane

Twórca - tworzy -> repozytorium, pakowanie w paczki
+ serwer twórcy
  przygotowuje je pod własną domeną lub dystrybutora do wysyłki w postaci: HTTP Request

Dystrybutor treści
zbiera i formatuje, transmituje

Nadawca - nadaje wiadomosć
zarządza danymi, planuje
przygotowuje je do wysyłki w postaci: HTTP Request

Odbiorca
- odbiera i daje informacje zwrotne: w postaci HTTP Response



Twórca  | Nadawca       | Odbiorca
------- | ------------- | -------------
Cel     | Content Cell  | Content Cell
Tech    | Content Cell  | Content Cell




## Media strumieniowe

technika dostarczania informacji multimedialnej przez Internet,
od dostawcy transmisji strumieniowej do użytkownika, w sposób nieprzerywany.

Projektowanie protokół sieciowy do obsługi mediów strumieniowych rodzi wiele problemów.



## Protokoły strumieniowe

+ UDP
+ RTSP
+ RTCP
+ RTP


## UDP
protokół datagramów użytkownika

wysyła strumień mediów w postaci szeregu małych paczek.
Jest on prosty i skuteczny.
Jednak nie ma mechanizmu w protokole, aby zapewnić stały przepływ danych.

Odnosi się to do aplikacji wykrywającej utratę,
uszkodzenie oraz odzyskanie danych przy użyciu technik korekcji błędów.


## Protokoły poziomu aplikacji
do strumieniowego przesyłania multimediów w sieciach, tj.:

### Real-time Streaming Protocol (RTSP),

### Real-time Transport Control Protocol (RTCP),

### Real-time Transport Protocol (RTP).




# slides
Slides for Conference about jLoads






## HTTP

HTTP (ang. Hypertext Transfer Protocol)
– protokół przesyłania dokumentów hipertekstowych to protokół sieci WWW (ang. World Wide Web).
Obecną definicję HTTP stanowi RFC 2616 ↓.
Za pomocą protokołu HTTP przesyła się żądania udostępnienia dokumentów WWW i informacje
o kliknięciu odnośnika oraz informacje z formularzy.
Zadaniem stron WWW jest publikowanie informacji – natomiast protokół HTTP właśnie to umożliwia.

Jest zaliczany do protokołów bezstanowych (ang. stateless) z racji tego, że
nie zachowuje żadnych informacji o poprzednich transakcjach z klientem
(po zakończeniu transakcji wszystko "przepada").
Pozwala to znacznie zmniejszyć obciążenie serwera, jednak jest kłopotliwe w sytuacji, gdy
np. trzeba zapamiętać konkretny stan dla użytkownika, który wcześniej łączył się już z serwerem.
Najczęstszym rozwiązaniem tego problemu jest wprowadzenie mechanizmu ciasteczek. Inne podejścia to m.in. sesje po stronie serwera, ukryte parametry (gdy aktualna strona zawiera formularz) oraz parametry umieszczone w URL-u (jak np. /index.php?userid=3).

https://pl.wikipedia.org/wiki/Hypertext_Transfer_Protocol




## Media strumieniowe

Media strumieniowe – technika dostarczania informacji multimedialnej przez Internet, od dostawcy transmisji strumieniowej do użytkownika, w sposób nieprzerywany. Media strumieniowe opierają się na transmisji skompresowanych danych multimedialnych

Projektowanie protokół sieciowy do obsługi mediów strumieniowych rodzi wiele problemów. Protokoły strumieniowe, takie jak protokół datagramów użytkownika (UDP), wysyła strumień mediów w postaci szeregu małych paczek. Jest on prosty i skuteczny. Jednak nie ma mechanizmu w protokole, aby zapewnić stały przepływ danych. Odnosi się to do aplikacji wykrywającej utratę, uszkodzenie oraz odzyskanie danych przy użyciu technik korekcji błędów. W tym celu zostały zaprojektowane protokoły poziomu aplikacji specjalnie do strumieniowego przesyłania multimediów w sieciach, tj.:

Real-time Streaming Protocol (RTSP),
Real-time Transport Control Protocol (RTCP),
Real-time Transport Protocol (RTP).



https://pl.wikipedia.org/wiki/Media_strumieniowe



## RTSP

RTSP (ang. Real Time Streaming Protocol) jest protokołem poziomu aplikacji, mającym za zadanie sterowanie dostarczaniem danych czasu rzeczywistego. Mimo że jest on wręcz powszechnie stosowany w aplikacjach związanych z przesyłaniem danych multimedialnych (pierwszy dokument RFC datowany jest na kwiecień 1998), nie jest on jeszcze ustanowionym oficjalnie standardem, lecz jedynie jego propozycją ulegającą ciągłym zmianom i korektom (ang. draft). Protokół RTSP dostarcza użytkownikowi jakby elastycznego szkieletu, bazy, która może być rozwijana i dopasowywana do potrzeb użytkownika, aby umożliwić sterowanie transmisją na żądanie danych czasu rzeczywistego takich jak audio i wideo. Źródła danych mogą zawierać dane dwojakiego rodzaju: materiały odtwarzane „na żywo” oraz gromadzone w bazie danych do późniejszego odtworzenia. Protokół w założeniu jego twórców (m.in. firma RealNetworks) ma służyć kontroli jednocześnie wielu sesji transmisji danych, dostarczając środki do wyboru kanału transportowego jak np. UDP, rozgałęziany UDP i TCP oraz środki do wyboru odpowiednich mechanizmów działania opartych na protokole RTP.

Protokół RTSP steruje strumieniem, który może być przesyłany za pomocą odrębnego protokołu, niezależnego od kanału kontrolnego. Np. sterowanie RTSP może pojawiać się w połączeniu TCP, gdy dane przesyłane są z użyciem protokołu UDP. Tym sposobem dane dostarczane są nieprzerwanie, nawet gdy żądania RTSP nie zostaną odebrane przez serwer mediów. Równocześnie pojedynczy strumień mediów może być kontrolowany przez żądania RTSP wysyłane sekwencyjnie na różne połączenia TCP. Jednakże serwer musi zachowywać tzw. stan sesji, by móc dobrze kontrolować współdziałanie żądań RTSP ze strumieniem.

Poniżej przedstawiono sposoby (komendy) odgrywające główną rolę w definiowaniu przemieszczeń i użycia zasobów strumienia na serwerze:

SETUP – powoduje umieszczenie zasobów serwera w strumieniu i utworzenie sesji RTSP,
PLAY – uruchamia transmisję danych zawartych w strumieniu po wcześniejszej komendzie SETUP,
PAUSE – okresowo zatrzymuje strumień (transmisję) bez zwalniania zasobów serwera,
REDIRECT – wykrywa, że sesja powinna zostać przeniesiona na nowy serwer (do innego miejsca),
PING – chroni sesje przed przeterminowaniem (ang. timeout),
TEARDOWN – zwalnia zasoby serwera połączone ze strumieniem. Sesja RTSP zostaje przerwana.
GET_PARAMETER – pobiera wartości wybranych parametrów dla URI, może być użyte do testowania dostępności klineta lub serwera
SET_PARAMETER – ustawia wartości wybranych paramertów dla URI
OPTIONS
DESCRIBE
RECORD
ANNOUNCE
Komendy używane przez protokół RTSP wykorzystują pola nagłówka sesji, aby zidentyfikować sesję RTSP, której stan jest zmieniany. Serwer generuje identyfikatory sesji w odpowiedzi na żądania SETUP.


https://pl.wikipedia.org/wiki/Real_Time_Streaming_Protocol




