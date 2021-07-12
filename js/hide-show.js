$('.form-check-input').click(function(){
    let value = this.value;
    $(`#${value} .col`).toggle();
})