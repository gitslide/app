# Moduły

podstawowy moduł CORE
+ biblioteka do ładowania plików

Moduły służą do łączenia CORE z nowymi funkcjami:
+ analizy zdarzeń


# Lista
Obecnie dostępne są rozwiązania:

+ jloads - klasa do wywołania każdego typu poniżej:
+ jloads.obj
+ jloads.url
+ jloads.content
+ jloads.event

# Core
jloads.js
jloads-event.js
jloads-file.js
jloads-form.js
jloads-obj.js
jloads-target.js

### JSON
loads json object from url as object

    jloadsObj("json/sentence.json", function (obj, url) {
        console.log(obj["q&a"], url);
        each(obj["q&a"], function (v,k) {
            var varr = v.split(' ');
            console.log(k,v,varr);
            $('input[name="first"]').val(varr);
        });
    });


# url
check url an load what exactly is in url


# target
funkcja ma za zadanie rozpoznać typ pliku po rozszerzeniu i go załadować
może zostać przetworzone. 

W pliku JSON określa się selector i do niego ładuje zawartość pliku



# event

w momencie zdarzenia jest ładowany określony plik lub zmieniana wartość
Można określić precyzyjnie zdarzenie i zawartość jaka ma ulec zmianie


# value


ma za zadanie załadować określoną treść w określony xpath

    xpath: value

tutaj jest istotne by nie zapomnieć dokładnej ścieżki, aby nie było konfliktów

to rozwiązanie dla bardziej doświadczonych użytkowników


domyślnie dodaj element do strony

value nie jest analizowane, tylko kolejno wstrzykiwane
