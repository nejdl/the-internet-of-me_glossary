console.log('hellur');
    function toggleVisibilityElementstairs (){
        document.getElementById('elementstairs-children').classList.toggle('hidden')
    }
    function toggleVisibilityElementorange (){
        document.getElementById('elementorange-children').classList.toggle('hidden')
    }
    function toggleVisibilityElementpolaroid (){
        document.getElementById('elementpolaroid-children').classList.toggle('hidden')
    }
    function toggleVisibilityElementtext (){
        document.getElementById('elementtext-children').classList.toggle('hidden')
    }
    function toggleVisibilityElementplatte (){
        document.getElementById('elementplatte-children').classList.toggle('hidden')
    }
    function toggleVisibilityElementblume (){
        document.getElementById('elementblume-children').classList.toggle('hidden')
    }
    function toggleVisibilityElementkabel (){
        document.getElementById('elementkabel-children').classList.toggle('hidden')
    }
    function toggleVisibilityElementheft (){
        document.getElementById('elementheft-children').classList.toggle('hidden')
    }
    function toggleVisibilityElementinfo (){
        document.getElementById('elementinfo-children').classList.toggle('hidden')
    }
    // MOUSEMOVE EVENT LISTENER
    const body = document.body;
    const hand = document.getElementById("hand");

    body.addEventListener("mousemove", function (e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      // console.log(mouseX, mouseY);

      hand.style.left = mouseX + "px";
      hand.style.top = mouseY + "px";
    });

    // TOUCHMOVE EVENT LISTENER
    body.addEventListener("touchmove", function () {
      const touch = e.touches[0];
      const touchX = e.touch.clientX;
      const touchY = e.touch.clientY;
      // console.log(touchX, touchY);

      hand.style.left = mouseX + "px";
      hand.style.top = mouseY + "px";
    });
