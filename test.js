<div class="col py-2">
<div class="form-floating">
    <input type="${obj.type}" class="form-control"
placeholder="${obj.name}" ${obj.required}>
<label>${obj.name}</label>
</div>
${obj.feedback}
</div>

<div class="col py-2">
           <div class="form-floating">
            <select class="form-select">
              ${optionsArray}
            </select>
            <label>${obj.name}</label>
          </div>
          </div>

<div class="col py-2">
            <label class="form-label">${obj.name}</label>
            <select class="form-select">
              ${optionsArray}
            </select>
          </div>

          
          <div class="col py-2">
            <label class="form-label">${obj.name}</label>
             <input type=${obj.type} class="form-control" placeholder="${obj.name}" ${obj.required}>
             ${obj.feedback}
            </div>