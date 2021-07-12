let quickNav = [
    {
        name: '1. Dealer & Customer Info',
        href: 'f-1'
    },
    {
        name: '2. Deal Info',
        href: 'f-2'
    },
    {
        name: '3. Vehicle Information',
        href: 'f-3'
    },
    {
        name: '4. Sale Information',
        href: 'f-4'
    },
    {
        name: '5. Financing',
        href: 'p-1'
    },
    {
        name: '6. Warranty',
        href: 'p-2'
    },
    {
        name: '7. Roadside Assistance',
        href: 'p-3'
    },
    {
        name: '8. Dealer & Customer Info',
        href: 'p-4'
    },
    {
        name: '9. Paint & Fabric',
        href: 'p-5'
    },
    {
        name: '10. GAP Insurance',
        href: 'p-6'
    },
    {
        name: '11. Key',
        href: 'p-7'
    },
    {
        name: '12. Glass',
        href: 'p-8'
    },
    {
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
        $('#quick-navigation').append(`<a href="#${item.href}" class="d-block bg-white rounded border my-2 p-3">${item.name}</a>`);
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

