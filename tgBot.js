const TelegramBot = require('node-telegram-bot-api')
const token = '1918706901:AAEeVLNrFrzsY9sdOc1MpYVuPJ9UiJ_lxMs'
const fs = require('fs')
const bot = new TelegramBot(token, {
    polling: true
})

bot.on('message', msg => {
    const id = msg.chat.id

    //Когда пишу я:
    if(msg.from.first_name == 'John'){
        //ХАДИШТ - МАЛИК
        if((msg.text.length == 6) && (msg.text[0] == 'х' || msg.text[0] == 'Х')) {
            setTimeout(() => bot.sendMessage(id, 'МАЛИК'), 1700)
        }
        //привет
        if((msg.text[0] == 'п' || msg.text[0] == ' П') && (msg.text[msg.text.length - 1] == 'т' || msg.text[msg.text.length - 1] == 'Т' || msg.text[msg.text.length - 1] == ')')){
            let num = Math.floor(Math.random() * 150)
            if (num <= 33){
                setTimeout(() => bot.sendMessage(id, 'привеет'), 1500)
            }
            if (num > 33 && num < 66){
                setTimeout(() => bot.sendMessage(id, 'привет)'), 1500)
            }
            if (num >= 66 && num < 99) {
                setTimeout(() => bot.sendMessage(id, 'привееет))'), 1500)
            }
            if (num >= 99){
                setTimeout(() => bot.sendMessage(id, 'пока)))'), 1500)
            }
        }

        //кто я?)
        if(msg.text == 'кто я?)'){
            setTimeout(() => bot.sendMessage(id, 'ты тот самый))'), 2000)
        }
        //ееей)
        if((msg.text[0] == 'е' || msg.text[0] == 'Е') && (msg.text[msg.text.length - 1] == 'й' || msg.text[msg.text.length - 1] == 'Й')){
            let num = Math.floor(Math.random() * 100)
            if(num <= 33){
                setTimeout(() => bot.sendMessage(id, 'еееЕЕй)'), 1500)
            }
            if(num > 33 && num < 66) {
                setTimeout(() => bot.sendMessage(id, 'ееейййй'), 1500)
            }
            if(num > 66){
                setTimeout(() => bot.sendMessage(id, 'ЕЕЙЙ))'), 1500)
            }
        }
        //пиши мне:
        if(msg.text == 'пиши мне что-то)'){
            setTimeout(() => bot.sendMessage(id, 'ху ю'), 1000)
            setTimeout(() => bot.sendMessage(id, 'аа все)'), 2500)
            setTimeout(() => bot.sendMessage(id, 'тебе одиноко('), 4000)
            setTimeout(() => bot.sendMessage(id, 'воаокшц'), 5000)
            setTimeout(() => bot.sendMessage(id, 'мвфкп'), 5500)
            setTimeout(() => bot.sendMessage(id, 'ауш'), 6000)
            setTimeout(() => bot.sendMessage(id, 'впфцук'), 6300)
            setTimeout(() => bot.sendMessage(id, 'мстфвща'), 6800)
            setTimeout(() => bot.sendMessage(id, '😂😂'), 8000)
        }
        //как дела?
        if(msg.text == 'как дела?' || msg.text == 'как дела?)' || msg.text == 'как дела?))' || msg.text == 'как дела') {
            let a = Math.floor(Math.random() * 10)
            if (a % 2 == 0){
                setTimeout(() => bot.sendMessage(id, 'отлично'), 1500)
                setTimeout(() => bot.sendMessage(id, 'а у тебя как?'), 3000)
            }
            else {
                setTimeout(() => bot.sendMessage(id, 'нормально'), 1500)
                setTimeout(() => bot.sendMessage(id, 'а у тебя как?)'), 3000)
            }
        }
        //ху дир ахь тахан?
        if(msg.text == 'ху дир ахь тахан?' || msg.text == 'чем занималась сегодня?' || msg.text == 'как провела день?' || msg.text == 'как прошел день?' || msg.text == 'ху дир ахь тахан'){
            let num = Math.floor(Math.random() * 250)
            if (num >= 33 && num < 66){
                setTimeout(() => bot.sendMessage(id, 'вообще хума,настроения не было'), 1000)
                setTimeout(() => bot.sendMessage(id, 'ахьа?'), 2500)
            }
            if (num < 33){
                setTimeout(() => bot.sendMessage(id, 'просто аниме смотрела'), 1000)
                setTimeout(() => bot.sendMessage(id, 'потом к подруге пошла'), 2000)
                setTimeout(() => bot.sendMessage(id, 'ахь ху дир тахан?))'), 3500)
            }
            if (num >= 66 && num < 99) {
                setTimeout(() => bot.sendMessage(id, 'начала с общества и провожу на обществе'), 1500)
                setTimeout(() => bot.sendMessage(id, 'ахь ху дир тахан?))'), 4000)
            }
            if (num >= 99 && num < 150){
                setTimeout(() => bot.sendMessage(id, 'аааа тахани'), 1000) 
                setTimeout(() => bot.sendMessage(id, 'цхьа в 13 сам елар'), 2000)
                setTimeout(() => bot.sendMessage(id, 'г1улкх дир'), 3500)
                setTimeout(() => bot.sendMessage(id, 'суп йир'), 5000)
                setTimeout(() => bot.sendMessage(id, 'тикток чохь 1ир'), 8000)
                setTimeout(() => bot.sendMessage(id, 'подруг йолч яхар'), 11000)
                setTimeout(() => bot.sendMessage(id, 'хинц чу еан'), 14000)
                setTimeout(() => bot.sendMessage(id, 'а ахьа'), 17000)
            }
            if (num >= 150 && num < 200) {
                setTimeout(() => bot.sendMessage(id, 'ху дир товв'), 1500)
                setTimeout(() => bot.sendMessage(id, 'о тебе думала..)'), 3300)
                setTimeout(() => bot.sendMessage(id, 'кхи ху дийр ду ас??'), 5500)
            }
            if (num >= 200) {
                setTimeout(() => bot.sendMessage(id, 'убралась дома,потом вышла погулять и все'), 2000)
                setTimeout(() => bot.sendMessage(id, 'конечно ещё и аниме смотрела'), 3500)
                setTimeout(() => bot.sendMessage(id, 'ахь ху дир?'), 5500)
            }
        }
        // доп.фишки))
        if(msg.text == 'п1елгш)' || msg.text == 'хаз п1елгш)' || msg.text == 'са п1елгш)' || msg.text == 'п1елгш'){
            setTimeout(() => bot.sendVideo(id, './my.mp4'), 1000)
        }

        if(msg.text == 'скинь наше фото)' || msg.text == 'вэйшин сурт кхосса)' || msg.text == 'вэйшин сурт кхосса' || msg.text == 'сурт'){
            setTimeout(() => bot.sendPhoto(id, fs.readFileSync(__dirname + '/we.jpg')), 1000)
        }
        if((msg.text[0] == 'е' || msg.text[0] == 'Е') && (msg.text[msg.text.length - 1] == 'е' || msg.text[msg.text.length - 1] == 'Е')){
            setTimeout(() => bot.sendPhoto(id, fs.readFileSync(__dirname + '/w1.jpg')), 1500)
        }
        if(msg.text == 'кхиъ' || msg.text == 'кхиъ)'){
            setTimeout(() => bot.sendPhoto(id, fs.readFileSync(__dirname + '/w2.jpg')), 1500)
        }
    
        

        if(msg.text == 'хьоьц хил лаьъ сунам' || msg.text == 'вэйш цхьан хилит лаьъ'){
            setTimeout(() => bot.sendMessage(id, 'НИЧЕГО СЕБЕ'), 1500)
            setTimeout(() => bot.sendMessage(id, 'Ц ЛАА ДЕЗАР 😌'), 3000)
        }
        if(msg.text == 'ху ду шугахь' || msg.text == 'ху ду шугахь?' || msg.text == 'ху ду шугахь?)'){
            let num = Math.floor(Math.random() * 100)
            if (num <= 33){
                setTimeout(() => bot.sendMessage(id, 'вообще хума'), 1500)
                setTimeout(() => bot.sendMessage(id, 'а шуга?'), 2500)
            }
            if (num > 33 && num < 66){
                setTimeout(() => bot.sendMessage(id, 'воообще хумаа'), 1500)
                setTimeout(() => bot.sendMessage(id, 'ааа'), 2500)
                setTimeout(() => bot.sendMessage(id, 'мел умный ву'), 4000)
                setTimeout(() => bot.sendMessage(id, 'ОТ ТЕМЫ Д1А МУХ ВОЬД'), 5500)
            }
            if (num > 66){
                setTimeout(() => bot.sendMessage(id, 'хинц д1аваьл сун)'), 1500)
            }
        }
        if(msg.text == 'Фатима' || msg.text == 'фатима'){
            setTimeout(() => bot.sendMessage(id, 'НИЧЕГО СЕБЕ'), 1000)
            setTimeout(() => bot.sendMessage(id, 'мел 1овдал ю '), 3000)
            setTimeout(() => bot.sendMessage(id, '😂😂😂'))
        }
        if((msg.text[0] == 'а' || msg.text[0] == 'А') && (msg.text[msg.text.length - 1] == 'а' || msg.text[msg.text.length - 1] == 'А')){
            setTimeout(() => bot.sendMessage(id, `ху ${msg.text}`))
        }
        if(msg.text == 'хинц ху де ас цун??'){
            setTimeout(() => bot.sendMessage(id,'ЦУН ТОВ'), 1000)
            setTimeout(() => bot.sendMessage(id,'ЭТО Я ВООБЩЕ-ТО'), 2000)
            setTimeout(() => bot.sendMessage(id,'в будущем)))'), 3000)
            setTimeout(() => bot.sendMessage(id,'ца хаъ'), 4000)
            setTimeout(() => bot.sendMessage(id,'цхьаъ придумать де'), 5000)
            setTimeout(() => bot.sendMessage(id,'если я тебе дорога..'), 6000)
        }
        if(msg.text == 'ху 1овдал'){
            setTimeout(() => bot.sendMessage(id,'ААА'), 1000)
            setTimeout(() => bot.sendMessage(id,'СО МА Ю И '), 2000)
            setTimeout(() => bot.sendMessage(id,'ХВХВХВХ'), 3000)
        }
        if((msg.text[0] == 'и' || msg.text[0] == 'И') && (msg.text[msg.text.length - 1] == 'и' || msg.text[msg.text.length - 1] == 'И')){
            setTimeout(() => bot.sendMessage(id,`ху ${msg.text}`), 1000)
            setTimeout(() => bot.sendMessage(id,'валу хинц ойл е'), 2000)
            setTimeout(() => bot.sendMessage(id,'нуу или велх))'), 3000)
        }
        if(msg.text == 'ладно, бокъал цхьаъ придумать да дез'){
            setTimeout(() => bot.sendMessage(id,'НИЧЕГО СЕБЕ'), 1000)
            setTimeout(() => bot.sendMessage(id,'ц да дезар 😌'), 2000)
        }
        if((msg.text[0] == 'х' || msg.text[0] == 'Х') && (msg.text[msg.text.length - 1] == 'е' || msg.text[msg.text.length - 1] == 'Е')){
            let num = Math.floor(Math.random() * 10)
            if (num % 2 == 0){
                setTimeout(() => bot.sendMessage(id,'хаа'), 1500)
            }
            else{
                setTimeout(() => bot.sendMessage(id,'ха'), 1500)
            }
        }
        if(msg.text == 'давай' || msg.text == 'давай)'){
            setTimeout(() => bot.sendMessage(id, `ху ${msg.text}`), 1500)
            setTimeout(() => bot.sendMessage(id, 'а спокойной ночи??'), 3000)
        }
        if(msg.text == 'спокойной ночи)' || msg.text == 'спокойной ночи' || msg.text == 'хороших снов)' || msg.text == 'хороших снов'){
            let num = Math.floor(Math.random() * 10)
            if (num % 2 == 0){
                setTimeout(() => bot.sendMessage(id, `хороших снов)`), 1500)
            }
            else{
                setTimeout(() => bot.sendMessage(id, `Спокойной ночи)`), 1500)
            }
        }
    }
    //Когда пишет она:
    if(msg.from.first_name != 'John'){
        if((msg.text.length == 6) && (msg.text[0] == 'х' || msg.text[0] == 'Х')) {
            setTimeout(() => bot.sendMessage(id,'ты кто?'), 1000)
            setTimeout(() => bot.sendMessage(id,'Извините?'), 2000)
            setTimeout(() => bot.sendMessage(id,'вы номером ошиблись?'), 3000)
        }
        if(msg.text == 'Абдул-Малик' || msg.text == 'Усман' || msg.text == 'усман' || msg.text == 'Хадишт' || msg.text == 'хадишт'){
            setTimeout(() => bot.sendMessage(id, `никакого ${msg.text}а в моем окружении нет`), 1000)
            setTimeout(() => bot.sendMessage(id,'Прошу простить'), 3000)
            setTimeout(() => bot.sendMessage(id,'До свидания'), 4000)
            setTimeout(() => bot.sendMessage(id,'Всего хорошего'), 8000)
        }
        if(msg.text == 'Можете назвать своё имя?' || msg.text == 'Вы кто?' || msg.text == 'вы кто'){
            setTimeout(() => bot.sendMessage(id,'Фатима'), 1000)
        }
    }

})




