// Суроолор жана жооптор
const questions = [
    {q:"Проект деген эмне?", options:["Күнүмдүк жумуштун кыска пландары","Белгилүү максатка жетүүгө багытталган уникалдуу иш-чаралар комплекси","Каржылык отчеттоо формасы","Материалдык ресурстарды бөлүштүрүү ыкмасы"], answer:1, explanation:"B – туура, проект белгилүү максатка жетүүгө багытталган уникалдуу иш-чаралар комплексинин аткарылышы керек."},
    {q:"Проекттин планда белгилениши керек болгон элементтердин бири эмнени камтыйт?", options:["Проектке катышуучу бардык адамдардын сүрөттөрү","Максаттар жана пландалган натыйжалар","Программалык камсыздоо коду","Баардык жооптор туура эмес"], answer:1, explanation:"B – туура, план максаттар жана натыйжаларды аныктоону камтыйт."},
    {q:"Проекттин үч негизги чектөөсү кайсы?", options:["Убакыт, сапат, бюджет","Убакыт, эсеп, аткаруучулар","Материалдар, жабдуулар, жолдор","Программалык камсыздоо, графика, отчет"], answer:0, explanation:"A – туура, үч негизги чектөө: убакыт, сапат, бюджет."},
    {q:"“Тройственная ограниченность” деген эмне?", options:["Үч күндүк пландоо","Проекттин мазмуну, убакыты, чыгымы жана сапатынын тең салмактуулугу","Үч долбоорду бир эле учурда башкаруу","Программанын үч версиясы"], answer:1, explanation:"B – туура, долбоордун мазмуну, чыгымы, убакыты жана сапатынын ортосундагы тең салмактуулук."},
    {q:"Проектти башкаруу максаты эмнеде?", options:["Ресурстарды үнөмдөө гана","Проектти белгиленген мөөнөттө жана бюджетте максатка жеткирүү","Фирма ичиндеги саясий маселелерди чечүү","Катышуучуларды тандоо"], answer:1, explanation:"B – туура, проектти убакытында жана бюджетте максатка жеткирүү."},
    {q:"CPM методу эмне үчүн колдонулат?", options:["Проекттин критикалык жолун аныктоо","Бюджетти көбөйтүү","Команданы тренингден өткөрүү","Документти архивдөө"], answer:0, explanation:"A – туура, CPM проекттин критикалык жолун аныктоо үчүн."},
    {q:"PERT методу эмнени эсептейт?", options:["Проекттин финансылык чыгымдарын","Проекттин убакыт жана иш планын баалоо жана анализдөө","Келечектеги ишкерлердин санын","Программаны жаңыртуу мөөнөтүн"], answer:1, explanation:"B – туура, PERT проекттин убакыт жана иш планын баалоо үчүн."},
    {q:"Сеттик графиктеги “событие” деген эмне?", options:["Проекттин башталышы же аяктоосу","Ресурс түрү","Материалдын түрү","Проекттин баасы"], answer:0, explanation:"A – туура, событие – операциянын башталышы же аяктоосу."},
    {q:"Диаграмма Ганта ким тарабынан ойлоп табылган?", options:["Генри Форд","Генри Гант","Билл Гейтс","Томас Эдисон"], answer:1, explanation:"B – туура, диаграмма Ганта Генри Гант тарабынан ойлоп табылган."},
    {q:"Microsoft Projectтин негизги артыкчылыгы эмнеде?", options:["Акысыз жана онлайн","Интуитивдүү интерфейс жана бардык керектүү куралдар","Файлдарды түзөтпөйт","Тексте гана иштейт"], answer:1, explanation:"B – туура, Microsoft Projectтин интерфейси жеңил жана бардык керектүү куралдар бар."},
    {q:"Project Libre программасы кайсы нерсеге окшош?", options:["Excel","Microsoft Project","PowerPoint","Photoshop"], answer:1, explanation:"B – туура, Project Libre Microsoft Projectтин акысыз аналогу."},
    {q:"Проектти башкаруунун этаптары канча?", options:["2","3","4","5"], answer:3, explanation:"D – туура, төрт этап: структуралык, календардык, оперативдик жана көзөмөлдөө."},
    {q:"Структуралык пландоо эмнени камтыйт?", options:["Проектти операцияларга бөлүү","Проектти сатуу","Кесиптештер менен жолугушуу","Жайдын графигин түзүү"], answer:0, explanation:"A – туура, структуралык пландоо проектти операцияларга бөлүүнү камтыйт."},
    {q:"Оперативдик башкаруу кандай ишти камтыйт?", options:["Фирманын кызматкерлерин тандоо","Проектти жүзөгө ашыруунун абалын көзөмөлдөө жана түзөтмөлөрдү киргизүү","Убакытты пландоо гана","Материалдарды сатып алуу"], answer:1, explanation:"B – туура, оперативдик башкаруу проекттин абалын көзөмөлдөйт жана өзгөртүүлөрдү киргизет."},
    {q:"Кайсы программалык камсыздоо веб-сервис болуп саналат?", options:["GanttProject","Trello","Microsoft Project","Project Libre"], answer:1, explanation:"B – туура, Trello – веб-сервис."}
];

let current=0;
let score=0;
let answered=false;
let username='';

function startQuiz(){
    username=document.getElementById('username').value.trim();
    if(username===''){ alert('Атыңызды киргизиңиз!'); return; }
    document.getElementById('intro').style.display='none';
    document.getElementById('quiz').style.display='block';
    showQuestion();
}

function showQuestion(){
    answered=false;
    const q=questions[current];
    const container=document.getElementById('question-container');
    container.innerHTML=`<h2>${current+1}. ${q.q}</h2>`;
    q.options.forEach((opt,i)=>{
        const btn=document.createElement('button');
        btn.className='option';
        btn.innerText=opt;
        btn.onclick=()=>{
            if(answered) return;
            answered=true;
            if(i===q.answer){ btn.classList.add('correct'); score++; }
            else btn.classList.add('wrong');
            document.getElementById('explanation').innerText=q.explanation;
        };
        container.appendChild(btn);
    });
    document.getElementById('explanation').innerText='';
    document.getElementById('next-btn').innerText = current===questions.length-1 ? 'Жыйынтык' : 'Кийинки';
}

function nextQuestion(){
    if(!answered){ alert('Суроого жооп бериңиз!'); return; }
    current++;
    if(current<questions.length) showQuestion();
    else {
        document.getElementById('quiz').innerHTML=`<h2>Сиздин упай: ${score}/${questions.length}</h2><p>Окуучу: ${username}</p>`;
    }
}
