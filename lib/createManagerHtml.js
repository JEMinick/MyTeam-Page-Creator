function createManagerCard( cardInfo )
{
  // fas fa-tasks or fas fa-mug-hot ? that is the question!
  let sCard=`
  <div class="card-size">
    <div class="col mt-2 mb-2 mr-3">
      <div class="card-header">
          <h2 class="card-title">${cardInfo.getEmployeeName()}</h2>
          <h3 class="card-title"><i class="fas fa-tasks mr-2"></i>Manager</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
          <li class="list-group-item">ID: ${cardInfo.getEmployeeId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${cardInfo.getEmployeeEmail()}">${cardInfo.getEmployeeEmail()}</a></li>
          <li class="list-group-item">Office number: ${cardInfo.getOfficeNumber()}</li>
          </ul>
      </div>
    </div>
  </div>`;
  
  return sCard;
}

module.exports = createManagerCard;
