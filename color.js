    var btn_color = document.querySelector(".btn_color");
    var btn1 = document.getElementById("btn");
    var border_color = document.querySelector(".border_color");
    var body = document.getElementById("body");
    var bgcolor=document.querySelector(".bg_color");
    function color()
    {
        btn1.style.backgroundColor = btn_color.value;
        console.log(btn_color.value);
    }
    function border()
    {
        btn1.style.borderColor=border_color.value;
    }
    function bg()
    {
        body.style.backgroundColor=bgcolor.value;
    }
    btn_color.addEventListener("input",color);
    border_color.addEventListener("input",border);
    bgcolor.addEventListener("input",bg);