const movies = [
    {
        movieName: "순수의 시대",
        movieReleaseDate: "2015.03.05",
        movieGrade: "6.39",
        moviePath: '순수의 시대.jpeg'
    },
    {
        movieName: "나는 왕이로소이다",
        movieReleaseDate: "2012.08.08",
        movieGrade: "7.43",
        moviePath: '나는 왕이로소이다.jpeg'
    },
    {
        movieName: "천문: 하늘에 묻는다",
        movieReleaseDate: "2019.12.26",
        movieGrade: "8.79",
        moviePath: '천문.jpeg'
    },
    {
        movieName: "관상",
        movieReleaseDate: "2013.09.11",
        movieGrade: "8.03",
        moviePath: '관상.jpeg'
    },
    {
        movieName: "왕의 남자",
        movieReleaseDate: "2005.12.29",
        movieGrade: "9.04",
        moviePath: '왕의 남자.jpeg'
    },
    {
        movieName: "대립군",
        movieReleaseDate: "2017.05.31",
        movieGrade: "7.59",
        moviePath: '대립군.jpeg'
    },
    {
        movieName: "명량",
        movieReleaseDate: "2014.07.30",
        movieGrade: "8.88",
        moviePath: '명량.jpeg'
    },
    {
        movieName: "광해, 왕이 된 남자",
        movieReleaseDate: "2012.09.13",
        movieGrade: "9.26",
        moviePath: '광해.jpeg'
    },
    {
        movieName: "남한산성",
        movieReleaseDate: "2017.10.03",
        movieGrade: "8.17",
        moviePath: '남한산성.jpeg'
    },
    {
        movieName: "사도",
        movieReleaseDate: "2015.09.16",
        movieGrade: "8.49",
        moviePath: '사도.jpeg'
    },
];

const movieName = document.querySelector("#movieInfo span:nth-child(1)");
const movieDate = document.querySelector("#movieInfo span:nth-child(2)");
const movieGrade = document.querySelector("#movieInfo span:nth-child(3)");
const movieImg = document.querySelector("#movieImg img");
const todaysMovie = movies[Math.floor(Math.random() * movies.length)];

movieName.innerText = `${todaysMovie.movieName}`
movieDate.innerText = `${todaysMovie.movieReleaseDate}`
movieGrade.innerText = `${todaysMovie.movieGrade}`
movieImg.src = `../styles/img/movieImg/${todaysMovie.moviePath}`;
