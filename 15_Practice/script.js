function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched,
  };

  addFilm(film);
}

async function addFilm(film) {

  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "ovikdevil@gmail.com",
    },
    body: JSON.stringify(film),
  });
  get().then(function (films) {
    renderTable(films)
  })
}

async function deleteFilm(id) {

  await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
    method: "DELETE",
    headers: {
      email: "ovikdevil@gmail.com"
    },
  });
  get().then(function (films) {
    renderTable(films)
  })
}

async function delAllFilms() {

  await fetch(`https://sb-film.skillbox.cc/films`, {
    method: "DELETE",
    headers: {
      email: "ovikdevil@gmail.com"
    },
  });
  get().then(function (films) {
    renderTable(films)
  })
}





async function get() {
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  const films = await filmsResponse.json();
  return films
}

function renderTable(films) {

  const filmTableBody = document.getElementById("film-tbody");
  filmTableBody.innerHTML = "";

  films.forEach((film) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
    `;
    const deleteFilmField = document.createElement('td');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button')
    deleteButton.textContent = 'Удалить'
    deleteButton.onclick = () => {
      deleteFilm(film.id)
    }
    deleteFilmField.append(deleteButton)
    row.append(deleteFilmField)
    filmTableBody.append(row);
  });
}

async function filterFilmTable(films, title, genre, year) {
  
  const filteredFilms = []
  films.forEach(film => {
    if ((firstInSecond(title, film.title) || title == '') && (firstInSecond(genre, film.genre) || genre == '') && (firstInSecond(year, film.releaseYear) || year == '')) {
      filteredFilms.push(film)
    }
  })
  renderTable(filteredFilms)
}

function firstInSecond(s, str) {
  if (str.toLowerCase().startsWith(s.toLowerCase())) {
    return true
  } else {
    false
  }
}

function displayBySelected(films, parameter, title, genre, year) {
  const watched = []
  const unWatched = []
  switch (parameter) {
    case 'Все':
      filterFilmTable(films, title, genre, year)
      break
    case 'Просмотренные':
      films.forEach(film => {
        if (film.isWatched) {
          watched.push(film)
        }})
        filterFilmTable(watched, title, genre, year)
      break
    case 'Непросмотренные':
      films.forEach(film => {
        if (!film.isWatched) {
          unWatched.push(film)
        }})
        filterFilmTable(unWatched, title, genre, year)
      break
  }
}

document
  .getElementById("film-form")
  .addEventListener("submit", handleFormSubmit);

get().then(function (films) {
  renderTable(films)
});

const delAllButton = document.querySelector('#delAll');

const nameFilter = document.querySelector('.name-filter');
const genreFilter = document.querySelector('.genre-filter');
const yearFilter = document.querySelector('.year-filter');
const selectedParam = document.querySelector('.show-param');

nameFilter.addEventListener('input', () => get().then(function (films) {
  displayBySelected(films, selectedParam.value, nameFilter.value, genreFilter.value, yearFilter.value)
}))
genreFilter.addEventListener('input', () => get().then(function (films) {
  displayBySelected(films, selectedParam.value, nameFilter.value, genreFilter.value, yearFilter.value)
}))
yearFilter.addEventListener('input', () => get().then(function (films) {
  displayBySelected(films, selectedParam.value, nameFilter.value, genreFilter.value, yearFilter.value)
}))

selectedParam.addEventListener('change', (e) => get().then(function (films) {
  displayBySelected(films, e.target.value, nameFilter.value, genreFilter.value, yearFilter.value)
}))

delAllButton.onclick = () => {
  delAllFilms()
}