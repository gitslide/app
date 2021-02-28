# Załadowanie

    <script src="//get.jloads.com/jloads.min.js">
       // Jloads is loading any media and content dynamically
    </script>

# ładowanie kaskadowe 

    jl.file([
      "//code.jquery.com/jquery-git.min.js",
      "//stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
    ]);

# Hierarchicze

 
     jl.file({
       "//code.jquery.com/jquery-3.5.1.min.js": [
         "//stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
         "//stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
       ]
     });
 

# Złożone ładowanie

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


# demo
Proste przeładowanie tła, tekstu, grafiki
+ [get.jloads.com](https://get.jloads.com/)


# Formularz
+ [FaaS](https://www.faas.ovh/)
+ [faas-ovh/www: Website](https://github.com/faas-ovh/www)

# Edytor
+ [edit](https://edit.ovh/)
+ [plainedit/flat: Edit is an example on ovh domain](https://github.com/plainedit/flat)

# Edukacja 
Aplikacja do nauki gramatyki j. niemieckiego
+ [www.gramatyka .de](https://www.gramatyka.de/)
+ [tom-sapletta-com/gramatyka-de: Nauka Gramatyki Niemieckiej poprzez matrycę](https://github.com/tom-sapletta-com/gramatyka-de)



# Routing

jak działa?

przykłady wykorzystania

[examples](examples/index.md)
[contribution](contribution/index.md)
