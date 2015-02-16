// functions to support showing and hiding of examples in the file wrapping.html

function highlight (cell) {
    cell.style.fontWeight = '900';
    }

function unhighlight (cell) {
    cell.style.fontWeight = '100';  
    }

function showThis ( choice ) {
    var nodes = new Array;
    nodes = document.getElementsByTagName("p");
    for (var i=0; i < nodes.length; i++) {
        nodes[i].style.display = 'none';
        }
    choice.style.display = '';
    }

function showAll () {
    var nodes = new Array;
    nodes = document.getElementsByTagName("p");
    for (var i=0; i < nodes.length; i++) {
        nodes[i].style.display = '';
        }
    }

function init  () {
    var nodes = new Array;
    nodes = document.getElementsByTagName("p");
    for (var i=0; i < nodes.length; i++) {
        nodes[i].style.display = 'none';
        }
    document.getElementById('english').style.display = '';
    }

