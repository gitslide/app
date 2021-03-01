# Moduł Core


# Zasada działania

+ możliwe jest załadowanie wielu treści pod jeden adres xpath
+ brak błędu, gdy adres xpath nie istnieje
+ jest w poczekalni do momentu aż pojawi się ten element w DOM tree


# Treści

Ładowanie dynamiczne poprzez dodawanie przez JS odpowiednich tagów dla:

+ javascript
+ link - style
+ image, file/base64
+ zagnieżdzony html, system pluginów


# Start 
ładowanie biblioteki jloads

```javascript [2]
Jloads is loading any media and content dynamically
<script src="//get.jloads.com/jloads.min.js"> 
</script>
```


# kaskadowe
ładowanie kaskadowe
```javascript [2-3]
jl.file([
  "//code.jquery.com/jquery-git.min.js",
  "//bootstrapcdn.com/4.4.1/js/bootstrap.min.js",
]);
```


# Hierarchicze
ładowanie Hierarchicze
```javascript [2]
jl.file({
   "//code.jquery.com/jquery-3.5.1.min.js": [
     "//bootstrapcdn.com/4.4.1/js/bootstrap.min.js",
     "//bootstrapcdn.com/4.4.1/css/bootstrap.min.css"
   ]
});
```


# Struktura

podstawowy moduł CORE
+ biblioteka do ładowania plików

Moduły służą do łączenia CORE z nowymi funkcjami:
+ analizy zdarzeń
