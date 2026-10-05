document.addEventListener("DOMContentLoaded", () => {

    /*
        ANIMACJA STRONY
    */

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity = "1";

    }, 100);



    /*
        PRZYCISKI DISCORD
    */

    const buttons =
        document.querySelectorAll(".join-button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.innerHTML =
                "💜 Dołączanie...";

        });

    });



    /*
        OKNO POWITALNE
    */

    const welcome =
        document.getElementById("welcome");

    const closeWelcome =
        document.getElementById("closeWelcome");


    setTimeout(() => {

        welcome.classList.add("show");

    }, 500);


    closeWelcome.addEventListener("click", () => {

        welcome.classList.remove("show");

    });



    /*
        LICZNIK ODWIEDZIN
    */

    let visits =
        localStorage.getItem("visits");


    if (visits === null) {

        visits = 0;

    }


    visits++;


    localStorage.setItem(
        "visits",
        visits
    );

});