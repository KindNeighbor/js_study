$(document).ready(function () {
    var mydata = [
        { id: "1", name: "Peter", email: "peter@gmail.com", phone: "1234567890" },
        { id: "2", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "3", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "4", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "5", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "6", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "7", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "8", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "9", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "10", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "11", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "12", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "13", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "14", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "15", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "16", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "17", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "18", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "19", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "20", name: "John", email: "john@gmail.com", phone: "0987654321" },
        { id: "21", name: "John", email: "john@gmail.com", phone: "0987654321" },
    ];

        $("#jqGrid").jqGrid({
        datatype: "local",
        data: mydata,
        colModel: [
            { label: 'ID', name: 'id', key: true, width: 75 },
            { label: 'Name', name: 'name', width: 140 },
            { label: 'Email', name: 'email', width: 150 },
            { label: 'Phone', name: 'phone', width: 100 },
        ],
        viewrecords: true,
        width: 780,
        height: 250,
        rowNum: 10,
        pager: "#jqGridPager"
    });
});