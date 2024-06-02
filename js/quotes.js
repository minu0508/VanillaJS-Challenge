const quotes = [
    {
        quote: "화살이 과녁을 찾아가는 것이 아니라, 활 쏘는 이가 과녁으로 화살을 보내야 한다.",
        author: "조선 1대, 태조"
    },
    {
        quote: "오늘부터 동생을 아들로 삼겠다.",
        author: "조선 2대, 정종"
    },
    {
        quote: "인간이 사는 데 두렵지 않은 일이 어디 있겠느냐. 문제는 그 두려움을 어떻게 참고 이기냐는 것이다.",
        author: "조선 3대, 태종"
    },
    {
        quote: "무엇이든 넓게 경험하고, 파고들어 스스로를 귀한 존재로 만들어라.",
        author: "조선 4대, 세종"
    },
    {
        quote: "오늘날 혹자는 임금이 직접 무기를 조련하고 손질하는 것에 임금의 도리가 아니라고 하지만 내가 직접 무기를 정비하는 이유는 하루도 위태로움을 잊지 않고 환란에 대비하기 위함이다.",
        author: "조선 5대, 문종"
    },
    {
        quote: "하늘은 귀가 멀었는가, 슬픈 기도는 듣지 못하고 어찌 수심 깊은 내 귀에만 들려오는가",
        author: "조선 6대, 단종"
    },
    {
        quote: "책을 다 읽기 전에는 활을 잡지 않겠다.",
        author: "조선 7대, 세조"
    },
    {
        quote: "대행 대왕께서 재조(1)한 공덕은 일국의 신민으로 누가 알지 못하겠는가? 묘호를 세조라고 일컬을 수 없는가?",
        author: "조선 8대, 예종"
    },
    {
        quote: "너는 무슨 물건을 받고 이런 부탁을 하는가? 내가 은밀히 사람을 만나 관직을 준다면, 나라 일이 어떻게 되겠는가? 또다시 이런 말을 한다면 용서하지 않을 것이다.",
        author: "조선 9대, 성종"
    },
    {
        quote: "입은 화를 불러오는 불러오는 문이요, 혀는 목을 베는 칼이다. 입을 닫고 혀를 깊이 감추면, 몸이 어느 곳에서나 편안하리라.",
        author: "조선 10대, 연산군"
    },
    {
        quote: "임금과 신하는 백성을 위해 있는 것이다.",
        author: "조선 11대, 중종"
    },
    {
        quote: "내가 죽거든 반드시 부모의 능 곁에 장사 지내서 내 뜻을 이루게 하라.",
        author: "조선 12대, 인종"
    },
    {
        quote: "평화는 사람의 마음에서부터 시작된다.",
        author: "조선 13대, 명종"
    },
    {
        quote: "자기 자신을 바로 알고, 잘못을 인정하고 바로 잡으라.",
        author: "조선 14대, 선조"
    },
    {
        quote: "위태로워 죽기 직전에 백성들을 보살펴주지 않는다면, 백성의 부모된 도리가 아니다.",
        author: "조선 15대, 광해군"
    },
    {
        quote: "길을 걷다가 끝이 보이지 않으면, 돌아서지 마라.",
        author: "조선 16대, 인조"
    },
    {
        quote: "자신을 이기는 것이 가장 어렵다.",
        author: "조선 17대, 효종"
    },
    {
        quote: "백운봉 물줄기가 가늘다고 비웃지마라, 강물로 흘러가면 곧 바다에 닿으리니.",
        author: "조선 18대, 현종"
    },
    {
        quote: "편안할 때 위태로움을 인지 않고, 미리 대비하면 근심이 없다.",
        author: "조선 19대, 숙종"
    },
    {
        quote: "어리석은 자는 말로 싸우고, 현명한 이해하며 용서한다.",
        author: "조선 20대, 경종"
    },
    {
        quote: "나는 참아 온 적이 많았다.",
        author: "조선 21대, 영조"
    },
    {
        quote: "모든 일에 있어서, 시간이 부족하지 않을까를 걱정하지 말고, 다만 내가 마음을 바쳐 최선을 다할 수 있으지 그것을 걱정하라.",
        author: "조선 22대, 정조"
    },
    {
        quote: "진실과 공정한 마음으로 행동하는 것이 바른 길이다.",
        author: "조선 23대, 순조"
    },
    {
        quote: "인내심과 참을성을 지닌 사람은 반드시 성공할 것이다.",
        author: "조선 24대, 헌종"
    },
    {
        quote: "불행이 우리에게 닥쳐온다면 그것이 어떠한 것이든 받아들이고 이겨내야 한다.",
        author: "조선 25대, 철종"
    },
    {
        quote: "구차하게 탐내고 시기하여 남에게 손해를 끼친다면 마침내 십년의 편안함도 없을 것이요.",
        author: "조선 26대, 고종"
    },
    {
        quote: "어려운 상황에서도 포기하지 않고 끝까지 노력하는 것이 중요하다.",
        author: "조선 27대, 순종"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author} -`;