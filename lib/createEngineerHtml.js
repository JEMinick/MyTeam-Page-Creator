function createEngineerCard( cardInfo )
{
  // fas fa-chalkboard-teacher or fas fa-glasses ? that is the question!
  let engIcon = ( cardInfo.isSeniorEngineer() ? "fa-chalkboard-teacher" : "fa-glasses" );
  let sCard=`
  <div class="card-size">
    <div class="col mt-2 mb-2 mr-3">
      <div class="card-header">
          <h2 class="card-title">${cardInfo.getEmployeeName()}</h2>
          <h3 class="card-title"><i class="fas ${engIcon} mr-2"></i>Engineer</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
          <li class="list-group-item">ID: ${cardInfo.getEmployeeId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${cardInfo.getEmployeeEmail()}">${cardInfo.getEmployeeEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${cardInfo.getEmployeeGithub()}">${cardInfo.getEmployeeGithub()}</a></li>
          </ul>
      </div>
    </div>
  </div>`;
  
  return sCard;
}

module.exports = createEngineerCard;
