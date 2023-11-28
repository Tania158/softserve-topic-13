document.addEventListener("DOMContentLoaded", getUserInfo);

function getUserInfo() {
  fetch("https://randomuser.me/api/?page=1&results=15")
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((user) => {
        document.getElementById("users").innerHTML += `
        <div class="user">
          <div class="user__photo-container">
            <img class="user__photo-img" src="${user.picture.large}">
          </div>
          <div class="user__info-list">
            <ul>
              <li>${user.name.first} ${user.name.last}</li>
              <li>${user.gender}</li>
              <li>${user.location.country}</li>
              <li>${user.login.username}</li>
              <li>${user.login.password}</li>
              <li>${user.email}</li>
            </ul>
          </div>
        </div>
        `;
      });
    });
}
