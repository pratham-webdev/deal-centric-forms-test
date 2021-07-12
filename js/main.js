const FormArray = [
    {
        id: "f-1",
        title: "Dealer and Customer Information",
        formItems: [
            {
                name: "Dealer Name",
                type: "select",
                options: ["option 1", "option 2"],
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`

            },
            {
                name: "Dealer Location",
                type: "select",
                options: ["option 1", "option 2"]
            },
            {
                name: "Customer Last Name",
                type: "text",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            },
        ]
    },
    {
        id: "f-2",
        title: "Deal Information",
        formItems: [
            {
                name: "Delivery/Close Date",
                type: "select",
                options: ["option 1", "option 2"]
            },
            {
                name: "Sale Date",
                type: "select",
                options: ["option 1", "option 2"]
            },
            {
                name: "Non-Eligible / Aftersale",
                type: "select",
                options: ["option 1", "option 2"]
            },
            {
                name: "FSM 1",
                type: "select",
                options: ["option 1", "option 2"]
            },
            {
                name: "FSM 2 (Optional)",
                type: "select",
                options: ["option 1", "option 2"]
            },
            {
                name: "Sales Person 1",
                type: "select",
                options: ["option 1", "option 2"]
            },
            {
                name: "Sales Person 2 (Optional)",
                type: "select",
                options: ["option 1", "option 2"]
            },
            {
                name: "Sales Manager Name",
                type: "select",
                options: ["option 1", "option 2"]
            },
            {
                name: "Customer Number",
                type: "number",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            },
            {
                name: "Deal/DMS Number",
                type: "number",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            },
            {
                name: "Stock Number",
                type: "number",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            },
            {
                name: "Sales Quote Number",
                type: "number",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            }
        ]
    },
    {
        id: "f-3",
        title: "Vehicle Information",
        formItems: [
            {
                name: "New or Pre-Owned",
                type: "select",
                options: ["New", "Pre-Owned"]
            },
            {
                name: "Year",
                type: "text",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            },
            {
                name: "Make",
                type: "select",
                options: ["Alliance", "Coachmen"]
            },
            {
                name: "Model Name",
                type: "select",
                options: ["option 1", "option 2"]
            },
            {
                name: "Class (Optional)",
                type: "select",
                options: ["option 1", "option 2"]
            },
            {
                name: "Inventory Age",
                type: "text",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            },
        ]
    },
    {
        id: "f-4",
        title: "Sale Information",
        formItems: [
            {
                name: "Sales Price",
                type: "number",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            },
            {
                name: "Trade ACV (Optional)",
                type: "text",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            },
            {
                name: "Sales Price After Trade (Optional)",
                type: "number",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            },
            {
                name: "Initial Customer Deposit (Optional)",
                type: "number",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            },
            {
                name: "Total Customer Down Payment (Optional)",
                type: "number",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            },
            {
                name: "PAC",
                type: "number",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            },
            {
                name: "Front Office Profit",
                type: "number",
                feedback: `<div class="invalid-feedback">
                Please take some action.
              </div>`,
                required: 'required',
            }
        ]
    },
]

const productDetails = [
    {
        id:'p-1',
        name:'Financing'
    },
    {
        id:'p-2',
        name:'Warranty'
    },
    {
        id:'p-3',
        name:'Roadside Assistance'
    },
    {
        id:'p-4',
        name:'Appearance/Road Hazard'
    },
    {
        id:'p-5',
        name:'Paint & Fabric'
    },
    {
        id:'p-6',
        name:'GAP Insurance'
    },
    {
        id:'p-7',
        name:'Key'
    },
    {
        id:'p-8',
        name:'Glass'
    },
]

const formLayoutHeader = () => {
    return `<div id="f-1">
    <div class="py-3 px-4 border-bottom">
        <h4>Dealer & Customer Information</h4>
    </div>
    <div class="row row-cols-2 mt-2">
        <div class="col py-3">
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput"
                    placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
        </div>
        <div class="col py-3">
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput"
                    placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
        </div>
    </div>
</div>`
}

FormArray.forEach((item) => {
    let FormHeader = `<div id="${item.id}">
    <div class="py-3 border-bottom">
        <h5>${item.title}</h5>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 mt-2">
    </div>
    </div>`
    $('#forms-array').append(FormHeader);

    let formItems = item.formItems;

    formItems.forEach((obj) => {
        let FormInner;
        if (obj.type == 'text' || obj.type == 'number' || obj.type == 'email') {
            FormInner = `<div class="col py-2">
            <div class="form-floating">
                <input type="${obj.type}" class="form-control"
            placeholder="${obj.name}" ${obj.required}>
            <label>${obj.name}</label>
            ${obj.feedback}
            </div>
            </div>`
        }
        else if (obj.type == 'select') {
            let optionsArray = obj.options.map((option) => {
                return `<option value=${option}>${option}</option>`
            })
            FormInner = `<div class="col py-2">
           <div class="form-floating">
            <select class="form-select">
              ${optionsArray}
            </select>
            <label>${obj.name}</label>
          </div>
          </div>`
        }

        $(`#${item.id} .row`).append(FormInner);
    });
});

let productDetailView = `<div id="product-details">
<div class="py-3 border-bottom">
    <h5>Product Details</h5>
</div>
</div>`

$('#forms-array').append(productDetailView);

productDetails.forEach((product) => {

    let productHtml;

    if(product.name == 'Financing'){
        productHtml = ` <div id=${product.id} class="row row-cols-1 row-cols-md-2 row-cols-lg-2 mt-3">
                            <div class="col-12">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="${product.id}" checked>
                                <label class="h6">${product.name} Included</label>
                            </div>
                        </div>
                        <div class="col py-2">
                        <div class="form-floating">
                            <input type="number" class="form-control" placeholder="Interest Rate" required>
                            <label>Interest Rate</label>
                        </div>
                    </div>
                    <div class="col py-2">
                        <div class="form-floating">
                            <select class="form-select">
                                <option value="option" 1>option 1</option>
                                <option value="option" 2>option 1</option>
                            </select>
                            <label>Provider</label>
                        </div>
                    </div>
                    <div class="col py-2">
                        <div class="form-floating">
                            <input type="number" class="form-control" placeholder="Amount" required>
                            <label>Amount</label>
                        </div>
                    </div>
                    <div class="col py-2">
                        <div class="form-floating">
                            <input type="number" class="form-control" placeholder="Term" required>
                            <label>Term(Months)</label>
                        </div>
                    </div>
                    <div class="col py-2">
                        <div class="form-floating">
                            <input type="number" class="form-control" placeholder="Interest Rate" required>
                            <label>Amortization Lenght(Months)</label>
                        </div>
                    </div>
                    <div class="col py-2">
                        <div class="form-floating">
                            <input type="number" class="form-control" placeholder="Dealer Reserve" required>
                            <label>Dealer Reserve</label>
                        </div>
                    </div>
                    </div>`
    }
    else{
        productHtml = `<div id=${product.id} class="row row-cols-1 row-cols-md-2 row-cols-lg-2 mt-3">
        <div class="col-12">
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" value="${product.id}" checked>
            <label class="h6">${product.name} Included</label>
        </div>
    </div>
        <div class="col py-2">
            <div class="form-floating">
                <select class="form-select">
                    <option value="option" 1>option 1</option>
                    <option value="option" 2>option 1</option>
                </select>
                <label>Provider</label>
            </div>
        </div>
        <div class="col py-2">
            <div class="form-floating">
                <input type="number" class="form-control" placeholder="Price" required>
                <label>Price</label>
            </div>
        </div>
        <div class="col py-2">
            <div class="form-floating">
                <input type="number" class="form-control" placeholder="Cost" required>
                <label>Cost</label>
            </div>
        </div>
        <div class="col py-2">
            <div class="form-floating">
                <input type="number" class="form-control" placeholder="Term" required>
                <label>Term(Months)</label>
            </div>
        </div>
        <div class="col py-2">
            <div class="form-floating">
                <input type="number" class="form-control" placeholder="Profit" required>
                <label>Profit</label>
            </div>
        </div>
        <div class="col py-2">
            <div class="form-floating">
                <input type="number" class="form-control" placeholder="Dealer Reserve" required>
                <label>Dealer Reserve</label>
            </div>
        </div>
        </div>`
    }
    $(`#product-details`).append(productHtml);
});

let dealSummary = `<div id="d-1">
<div class="py-3 border-bottom">
    <h5>Deal Summary</h5>
</div>
<div class="row row-cols-2 mt-2">
    <div class="col py-2">
        <h6>Deal Total Profit</h6>
        <h4>$25900</h4>
    </div>
    <div class="col py-2">
        <h6>GPP</h6>
        <h4>$35900</h4>
    </div>
</div>
<div class="py-2">
    <div class="form-floating">
        <textarea class="form-control" placeholder="Leave notes here" style="height: 100px"></textarea>
        <label>Deal Notes</label>
      </div>
</div>
</div>`;

$('#forms-array').append(dealSummary);