# Moduły


# Status
Dostępne moduły:

+ jloads - klasa do wywołania każdego typu poniżej:
    + jloads.target
    + jloads.url
    + jloads.event
    + jloads.obj


# Pliki
+ jloads.js ->jloads.min.js 
+ jloads-event.js
+ jloads-file.js
+ jloads-form.js
+ jloads-obj.js
+ jloads-target.js


# JSON
loads json object from url as object

 ```javascript [1|4-7]
jl.obj("json/sentence.json", function (obj, url) {
    console.log(obj["q&a"], url);
    
    each(obj["q&a"], function (v,k) {
      var varr = v.split(' ');
      console.log(k,v,varr);
      $('input[name="first"]').val(varr);
    });
});
```

# Url
check url an load what exactly is in url

### Przykład:


# Url:
```javascript [3-4|8-9]
jl.url({
  "head": [
    "jquery-3.2.1.min.js",
    "codemirror/lib/codemirror.js", 
    ...
  ],
  "#forms": [
    "form/test.html",
    "css/codemirror.css",
  ]
});
```

# Target
Funkcja ma za zadanie rozpoznać typ pliku po rozszerzeniu i go załadować
może zostać przetworzone. 
W pliku JSON określa się selector i do niego ładuje zawartość pliku

### Przykład:


# Target:
```javascript [3-4|8-9]
jl.target({
  "head": [
    "jquery-3.2.1.min.js",
    "codemirror/lib/codemirror.js", 
    ...
  ],
  "#forms": [
    "form/test.html",
    "css/codemirror.css",
  ]
});
```


# Form
Wysyłka danych metodą: 
+ POST
+ GET
+ UPDATE
+ DELETE

### Przykład:


# Form:
```javascript [3-4|8-9]
jl.form({
  
});
```
