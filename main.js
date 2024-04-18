document.addEventListener('DOMContentLoaded', function() {
    function getNextBirthday() {
        const today = new Date();
        const currentYear = today.getFullYear();
        let birthday = new Date(`January 25, ${currentYear} 00:00:00`);

        // Se já passou o aniversário deste ano, definir para o próximo ano
        if (today > birthday) {
            birthday = new Date(`January 25, ${currentYear + 1} 00:00:00`);
        }

        return birthday.getTime();
    }

    const countdownFunction = setInterval(function() {
        const targetDate = getNextBirthday();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = days + " dias " + hours + " horas "
        + minutes + " minutos " + seconds + " segundos";

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById('countdown').innerHTML = "É hoje!";
            setTimeout(function() {
                setInterval(countdownFunction, 1000);
            }, 2000); // Recarrega a contagem após o aniversário ter passado
        }
    }, 1000);
});
