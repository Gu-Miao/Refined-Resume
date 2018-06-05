function tipCollapse() {
    var self = window.event.target;
    console.log(self.id)
    switch(self.id) {
        case "tip1":
            var target = $('#collapseOne');
            break;
        case "tip2":
            var target = $('#collapseTwo');
            break;
        case "tip3":
            var target = $('#collapseThree');
            break;
        case "tip4":
            var target = $('#collapseFour');
            break;
        case "tip5":
            var target = $('#collapseFive');
            break;
        case "tip6":
            var target = $('#collapseSix');
            break;
        case "tip7":
            var target = $('#collapseSeven');
            break;
        case "tip8":
            var target = $('#collapseEight');
            break;
        default:
            break;   
    }

    var id = 1;
    for(let i = 0; i < target[0].classList.length; i++) {
        if(target[0].classList[i] == "in") {
            id = 0;
        }
    }
    
    if(id == 0) {
        target.collapse('hide');
    } else {
        target.collapse('show');
    }
}