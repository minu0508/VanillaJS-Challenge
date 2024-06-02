const movies = [
    {
        movieName: "순수의 시대",
        movieReleaseDate: "2015.03.05",
        movieGrade: "6.39",
        moviePath: '7.jpeg',
        movieIntroduction: "조선 태조 7년(1398년) 정사 조선왕조실록에 기록된 '왕자의 난'을 배경으로 제작된 가상역사물 영화이다."
    },
    {
        movieName: "나는 왕이로소이다",
        movieReleaseDate: "2012.08.08",
        movieGrade: "7.43",
        moviePath: '2.jpeg',
        movieIntroduction: "마크 트웨인의 소설 왕자와 거지를 조선 세종이 충녕대군일 때의 이야기로 각색한 영화이다."
    },
    {
        movieName: "천문: 하늘에 묻는다",
        movieReleaseDate: "2019.12.26",
        movieGrade: "8.79",
        moviePath: '9.jpeg',
        movieIntroduction: " 조선시대를 배경으로 한 영화. 조선시대 최고의 발명가였던 장영실과 당시 왕이었던 세종의 이야기를 다룬다. KBS1 대하드라마 <장영실> 이후 3년만에 다시 장영실 소재로 영상화된 작품"
    },
    {
        movieName: "관상",
        movieReleaseDate: "2013.09.11",
        movieGrade: "8.03",
        moviePath: '0.jpeg',
        movieIntroduction: "실제 역사 계유정난에 가상의 인물인 관상가가 개입되었다는 상상력을 가미한 팩션 사극 영화."
    },
    {
        movieName: "왕의 남자",
        movieReleaseDate: "2005.12.29",
        movieGrade: "9.04",
        moviePath: '8.jpeg',
        movieIntroduction: "원작은 연극 <이(爾)>. 2005년 12월 29일 개봉. 연산군이 집권하던 시대의 광대들을 주인공으로 하며 광대들과 연산군의 열망을 비극적이고 아름답게 다뤘다."
    },
    {
        movieName: "대립군",
        movieReleaseDate: "2017.05.31",
        movieGrade: "7.59",
        moviePath: '4.jpeg',
        movieIntroduction: "임진왜란 당시 ‘파천’(播遷)한 아버지 선조를 대신해 세자로 책봉되어 ‘분조’(分朝)를 이끌게 된 ‘광해’와 생계를 위해 군역을 대신 치르던 ‘대립군’(代立軍)의 이야기를 다룬 영화."
    },
    {
        movieName: "명량",
        movieReleaseDate: "2014.07.30",
        movieGrade: "8.88",
        moviePath: '5.jpeg',
        movieIntroduction: "이순신 장군의 명량 해전을 다룬 한국 영화."
    },
    {
        movieName: "광해, 왕이 된 남자",
        movieReleaseDate: "2012.09.13",
        movieGrade: "9.26",
        moviePath: '1.jpeg',
        movieIntroduction: "광해군 치세기 당시 실존 인물을 빌려와 승정원일기에서 지워진 15일간의 빈 시간 사이에 광해군으로 위장한 대역이 조선을 다스렸다고 가정한 팩션 영화."
    },
    {
        movieName: "남한산성",
        movieReleaseDate: "2017.10.03",
        movieGrade: "8.17",
        moviePath: '3.jpeg',
        movieIntroduction: "김훈의 소설 《남한산성》을 원작으로 한 황동혁 감독의 블록버스터 사극."
    },
    {
        movieName: "사도",
        movieReleaseDate: "2015.09.16",
        movieGrade: "8.49",
        moviePath: '6.jpeg',
        movieIntroduction: "사도세자의 어린 시절부터 아버지 영조와 관계가 틀어지고 뒤주에 갇혀 죽기까지의 상황을 동시에 그려내는 영화"
    },
];

const movieName = document.querySelector("#movieInfo span:nth-child(1)");
const movieDate = document.querySelector("#movieInfo span:nth-child(2)");
const movieGrade = document.querySelector("#movieInfo span:nth-child(3)");
const movieIntroduction = document.querySelector("#movieInfo span:nth-child(5)");
const movieImg = document.querySelector("#movieImg img");
const todaysMovie = movies[Math.floor(Math.random() * movies.length)];

movieName.innerText = `${todaysMovie.movieName}`
movieDate.innerText = `개봉일: ${todaysMovie.movieReleaseDate}`
movieGrade.innerText = `평점: ★ ${todaysMovie.movieGrade}`
movieIntroduction.innerText = `${todaysMovie.movieIntroduction}`
movieImg.src = `./styles/img/movieImg/${todaysMovie.moviePath}`;
