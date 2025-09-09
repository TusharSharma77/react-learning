function Todoitem (){
    let todoname = 'react learn';
    let date = '07/09/2025';
return <div class="container text-center">
 <div class="row">
          <div class="col-6">
            <h3>{todoname}</h3>
          </div>
          <div class="col-4"> {date}</div>
          <div class="col-2">
            <button type="button" class="btn btn-warning">
              delete
            </button>
          </div>
        </div>
        </div>
}
export default Todoitem