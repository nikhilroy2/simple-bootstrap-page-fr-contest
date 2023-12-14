// =======================Homepages List =====================
new DataTable('#homepage_list_table', {
    ajax: '../json/homepage_list.json',
    columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'url' },
        { data: 'description' },
        { data: 'instagram' },
        { data: 'youtube' },
        { data: 'tiktok' },
        { data: 'details' }
    ],
    columnDefs: [
        {
            targets: 4,
            createdCell: function (td, data) {
                $(td).html(`<a target="_blank" class="fw-bold text-primary text-opacity-75" href="https://instagram.com/${data}"> ${data} </a>`)
            }
        },
        {
            targets: 5,
            createdCell: function (td, data) {
                $(td).html(`<a target="_blank" class="fw-bold text-primary text-opacity-75" href="https://youtube.com/${data}"> ${data} </a>`)
            }
        },
        {
            targets: 6,
            createdCell: function (td, data) {
                $(td).html(`<a target="_blank" class="fw-bold text-primary text-opacity-75" href="https://tiktok.com/${data}"> ${data} </a>`)
            }
        },
        {
            targets: 7,
            createdCell: function (td, data, data2) {
                $(td).html(`<a target="_blank" class="fw-bold btn btn-primary btn-sm text-uppercase" href="/details.html?details_id=${data2.id}"> Details </a>`)
            }
        }
        // { targets: '_all', visible: false }
    ]
});

// =======================Homepages List =====================End


// =====================Homepage details ======================

let details_id = window.location.search.replace(/[^0-9]/g, '');
let dataTable = new DataTable('#homepage_list_table_details', {
    ajax: '../json/homepage_list.json',
    columns: [
        { data: 'id', type: 'num' },
        { data: 'name' },
        { data: 'url' },
        { data: 'description' },
        { data: 'instagram' },
        { data: 'youtube' },
        { data: 'tiktok' },
        // { data: 'details' }
    ],
    columnDefs: [
        {
            targets: 4,
            createdCell: function (td, data) {
                $(td).html(`<a target="_blank" class="fw-bold text-primary text-opacity-75" href="https://instagram.com/${data}"> ${data} </a>`)
            }
        },
        {
            targets: 5,
            createdCell: function (td, data) {
                $(td).html(`<a target="_blank" class="fw-bold text-primary text-opacity-75" href="https://youtube.com/${data}"> ${data} </a>`)
            }
        },
        {
            targets: 6,
            createdCell: function (td, data) {
                $(td).html(`<a target="_blank" class="fw-bold text-primary text-opacity-75" href="https://tiktok.com/${data}"> ${data} </a>`)
            }
        },
        
        // { targets: '_all', visible: false }
    ],
    initComplete: function () {
        // Search for the details_id in the 'id' column
        dataTable.search(details_id.toString()).draw();
    },
});

// Filter the DataTable by id
// =====================Homepage details ======================End
