# Moduł Core


# Funkcje

+ możliwe jest załadowanie wielu treści pod jeden adres xpath
+ brak błędu, gdy adres xpath nie istnieje
+ jest w poczekalni do momentu aż pojawi się ten element w DOM tree


# Treści

Ładowanie dynamiczne poprzez dodawanie przez JS odpowiednich tagów dla:

+ javascript
+ link - style
+ image, file/base64
+ zagnieżdzony html, system pluginów

# ładowanie biblioteki jloads

```javascript                
    <script src="//get.jloads.com/jloads.min.js">
       // Jloads is loading any media and content dynamically
    </script>
```

# ładowanie kaskadowe

```javascript [1|2-3]                    
jl.file([
  "//code.jquery.com/jquery-git.min.js",
  "//stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
]);
```

# Hierarchicze

 ```javascript [1|2|3-4]                
jl.file({
   "//code.jquery.com/jquery-3.5.1.min.js": [
     "//stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
     "//stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
   ]
});
 ```


# Złożone ładowanie

```javascript [1|3-4|8-9]                
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

# Struktura

podstawowy moduł CORE
+ biblioteka do ładowania plików

Moduły służą do łączenia CORE z nowymi funkcjami:
+ analizy zdarzeń
