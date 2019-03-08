(function() {
    window.onload = function() {
        canvas = document.getElementById("snake");
        ctx = canvas.getContext("2d");

        // Screens
        screen_snake = document.getElementById("snake");
        screen_menu = document.getElementById("menu");
        screen_gameover = document.getElementById("gameover");
        screen_settings = document.getElementById("settings");

        // Buttons
        button_newgame_menu = document.getElementById("newgame_menu");
        button_newgame_settings = document.getElementById("newgame_settings");
        button_newgame_gameover = document.getElementById("newgame_gameover");
        button_settings_menu = document.getElementById("settings_menu");
        button_settings_gameover = document.getElementById("settings_gameover");

        // etc
        ele_score = document.getElementById("score_value");
        speed_settings = document.getElementsByName("speed");
        wall_settings = document.getElementsByName("wall");

        // --------------------

        button_newgame_menu.onclick = function() {
            newGame();
        };
        button_newgame_gameover.onclick = function() {
            newGame();
        };
        button_newgame_settings.onclick = function() {
            newGame();
        };
        button_settings_menu.onclick = function() {
            showScreen(2);
        };
        button_settings_gameover.onclick = function() {
            showScreen(2);
        };

        setSnakeSpeed(150);
        setWall(1);

        showScreen("menu");

        // --------------------
        // settings

        // speed
        for (var i = 0; i < speed_settings.length; i++) {
            speed_settings[i].addEventListener("click", function() {
                for (var i = 0; i < speed_settings.length; i++) {
                    if (speed_settings[i].checked) {
                        setSnakeSpeed(speed_settings[i].value);
                    }
                }
            });
        }

        // wall
        for (var i = 0; i < wall_settings.length; i++) {
            wall_settings[i].addEventListener("click", function() {
                for (var i = 0; i < wall_settings.length; i++) {
                    if (wall_settings[i].checked) {
                        setWall(wall_settings[i].value);
                    }
                }
            });
        }

        document.onkeydown = function(evt) {
            if (screen_gameover.style.display == "block") {
                evt = evt || window.event;
                if (evt.keyCode == 32) {
                    newGame();
                }
            }
        };
    };
})();
