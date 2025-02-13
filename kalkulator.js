let ekran = document.getElementById("ekran");
let buttons = Array.from(document.querySelectorAll(".wszystkiePrzyciski button"));
let currentValue = "";  // Bieżąca wartość na ekranie (np. "2+")
let firstValue = null;  // Pierwsza liczba
let operator = null;    // Operator, np. "+"
let operatorClicked = false;  // Sprawdzamy, czy operator już został kliknięty

buttons.forEach(button => {
    button.addEventListener("click", function() {
        if (button.id === "c") {
            // Zresetuj kalkulator (czyści ekran, zmienne)
            ekran.innerText = "0";
            currentValue = "";
            firstValue = null;
            operator = null;
            operatorClicked = false;
        } else if (button.id === "=") {
            // Wyświetlenie tekstu "Kliknij mnie" po kliknięciu "="
            let kliknijTekst = document.createElement("p"); // Tworzymy element <p> na tekst
            kliknijTekst.innerText = "Kliknij mnie";
            kliknijTekst.id = "kliknij-mnie";
            kliknijTekst.style.cursor = "pointer";  // Dodanie kursora wskazującego, że to klikalne

            // Dodanie eventu, który przekierowuje po kliknięciu
            kliknijTekst.addEventListener("click", function() {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // Otwiera link w nowej karcie
            });

            // Dodanie tekstu na stronę
            document.body.appendChild(kliknijTekst);

            // Zresetowanie kalkulatora po kliknięciu "="
            ekran.innerText = "Jg diff";
            currentValue = "";
            firstValue = null;
            operator = null;
            operatorClicked = false;

            // Przekierowanie na Rickroll w nowej karcie
            window.open("https://www.youtube.com/watch?v=onY9eHi_eco", "_blank"); // Rickroll w nowej karcie
        } else if (button.id === "<") {
            // Usuwanie jednej liczby
            currentValue = currentValue.slice(0, -1);
            ekran.innerText = currentValue || "0";
        } else if (["+", "-"].includes(button.id)) {
            // Obsługuje operacje + i -
            if (!operatorClicked && currentValue !== "") {
                // Dodaj operator do bieżącej wartości, np. "2+" lub "3-" 
                currentValue += button.innerText;
                ekran.innerText = currentValue;
                operator = button.id;  // Zapamiętanie operatora
                operatorClicked = true;  // Zablokowanie kolejnego operatora
            }
        } else if (button.id === "?") {
            // Po kliknięciu ? wyświetl komunikat w okienku alert
            alert("Popatrz na stronie za przyciskami");
        } else {
            // Jeśli naciśnięto cyfrę
            if (currentValue.length < 12) {  // Limit znaków na 12
                currentValue += button.innerText;
                ekran.innerText = currentValue;
                operatorClicked = false;  // Po wprowadzeniu liczby, pozwalamy na kolejny operator
            }
        }
    });
});
