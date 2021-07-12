let quickNav = [
    {
        id: 'q-1',
        name: '1. Dealer & Customer Info',
        href: 'f-1'
    },
    {
        id: 'q-2',
        name: '2. Deal Info',
        href: 'f-2'
    },
    {
        id: 'q-3',
        name: '3. Vehicle Information',
        href: 'f-3'
    },
    {
        id: 'q-4',
        name: '4. Sale Information',
        href: 'f-4'
    },
    {
        id: 'q-5',
        name: '5. Financing',
        href: 'p-1'
    },
    {
        id: 'q-6',
        name: '6. Warranty',
        href: 'p-2'
    },
    {
        id: 'q-7',
        name: '7. Roadside Assistance',
        href: 'p-3'
    },
    {
        id: 'q-8',
        name: '8. Dealer & Customer Info',
        href: 'p-4'
    },
    {
        id: 'q-9',
        name: '9. Paint & Fabric',
        href: 'p-5'
    },
    {
        id: 'q-10',
        name: '10. GAP Insurance',
        href: 'p-6'
    },
    {
        id: 'q-11',
        name: '11. Key',
        href: 'p-7'
    },
    {
        id: 'q-12',
        name: '12. Glass',
        href: 'p-8'
    },
    {
        id: 'q-13',
        name: 'Dealer & Customer Info',
        href: 'd-1'
    },
]

let windowWidth = $(window).width();

if (windowWidth > 1200) {
    let quickNavHtml = `<div id="quick-navigation" class="col-3">
    <h6 class="text-hint pb-4">Quick Navigation</h6>
    </div>`
    $('#main').prepend(quickNavHtml);
    quickNav.forEach((item) => {
        $('#quick-navigation').append(`<div id="${item.id}" class="position-relative"><a href="#${item.href}" class="d-flex justify-content-between bg-white rounded border my-2 p-3">${item.name}</a></div>`);
    });
}
else {
    let quickNavHtml = `<div id="quick-navigation" class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="quickNav" data-bs-toggle="dropdown" aria-expanded="false">
      Quick Navigation
    </button>
    <ul class="dropdown-menu" aria-labelledby="quickNav">
    </ul>
  </div>`
    $('#main').prepend(quickNavHtml);
    quickNav.forEach((item) => {
        $('#quick-navigation .dropdown-menu').append(`<li><a class="dropdown-item" href="#${item.href}">${item.name}</a></li>`);
    });
}

function errorCounter() {
    quickNav.forEach((item) => {
        let x = $(`#${item.href} :invalid`).length;
        if(x != 0){
        $(`#${item.id}`).append(`<span class="badge bg-danger error-count">${x}</span>`);
        }
    });
}
