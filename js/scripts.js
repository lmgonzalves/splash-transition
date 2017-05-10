(function() {
    
    var button = document.querySelector('button');

    button.addEventListener('click', function () {
        // Toggle 'open-state' class
        document.body.classList.toggle('open-state');

        button.classList.add('hidden');
        setTimeout(function () {
            button.classList.remove('hidden');
        }, 2000);
    });

})();
