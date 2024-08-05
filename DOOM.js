document.getElementById("titulo").textContent = "Ejercicios DOOM desde Js";

     
        var cajas = document.getElementsByClassName("caja");
        for (var i = 0; i < cajas.length; i++) {
            cajas[i].style.backgroundColor = "Yellow";
        }

        var items = document.getElementsByTagName("li");
        for (var i = 0; i < items.length; i++) {
            items[i].textContent += " " + (i + 1);
        }

        
        var primerInput = document.querySelector("input[type='text']");
        primerInput.placeholder = "Introduce tu nombre";

        
        var parrafos = document.querySelectorAll("p");
        for (var i = 0; i < parrafos.length; i++) {
            parrafos[i].classList.add("nuevo-color");
        }