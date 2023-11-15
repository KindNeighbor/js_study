$(document).ready(function () {
    $('#jstree').jstree({
        'core' : {
            'data' : [
                { "id" : "1", "parent" : "#", "text" : "Root node" },
                { "id" : "2", "parent" : "1", "text" : "Child node 1" },
                { "id" : "3", "parent" : "1", "text" : "Child node 2" },
                { "id" : "4", "parent" : "2", "text" : "Child Child node 1" },
                { "id" : "5", "parent" : "2", "text" : "Child Child node 2" }
            ]
        }
    });
});